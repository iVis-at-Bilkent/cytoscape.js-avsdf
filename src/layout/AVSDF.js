/**
 * This class implements the overall layout process for the
 * Adjacent Vertex with Smallest Degree First (AVSDF) algorithm.
 * (Circular Drawing Algorithm by Hongmei He & Ondrej Sýkora).
 *
 * @author Doruk Çakmakçı
 * @author Alihan Okka
 *
 * Copyright: i-Vis (Information Visualization) Research Lab, Bilkent University, 2019 - present
*/

// cytosscape.js-avsdf REQUIRES avsdf-base library elements
const AVSDFLayout = require('avsdf-base').AVSDFLayout;
const AVSDFNode = require('avsdf-base').AVSDFNode;
const AVSDFConstants = require('avsdf-base').AVSDFConstants;
const PointD = require('avsdf-base').layoutBase.PointD;
const DimensionD = require('avsdf-base').layoutBase.DimensionD;

// Cytoscape-extention template requirements
// More details can be found in NPM 'slush-cytoscape-extension' package
const assign = require('../assign');
const ContinuousLayout = require('./continuous-base');

const isFn = fn => typeof fn === 'function';
const optFn = ( opt, ele ) => {
  if( isFn( opt ) ){
    return opt( ele );
  } else {
    return opt;
  }
};

let defaults = {
  ready: function () {}, // Called on `layoutready`
  stop: function () {}, // Called on `layoutstop`
  refresh: 30,  // number of ticks per frame; higher is faster but more jerky
  fit: true,   // Whether to fit the network view after when done
  padding: 10,   // Padding on fit
  randomize: false,   // Whether to enable incremental mode
  animate: 'end',   // Type of layout animation. The option set is {'during', 'end', false}
  animationDuration: 500,   // Duration for animate:end
  nodeSeparation: 60, // How apart the nodes are
};

/**
 *  This is the main class that does all the functionality.
 *  The class is utilized by functions in the continuous-base folder.
 */
class AVSDF extends ContinuousLayout {
  constructor( options ){
    super( assign( {}, defaults, options ) );

    // Whether node separation value is used
    if(options.nodeSeparation != null)
      AVSDFConstants.DEFAULT_NODE_SEPARATION = options.nodeSeparation;
    else
      AVSDFConstants.DEFAULT_NODE_SEPARATION = defaults.nodeSeparation;
  }

  /**
   *  Initializing AVSDF elements and arranging the nodes of the graph around the circle
   */
  prerun(){
    let state = this.state; // options object combined with current state

    // Initialize AVSDF elements and their requirements
    let avsdfLayout = this.avsdfLayout = new AVSDFLayout();
    let graphManager = this.graphManager = avsdfLayout.newGraphManager();
    let root = this.root = graphManager.addRoot();
    let nodes = state.nodes;
    let edges = state.edges;

    // Getting nodes of cytoscape and converting it to AVSDF structure
    this.idToLNode = {};
    this.processChildrenList(root, nodes, avsdfLayout);

    // Getting edges of cytoscape and transfering it to GraphManager
    for (let i = 0; i < edges.length; i++)
    {
      let edge = edges[i];
      let sourceNode = this.idToLNode[edge.data("source")];
      let targetNode = this.idToLNode[edge.data("target")];
      if(sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length === 0)
      {
        let e1 = graphManager.add(avsdfLayout.newEdge(), sourceNode, targetNode);
        e1.id = edge.id();
      }
    }

    // Running the AVSDF layout.
    // Note: This function doesn't do post-processing. Plus, nodes have to be positioned.
    // See AVSDFLayout for details.
    avsdfLayout.layout();

    // We need to calculate the initial circle position if we want to render it
    avsdfLayout.updateNodeCoordinates();

    // Post process is iterated over the sorted list of vertex degrees (descending)
    this.sortedByDegreeList = avsdfLayout.initPostProcess();
  }

  /**
   *  Runs this in each iteration
   */
  tick(){
    let state = this.state;
    let self = this;

    // This function is used for getting coordinates from AVSDF elements and passing it to cytoscape
    let positions = this.avsdfLayout.getPositionsData();
    state.nodes.forEach( n => {
      let s = this.getScratch(n);

      // example : put node at random position
      s.x = positions[n.data('id')].x;
      s.y = positions[n.data('id')].y;
    } );

    if(state.tickIndex >= state.nodes.size())
      return true;

      this.avsdfLayout.oneStepPostProcess(this.sortedByDegreeList[state.tickIndex]);
      this.avsdfLayout.updateNodeAngles();
      this.avsdfLayout.updateNodeCoordinates();
  }

  /**
   *  Runs this function after the layout is done ticking
   */
  postrun(){
  }

  /**
   *  Clean up any object refs that could prevent garbage collection, etc.
   */
  destroy(){
    super.destroy();
    return this;
  }

  /**
   *  Transition from cytoscape nodes to AVSDF elements
   */
  processChildrenList(parent, children, layout) {
    let size = children.length;
    for (let i = 0; i < size; i++)
    {
      let theChild = children[i];
      let theNode;

      //Label dimensions are NOT included when calculating node dimensions
      let dimensions = theChild.layoutDimensions({
        nodeDimensionsIncludeLabels: false
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
  }
}

module.exports = AVSDF;
