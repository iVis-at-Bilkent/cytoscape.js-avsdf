let Layout = require('layout-base').Layout;
let Quicksort = require('layout-base').Quicksort;
const AVSDFConstants = require('./AVSDFConstants.js');

let AVSDFCircle = require('./AVSDFCircle.js');
let AVSDFNode = require('./AVSDFNode.js');
let AVSDFEdge = require('./AVSDFEdge.js');

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

// Constructor
function AVSDFLayout()
{
    Layout.call(this);
    this.nodeSeparation = AVSDFConstants.DEFAULT_NODE_SEPARATION;
}

AVSDFLayout.prototype = Object.create(Layout.prototype);

for (let property in Layout)
{
    AVSDFLayout[property] = Layout[property];
}

AVSDFLayout.prototype.newGraph = function (vObject)
{
    return new AVSDFCircle(null, this.graphManager, vObject);
};

AVSDFLayout.prototype.newNode = function (vNode)
{
    return new AVSDFNode(this.graphManager, vNode);
};

AVSDFLayout.prototype.newEdge = function (vEdge)
{
    return new AVSDFEdge(null, null, vEdge);
};

AVSDFLayout.prototype.initParameters = function()
{
    Layout.prototype.initParameters.call(this, arguments);

    if (!this.isSubLayout)
    {
        this.defaultNodeSeparation = AVSDFConstants.DEFAULT_NODE_SEPARATION;
        // TODO change this default option with user generated option
        this.nodeSeparation = this.defaultNodeSeparation;
    }
};

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the node separation value
AVSDFLayout.prototype.getNodeSeparation = function()
{
    return this.nodeSeparation;
};

// This function returns the position data for all nodes
AVSDFLayout.prototype.getPositionsData = function()
{
    var allNodes = this.graphManager.getAllNodes();
    var pData = {};

    for (var i = 0; i < allNodes.length; i++)
    {
        var rect = allNodes[i].rect;
        var id = allNodes[i].id;

        pData[id] = {
            id: id,
            x: rect.getCenterX(),
            y: rect.getCenterY(),
            w: rect.width,
            h: rect.height
        };
    }

    return pData;
};

// This function sets the node separation value
AVSDFLayout.prototype.setNodeSeparation = function (nodeSeparation)
{
    this.nodeSeparation = nodeSeparation;
};

// -----------------------------------------------------------------------------
// Section: Layout Related
// -----------------------------------------------------------------------------

// This function performs layout on constructed l-level graph.
// It returns true on success, false otherwise
AVSDFLayout.prototype.layout = function ()
{
    let self = this;

    // Check if graph contains any compound structures
    if (self.graphManager.getGraphs().length > 1)
    {
        return false;
    }

    let clusterGraph = self.graphManager.getRoot();

    clusterGraph.setNodeSeparation(self.nodeSeparation);
    clusterGraph.calculateRadius();
    clusterGraph.initOrdering();

    while (!clusterGraph.hasFinishedOrdering())
    {
        let node = clusterGraph.findNodeToPlace();
        clusterGraph.putInOrder(node);
    }

    self.postProcess(clusterGraph);
    clusterGraph.correctAngles();

    clusterGraph.getNodes().forEach(
        (node) => node.setCenter(clusterGraph.getCenterX() + clusterGraph.getRadius() * Math.cos(node.getAngle()), clusterGraph.getCenterY() +
                                 clusterGraph.getRadius() * Math.sin(node.getAngle()))
    );




    return true;
};

// This method performs layout on constructed l-level graph. It returns true
// on success, false otherwise.
AVSDFLayout.prototype.postProcess = function (circle)
{
    circle.calculateEdgeCrossingsOfNodes();

    let list = circle.getNodes();

    let comparisonFunction = function(a,b)
    {
        return b.getTotalCrossingOfEdges() > a.getTotalCrossingOfEdges();
    };

    Quicksort.quicksort(list, comparisonFunction); // TODO check for bugs



    for (let i = 0; i < list.length; i++)
    {
        let node = list[i];
        let currentCrossingNumber = node.getTotalCrossingOfEdges();
        let newCrossingNumber;
        let neighbors = node.getNeighborsList();

        for (let j = 0; j < neighbors.length; j++)
        {
            let neighbor = neighbors[j];

            let newIndex = (neighbor.getIndex() + 1) % circle.getSize();
            let oldIndex = node.getIndex();

            if (oldIndex !== newIndex)
            {
                node.setIndex(newIndex);

                if (oldIndex < node.getIndex())
                {
                    oldIndex += circle.getSize();
                }

                let index = node.getIndex();

                while (index < oldIndex)
                {
                    let temp = circle.getOrder()[index % circle.getSize()];
                    temp.setIndex((temp.getIndex() + 1) % circle.getSize());
                }

                node.calculateTotalCrossing();
                newCrossingNumber = node.getTotalCrossingOfEdges();

                if (newCrossingNumber >= currentCrossingNumber)
                {
                    circle.loadOldIndicesOfNodes();
                }
                else
                {
                    circle.reOrderVertices();
                    currentCrossingNumber = newCrossingNumber;
                }
            }
        }
    }
};

module.exports = AVSDFLayout;