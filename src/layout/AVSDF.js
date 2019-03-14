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

//cytosscape.js-avsdf REQUIRES avsdf-base library elements
const AVSDFLayout = require('avsdf-base').AVSDFLayout;
const AVSDFNode = require('avsdf-base').AVSDFNode;
const AVSDFConstants = require('avsdf-base').AVSDFConstants;
const PointD = require('avsdf-base').layoutBase.PointD;
const DimensionD = require('avsdf-base').layoutBase.DimensionD;

//Cytoscape-extention template requirements
//More details can be found in NPM 'slush-cytoscape-extension' package
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
  randomize: true,   // Whether to enable incremental mode
  numIter: undefined,   // Maximum number of iterations to perform
  animate: 'end',   // Type of layout animation. The option set is {'during', 'end', false}
  animationDuration: 500,   // Duration for animate:end
  nodeSeparation: '60',

  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,

  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10
};

class AVSDF extends ContinuousLayout {
  constructor( options ){
    super( assign( {}, defaults, options ) );

    if(options.nodeSeparation != null)
      AVSDFConstants.DEFAULT_NODE_SEPARATION = options.nodeSeparation;
    else
      AVSDFConstants.DEFAULT_NODE_SEPARATION = defaults.nodeSeparation;
  }

  //Initializing AVSDF elements and arranging the nodes of the graph around the circle
  prerun(){
    let state = this.state; // options object combined with current state

    let self = this;
    let options = this.options; // TODO Do we need it?

    //Initialize AVSDF elements
    let avsdfLayout = this.avsdfLayout = new AVSDFLayout();
    let graphManager = this.graphManager = avsdfLayout.newGraphManager();

    let nodes = state.nodes;
    let edges = state.edges;

    let root = this.root = graphManager.addRoot();
    this.idToLNode = {};
    //Getting nodes of cytoscape and converting it to AVSDF structure
    this.processChildrenList(root, nodes, avsdfLayout);

    //Adding edges of cytoscape and transfering it to GraphManager
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

    avsdfLayout.layout(); //TODO Change name?

    self.options.eles.nodes().layoutPositions(self, self.options, getPositions);

    function getPositions(ele, i)
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
    }
  }

  // run this each iteraction
  tick(){
    let state = this.state;
    let isDone = true;

    // TODO update state for this iteration

    /*
    state.nodes.forEach( n => {
      let s = this.getScratch(n);

      // example : put node at random position
      s.x = Math.random() * 100;
      s.y = Math.random() * 100;
    } );
    */

    return isDone;
  }

  // run this function after the layout is done ticking
  postrun(){

  }

  // clean up any object refs that could prevent garbage collection, etc.
  destroy(){
    super.destroy();

    return this;
  }

  //Transition from cytoscape nodes to AVSDF elements
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
