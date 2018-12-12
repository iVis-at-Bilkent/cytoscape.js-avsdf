'use strict';

let AVSDFLayout = require('./AVSDFLayout');
let AVSDFNode = require('./AVSDFNode');
var PointD = require('layout-base').PointD;
var DimensionD = require('layout-base').DimensionD;

let defaults = {

    // Called on `layoutready`
    ready: function () {},

    // Called on `layoutstop`
    stop: function () {},

    // number of ticks per frame; higher is faster but more jerky
    refresh: 30,

    // Whether to fit the network view after when done
    fit: true,

    // Padding on fit
    padding: 10,

    // Whether to enable incremental mode
    randomize: true,

    // Maximum number of iterations to perform
    numIter: 2500,

    // Type of layout animation. The option set is {'during', 'end', false}
    animate: 'end',

    // Duration for animate:end
    animationDuration: 500,

    // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
    tilingPaddingVertical: 10,

    // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
    tilingPaddingHorizontal: 10,
};

function extend(defaults, options)
{
    let obj = {};

    for (let i in defaults)
    {
        obj[i] = defaults[i];
    }

    for (let i in options)
    {
        obj[i] = options[i];
    }

    return obj;
}

function _AVSDFLayout(_options)
{
    this.options = extend(defaults, _options);
}
// TODO getUserOptions
_AVSDFLayout.prototype.run = function()
{

    let ready;
    let frameId;
    let options = this.options;
    this.idToLNode = {};
    let layout = this.layout = new AVSDFLayout();
    let self = this;


    self.stopped = false;

    this.cy = this.options.cy;

    this.cy.trigger({ type: 'layoutstart', layout: this });

    let gm = layout.newGraphManager();
    this.gm = gm;

    let nodes = this.options.eles.nodes();
    let edges = this.options.eles.edges();

    this.root = gm.addRoot();
    this.processChildrenList(this.root, nodes, layout);

    for (let i = 0; i < edges.length; i++)
    {
        let edge = edges[i];
        let sourceNode = this.idToLNode[edge.data("source")];
        let targetNode = this.idToLNode[edge.data("target")];
        if(sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length === 0)
        {
            let e1 = gm.add(layout.newEdge(), sourceNode, targetNode);
            e1.id = edge.id();
        }
    }

    let getPositions = function(ele, i)
    {
        if(typeof ele === "number")
        {
            ele = i;
        }
        let theId = ele.data('id');
        let lNode = self.idToLNode[theId];

        return {
            x: lNode.getRect().getCenterX(),
            y: lNode.getRect().getCenterY()
        };
    };

    // Reposition nodes in iterations animatedly
    let iterateAnimated = function ()
    {
        // Things to perform after nodes are repositioned on screen
        let afterReposition = function()
        {
            if (options.fit)
            {
                options.cy.fit(options.eles.nodes(), options.padding);
            }

            if (!ready)
            {
                ready = true;
                self.cy.one('layoutready', options.ready);
                self.cy.trigger({type: 'layoutready', layout: self});
            }
        };

        /*
        let ticksPerFrame = self.options.refresh;
        let isDone;

        for( let i = 0; i < ticksPerFrame && !isDone; i++ ){
            isDone = self.stopped; // || self.layout.tick()
        }
        */

        // If layout is done
        if (self.stopped)
        {
            // If the layout is not a sublayout and it is successful perform post layout.
            if (layout.checkLayoutSuccess() && !layout.isSubLayout)
            {
                layout.doPostLayout();
            }

            /*
            // If layout has a tilingPostLayout function property call it.
            if (layout.tilingPostLayout)
            {
                layout.tilingPostLayout();
            }
            */

            layout.isLayoutFinished = true;

            self.options.eles.nodes().positions(getPositions);

            afterReposition();

            // trigger layoutstop when the layout stops (e.g. finishes)
            self.cy.one('layoutstop', self.options.stop);
            self.cy.trigger({ type: 'layoutstop', layout: self });

            if (frameId)
            {
                cancelAnimationFrame(frameId);
            }

            ready = false;
            return;
        }

        let animationData = self.layout.getPositionsData(); // Get positions of layout nodes

        // Position nodes, for the nodes whose id does not included in data (because they are removed from their parents and included in dummy compounds)
        // use position of their ancestors or dummy ancestors
        options.eles.nodes().positions(function (ele, i)
        {
            if (typeof ele === "number")
            {
                ele = i;
            }
            let theId = ele.id();
            let pNode = animationData[theId];
            if(pNode != null)
            {
                return {
                    x: pNode.x,
                    y: pNode.y
                };
            }
            else
            {
                return {
                    x: ele.position('x'),
                    y: ele.position('y')
                };
            }

        });

        afterReposition();

        frameId = requestAnimationFrame(iterateAnimated);
    };


    // Listen 'layoutstarted' event and start animated iteration if animate option is 'during'

    layout.addListener('layoutstarted', function () {
        if (self.options.animate === 'during') {
            frameId = requestAnimationFrame(iterateAnimated);
        }
    });

    layout.layout(); // Run avsdf layout

    /*
     * If animate option is not 'during' ('end' or false) perform these here (If it is 'during' similar things are already performed)
     */
    if(this.options.animate !== "during"){
        self.options.eles.nodes().not(":parent").layoutPositions(self, self.options, getPositions); // Use layout positions to reposition the nodes it considers the options parameter
        ready = false;
    }

    return this; // chaining
};

_AVSDFLayout.prototype.processChildrenList = function (parent, children, layout)
{
    let size = children.length;
    for (let i = 0; i < size; i++)
    {
        let theChild = children[i];
        let theNode;

        let dimensions = theChild.layoutDimensions({
            nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
        });

        if (theChild.outerWidth() != null && theChild.outerHeight() != null)
        {
            theNode = parent.add(new AVSDFNode(layout.graphManager,
                null,
                new PointD(theChild.position('x') - dimensions.w / 2,
                    theChild.position('y') - dimensions.h / 2),
                new DimensionD(parseFloat(dimensions.w),
                    parseFloat(dimensions.h))));
        }
        else
        {
            theNode = parent.add(new AVSDFNode(this.graphManager));
        }

        // Attach id to the layout node
        theNode.id = theChild.data("id");

        // Attach the paddings of cy node to layout node
        theNode.paddingLeft = parseInt( theChild.css('padding') );
        theNode.paddingTop = parseInt( theChild.css('padding') );
        theNode.paddingRight = parseInt( theChild.css('padding') );
        theNode.paddingBottom = parseInt( theChild.css('padding') );

        // Map the layout node
        this.idToLNode[theChild.data("id")] = theNode;

        if (isNaN(theNode.rect.x))
        {
            theNode.rect.x = 0;
        }

        if (isNaN(theNode.rect.y))
        {
            theNode.rect.y = 0;
        }

    }
};


module.exports = function get(cytoscape)
{
    return _AVSDFLayout;
};


