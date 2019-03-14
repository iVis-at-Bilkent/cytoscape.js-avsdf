(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeAvsdf"] = factory();
	else
		root["cytoscapeAvsdf"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["layoutBase"] = factory();
	else
		root["layoutBase"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let layoutBase = function () {
  return;
};

layoutBase.FDLayout = __webpack_require__(1);
layoutBase.FDLayoutConstants = __webpack_require__(22);
layoutBase.FDLayoutEdge = __webpack_require__(23);
layoutBase.FDLayoutNode = __webpack_require__(24);
layoutBase.DimensionD = __webpack_require__(25);
layoutBase.HashMap = __webpack_require__(4);
layoutBase.HashSet = __webpack_require__(17);
layoutBase.IGeometry = __webpack_require__(9);
layoutBase.IMath = __webpack_require__(10);
layoutBase.Integer = __webpack_require__(12);
layoutBase.Point = __webpack_require__(18);
layoutBase.PointD = __webpack_require__(16);
layoutBase.RandomSeed = __webpack_require__(15);
layoutBase.RectangleD = __webpack_require__(14);
layoutBase.Transform = __webpack_require__(20);
layoutBase.UniqueIDGeneretor = __webpack_require__(5);
layoutBase.Quicksort = __webpack_require__(26);
layoutBase.LinkedList = __webpack_require__(19);
layoutBase.LGraphObject = __webpack_require__(8);
layoutBase.LGraph = __webpack_require__(11);
layoutBase.LEdge = __webpack_require__(7);
layoutBase.LGraphManager = __webpack_require__(6);
layoutBase.LNode = __webpack_require__(13);
layoutBase.Layout = __webpack_require__(2);
layoutBase.LayoutConstants = __webpack_require__(3);

module.exports = layoutBase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Layout = __webpack_require__(2);
var FDLayoutConstants = __webpack_require__(22);
var LayoutConstants = __webpack_require__(3);
var IGeometry = __webpack_require__(9);
var IMath = __webpack_require__(10);

function FDLayout() {
  Layout.call(this);

  this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
  this.idealEdgeLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
  this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
  this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
  this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
  this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
  this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.totalDisplacement = 0.0;
  this.oldTotalDisplacement = 0.0;
  this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
}

FDLayout.prototype = Object.create(Layout.prototype);

for (var prop in Layout) {
  FDLayout[prop] = Layout[prop];
}

FDLayout.prototype.initParameters = function () {
  Layout.prototype.initParameters.call(this, arguments);

  if (this.layoutQuality == LayoutConstants.DRAFT_QUALITY) {
    this.displacementThresholdPerNode += 0.30;
    this.maxIterations *= 0.8;
  } else if (this.layoutQuality == LayoutConstants.PROOF_QUALITY) {
    this.displacementThresholdPerNode -= 0.30;
    this.maxIterations *= 1.2;
  }

  this.totalIterations = 0;
  this.notAnimatedIterations = 0;

  this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;

  this.grid = [];
};

FDLayout.prototype.calcIdealEdgeLengths = function () {
  var edge;
  var lcaDepth;
  var source;
  var target;
  var sizeOfSourceInLca;
  var sizeOfTargetInLca;

  var allEdges = this.getGraphManager().getAllEdges();
  for (var i = 0; i < allEdges.length; i++) {
    edge = allEdges[i];

    edge.idealLength = this.idealEdgeLength;

    if (edge.isInterGraph) {
      source = edge.getSource();
      target = edge.getTarget();

      sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
      sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();

      if (this.useSmartIdealEdgeLengthCalculation) {
        edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
      }

      lcaDepth = edge.getLca().getInclusionTreeDepth();

      edge.idealLength += FDLayoutConstants.DEFAULT_EDGE_LENGTH * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
    }
  }
};

FDLayout.prototype.initSpringEmbedder = function () {

  if (this.incremental) {
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
  } else {
    this.coolingFactor = 1.0;
    this.initialCoolingFactor = 1.0;
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
  }

  this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);

  this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;

  this.repulsionRange = this.calcRepulsionRange();
};

FDLayout.prototype.calcSpringForces = function () {
  var lEdges = this.getAllEdges();
  var edge;

  for (var i = 0; i < lEdges.length; i++) {
    edge = lEdges[i];

    this.calcSpringForce(edge, edge.idealLength);
  }
};

FDLayout.prototype.calcRepulsionForces = function (gridUpdateAllowed = true, forceToNodeSurroundingUpdate = false) {
  var i, j;
  var nodeA, nodeB;
  var lNodes = this.getAllNodes();
  var processedNodeSet;

  if (this.useFRGridVariant) {
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed) {
      this.updateGrid();
    }

    processedNodeSet = new Set();

    // calculate repulsion forces between each nodes and its surrounding
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.calculateRepulsionForceOfANode(nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate);
      processedNodeSet.add(nodeA);
    }
  } else {
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];

      for (j = i + 1; j < lNodes.length; j++) {
        nodeB = lNodes[j];

        // If both nodes are not members of the same graph, skip.
        if (nodeA.getOwner() != nodeB.getOwner()) {
          continue;
        }

        this.calcRepulsionForce(nodeA, nodeB);
      }
    }
  }
};

FDLayout.prototype.calcGravitationalForces = function () {
  var node;
  var lNodes = this.getAllNodesToApplyGravitation();

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    this.calcGravitationalForce(node);
  }
};

FDLayout.prototype.moveNodes = function () {
  var lNodes = this.getAllNodes();
  var node;

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    node.move();
  }
};

FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
  var sourceNode = edge.getSource();
  var targetNode = edge.getTarget();

  var length;
  var springForce;
  var springForceX;
  var springForceY;

  // Update edge length
  if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
    edge.updateLengthSimple();
  } else {
    edge.updateLength();

    if (edge.isOverlapingSourceAndTarget) {
      return;
    }
  }

  length = edge.getLength();

  // Calculate spring forces
  springForce = this.springConstant * (length - idealLength);

  // Project force onto x and y axes
  springForceX = springForce * (edge.lengthX / length);
  springForceY = springForce * (edge.lengthY / length);

  // Apply forces on the end nodes
  sourceNode.springForceX += springForceX;
  sourceNode.springForceY += springForceY;
  targetNode.springForceX -= springForceX;
  targetNode.springForceY -= springForceY;
};

FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
  var rectA = nodeA.getRect();
  var rectB = nodeB.getRect();
  var overlapAmount = new Array(2);
  var clipPoints = new Array(4);
  var distanceX;
  var distanceY;
  var distanceSquared;
  var distance;
  var repulsionForce;
  var repulsionForceX;
  var repulsionForceY;

  if (rectA.intersects(rectB)) // two nodes overlap
    {
      // calculate separation amount in x and y directions
      IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);

      repulsionForceX = 2 * overlapAmount[0];
      repulsionForceY = 2 * overlapAmount[1];

      var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);

      // Apply forces on the two nodes
      nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
      nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
      nodeB.repulsionForceX += childrenConstant * repulsionForceX;
      nodeB.repulsionForceY += childrenConstant * repulsionForceY;
    } else // no overlap
    {
      // calculate distance

      if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
        {
          distanceX = rectB.getCenterX() - rectA.getCenterX();
          distanceY = rectB.getCenterY() - rectA.getCenterY();
        } else // use clipping points
        {
          IGeometry.getIntersection(rectA, rectB, clipPoints);

          distanceX = clipPoints[2] - clipPoints[0];
          distanceY = clipPoints[3] - clipPoints[1];
        }

      // No repulsion range. FR grid variant should take care of this.
      if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      distanceSquared = distanceX * distanceX + distanceY * distanceY;
      distance = Math.sqrt(distanceSquared);

      repulsionForce = this.repulsionConstant * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;

      // Project force onto x and y axes
      repulsionForceX = repulsionForce * distanceX / distance;
      repulsionForceY = repulsionForce * distanceY / distance;

      // Apply forces on the two nodes    
      nodeA.repulsionForceX -= repulsionForceX;
      nodeA.repulsionForceY -= repulsionForceY;
      nodeB.repulsionForceX += repulsionForceX;
      nodeB.repulsionForceY += repulsionForceY;
    }
};

FDLayout.prototype.calcGravitationalForce = function (node) {
  var ownerGraph;
  var ownerCenterX;
  var ownerCenterY;
  var distanceX;
  var distanceY;
  var absDistanceX;
  var absDistanceY;
  var estimatedSize;
  ownerGraph = node.getOwner();

  ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
  ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
  distanceX = node.getCenterX() - ownerCenterX;
  distanceY = node.getCenterY() - ownerCenterY;
  absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
  absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;

  if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX;
        node.gravitationForceY = -this.gravityConstant * distanceY;
      }
    } else // inside a compound
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
        node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
      }
    }
};

FDLayout.prototype.isConverged = function () {
  var converged;
  var oscilating = false;

  if (this.totalIterations > this.maxIterations / 3) {
    oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
  }

  converged = this.totalDisplacement < this.totalDisplacementThreshold;

  this.oldTotalDisplacement = this.totalDisplacement;

  return converged || oscilating;
};

FDLayout.prototype.animate = function () {
  if (this.animationDuringLayout && !this.isSubLayout) {
    if (this.notAnimatedIterations == this.animationPeriod) {
      this.update();
      this.notAnimatedIterations = 0;
    } else {
      this.notAnimatedIterations++;
    }
  }
};

//This method calculates the number of children (weight) for all nodes
FDLayout.prototype.calcNoOfChildrenForAllNodes = function () {
  var node;
  var allNodes = this.graphManager.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    node = allNodes[i];
    node.noOfChildren = node.getNoOfChildren();
  }
};

// -----------------------------------------------------------------------------
// Section: FR-Grid Variant Repulsion Force Calculation
// -----------------------------------------------------------------------------

FDLayout.prototype.calcGrid = function (graph) {

  var sizeX = 0;
  var sizeY = 0;

  sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
  sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));

  var grid = new Array(sizeX);

  for (var i = 0; i < sizeX; i++) {
    grid[i] = new Array(sizeY);
  }

  for (var i = 0; i < sizeX; i++) {
    for (var j = 0; j < sizeY; j++) {
      grid[i][j] = new Array();
    }
  }

  return grid;
};

FDLayout.prototype.addNodeToGrid = function (v, left, top) {

  var startX = 0;
  var finishX = 0;
  var startY = 0;
  var finishY = 0;

  startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
  finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
  startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
  finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));

  for (var i = startX; i <= finishX; i++) {
    for (var j = startY; j <= finishY; j++) {
      this.grid[i][j].push(v);
      v.setGridCoordinates(startX, finishX, startY, finishY);
    }
  }
};

FDLayout.prototype.updateGrid = function () {
  var i;
  var nodeA;
  var lNodes = this.getAllNodes();

  this.grid = this.calcGrid(this.graphManager.getRoot());

  // put all nodes to proper grid cells
  for (i = 0; i < lNodes.length; i++) {
    nodeA = lNodes[i];
    this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
  }
};

FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet, gridUpdateAllowed, forceToNodeSurroundingUpdate) {

  if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && gridUpdateAllowed || forceToNodeSurroundingUpdate) {
    var surrounding = new Set();
    nodeA.surrounding = new Array();
    var nodeB;
    var grid = this.grid;

    for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
      for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
        if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
          for (var k = 0; k < grid[i][j].length; k++) {
            nodeB = grid[i][j][k];

            // If both nodes are not members of the same graph, 
            // or both nodes are the same, skip.
            if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
              continue;
            }

            // check if the repulsion force between
            // nodeA and nodeB has already been calculated
            if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
              var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
              var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);

              // if the distance between nodeA and nodeB 
              // is less then calculation range
              if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                //then add nodeB to surrounding of nodeA
                surrounding.add(nodeB);
              }
            }
          }
        }
      }
    }

    nodeA.surrounding = [...surrounding];
  }
  for (i = 0; i < nodeA.surrounding.length; i++) {
    this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
  }
};

FDLayout.prototype.calcRepulsionRange = function () {
  return 0.0;
};

module.exports = FDLayout;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(3);
var HashMap = __webpack_require__(4);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(13);
var LEdge = __webpack_require__(7);
var LGraph = __webpack_require__(11);
var PointD = __webpack_require__(16);
var Transform = __webpack_require__(20);
var Emitter = __webpack_require__(21);
var HashSet = __webpack_require__(17);

function Layout(isRemoteUse) {
  Emitter.call(this);

  //Layout Quality: 0:proof, 1:default, 2:draft
  this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
  //Whether layout should create bendpoints as needed or not
  this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  //Whether layout should be incremental or not
  this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
  //Whether we animate from before to after layout node positions
  this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
  //Whether we animate the layout process or not
  this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
  //Number iterations that should be done between two successive animations
  this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
  /**
   * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
   * they are, both spring and repulsion forces between two leaf nodes can be
   * calculated without the expensive clipping point calculations, resulting
   * in major speed-up.
   */
  this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  /**
   * This is used for creation of bendpoints by using dummy nodes and edges.
   * Maps an LEdge to its dummy bendpoint path.
   */
  this.edgeToDummyNodes = new HashMap();
  this.graphManager = new LGraphManager(this);
  this.isLayoutFinished = false;
  this.isSubLayout = false;
  this.isRemoteUse = false;

  if (isRemoteUse != null) {
    this.isRemoteUse = isRemoteUse;
  }
}

Layout.RANDOM_SEED = 1;

Layout.prototype = Object.create(Emitter.prototype);

Layout.prototype.getGraphManager = function () {
  return this.graphManager;
};

Layout.prototype.getAllNodes = function () {
  return this.graphManager.getAllNodes();
};

Layout.prototype.getAllEdges = function () {
  return this.graphManager.getAllEdges();
};

Layout.prototype.getAllNodesToApplyGravitation = function () {
  return this.graphManager.getAllNodesToApplyGravitation();
};

Layout.prototype.newGraphManager = function () {
  var gm = new LGraphManager(this);
  this.graphManager = gm;
  return gm;
};

Layout.prototype.newGraph = function (vGraph) {
  return new LGraph(null, this.graphManager, vGraph);
};

Layout.prototype.newNode = function (vNode) {
  return new LNode(this.graphManager, vNode);
};

Layout.prototype.newEdge = function (vEdge) {
  return new LEdge(null, null, vEdge);
};

Layout.prototype.checkLayoutSuccess = function () {
  return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
};

Layout.prototype.runLayout = function () {
  this.isLayoutFinished = false;

  if (this.tilingPreLayout) {
    this.tilingPreLayout();
  }

  this.initParameters();
  var isLayoutSuccessfull;

  if (this.checkLayoutSuccess()) {
    isLayoutSuccessfull = false;
  } else {
    isLayoutSuccessfull = this.layout();
  }

  if (LayoutConstants.ANIMATE === 'during') {
    // If this is a 'during' layout animation. Layout is not finished yet. 
    // We need to perform these in index.js when layout is really finished.
    return false;
  }

  if (isLayoutSuccessfull) {
    if (!this.isSubLayout) {
      this.doPostLayout();
    }
  }

  if (this.tilingPostLayout) {
    this.tilingPostLayout();
  }

  this.isLayoutFinished = true;

  return isLayoutSuccessfull;
};

/**
 * This method performs the operations required after layout.
 */
Layout.prototype.doPostLayout = function () {
  //assert !isSubLayout : "Should not be called on sub-layout!";
  // Propagate geometric changes to v-level objects
  if (!this.incremental) {
    this.transform();
  }
  this.update();
};

/**
 * This method updates the geometry of the target graph according to
 * calculated layout.
 */
Layout.prototype.update2 = function () {
  // update bend points
  if (this.createBendsAsNeeded) {
    this.createBendpointsFromDummyNodes();

    // reset all edges, since the topology has changed
    this.graphManager.resetAllEdges();
  }

  // perform edge, node and root updates if layout is not called
  // remotely
  if (!this.isRemoteUse) {
    // update all edges
    var edge;
    var allEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
      //      this.update(edge);
    }

    // recursively update nodes
    var node;
    var nodes = this.graphManager.getRoot().getNodes();
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      //      this.update(node);
    }

    // update root graph
    this.update(this.graphManager.getRoot());
  }
};

Layout.prototype.update = function (obj) {
  if (obj == null) {
    this.update2();
  } else if (obj instanceof LNode) {
    var node = obj;
    if (node.getChild() != null) {
      // since node is compound, recursively update child nodes
      var nodes = node.getChild().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        update(nodes[i]);
      }
    }

    // if the l-level node is associated with a v-level graph object,
    // then it is assumed that the v-level node implements the
    // interface Updatable.
    if (node.vGraphObject != null) {
      // cast to Updatable without any type check
      var vNode = node.vGraphObject;

      // call the update method of the interface
      vNode.update(node);
    }
  } else if (obj instanceof LEdge) {
    var edge = obj;
    // if the l-level edge is associated with a v-level graph object,
    // then it is assumed that the v-level edge implements the
    // interface Updatable.

    if (edge.vGraphObject != null) {
      // cast to Updatable without any type check
      var vEdge = edge.vGraphObject;

      // call the update method of the interface
      vEdge.update(edge);
    }
  } else if (obj instanceof LGraph) {
    var graph = obj;
    // if the l-level graph is associated with a v-level graph object,
    // then it is assumed that the v-level object implements the
    // interface Updatable.

    if (graph.vGraphObject != null) {
      // cast to Updatable without any type check
      var vGraph = graph.vGraphObject;

      // call the update method of the interface
      vGraph.update(graph);
    }
  }
};

/**
 * This method is used to set all layout parameters to default values
 * determined at compile time.
 */
Layout.prototype.initParameters = function () {
  if (!this.isSubLayout) {
    this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  }

  if (this.animationDuringLayout) {
    this.animationOnLayout = false;
  }
};

Layout.prototype.transform = function (newLeftTop) {
  if (newLeftTop == undefined) {
    this.transform(new PointD(0, 0));
  } else {
    // create a transformation object (from Eclipse to layout). When an
    // inverse transform is applied, we get upper-left coordinate of the
    // drawing or the root graph at given input coordinate (some margins
    // already included in calculation of left-top).

    var trans = new Transform();
    var leftTop = this.graphManager.getRoot().updateLeftTop();

    if (leftTop != null) {
      trans.setWorldOrgX(newLeftTop.x);
      trans.setWorldOrgY(newLeftTop.y);

      trans.setDeviceOrgX(leftTop.x);
      trans.setDeviceOrgY(leftTop.y);

      var nodes = this.getAllNodes();
      var node;

      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.transform(trans);
      }
    }
  }
};

Layout.prototype.positionNodesRandomly = function (graph) {

  if (graph == undefined) {
    //assert !this.incremental;
    this.positionNodesRandomly(this.getGraphManager().getRoot());
    this.getGraphManager().getRoot().updateBounds(true);
  } else {
    var lNode;
    var childGraph;

    var nodes = graph.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      lNode = nodes[i];
      childGraph = lNode.getChild();

      if (childGraph == null) {
        lNode.scatter();
      } else if (childGraph.getNodes().length == 0) {
        lNode.scatter();
      } else {
        this.positionNodesRandomly(childGraph);
        lNode.updateBounds();
      }
    }
  }
};

/**
 * This method returns a list of trees where each tree is represented as a
 * list of l-nodes. The method returns a list of size 0 when:
 * - The graph is not flat or
 * - One of the component(s) of the graph is not a tree.
 */
Layout.prototype.getFlatForest = function () {
  var flatForest = [];
  var isForest = true;

  // Quick reference for all nodes in the graph manager associated with
  // this layout. The list should not be changed.
  var allNodes = this.graphManager.getRoot().getNodes();

  // First be sure that the graph is flat
  var isFlat = true;

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].getChild() != null) {
      isFlat = false;
    }
  }

  // Return empty forest if the graph is not flat.
  if (!isFlat) {
    return flatForest;
  }

  // Run BFS for each component of the graph.

  var visited = new HashSet();
  var toBeVisited = [];
  var parents = new HashMap();
  var unProcessedNodes = [];

  unProcessedNodes = unProcessedNodes.concat(allNodes);

  // Each iteration of this loop finds a component of the graph and
  // decides whether it is a tree or not. If it is a tree, adds it to the
  // forest and continued with the next component.

  while (unProcessedNodes.length > 0 && isForest) {
    toBeVisited.push(unProcessedNodes[0]);

    // Start the BFS. Each iteration of this loop visits a node in a
    // BFS manner.
    while (toBeVisited.length > 0 && isForest) {
      //pool operation
      var currentNode = toBeVisited[0];
      toBeVisited.splice(0, 1);
      visited.add(currentNode);

      // Traverse all neighbors of this node
      var neighborEdges = currentNode.getEdges();

      for (var i = 0; i < neighborEdges.length; i++) {
        var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);

        // If BFS is not growing from this neighbor.
        if (parents.get(currentNode) != currentNeighbor) {
          // We haven't previously visited this neighbor.
          if (!visited.contains(currentNeighbor)) {
            toBeVisited.push(currentNeighbor);
            parents.put(currentNeighbor, currentNode);
          }
          // Since we have previously visited this neighbor and
          // this neighbor is not parent of currentNode, given
          // graph contains a component that is not tree, hence
          // it is not a forest.
          else {
              isForest = false;
              break;
            }
        }
      }
    }

    // The graph contains a component that is not a tree. Empty
    // previously found trees. The method will end.
    if (!isForest) {
      flatForest = [];
    }
    // Save currently visited nodes as a tree in our forest. Reset
    // visited and parents lists. Continue with the next component of
    // the graph, if any.
    else {
        var temp = [];
        visited.addAllTo(temp);
        flatForest.push(temp);
        //flatForest = flatForest.concat(temp);
        //unProcessedNodes.removeAll(visited);
        for (var i = 0; i < temp.length; i++) {
          var value = temp[i];
          var index = unProcessedNodes.indexOf(value);
          if (index > -1) {
            unProcessedNodes.splice(index, 1);
          }
        }
        visited = new HashSet();
        parents = new HashMap();
      }
  }

  return flatForest;
};

/**
 * This method creates dummy nodes (an l-level node with minimal dimensions)
 * for the given edge (one per bendpoint). The existing l-level structure
 * is updated accordingly.
 */
Layout.prototype.createDummyNodesForBendpoints = function (edge) {
  var dummyNodes = [];
  var prev = edge.source;

  var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = this.newNode(null);
    dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));

    graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = this.newEdge(null);
  this.graphManager.add(dummyEdge, prev, edge.target);

  this.edgeToDummyNodes.put(edge, dummyNodes);

  // remove real edge from graph manager if it is inter-graph
  if (edge.isInterGraph()) {
    this.graphManager.remove(edge);
  }
  // else, remove the edge from the current graph
  else {
      graph.remove(edge);
    }

  return dummyNodes;
};

/**
 * This method creates bendpoints for edges from the dummy nodes
 * at l-level.
 */
Layout.prototype.createBendpointsFromDummyNodes = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  edges = this.edgeToDummyNodes.keySet().concat(edges);

  for (var k = 0; k < edges.length; k++) {
    var lEdge = edges[k];

    if (lEdge.bendpoints.length > 0) {
      var path = this.edgeToDummyNodes.get(lEdge);

      for (var i = 0; i < path.length; i++) {
        var dummyNode = path[i];
        var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());

        // update bendpoint's location according to dummy node
        var ebp = lEdge.bendpoints.get(i);
        ebp.x = p.x;
        ebp.y = p.y;

        // remove the dummy node, dummy edges incident with this
        // dummy node is also removed (within the remove method)
        dummyNode.getOwner().remove(dummyNode);
      }

      // add the real edge to graph
      this.graphManager.add(lEdge, lEdge.source, lEdge.target);
    }
  }
};

Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
  if (minDiv != undefined && maxMul != undefined) {
    var value = defaultValue;

    if (sliderValue <= 50) {
      var minValue = defaultValue / minDiv;
      value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
    } else {
      var maxValue = defaultValue * maxMul;
      value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
    }

    return value;
  } else {
    var a, b;

    if (sliderValue <= 50) {
      a = 9.0 * defaultValue / 500.0;
      b = defaultValue / 10.0;
    } else {
      a = 9.0 * defaultValue / 50.0;
      b = -8 * defaultValue;
    }

    return a * sliderValue + b;
  }
};

/**
 * This method finds and returns the center of the given nodes, assuming
 * that the given nodes form a tree in themselves.
 */
Layout.findCenterOfTree = function (nodes) {
  var list = [];
  list = list.concat(nodes);

  var removedNodes = [];
  var remainingDegrees = new HashMap();
  var foundCenter = false;
  var centerNode = null;

  if (list.length == 1 || list.length == 2) {
    foundCenter = true;
    centerNode = list[0];
  }

  for (var i = 0; i < list.length; i++) {
    var node = list[i];
    var degree = node.getNeighborsList().size();
    remainingDegrees.put(node, node.getNeighborsList().size());

    if (degree == 1) {
      removedNodes.push(node);
    }
  }

  var tempList = [];
  tempList = tempList.concat(removedNodes);

  while (!foundCenter) {
    var tempList2 = [];
    tempList2 = tempList2.concat(tempList);
    tempList = [];

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      var index = list.indexOf(node);
      if (index >= 0) {
        list.splice(index, 1);
      }

      var neighbours = node.getNeighborsList();

      Object.keys(neighbours.set).forEach(function (j) {
        var neighbour = neighbours.set[j];
        if (removedNodes.indexOf(neighbour) < 0) {
          var otherDegree = remainingDegrees.get(neighbour);
          var newDegree = otherDegree - 1;

          if (newDegree == 1) {
            tempList.push(neighbour);
          }

          remainingDegrees.put(neighbour, newDegree);
        }
      });
    }

    removedNodes = removedNodes.concat(tempList);

    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  }

  return centerNode;
};

/**
 * During the coarsening process, this layout may be referenced by two graph managers
 * this setter function grants access to change the currently being used graph manager
 */
Layout.prototype.setGraphManager = function (gm) {
  this.graphManager = gm;
};

module.exports = Layout;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function LayoutConstants() {}

/**
 * Layout Quality
 */
LayoutConstants.PROOF_QUALITY = 0;
LayoutConstants.DEFAULT_QUALITY = 1;
LayoutConstants.DRAFT_QUALITY = 2;

/**
 * Default parameters
 */
LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
//LayoutConstants.DEFAULT_INCREMENTAL = true;
LayoutConstants.DEFAULT_INCREMENTAL = false;
LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;

// -----------------------------------------------------------------------------
// Section: General other constants
// -----------------------------------------------------------------------------
/*
 * Margins of a graph to be applied on bouding rectangle of its contents. We
 * assume margins on all four sides to be uniform.
 */
LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;

/*
 * Whether to consider labels in node dimensions or not
 */
LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_SIZE = 40;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;

/*
 * Empty compound node size. When a compound node is empty, its both
 * dimensions should be of this value.
 */
LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;

/*
 * Minimum length that an edge should take during layout
 */
LayoutConstants.MIN_EDGE_LENGTH = 1;

/*
 * World boundaries that layout operates on
 */
LayoutConstants.WORLD_BOUNDARY = 1000000;

/*
 * World boundaries that random positioning can be performed with
 */
LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;

/*
 * Coordinates of the world center
 */
LayoutConstants.WORLD_CENTER_X = 1200;
LayoutConstants.WORLD_CENTER_Y = 900;

module.exports = LayoutConstants;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(5);

function HashMap() {
  this.map = {};
  this.keys = [];
}

HashMap.prototype.put = function (key, value) {
  var theId = UniqueIDGeneretor.createID(key);
  if (!this.contains(theId)) {
    this.map[theId] = value;
    this.keys.push(key);
  }
};

HashMap.prototype.contains = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[key] != null;
};

HashMap.prototype.get = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[theId];
};

HashMap.prototype.keySet = function () {
  return this.keys;
};

module.exports = HashMap;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function UniqueIDGeneretor() {}

UniqueIDGeneretor.lastID = 0;

UniqueIDGeneretor.createID = function (obj) {
  if (UniqueIDGeneretor.isPrimitive(obj)) {
    return obj;
  }
  if (obj.uniqueID != null) {
    return obj.uniqueID;
  }
  obj.uniqueID = UniqueIDGeneretor.getString();
  UniqueIDGeneretor.lastID++;
  return obj.uniqueID;
};

UniqueIDGeneretor.getString = function (id) {
  if (id == null) id = UniqueIDGeneretor.lastID;
  return "Object#" + id + "";
};

UniqueIDGeneretor.isPrimitive = function (arg) {
  var type = typeof arg;
  return arg == null || type != "object" && type != "function";
};

module.exports = UniqueIDGeneretor;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var LGraph;
var LEdge = __webpack_require__(7);

function LGraphManager(layout) {
  LGraph = __webpack_require__(11); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
  this.layout = layout;

  this.graphs = [];
  this.edges = [];
}

LGraphManager.prototype.addRoot = function () {
  var ngraph = this.layout.newGraph();
  var nnode = this.layout.newNode(null);
  var root = this.add(ngraph, nnode);
  this.setRootGraph(root);
  return this.rootGraph;
};

LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
  //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
  if (newEdge == null && sourceNode == null && targetNode == null) {
    if (newGraph == null) {
      throw "Graph is null!";
    }
    if (parentNode == null) {
      throw "Parent node is null!";
    }
    if (this.graphs.indexOf(newGraph) > -1) {
      throw "Graph already in this graph mgr!";
    }

    this.graphs.push(newGraph);

    if (newGraph.parent != null) {
      throw "Already has a parent!";
    }
    if (parentNode.child != null) {
      throw "Already has a child!";
    }

    newGraph.parent = parentNode;
    parentNode.child = newGraph;

    return newGraph;
  } else {
    //change the order of the parameters
    targetNode = newEdge;
    sourceNode = parentNode;
    newEdge = newGraph;
    var sourceGraph = sourceNode.getOwner();
    var targetGraph = targetNode.getOwner();

    if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
      throw "Source not in this graph mgr!";
    }
    if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
      throw "Target not in this graph mgr!";
    }

    if (sourceGraph == targetGraph) {
      newEdge.isInterGraph = false;
      return sourceGraph.add(newEdge, sourceNode, targetNode);
    } else {
      newEdge.isInterGraph = true;

      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;

      // add edge to inter-graph edge list
      if (this.edges.indexOf(newEdge) > -1) {
        throw "Edge already in inter-graph edge list!";
      }

      this.edges.push(newEdge);

      // add edge to source and target incidency lists
      if (!(newEdge.source != null && newEdge.target != null)) {
        throw "Edge source and/or target is null!";
      }

      if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
        throw "Edge already in source and/or target incidency list!";
      }

      newEdge.source.edges.push(newEdge);
      newEdge.target.edges.push(newEdge);

      return newEdge;
    }
  }
};

LGraphManager.prototype.remove = function (lObj) {
  if (lObj instanceof LGraph) {
    var graph = lObj;
    if (graph.getGraphManager() != this) {
      throw "Graph not in this graph mgr";
    }
    if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
      throw "Invalid parent node!";
    }

    // first the edges (make a copy to do it safely)
    var edgesToBeRemoved = [];

    edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());

    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];
      graph.remove(edge);
    }

    // then the nodes (make a copy to do it safely)
    var nodesToBeRemoved = [];

    nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());

    var node;
    s = nodesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      node = nodesToBeRemoved[i];
      graph.remove(node);
    }

    // check if graph is the root
    if (graph == this.rootGraph) {
      this.setRootGraph(null);
    }

    // now remove the graph itself
    var index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);

    // also reset the parent of the graph
    graph.parent = null;
  } else if (lObj instanceof LEdge) {
    edge = lObj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!edge.isInterGraph) {
      throw "Not an inter-graph edge!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }

    // remove edge from source and target nodes' incidency lists

    if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    var index = edge.source.edges.indexOf(edge);
    edge.source.edges.splice(index, 1);
    index = edge.target.edges.indexOf(edge);
    edge.target.edges.splice(index, 1);

    // remove edge from owner graph manager's inter-graph edge list

    if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
      throw "Edge owner graph or owner graph manager is null!";
    }
    if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
      throw "Not in owner graph manager's edge list!";
    }

    var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
    edge.source.owner.getGraphManager().edges.splice(index, 1);
  }
};

LGraphManager.prototype.updateBounds = function () {
  this.rootGraph.updateBounds(true);
};

LGraphManager.prototype.getGraphs = function () {
  return this.graphs;
};

LGraphManager.prototype.getAllNodes = function () {
  if (this.allNodes == null) {
    var nodeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < s; i++) {
      nodeList = nodeList.concat(graphs[i].getNodes());
    }
    this.allNodes = nodeList;
  }
  return this.allNodes;
};

LGraphManager.prototype.resetAllNodes = function () {
  this.allNodes = null;
};

LGraphManager.prototype.resetAllEdges = function () {
  this.allEdges = null;
};

LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
  this.allNodesToApplyGravitation = null;
};

LGraphManager.prototype.getAllEdges = function () {
  if (this.allEdges == null) {
    var edgeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < graphs.length; i++) {
      edgeList = edgeList.concat(graphs[i].getEdges());
    }

    edgeList = edgeList.concat(this.edges);

    this.allEdges = edgeList;
  }
  return this.allEdges;
};

LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
  return this.allNodesToApplyGravitation;
};

LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
  if (this.allNodesToApplyGravitation != null) {
    throw "assert failed";
  }

  this.allNodesToApplyGravitation = nodeList;
};

LGraphManager.prototype.getRoot = function () {
  return this.rootGraph;
};

LGraphManager.prototype.setRootGraph = function (graph) {
  if (graph.getGraphManager() != this) {
    throw "Root not in this graph mgr!";
  }

  this.rootGraph = graph;
  // root graph must have a root node associated with it for convenience
  if (graph.parent == null) {
    graph.parent = this.layout.newNode("Root node");
  }
};

LGraphManager.prototype.getLayout = function () {
  return this.layout;
};

LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
  if (!(firstNode != null && secondNode != null)) {
    throw "assert failed";
  }

  if (firstNode == secondNode) {
    return true;
  }
  // Is second node an ancestor of the first one?
  var ownerGraph = firstNode.getOwner();
  var parentNode;

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == secondNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);
  // Is first node an ancestor of the second one?
  ownerGraph = secondNode.getOwner();

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == firstNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);

  return false;
};

LGraphManager.prototype.calcLowestCommonAncestors = function () {
  var edge;
  var sourceNode;
  var targetNode;
  var sourceAncestorGraph;
  var targetAncestorGraph;

  var edges = this.getAllEdges();
  var s = edges.length;
  for (var i = 0; i < s; i++) {
    edge = edges[i];

    sourceNode = edge.source;
    targetNode = edge.target;
    edge.lca = null;
    edge.sourceInLca = sourceNode;
    edge.targetInLca = targetNode;

    if (sourceNode == targetNode) {
      edge.lca = sourceNode.getOwner();
      continue;
    }

    sourceAncestorGraph = sourceNode.getOwner();

    while (edge.lca == null) {
      edge.targetInLca = targetNode;
      targetAncestorGraph = targetNode.getOwner();

      while (edge.lca == null) {
        if (targetAncestorGraph == sourceAncestorGraph) {
          edge.lca = targetAncestorGraph;
          break;
        }

        if (targetAncestorGraph == this.rootGraph) {
          break;
        }

        if (edge.lca != null) {
          throw "assert failed";
        }
        edge.targetInLca = targetAncestorGraph.getParent();
        targetAncestorGraph = edge.targetInLca.getOwner();
      }

      if (sourceAncestorGraph == this.rootGraph) {
        break;
      }

      if (edge.lca == null) {
        edge.sourceInLca = sourceAncestorGraph.getParent();
        sourceAncestorGraph = edge.sourceInLca.getOwner();
      }
    }

    if (edge.lca == null) {
      throw "assert failed";
    }
  }
};

LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
  if (firstNode == secondNode) {
    return firstNode.getOwner();
  }
  var firstOwnerGraph = firstNode.getOwner();

  do {
    if (firstOwnerGraph == null) {
      break;
    }
    var secondOwnerGraph = secondNode.getOwner();

    do {
      if (secondOwnerGraph == null) {
        break;
      }

      if (secondOwnerGraph == firstOwnerGraph) {
        return secondOwnerGraph;
      }
      secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
    } while (true);

    firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
  } while (true);

  return firstOwnerGraph;
};

LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
  if (graph == null && depth == null) {
    graph = this.rootGraph;
    depth = 1;
  }
  var node;

  var nodes = graph.getNodes();
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    node = nodes[i];
    node.inclusionTreeDepth = depth;

    if (node.child != null) {
      this.calcInclusionTreeDepths(node.child, depth + 1);
    }
  }
};

LGraphManager.prototype.includesInvalidEdge = function () {
  var edge;

  var s = this.edges.length;
  for (var i = 0; i < s; i++) {
    edge = this.edges[i];

    if (this.isOneAncestorOfOther(edge.source, edge.target)) {
      return true;
    }
  }
  return false;
};

module.exports = LGraphManager;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var IGeometry = __webpack_require__(9);
var IMath = __webpack_require__(10);

function LEdge(source, target, vEdge) {
  LGraphObject.call(this, vEdge);

  this.isOverlapingSourceAndTarget = false;
  this.vGraphObject = vEdge;
  this.bendpoints = [];
  this.source = source;
  this.target = target;
}

LEdge.prototype = Object.create(LGraphObject.prototype);

for (var prop in LGraphObject) {
  LEdge[prop] = LGraphObject[prop];
}

LEdge.prototype.getSource = function () {
  return this.source;
};

LEdge.prototype.getTarget = function () {
  return this.target;
};

LEdge.prototype.isInterGraph = function () {
  return this.isInterGraph;
};

LEdge.prototype.getLength = function () {
  return this.length;
};

LEdge.prototype.isOverlapingSourceAndTarget = function () {
  return this.isOverlapingSourceAndTarget;
};

LEdge.prototype.getBendpoints = function () {
  return this.bendpoints;
};

LEdge.prototype.getLca = function () {
  return this.lca;
};

LEdge.prototype.getSourceInLca = function () {
  return this.sourceInLca;
};

LEdge.prototype.getTargetInLca = function () {
  return this.targetInLca;
};

LEdge.prototype.getOtherEnd = function (node) {
  if (this.source === node) {
    return this.target;
  } else if (this.target === node) {
    return this.source;
  } else {
    throw "Node is not incident with this edge";
  }
};

LEdge.prototype.getOtherEndInGraph = function (node, graph) {
  var otherEnd = this.getOtherEnd(node);
  var root = graph.getGraphManager().getRoot();

  while (true) {
    if (otherEnd.getOwner() == graph) {
      return otherEnd;
    }

    if (otherEnd.getOwner() == root) {
      break;
    }

    otherEnd = otherEnd.getOwner().getParent();
  }

  return null;
};

LEdge.prototype.updateLength = function () {
  var clipPointCoordinates = new Array(4);

  this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);

  if (!this.isOverlapingSourceAndTarget) {
    this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
    this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];

    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }

    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }

    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  }
};

LEdge.prototype.updateLengthSimple = function () {
  this.lengthX = this.target.getCenterX() - this.source.getCenterX();
  this.lengthY = this.target.getCenterY() - this.source.getCenterY();

  if (Math.abs(this.lengthX) < 1.0) {
    this.lengthX = IMath.sign(this.lengthX);
  }

  if (Math.abs(this.lengthY) < 1.0) {
    this.lengthY = IMath.sign(this.lengthY);
  }

  this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
};

module.exports = LEdge;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function IGeometry() {}

IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
  if (!rectA.intersects(rectB)) {
    throw "assert failed";
  }
  var directions = new Array(2);
  IGeometry.decideDirectionsForOverlappingNodes(rectA, rectB, directions);
  overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
  overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);
  // update the overlapping amounts for the following cases:
  if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
    overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
  } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
    overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
  }
  if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
    overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
  } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
    overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
  }

  // find slope of the line passes two centers
  var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
  // if centers are overlapped
  if (rectB.getCenterY() == rectA.getCenterY() && rectB.getCenterX() == rectA.getCenterX()) {
    // assume the slope is 1 (45 degree)
    slope = 1.0;
  }

  var moveByY = slope * overlapAmount[0];
  var moveByX = overlapAmount[1] / slope;
  if (overlapAmount[0] < moveByX) {
    moveByX = overlapAmount[0];
  } else {
    moveByY = overlapAmount[1];
  }
  // return half the amount so that if each rectangle is moved by these
  // amounts in opposite directions, overlap will be resolved
  overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
  overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
};

IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
  if (rectA.getCenterX() < rectB.getCenterX()) {
    directions[0] = -1;
  } else {
    directions[0] = 1;
  }

  if (rectA.getCenterY() < rectB.getCenterY()) {
    directions[1] = -1;
  } else {
    directions[1] = 1;
  }
};

IGeometry.getIntersection2 = function (rectA, rectB, result) {
  //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
  var p1x = rectA.getCenterX();
  var p1y = rectA.getCenterY();
  var p2x = rectB.getCenterX();
  var p2y = rectB.getCenterY();

  //if two rectangles intersect, then clipping points are centers
  if (rectA.intersects(rectB)) {
    result[0] = p1x;
    result[1] = p1y;
    result[2] = p2x;
    result[3] = p2y;
    return true;
  }
  //variables for rectA
  var topLeftAx = rectA.getX();
  var topLeftAy = rectA.getY();
  var topRightAx = rectA.getRight();
  var bottomLeftAx = rectA.getX();
  var bottomLeftAy = rectA.getBottom();
  var bottomRightAx = rectA.getRight();
  var halfWidthA = rectA.getWidthHalf();
  var halfHeightA = rectA.getHeightHalf();
  //variables for rectB
  var topLeftBx = rectB.getX();
  var topLeftBy = rectB.getY();
  var topRightBx = rectB.getRight();
  var bottomLeftBx = rectB.getX();
  var bottomLeftBy = rectB.getBottom();
  var bottomRightBx = rectB.getRight();
  var halfWidthB = rectB.getWidthHalf();
  var halfHeightB = rectB.getHeightHalf();
  //flag whether clipping points are found
  var clipPointAFound = false;
  var clipPointBFound = false;

  // line is vertical
  if (p1x == p2x) {
    if (p1y > p2y) {
      result[0] = p1x;
      result[1] = topLeftAy;
      result[2] = p2x;
      result[3] = bottomLeftBy;
      return false;
    } else if (p1y < p2y) {
      result[0] = p1x;
      result[1] = bottomLeftAy;
      result[2] = p2x;
      result[3] = topLeftBy;
      return false;
    } else {
      //not line, return null;
    }
  }
  // line is horizontal
  else if (p1y == p2y) {
      if (p1x > p2x) {
        result[0] = topLeftAx;
        result[1] = p1y;
        result[2] = topRightBx;
        result[3] = p2y;
        return false;
      } else if (p1x < p2x) {
        result[0] = topRightAx;
        result[1] = p1y;
        result[2] = topLeftBx;
        result[3] = p2y;
        return false;
      } else {
        //not valid line, return null;
      }
    } else {
      //slopes of rectA's and rectB's diagonals
      var slopeA = rectA.height / rectA.width;
      var slopeB = rectB.height / rectB.width;

      //slope of line between center of rectA and center of rectB
      var slopePrime = (p2y - p1y) / (p2x - p1x);
      var cardinalDirectionA;
      var cardinalDirectionB;
      var tempPointAx;
      var tempPointAy;
      var tempPointBx;
      var tempPointBy;

      //determine whether clipping point is the corner of nodeA
      if (-slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = bottomLeftAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = topRightAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        }
      } else if (slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = bottomRightAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        }
      }

      //determine whether clipping point is the corner of nodeB
      if (-slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = bottomLeftBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = topRightBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        }
      } else if (slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = topLeftBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = bottomRightBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        }
      }

      //if both clipping points are corners
      if (clipPointAFound && clipPointBFound) {
        return false;
      }

      //determine Cardinal Direction of rectangles
      if (p1x > p2x) {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 4);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 2);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 3);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 1);
        }
      } else {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 1);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 3);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 2);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 4);
        }
      }
      //calculate clipping Point if it is not found before
      if (!clipPointAFound) {
        switch (cardinalDirectionA) {
          case 1:
            tempPointAy = topLeftAy;
            tempPointAx = p1x + -halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 2:
            tempPointAx = bottomRightAx;
            tempPointAy = p1y + halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 3:
            tempPointAy = bottomLeftAy;
            tempPointAx = p1x + halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 4:
            tempPointAx = bottomLeftAx;
            tempPointAy = p1y + -halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
        }
      }
      if (!clipPointBFound) {
        switch (cardinalDirectionB) {
          case 1:
            tempPointBy = topLeftBy;
            tempPointBx = p2x + -halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 2:
            tempPointBx = bottomRightBx;
            tempPointBy = p2y + halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 3:
            tempPointBy = bottomLeftBy;
            tempPointBx = p2x + halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 4:
            tempPointBx = bottomLeftBx;
            tempPointBy = p2y + -halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
        }
      }
    }
  return false;
};

IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
  if (slope > slopePrime) {
    return line;
  } else {
    return 1 + line % 4;
  }
};

IGeometry.getIntersection = function (s1, s2, f1, f2) {
  if (f2 == null) {
    return IGeometry.getIntersection2(s1, s2, f1);
  }
  var x1 = s1.x;
  var y1 = s1.y;
  var x2 = s2.x;
  var y2 = s2.y;
  var x3 = f1.x;
  var y3 = f1.y;
  var x4 = f2.x;
  var y4 = f2.y;
  var x, y; // intersection point
  var a1, a2, b1, b2, c1, c2; // coefficients of line eqns.
  var denom;

  a1 = y2 - y1;
  b1 = x1 - x2;
  c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }

  a2 = y4 - y3;
  b2 = x3 - x4;
  c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }

  denom = a1 * b2 - a2 * b1;

  if (denom == 0) {
    return null;
  }

  x = (b1 * c2 - b2 * c1) / denom;
  y = (a2 * c1 - a1 * c2) / denom;

  return new Point(x, y);
};

// -----------------------------------------------------------------------------
// Section: Class Constants
// -----------------------------------------------------------------------------
/**
 * Some useful pre-calculated constants
 */
IGeometry.HALF_PI = 0.5 * Math.PI;
IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
IGeometry.TWO_PI = 2.0 * Math.PI;
IGeometry.THREE_PI = 3.0 * Math.PI;

module.exports = IGeometry;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function IMath() {}

/**
 * This method returns the sign of the input value.
 */
IMath.sign = function (value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
};

IMath.floor = function (value) {
  return value < 0 ? Math.ceil(value) : Math.floor(value);
};

IMath.ceil = function (value) {
  return value < 0 ? Math.floor(value) : Math.ceil(value);
};

module.exports = IMath;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var Integer = __webpack_require__(12);
var LayoutConstants = __webpack_require__(3);
var LGraphManager = __webpack_require__(6);
var LNode = __webpack_require__(13);
var LEdge = __webpack_require__(7);
var RectangleD = __webpack_require__(14);
var Point = __webpack_require__(18);
var LinkedList = __webpack_require__(19);

function LGraph(parent, obj2, vGraph) {
  LGraphObject.call(this, vGraph);
  this.estimatedSize = Integer.MIN_VALUE;
  this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
  this.edges = [];
  this.nodes = [];
  this.isConnected = false;
  this.parent = parent;

  if (obj2 != null && obj2 instanceof LGraphManager) {
    this.graphManager = obj2;
  } else if (obj2 != null && obj2 instanceof Layout) {
    this.graphManager = obj2.graphManager;
  }
}

LGraph.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LGraph[prop] = LGraphObject[prop];
}

LGraph.prototype.getNodes = function () {
  return this.nodes;
};

LGraph.prototype.getEdges = function () {
  return this.edges;
};

LGraph.prototype.getGraphManager = function () {
  return this.graphManager;
};

LGraph.prototype.getParent = function () {
  return this.parent;
};

LGraph.prototype.getLeft = function () {
  return this.left;
};

LGraph.prototype.getRight = function () {
  return this.right;
};

LGraph.prototype.getTop = function () {
  return this.top;
};

LGraph.prototype.getBottom = function () {
  return this.bottom;
};

LGraph.prototype.isConnected = function () {
  return this.isConnected;
};

LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
  if (sourceNode == null && targetNode == null) {
    var newNode = obj1;
    if (this.graphManager == null) {
      throw "Graph has no graph mgr!";
    }
    if (this.getNodes().indexOf(newNode) > -1) {
      throw "Node already in graph!";
    }
    newNode.owner = this;
    this.getNodes().push(newNode);

    return newNode;
  } else {
    var newEdge = obj1;
    if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
      throw "Source or target not in graph!";
    }

    if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
      throw "Both owners must be this graph!";
    }

    if (sourceNode.owner != targetNode.owner) {
      return null;
    }

    // set source and target
    newEdge.source = sourceNode;
    newEdge.target = targetNode;

    // set as intra-graph edge
    newEdge.isInterGraph = false;

    // add to graph edge list
    this.getEdges().push(newEdge);

    // add to incidency lists
    sourceNode.edges.push(newEdge);

    if (targetNode != sourceNode) {
      targetNode.edges.push(newEdge);
    }

    return newEdge;
  }
};

LGraph.prototype.remove = function (obj) {
  var node = obj;
  if (obj instanceof LNode) {
    if (node == null) {
      throw "Node is null!";
    }
    if (!(node.owner != null && node.owner == this)) {
      throw "Owner graph is invalid!";
    }
    if (this.graphManager == null) {
      throw "Owner graph manager is invalid!";
    }
    // remove incident edges first (make a copy to do it safely)
    var edgesToBeRemoved = node.edges.slice();
    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];

      if (edge.isInterGraph) {
        this.graphManager.remove(edge);
      } else {
        edge.source.owner.remove(edge);
      }
    }

    // now the node itself
    var index = this.nodes.indexOf(node);
    if (index == -1) {
      throw "Node not in owner node list!";
    }

    this.nodes.splice(index, 1);
  } else if (obj instanceof LEdge) {
    var edge = obj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }
    if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
      throw "Source and/or target owner is invalid!";
    }

    var sourceIndex = edge.source.edges.indexOf(edge);
    var targetIndex = edge.target.edges.indexOf(edge);
    if (!(sourceIndex > -1 && targetIndex > -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    edge.source.edges.splice(sourceIndex, 1);

    if (edge.target != edge.source) {
      edge.target.edges.splice(targetIndex, 1);
    }

    var index = edge.source.owner.getEdges().indexOf(edge);
    if (index == -1) {
      throw "Not in owner's edge list!";
    }

    edge.source.owner.getEdges().splice(index, 1);
  }
};

LGraph.prototype.updateLeftTop = function () {
  var top = Integer.MAX_VALUE;
  var left = Integer.MAX_VALUE;
  var nodeTop;
  var nodeLeft;
  var margin;

  var nodes = this.getNodes();
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeTop = lNode.getTop();
    nodeLeft = lNode.getLeft();

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (left > nodeLeft) {
      left = nodeLeft;
    }
  }

  // Do we have any nodes in this graph?
  if (top == Integer.MAX_VALUE) {
    return null;
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = left - margin;
  this.top = top - margin;

  // Apply the margins and return the result
  return new Point(this.left, this.top);
};

LGraph.prototype.updateBounds = function (recursive) {
  // calculate bounds
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;
  var margin;

  var nodes = this.nodes;
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];

    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  if (left == Integer.MAX_VALUE) {
    this.left = this.parent.getLeft();
    this.right = this.parent.getRight();
    this.top = this.parent.getTop();
    this.bottom = this.parent.getBottom();
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

LGraph.calculateBounds = function (nodes) {
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;

  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);

  return boundingRect;
};

LGraph.prototype.getInclusionTreeDepth = function () {
  if (this == this.graphManager.getRoot()) {
    return 1;
  } else {
    return this.parent.getInclusionTreeDepth();
  }
};

LGraph.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LGraph.prototype.calcEstimatedSize = function () {
  var size = 0;
  var nodes = this.nodes;
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    size += lNode.calcEstimatedSize();
  }

  if (size == 0) {
    this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
  } else {
    this.estimatedSize = size / Math.sqrt(this.nodes.length);
  }

  return this.estimatedSize;
};

LGraph.prototype.updateConnected = function () {
  var self = this;
  if (this.nodes.length == 0) {
    this.isConnected = true;
    return;
  }

  var queue = new LinkedList();
  var visited = new Set();
  var currentNode = this.nodes[0];
  var neighborEdges;
  var currentNeighbor;
  var childrenOfNode = currentNode.withChildren();
  childrenOfNode.forEach(function (node) {
    queue.push(node);
    visited.add(node);
  });

  while (queue.length !== 0) {
    currentNode = queue.shift();

    // Traverse all neighbors of this node
    neighborEdges = currentNode.getEdges();
    var size = neighborEdges.length;
    for (var i = 0; i < size; i++) {
      var neighborEdge = neighborEdges[i];
      currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);

      // Add unvisited neighbors to the list to visit
      if (currentNeighbor != null && !visited.has(currentNeighbor)) {
        var childrenOfNeighbor = currentNeighbor.withChildren();

        childrenOfNeighbor.forEach(function (node) {
          queue.push(node);
          visited.add(node);
        });
      }
    }
  }

  this.isConnected = false;

  if (visited.size >= this.nodes.length) {
    var noOfVisitedInThisGraph = 0;

    visited.forEach(function (visitedNode) {
      if (visitedNode.owner == self) {
        noOfVisitedInThisGraph++;
      }
    });

    if (noOfVisitedInThisGraph == this.nodes.length) {
      this.isConnected = true;
    }
  }
};

module.exports = LGraph;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var LGraphObject = __webpack_require__(8);
var Integer = __webpack_require__(12);
var RectangleD = __webpack_require__(14);
var LayoutConstants = __webpack_require__(3);
var RandomSeed = __webpack_require__(15);
var PointD = __webpack_require__(16);
var HashSet = __webpack_require__(17);

function LNode(gm, loc, size, vNode) {
  //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
  if (size == null && vNode == null) {
    vNode = loc;
  }

  LGraphObject.call(this, vNode);

  //Alternative constructor 2 : LNode(Layout layout, Object vNode)
  if (gm.graphManager != null) gm = gm.graphManager;

  this.estimatedSize = Integer.MIN_VALUE;
  this.inclusionTreeDepth = Integer.MAX_VALUE;
  this.vGraphObject = vNode;
  this.edges = [];
  this.graphManager = gm;

  if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
}

LNode.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LNode[prop] = LGraphObject[prop];
}

LNode.prototype.getEdges = function () {
  return this.edges;
};

LNode.prototype.getChild = function () {
  return this.child;
};

LNode.prototype.getOwner = function () {
  //  if (this.owner != null) {
  //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
  //      throw "assert failed";
  //    }
  //  }

  return this.owner;
};

LNode.prototype.getWidth = function () {
  return this.rect.width;
};

LNode.prototype.setWidth = function (width) {
  this.rect.width = width;
};

LNode.prototype.getHeight = function () {
  return this.rect.height;
};

LNode.prototype.setHeight = function (height) {
  this.rect.height = height;
};

LNode.prototype.getCenterX = function () {
  return this.rect.x + this.rect.width / 2;
};

LNode.prototype.getCenterY = function () {
  return this.rect.y + this.rect.height / 2;
};

LNode.prototype.getCenter = function () {
  return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
};

LNode.prototype.getLocation = function () {
  return new PointD(this.rect.x, this.rect.y);
};

LNode.prototype.getRect = function () {
  return this.rect;
};

LNode.prototype.getDiagonal = function () {
  return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
};

LNode.prototype.setRect = function (upperLeft, dimension) {
  this.rect.x = upperLeft.x;
  this.rect.y = upperLeft.y;
  this.rect.width = dimension.width;
  this.rect.height = dimension.height;
};

LNode.prototype.setCenter = function (cx, cy) {
  this.rect.x = cx - this.rect.width / 2;
  this.rect.y = cy - this.rect.height / 2;
};

LNode.prototype.setLocation = function (x, y) {
  this.rect.x = x;
  this.rect.y = y;
};

LNode.prototype.moveBy = function (dx, dy) {
  this.rect.x += dx;
  this.rect.y += dy;
};

LNode.prototype.getEdgeListToNode = function (to) {
  var edgeList = [];
  var edge;
  var self = this;

  self.edges.forEach(function (edge) {

    if (edge.target == to) {
      if (edge.source != self) throw "Incorrect edge source!";

      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getEdgesBetween = function (other) {
  var edgeList = [];
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";

    if (edge.target == other || edge.source == other) {
      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getNeighborsList = function () {
  var neighbors = new HashSet();
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (edge.source == self) {
      neighbors.add(edge.target);
    } else {
      if (edge.target != self) {
        throw "Incorrect incidency!";
      }

      neighbors.add(edge.source);
    }
  });

  return neighbors;
};

LNode.prototype.withChildren = function () {
  var withNeighborsList = new Set();
  var childNode;
  var children;

  withNeighborsList.add(this);

  if (this.child != null) {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];
      children = childNode.withChildren();
      children.forEach(function (node) {
        withNeighborsList.add(node);
      });
    }
  }

  return withNeighborsList;
};

LNode.prototype.getNoOfChildren = function () {
  var noOfChildren = 0;
  var childNode;

  if (this.child == null) {
    noOfChildren = 1;
  } else {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];

      noOfChildren += childNode.getNoOfChildren();
    }
  }

  if (noOfChildren == 0) {
    noOfChildren = 1;
  }
  return noOfChildren;
};

LNode.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LNode.prototype.calcEstimatedSize = function () {
  if (this.child == null) {
    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
  } else {
    this.estimatedSize = this.child.calcEstimatedSize();
    this.rect.width = this.estimatedSize;
    this.rect.height = this.estimatedSize;

    return this.estimatedSize;
  }
};

LNode.prototype.scatter = function () {
  var randomCenterX;
  var randomCenterY;

  var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;

  var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;

  this.rect.x = randomCenterX;
  this.rect.y = randomCenterY;
};

LNode.prototype.updateBounds = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds(true);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());

    // Update compound bounds considering its label properties    
    if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {

      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if (this.labelWidth > width) {
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if (this.labelHeight > height) {
        if (this.labelPos == "center") {
          this.rect.y -= (this.labelHeight - height) / 2;
        } else if (this.labelPos == "top") {
          this.rect.y -= this.labelHeight - height;
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

LNode.prototype.getInclusionTreeDepth = function () {
  if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
    throw "assert failed";
  }
  return this.inclusionTreeDepth;
};

LNode.prototype.transform = function (trans) {
  var left = this.rect.x;

  if (left > LayoutConstants.WORLD_BOUNDARY) {
    left = LayoutConstants.WORLD_BOUNDARY;
  } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
    left = -LayoutConstants.WORLD_BOUNDARY;
  }

  var top = this.rect.y;

  if (top > LayoutConstants.WORLD_BOUNDARY) {
    top = LayoutConstants.WORLD_BOUNDARY;
  } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
    top = -LayoutConstants.WORLD_BOUNDARY;
  }

  var leftTop = new PointD(left, top);
  var vLeftTop = trans.inverseTransformPoint(leftTop);

  this.setLocation(vLeftTop.x, vLeftTop.y);
};

LNode.prototype.getLeft = function () {
  return this.rect.x;
};

LNode.prototype.getRight = function () {
  return this.rect.x + this.rect.width;
};

LNode.prototype.getTop = function () {
  return this.rect.y;
};

LNode.prototype.getBottom = function () {
  return this.rect.y + this.rect.height;
};

LNode.prototype.getParent = function () {
  if (this.owner == null) {
    return null;
  }

  return this.owner.getParent();
};

module.exports = LNode;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function RectangleD(x, y, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;

  if (x != null && y != null && width != null && height != null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

RectangleD.prototype.getX = function () {
  return this.x;
};

RectangleD.prototype.setX = function (x) {
  this.x = x;
};

RectangleD.prototype.getY = function () {
  return this.y;
};

RectangleD.prototype.setY = function (y) {
  this.y = y;
};

RectangleD.prototype.getWidth = function () {
  return this.width;
};

RectangleD.prototype.setWidth = function (width) {
  this.width = width;
};

RectangleD.prototype.getHeight = function () {
  return this.height;
};

RectangleD.prototype.setHeight = function (height) {
  this.height = height;
};

RectangleD.prototype.getRight = function () {
  return this.x + this.width;
};

RectangleD.prototype.getBottom = function () {
  return this.y + this.height;
};

RectangleD.prototype.intersects = function (a) {
  if (this.getRight() < a.x) {
    return false;
  }

  if (this.getBottom() < a.y) {
    return false;
  }

  if (a.getRight() < this.x) {
    return false;
  }

  if (a.getBottom() < this.y) {
    return false;
  }

  return true;
};

RectangleD.prototype.getCenterX = function () {
  return this.x + this.width / 2;
};

RectangleD.prototype.getMinX = function () {
  return this.getX();
};

RectangleD.prototype.getMaxX = function () {
  return this.getX() + this.width;
};

RectangleD.prototype.getCenterY = function () {
  return this.y + this.height / 2;
};

RectangleD.prototype.getMinY = function () {
  return this.getY();
};

RectangleD.prototype.getMaxY = function () {
  return this.getY() + this.height;
};

RectangleD.prototype.getWidthHalf = function () {
  return this.width / 2;
};

RectangleD.prototype.getHeightHalf = function () {
  return this.height / 2;
};

module.exports = RectangleD;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function RandomSeed() {}
RandomSeed.seed = 1;
RandomSeed.x = 0;

RandomSeed.nextDouble = function () {
  RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
  return RandomSeed.x - Math.floor(RandomSeed.x);
};

module.exports = RandomSeed;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function PointD(x, y) {
  if (x == null && y == null) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }
}

PointD.prototype.getX = function () {
  return this.x;
};

PointD.prototype.getY = function () {
  return this.y;
};

PointD.prototype.setX = function (x) {
  this.x = x;
};

PointD.prototype.setY = function (y) {
  this.y = y;
};

PointD.prototype.getDifference = function (pt) {
  return new DimensionD(this.x - pt.x, this.y - pt.y);
};

PointD.prototype.getCopy = function () {
  return new PointD(this.x, this.y);
};

PointD.prototype.translate = function (dim) {
  this.x += dim.width;
  this.y += dim.height;
  return this;
};

module.exports = PointD;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var UniqueIDGeneretor = __webpack_require__(5);

function HashSet() {
  this.set = {};
}
;

HashSet.prototype.add = function (obj) {
  var theId = UniqueIDGeneretor.createID(obj);
  if (!this.contains(theId)) this.set[theId] = obj;
};

HashSet.prototype.remove = function (obj) {
  delete this.set[UniqueIDGeneretor.createID(obj)];
};

HashSet.prototype.clear = function () {
  this.set = {};
};

HashSet.prototype.contains = function (obj) {
  return this.set[UniqueIDGeneretor.createID(obj)] == obj;
};

HashSet.prototype.isEmpty = function () {
  return this.size() === 0;
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

//concats this.set to the given list
HashSet.prototype.addAllTo = function (list) {
  var keys = Object.keys(this.set);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    list.push(this.set[keys[i]]);
  }
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

HashSet.prototype.addAll = function (list) {
  var s = list.length;
  for (var i = 0; i < s; i++) {
    var v = list[i];
    this.add(v);
  }
};

module.exports = HashSet;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
 *This class is the javascript implementation of the Point.java class in jdk
 */
function Point(x, y, p) {
  this.x = null;
  this.y = null;
  if (x == null && y == null && p == null) {
    this.x = 0;
    this.y = 0;
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    this.x = x;
    this.y = y;
  } else if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.x = p.x;
    this.y = p.y;
  }
}

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.getLocation = function () {
  return new Point(this.x, this.y);
};

Point.prototype.setLocation = function (x, y, p) {
  if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.setLocation(p.x, p.y);
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    //if both parameters are integer just move (x,y) location
    if (parseInt(x) == x && parseInt(y) == y) {
      this.move(x, y);
    } else {
      this.x = Math.floor(x + 0.5);
      this.y = Math.floor(y + 0.5);
    }
  }
};

Point.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

Point.prototype.equals = function (obj) {
  if (obj.constructor.name == "Point") {
    var pt = obj;
    return this.x == pt.x && this.y == pt.y;
  }
  return this == obj;
};

Point.prototype.toString = function () {
  return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
};

module.exports = Point;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

const nodeFrom = value => ({ value, next: null, prev: null });

const add = (prev, node, next, list) => {
  if (prev !== null) {
    prev.next = node;
  } else {
    list.head = node;
  }

  if (next !== null) {
    next.prev = node;
  } else {
    list.tail = node;
  }

  node.prev = prev;
  node.next = next;

  list.length++;

  return node;
};

const remove = (node, list) => {
  let { prev, next } = node;

  if (prev !== null) {
    prev.next = next;
  } else {
    list.head = next;
  }

  if (next !== null) {
    next.prev = prev;
  } else {
    list.tail = prev;
  }

  node.prev = node.next = null;

  list.length--;

  return node;
};

class LinkedList {
  constructor(vals) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (vals != null) {
      vals.forEach(v => this.push(v));
    }
  }

  size() {
    return this.length;
  }

  insertBefore(val, otherNode) {
    return add(otherNode.prev, nodeFrom(val), otherNode, this);
  }

  insertAfter(val, otherNode) {
    return add(otherNode, nodeFrom(val), otherNode.next, this);
  }

  insertNodeBefore(newNode, otherNode) {
    return add(otherNode.prev, newNode, otherNode, this);
  }

  insertNodeAfter(newNode, otherNode) {
    return add(otherNode, newNode, otherNode.next, this);
  }

  push(val) {
    return add(this.tail, nodeFrom(val), null, this);
  }

  unshift(val) {
    return add(null, nodeFrom(val), this.head, this);
  }

  remove(node) {
    return remove(node, this);
  }

  pop() {
    return remove(this.tail, this).value;
  }

  popNode() {
    return remove(this.tail, this);
  }

  shift() {
    return remove(this.head, this).value;
  }

  shiftNode() {
    return remove(this.head, this);
  }

  get_object_at(index) {
    if (index <= this.length()) {
      var i = 1;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current.value;
    }
  }

  set_object_at(index, value) {
    if (index <= this.length()) {
      var i = 1;
      var current = this.head;
      while (i < index) {
        current = current.next;
        i++;
      }
      current.value = value;
    }
  }
}

module.exports = LinkedList;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var PointD = __webpack_require__(16);

function Transform(x, y) {
  this.lworldOrgX = 0.0;
  this.lworldOrgY = 0.0;
  this.ldeviceOrgX = 0.0;
  this.ldeviceOrgY = 0.0;
  this.lworldExtX = 1.0;
  this.lworldExtY = 1.0;
  this.ldeviceExtX = 1.0;
  this.ldeviceExtY = 1.0;
}

Transform.prototype.getWorldOrgX = function () {
  return this.lworldOrgX;
};

Transform.prototype.setWorldOrgX = function (wox) {
  this.lworldOrgX = wox;
};

Transform.prototype.getWorldOrgY = function () {
  return this.lworldOrgY;
};

Transform.prototype.setWorldOrgY = function (woy) {
  this.lworldOrgY = woy;
};

Transform.prototype.getWorldExtX = function () {
  return this.lworldExtX;
};

Transform.prototype.setWorldExtX = function (wex) {
  this.lworldExtX = wex;
};

Transform.prototype.getWorldExtY = function () {
  return this.lworldExtY;
};

Transform.prototype.setWorldExtY = function (wey) {
  this.lworldExtY = wey;
};

/* Device related */

Transform.prototype.getDeviceOrgX = function () {
  return this.ldeviceOrgX;
};

Transform.prototype.setDeviceOrgX = function (dox) {
  this.ldeviceOrgX = dox;
};

Transform.prototype.getDeviceOrgY = function () {
  return this.ldeviceOrgY;
};

Transform.prototype.setDeviceOrgY = function (doy) {
  this.ldeviceOrgY = doy;
};

Transform.prototype.getDeviceExtX = function () {
  return this.ldeviceExtX;
};

Transform.prototype.setDeviceExtX = function (dex) {
  this.ldeviceExtX = dex;
};

Transform.prototype.getDeviceExtY = function () {
  return this.ldeviceExtY;
};

Transform.prototype.setDeviceExtY = function (dey) {
  this.ldeviceExtY = dey;
};

Transform.prototype.transformX = function (x) {
  var xDevice = 0.0;
  var worldExtX = this.lworldExtX;
  if (worldExtX != 0.0) {
    xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
  }

  return xDevice;
};

Transform.prototype.transformY = function (y) {
  var yDevice = 0.0;
  var worldExtY = this.lworldExtY;
  if (worldExtY != 0.0) {
    yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
  }

  return yDevice;
};

Transform.prototype.inverseTransformX = function (x) {
  var xWorld = 0.0;
  var deviceExtX = this.ldeviceExtX;
  if (deviceExtX != 0.0) {
    xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
  }

  return xWorld;
};

Transform.prototype.inverseTransformY = function (y) {
  var yWorld = 0.0;
  var deviceExtY = this.ldeviceExtY;
  if (deviceExtY != 0.0) {
    yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
  }
  return yWorld;
};

Transform.prototype.inverseTransformPoint = function (inPoint) {
  var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
  return outPoint;
};

module.exports = Transform;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function Emitter() {
  this.listeners = [];
}

var p = Emitter.prototype;

p.addListener = function (event, callback) {
  this.listeners.push({
    event: event,
    callback: callback
  });
};

p.removeListener = function (event, callback) {
  for (var i = this.listeners.length; i >= 0; i--) {
    var l = this.listeners[i];

    if (l.event === event && l.callback === callback) {
      this.listeners.splice(i, 1);
    }
  }
};

p.emit = function (event, data) {
  for (var i = 0; i < this.listeners.length; i++) {
    var l = this.listeners[i];

    if (event === l.event) {
      l.callback(data);
    }
  }
};

module.exports = Emitter;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(3);

function FDLayoutConstants() {}

//FDLayoutConstants inherits static props in LayoutConstants
for (var prop in LayoutConstants) {
  FDLayoutConstants[prop] = LayoutConstants[prop];
}

FDLayoutConstants.MAX_ITERATIONS = 2500;

FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.5;
FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
FDLayoutConstants.MIN_EDGE_LENGTH = 1;
FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;

module.exports = FDLayoutConstants;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var LEdge = __webpack_require__(7);
var FDLayoutConstants = __webpack_require__(22);

function FDLayoutEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
}

FDLayoutEdge.prototype = Object.create(LEdge.prototype);

for (var prop in LEdge) {
  FDLayoutEdge[prop] = LEdge[prop];
}

module.exports = FDLayoutEdge;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var LNode = __webpack_require__(13);

function FDLayoutNode(gm, loc, size, vNode) {
  // alternative constructor is handled inside LNode
  LNode.call(this, gm, loc, size, vNode);
  //Spring, repulsion and gravitational forces acting on this node
  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  //Amount by which this node is to be moved in this iteration
  this.displacementX = 0;
  this.displacementY = 0;

  //Start and finish grid coordinates that this node is fallen into
  this.startX = 0;
  this.finishX = 0;
  this.startY = 0;
  this.finishY = 0;

  //Geometric neighbors of this node
  this.surrounding = [];
}

FDLayoutNode.prototype = Object.create(LNode.prototype);

for (var prop in LNode) {
  FDLayoutNode[prop] = LNode[prop];
}

FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
  this.startX = _startX;
  this.finishX = _finishX;
  this.startY = _startY;
  this.finishY = _finishY;
};

module.exports = FDLayoutNode;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

function DimensionD(width, height) {
  this.width = 0;
  this.height = 0;
  if (width !== null && height !== null) {
    this.height = height;
    this.width = width;
  }
}

DimensionD.prototype.getWidth = function () {
  return this.width;
};

DimensionD.prototype.setWidth = function (width) {
  this.width = width;
};

DimensionD.prototype.getHeight = function () {
  return this.height;
};

DimensionD.prototype.setHeight = function (height) {
  this.height = height;
};

module.exports = DimensionD;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const LinkedList = __webpack_require__(19);

function Quicksort() {}

Quicksort.get_object_at = function (list, i) {
    if (list instanceof Array) {
        return list[i];
    } else if (list instanceof LinkedList) {
        return list.get_object_at(i);
    }
};

Quicksort.set_object_at = function (list, i, value) {
    if (list instanceof Array) {
        list[i] = value;
    } else if (list instanceof LinkedList) {
        list.set_object_at(i, value);
    }
};

Quicksort.quicksort = function (list, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof Array)) {
        return;
    }

    var comparison_function = comparison_fn;

    if (comparison_function === undefined) {
        comparison_function = Quicksort.compare;
    }
    var end_index;

    if (list instanceof LinkedList) {
        end_index = list.size();
    } else if (list instanceof Array) {
        end_index = list.length - 1;
    }

    // Prevent empty lists or arrays.
    if (end_index >= 0) {
        Quicksort.quicksort_between_indices(list, 0, end_index, comparison_function);
    }
};

Quicksort.quicksort_between_indices = function (list, low, high, comparison_fn) {

    // input must be an instance of LinkedList class or must be an array in order to sort
    if (!(list instanceof LinkedList || list instanceof Array)) {
        return;
    }

    if (comparison_fn === undefined) {
        comparison_fn = Quicksort.compare;
    }

    var i = low;
    var j = high;
    var middleIndex = Math.floor((i + j) / 2);
    var middle = Quicksort.get_object_at(list, middleIndex);

    do {

        while (comparison_fn(Quicksort.get_object_at(list, i), middle)) {

            i++;
        }

        while (comparison_fn(middle, Quicksort.get_object_at(list, j))) {

            j--;
        }

        if (i <= j) {

            var temp = Quicksort.get_object_at(list, i);
            Quicksort.set_object_at(list, i, Quicksort.get_object_at(list, j));
            Quicksort.set_object_at(list, j, temp);
            i++;
            j--;
        }
    } while (i <= j);

    if (low < j) {

        Quicksort.quicksort_between_indices(list, low, j, comparison_fn);
    }

    if (high > i) {

        Quicksort.quicksort_between_indices(list, i, high, comparison_fn);
    }
};

// this function must be overriden for sorting different data types(e.g. string, integer etc.)
Quicksort.compare = function (a, b) {
    return b > a;
};

module.exports = Quicksort;

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let avsdfBase = {};

avsdfBase.layoutBase = __webpack_require__(0);
avsdfBase.AVSDFConstants = __webpack_require__(4);
avsdfBase.AVSDFEdge = __webpack_require__(5);
avsdfBase.AVSDFCircle = __webpack_require__(3);
avsdfBase.AVSDFLayout = __webpack_require__(8);
avsdfBase.AVSDFNode = __webpack_require__(6);

module.exports = avsdfBase;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Simple, internal Object.assign() polyfill for options objects etc.

module.exports = Object.assign != null ? Object.assign.bind(Object) : function (tgt) {
  for (var _len = arguments.length, srcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    srcs[_key - 1] = arguments[_key];
  }

  srcs.forEach(function (src) {
    Object.keys(src).forEach(function (k) {
      return tgt[k] = src[k];
    });
  });

  return tgt;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * circle.
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LGraph = __webpack_require__(0).LGraph;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFCircle(parent, graphMgr, vObject)
{
    LGraph.call(this, parent, graphMgr, vObject);
    this.inOrder = undefined;
    this.currentIndex = 0;
    this.nodeSeparation = undefined;
    this.stack = [];
    this.perimeter = 0;
    this.centerX = 0;
    this.centerY = 0;
    this.radius = 0;
}

AVSDFCircle.prototype = Object.create(LGraph.prototype);

for(let property in LGraph)
{
    AVSDFCircle[property] = LGraph[property];
}

AVSDFCircle.prototype.initOrdering = function()
{
    this.inOrder = [];
};

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the array in which the nodes of this circle are kept in order.
AVSDFCircle.prototype.getOrder = function()
{
    return this.inOrder;
};

// This function returns the x-coordinate of the center of this circle.
AVSDFCircle.prototype.getCenterX = function()
{
    return this.centerX;
};

// This function returns the y-coordinate of the center of this circle.
AVSDFCircle.prototype.getCenterY = function()
{
    return this.centerY;
};

// This function returns the radius of this circle.
AVSDFCircle.prototype.getRadius = function()
{
    return this.radius;
};

// This function returns the total number of vertices of this circle.
AVSDFCircle.prototype.getSize = function()
{
    return this.getNodes().length;
};

// This function calculates and returns the total number of crossings in this
// circle by adding up the crossing number of individual nodes on it.
AVSDFCircle.prototype.getTotalCrossingOfCircle = function()
{
    let self = this;
    let crossingNumber = 0;
    
    for(let node in self.inOrder)
    {
        let nodeCrossing = node.getTotalCrossingOfEdges();
        if(nodeCrossing === -1)
        {
            return -1;
        }
        crossingNumber += nodeCrossing;
    }

    return crossingNumber / 4;
};

// This function checks whether or not all of the vertices of this circle are
// assigned an index on the circle.
AVSDFCircle.prototype.hasFinishedOrdering = function()
{
    return this.currentIndex === this.getNodes().length;
};

// This function returns the node separation of this circle.
AVSDFCircle.prototype.getNodeSeparation = function()
{
    return this.nodeSeparation;
};

// This function sets the node separation of this circle.
AVSDFCircle.prototype.setNodeSeparation = function(nodeSeparation)
{
    this.nodeSeparation = nodeSeparation;
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function traverses the vertices of this circle and corrects the angle
// of the vertices with respect to their circle indices.
AVSDFCircle.prototype.correctAngles = function()
{
    let self = this;
    self.currentIndex = 0;

    self.inOrder.forEach(
        (node) =>  self.putInOrder(node)
    );
};


// This function puts the given node on the circle in the current order and
// sets its angle appropriately.
AVSDFCircle.prototype.putInOrder = function(node)
{
    let self = this;

    let nodes = self.getNodes();

    // Note that id attribute of a node is added before
    // AVSDFLayout is called
    let found = false;
    for(let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == node.id) {
            found = true;
            break;
        }
    }

    if(!found)
    {
        throw "The node must be a member of LGraph";
    }

    self.inOrder[self.currentIndex] = node;
    node.setIndex(self.currentIndex);

    if(self.currentIndex === 0)
    {
        node.setAngle(0.0);
    }
    else
    {
        node.setAngle(self.inOrder[self.currentIndex - 1].getAngle() + 2 * Math.PI *
            (node.getDiagonal() / 2 + self.nodeSeparation +
                self.inOrder[self.currentIndex - 1].getDiagonal() / 2)
            / self.perimeter);
    }

    self.currentIndex++;
};

// This function returns the next node to be placed on this circle with
// respect to the AVSDF algorithm.
AVSDFCircle.prototype.findNodeToPlace = function()
{
    let self = this;
    let sDegreeNode = undefined;

    // Find the smallest degree vertex if the stack is empty
    if(self.stack.length === 0)
    {
        sDegreeNode = self.findUnorderedSmallestDegreeNode();
    }
    // Find the first vertex in the stack not yet placed
    else
    {
        let foundUnorderNode = false;

        while (!foundUnorderNode && !(self.stack.length === 0))
        {
            sDegreeNode = self.stack.pop();
            foundUnorderNode = !sDegreeNode.isOrdered();
        }

        if (!foundUnorderNode)
        {
            sDegreeNode = undefined;
        }
    }

    // If no unordered vertex is found in the stack, find one
    // from the remaining ones
    if(sDegreeNode === undefined)
    {
        sDegreeNode = self.findUnorderedSmallestDegreeNode();
    }

    // Add the unordered neighbors of this node to the stack
    if( sDegreeNode !== undefined)
    {
        let neighbors = sDegreeNode.getNeighborsSortedByDegree();

        for(let i = neighbors.length - 1; i >= 0 ; i--)
        {
            let neighbor = neighbors[i];

            if(!neighbor.isOrdered()) // Check here for possible error
            {
                self.stack.push(neighbor);
            }
        }
    }

    return sDegreeNode;
};

// This function calculates the radius of this circle with respect to the sizes
// of the vertices and the node separation parameter.
AVSDFCircle.prototype.calculateRadius = function()
{
    let self = this;
    let totalDiagonal = 0;

    self.getNodes().forEach(
        (node) => totalDiagonal += Math.sqrt(node.getWidth() * node.getWidth() + node.getHeight() * node.getHeight())
    );

    self.perimeter = totalDiagonal + self.getNodes().length * self.nodeSeparation;
    let radius = self.perimeter / ( 2 * Math.PI);

    // Check here for possible error

    self.getParent().setWidth( 2 * radius );
    self.getParent().setHeight( 2 * radius );
    self.getParent().setCenter( self.getParent().getWidth(), self.getParent().getHeight() );

    self.centerX = self.getParent().getCenterX();
    self.centerY = self.getParent().getCenterY();
    self.radius = self.getParent().getHeight() / 2;
};

// This function calculates the total number of crossings of all vertices of
// this circle.
AVSDFCircle.prototype.calculateEdgeCrossingsOfNodes = function()
{
    this.getNodes().forEach( (node) => node.calculateTotalCrossing());
};


// This function sets the index of each vertex to its position in inOrder
// array. Note that index of a node can be different from its place in the
// array due to crossing reduction phase of the AVSDF algorithm. It loads
// old index values to vertices due to an increase in the number of
// crossings with the new indices.
AVSDFCircle.prototype.loadOldIndicesOfNodes = function()
{
    //this.inOrder.forEach( (node,index) => node.setIndex(index));
    var self = this;
    for (let i = 0; i < this.inOrder.length; i++){
        self.inOrder[i].setIndex(i);
    }
};

// This function sets the position of each node in inOrder array to its index.
// Note that index of a node can be different from its place in the inOrder
// array due to crossing reduction phase of the AVSDF algorithm. This function
// puts the nodes to their new index values in inOrder array due to a
// decrease in the number of crossings with the new indices.
AVSDFCircle.prototype.reOrderVertices = function()
{
    this.getNodes().forEach( (node) => self.inOrder[node.getIndex()] = node );
};


// This function finds and returns the unordered smallest degree vertex on
// this circle.
// TODO : should this function be private?
AVSDFCircle.prototype.findUnorderedSmallestDegreeNode = function()
{
    let minDegree = Number.MAX_SAFE_INTEGER;
    let sDegreeNode;
    
    this.getNodes().forEach(
        function(node){
            if(node.getDegree() < minDegree && !node.isOrdered())
            {
                minDegree = node.getDegree();
                sDegreeNode = node;
            }
        }
    );

    return sDegreeNode;
};


module.exports = AVSDFCircle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(0).LayoutConstants;

function AVSDFConstants(){}

// AVSDFConstants inherits properties in LayoutConstants
for(var prop in LayoutConstants){
    AVSDFConstants[prop] = LayoutConstants[prop];
}

AVSDFConstants.DEFAULT_NODE_SEPARATION = 60;

module.exports = AVSDFConstants;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * edge.
 *

 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LEdge = __webpack_require__(0).LEdge;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFEdge(source, target, vEdge)
{
    LEdge.call(this, source,target, vEdge);
}

AVSDFEdge.prototype = Object.create(LEdge.prototype);

for (let properties in LEdge)
{
    AVSDFEdge[properties] = LEdge[properties];
}

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// The function getOtherEnd returns the other end of this edge.
AVSDFEdge.prototype.getOtherEnd = function(node)
{
    return LEdge.prototype.getOtherEnd(node);
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function checks whether this edge crosses with the input edge. It
// returns false, if any of the vertices those edges are incident to are not
// yet placed on the circle.
AVSDFEdge.prototype.crossesWithEdge = function(otherEdge)
{
    let self = this;
    let sourcePos = self.getSource().getIndex();
    let targetPos = self.getTarget().getIndex();
    let otherSourcePos = otherEdge.getSource().getIndex();
    let otherTargetPos = otherEdge.getTarget().getIndex();
    
    // if any of the vertices those two edges are not yet placed
    if(sourcePos === -1 || targetPos === -1 || otherSourcePos === -1 || otherTargetPos === -1)
    {
        return false;
    }

    let otherSourceDist = otherEdge.getSource().getCircDistWithTheNode(self.getSource());
    let otherTargetDist = otherEdge.getTarget().getCircDistWithTheNode(self.getSource());
    let thisTargetDist = self.getTarget().getCircDistWithTheNode(self.getSource());

    if (thisTargetDist < Math.max(otherSourceDist, otherTargetDist) &&
            thisTargetDist > Math.min(otherSourceDist, otherTargetDist) &&
                otherTargetDist !== 0 && otherSourceDist !== 0)
    {
        return true;
    }

    return false;
};

// This function returns 1 if this edge crosses with the input edge, 0
// otherwise.
AVSDFEdge.prototype.crossingWithEdge = function(otherEdge)
{
    let self = this;
    let result = self.crossesWithEdge(otherEdge);

    return  result ? 1 : 0;
};

// This function calculates the total number of crossings of this edge with
// all the edges given in the input list.
AVSDFEdge.prototype.calculateTotalCrossingWithList = function(edgeList)
{
    let self = this;
    let totalCrossing = 0;

    edgeList.forEach(
        (edge) => totalCrossing += self.crossingWithEdge(edge)
    );

    return totalCrossing;
};

module.exports = AVSDFEdge;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * node.
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LNode = __webpack_require__(0).LNode;
let Quicksort = __webpack_require__(0).Quicksort;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFNode(gm, vNode, loc, size)
{
    // Constructor 1: AVSDFNode(gm, vNode, loc, size)
    if(loc !== undefined && size !== undefined)
    {
        LNode.call(this, gm, vNode, loc, size);
    }
    // Constructor 2: AVSDFNode(gm, vNode)
    else
    {
        LNode.call(this, gm, vNode);
    }

	// Angle of this node on the owner circle in radians
    this.angle = 0;

    // Index of this node on the owner circle
    this.circleIndex = -1;

    // Total number of crossings of the edges this node is incident to
    this.totalCrossingOfEdges = -1;

    // Whether the current edge crossing number is valid or it needs to be
    // recalculated
    this.isCrossingNumberValid = false;

}

AVSDFNode.prototype = Object.create(LNode.prototype);
for (let properties in LNode)
{
    AVSDFNode[properties] = LNode[properties];
}

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the circle this node is owned by.
AVSDFNode.prototype.getCircle = function()
{
    return this.getOwner();
};

// This function sets the index of this node on the circle, and sets the
// crossing number invalid. Due to the index change of the node; it needs to
// be recalculated.
AVSDFNode.prototype.setIndex = function(index)
{
    this.circleIndex = index;
    this.isCrossingNumberValid = false;
};

// This function returns the index of this node in the ordering of its owner
// circle. Here -1 means that the vertex is not yet placed on its owner
//circle.
AVSDFNode.prototype.getIndex = function()
{
    return this.circleIndex;
};

// This function returns the array of the neigbors of this node sorted in
// ascending order.
AVSDFNode.prototype.getNeighborsSortedByDegree = function()
{
    let  self = this;

    let neighborsList = [];
    self.getNeighborsList().addAllTo(neighborsList);
    let result = neighborsList.filter( node => ( node.getIndex() === -1 ) );

    //sort the neighbors
    let comparisonFunction = function(a,b)
    {
        return b.getDegree() > a.getDegree();
    };
    Quicksort.quicksort(result, comparisonFunction); // TODO check for bugs

    return result;
};

// This function returns the degree of this node.
AVSDFNode.prototype.getDegree = function()
{
    return this.getEdges().length;
};

// This function returns whether or not this node is currently placed on its
// owner circle.
AVSDFNode.prototype.isOrdered =  function()
{
    return (this.getIndex() > -1);
};

// This function sets the angle of this node w.r.t. its owner circle. Here
// the angle value is in radian.
AVSDFNode.prototype.setAngle = function(angle)
{
    this.angle = angle;
};

// This function returns the angle of this node w.r.t. its owner circle. Here
// the angle value is in radian.
AVSDFNode.prototype.getAngle = function()
{
    return this.angle;
};

// This function returns the index difference of this node with the input
// node. Note that the index difference cannot be negative if both nodes are
// placed on the circle. Here -1 means at least one of the nodes are not yet
// placed on the circle.
AVSDFNode.prototype.getCircDistWithTheNode =  function(refNode)
{
    let self = this;
    let otherIndex = refNode.getIndex();
    
    if(otherIndex === -1 || self.getIndex() === -1)
    {
        return -1;
    }

    let diff = self.getIndex() - otherIndex;

    if(diff < 0)
    {
        diff += self.getCircle().getSize();
    }

    return diff;
};

// This function finds the number of edge crossings between the edges of
// this node and the edges of the input one.
AVSDFNode.prototype.getCrossingNumberWithNode =  function(otherNode)
{
    let self = this;
    let totalCrossing = 0;

    self.getEdges().forEach(
        function(edge)
        {
            otherNode.getEdges().forEach(
                function(otherEdge)
                {
                    totalCrossing += edge.crossingWithEdge(otherEdge);
                }
            );
        }
    );

    return totalCrossing;
};

// This function returns the total number of edge crossings. If the previously
// calculated value is not valid due to an index change on the circle, then
// a recalculation is performed.
AVSDFNode.prototype.getTotalCrossingOfEdges = function()
{
    let self = this;
    
    if(!self.isCrossingNumberValid)
    {
        self.calculateTotalCrossing();
        self.isCrossingNumberValid = true;
    }

    return self.totalCrossingOfEdges;
};


// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function calculates the total number of crossings the edges of this
// node cause.
// TODO: check for possible error
AVSDFNode.prototype.calculateTotalCrossing = function()
{
    let self = this;
    let temp_crossing_count = 0;
    let temp_edge_list = [];
    temp_edge_list.push.apply(self.getCircle().getEdges());
    temp_edge_list = temp_edge_list.filter( (ele) => self.getEdges().indexOf(ele) < 0);

    self.getEdges().forEach(
        (edge) => temp_crossing_count += edge.calculateTotalCrossingWithList(temp_edge_list)
    );

    self.totalCrossingOfEdges = temp_crossing_count;
};

module.exports = AVSDFNode;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * Choose the type of layout that best suits your usecase as a starting point.
 *
 * A discrete layout is one that algorithmically sets resultant positions.  It
 * does not have intermediate positions.
 *
 * A continuous layout is one that updates positions continuously, like a force-
 * directed / physics simulation layout.
 */

module.exports = __webpack_require__(10);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements the overall layout process for the AVSDF algorithm
 * (Circular Drawing Algorithm by He and Sykora).
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let Layout = __webpack_require__(0).Layout;
let Quicksort = __webpack_require__(0).Quicksort;
let AVSDFConstants = __webpack_require__(4);

let AVSDFCircle = __webpack_require__(3);
let AVSDFNode = __webpack_require__(6);
let AVSDFEdge = __webpack_require__(5);

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

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------
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

    let clusterGraph = self.graphManager.getRoot(); //Gets an AVSDFCircle object

    console.log(this.nodeSeparation);
    clusterGraph.setNodeSeparation(this.nodeSeparation);
    clusterGraph.calculateRadius();
    clusterGraph.initOrdering();

    while (!clusterGraph.hasFinishedOrdering())
    {
        let node = clusterGraph.findNodeToPlace();
        clusterGraph.putInOrder(node);
    }

//    self.postProcess(clusterGraph);
//    clusterGraph.correctAngles();

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



    for (let i = list.length -1; i >= 0; i--)
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
                    index += 1;
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(7);

// registers the extension on a cytoscape lib ref
var register = function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape('layout', 'avsdf', impl); // register with cytoscape.js
};

if (typeof cytoscape !== 'undefined') {
  // expose to global cytoscape (i.e. window.cytoscape)
  register(cytoscape);
}

module.exports = register;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var AVSDFLayout = __webpack_require__(1).AVSDFLayout;
var AVSDFNode = __webpack_require__(1).AVSDFNode;
var AVSDFConstants = __webpack_require__(1).AVSDFConstants;
var PointD = __webpack_require__(1).layoutBase.PointD;
var DimensionD = __webpack_require__(1).layoutBase.DimensionD;

//Cytoscape-extention template requirements
//More details can be found in NPM 'slush-cytoscape-extension' package
var assign = __webpack_require__(2);
var ContinuousLayout = __webpack_require__(12);

var isFn = function isFn(fn) {
  return typeof fn === 'function';
};
var optFn = function optFn(opt, ele) {
  if (isFn(opt)) {
    return opt(ele);
  } else {
    return opt;
  }
};

var defaults = {
  ready: function ready() {}, // Called on `layoutready`
  stop: function stop() {}, // Called on `layoutstop`
  refresh: 30, // number of ticks per frame; higher is faster but more jerky
  fit: true, // Whether to fit the network view after when done
  padding: 10, // Padding on fit
  randomize: true, // Whether to enable incremental mode
  numIter: undefined, // Maximum number of iterations to perform
  animate: 'end', // Type of layout animation. The option set is {'during', 'end', false}
  animationDuration: 500, // Duration for animate:end
  nodeSeparation: '60',

  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,

  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10
};

var AVSDF = function (_ContinuousLayout) {
  _inherits(AVSDF, _ContinuousLayout);

  function AVSDF(options) {
    _classCallCheck(this, AVSDF);

    var _this = _possibleConstructorReturn(this, (AVSDF.__proto__ || Object.getPrototypeOf(AVSDF)).call(this, assign({}, defaults, options)));

    if (options.nodeSeparation != null) AVSDFConstants.DEFAULT_NODE_SEPARATION = options.nodeSeparation;else AVSDFConstants.DEFAULT_NODE_SEPARATION = defaults.nodeSeparation;
    return _this;
  }

  //Initializing AVSDF elements and arranging the nodes of the graph around the circle


  _createClass(AVSDF, [{
    key: 'prerun',
    value: function prerun() {
      var state = this.state; // options object combined with current state

      var self = this;
      var options = this.options; // TODO Do we need it?

      //Initialize AVSDF elements
      var avsdfLayout = this.avsdfLayout = new AVSDFLayout();
      var graphManager = this.graphManager = avsdfLayout.newGraphManager();

      var nodes = state.nodes;
      var edges = state.edges;

      var root = this.root = graphManager.addRoot();
      this.idToLNode = {};
      //Getting nodes of cytoscape and converting it to AVSDF structure
      this.processChildrenList(root, nodes, avsdfLayout);

      //Adding edges of cytoscape and transfering it to GraphManager
      for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        var sourceNode = this.idToLNode[edge.data("source")];
        var targetNode = this.idToLNode[edge.data("target")];
        if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length === 0) {
          var e1 = graphManager.add(avsdfLayout.newEdge(), sourceNode, targetNode);
          e1.id = edge.id();
        }
      }

      avsdfLayout.layout(); //TODO Change name?

      self.options.eles.nodes().layoutPositions(self, self.options, getPositions);

      function getPositions(ele, i) {
        if (typeof ele === "number") {
          ele = i;
        }
        var theId = ele.data('id');
        var lNode = self.idToLNode[theId];

        return {
          x: lNode.getRect().getCenterX(),
          y: lNode.getRect().getCenterY()
        };
      }
    }

    // run this each iteraction

  }, {
    key: 'tick',
    value: function tick() {
      var state = this.state;
      var isDone = true;

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

  }, {
    key: 'postrun',
    value: function postrun() {}

    // clean up any object refs that could prevent garbage collection, etc.

  }, {
    key: 'destroy',
    value: function destroy() {
      _get(AVSDF.prototype.__proto__ || Object.getPrototypeOf(AVSDF.prototype), 'destroy', this).call(this);

      return this;
    }

    //Transition from cytoscape nodes to AVSDF elements

  }, {
    key: 'processChildrenList',
    value: function processChildrenList(parent, children, layout) {
      var size = children.length;
      for (var i = 0; i < size; i++) {
        var theChild = children[i];
        var theNode = void 0;

        //Label dimensions are NOT included when calculating node dimensions
        var dimensions = theChild.layoutDimensions({
          nodeDimensionsIncludeLabels: false
        });

        if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
          theNode = parent.add(new AVSDFNode(layout.graphManager, null, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
        } else {
          theNode = parent.add(new AVSDFNode(this.graphManager));
        }

        // Attach id to the layout node
        theNode.id = theChild.data("id");

        // Attach the paddings of cy node to layout node
        theNode.paddingLeft = parseInt(theChild.css('padding'));
        theNode.paddingTop = parseInt(theChild.css('padding'));
        theNode.paddingRight = parseInt(theChild.css('padding'));
        theNode.paddingBottom = parseInt(theChild.css('padding'));

        // Map the layout node
        this.idToLNode[theChild.data("id")] = theNode;

        if (isNaN(theNode.rect.x)) {
          theNode.rect.x = 0;
        }

        if (isNaN(theNode.rect.y)) {
          theNode.rect.y = 0;
        }
      }
    }
  }]);

  return AVSDF;
}(ContinuousLayout);

module.exports = AVSDF;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// general default options for force-directed layout

module.exports = Object.freeze({
  animate: true, // whether to show the layout as it's running; special 'end' value makes the layout animate like a discrete layout
  refresh: 10, // number of ticks per frame; higher is faster but more jerky
  maxIterations: 1000, // max iterations before the layout will bail out
  maxSimulationTime: 4000, // max length in ms to run the layout
  ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
  fit: true, // on every layout reposition of nodes, fit the viewport
  padding: 30, // padding around the simulation
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }

  // layout event callbacks
  ready: function ready() {}, // on layoutready
  stop: function stop() {}, // on layoutstop

  // positioning options
  randomize: false, // use random node positions at beginning of layout

  // infinite layout options
  infinite: false // overrides all other options for a forces-all-the-time mode
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
A generic continuous layout class
*/

var assign = __webpack_require__(2);
var defaults = __webpack_require__(11);
var makeBoundingBox = __webpack_require__(13);

var _require = __webpack_require__(14),
    setInitialPositionState = _require.setInitialPositionState,
    refreshPositions = _require.refreshPositions,
    getNodePositionData = _require.getNodePositionData;

var _require2 = __webpack_require__(15),
    multitick = _require2.multitick;

var ContinuousLayout = function () {
  function ContinuousLayout(options) {
    _classCallCheck(this, ContinuousLayout);

    var o = this.options = assign({}, defaults, options);

    var s = this.state = assign({}, o, {
      layout: this,
      nodes: o.eles.nodes(),
      edges: o.eles.edges(),
      tickIndex: 0,
      firstUpdate: true
    });

    s.animateEnd = o.animate && o.animate === 'end';
    s.animateContinuously = o.animate && !s.animateEnd;
  }

  _createClass(ContinuousLayout, [{
    key: 'getScratch',
    value: function getScratch(el) {
      var name = this.state.name;
      var scratch = el.scratch(name);

      if (!scratch) {
        scratch = {};

        el.scratch(name, scratch);
      }

      return scratch;
    }
  }, {
    key: 'run',
    value: function run() {
      var l = this;
      var s = this.state;

      s.tickIndex = 0;
      s.firstUpdate = true;

      s.running = true;

      s.currentBoundingBox = makeBoundingBox(s.boundingBox, s.cy);

      if (s.ready) {
        l.one('ready', s.ready);
      }
      if (s.stop) {
        l.one('stop', s.stop);
      }

      s.nodes.forEach(function (n) {
        return setInitialPositionState(n, s);
      });

      l.prerun(s);

      if (s.animateContinuously) {
        var ungrabify = function ungrabify(node) {
          if (!s.ungrabifyWhileSimulating) {
            return;
          }

          var grabbable = getNodePositionData(node, s).grabbable = node.grabbable();

          if (grabbable) {
            node.ungrabify();
          }
        };

        var regrabify = function regrabify(node) {
          if (!s.ungrabifyWhileSimulating) {
            return;
          }

          var grabbable = getNodePositionData(node, s).grabbable;

          if (grabbable) {
            node.grabify();
          }
        };

        var updateGrabState = function updateGrabState(node) {
          return getNodePositionData(node, s).grabbed = node.grabbed();
        };

        var onGrab = function onGrab(_ref) {
          var target = _ref.target;

          updateGrabState(target);
        };

        var onFree = onGrab;

        var onDrag = function onDrag(_ref2) {
          var target = _ref2.target;

          var p = getNodePositionData(target, s);
          var tp = target.position();

          p.x = tp.x;
          p.y = tp.y;
        };

        var listenToGrab = function listenToGrab(node) {
          node.on('grab', onGrab);
          node.on('free', onFree);
          node.on('drag', onDrag);
        };

        var unlistenToGrab = function unlistenToGrab(node) {
          node.removeListener('grab', onGrab);
          node.removeListener('free', onFree);
          node.removeListener('drag', onDrag);
        };

        var fit = function fit() {
          if (s.fit && s.animateContinuously) {
            s.cy.fit(s.padding);
          }
        };

        var onNotDone = function onNotDone() {
          refreshPositions(s.nodes, s);
          fit();

          requestAnimationFrame(_frame);
        };

        var _frame = function _frame() {
          multitick(s, onNotDone, _onDone);
        };

        var _onDone = function _onDone() {
          refreshPositions(s.nodes, s);
          fit();

          s.nodes.forEach(function (n) {
            regrabify(n);
            unlistenToGrab(n);
          });

          s.running = false;

          l.emit('layoutstop');
        };

        s.startTime = Date.now();

        l.emit('layoutstart');

        s.nodes.forEach(function (n) {
          ungrabify(n);
          listenToGrab(n);
        });

        _frame(); // kick off
      } else {
        multitick(s);

        s.eles.layoutPositions(this, s, function (node) {
          return getNodePositionData(node, s);
        });
      }

      l.postrun(s);

      return this; // chaining
    }
  }, {
    key: 'prerun',
    value: function prerun() {}
  }, {
    key: 'postrun',
    value: function postrun() {}
  }, {
    key: 'tick',
    value: function tick() {}
  }, {
    key: 'stop',
    value: function stop() {
      this.state.running = false;

      return this; // chaining
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      return this; // chaining
    }
  }]);

  return ContinuousLayout;
}();

module.exports = ContinuousLayout;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bb, cy) {
  if (bb == null) {
    bb = { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
  } else {
    // copy
    bb = { x1: bb.x1, x2: bb.x2, y1: bb.y1, y2: bb.y2, w: bb.w, h: bb.h };
  }

  if (bb.x2 == null) {
    bb.x2 = bb.x1 + bb.w;
  }
  if (bb.w == null) {
    bb.w = bb.x2 - bb.x1;
  }
  if (bb.y2 == null) {
    bb.y2 = bb.y1 + bb.h;
  }
  if (bb.h == null) {
    bb.h = bb.y2 - bb.y1;
  }

  return bb;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(2);

var setInitialPositionState = function setInitialPositionState(node, state) {
  var p = node.position();
  var bb = state.currentBoundingBox;
  var scratch = node.scratch(state.name);

  if (scratch == null) {
    scratch = {};

    node.scratch(state.name, scratch);
  }

  assign(scratch, state.randomize ? {
    x: bb.x1 + Math.round(Math.random() * bb.w),
    y: bb.y1 + Math.round(Math.random() * bb.h)
  } : {
    x: p.x,
    y: p.y
  });

  scratch.locked = node.locked();
};

var getNodePositionData = function getNodePositionData(node, state) {
  return node.scratch(state.name);
};

var refreshPositions = function refreshPositions(nodes, state) {
  nodes.positions(function (node) {
    var scratch = node.scratch(state.name);

    return {
      x: scratch.x,
      y: scratch.y
    };
  });
};

module.exports = { setInitialPositionState: setInitialPositionState, getNodePositionData: getNodePositionData, refreshPositions: refreshPositions };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nop = function nop() {};

var tick = function tick(state) {
  var s = state;
  var l = state.layout;

  var tickIndicatesDone = l.tick(s);

  if (s.firstUpdate) {
    if (s.animateContinuously) {
      // indicate the initial positions have been set
      s.layout.emit('layoutready');
    }
    s.firstUpdate = false;
  }

  s.tickIndex++;

  var duration = s.startTime - Date.now();

  return !s.infinite && (tickIndicatesDone || s.tickIndex >= s.maxIterations || duration >= s.maxSimulationTime);
};

var multitick = function multitick(state) {
  var onNotDone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nop;
  var onDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nop;

  var done = false;
  var s = state;

  for (var i = 0; i < s.maxIterations; i++) {
    done = !s.running || tick(s);

    if (done) {
      break;
    }
  }

  if (!done) {
    onNotDone();
  } else {
    onDone();
  }
};

module.exports = { tick: tick, multitick: multitick };

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YWZiNDMxMWIwYTU3YTE2MTdhOSIsIndlYnBhY2s6Ly8vLi9+L2xheW91dC1iYXNlL2xheW91dC1iYXNlLmpzIiwid2VicGFjazovLy8uL34vYXZzZGYtYmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vYXZzZGYtYmFzZS9zcmMvQVZTREZDaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdnNkZi1iYXNlL3NyYy9BVlNERkNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2F2c2RmLWJhc2Uvc3JjL0FWU0RGRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2F2c2RmLWJhc2Uvc3JjL0FWU0RGTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYXZzZGYtYmFzZS9zcmMvQVZTREZMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvQVZTREYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvbWFrZS1iYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS90aWNrLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJPYmplY3QiLCJhc3NpZ24iLCJiaW5kIiwidGd0Iiwic3JjcyIsImZvckVhY2giLCJrZXlzIiwic3JjIiwiayIsInJlcXVpcmUiLCJpbXBsIiwicmVnaXN0ZXIiLCJjeXRvc2NhcGUiLCJBVlNERkxheW91dCIsIkFWU0RGTm9kZSIsIkFWU0RGQ29uc3RhbnRzIiwiUG9pbnREIiwibGF5b3V0QmFzZSIsIkRpbWVuc2lvbkQiLCJDb250aW51b3VzTGF5b3V0IiwiaXNGbiIsImZuIiwib3B0Rm4iLCJvcHQiLCJlbGUiLCJkZWZhdWx0cyIsInJlYWR5Iiwic3RvcCIsInJlZnJlc2giLCJmaXQiLCJwYWRkaW5nIiwicmFuZG9taXplIiwibnVtSXRlciIsInVuZGVmaW5lZCIsImFuaW1hdGUiLCJhbmltYXRpb25EdXJhdGlvbiIsIm5vZGVTZXBhcmF0aW9uIiwidGlsaW5nUGFkZGluZ1ZlcnRpY2FsIiwidGlsaW5nUGFkZGluZ0hvcml6b250YWwiLCJBVlNERiIsIm9wdGlvbnMiLCJERUZBVUxUX05PREVfU0VQQVJBVElPTiIsInN0YXRlIiwic2VsZiIsImF2c2RmTGF5b3V0IiwiZ3JhcGhNYW5hZ2VyIiwibmV3R3JhcGhNYW5hZ2VyIiwibm9kZXMiLCJlZGdlcyIsInJvb3QiLCJhZGRSb290IiwiaWRUb0xOb2RlIiwicHJvY2Vzc0NoaWxkcmVuTGlzdCIsImkiLCJsZW5ndGgiLCJlZGdlIiwic291cmNlTm9kZSIsImRhdGEiLCJ0YXJnZXROb2RlIiwiZ2V0RWRnZXNCZXR3ZWVuIiwiZTEiLCJhZGQiLCJuZXdFZGdlIiwiaWQiLCJsYXlvdXQiLCJlbGVzIiwibGF5b3V0UG9zaXRpb25zIiwiZ2V0UG9zaXRpb25zIiwidGhlSWQiLCJsTm9kZSIsIngiLCJnZXRSZWN0IiwiZ2V0Q2VudGVyWCIsInkiLCJnZXRDZW50ZXJZIiwiaXNEb25lIiwicGFyZW50IiwiY2hpbGRyZW4iLCJzaXplIiwidGhlQ2hpbGQiLCJ0aGVOb2RlIiwiZGltZW5zaW9ucyIsImxheW91dERpbWVuc2lvbnMiLCJub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJwb3NpdGlvbiIsInciLCJoIiwicGFyc2VGbG9hdCIsInBhZGRpbmdMZWZ0IiwicGFyc2VJbnQiLCJjc3MiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImlzTmFOIiwicmVjdCIsImZyZWV6ZSIsIm1heEl0ZXJhdGlvbnMiLCJtYXhTaW11bGF0aW9uVGltZSIsInVuZ3JhYmlmeVdoaWxlU2ltdWxhdGluZyIsImJvdW5kaW5nQm94IiwiaW5maW5pdGUiLCJtYWtlQm91bmRpbmdCb3giLCJzZXRJbml0aWFsUG9zaXRpb25TdGF0ZSIsInJlZnJlc2hQb3NpdGlvbnMiLCJnZXROb2RlUG9zaXRpb25EYXRhIiwibXVsdGl0aWNrIiwibyIsInMiLCJ0aWNrSW5kZXgiLCJmaXJzdFVwZGF0ZSIsImFuaW1hdGVFbmQiLCJhbmltYXRlQ29udGludW91c2x5IiwiZWwiLCJuYW1lIiwic2NyYXRjaCIsImwiLCJydW5uaW5nIiwiY3VycmVudEJvdW5kaW5nQm94IiwiY3kiLCJvbmUiLCJuIiwicHJlcnVuIiwidW5ncmFiaWZ5IiwiZ3JhYmJhYmxlIiwibm9kZSIsInJlZ3JhYmlmeSIsImdyYWJpZnkiLCJ1cGRhdGVHcmFiU3RhdGUiLCJncmFiYmVkIiwib25HcmFiIiwidGFyZ2V0Iiwib25GcmVlIiwib25EcmFnIiwicCIsInRwIiwibGlzdGVuVG9HcmFiIiwib24iLCJ1bmxpc3RlblRvR3JhYiIsInJlbW92ZUxpc3RlbmVyIiwib25Ob3REb25lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJvbkRvbmUiLCJlbWl0Iiwic3RhcnRUaW1lIiwiRGF0ZSIsIm5vdyIsInBvc3RydW4iLCJiYiIsIngxIiwieTEiLCJ3aWR0aCIsImhlaWdodCIsIngyIiwieTIiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJsb2NrZWQiLCJwb3NpdGlvbnMiLCJub3AiLCJ0aWNrIiwidGlja0luZGljYXRlc0RvbmUiLCJkdXJhdGlvbiIsImRvbmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7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QUNBO0FBQ0EsR0FBRztBQUNILGVBQWUsbUJBQW1CO0FBQ2xDOztBQUVBLHFCQUFxQixtQkFBbUI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7O0FBRUEsaUJBQWlCLFdBQVc7QUFDNUIsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGNBQWM7QUFDcEMsd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLHVCQUF1QjtBQUN6RCxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixLQUFLOztBQUU5QjtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUdBQXFHO0FBQ3JHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSw0QkFBNEIsZ0NBQWdDOztBQUU1RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxhQUFhOztBQUVwQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCOzs7Ozs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLENBQWE7QUFDakMsZ0JBQWdCLG1CQUFPLENBQUMsQ0FBYTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7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LHVFQUFuQnFCLEdBQW1CO0FBQUEsTUFBZGxCLE1BQWMsdUVBQUxrQixHQUFLOztBQUM5RCxNQUFJSSxPQUFPLEtBQVg7QUFDQSxNQUFJekQsSUFBSXBFLEtBQVI7O0FBRUEsT0FBSyxJQUFJVyxJQUFJLENBQWIsRUFBZ0JBLElBQUl5RCxFQUFFWCxhQUF0QixFQUFxQzlDLEdBQXJDLEVBQTBDO0FBQ3hDa0gsV0FBTyxDQUFDekQsRUFBRVMsT0FBSCxJQUFjNkMsS0FBTXRELENBQU4sQ0FBckI7O0FBRUEsUUFBSXlELElBQUosRUFBVTtBQUFFO0FBQVE7QUFDckI7O0FBRUQsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVHpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xHO0FBQ0Q7QUFDRixDQWZEOztBQWlCQW5KLE9BQU9DLE9BQVAsR0FBaUIsRUFBRXFLLFVBQUYsRUFBUXhELG9CQUFSLEVBQWpCLEMiLCJmaWxlIjoiY3l0b3NjYXBlLWF2c2RmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlQXZzZGZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlQXZzZGZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YWZiNDMxMWIwYTU3YTE2MTdhOSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxheW91dEJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGF5b3V0QmFzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubGV0IGxheW91dEJhc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybjtcbn07XG5cbmxheW91dEJhc2UuRkRMYXlvdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xubGF5b3V0QmFzZS5GRExheW91dENvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xubGF5b3V0QmFzZS5GRExheW91dEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcbmxheW91dEJhc2UuRkRMYXlvdXROb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCk7XG5sYXlvdXRCYXNlLkRpbWVuc2lvbkQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcbmxheW91dEJhc2UuSGFzaE1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5sYXlvdXRCYXNlLkhhc2hTZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcbmxheW91dEJhc2UuSUdlb21ldHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbmxheW91dEJhc2UuSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbmxheW91dEJhc2UuSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xubGF5b3V0QmFzZS5Qb2ludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xubGF5b3V0QmFzZS5Qb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbmxheW91dEJhc2UuUmFuZG9tU2VlZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xubGF5b3V0QmFzZS5SZWN0YW5nbGVEID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5sYXlvdXRCYXNlLlRyYW5zZm9ybSA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xubGF5b3V0QmFzZS5VbmlxdWVJREdlbmVyZXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5sYXlvdXRCYXNlLlF1aWNrc29ydCA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xubGF5b3V0QmFzZS5MaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5sYXlvdXRCYXNlLkxHcmFwaE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5sYXlvdXRCYXNlLkxHcmFwaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xubGF5b3V0QmFzZS5MRWRnZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5sYXlvdXRCYXNlLkxHcmFwaE1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xubGF5b3V0QmFzZS5MTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xubGF5b3V0QmFzZS5MYXlvdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xubGF5b3V0QmFzZS5MYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxheW91dEJhc2U7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xudmFyIExheW91dENvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgSUdlb21ldHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBJTWF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5mdW5jdGlvbiBGRExheW91dCgpIHtcbiAgTGF5b3V0LmNhbGwodGhpcyk7XG5cbiAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbiAgdGhpcy5zcHJpbmdDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIO1xuICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgPSAzLjAgKiBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMTAwO1xuICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudCA9IDAuMDtcbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IDAuMDtcbiAgdGhpcy5tYXhJdGVyYXRpb25zID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlM7XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGF5b3V0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTGF5b3V0KSB7XG4gIEZETGF5b3V0W3Byb3BdID0gTGF5b3V0W3Byb3BdO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLkRSQUZUX1FVQUxJVFkpIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKz0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMC44O1xuICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0UXVhbGl0eSA9PSBMYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSkge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAtPSAwLjMwO1xuICAgIHRoaXMubWF4SXRlcmF0aW9ucyAqPSAxLjI7XG4gIH1cblxuICB0aGlzLnRvdGFsSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID0gMDtcblxuICB0aGlzLnVzZUZSR3JpZFZhcmlhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT047XG5cbiAgdGhpcy5ncmlkID0gW107XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0lkZWFsRWRnZUxlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgbGNhRGVwdGg7XG4gIHZhciBzb3VyY2U7XG4gIHZhciB0YXJnZXQ7XG4gIHZhciBzaXplT2ZTb3VyY2VJbkxjYTtcbiAgdmFyIHNpemVPZlRhcmdldEluTGNhO1xuXG4gIHZhciBhbGxFZGdlcyA9IHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0QWxsRWRnZXMoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKykge1xuICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcblxuICAgIGVkZ2UuaWRlYWxMZW5ndGggPSB0aGlzLmlkZWFsRWRnZUxlbmd0aDtcblxuICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaCkge1xuICAgICAgc291cmNlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgICAgIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIHNpemVPZlNvdXJjZUluTGNhID0gZWRnZS5nZXRTb3VyY2VJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcbiAgICAgIHNpemVPZlRhcmdldEluTGNhID0gZWRnZS5nZXRUYXJnZXRJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcblxuICAgICAgaWYgKHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbikge1xuICAgICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IHNpemVPZlNvdXJjZUluTGNhICsgc2l6ZU9mVGFyZ2V0SW5MY2EgLSAyICogTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkU7XG4gICAgICB9XG5cbiAgICAgIGxjYURlcHRoID0gZWRnZS5nZXRMY2EoKS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcblxuICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICogRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiAqIChzb3VyY2UuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgKyB0YXJnZXQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgLSAyICogbGNhRGVwdGgpO1xuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRTcHJpbmdFbWJlZGRlciA9IGZ1bmN0aW9uICgpIHtcblxuICBpZiAodGhpcy5pbmNyZW1lbnRhbCkge1xuICAgIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQ7XG4gIH1cblxuICB0aGlzLm1heEl0ZXJhdGlvbnMgPSBNYXRoLm1heCh0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoICogNSwgdGhpcy5tYXhJdGVyYXRpb25zKTtcblxuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkID0gdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICogdGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aDtcblxuICB0aGlzLnJlcHVsc2lvblJhbmdlID0gdGhpcy5jYWxjUmVwdWxzaW9uUmFuZ2UoKTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjU3ByaW5nRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbEVkZ2VzID0gdGhpcy5nZXRBbGxFZGdlcygpO1xuICB2YXIgZWRnZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxFZGdlcy5sZW5ndGg7IGkrKykge1xuICAgIGVkZ2UgPSBsRWRnZXNbaV07XG5cbiAgICB0aGlzLmNhbGNTcHJpbmdGb3JjZShlZGdlLCBlZGdlLmlkZWFsTGVuZ3RoKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25Gb3JjZXMgPSBmdW5jdGlvbiAoZ3JpZFVwZGF0ZUFsbG93ZWQgPSB0cnVlLCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlID0gZmFsc2UpIHtcbiAgdmFyIGksIGo7XG4gIHZhciBub2RlQSwgbm9kZUI7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBwcm9jZXNzZWROb2RlU2V0O1xuXG4gIGlmICh0aGlzLnVzZUZSR3JpZFZhcmlhbnQpIHtcbiAgICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmIGdyaWRVcGRhdGVBbGxvd2VkKSB7XG4gICAgICB0aGlzLnVwZGF0ZUdyaWQoKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzZWROb2RlU2V0ID0gbmV3IFNldCgpO1xuXG4gICAgLy8gY2FsY3VsYXRlIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiBlYWNoIG5vZGVzIGFuZCBpdHMgc3Vycm91bmRpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlKG5vZGVBLCBwcm9jZXNzZWROb2RlU2V0LCBncmlkVXBkYXRlQWxsb3dlZCwgZm9yY2VUb05vZGVTdXJyb3VuZGluZ1VwZGF0ZSk7XG4gICAgICBwcm9jZXNzZWROb2RlU2V0LmFkZChub2RlQSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuXG4gICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGxOb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICBub2RlQiA9IGxOb2Rlc1tqXTtcblxuICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgc2tpcC5cbiAgICAgICAgaWYgKG5vZGVBLmdldE93bmVyKCkgIT0gbm9kZUIuZ2V0T3duZXIoKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVCKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGU7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2RlID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZShub2RlKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLm1vdmVOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIG5vZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2RlID0gbE5vZGVzW2ldO1xuICAgIG5vZGUubW92ZSgpO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlID0gZnVuY3Rpb24gKGVkZ2UsIGlkZWFsTGVuZ3RoKSB7XG4gIHZhciBzb3VyY2VOb2RlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgdmFyIHRhcmdldE5vZGUgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gIHZhciBsZW5ndGg7XG4gIHZhciBzcHJpbmdGb3JjZTtcbiAgdmFyIHNwcmluZ0ZvcmNlWDtcbiAgdmFyIHNwcmluZ0ZvcmNlWTtcblxuICAvLyBVcGRhdGUgZWRnZSBsZW5ndGhcbiAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiYgc291cmNlTm9kZS5nZXRDaGlsZCgpID09IG51bGwgJiYgdGFyZ2V0Tm9kZS5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aFNpbXBsZSgpO1xuICB9IGVsc2Uge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoKCk7XG5cbiAgICBpZiAoZWRnZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBsZW5ndGggPSBlZGdlLmdldExlbmd0aCgpO1xuXG4gIC8vIENhbGN1bGF0ZSBzcHJpbmcgZm9yY2VzXG4gIHNwcmluZ0ZvcmNlID0gdGhpcy5zcHJpbmdDb25zdGFudCAqIChsZW5ndGggLSBpZGVhbExlbmd0aCk7XG5cbiAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICBzcHJpbmdGb3JjZVggPSBzcHJpbmdGb3JjZSAqIChlZGdlLmxlbmd0aFggLyBsZW5ndGgpO1xuICBzcHJpbmdGb3JjZVkgPSBzcHJpbmdGb3JjZSAqIChlZGdlLmxlbmd0aFkgLyBsZW5ndGgpO1xuXG4gIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgZW5kIG5vZGVzXG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VYICs9IHNwcmluZ0ZvcmNlWDtcbiAgc291cmNlTm9kZS5zcHJpbmdGb3JjZVkgKz0gc3ByaW5nRm9yY2VZO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWCAtPSBzcHJpbmdGb3JjZVg7XG4gIHRhcmdldE5vZGUuc3ByaW5nRm9yY2VZIC09IHNwcmluZ0ZvcmNlWTtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2UgPSBmdW5jdGlvbiAobm9kZUEsIG5vZGVCKSB7XG4gIHZhciByZWN0QSA9IG5vZGVBLmdldFJlY3QoKTtcbiAgdmFyIHJlY3RCID0gbm9kZUIuZ2V0UmVjdCgpO1xuICB2YXIgb3ZlcmxhcEFtb3VudCA9IG5ldyBBcnJheSgyKTtcbiAgdmFyIGNsaXBQb2ludHMgPSBuZXcgQXJyYXkoNCk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBkaXN0YW5jZVNxdWFyZWQ7XG4gIHZhciBkaXN0YW5jZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlO1xuICB2YXIgcmVwdWxzaW9uRm9yY2VYO1xuICB2YXIgcmVwdWxzaW9uRm9yY2VZO1xuXG4gIGlmIChyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkgLy8gdHdvIG5vZGVzIG92ZXJsYXBcbiAgICB7XG4gICAgICAvLyBjYWxjdWxhdGUgc2VwYXJhdGlvbiBhbW91bnQgaW4geCBhbmQgeSBkaXJlY3Rpb25zXG4gICAgICBJR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQocmVjdEEsIHJlY3RCLCBvdmVybGFwQW1vdW50LCBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMi4wKTtcblxuICAgICAgcmVwdWxzaW9uRm9yY2VYID0gMiAqIG92ZXJsYXBBbW91bnRbMF07XG4gICAgICByZXB1bHNpb25Gb3JjZVkgPSAyICogb3ZlcmxhcEFtb3VudFsxXTtcblxuICAgICAgdmFyIGNoaWxkcmVuQ29uc3RhbnQgPSBub2RlQS5ub09mQ2hpbGRyZW4gKiBub2RlQi5ub09mQ2hpbGRyZW4gLyAobm9kZUEubm9PZkNoaWxkcmVuICsgbm9kZUIubm9PZkNoaWxkcmVuKTtcblxuICAgICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VYO1xuICAgICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVk7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICAgIH0gZWxzZSAvLyBubyBvdmVybGFwXG4gICAge1xuICAgICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlXG5cbiAgICAgIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmIG5vZGVBLmdldENoaWxkKCkgPT0gbnVsbCAmJiBub2RlQi5nZXRDaGlsZCgpID09IG51bGwpIC8vIHNpbXBseSBiYXNlIHJlcHVsc2lvbiBvbiBkaXN0YW5jZSBvZiBub2RlIGNlbnRlcnNcbiAgICAgICAge1xuICAgICAgICAgIGRpc3RhbmNlWCA9IHJlY3RCLmdldENlbnRlclgoKSAtIHJlY3RBLmdldENlbnRlclgoKTtcbiAgICAgICAgICBkaXN0YW5jZVkgPSByZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCk7XG4gICAgICAgIH0gZWxzZSAvLyB1c2UgY2xpcHBpbmcgcG9pbnRzXG4gICAgICAgIHtcbiAgICAgICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHJlY3RBLCByZWN0QiwgY2xpcFBvaW50cyk7XG5cbiAgICAgICAgICBkaXN0YW5jZVggPSBjbGlwUG9pbnRzWzJdIC0gY2xpcFBvaW50c1swXTtcbiAgICAgICAgICBkaXN0YW5jZVkgPSBjbGlwUG9pbnRzWzNdIC0gY2xpcFBvaW50c1sxXTtcbiAgICAgICAgfVxuXG4gICAgICAvLyBObyByZXB1bHNpb24gcmFuZ2UuIEZSIGdyaWQgdmFyaWFudCBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMuXG4gICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCkge1xuICAgICAgICBkaXN0YW5jZVggPSBJTWF0aC5zaWduKGRpc3RhbmNlWCkgKiBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgICB9XG5cbiAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKSB7XG4gICAgICAgIGRpc3RhbmNlWSA9IElNYXRoLnNpZ24oZGlzdGFuY2VZKSAqIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICAgIH1cblxuICAgICAgZGlzdGFuY2VTcXVhcmVkID0gZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZO1xuICAgICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGlzdGFuY2VTcXVhcmVkKTtcblxuICAgICAgcmVwdWxzaW9uRm9yY2UgPSB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ICogbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gZGlzdGFuY2VTcXVhcmVkO1xuXG4gICAgICAvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG4gICAgICByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuICAgICAgcmVwdWxzaW9uRm9yY2VZID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVkgLyBkaXN0YW5jZTtcblxuICAgICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXMgICAgXG4gICAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gcmVwdWxzaW9uRm9yY2VYO1xuICAgICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IHJlcHVsc2lvbkZvcmNlWTtcbiAgICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWCArPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gcmVwdWxzaW9uRm9yY2VZO1xuICAgIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG93bmVyR3JhcGg7XG4gIHZhciBvd25lckNlbnRlclg7XG4gIHZhciBvd25lckNlbnRlclk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBhYnNEaXN0YW5jZVg7XG4gIHZhciBhYnNEaXN0YW5jZVk7XG4gIHZhciBlc3RpbWF0ZWRTaXplO1xuICBvd25lckdyYXBoID0gbm9kZS5nZXRPd25lcigpO1xuXG4gIG93bmVyQ2VudGVyWCA9IChvd25lckdyYXBoLmdldFJpZ2h0KCkgKyBvd25lckdyYXBoLmdldExlZnQoKSkgLyAyO1xuICBvd25lckNlbnRlclkgPSAob3duZXJHcmFwaC5nZXRUb3AoKSArIG93bmVyR3JhcGguZ2V0Qm90dG9tKCkpIC8gMjtcbiAgZGlzdGFuY2VYID0gbm9kZS5nZXRDZW50ZXJYKCkgLSBvd25lckNlbnRlclg7XG4gIGRpc3RhbmNlWSA9IG5vZGUuZ2V0Q2VudGVyWSgpIC0gb3duZXJDZW50ZXJZO1xuICBhYnNEaXN0YW5jZVggPSBNYXRoLmFicyhkaXN0YW5jZVgpICsgbm9kZS5nZXRXaWR0aCgpIC8gMjtcbiAgYWJzRGlzdGFuY2VZID0gTWF0aC5hYnMoZGlzdGFuY2VZKSArIG5vZGUuZ2V0SGVpZ2h0KCkgLyAyO1xuXG4gIGlmIChub2RlLmdldE93bmVyKCkgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKSAvLyBpbiB0aGUgcm9vdCBncmFwaFxuICAgIHtcbiAgICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yO1xuXG4gICAgICBpZiAoYWJzRGlzdGFuY2VYID4gZXN0aW1hdGVkU2l6ZSB8fCBhYnNEaXN0YW5jZVkgPiBlc3RpbWF0ZWRTaXplKSB7XG4gICAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVggPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVg7XG4gICAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVk7XG4gICAgICB9XG4gICAgfSBlbHNlIC8vIGluc2lkZSBhIGNvbXBvdW5kXG4gICAge1xuICAgICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSkge1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYICogdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWSA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWSAqIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICB9XG4gICAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmlzQ29udmVyZ2VkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29udmVyZ2VkO1xuICB2YXIgb3NjaWxhdGluZyA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyA+IHRoaXMubWF4SXRlcmF0aW9ucyAvIDMpIHtcbiAgICBvc2NpbGF0aW5nID0gTWF0aC5hYnModGhpcy50b3RhbERpc3BsYWNlbWVudCAtIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQpIDwgMjtcbiAgfVxuXG4gIGNvbnZlcmdlZCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPCB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkO1xuXG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50O1xuXG4gIHJldHVybiBjb252ZXJnZWQgfHwgb3NjaWxhdGluZztcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgJiYgIXRoaXMuaXNTdWJMYXlvdXQpIHtcbiAgICBpZiAodGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPT0gdGhpcy5hbmltYXRpb25QZXJpb2QpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zKys7XG4gICAgfVxuICB9XG59O1xuXG4vL1RoaXMgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBjaGlsZHJlbiAod2VpZ2h0KSBmb3IgYWxsIG5vZGVzXG5GRExheW91dC5wcm90b3R5cGUuY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZTtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgIG5vZGUubm9PZkNoaWxkcmVuID0gbm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEZSLUdyaWQgVmFyaWFudCBSZXB1bHNpb24gRm9yY2UgQ2FsY3VsYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3JpZCA9IGZ1bmN0aW9uIChncmFwaCkge1xuXG4gIHZhciBzaXplWCA9IDA7XG4gIHZhciBzaXplWSA9IDA7XG5cbiAgc2l6ZVggPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldFJpZ2h0KCkgLSBncmFwaC5nZXRMZWZ0KCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzaXplWSA9IHBhcnNlSW50KE1hdGguY2VpbCgoZ3JhcGguZ2V0Qm90dG9tKCkgLSBncmFwaC5nZXRUb3AoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG5cbiAgdmFyIGdyaWQgPSBuZXcgQXJyYXkoc2l6ZVgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKykge1xuICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkoc2l6ZVkpO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplWDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaXplWTsgaisrKSB7XG4gICAgICBncmlkW2ldW2pdID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYWRkTm9kZVRvR3JpZCA9IGZ1bmN0aW9uICh2LCBsZWZ0LCB0b3ApIHtcblxuICB2YXIgc3RhcnRYID0gMDtcbiAgdmFyIGZpbmlzaFggPSAwO1xuICB2YXIgc3RhcnRZID0gMDtcbiAgdmFyIGZpbmlzaFkgPSAwO1xuXG4gIHN0YXJ0WCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLndpZHRoICsgdi5nZXRSZWN0KCkueCAtIGxlZnQpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzdGFydFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLmhlaWdodCArIHYuZ2V0UmVjdCgpLnkgLSB0b3ApIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydFg7IGkgPD0gZmluaXNoWDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IHN0YXJ0WTsgaiA8PSBmaW5pc2hZOyBqKyspIHtcbiAgICAgIHRoaXMuZ3JpZFtpXVtqXS5wdXNoKHYpO1xuICAgICAgdi5zZXRHcmlkQ29vcmRpbmF0ZXMoc3RhcnRYLCBmaW5pc2hYLCBzdGFydFksIGZpbmlzaFkpO1xuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLnVwZGF0ZUdyaWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpO1xuICB2YXIgbm9kZUE7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG5cbiAgdGhpcy5ncmlkID0gdGhpcy5jYWxjR3JpZCh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuXG4gIC8vIHB1dCBhbGwgbm9kZXMgdG8gcHJvcGVyIGdyaWQgY2VsbHNcbiAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuYWRkTm9kZVRvR3JpZChub2RlQSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldExlZnQoKSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldFRvcCgpKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSA9IGZ1bmN0aW9uIChub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCwgZ3JpZFVwZGF0ZUFsbG93ZWQsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpIHtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmIGdyaWRVcGRhdGVBbGxvd2VkIHx8IGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpIHtcbiAgICB2YXIgc3Vycm91bmRpbmcgPSBuZXcgU2V0KCk7XG4gICAgbm9kZUEuc3Vycm91bmRpbmcgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgbm9kZUI7XG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQ7XG5cbiAgICBmb3IgKHZhciBpID0gbm9kZUEuc3RhcnRYIC0gMTsgaSA8IG5vZGVBLmZpbmlzaFggKyAyOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogPSBub2RlQS5zdGFydFkgLSAxOyBqIDwgbm9kZUEuZmluaXNoWSArIDI7IGorKykge1xuICAgICAgICBpZiAoIShpIDwgMCB8fCBqIDwgMCB8fCBpID49IGdyaWQubGVuZ3RoIHx8IGogPj0gZ3JpZFswXS5sZW5ndGgpKSB7XG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBncmlkW2ldW2pdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBub2RlQiA9IGdyaWRbaV1bal1ba107XG5cbiAgICAgICAgICAgIC8vIElmIGJvdGggbm9kZXMgYXJlIG5vdCBtZW1iZXJzIG9mIHRoZSBzYW1lIGdyYXBoLCBcbiAgICAgICAgICAgIC8vIG9yIGJvdGggbm9kZXMgYXJlIHRoZSBzYW1lLCBza2lwLlxuICAgICAgICAgICAgaWYgKG5vZGVBLmdldE93bmVyKCkgIT0gbm9kZUIuZ2V0T3duZXIoKSB8fCBub2RlQSA9PSBub2RlQikge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHJlcHVsc2lvbiBmb3JjZSBiZXR3ZWVuXG4gICAgICAgICAgICAvLyBub2RlQSBhbmQgbm9kZUIgaGFzIGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkXG4gICAgICAgICAgICBpZiAoIXByb2Nlc3NlZE5vZGVTZXQuaGFzKG5vZGVCKSAmJiAhc3Vycm91bmRpbmcuaGFzKG5vZGVCKSkge1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWCgpIC0gbm9kZUIuZ2V0Q2VudGVyWCgpKSAtIChub2RlQS5nZXRXaWR0aCgpIC8gMiArIG5vZGVCLmdldFdpZHRoKCkgLyAyKTtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclkoKSAtIG5vZGVCLmdldENlbnRlclkoKSkgLSAobm9kZUEuZ2V0SGVpZ2h0KCkgLyAyICsgbm9kZUIuZ2V0SGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAgICAgICAvLyBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBub2RlQSBhbmQgbm9kZUIgXG4gICAgICAgICAgICAgIC8vIGlzIGxlc3MgdGhlbiBjYWxjdWxhdGlvbiByYW5nZVxuICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VYIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UgJiYgZGlzdGFuY2VZIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvL3RoZW4gYWRkIG5vZGVCIHRvIHN1cnJvdW5kaW5nIG9mIG5vZGVBXG4gICAgICAgICAgICAgICAgc3Vycm91bmRpbmcuYWRkKG5vZGVCKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gWy4uLnN1cnJvdW5kaW5nXTtcbiAgfVxuICBmb3IgKGkgPSAwOyBpIDwgbm9kZUEuc3Vycm91bmRpbmcubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZShub2RlQSwgbm9kZUEuc3Vycm91bmRpbmdbaV0pO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvblJhbmdlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMC4wO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dDtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIEhhc2hNYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIExHcmFwaE1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIExOb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIExHcmFwaCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIFBvaW50RCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xudmFyIFRyYW5zZm9ybSA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xudmFyIEVtaXR0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcbnZhciBIYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbmZ1bmN0aW9uIExheW91dChpc1JlbW90ZVVzZSkge1xuICBFbWl0dGVyLmNhbGwodGhpcyk7XG5cbiAgLy9MYXlvdXQgUXVhbGl0eTogMDpwcm9vZiwgMTpkZWZhdWx0LCAyOmRyYWZ0XG4gIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGNyZWF0ZSBiZW5kcG9pbnRzIGFzIG5lZWRlZCBvciBub3RcbiAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgYmUgaW5jcmVtZW50YWwgb3Igbm90XG4gIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgZnJvbSBiZWZvcmUgdG8gYWZ0ZXIgbGF5b3V0IG5vZGUgcG9zaXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSB0aGUgbGF5b3V0IHByb2Nlc3Mgb3Igbm90XG4gIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XG4gIC8vTnVtYmVyIGl0ZXJhdGlvbnMgdGhhdCBzaG91bGQgYmUgZG9uZSBiZXR3ZWVuIHR3byBzdWNjZXNzaXZlIGFuaW1hdGlvbnNcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xuICAvKipcclxuICAgKiBXaGV0aGVyIG9yIG5vdCBsZWFmIG5vZGVzIChub24tY29tcG91bmQgbm9kZXMpIGFyZSBvZiB1bmlmb3JtIHNpemVzLiBXaGVuXHJcbiAgICogdGhleSBhcmUsIGJvdGggc3ByaW5nIGFuZCByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gdHdvIGxlYWYgbm9kZXMgY2FuIGJlXHJcbiAgICogY2FsY3VsYXRlZCB3aXRob3V0IHRoZSBleHBlbnNpdmUgY2xpcHBpbmcgcG9pbnQgY2FsY3VsYXRpb25zLCByZXN1bHRpbmdcclxuICAgKiBpbiBtYWpvciBzcGVlZC11cC5cclxuICAgKi9cbiAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xuICAvKipcclxuICAgKiBUaGlzIGlzIHVzZWQgZm9yIGNyZWF0aW9uIG9mIGJlbmRwb2ludHMgYnkgdXNpbmcgZHVtbXkgbm9kZXMgYW5kIGVkZ2VzLlxyXG4gICAqIE1hcHMgYW4gTEVkZ2UgdG8gaXRzIGR1bW15IGJlbmRwb2ludCBwYXRoLlxyXG4gICAqL1xuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcbiAgdGhpcy5pc1N1YkxheW91dCA9IGZhbHNlO1xuICB0aGlzLmlzUmVtb3RlVXNlID0gZmFsc2U7XG5cbiAgaWYgKGlzUmVtb3RlVXNlICE9IG51bGwpIHtcbiAgICB0aGlzLmlzUmVtb3RlVXNlID0gaXNSZW1vdGVVc2U7XG4gIH1cbn1cblxuTGF5b3V0LlJBTkRPTV9TRUVEID0gMTtcblxuTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRW1pdHRlci5wcm90b3R5cGUpO1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBnbSA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xuICByZXR1cm4gZ207XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaCkge1xuICByZXR1cm4gbmV3IExHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICByZXR1cm4gbmV3IExOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpIHtcbiAgcmV0dXJuIG5ldyBMRWRnZShudWxsLCBudWxsLCB2RWRnZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmNoZWNrTGF5b3V0U3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA9PSBudWxsIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLmxlbmd0aCA9PSAwIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmluY2x1ZGVzSW52YWxpZEVkZ2UoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUucnVuTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcblxuICBpZiAodGhpcy50aWxpbmdQcmVMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1ByZUxheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pbml0UGFyYW1ldGVycygpO1xuICB2YXIgaXNMYXlvdXRTdWNjZXNzZnVsbDtcblxuICBpZiAodGhpcy5jaGVja0xheW91dFN1Y2Nlc3MoKSkge1xuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gdGhpcy5sYXlvdXQoKTtcbiAgfVxuXG4gIGlmIChMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9PT0gJ2R1cmluZycpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGEgJ2R1cmluZycgbGF5b3V0IGFuaW1hdGlvbi4gTGF5b3V0IGlzIG5vdCBmaW5pc2hlZCB5ZXQuIFxuICAgIC8vIFdlIG5lZWQgdG8gcGVyZm9ybSB0aGVzZSBpbiBpbmRleC5qcyB3aGVuIGxheW91dCBpcyByZWFsbHkgZmluaXNoZWQuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzTGF5b3V0U3VjY2Vzc2Z1bGwpIHtcbiAgICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpIHtcbiAgICAgIHRoaXMuZG9Qb3N0TGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMudGlsaW5nUG9zdExheW91dCkge1xuICAgIHRoaXMudGlsaW5nUG9zdExheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcblxuICByZXR1cm4gaXNMYXlvdXRTdWNjZXNzZnVsbDtcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyB0aGUgb3BlcmF0aW9ucyByZXF1aXJlZCBhZnRlciBsYXlvdXQuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5kb1Bvc3RMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vYXNzZXJ0ICFpc1N1YkxheW91dCA6IFwiU2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gc3ViLWxheW91dCFcIjtcbiAgLy8gUHJvcGFnYXRlIGdlb21ldHJpYyBjaGFuZ2VzIHRvIHYtbGV2ZWwgb2JqZWN0c1xuICBpZiAoIXRoaXMuaW5jcmVtZW50YWwpIHtcbiAgICB0aGlzLnRyYW5zZm9ybSgpO1xuICB9XG4gIHRoaXMudXBkYXRlKCk7XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgdXBkYXRlcyB0aGUgZ2VvbWV0cnkgb2YgdGhlIHRhcmdldCBncmFwaCBhY2NvcmRpbmcgdG9cclxuICogY2FsY3VsYXRlZCBsYXlvdXQuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUyID0gZnVuY3Rpb24gKCkge1xuICAvLyB1cGRhdGUgYmVuZCBwb2ludHNcbiAgaWYgKHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCkge1xuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzKCk7XG5cbiAgICAvLyByZXNldCBhbGwgZWRnZXMsIHNpbmNlIHRoZSB0b3BvbG9neSBoYXMgY2hhbmdlZFxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgfVxuXG4gIC8vIHBlcmZvcm0gZWRnZSwgbm9kZSBhbmQgcm9vdCB1cGRhdGVzIGlmIGxheW91dCBpcyBub3QgY2FsbGVkXG4gIC8vIHJlbW90ZWx5XG4gIGlmICghdGhpcy5pc1JlbW90ZVVzZSkge1xuICAgIC8vIHVwZGF0ZSBhbGwgZWRnZXNcbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcbiAgICAgIC8vICAgICAgdGhpcy51cGRhdGUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gcmVjdXJzaXZlbHkgdXBkYXRlIG5vZGVzXG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgLy8gICAgICB0aGlzLnVwZGF0ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgcm9vdCBncmFwaFxuICAgIHRoaXMudXBkYXRlKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHtcbiAgICB0aGlzLnVwZGF0ZTIoKTtcbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xuICAgIHZhciBub2RlID0gb2JqO1xuICAgIGlmIChub2RlLmdldENoaWxkKCkgIT0gbnVsbCkge1xuICAgICAgLy8gc2luY2Ugbm9kZSBpcyBjb21wb3VuZCwgcmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkIG5vZGVzXG4gICAgICB2YXIgbm9kZXMgPSBub2RlLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXBkYXRlKG5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBub2RlIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG5vZGUgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuICAgIGlmIChub2RlLnZHcmFwaE9iamVjdCAhPSBudWxsKSB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdk5vZGUgPSBub2RlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2Tm9kZS51cGRhdGUobm9kZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZWRnZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBlZGdlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChlZGdlLnZHcmFwaE9iamVjdCAhPSBudWxsKSB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkVkZ2UgPSBlZGdlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2RWRnZS51cGRhdGUoZWRnZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IG9iajtcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBncmFwaCBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBvYmplY3QgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuXG4gICAgaWYgKGdyYXBoLnZHcmFwaE9iamVjdCAhPSBudWxsKSB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkdyYXBoID0gZ3JhcGgudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZHcmFwaC51cGRhdGUoZ3JhcGgpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2V0IGFsbCBsYXlvdXQgcGFyYW1ldGVycyB0byBkZWZhdWx0IHZhbHVlc1xyXG4gKiBkZXRlcm1pbmVkIGF0IGNvbXBpbGUgdGltZS5cclxuICovXG5MYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpIHtcbiAgICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAgIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XG4gICAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xuICAgIHRoaXMuaW5jcmVtZW50YWwgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTDtcbiAgICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAgIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgfVxuXG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCkge1xuICAgIHRoaXMuYW5pbWF0aW9uT25MYXlvdXQgPSBmYWxzZTtcbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAobmV3TGVmdFRvcCkge1xuICBpZiAobmV3TGVmdFRvcCA9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnRyYW5zZm9ybShuZXcgUG9pbnREKDAsIDApKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjcmVhdGUgYSB0cmFuc2Zvcm1hdGlvbiBvYmplY3QgKGZyb20gRWNsaXBzZSB0byBsYXlvdXQpLiBXaGVuIGFuXG4gICAgLy8gaW52ZXJzZSB0cmFuc2Zvcm0gaXMgYXBwbGllZCwgd2UgZ2V0IHVwcGVyLWxlZnQgY29vcmRpbmF0ZSBvZiB0aGVcbiAgICAvLyBkcmF3aW5nIG9yIHRoZSByb290IGdyYXBoIGF0IGdpdmVuIGlucHV0IGNvb3JkaW5hdGUgKHNvbWUgbWFyZ2luc1xuICAgIC8vIGFscmVhZHkgaW5jbHVkZWQgaW4gY2FsY3VsYXRpb24gb2YgbGVmdC10b3ApLlxuXG4gICAgdmFyIHRyYW5zID0gbmV3IFRyYW5zZm9ybSgpO1xuICAgIHZhciBsZWZ0VG9wID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLnVwZGF0ZUxlZnRUb3AoKTtcblxuICAgIGlmIChsZWZ0VG9wICE9IG51bGwpIHtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWChuZXdMZWZ0VG9wLngpO1xuICAgICAgdHJhbnMuc2V0V29ybGRPcmdZKG5ld0xlZnRUb3AueSk7XG5cbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1gobGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1kobGVmdFRvcC55KTtcblxuICAgICAgdmFyIG5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICAgICAgdmFyIG5vZGU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBub2RlLnRyYW5zZm9ybSh0cmFucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnBvc2l0aW9uTm9kZXNSYW5kb21seSA9IGZ1bmN0aW9uIChncmFwaCkge1xuXG4gIGlmIChncmFwaCA9PSB1bmRlZmluZWQpIHtcbiAgICAvL2Fzc2VydCAhdGhpcy5pbmNyZW1lbnRhbDtcbiAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSh0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKSk7XG4gICAgdGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkudXBkYXRlQm91bmRzKHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsTm9kZTtcbiAgICB2YXIgY2hpbGRHcmFwaDtcblxuICAgIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkR3JhcGggPSBsTm9kZS5nZXRDaGlsZCgpO1xuXG4gICAgICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKSB7XG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRHcmFwaC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KGNoaWxkR3JhcGgpO1xuICAgICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiB0cmVlcyB3aGVyZSBlYWNoIHRyZWUgaXMgcmVwcmVzZW50ZWQgYXMgYVxyXG4gKiBsaXN0IG9mIGwtbm9kZXMuIFRoZSBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2Ygc2l6ZSAwIHdoZW46XHJcbiAqIC0gVGhlIGdyYXBoIGlzIG5vdCBmbGF0IG9yXHJcbiAqIC0gT25lIG9mIHRoZSBjb21wb25lbnQocykgb2YgdGhlIGdyYXBoIGlzIG5vdCBhIHRyZWUuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5nZXRGbGF0Rm9yZXN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZmxhdEZvcmVzdCA9IFtdO1xuICB2YXIgaXNGb3Jlc3QgPSB0cnVlO1xuXG4gIC8vIFF1aWNrIHJlZmVyZW5jZSBmb3IgYWxsIG5vZGVzIGluIHRoZSBncmFwaCBtYW5hZ2VyIGFzc29jaWF0ZWQgd2l0aFxuICAvLyB0aGlzIGxheW91dC4gVGhlIGxpc3Qgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcblxuICAvLyBGaXJzdCBiZSBzdXJlIHRoYXQgdGhlIGdyYXBoIGlzIGZsYXRcbiAgdmFyIGlzRmxhdCA9IHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxOb2Rlc1tpXS5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIGlzRmxhdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybiBlbXB0eSBmb3Jlc3QgaWYgdGhlIGdyYXBoIGlzIG5vdCBmbGF0LlxuICBpZiAoIWlzRmxhdCkge1xuICAgIHJldHVybiBmbGF0Rm9yZXN0O1xuICB9XG5cbiAgLy8gUnVuIEJGUyBmb3IgZWFjaCBjb21wb25lbnQgb2YgdGhlIGdyYXBoLlxuXG4gIHZhciB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIHRvQmVWaXNpdGVkID0gW107XG4gIHZhciBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcbiAgdmFyIHVuUHJvY2Vzc2VkTm9kZXMgPSBbXTtcblxuICB1blByb2Nlc3NlZE5vZGVzID0gdW5Qcm9jZXNzZWROb2Rlcy5jb25jYXQoYWxsTm9kZXMpO1xuXG4gIC8vIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCBmaW5kcyBhIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGggYW5kXG4gIC8vIGRlY2lkZXMgd2hldGhlciBpdCBpcyBhIHRyZWUgb3Igbm90LiBJZiBpdCBpcyBhIHRyZWUsIGFkZHMgaXQgdG8gdGhlXG4gIC8vIGZvcmVzdCBhbmQgY29udGludWVkIHdpdGggdGhlIG5leHQgY29tcG9uZW50LlxuXG4gIHdoaWxlICh1blByb2Nlc3NlZE5vZGVzLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpIHtcbiAgICB0b0JlVmlzaXRlZC5wdXNoKHVuUHJvY2Vzc2VkTm9kZXNbMF0pO1xuXG4gICAgLy8gU3RhcnQgdGhlIEJGUy4gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIHZpc2l0cyBhIG5vZGUgaW4gYVxuICAgIC8vIEJGUyBtYW5uZXIuXG4gICAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCA+IDAgJiYgaXNGb3Jlc3QpIHtcbiAgICAgIC8vcG9vbCBvcGVyYXRpb25cbiAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkWzBdO1xuICAgICAgdG9CZVZpc2l0ZWQuc3BsaWNlKDAsIDEpO1xuICAgICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgICAgdmFyIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9yRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnROZWlnaGJvciA9IG5laWdoYm9yRWRnZXNbaV0uZ2V0T3RoZXJFbmQoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8vIElmIEJGUyBpcyBub3QgZ3Jvd2luZyBmcm9tIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgIGlmIChwYXJlbnRzLmdldChjdXJyZW50Tm9kZSkgIT0gY3VycmVudE5laWdoYm9yKSB7XG4gICAgICAgICAgLy8gV2UgaGF2ZW4ndCBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvci5cbiAgICAgICAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSkge1xuICAgICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChjdXJyZW50TmVpZ2hib3IpO1xuICAgICAgICAgICAgcGFyZW50cy5wdXQoY3VycmVudE5laWdoYm9yLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNpbmNlIHdlIGhhdmUgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IgYW5kXG4gICAgICAgICAgLy8gdGhpcyBuZWlnaGJvciBpcyBub3QgcGFyZW50IG9mIGN1cnJlbnROb2RlLCBnaXZlblxuICAgICAgICAgIC8vIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHRyZWUsIGhlbmNlXG4gICAgICAgICAgLy8gaXQgaXMgbm90IGEgZm9yZXN0LlxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBpc0ZvcmVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZSBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCBhIHRyZWUuIEVtcHR5XG4gICAgLy8gcHJldmlvdXNseSBmb3VuZCB0cmVlcy4gVGhlIG1ldGhvZCB3aWxsIGVuZC5cbiAgICBpZiAoIWlzRm9yZXN0KSB7XG4gICAgICBmbGF0Rm9yZXN0ID0gW107XG4gICAgfVxuICAgIC8vIFNhdmUgY3VycmVudGx5IHZpc2l0ZWQgbm9kZXMgYXMgYSB0cmVlIGluIG91ciBmb3Jlc3QuIFJlc2V0XG4gICAgLy8gdmlzaXRlZCBhbmQgcGFyZW50cyBsaXN0cy4gQ29udGludWUgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQgb2ZcbiAgICAvLyB0aGUgZ3JhcGgsIGlmIGFueS5cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgICAgdmlzaXRlZC5hZGRBbGxUbyh0ZW1wKTtcbiAgICAgICAgZmxhdEZvcmVzdC5wdXNoKHRlbXApO1xuICAgICAgICAvL2ZsYXRGb3Jlc3QgPSBmbGF0Rm9yZXN0LmNvbmNhdCh0ZW1wKTtcbiAgICAgICAgLy91blByb2Nlc3NlZE5vZGVzLnJlbW92ZUFsbCh2aXNpdGVkKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gdGVtcFtpXTtcbiAgICAgICAgICB2YXIgaW5kZXggPSB1blByb2Nlc3NlZE5vZGVzLmluZGV4T2YodmFsdWUpO1xuICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB1blByb2Nlc3NlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICAgICAgICBwYXJlbnRzID0gbmV3IEhhc2hNYXAoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiBmbGF0Rm9yZXN0O1xufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgZHVtbXkgbm9kZXMgKGFuIGwtbGV2ZWwgbm9kZSB3aXRoIG1pbmltYWwgZGltZW5zaW9ucylcclxuICogZm9yIHRoZSBnaXZlbiBlZGdlIChvbmUgcGVyIGJlbmRwb2ludCkuIFRoZSBleGlzdGluZyBsLWxldmVsIHN0cnVjdHVyZVxyXG4gKiBpcyB1cGRhdGVkIGFjY29yZGluZ2x5LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMgPSBmdW5jdGlvbiAoZWRnZSkge1xuICB2YXIgZHVtbXlOb2RlcyA9IFtdO1xuICB2YXIgcHJldiA9IGVkZ2Uuc291cmNlO1xuXG4gIHZhciBncmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZS5iZW5kcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBub2RlXG4gICAgdmFyIGR1bW15Tm9kZSA9IHRoaXMubmV3Tm9kZShudWxsKTtcbiAgICBkdW1teU5vZGUuc2V0UmVjdChuZXcgUG9pbnQoMCwgMCksIG5ldyBEaW1lbnNpb24oMSwgMSkpO1xuXG4gICAgZ3JhcGguYWRkKGR1bW15Tm9kZSk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IGVkZ2UgYmV0d2VlbiBwcmV2IGFuZCBkdW1teSBub2RlXG4gICAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBkdW1teU5vZGUpO1xuXG4gICAgZHVtbXlOb2Rlcy5hZGQoZHVtbXlOb2RlKTtcbiAgICBwcmV2ID0gZHVtbXlOb2RlO1xuICB9XG5cbiAgdmFyIGR1bW15RWRnZSA9IHRoaXMubmV3RWRnZShudWxsKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZWRnZS50YXJnZXQpO1xuXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5wdXQoZWRnZSwgZHVtbXlOb2Rlcyk7XG5cbiAgLy8gcmVtb3ZlIHJlYWwgZWRnZSBmcm9tIGdyYXBoIG1hbmFnZXIgaWYgaXQgaXMgaW50ZXItZ3JhcGhcbiAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKCkpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gIH1cbiAgLy8gZWxzZSwgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZ3JhcGhcbiAgZWxzZSB7XG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gICAgfVxuXG4gIHJldHVybiBkdW1teU5vZGVzO1xufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYmVuZHBvaW50cyBmb3IgZWRnZXMgZnJvbSB0aGUgZHVtbXkgbm9kZXNcclxuICogYXQgbC1sZXZlbC5cclxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2VzID0gW107XG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xuICBlZGdlcyA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5rZXlTZXQoKS5jb25jYXQoZWRnZXMpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgZWRnZXMubGVuZ3RoOyBrKyspIHtcbiAgICB2YXIgbEVkZ2UgPSBlZGdlc1trXTtcblxuICAgIGlmIChsRWRnZS5iZW5kcG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmdldChsRWRnZSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZHVtbXlOb2RlID0gcGF0aFtpXTtcbiAgICAgICAgdmFyIHAgPSBuZXcgUG9pbnREKGR1bW15Tm9kZS5nZXRDZW50ZXJYKCksIGR1bW15Tm9kZS5nZXRDZW50ZXJZKCkpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBiZW5kcG9pbnQncyBsb2NhdGlvbiBhY2NvcmRpbmcgdG8gZHVtbXkgbm9kZVxuICAgICAgICB2YXIgZWJwID0gbEVkZ2UuYmVuZHBvaW50cy5nZXQoaSk7XG4gICAgICAgIGVicC54ID0gcC54O1xuICAgICAgICBlYnAueSA9IHAueTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGR1bW15IG5vZGUsIGR1bW15IGVkZ2VzIGluY2lkZW50IHdpdGggdGhpc1xuICAgICAgICAvLyBkdW1teSBub2RlIGlzIGFsc28gcmVtb3ZlZCAod2l0aGluIHRoZSByZW1vdmUgbWV0aG9kKVxuICAgICAgICBkdW1teU5vZGUuZ2V0T3duZXIoKS5yZW1vdmUoZHVtbXlOb2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIHRoZSByZWFsIGVkZ2UgdG8gZ3JhcGhcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChsRWRnZSwgbEVkZ2Uuc291cmNlLCBsRWRnZS50YXJnZXQpO1xuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzbGlkZXJWYWx1ZSwgZGVmYXVsdFZhbHVlLCBtaW5EaXYsIG1heE11bCkge1xuICBpZiAobWluRGl2ICE9IHVuZGVmaW5lZCAmJiBtYXhNdWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKSB7XG4gICAgICB2YXIgbWluVmFsdWUgPSBkZWZhdWx0VmFsdWUgLyBtaW5EaXY7XG4gICAgICB2YWx1ZSAtPSAoZGVmYXVsdFZhbHVlIC0gbWluVmFsdWUpIC8gNTAgKiAoNTAgLSBzbGlkZXJWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGRlZmF1bHRWYWx1ZSAqIG1heE11bDtcbiAgICAgIHZhbHVlICs9IChtYXhWYWx1ZSAtIGRlZmF1bHRWYWx1ZSkgLyA1MCAqIChzbGlkZXJWYWx1ZSAtIDUwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGEsIGI7XG5cbiAgICBpZiAoc2xpZGVyVmFsdWUgPD0gNTApIHtcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MDAuMDtcbiAgICAgIGIgPSBkZWZhdWx0VmFsdWUgLyAxMC4wO1xuICAgIH0gZWxzZSB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAuMDtcbiAgICAgIGIgPSAtOCAqIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYSAqIHNsaWRlclZhbHVlICsgYjtcbiAgfVxufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGZpbmRzIGFuZCByZXR1cm5zIHRoZSBjZW50ZXIgb2YgdGhlIGdpdmVuIG5vZGVzLCBhc3N1bWluZ1xyXG4gKiB0aGF0IHRoZSBnaXZlbiBub2RlcyBmb3JtIGEgdHJlZSBpbiB0aGVtc2VsdmVzLlxyXG4gKi9cbkxheW91dC5maW5kQ2VudGVyT2ZUcmVlID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gIHZhciBsaXN0ID0gW107XG4gIGxpc3QgPSBsaXN0LmNvbmNhdChub2Rlcyk7XG5cbiAgdmFyIHJlbW92ZWROb2RlcyA9IFtdO1xuICB2YXIgcmVtYWluaW5nRGVncmVlcyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciBmb3VuZENlbnRlciA9IGZhbHNlO1xuICB2YXIgY2VudGVyTm9kZSA9IG51bGw7XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09IDEgfHwgbGlzdC5sZW5ndGggPT0gMikge1xuICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gbGlzdFtpXTtcbiAgICB2YXIgZGVncmVlID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpO1xuICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5vZGUsIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKSk7XG5cbiAgICBpZiAoZGVncmVlID09IDEpIHtcbiAgICAgIHJlbW92ZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0ZW1wTGlzdCA9IFtdO1xuICB0ZW1wTGlzdCA9IHRlbXBMaXN0LmNvbmNhdChyZW1vdmVkTm9kZXMpO1xuXG4gIHdoaWxlICghZm91bmRDZW50ZXIpIHtcbiAgICB2YXIgdGVtcExpc3QyID0gW107XG4gICAgdGVtcExpc3QyID0gdGVtcExpc3QyLmNvbmNhdCh0ZW1wTGlzdCk7XG4gICAgdGVtcExpc3QgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yobm9kZSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZWlnaGJvdXJzID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG5laWdoYm91cnMuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgIHZhciBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzLnNldFtqXTtcbiAgICAgICAgaWYgKHJlbW92ZWROb2Rlcy5pbmRleE9mKG5laWdoYm91cikgPCAwKSB7XG4gICAgICAgICAgdmFyIG90aGVyRGVncmVlID0gcmVtYWluaW5nRGVncmVlcy5nZXQobmVpZ2hib3VyKTtcbiAgICAgICAgICB2YXIgbmV3RGVncmVlID0gb3RoZXJEZWdyZWUgLSAxO1xuXG4gICAgICAgICAgaWYgKG5ld0RlZ3JlZSA9PSAxKSB7XG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKG5laWdoYm91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVtYWluaW5nRGVncmVlcy5wdXQobmVpZ2hib3VyLCBuZXdEZWdyZWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVkTm9kZXMgPSByZW1vdmVkTm9kZXMuY29uY2F0KHRlbXBMaXN0KTtcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjZW50ZXJOb2RlO1xufTtcblxuLyoqXHJcbiAqIER1cmluZyB0aGUgY29hcnNlbmluZyBwcm9jZXNzLCB0aGlzIGxheW91dCBtYXkgYmUgcmVmZXJlbmNlZCBieSB0d28gZ3JhcGggbWFuYWdlcnNcclxuICogdGhpcyBzZXR0ZXIgZnVuY3Rpb24gZ3JhbnRzIGFjY2VzcyB0byBjaGFuZ2UgdGhlIGN1cnJlbnRseSBiZWluZyB1c2VkIGdyYXBoIG1hbmFnZXJcclxuICovXG5MYXlvdXQucHJvdG90eXBlLnNldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uIChnbSkge1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQ7XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBMYXlvdXRDb25zdGFudHMoKSB7fVxuXG4vKipcclxuICogTGF5b3V0IFF1YWxpdHlcclxuICovXG5MYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSA9IDA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZID0gMTtcbkxheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZID0gMjtcblxuLyoqXHJcbiAqIERlZmF1bHQgcGFyYW1ldGVyc1xyXG4gKi9cbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQgPSBmYWxzZTtcbi8vTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSB0cnVlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBmYWxzZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQgPSB0cnVlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQgPSBmYWxzZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MDtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTID0gZmFsc2U7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBHZW5lcmFsIG90aGVyIGNvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXHJcbiAqIE1hcmdpbnMgb2YgYSBncmFwaCB0byBiZSBhcHBsaWVkIG9uIGJvdWRpbmcgcmVjdGFuZ2xlIG9mIGl0cyBjb250ZW50cy4gV2VcclxuICogYXNzdW1lIG1hcmdpbnMgb24gYWxsIGZvdXIgc2lkZXMgdG8gYmUgdW5pZm9ybS5cclxuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU4gPSAxNTtcblxuLypcclxuICogV2hldGhlciB0byBjb25zaWRlciBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zIG9yIG5vdFxyXG4gKi9cbkxheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBmYWxzZTtcblxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSA9IDQwO1xuXG4vKlxyXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxyXG4gKi9cbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9IQUxGX1NJWkUgPSBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSAvIDI7XG5cbi8qXHJcbiAqIEVtcHR5IGNvbXBvdW5kIG5vZGUgc2l6ZS4gV2hlbiBhIGNvbXBvdW5kIG5vZGUgaXMgZW1wdHksIGl0cyBib3RoXHJcbiAqIGRpbWVuc2lvbnMgc2hvdWxkIGJlIG9mIHRoaXMgdmFsdWUuXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSA9IDQwO1xuXG4vKlxyXG4gKiBNaW5pbXVtIGxlbmd0aCB0aGF0IGFuIGVkZ2Ugc2hvdWxkIHRha2UgZHVyaW5nIGxheW91dFxyXG4gKi9cbkxheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xuXG4vKlxyXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgbGF5b3V0IG9wZXJhdGVzIG9uXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZID0gMTAwMDAwMDtcblxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IHJhbmRvbSBwb3NpdGlvbmluZyBjYW4gYmUgcGVyZm9ybWVkIHdpdGhcclxuICovXG5MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSAvIDEwMDA7XG5cbi8qXHJcbiAqIENvb3JkaW5hdGVzIG9mIHRoZSB3b3JsZCBjZW50ZXJcclxuICovXG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggPSAxMjAwO1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZID0gOTAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheW91dENvbnN0YW50cztcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBVbmlxdWVJREdlbmVyZXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbmZ1bmN0aW9uIEhhc2hNYXAoKSB7XG4gIHRoaXMubWFwID0ge307XG4gIHRoaXMua2V5cyA9IFtdO1xufVxuXG5IYXNoTWFwLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKSB7XG4gICAgdGhpcy5tYXBbdGhlSWRdID0gdmFsdWU7XG4gICAgdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgfVxufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIHJldHVybiB0aGlzLm1hcFtrZXldICE9IG51bGw7XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIHJldHVybiB0aGlzLm1hcFt0aGVJZF07XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5rZXlTZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmtleXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hNYXA7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBVbmlxdWVJREdlbmVyZXRvcigpIHt9XG5cblVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCA9IDA7XG5cblVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgaWYgKG9iai51bmlxdWVJRCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIG9iai51bmlxdWVJRDtcbiAgfVxuICBvYmoudW5pcXVlSUQgPSBVbmlxdWVJREdlbmVyZXRvci5nZXRTdHJpbmcoKTtcbiAgVW5pcXVlSURHZW5lcmV0b3IubGFzdElEKys7XG4gIHJldHVybiBvYmoudW5pcXVlSUQ7XG59O1xuXG5VbmlxdWVJREdlbmVyZXRvci5nZXRTdHJpbmcgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGlkID09IG51bGwpIGlkID0gVW5pcXVlSURHZW5lcmV0b3IubGFzdElEO1xuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XG59O1xuXG5VbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgYXJnO1xuICByZXR1cm4gYXJnID09IG51bGwgfHwgdHlwZSAhPSBcIm9iamVjdFwiICYmIHR5cGUgIT0gXCJmdW5jdGlvblwiO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVbmlxdWVJREdlbmVyZXRvcjtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMR3JhcGg7XG52YXIgTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG5mdW5jdGlvbiBMR3JhcGhNYW5hZ2VyKGxheW91dCkge1xuICBMR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTsgLy8gSXQgbWF5IGJlIGJldHRlciB0byBpbml0aWxpemUgdGhpcyBvdXQgb2YgdGhpcyBmdW5jdGlvbiBidXQgaXQgZ2l2ZXMgYW4gZXJyb3IgKFJpZ2h0LWhhbmQgc2lkZSBvZiAnaW5zdGFuY2VvZicgaXMgbm90IGNhbGxhYmxlKSBub3cuXG4gIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xuXG4gIHRoaXMuZ3JhcGhzID0gW107XG4gIHRoaXMuZWRnZXMgPSBbXTtcbn1cblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkUm9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5ncmFwaCA9IHRoaXMubGF5b3V0Lm5ld0dyYXBoKCk7XG4gIHZhciBubm9kZSA9IHRoaXMubGF5b3V0Lm5ld05vZGUobnVsbCk7XG4gIHZhciByb290ID0gdGhpcy5hZGQobmdyYXBoLCBubm9kZSk7XG4gIHRoaXMuc2V0Um9vdEdyYXBoKHJvb3QpO1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmV3R3JhcGgsIHBhcmVudE5vZGUsIG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcbiAgLy90aGVyZSBhcmUganVzdCAyIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCB0aGVuIGl0IGFkZHMgYW4gTEdyYXBoIGVsc2UgaXQgYWRkcyBhbiBMRWRnZVxuICBpZiAobmV3RWRnZSA9PSBudWxsICYmIHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcbiAgICBpZiAobmV3R3JhcGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIlBhcmVudCBub2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBocy5pbmRleE9mKG5ld0dyYXBoKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGFscmVhZHkgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFwaHMucHVzaChuZXdHcmFwaCk7XG5cbiAgICBpZiAobmV3R3JhcGgucGFyZW50ICE9IG51bGwpIHtcbiAgICAgIHRocm93IFwiQWxyZWFkeSBoYXMgYSBwYXJlbnQhXCI7XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlLmNoaWxkICE9IG51bGwpIHtcbiAgICAgIHRocm93IFwiQWxyZWFkeSBoYXMgYSBjaGlsZCFcIjtcbiAgICB9XG5cbiAgICBuZXdHcmFwaC5wYXJlbnQgPSBwYXJlbnROb2RlO1xuICAgIHBhcmVudE5vZGUuY2hpbGQgPSBuZXdHcmFwaDtcblxuICAgIHJldHVybiBuZXdHcmFwaDtcbiAgfSBlbHNlIHtcbiAgICAvL2NoYW5nZSB0aGUgb3JkZXIgb2YgdGhlIHBhcmFtZXRlcnNcbiAgICB0YXJnZXROb2RlID0gbmV3RWRnZTtcbiAgICBzb3VyY2VOb2RlID0gcGFyZW50Tm9kZTtcbiAgICBuZXdFZGdlID0gbmV3R3JhcGg7XG4gICAgdmFyIHNvdXJjZUdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuICAgIHZhciB0YXJnZXRHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGlmICghKHNvdXJjZUdyYXBoICE9IG51bGwgJiYgc291cmNlR3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiU291cmNlIG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG4gICAgaWYgKCEodGFyZ2V0R3JhcGggIT0gbnVsbCAmJiB0YXJnZXRHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJUYXJnZXQgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2VHcmFwaCA9PSB0YXJnZXRHcmFwaCkge1xuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcbiAgICAgIHJldHVybiBzb3VyY2VHcmFwaC5hZGQobmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gdHJ1ZTtcblxuICAgICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cbiAgICAgIC8vIGFkZCBlZGdlIHRvIGludGVyLWdyYXBoIGVkZ2UgbGlzdFxuICAgICAgaWYgKHRoaXMuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA+IC0xKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIGludGVyLWdyYXBoIGVkZ2UgbGlzdCFcIjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBzb3VyY2UgYW5kIHRhcmdldCBpbmNpZGVuY3kgbGlzdHNcbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlICE9IG51bGwgJiYgbmV3RWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG5ld0VkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEgJiYgbmV3RWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSkpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gc291cmNlIGFuZC9vciB0YXJnZXQgaW5jaWRlbmN5IGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIG5ld0VkZ2Uuc291cmNlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgICBuZXdFZGdlLnRhcmdldC5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgICByZXR1cm4gbmV3RWRnZTtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChsT2JqKSB7XG4gIGlmIChsT2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XG4gICAgdmFyIGdyYXBoID0gbE9iajtcbiAgICBpZiAoZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gdGhpcykge1xuICAgICAgdGhyb3cgXCJHcmFwaCBub3QgaW4gdGhpcyBncmFwaCBtZ3JcIjtcbiAgICB9XG4gICAgaWYgKCEoZ3JhcGggPT0gdGhpcy5yb290R3JhcGggfHwgZ3JhcGgucGFyZW50ICE9IG51bGwgJiYgZ3JhcGgucGFyZW50LmdyYXBoTWFuYWdlciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJJbnZhbGlkIHBhcmVudCBub2RlIVwiO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IHRoZSBlZGdlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBlZGdlc1RvQmVSZW1vdmVkID0gZWRnZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0RWRnZXMoKSk7XG5cbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIHRoZSBub2RlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBub2Rlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBub2Rlc1RvQmVSZW1vdmVkID0gbm9kZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG5cbiAgICB2YXIgbm9kZTtcbiAgICBzID0gbm9kZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICAgIG5vZGUgPSBub2Rlc1RvQmVSZW1vdmVkW2ldO1xuICAgICAgZ3JhcGgucmVtb3ZlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGdyYXBoIGlzIHRoZSByb290XG4gICAgaWYgKGdyYXBoID09IHRoaXMucm9vdEdyYXBoKSB7XG4gICAgICB0aGlzLnNldFJvb3RHcmFwaChudWxsKTtcbiAgICB9XG5cbiAgICAvLyBub3cgcmVtb3ZlIHRoZSBncmFwaCBpdHNlbGZcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdyYXBocy5pbmRleE9mKGdyYXBoKTtcbiAgICB0aGlzLmdyYXBocy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gYWxzbyByZXNldCB0aGUgcGFyZW50IG9mIHRoZSBncmFwaFxuICAgIGdyYXBoLnBhcmVudCA9IG51bGw7XG4gIH0gZWxzZSBpZiAobE9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgZWRnZSA9IGxPYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghZWRnZS5pc0ludGVyR3JhcGgpIHtcbiAgICAgIHRocm93IFwiTm90IGFuIGludGVyLWdyYXBoIGVkZ2UhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIHNvdXJjZSBhbmQgdGFyZ2V0IG5vZGVzJyBpbmNpZGVuY3kgbGlzdHNcblxuICAgIGlmICghKGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEgJiYgZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIG93bmVyIGdyYXBoIG1hbmFnZXIncyBpbnRlci1ncmFwaCBlZGdlIGxpc3RcblxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiRWRnZSBvd25lciBncmFwaCBvciBvd25lciBncmFwaCBtYW5hZ2VyIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmIChlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpID09IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lciBncmFwaCBtYW5hZ2VyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJvb3RHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRHcmFwaHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBocztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hbGxOb2RlcyA9PSBudWxsKSB7XG4gICAgdmFyIG5vZGVMaXN0ID0gW107XG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICAgIHRoaXMuYWxsTm9kZXMgPSBub2RlTGlzdDtcbiAgfVxuICByZXR1cm4gdGhpcy5hbGxOb2Rlcztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWxsTm9kZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbGxFZGdlcyA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hbGxFZGdlcyA9PSBudWxsKSB7XG4gICAgdmFyIGVkZ2VMaXN0ID0gW107XG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0RWRnZXMoKSk7XG4gICAgfVxuXG4gICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGhpcy5lZGdlcyk7XG5cbiAgICB0aGlzLmFsbEVkZ2VzID0gZWRnZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb247XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uIChub2RlTGlzdCkge1xuICBpZiAodGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiAhPSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbm9kZUxpc3Q7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRSb290R3JhcGggPSBmdW5jdGlvbiAoZ3JhcGgpIHtcbiAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICB0aHJvdyBcIlJvb3Qgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICB9XG5cbiAgdGhpcy5yb290R3JhcGggPSBncmFwaDtcbiAgLy8gcm9vdCBncmFwaCBtdXN0IGhhdmUgYSByb290IG5vZGUgYXNzb2NpYXRlZCB3aXRoIGl0IGZvciBjb252ZW5pZW5jZVxuICBpZiAoZ3JhcGgucGFyZW50ID09IG51bGwpIHtcbiAgICBncmFwaC5wYXJlbnQgPSB0aGlzLmxheW91dC5uZXdOb2RlKFwiUm9vdCBub2RlXCIpO1xuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxheW91dDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmlzT25lQW5jZXN0b3JPZk90aGVyID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSkge1xuICBpZiAoIShmaXJzdE5vZGUgIT0gbnVsbCAmJiBzZWNvbmROb2RlICE9IG51bGwpKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBJcyBzZWNvbmQgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgZmlyc3Qgb25lP1xuICB2YXIgb3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB2YXIgcGFyZW50Tm9kZTtcblxuICBkbyB7XG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBzZWNvbmROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG4gIC8vIElzIGZpcnN0IG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIHNlY29uZCBvbmU/XG4gIG93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XG5cbiAgZG8ge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gZmlyc3ROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2U7XG4gIHZhciBzb3VyY2VOb2RlO1xuICB2YXIgdGFyZ2V0Tm9kZTtcbiAgdmFyIHNvdXJjZUFuY2VzdG9yR3JhcGg7XG4gIHZhciB0YXJnZXRBbmNlc3RvckdyYXBoO1xuXG4gIHZhciBlZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIHMgPSBlZGdlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgZWRnZSA9IGVkZ2VzW2ldO1xuXG4gICAgc291cmNlTm9kZSA9IGVkZ2Uuc291cmNlO1xuICAgIHRhcmdldE5vZGUgPSBlZGdlLnRhcmdldDtcbiAgICBlZGdlLmxjYSA9IG51bGw7XG4gICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZU5vZGU7XG4gICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7XG5cbiAgICBpZiAoc291cmNlTm9kZSA9PSB0YXJnZXROb2RlKSB7XG4gICAgICBlZGdlLmxjYSA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG5cbiAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbCkge1xuICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7XG4gICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xuXG4gICAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbCkge1xuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSBzb3VyY2VBbmNlc3RvckdyYXBoKSB7XG4gICAgICAgICAgZWRnZS5sY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlZGdlLmxjYSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHRhcmdldEFuY2VzdG9yR3JhcGggPSBlZGdlLnRhcmdldEluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3VyY2VBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbCkge1xuICAgICAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlQW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcbiAgICAgICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IGVkZ2Uuc291cmNlSW5MY2EuZ2V0T3duZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKSB7XG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSkge1xuICAgIHJldHVybiBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgfVxuICB2YXIgZmlyc3RPd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XG5cbiAgZG8ge1xuICAgIGlmIChmaXJzdE93bmVyR3JhcGggPT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gbnVsbCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gZmlyc3RPd25lckdyYXBoKSB7XG4gICAgICAgIHJldHVybiBzZWNvbmRPd25lckdyYXBoO1xuICAgICAgfVxuICAgICAgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgICB9IHdoaWxlICh0cnVlKTtcblxuICAgIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0T3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xuICB9IHdoaWxlICh0cnVlKTtcblxuICByZXR1cm4gZmlyc3RPd25lckdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMgPSBmdW5jdGlvbiAoZ3JhcGgsIGRlcHRoKSB7XG4gIGlmIChncmFwaCA9PSBudWxsICYmIGRlcHRoID09IG51bGwpIHtcbiAgICBncmFwaCA9IHRoaXMucm9vdEdyYXBoO1xuICAgIGRlcHRoID0gMTtcbiAgfVxuICB2YXIgbm9kZTtcblxuICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICBub2RlID0gbm9kZXNbaV07XG4gICAgbm9kZS5pbmNsdXNpb25UcmVlRGVwdGggPSBkZXB0aDtcblxuICAgIGlmIChub2RlLmNoaWxkICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMobm9kZS5jaGlsZCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmluY2x1ZGVzSW52YWxpZEVkZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuXG4gIHZhciBzID0gdGhpcy5lZGdlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgZWRnZSA9IHRoaXMuZWRnZXNbaV07XG5cbiAgICBpZiAodGhpcy5pc09uZUFuY2VzdG9yT2ZPdGhlcihlZGdlLnNvdXJjZSwgZWRnZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhNYW5hZ2VyO1xuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExHcmFwaE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgSUdlb21ldHJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBJTWF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5mdW5jdGlvbiBMRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdkVkZ2UpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZmFsc2U7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkVkZ2U7XG4gIHRoaXMuYmVuZHBvaW50cyA9IFtdO1xuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbkxFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExFZGdlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5zb3VyY2U7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50YXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNJbnRlckdyYXBoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5pc0ludGVyR3JhcGg7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZW5ndGg7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0QmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYmVuZHBvaW50cztcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRMY2EgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRTb3VyY2VJbkxjYSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0SW5MY2EgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnRhcmdldEluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKHRoaXMuc291cmNlID09PSBub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0ID09PSBub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IFwiTm9kZSBpcyBub3QgaW5jaWRlbnQgd2l0aCB0aGlzIGVkZ2VcIjtcbiAgfVxufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kSW5HcmFwaCA9IGZ1bmN0aW9uIChub2RlLCBncmFwaCkge1xuICB2YXIgb3RoZXJFbmQgPSB0aGlzLmdldE90aGVyRW5kKG5vZGUpO1xuICB2YXIgcm9vdCA9IGdyYXBoLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKTtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IGdyYXBoKSB7XG4gICAgICByZXR1cm4gb3RoZXJFbmQ7XG4gICAgfVxuXG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gcm9vdCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgb3RoZXJFbmQgPSBvdGhlckVuZC5nZXRPd25lcigpLmdldFBhcmVudCgpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2xpcFBvaW50Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoNCk7XG5cbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHRoaXMudGFyZ2V0LmdldFJlY3QoKSwgdGhpcy5zb3VyY2UuZ2V0UmVjdCgpLCBjbGlwUG9pbnRDb29yZGluYXRlcyk7XG5cbiAgaWYgKCF0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCkge1xuICAgIHRoaXMubGVuZ3RoWCA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzBdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMl07XG4gICAgdGhpcy5sZW5ndGhZID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMV0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1szXTtcblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKSB7XG4gICAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApIHtcbiAgICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydCh0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xuICB9XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoU2ltcGxlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxlbmd0aFggPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJYKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJYKCk7XG4gIHRoaXMubGVuZ3RoWSA9IHRoaXMudGFyZ2V0LmdldENlbnRlclkoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclkoKTtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMCkge1xuICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKSB7XG4gICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xuICB9XG5cbiAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQodGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEVkZ2U7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBMR3JhcGhPYmplY3QodkdyYXBoT2JqZWN0KSB7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkdyYXBoT2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExHcmFwaE9iamVjdDtcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIElHZW9tZXRyeSgpIHt9XG5cbklHZW9tZXRyeS5jYWxjU2VwYXJhdGlvbkFtb3VudCA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIG92ZXJsYXBBbW91bnQsIHNlcGFyYXRpb25CdWZmZXIpIHtcbiAgaWYgKCFyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHZhciBkaXJlY3Rpb25zID0gbmV3IEFycmF5KDIpO1xuICBJR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKTtcbiAgb3ZlcmxhcEFtb3VudFswXSA9IE1hdGgubWluKHJlY3RBLmdldFJpZ2h0KCksIHJlY3RCLmdldFJpZ2h0KCkpIC0gTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSBNYXRoLm1pbihyZWN0QS5nZXRCb3R0b20oKSwgcmVjdEIuZ2V0Qm90dG9tKCkpIC0gTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XG4gIC8vIHVwZGF0ZSB0aGUgb3ZlcmxhcHBpbmcgYW1vdW50cyBmb3IgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgaWYgKHJlY3RBLmdldFgoKSA8PSByZWN0Qi5nZXRYKCkgJiYgcmVjdEEuZ2V0UmlnaHQoKSA+PSByZWN0Qi5nZXRSaWdodCgpKSB7XG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbihyZWN0Qi5nZXRYKCkgLSByZWN0QS5nZXRYKCksIHJlY3RBLmdldFJpZ2h0KCkgLSByZWN0Qi5nZXRSaWdodCgpKTtcbiAgfSBlbHNlIGlmIChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpICYmIHJlY3RCLmdldFJpZ2h0KCkgPj0gcmVjdEEuZ2V0UmlnaHQoKSkge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4ocmVjdEEuZ2V0WCgpIC0gcmVjdEIuZ2V0WCgpLCByZWN0Qi5nZXRSaWdodCgpIC0gcmVjdEEuZ2V0UmlnaHQoKSk7XG4gIH1cbiAgaWYgKHJlY3RBLmdldFkoKSA8PSByZWN0Qi5nZXRZKCkgJiYgcmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKHJlY3RCLmdldFkoKSAtIHJlY3RBLmdldFkoKSwgcmVjdEEuZ2V0Qm90dG9tKCkgLSByZWN0Qi5nZXRCb3R0b20oKSk7XG4gIH0gZWxzZSBpZiAocmVjdEIuZ2V0WSgpIDw9IHJlY3RBLmdldFkoKSAmJiByZWN0Qi5nZXRCb3R0b20oKSA+PSByZWN0QS5nZXRCb3R0b20oKSkge1xuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4ocmVjdEEuZ2V0WSgpIC0gcmVjdEIuZ2V0WSgpLCByZWN0Qi5nZXRCb3R0b20oKSAtIHJlY3RBLmdldEJvdHRvbSgpKTtcbiAgfVxuXG4gIC8vIGZpbmQgc2xvcGUgb2YgdGhlIGxpbmUgcGFzc2VzIHR3byBjZW50ZXJzXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC8gKHJlY3RCLmdldENlbnRlclgoKSAtIHJlY3RBLmdldENlbnRlclgoKSkpO1xuICAvLyBpZiBjZW50ZXJzIGFyZSBvdmVybGFwcGVkXG4gIGlmIChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpICYmIHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpIHtcbiAgICAvLyBhc3N1bWUgdGhlIHNsb3BlIGlzIDEgKDQ1IGRlZ3JlZSlcbiAgICBzbG9wZSA9IDEuMDtcbiAgfVxuXG4gIHZhciBtb3ZlQnlZID0gc2xvcGUgKiBvdmVybGFwQW1vdW50WzBdO1xuICB2YXIgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMV0gLyBzbG9wZTtcbiAgaWYgKG92ZXJsYXBBbW91bnRbMF0gPCBtb3ZlQnlYKSB7XG4gICAgbW92ZUJ5WCA9IG92ZXJsYXBBbW91bnRbMF07XG4gIH0gZWxzZSB7XG4gICAgbW92ZUJ5WSA9IG92ZXJsYXBBbW91bnRbMV07XG4gIH1cbiAgLy8gcmV0dXJuIGhhbGYgdGhlIGFtb3VudCBzbyB0aGF0IGlmIGVhY2ggcmVjdGFuZ2xlIGlzIG1vdmVkIGJ5IHRoZXNlXG4gIC8vIGFtb3VudHMgaW4gb3Bwb3NpdGUgZGlyZWN0aW9ucywgb3ZlcmxhcCB3aWxsIGJlIHJlc29sdmVkXG4gIG92ZXJsYXBBbW91bnRbMF0gPSAtMSAqIGRpcmVjdGlvbnNbMF0gKiAobW92ZUJ5WCAvIDIgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IC0xICogZGlyZWN0aW9uc1sxXSAqIChtb3ZlQnlZIC8gMiArIHNlcGFyYXRpb25CdWZmZXIpO1xufTtcblxuSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucykge1xuICBpZiAocmVjdEEuZ2V0Q2VudGVyWCgpIDwgcmVjdEIuZ2V0Q2VudGVyWCgpKSB7XG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xuICB9IGVsc2Uge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAxO1xuICB9XG5cbiAgaWYgKHJlY3RBLmdldENlbnRlclkoKSA8IHJlY3RCLmdldENlbnRlclkoKSkge1xuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gMTtcbiAgfVxufTtcblxuSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCByZXN1bHQpIHtcbiAgLy9yZXN1bHRbMC0xXSB3aWxsIGNvbnRhaW4gY2xpcFBvaW50IG9mIHJlY3RBLCByZXN1bHRbMi0zXSB3aWxsIGNvbnRhaW4gY2xpcFBvaW50IG9mIHJlY3RCXG4gIHZhciBwMXggPSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XG4gIHZhciBwMnggPSByZWN0Qi5nZXRDZW50ZXJYKCk7XG4gIHZhciBwMnkgPSByZWN0Qi5nZXRDZW50ZXJZKCk7XG5cbiAgLy9pZiB0d28gcmVjdGFuZ2xlcyBpbnRlcnNlY3QsIHRoZW4gY2xpcHBpbmcgcG9pbnRzIGFyZSBjZW50ZXJzXG4gIGlmIChyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSkge1xuICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvL3ZhcmlhYmxlcyBmb3IgcmVjdEFcbiAgdmFyIHRvcExlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcbiAgdmFyIHRvcFJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xuICB2YXIgYm90dG9tTGVmdEF4ID0gcmVjdEEuZ2V0WCgpO1xuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XG4gIHZhciBib3R0b21SaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGhhbGZXaWR0aEEgPSByZWN0QS5nZXRXaWR0aEhhbGYoKTtcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xuICAvL3ZhcmlhYmxlcyBmb3IgcmVjdEJcbiAgdmFyIHRvcExlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcbiAgdmFyIHRvcFJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xuICB2YXIgYm90dG9tTGVmdEJ4ID0gcmVjdEIuZ2V0WCgpO1xuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XG4gIHZhciBib3R0b21SaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGhhbGZXaWR0aEIgPSByZWN0Qi5nZXRXaWR0aEhhbGYoKTtcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xuICAvL2ZsYWcgd2hldGhlciBjbGlwcGluZyBwb2ludHMgYXJlIGZvdW5kXG4gIHZhciBjbGlwUG9pbnRBRm91bmQgPSBmYWxzZTtcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xuXG4gIC8vIGxpbmUgaXMgdmVydGljYWxcbiAgaWYgKHAxeCA9PSBwMngpIHtcbiAgICBpZiAocDF5ID4gcDJ5KSB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChwMXkgPCBwMnkpIHtcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9ub3QgbGluZSwgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIC8vIGxpbmUgaXMgaG9yaXpvbnRhbFxuICBlbHNlIGlmIChwMXkgPT0gcDJ5KSB7XG4gICAgICBpZiAocDF4ID4gcDJ4KSB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gcDF5O1xuICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAocDF4IDwgcDJ4KSB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wTGVmdEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vbm90IHZhbGlkIGxpbmUsIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xuICAgICAgdmFyIHNsb3BlQSA9IHJlY3RBLmhlaWdodCAvIHJlY3RBLndpZHRoO1xuICAgICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xuXG4gICAgICAvL3Nsb3BlIG9mIGxpbmUgYmV0d2VlbiBjZW50ZXIgb2YgcmVjdEEgYW5kIGNlbnRlciBvZiByZWN0QlxuICAgICAgdmFyIHNsb3BlUHJpbWUgPSAocDJ5IC0gcDF5KSAvIChwMnggLSBwMXgpO1xuICAgICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQTtcbiAgICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkI7XG4gICAgICB2YXIgdGVtcFBvaW50QXg7XG4gICAgICB2YXIgdGVtcFBvaW50QXk7XG4gICAgICB2YXIgdGVtcFBvaW50Qng7XG4gICAgICB2YXIgdGVtcFBvaW50Qnk7XG5cbiAgICAgIC8vZGV0ZXJtaW5lIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnQgaXMgdGhlIGNvcm5lciBvZiBub2RlQVxuICAgICAgaWYgKC1zbG9wZUEgPT0gc2xvcGVQcmltZSkge1xuICAgICAgICBpZiAocDF4ID4gcDJ4KSB7XG4gICAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tTGVmdEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2xvcGVBID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vZGV0ZXJtaW5lIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnQgaXMgdGhlIGNvcm5lciBvZiBub2RlQlxuICAgICAgaWYgKC1zbG9wZUIgPT0gc2xvcGVQcmltZSkge1xuICAgICAgICBpZiAocDJ4ID4gcDF4KSB7XG4gICAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tTGVmdEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRvcFJpZ2h0Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2xvcGVCID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAyeCA+IHAxeCkge1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSBib3R0b21SaWdodEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcbiAgICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcbiAgICAgIGlmIChwMXggPiBwMngpIHtcbiAgICAgICAgaWYgKHAxeSA+IHAyeSkge1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDQpO1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVBLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQiwgc2xvcGVQcmltZSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwMXkgPiBwMnkpIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXG4gICAgICBpZiAoIWNsaXBQb2ludEFGb3VuZCkge1xuICAgICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQSkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRlbXBQb2ludEF5ID0gdG9wTGVmdEF5O1xuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyAtaGFsZkhlaWdodEEgLyBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgLWhhbGZXaWR0aEEgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIWNsaXBQb2ludEJGb3VuZCkge1xuICAgICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQikge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAtaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgICAgIHRlbXBQb2ludEJ5ID0gcDJ5ICsgaGFsZldpZHRoQiAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGVtcFBvaW50QnkgPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeCA9IHAyeCArIGhhbGZIZWlnaHRCIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgICAgIHRlbXBQb2ludEJ5ID0gcDJ5ICsgLWhhbGZXaWR0aEIgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5JR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoc2xvcGUsIHNsb3BlUHJpbWUsIGxpbmUpIHtcbiAgaWYgKHNsb3BlID4gc2xvcGVQcmltZSkge1xuICAgIHJldHVybiBsaW5lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxICsgbGluZSAlIDQ7XG4gIH1cbn07XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoczEsIHMyLCBmMSwgZjIpIHtcbiAgaWYgKGYyID09IG51bGwpIHtcbiAgICByZXR1cm4gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbjIoczEsIHMyLCBmMSk7XG4gIH1cbiAgdmFyIHgxID0gczEueDtcbiAgdmFyIHkxID0gczEueTtcbiAgdmFyIHgyID0gczIueDtcbiAgdmFyIHkyID0gczIueTtcbiAgdmFyIHgzID0gZjEueDtcbiAgdmFyIHkzID0gZjEueTtcbiAgdmFyIHg0ID0gZjIueDtcbiAgdmFyIHk0ID0gZjIueTtcbiAgdmFyIHgsIHk7IC8vIGludGVyc2VjdGlvbiBwb2ludFxuICB2YXIgYTEsIGEyLCBiMSwgYjIsIGMxLCBjMjsgLy8gY29lZmZpY2llbnRzIG9mIGxpbmUgZXFucy5cbiAgdmFyIGRlbm9tO1xuXG4gIGExID0geTIgLSB5MTtcbiAgYjEgPSB4MSAtIHgyO1xuICBjMSA9IHgyICogeTEgLSB4MSAqIHkyOyAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XG5cbiAgYTIgPSB5NCAtIHkzO1xuICBiMiA9IHgzIC0geDQ7XG4gIGMyID0geDQgKiB5MyAtIHgzICogeTQ7IC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cblxuICBkZW5vbSA9IGExICogYjIgLSBhMiAqIGIxO1xuXG4gIGlmIChkZW5vbSA9PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xuICB5ID0gKGEyICogYzEgLSBhMSAqIGMyKSAvIGRlbm9tO1xuXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogQ2xhc3MgQ29uc3RhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXHJcbiAqIFNvbWUgdXNlZnVsIHByZS1jYWxjdWxhdGVkIGNvbnN0YW50c1xyXG4gKi9cbklHZW9tZXRyeS5IQUxGX1BJID0gMC41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5PTkVfQU5EX0hBTEZfUEkgPSAxLjUgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRXT19QSSA9IDIuMCAqIE1hdGguUEk7XG5JR2VvbWV0cnkuVEhSRUVfUEkgPSAzLjAgKiBNYXRoLlBJO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElHZW9tZXRyeTtcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBJTWF0aCgpIHt9XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBpbnB1dCB2YWx1ZS5cclxuICovXG5JTWF0aC5zaWduID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG59O1xuXG5JTWF0aC5jZWlsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElNYXRoO1xuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIEludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIExHcmFwaE1hbmFnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIExOb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIFJlY3RhbmdsZUQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBQb2ludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xudmFyIExpbmtlZExpc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcblxuZnVuY3Rpb24gTEdyYXBoKHBhcmVudCwgb2JqMiwgdkdyYXBoKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZHcmFwaCk7XG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLm1hcmdpbiA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTjtcbiAgdGhpcy5lZGdlcyA9IFtdO1xuICB0aGlzLm5vZGVzID0gW107XG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTEdyYXBoTWFuYWdlcikge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMjtcbiAgfSBlbHNlIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExheW91dCkge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMi5ncmFwaE1hbmFnZXI7XG4gIH1cbn1cblxuTEdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMR3JhcGhbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5vZGVzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGVmdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJpZ2h0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnRvcDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ib3R0b207XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5pc0Nvbm5lY3RlZDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iajEsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpIHtcbiAgaWYgKHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcbiAgICB2YXIgbmV3Tm9kZSA9IG9iajE7XG4gICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaGFzIG5vIGdyYXBoIG1nciFcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKG5ld05vZGUpID4gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBhbHJlYWR5IGluIGdyYXBoIVwiO1xuICAgIH1cbiAgICBuZXdOb2RlLm93bmVyID0gdGhpcztcbiAgICB0aGlzLmdldE5vZGVzKCkucHVzaChuZXdOb2RlKTtcblxuICAgIHJldHVybiBuZXdOb2RlO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZXdFZGdlID0gb2JqMTtcbiAgICBpZiAoISh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihzb3VyY2VOb2RlKSA+IC0xICYmIHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHRhcmdldE5vZGUpID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBvciB0YXJnZXQgbm90IGluIGdyYXBoIVwiO1xuICAgIH1cblxuICAgIGlmICghKHNvdXJjZU5vZGUub3duZXIgPT0gdGFyZ2V0Tm9kZS5vd25lciAmJiBzb3VyY2VOb2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlTm9kZS5vd25lciAhPSB0YXJnZXROb2RlLm93bmVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgLy8gc2V0IGFzIGludHJhLWdyYXBoIGVkZ2VcbiAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xuXG4gICAgLy8gYWRkIHRvIGdyYXBoIGVkZ2UgbGlzdFxuICAgIHRoaXMuZ2V0RWRnZXMoKS5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgLy8gYWRkIHRvIGluY2lkZW5jeSBsaXN0c1xuICAgIHNvdXJjZU5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgIGlmICh0YXJnZXROb2RlICE9IHNvdXJjZU5vZGUpIHtcbiAgICAgIHRhcmdldE5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RWRnZTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBub2RlID0gb2JqO1xuICBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEobm9kZS5vd25lciAhPSBudWxsICYmIG5vZGUub3duZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ3JhcGhNYW5hZ2VyID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiT3duZXIgZ3JhcGggbWFuYWdlciBpcyBpbnZhbGlkIVwiO1xuICAgIH1cbiAgICAvLyByZW1vdmUgaW5jaWRlbnQgZWRnZXMgZmlyc3QgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IG5vZGUuZWRnZXMuc2xpY2UoKTtcbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcblxuICAgICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVkZ2Uuc291cmNlLm93bmVyLnJlbW92ZShlZGdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBub3cgdGhlIG5vZGUgaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKG5vZGUpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnRhcmdldC5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyID09IHRoaXMgJiYgZWRnZS50YXJnZXQub3duZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgb3duZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIHZhciB0YXJnZXRJbmRleCA9IGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgaWYgKCEoc291cmNlSW5kZXggPiAtMSAmJiB0YXJnZXRJbmRleCA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBkb2Vzbid0IGtub3cgdGhpcyBlZGdlIVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShzb3VyY2VJbmRleCwgMSk7XG5cbiAgICBpZiAoZWRnZS50YXJnZXQgIT0gZWRnZS5zb3VyY2UpIHtcbiAgICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5pbmRleE9mKGVkZ2UpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUxlZnRUb3AgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLmdldE5vZGVzKCk7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdCkge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC8vIERvIHdlIGhhdmUgYW55IG5vZGVzIGluIHRoaXMgZ3JhcGg/XG4gIGlmICh0b3AgPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdCAhPSB1bmRlZmluZWQpIHtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfSBlbHNlIHtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGxlZnQgLSBtYXJnaW47XG4gIHRoaXMudG9wID0gdG9wIC0gbWFyZ2luO1xuXG4gIC8vIEFwcGx5IHRoZSBtYXJnaW5zIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAocmVjdXJzaXZlKSB7XG4gIC8vIGNhbGN1bGF0ZSBib3VuZHNcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiBsTm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICB9XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdCkge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cblxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodCkge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pIHtcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XG4gICAgfVxuICB9XG5cbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0LCBib3R0b20gLSB0b3ApO1xuICBpZiAobGVmdCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSkge1xuICAgIHRoaXMubGVmdCA9IHRoaXMucGFyZW50LmdldExlZnQoKTtcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5wYXJlbnQuZ2V0UmlnaHQoKTtcbiAgICB0aGlzLnRvcCA9IHRoaXMucGFyZW50LmdldFRvcCgpO1xuICAgIHRoaXMuYm90dG9tID0gdGhpcy5wYXJlbnQuZ2V0Qm90dG9tKCk7XG4gIH1cblxuICBpZiAobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH0gZWxzZSB7XG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XG4gIH1cblxuICB0aGlzLmxlZnQgPSBib3VuZGluZ1JlY3QueCAtIG1hcmdpbjtcbiAgdGhpcy5yaWdodCA9IGJvdW5kaW5nUmVjdC54ICsgYm91bmRpbmdSZWN0LndpZHRoICsgbWFyZ2luO1xuICB0aGlzLnRvcCA9IGJvdW5kaW5nUmVjdC55IC0gbWFyZ2luO1xuICB0aGlzLmJvdHRvbSA9IGJvdW5kaW5nUmVjdC55ICsgYm91bmRpbmdSZWN0LmhlaWdodCArIG1hcmdpbjtcbn07XG5cbkxHcmFwaC5jYWxjdWxhdGVCb3VuZHMgPSBmdW5jdGlvbiAobm9kZXMpIHtcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdCkge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cblxuICAgIGlmIChyaWdodCA8IG5vZGVSaWdodCkge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pIHtcbiAgICAgIGJvdHRvbSA9IG5vZGVCb3R0b207XG4gICAgfVxuICB9XG5cbiAgdmFyIGJvdW5kaW5nUmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxlZnQsIHRvcCwgcmlnaHQgLSBsZWZ0LCBib3R0b20gLSB0b3ApO1xuXG4gIHJldHVybiBib3VuZGluZ1JlY3Q7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNpemUgPSAwO1xuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIHNpemUgKz0gbE5vZGUuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgfVxuXG4gIGlmIChzaXplID09IDApIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBMYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHNpemUgLyBNYXRoLnNxcnQodGhpcy5ub2Rlcy5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQ29ubmVjdGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICh0aGlzLm5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHF1ZXVlID0gbmV3IExpbmtlZExpc3QoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMubm9kZXNbMF07XG4gIHZhciBuZWlnaGJvckVkZ2VzO1xuICB2YXIgY3VycmVudE5laWdoYm9yO1xuICB2YXIgY2hpbGRyZW5PZk5vZGUgPSBjdXJyZW50Tm9kZS53aXRoQ2hpbGRyZW4oKTtcbiAgY2hpbGRyZW5PZk5vZGUuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgIHF1ZXVlLnB1c2gobm9kZSk7XG4gICAgdmlzaXRlZC5hZGQobm9kZSk7XG4gIH0pO1xuXG4gIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICBjdXJyZW50Tm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuICAgIHZhciBzaXplID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIHZhciBuZWlnaGJvckVkZ2UgPSBuZWlnaGJvckVkZ2VzW2ldO1xuICAgICAgY3VycmVudE5laWdoYm9yID0gbmVpZ2hib3JFZGdlLmdldE90aGVyRW5kSW5HcmFwaChjdXJyZW50Tm9kZSwgdGhpcyk7XG5cbiAgICAgIC8vIEFkZCB1bnZpc2l0ZWQgbmVpZ2hib3JzIHRvIHRoZSBsaXN0IHRvIHZpc2l0XG4gICAgICBpZiAoY3VycmVudE5laWdoYm9yICE9IG51bGwgJiYgIXZpc2l0ZWQuaGFzKGN1cnJlbnROZWlnaGJvcikpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuT2ZOZWlnaGJvciA9IGN1cnJlbnROZWlnaGJvci53aXRoQ2hpbGRyZW4oKTtcblxuICAgICAgICBjaGlsZHJlbk9mTmVpZ2hib3IuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHF1ZXVlLnB1c2gobm9kZSk7XG4gICAgICAgICAgdmlzaXRlZC5hZGQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcblxuICBpZiAodmlzaXRlZC5zaXplID49IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgdmFyIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPSAwO1xuXG4gICAgdmlzaXRlZC5mb3JFYWNoKGZ1bmN0aW9uICh2aXNpdGVkTm9kZSkge1xuICAgICAgaWYgKHZpc2l0ZWROb2RlLm93bmVyID09IHNlbGYpIHtcbiAgICAgICAgbm9PZlZpc2l0ZWRJblRoaXNHcmFwaCsrO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPT0gdGhpcy5ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGg7XG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gSW50ZWdlcigpIHt9XG5cbkludGVnZXIuTUFYX1ZBTFVFID0gMjE0NzQ4MzY0NztcbkludGVnZXIuTUlOX1ZBTFVFID0gLTIxNDc0ODM2NDg7XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZWdlcjtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBJbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgUmVjdGFuZ2xlRCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIExheW91dENvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgUmFuZG9tU2VlZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xudmFyIFBvaW50RCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xudmFyIEhhc2hTZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuZnVuY3Rpb24gTE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAxIDogTE5vZGUoTEdyYXBoTWFuYWdlciBnbSwgUG9pbnQgbG9jLCBEaW1lbnNpb24gc2l6ZSwgT2JqZWN0IHZOb2RlKVxuICBpZiAoc2l6ZSA9PSBudWxsICYmIHZOb2RlID09IG51bGwpIHtcbiAgICB2Tm9kZSA9IGxvYztcbiAgfVxuXG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZOb2RlKTtcblxuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDIgOiBMTm9kZShMYXlvdXQgbGF5b3V0LCBPYmplY3Qgdk5vZGUpXG4gIGlmIChnbS5ncmFwaE1hbmFnZXIgIT0gbnVsbCkgZ20gPSBnbS5ncmFwaE1hbmFnZXI7XG5cbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XG4gIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdk5vZGU7XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcblxuICBpZiAoc2l6ZSAhPSBudWxsICYmIGxvYyAhPSBudWxsKSB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRChsb2MueCwgbG9jLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtlbHNlIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKCk7XG59XG5cbkxOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMTm9kZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5lZGdlcztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY2hpbGQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0T3duZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8vICBpZiAodGhpcy5vd25lciAhPSBudWxsKSB7XG4gIC8vICAgIGlmICghKHRoaXMub3duZXIgPT0gbnVsbCB8fCB0aGlzLm93bmVyLmdldE5vZGVzKCkuaW5kZXhPZih0aGlzKSA+IC0xKSkge1xuICAvLyAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAvLyAgICB9XG4gIC8vICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgdGhpcy5yZWN0LndpZHRoID0gd2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KSB7XG4gIHRoaXMucmVjdC5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMiwgdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0IC8gMik7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54LCB0aGlzLnJlY3QueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXREaWFnb25hbCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnJlY3Qud2lkdGggKiB0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uICh1cHBlckxlZnQsIGRpbWVuc2lvbikge1xuICB0aGlzLnJlY3QueCA9IHVwcGVyTGVmdC54O1xuICB0aGlzLnJlY3QueSA9IHVwcGVyTGVmdC55O1xuICB0aGlzLnJlY3Qud2lkdGggPSBkaW1lbnNpb24ud2lkdGg7XG4gIHRoaXMucmVjdC5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldENlbnRlciA9IGZ1bmN0aW9uIChjeCwgY3kpIHtcbiAgdGhpcy5yZWN0LnggPSBjeCAtIHRoaXMucmVjdC53aWR0aCAvIDI7XG4gIHRoaXMucmVjdC55ID0gY3kgLSB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHRoaXMucmVjdC54ID0geDtcbiAgdGhpcy5yZWN0LnkgPSB5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uIChkeCwgZHkpIHtcbiAgdGhpcy5yZWN0LnggKz0gZHg7XG4gIHRoaXMucmVjdC55ICs9IGR5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VMaXN0VG9Ob2RlID0gZnVuY3Rpb24gKHRvKSB7XG4gIHZhciBlZGdlTGlzdCA9IFtdO1xuICB2YXIgZWRnZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ID09IHRvKSB7XG4gICAgICBpZiAoZWRnZS5zb3VyY2UgIT0gc2VsZikgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UhXCI7XG5cbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZUxpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXNCZXR3ZWVuID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gIHZhciBlZGdlTGlzdCA9IFtdO1xuICB2YXIgZWRnZTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgPT0gc2VsZiB8fCBlZGdlLnRhcmdldCA9PSBzZWxmKSkgdGhyb3cgXCJJbmNvcnJlY3QgZWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldFwiO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ID09IG90aGVyIHx8IGVkZ2Uuc291cmNlID09IG90aGVyKSB7XG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE5laWdoYm9yc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuZWlnaGJvcnMgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgZWRnZTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuXG4gICAgaWYgKGVkZ2Uuc291cmNlID09IHNlbGYpIHtcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS50YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWRnZS50YXJnZXQgIT0gc2VsZikge1xuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBpbmNpZGVuY3khXCI7XG4gICAgICB9XG5cbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS5zb3VyY2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5laWdoYm9ycztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS53aXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB3aXRoTmVpZ2hib3JzTGlzdCA9IG5ldyBTZXQoKTtcbiAgdmFyIGNoaWxkTm9kZTtcbiAgdmFyIGNoaWxkcmVuO1xuXG4gIHdpdGhOZWlnaGJvcnNMaXN0LmFkZCh0aGlzKTtcblxuICBpZiAodGhpcy5jaGlsZCAhPSBudWxsKSB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xuICAgICAgY2hpbGRyZW4gPSBjaGlsZE5vZGUud2l0aENoaWxkcmVuKCk7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHdpdGhOZWlnaGJvcnNMaXN0LmFkZChub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoTmVpZ2hib3JzTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROb09mQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub09mQ2hpbGRyZW4gPSAwO1xuICB2YXIgY2hpbGROb2RlO1xuXG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpIHtcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xuICB9IGVsc2Uge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcblxuICAgICAgbm9PZkNoaWxkcmVuICs9IGNoaWxkTm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgICB9XG4gIH1cblxuICBpZiAobm9PZkNoaWxkcmVuID09IDApIHtcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xuICB9XG4gIHJldHVybiBub09mQ2hpbGRyZW47XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZXN0aW1hdGVkU2l6ZSA9PSBJbnRlZ2VyLk1JTl9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNoaWxkID09IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplID0gKHRoaXMucmVjdC53aWR0aCArIHRoaXMucmVjdC5oZWlnaHQpIC8gMjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSB0aGlzLmNoaWxkLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gICAgdGhpcy5yZWN0LndpZHRoID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICAgIHRoaXMucmVjdC5oZWlnaHQgPSB0aGlzLmVzdGltYXRlZFNpemU7XG5cbiAgICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xuICB9XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2NhdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhbmRvbUNlbnRlclg7XG4gIHZhciByYW5kb21DZW50ZXJZO1xuXG4gIHZhciBtaW5YID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICB2YXIgbWF4WCA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICByYW5kb21DZW50ZXJYID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YICsgUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WCAtIG1pblgpICsgbWluWDtcblxuICB2YXIgbWluWSA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFkgPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSArIFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFkgLSBtaW5ZKSArIG1pblk7XG5cbiAgdGhpcy5yZWN0LnggPSByYW5kb21DZW50ZXJYO1xuICB0aGlzLnJlY3QueSA9IHJhbmRvbUNlbnRlclk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCkubGVuZ3RoICE9IDApIHtcbiAgICAvLyB3cmFwIHRoZSBjaGlsZHJlbiBub2RlcyBieSByZS1hcnJhbmdpbmcgdGhlIGJvdW5kYXJpZXNcbiAgICB2YXIgY2hpbGRHcmFwaCA9IHRoaXMuZ2V0Q2hpbGQoKTtcbiAgICBjaGlsZEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcblxuICAgIHRoaXMucmVjdC54ID0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yZWN0LnkgPSBjaGlsZEdyYXBoLmdldFRvcCgpO1xuXG4gICAgdGhpcy5zZXRXaWR0aChjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKSk7XG4gICAgdGhpcy5zZXRIZWlnaHQoY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCkpO1xuXG4gICAgLy8gVXBkYXRlIGNvbXBvdW5kIGJvdW5kcyBjb25zaWRlcmluZyBpdHMgbGFiZWwgcHJvcGVydGllcyAgICBcbiAgICBpZiAoTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUykge1xuXG4gICAgICB2YXIgd2lkdGggPSBjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgICAgaWYgKHRoaXMubGFiZWxXaWR0aCA+IHdpZHRoKSB7XG4gICAgICAgIHRoaXMucmVjdC54IC09ICh0aGlzLmxhYmVsV2lkdGggLSB3aWR0aCkgLyAyO1xuICAgICAgICB0aGlzLnNldFdpZHRoKHRoaXMubGFiZWxXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsSGVpZ2h0ID4gaGVpZ2h0KSB7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsUG9zID09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGFiZWxQb3MgPT0gXCJ0b3BcIikge1xuICAgICAgICAgIHRoaXMucmVjdC55IC09IHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWlnaHQodGhpcy5sYWJlbEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5pbmNsdXNpb25UcmVlRGVwdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zKSB7XG4gIHZhciBsZWZ0ID0gdGhpcy5yZWN0Lng7XG5cbiAgaWYgKGxlZnQgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpIHtcbiAgICBsZWZ0ID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9IGVsc2UgaWYgKGxlZnQgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKSB7XG4gICAgbGVmdCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgdG9wID0gdGhpcy5yZWN0Lnk7XG5cbiAgaWYgKHRvcCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIHRvcCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfSBlbHNlIGlmICh0b3AgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKSB7XG4gICAgdG9wID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuXG4gIHZhciBsZWZ0VG9wID0gbmV3IFBvaW50RChsZWZ0LCB0b3ApO1xuICB2YXIgdkxlZnRUb3AgPSB0cmFucy5pbnZlcnNlVHJhbnNmb3JtUG9pbnQobGVmdFRvcCk7XG5cbiAgdGhpcy5zZXRMb2NhdGlvbih2TGVmdFRvcC54LCB2TGVmdFRvcC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0Lng7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3QueTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5vd25lciA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTE5vZGU7XG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gUmVjdGFuZ2xlRCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgaWYgKHggIT0gbnVsbCAmJiB5ICE9IG51bGwgJiYgd2lkdGggIT0gbnVsbCAmJiBoZWlnaHQgIT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICB0aGlzLnggPSB4O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICB0aGlzLnkgPSB5O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KSB7XG4gIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24gKGEpIHtcbiAgaWYgKHRoaXMuZ2V0UmlnaHQoKSA8IGEueCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLmdldEJvdHRvbSgpIDwgYS55KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEuZ2V0UmlnaHQoKSA8IHRoaXMueCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldEJvdHRvbSgpIDwgdGhpcy55KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRYKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRYKCkgKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdldFkoKTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdldFkoKSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0V2lkdGhIYWxmID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oZWlnaHQgLyAyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0YW5nbGVEO1xuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFJhbmRvbVNlZWQoKSB7fVxuUmFuZG9tU2VlZC5zZWVkID0gMTtcblJhbmRvbVNlZWQueCA9IDA7XG5cblJhbmRvbVNlZWQubmV4dERvdWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgUmFuZG9tU2VlZC54ID0gTWF0aC5zaW4oUmFuZG9tU2VlZC5zZWVkKyspICogMTAwMDA7XG4gIHJldHVybiBSYW5kb21TZWVkLnggLSBNYXRoLmZsb29yKFJhbmRvbVNlZWQueCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhbmRvbVNlZWQ7XG5cbi8qKiovIH0pLFxuLyogMTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gUG9pbnREKHgsIHkpIHtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KSB7XG4gIHRoaXMueCA9IHg7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSkge1xuICB0aGlzLnkgPSB5O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KSB7XG4gIHJldHVybiBuZXcgRGltZW5zaW9uRCh0aGlzLnggLSBwdC54LCB0aGlzLnkgLSBwdC55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0Q29weSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy54LCB0aGlzLnkpO1xufTtcblxuUG9pbnRELnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZGltKSB7XG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XG4gIHRoaXMueSArPSBkaW0uaGVpZ2h0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnREO1xuXG4vKioqLyB9KSxcbi8qIDE3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBVbmlxdWVJREdlbmVyZXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbmZ1bmN0aW9uIEhhc2hTZXQoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59XG47XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkgdGhpcy5zZXRbdGhlSWRdID0gb2JqO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICBkZWxldGUgdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV07XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zZXQgPSB7fTtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdGhpcy5zZXRbVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKV0gPT0gb2JqO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG59O1xuXG4vL2NvbmNhdHMgdGhpcy5zZXQgdG8gdGhlIGdpdmVuIGxpc3Rcbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbFRvID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnNldCk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxpc3QucHVzaCh0aGlzLnNldFtrZXlzW2ldXSk7XG4gIH1cbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgdmFyIHMgPSBsaXN0Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgdiA9IGxpc3RbaV07XG4gICAgdGhpcy5hZGQodik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaFNldDtcblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKlxyXG4gKlRoaXMgY2xhc3MgaXMgdGhlIGphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFBvaW50LmphdmEgY2xhc3MgaW4gamRrXHJcbiAqL1xuZnVuY3Rpb24gUG9pbnQoeCwgeSwgcCkge1xuICB0aGlzLnggPSBudWxsO1xuICB0aGlzLnkgPSBudWxsO1xuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9IGVsc2UgaWYgKHguY29uc3RydWN0b3IubmFtZSA9PSAnUG9pbnQnICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICBwID0geDtcbiAgICB0aGlzLnggPSBwLng7XG4gICAgdGhpcy55ID0gcC55O1xuICB9XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludC5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xufTtcblxuUG9pbnQucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHksIHApIHtcbiAgaWYgKHguY29uc3RydWN0b3IubmFtZSA9PSAnUG9pbnQnICYmIHkgPT0gbnVsbCAmJiBwID09IG51bGwpIHtcbiAgICBwID0geDtcbiAgICB0aGlzLnNldExvY2F0aW9uKHAueCwgcC55KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcbiAgICAvL2lmIGJvdGggcGFyYW1ldGVycyBhcmUgaW50ZWdlciBqdXN0IG1vdmUgKHgseSkgbG9jYXRpb25cbiAgICBpZiAocGFyc2VJbnQoeCkgPT0geCAmJiBwYXJzZUludCh5KSA9PSB5KSB7XG4gICAgICB0aGlzLm1vdmUoeCwgeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XG4gICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKHkgKyAwLjUpO1xuICAgIH1cbiAgfVxufTtcblxuUG9pbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufTtcblxuUG9pbnQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChkeCwgZHkpIHtcbiAgdGhpcy54ICs9IGR4O1xuICB0aGlzLnkgKz0gZHk7XG59O1xuXG5Qb2ludC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJQb2ludFwiKSB7XG4gICAgdmFyIHB0ID0gb2JqO1xuICAgIHJldHVybiB0aGlzLnggPT0gcHQueCAmJiB0aGlzLnkgPT0gcHQueTtcbiAgfVxuICByZXR1cm4gdGhpcyA9PSBvYmo7XG59O1xuXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQoKS5jb25zdHJ1Y3Rvci5uYW1lICsgXCJbeD1cIiArIHRoaXMueCArIFwiLHk9XCIgKyB0aGlzLnkgKyBcIl1cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuY29uc3Qgbm9kZUZyb20gPSB2YWx1ZSA9PiAoeyB2YWx1ZSwgbmV4dDogbnVsbCwgcHJldjogbnVsbCB9KTtcblxuY29uc3QgYWRkID0gKHByZXYsIG5vZGUsIG5leHQsIGxpc3QpID0+IHtcbiAgaWYgKHByZXYgIT09IG51bGwpIHtcbiAgICBwcmV2Lm5leHQgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5vZGU7XG4gIH1cblxuICBpZiAobmV4dCAhPT0gbnVsbCkge1xuICAgIG5leHQucHJldiA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUucHJldiA9IHByZXY7XG4gIG5vZGUubmV4dCA9IG5leHQ7XG5cbiAgbGlzdC5sZW5ndGgrKztcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9IChub2RlLCBsaXN0KSA9PiB7XG4gIGxldCB7IHByZXYsIG5leHQgfSA9IG5vZGU7XG5cbiAgaWYgKHByZXYgIT09IG51bGwpIHtcbiAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCAhPT0gbnVsbCkge1xuICAgIG5leHQucHJldiA9IHByZXY7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gcHJldjtcbiAgfVxuXG4gIG5vZGUucHJldiA9IG5vZGUubmV4dCA9IG51bGw7XG5cbiAgbGlzdC5sZW5ndGgtLTtcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3Rvcih2YWxzKSB7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gbnVsbDtcblxuICAgIGlmICh2YWxzICE9IG51bGwpIHtcbiAgICAgIHZhbHMuZm9yRWFjaCh2ID0+IHRoaXMucHVzaCh2KSk7XG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gIH1cblxuICBpbnNlcnRCZWZvcmUodmFsLCBvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gYWRkKG90aGVyTm9kZS5wcmV2LCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUsIHRoaXMpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIodmFsLCBvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gYWRkKG90aGVyTm9kZSwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLm5leHQsIHRoaXMpO1xuICB9XG5cbiAgaW5zZXJ0Tm9kZUJlZm9yZShuZXdOb2RlLCBvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gYWRkKG90aGVyTm9kZS5wcmV2LCBuZXdOb2RlLCBvdGhlck5vZGUsIHRoaXMpO1xuICB9XG5cbiAgaW5zZXJ0Tm9kZUFmdGVyKG5ld05vZGUsIG90aGVyTm9kZSkge1xuICAgIHJldHVybiBhZGQob3RoZXJOb2RlLCBuZXdOb2RlLCBvdGhlck5vZGUubmV4dCwgdGhpcyk7XG4gIH1cblxuICBwdXNoKHZhbCkge1xuICAgIHJldHVybiBhZGQodGhpcy50YWlsLCBub2RlRnJvbSh2YWwpLCBudWxsLCB0aGlzKTtcbiAgfVxuXG4gIHVuc2hpZnQodmFsKSB7XG4gICAgcmV0dXJuIGFkZChudWxsLCBub2RlRnJvbSh2YWwpLCB0aGlzLmhlYWQsIHRoaXMpO1xuICB9XG5cbiAgcmVtb3ZlKG5vZGUpIHtcbiAgICByZXR1cm4gcmVtb3ZlKG5vZGUsIHRoaXMpO1xuICB9XG5cbiAgcG9wKCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy50YWlsLCB0aGlzKS52YWx1ZTtcbiAgfVxuXG4gIHBvcE5vZGUoKSB7XG4gICAgcmV0dXJuIHJlbW92ZSh0aGlzLnRhaWwsIHRoaXMpO1xuICB9XG5cbiAgc2hpZnQoKSB7XG4gICAgcmV0dXJuIHJlbW92ZSh0aGlzLmhlYWQsIHRoaXMpLnZhbHVlO1xuICB9XG5cbiAgc2hpZnROb2RlKCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy5oZWFkLCB0aGlzKTtcbiAgfVxuXG4gIGdldF9vYmplY3RfYXQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPD0gdGhpcy5sZW5ndGgoKSkge1xuICAgICAgdmFyIGkgPSAxO1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICB3aGlsZSAoaSA8IGluZGV4KSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldF9vYmplY3RfYXQoaW5kZXgsIHZhbHVlKSB7XG4gICAgaWYgKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpIHtcbiAgICAgIHZhciBpID0gMTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICBjdXJyZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGlua2VkTGlzdDtcblxuLyoqKi8gfSksXG4vKiAyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgUG9pbnREID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybSh4LCB5KSB7XG4gIHRoaXMubHdvcmxkT3JnWCA9IDAuMDtcbiAgdGhpcy5sd29ybGRPcmdZID0gMC4wO1xuICB0aGlzLmxkZXZpY2VPcmdYID0gMC4wO1xuICB0aGlzLmxkZXZpY2VPcmdZID0gMC4wO1xuICB0aGlzLmx3b3JsZEV4dFggPSAxLjA7XG4gIHRoaXMubHdvcmxkRXh0WSA9IDEuMDtcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IDEuMDtcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IDEuMDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICh3b3gpIHtcbiAgdGhpcy5sd29ybGRPcmdYID0gd294O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmx3b3JsZE9yZ1k7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICh3b3kpIHtcbiAgdGhpcy5sd29ybGRPcmdZID0gd295O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFg7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WCA9IGZ1bmN0aW9uICh3ZXgpIHtcbiAgdGhpcy5sd29ybGRFeHRYID0gd2V4O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmx3b3JsZEV4dFk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICh3ZXkpIHtcbiAgdGhpcy5sd29ybGRFeHRZID0gd2V5O1xufTtcblxuLyogRGV2aWNlIHJlbGF0ZWQgKi9cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uIChkb3gpIHtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IGRveDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1k7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoZG95KSB7XG4gIHRoaXMubGRldmljZU9yZ1kgPSBkb3k7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKGRleCkge1xuICB0aGlzLmxkZXZpY2VFeHRYID0gZGV4O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uIChkZXkpIHtcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IGRleTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciB4RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRYID0gdGhpcy5sd29ybGRFeHRYO1xuICBpZiAod29ybGRFeHRYICE9IDAuMCkge1xuICAgIHhEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdYICsgKHggLSB0aGlzLmx3b3JsZE9yZ1gpICogdGhpcy5sZGV2aWNlRXh0WCAvIHdvcmxkRXh0WDtcbiAgfVxuXG4gIHJldHVybiB4RGV2aWNlO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpIHtcbiAgdmFyIHlEZXZpY2UgPSAwLjA7XG4gIHZhciB3b3JsZEV4dFkgPSB0aGlzLmx3b3JsZEV4dFk7XG4gIGlmICh3b3JsZEV4dFkgIT0gMC4wKSB7XG4gICAgeURldmljZSA9IHRoaXMubGRldmljZU9yZ1kgKyAoeSAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gd29ybGRFeHRZO1xuICB9XG5cbiAgcmV0dXJuIHlEZXZpY2U7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIHhXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFggPSB0aGlzLmxkZXZpY2VFeHRYO1xuICBpZiAoZGV2aWNlRXh0WCAhPSAwLjApIHtcbiAgICB4V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1ggKyAoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WDtcbiAgfVxuXG4gIHJldHVybiB4V29ybGQ7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpIHtcbiAgdmFyIHlXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFkgPSB0aGlzLmxkZXZpY2VFeHRZO1xuICBpZiAoZGV2aWNlRXh0WSAhPSAwLjApIHtcbiAgICB5V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1kgKyAoeSAtIHRoaXMubGRldmljZU9yZ1kpICogdGhpcy5sd29ybGRFeHRZIC8gZGV2aWNlRXh0WTtcbiAgfVxuICByZXR1cm4geVdvcmxkO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQgPSBmdW5jdGlvbiAoaW5Qb2ludCkge1xuICB2YXIgb3V0UG9pbnQgPSBuZXcgUG9pbnREKHRoaXMuaW52ZXJzZVRyYW5zZm9ybVgoaW5Qb2ludC54KSwgdGhpcy5pbnZlcnNlVHJhbnNmb3JtWShpblBvaW50LnkpKTtcbiAgcmV0dXJuIG91dFBvaW50O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm07XG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxudmFyIHAgPSBFbWl0dGVyLnByb3RvdHlwZTtcblxucC5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgZXZlbnQ6IGV2ZW50LFxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICB9KTtcbn07XG5cbnAucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmIChsLmV2ZW50ID09PSBldmVudCAmJiBsLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxufTtcblxucC5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xuXG4gICAgaWYgKGV2ZW50ID09PSBsLmV2ZW50KSB7XG4gICAgICBsLmNhbGxiYWNrKGRhdGEpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG5mdW5jdGlvbiBGRExheW91dENvbnN0YW50cygpIHt9XG5cbi8vRkRMYXlvdXRDb25zdGFudHMgaW5oZXJpdHMgc3RhdGljIHByb3BzIGluIExheW91dENvbnN0YW50c1xuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXRDb25zdGFudHMpIHtcbiAgRkRMYXlvdXRDb25zdGFudHNbcHJvcF0gPSBMYXlvdXRDb25zdGFudHNbcHJvcF07XG59XG5cbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gMjUwMDtcblxuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IDUwO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSAwLjQ1O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSA0NTAwLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEggPSAwLjQ7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSAxLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMy44O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDEuNTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gMC41O1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMID0gMTAwLjA7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgKiAzO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwLjA7XG5GRExheW91dENvbnN0YW50cy5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPSAxMDA7XG5GRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gMC4xO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcbkZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRDb25zdGFudHM7XG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5mdW5jdGlvbiBGRExheW91dEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbiAgdGhpcy5pZGVhbExlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG59XG5cbkZETGF5b3V0RWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlW3Byb3BdID0gTEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRFZGdlO1xuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5mdW5jdGlvbiBGRExheW91dE5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgLy8gYWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgaXMgaGFuZGxlZCBpbnNpZGUgTE5vZGVcbiAgTE5vZGUuY2FsbCh0aGlzLCBnbSwgbG9jLCBzaXplLCB2Tm9kZSk7XG4gIC8vU3ByaW5nLCByZXB1bHNpb24gYW5kIGdyYXZpdGF0aW9uYWwgZm9yY2VzIGFjdGluZyBvbiB0aGlzIG5vZGVcbiAgdGhpcy5zcHJpbmdGb3JjZVggPSAwO1xuICB0aGlzLnNwcmluZ0ZvcmNlWSA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVkgPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gIC8vQW1vdW50IGJ5IHdoaWNoIHRoaXMgbm9kZSBpcyB0byBiZSBtb3ZlZCBpbiB0aGlzIGl0ZXJhdGlvblxuICB0aGlzLmRpc3BsYWNlbWVudFggPSAwO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xuXG4gIC8vU3RhcnQgYW5kIGZpbmlzaCBncmlkIGNvb3JkaW5hdGVzIHRoYXQgdGhpcyBub2RlIGlzIGZhbGxlbiBpbnRvXG4gIHRoaXMuc3RhcnRYID0gMDtcbiAgdGhpcy5maW5pc2hYID0gMDtcbiAgdGhpcy5zdGFydFkgPSAwO1xuICB0aGlzLmZpbmlzaFkgPSAwO1xuXG4gIC8vR2VvbWV0cmljIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgdGhpcy5zdXJyb3VuZGluZyA9IFtdO1xufVxuXG5GRExheW91dE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMTm9kZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExOb2RlKSB7XG4gIEZETGF5b3V0Tm9kZVtwcm9wXSA9IExOb2RlW3Byb3BdO1xufVxuXG5GRExheW91dE5vZGUucHJvdG90eXBlLnNldEdyaWRDb29yZGluYXRlcyA9IGZ1bmN0aW9uIChfc3RhcnRYLCBfZmluaXNoWCwgX3N0YXJ0WSwgX2ZpbmlzaFkpIHtcbiAgdGhpcy5zdGFydFggPSBfc3RhcnRYO1xuICB0aGlzLmZpbmlzaFggPSBfZmluaXNoWDtcbiAgdGhpcy5zdGFydFkgPSBfc3RhcnRZO1xuICB0aGlzLmZpbmlzaFkgPSBfZmluaXNoWTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXROb2RlO1xuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIERpbWVuc2lvbkQod2lkdGgsIGhlaWdodCkge1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG59XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGltZW5zaW9uRDtcblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5jb25zdCBMaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cbmZ1bmN0aW9uIFF1aWNrc29ydCgpIHt9XG5cblF1aWNrc29ydC5nZXRfb2JqZWN0X2F0ID0gZnVuY3Rpb24gKGxpc3QsIGkpIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHJldHVybiBsaXN0W2ldO1xuICAgIH0gZWxzZSBpZiAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuZ2V0X29iamVjdF9hdChpKTtcbiAgICB9XG59O1xuXG5RdWlja3NvcnQuc2V0X29iamVjdF9hdCA9IGZ1bmN0aW9uIChsaXN0LCBpLCB2YWx1ZSkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdFtpXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHtcbiAgICAgICAgbGlzdC5zZXRfb2JqZWN0X2F0KGksIHZhbHVlKTtcbiAgICB9XG59O1xuXG5RdWlja3NvcnQucXVpY2tzb3J0ID0gZnVuY3Rpb24gKGxpc3QsIGNvbXBhcmlzb25fZm4pIHtcblxuICAgIC8vIGlucHV0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgTGlua2VkTGlzdCBjbGFzcyBvciBtdXN0IGJlIGFuIGFycmF5IGluIG9yZGVyIHRvIHNvcnRcbiAgICBpZiAoIShsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCB8fCBsaXN0IGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY29tcGFyaXNvbl9mdW5jdGlvbiA9IGNvbXBhcmlzb25fZm47XG5cbiAgICBpZiAoY29tcGFyaXNvbl9mdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBRdWlja3NvcnQuY29tcGFyZTtcbiAgICB9XG4gICAgdmFyIGVuZF9pbmRleDtcblxuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTGlua2VkTGlzdCkge1xuICAgICAgICBlbmRfaW5kZXggPSBsaXN0LnNpemUoKTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBlbmRfaW5kZXggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBlbXB0eSBsaXN0cyBvciBhcnJheXMuXG4gICAgaWYgKGVuZF9pbmRleCA+PSAwKSB7XG4gICAgICAgIFF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzKGxpc3QsIDAsIGVuZF9pbmRleCwgY29tcGFyaXNvbl9mdW5jdGlvbik7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMgPSBmdW5jdGlvbiAobGlzdCwgbG93LCBoaWdoLCBjb21wYXJpc29uX2ZuKSB7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QgfHwgbGlzdCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmlzb25fZm4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wYXJpc29uX2ZuID0gUXVpY2tzb3J0LmNvbXBhcmU7XG4gICAgfVxuXG4gICAgdmFyIGkgPSBsb3c7XG4gICAgdmFyIGogPSBoaWdoO1xuICAgIHZhciBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3IoKGkgKyBqKSAvIDIpO1xuICAgIHZhciBtaWRkbGUgPSBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBtaWRkbGVJbmRleCk7XG5cbiAgICBkbyB7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBhcmlzb25fZm4oUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaSksIG1pZGRsZSkpIHtcblxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGNvbXBhcmlzb25fZm4obWlkZGxlLCBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBqKSkpIHtcblxuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgPD0gaikge1xuXG4gICAgICAgICAgICB2YXIgdGVtcCA9IFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpO1xuICAgICAgICAgICAgUXVpY2tzb3J0LnNldF9vYmplY3RfYXQobGlzdCwgaSwgUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaikpO1xuICAgICAgICAgICAgUXVpY2tzb3J0LnNldF9vYmplY3RfYXQobGlzdCwgaiwgdGVtcCk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgIH1cbiAgICB9IHdoaWxlIChpIDw9IGopO1xuXG4gICAgaWYgKGxvdyA8IGopIHtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCBsb3csIGosIGNvbXBhcmlzb25fZm4pO1xuICAgIH1cblxuICAgIGlmIChoaWdoID4gaSkge1xuXG4gICAgICAgIFF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzKGxpc3QsIGksIGhpZ2gsIGNvbXBhcmlzb25fZm4pO1xuICAgIH1cbn07XG5cbi8vIHRoaXMgZnVuY3Rpb24gbXVzdCBiZSBvdmVycmlkZW4gZm9yIHNvcnRpbmcgZGlmZmVyZW50IGRhdGEgdHlwZXMoZS5nLiBzdHJpbmcsIGludGVnZXIgZXRjLilcblF1aWNrc29ydC5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYiA+IGE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1aWNrc29ydDtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xheW91dC1iYXNlL2xheW91dC1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubGV0IGF2c2RmQmFzZSA9IHt9O1xuXG5hdnNkZkJhc2UubGF5b3V0QmFzZSA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJyk7XG5hdnNkZkJhc2UuQVZTREZDb25zdGFudHMgPSByZXF1aXJlKCcuL3NyYy9BVlNERkNvbnN0YW50cycpO1xuYXZzZGZCYXNlLkFWU0RGRWRnZSA9IHJlcXVpcmUoJy4vc3JjL0FWU0RGRWRnZScpO1xuYXZzZGZCYXNlLkFWU0RGQ2lyY2xlID0gcmVxdWlyZSgnLi9zcmMvQVZTREZDaXJjbGUnKTtcbmF2c2RmQmFzZS5BVlNERkxheW91dCA9IHJlcXVpcmUoJy4vc3JjL0FWU0RGTGF5b3V0Jyk7XG5hdnNkZkJhc2UuQVZTREZOb2RlID0gcmVxdWlyZSgnLi9zcmMvQVZTREZOb2RlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXZzZGZCYXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdnNkZi1iYXNlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFNpbXBsZSwgaW50ZXJuYWwgT2JqZWN0LmFzc2lnbigpIHBvbHlmaWxsIGZvciBvcHRpb25zIG9iamVjdHMgZXRjLlxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gIT0gbnVsbCA/IE9iamVjdC5hc3NpZ24uYmluZCggT2JqZWN0ICkgOiBmdW5jdGlvbiggdGd0LCAuLi5zcmNzICl7XG4gIHNyY3MuZm9yRWFjaCggc3JjID0+IHtcbiAgICBPYmplY3Qua2V5cyggc3JjICkuZm9yRWFjaCggayA9PiB0Z3Rba10gPSBzcmNba10gKTtcbiAgfSApO1xuXG4gIHJldHVybiB0Z3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2lnbi5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIGNpcmNsZS5cbiAqXG4gKlxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMR3JhcGggPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxHcmFwaDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gQVZTREZDaXJjbGUocGFyZW50LCBncmFwaE1nciwgdk9iamVjdClcbntcbiAgICBMR3JhcGguY2FsbCh0aGlzLCBwYXJlbnQsIGdyYXBoTWdyLCB2T2JqZWN0KTtcbiAgICB0aGlzLmluT3JkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMucGVyaW1ldGVyID0gMDtcbiAgICB0aGlzLmNlbnRlclggPSAwO1xuICAgIHRoaXMuY2VudGVyWSA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAwO1xufVxuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaC5wcm90b3R5cGUpO1xuXG5mb3IobGV0IHByb3BlcnR5IGluIExHcmFwaClcbntcbiAgICBBVlNERkNpcmNsZVtwcm9wZXJ0eV0gPSBMR3JhcGhbcHJvcGVydHldO1xufVxuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuaW5pdE9yZGVyaW5nID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuaW5PcmRlciA9IFtdO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEFjY2Vzc29yIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBhcnJheSBpbiB3aGljaCB0aGUgbm9kZXMgb2YgdGhpcyBjaXJjbGUgYXJlIGtlcHQgaW4gb3JkZXIuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0T3JkZXIgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuaW5PcmRlcjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5jZW50ZXJYO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLmNlbnRlclk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJhZGl1cyBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRSYWRpdXMgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5nZXROb2RlcygpLmxlbmd0aDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyBhbmQgcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBpbiB0aGlzXG4vLyBjaXJjbGUgYnkgYWRkaW5nIHVwIHRoZSBjcm9zc2luZyBudW1iZXIgb2YgaW5kaXZpZHVhbCBub2RlcyBvbiBpdC5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRUb3RhbENyb3NzaW5nT2ZDaXJjbGUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBjcm9zc2luZ051bWJlciA9IDA7XG4gICAgXG4gICAgZm9yKGxldCBub2RlIGluIHNlbGYuaW5PcmRlcilcbiAgICB7XG4gICAgICAgIGxldCBub2RlQ3Jvc3NpbmcgPSBub2RlLmdldFRvdGFsQ3Jvc3NpbmdPZkVkZ2VzKCk7XG4gICAgICAgIGlmKG5vZGVDcm9zc2luZyA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBjcm9zc2luZ051bWJlciArPSBub2RlQ3Jvc3Npbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyb3NzaW5nTnVtYmVyIC8gNDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2hlY2tzIHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGUgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUgYXJlXG4vLyBhc3NpZ25lZCBhbiBpbmRleCBvbiB0aGUgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmhhc0ZpbmlzaGVkT3JkZXJpbmcgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLmdldE5vZGVzKCkubGVuZ3RoO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBub2RlIHNlcGFyYXRpb24gb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0Tm9kZVNlcGFyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMubm9kZVNlcGFyYXRpb247XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIG5vZGUgc2VwYXJhdGlvbiBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5zZXROb2RlU2VwYXJhdGlvbiA9IGZ1bmN0aW9uKG5vZGVTZXBhcmF0aW9uKVxue1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSBub2RlU2VwYXJhdGlvbjtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUgYW5kIGNvcnJlY3RzIHRoZSBhbmdsZVxuLy8gb2YgdGhlIHZlcnRpY2VzIHdpdGggcmVzcGVjdCB0byB0aGVpciBjaXJjbGUgaW5kaWNlcy5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5jb3JyZWN0QW5nbGVzID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLmN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBzZWxmLmluT3JkZXIuZm9yRWFjaChcbiAgICAgICAgKG5vZGUpID0+ICBzZWxmLnB1dEluT3JkZXIobm9kZSlcbiAgICApO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIHB1dHMgdGhlIGdpdmVuIG5vZGUgb24gdGhlIGNpcmNsZSBpbiB0aGUgY3VycmVudCBvcmRlciBhbmRcbi8vIHNldHMgaXRzIGFuZ2xlIGFwcHJvcHJpYXRlbHkuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUucHV0SW5PcmRlciA9IGZ1bmN0aW9uKG5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG5vZGVzID0gc2VsZi5nZXROb2RlcygpO1xuXG4gICAgLy8gTm90ZSB0aGF0IGlkIGF0dHJpYnV0ZSBvZiBhIG5vZGUgaXMgYWRkZWQgYmVmb3JlXG4gICAgLy8gQVZTREZMYXlvdXQgaXMgY2FsbGVkXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2Rlc1tpXS5pZCA9PSBub2RlLmlkKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFmb3VuZClcbiAgICB7XG4gICAgICAgIHRocm93IFwiVGhlIG5vZGUgbXVzdCBiZSBhIG1lbWJlciBvZiBMR3JhcGhcIjtcbiAgICB9XG5cbiAgICBzZWxmLmluT3JkZXJbc2VsZi5jdXJyZW50SW5kZXhdID0gbm9kZTtcbiAgICBub2RlLnNldEluZGV4KHNlbGYuY3VycmVudEluZGV4KTtcblxuICAgIGlmKHNlbGYuY3VycmVudEluZGV4ID09PSAwKVxuICAgIHtcbiAgICAgICAgbm9kZS5zZXRBbmdsZSgwLjApO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBub2RlLnNldEFuZ2xlKHNlbGYuaW5PcmRlcltzZWxmLmN1cnJlbnRJbmRleCAtIDFdLmdldEFuZ2xlKCkgKyAyICogTWF0aC5QSSAqXG4gICAgICAgICAgICAobm9kZS5nZXREaWFnb25hbCgpIC8gMiArIHNlbGYubm9kZVNlcGFyYXRpb24gK1xuICAgICAgICAgICAgICAgIHNlbGYuaW5PcmRlcltzZWxmLmN1cnJlbnRJbmRleCAtIDFdLmdldERpYWdvbmFsKCkgLyAyKVxuICAgICAgICAgICAgLyBzZWxmLnBlcmltZXRlcik7XG4gICAgfVxuXG4gICAgc2VsZi5jdXJyZW50SW5kZXgrKztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbmV4dCBub2RlIHRvIGJlIHBsYWNlZCBvbiB0aGlzIGNpcmNsZSB3aXRoXG4vLyByZXNwZWN0IHRvIHRoZSBBVlNERiBhbGdvcml0aG0uXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZmluZE5vZGVUb1BsYWNlID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc0RlZ3JlZU5vZGUgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGaW5kIHRoZSBzbWFsbGVzdCBkZWdyZWUgdmVydGV4IGlmIHRoZSBzdGFjayBpcyBlbXB0eVxuICAgIGlmKHNlbGYuc3RhY2subGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgc0RlZ3JlZU5vZGUgPSBzZWxmLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUoKTtcbiAgICB9XG4gICAgLy8gRmluZCB0aGUgZmlyc3QgdmVydGV4IGluIHRoZSBzdGFjayBub3QgeWV0IHBsYWNlZFxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBmb3VuZFVub3JkZXJOb2RlID0gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKCFmb3VuZFVub3JkZXJOb2RlICYmICEoc2VsZi5zdGFjay5sZW5ndGggPT09IDApKVxuICAgICAgICB7XG4gICAgICAgICAgICBzRGVncmVlTm9kZSA9IHNlbGYuc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBmb3VuZFVub3JkZXJOb2RlID0gIXNEZWdyZWVOb2RlLmlzT3JkZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3VuZFVub3JkZXJOb2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBzRGVncmVlTm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vIHVub3JkZXJlZCB2ZXJ0ZXggaXMgZm91bmQgaW4gdGhlIHN0YWNrLCBmaW5kIG9uZVxuICAgIC8vIGZyb20gdGhlIHJlbWFpbmluZyBvbmVzXG4gICAgaWYoc0RlZ3JlZU5vZGUgPT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIHNEZWdyZWVOb2RlID0gc2VsZi5maW5kVW5vcmRlcmVkU21hbGxlc3REZWdyZWVOb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSB1bm9yZGVyZWQgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSB0byB0aGUgc3RhY2tcbiAgICBpZiggc0RlZ3JlZU5vZGUgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSBzRGVncmVlTm9kZS5nZXROZWlnaGJvcnNTb3J0ZWRCeURlZ3JlZSgpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IG5laWdoYm9ycy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcblxuICAgICAgICAgICAgaWYoIW5laWdoYm9yLmlzT3JkZXJlZCgpKSAvLyBDaGVjayBoZXJlIGZvciBwb3NzaWJsZSBlcnJvclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhY2sucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc0RlZ3JlZU5vZGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHJhZGl1cyBvZiB0aGlzIGNpcmNsZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHNpemVzXG4vLyBvZiB0aGUgdmVydGljZXMgYW5kIHRoZSBub2RlIHNlcGFyYXRpb24gcGFyYW1ldGVyLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmNhbGN1bGF0ZVJhZGl1cyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRvdGFsRGlhZ29uYWwgPSAwO1xuXG4gICAgc2VsZi5nZXROb2RlcygpLmZvckVhY2goXG4gICAgICAgIChub2RlKSA9PiB0b3RhbERpYWdvbmFsICs9IE1hdGguc3FydChub2RlLmdldFdpZHRoKCkgKiBub2RlLmdldFdpZHRoKCkgKyBub2RlLmdldEhlaWdodCgpICogbm9kZS5nZXRIZWlnaHQoKSlcbiAgICApO1xuXG4gICAgc2VsZi5wZXJpbWV0ZXIgPSB0b3RhbERpYWdvbmFsICsgc2VsZi5nZXROb2RlcygpLmxlbmd0aCAqIHNlbGYubm9kZVNlcGFyYXRpb247XG4gICAgbGV0IHJhZGl1cyA9IHNlbGYucGVyaW1ldGVyIC8gKCAyICogTWF0aC5QSSk7XG5cbiAgICAvLyBDaGVjayBoZXJlIGZvciBwb3NzaWJsZSBlcnJvclxuXG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRXaWR0aCggMiAqIHJhZGl1cyApO1xuICAgIHNlbGYuZ2V0UGFyZW50KCkuc2V0SGVpZ2h0KCAyICogcmFkaXVzICk7XG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRDZW50ZXIoIHNlbGYuZ2V0UGFyZW50KCkuZ2V0V2lkdGgoKSwgc2VsZi5nZXRQYXJlbnQoKS5nZXRIZWlnaHQoKSApO1xuXG4gICAgc2VsZi5jZW50ZXJYID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRDZW50ZXJYKCk7XG4gICAgc2VsZi5jZW50ZXJZID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRDZW50ZXJZKCk7XG4gICAgc2VsZi5yYWRpdXMgPSBzZWxmLmdldFBhcmVudCgpLmdldEhlaWdodCgpIC8gMjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBvZiBhbGwgdmVydGljZXMgb2Zcbi8vIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmNhbGN1bGF0ZUVkZ2VDcm9zc2luZ3NPZk5vZGVzID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuZ2V0Tm9kZXMoKS5mb3JFYWNoKCAobm9kZSkgPT4gbm9kZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCkpO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGluZGV4IG9mIGVhY2ggdmVydGV4IHRvIGl0cyBwb3NpdGlvbiBpbiBpbk9yZGVyXG4vLyBhcnJheS4gTm90ZSB0aGF0IGluZGV4IG9mIGEgbm9kZSBjYW4gYmUgZGlmZmVyZW50IGZyb20gaXRzIHBsYWNlIGluIHRoZVxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBJdCBsb2Fkc1xuLy8gb2xkIGluZGV4IHZhbHVlcyB0byB2ZXJ0aWNlcyBkdWUgdG8gYW4gaW5jcmVhc2UgaW4gdGhlIG51bWJlciBvZlxuLy8gY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmxvYWRPbGRJbmRpY2VzT2ZOb2RlcyA9IGZ1bmN0aW9uKClcbntcbiAgICAvL3RoaXMuaW5PcmRlci5mb3JFYWNoKCAobm9kZSxpbmRleCkgPT4gbm9kZS5zZXRJbmRleChpbmRleCkpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5PcmRlci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNlbGYuaW5PcmRlcltpXS5zZXRJbmRleChpKTtcbiAgICB9XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIHBvc2l0aW9uIG9mIGVhY2ggbm9kZSBpbiBpbk9yZGVyIGFycmF5IHRvIGl0cyBpbmRleC5cbi8vIE5vdGUgdGhhdCBpbmRleCBvZiBhIG5vZGUgY2FuIGJlIGRpZmZlcmVudCBmcm9tIGl0cyBwbGFjZSBpbiB0aGUgaW5PcmRlclxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBUaGlzIGZ1bmN0aW9uXG4vLyBwdXRzIHRoZSBub2RlcyB0byB0aGVpciBuZXcgaW5kZXggdmFsdWVzIGluIGluT3JkZXIgYXJyYXkgZHVlIHRvIGFcbi8vIGRlY3JlYXNlIGluIHRoZSBudW1iZXIgb2YgY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLnJlT3JkZXJWZXJ0aWNlcyA9IGZ1bmN0aW9uKClcbntcbiAgICB0aGlzLmdldE5vZGVzKCkuZm9yRWFjaCggKG5vZGUpID0+IHNlbGYuaW5PcmRlcltub2RlLmdldEluZGV4KCldID0gbm9kZSApO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIGZpbmRzIGFuZCByZXR1cm5zIHRoZSB1bm9yZGVyZWQgc21hbGxlc3QgZGVncmVlIHZlcnRleCBvblxuLy8gdGhpcyBjaXJjbGUuXG4vLyBUT0RPIDogc2hvdWxkIHRoaXMgZnVuY3Rpb24gYmUgcHJpdmF0ZT9cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5maW5kVW5vcmRlcmVkU21hbGxlc3REZWdyZWVOb2RlID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBtaW5EZWdyZWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBsZXQgc0RlZ3JlZU5vZGU7XG4gICAgXG4gICAgdGhpcy5nZXROb2RlcygpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgaWYobm9kZS5nZXREZWdyZWUoKSA8IG1pbkRlZ3JlZSAmJiAhbm9kZS5pc09yZGVyZWQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtaW5EZWdyZWUgPSBub2RlLmdldERlZ3JlZSgpO1xuICAgICAgICAgICAgICAgIHNEZWdyZWVOb2RlID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gc0RlZ3JlZU5vZGU7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZDaXJjbGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F2c2RmLWJhc2Uvc3JjL0FWU0RGQ2lyY2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxheW91dENvbnN0YW50cztcblxuZnVuY3Rpb24gQVZTREZDb25zdGFudHMoKXt9XG5cbi8vIEFWU0RGQ29uc3RhbnRzIGluaGVyaXRzIHByb3BlcnRpZXMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKXtcbiAgICBBVlNERkNvbnN0YW50c1twcm9wXSA9IExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT04gPSA2MDtcblxubW9kdWxlLmV4cG9ydHMgPSBBVlNERkNvbnN0YW50cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXZzZGYtYmFzZS9zcmMvQVZTREZDb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgZGF0YSBhbmQgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCBmb3IgQVZTREYgbGF5b3V0IHBlclxuICogZWRnZS5cbiAqXG5cbiAqIENvcHlyaWdodDogaS1WaXMgUmVzZWFyY2ggR3JvdXAsIEJpbGtlbnQgVW5pdmVyc2l0eSwgMjAwNyAtIHByZXNlbnRcbiAqL1xuXG5sZXQgTEVkZ2UgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxFZGdlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogSW5pdGlhbGl6YXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBBVlNERkVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKVxue1xuICAgIExFZGdlLmNhbGwodGhpcywgc291cmNlLHRhcmdldCwgdkVkZ2UpO1xufVxuXG5BVlNERkVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKGxldCBwcm9wZXJ0aWVzIGluIExFZGdlKVxue1xuICAgIEFWU0RGRWRnZVtwcm9wZXJ0aWVzXSA9IExFZGdlW3Byb3BlcnRpZXNdO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogQWNjZXNzb3IgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGUgZnVuY3Rpb24gZ2V0T3RoZXJFbmQgcmV0dXJucyB0aGUgb3RoZXIgZW5kIG9mIHRoaXMgZWRnZS5cbkFWU0RGRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmQgPSBmdW5jdGlvbihub2RlKVxue1xuICAgIHJldHVybiBMRWRnZS5wcm90b3R5cGUuZ2V0T3RoZXJFbmQobm9kZSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogUmVtYWluaW5nIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiBjaGVja3Mgd2hldGhlciB0aGlzIGVkZ2UgY3Jvc3NlcyB3aXRoIHRoZSBpbnB1dCBlZGdlLiBJdFxuLy8gcmV0dXJucyBmYWxzZSwgaWYgYW55IG9mIHRoZSB2ZXJ0aWNlcyB0aG9zZSBlZGdlcyBhcmUgaW5jaWRlbnQgdG8gYXJlIG5vdFxuLy8geWV0IHBsYWNlZCBvbiB0aGUgY2lyY2xlLlxuQVZTREZFZGdlLnByb3RvdHlwZS5jcm9zc2VzV2l0aEVkZ2UgPSBmdW5jdGlvbihvdGhlckVkZ2UpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBzb3VyY2VQb3MgPSBzZWxmLmdldFNvdXJjZSgpLmdldEluZGV4KCk7XG4gICAgbGV0IHRhcmdldFBvcyA9IHNlbGYuZ2V0VGFyZ2V0KCkuZ2V0SW5kZXgoKTtcbiAgICBsZXQgb3RoZXJTb3VyY2VQb3MgPSBvdGhlckVkZ2UuZ2V0U291cmNlKCkuZ2V0SW5kZXgoKTtcbiAgICBsZXQgb3RoZXJUYXJnZXRQb3MgPSBvdGhlckVkZ2UuZ2V0VGFyZ2V0KCkuZ2V0SW5kZXgoKTtcbiAgICBcbiAgICAvLyBpZiBhbnkgb2YgdGhlIHZlcnRpY2VzIHRob3NlIHR3byBlZGdlcyBhcmUgbm90IHlldCBwbGFjZWRcbiAgICBpZihzb3VyY2VQb3MgPT09IC0xIHx8IHRhcmdldFBvcyA9PT0gLTEgfHwgb3RoZXJTb3VyY2VQb3MgPT09IC0xIHx8IG90aGVyVGFyZ2V0UG9zID09PSAtMSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgb3RoZXJTb3VyY2VEaXN0ID0gb3RoZXJFZGdlLmdldFNvdXJjZSgpLmdldENpcmNEaXN0V2l0aFRoZU5vZGUoc2VsZi5nZXRTb3VyY2UoKSk7XG4gICAgbGV0IG90aGVyVGFyZ2V0RGlzdCA9IG90aGVyRWRnZS5nZXRUYXJnZXQoKS5nZXRDaXJjRGlzdFdpdGhUaGVOb2RlKHNlbGYuZ2V0U291cmNlKCkpO1xuICAgIGxldCB0aGlzVGFyZ2V0RGlzdCA9IHNlbGYuZ2V0VGFyZ2V0KCkuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZShzZWxmLmdldFNvdXJjZSgpKTtcblxuICAgIGlmICh0aGlzVGFyZ2V0RGlzdCA8IE1hdGgubWF4KG90aGVyU291cmNlRGlzdCwgb3RoZXJUYXJnZXREaXN0KSAmJlxuICAgICAgICAgICAgdGhpc1RhcmdldERpc3QgPiBNYXRoLm1pbihvdGhlclNvdXJjZURpc3QsIG90aGVyVGFyZ2V0RGlzdCkgJiZcbiAgICAgICAgICAgICAgICBvdGhlclRhcmdldERpc3QgIT09IDAgJiYgb3RoZXJTb3VyY2VEaXN0ICE9PSAwKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIDEgaWYgdGhpcyBlZGdlIGNyb3NzZXMgd2l0aCB0aGUgaW5wdXQgZWRnZSwgMFxuLy8gb3RoZXJ3aXNlLlxuQVZTREZFZGdlLnByb3RvdHlwZS5jcm9zc2luZ1dpdGhFZGdlID0gZnVuY3Rpb24ob3RoZXJFZGdlKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgcmVzdWx0ID0gc2VsZi5jcm9zc2VzV2l0aEVkZ2Uob3RoZXJFZGdlKTtcblxuICAgIHJldHVybiAgcmVzdWx0ID8gMSA6IDA7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHRvdGFsIG51bWJlciBvZiBjcm9zc2luZ3Mgb2YgdGhpcyBlZGdlIHdpdGhcbi8vIGFsbCB0aGUgZWRnZXMgZ2l2ZW4gaW4gdGhlIGlucHV0IGxpc3QuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmdXaXRoTGlzdCA9IGZ1bmN0aW9uKGVkZ2VMaXN0KVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdG90YWxDcm9zc2luZyA9IDA7XG5cbiAgICBlZGdlTGlzdC5mb3JFYWNoKFxuICAgICAgICAoZWRnZSkgPT4gdG90YWxDcm9zc2luZyArPSBzZWxmLmNyb3NzaW5nV2l0aEVkZ2UoZWRnZSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRvdGFsQ3Jvc3Npbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGRWRnZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXZzZGYtYmFzZS9zcmMvQVZTREZFZGdlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIG5vZGUuXG4gKlxuICpcbiAqIENvcHlyaWdodDogaS1WaXMgUmVzZWFyY2ggR3JvdXAsIEJpbGtlbnQgVW5pdmVyc2l0eSwgMjAwNyAtIHByZXNlbnRcbiAqL1xuXG5sZXQgTE5vZGUgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxOb2RlO1xubGV0IFF1aWNrc29ydCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuUXVpY2tzb3J0O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogSW5pdGlhbGl6YXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBBVlNERk5vZGUoZ20sIHZOb2RlLCBsb2MsIHNpemUpXG57XG4gICAgLy8gQ29uc3RydWN0b3IgMTogQVZTREZOb2RlKGdtLCB2Tm9kZSwgbG9jLCBzaXplKVxuICAgIGlmKGxvYyAhPT0gdW5kZWZpbmVkICYmIHNpemUgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIExOb2RlLmNhbGwodGhpcywgZ20sIHZOb2RlLCBsb2MsIHNpemUpO1xuICAgIH1cbiAgICAvLyBDb25zdHJ1Y3RvciAyOiBBVlNERk5vZGUoZ20sIHZOb2RlKVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIExOb2RlLmNhbGwodGhpcywgZ20sIHZOb2RlKTtcbiAgICB9XG5cblx0Ly8gQW5nbGUgb2YgdGhpcyBub2RlIG9uIHRoZSBvd25lciBjaXJjbGUgaW4gcmFkaWFuc1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgLy8gSW5kZXggb2YgdGhpcyBub2RlIG9uIHRoZSBvd25lciBjaXJjbGVcbiAgICB0aGlzLmNpcmNsZUluZGV4ID0gLTE7XG5cbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgY3Jvc3NpbmdzIG9mIHRoZSBlZGdlcyB0aGlzIG5vZGUgaXMgaW5jaWRlbnQgdG9cbiAgICB0aGlzLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzID0gLTE7XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBjdXJyZW50IGVkZ2UgY3Jvc3NpbmcgbnVtYmVyIGlzIHZhbGlkIG9yIGl0IG5lZWRzIHRvIGJlXG4gICAgLy8gcmVjYWxjdWxhdGVkXG4gICAgdGhpcy5pc0Nyb3NzaW5nTnVtYmVyVmFsaWQgPSBmYWxzZTtcblxufVxuXG5BVlNERk5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMTm9kZS5wcm90b3R5cGUpO1xuZm9yIChsZXQgcHJvcGVydGllcyBpbiBMTm9kZSlcbntcbiAgICBBVlNERk5vZGVbcHJvcGVydGllc10gPSBMTm9kZVtwcm9wZXJ0aWVzXTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEFjY2Vzc29yIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBjaXJjbGUgdGhpcyBub2RlIGlzIG93bmVkIGJ5LlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRDaXJjbGUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3duZXIoKTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgaW5kZXggb2YgdGhpcyBub2RlIG9uIHRoZSBjaXJjbGUsIGFuZCBzZXRzIHRoZVxuLy8gY3Jvc3NpbmcgbnVtYmVyIGludmFsaWQuIER1ZSB0byB0aGUgaW5kZXggY2hhbmdlIG9mIHRoZSBub2RlOyBpdCBuZWVkcyB0b1xuLy8gYmUgcmVjYWxjdWxhdGVkLlxuQVZTREZOb2RlLnByb3RvdHlwZS5zZXRJbmRleCA9IGZ1bmN0aW9uKGluZGV4KVxue1xuICAgIHRoaXMuY2lyY2xlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmlzQ3Jvc3NpbmdOdW1iZXJWYWxpZCA9IGZhbHNlO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGlzIG5vZGUgaW4gdGhlIG9yZGVyaW5nIG9mIGl0cyBvd25lclxuLy8gY2lyY2xlLiBIZXJlIC0xIG1lYW5zIHRoYXQgdGhlIHZlcnRleCBpcyBub3QgeWV0IHBsYWNlZCBvbiBpdHMgb3duZXJcbi8vY2lyY2xlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5jaXJjbGVJbmRleDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYXJyYXkgb2YgdGhlIG5laWdib3JzIG9mIHRoaXMgbm9kZSBzb3J0ZWQgaW5cbi8vIGFzY2VuZGluZyBvcmRlci5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzU29ydGVkQnlEZWdyZWUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0ICBzZWxmID0gdGhpcztcblxuICAgIGxldCBuZWlnaGJvcnNMaXN0ID0gW107XG4gICAgc2VsZi5nZXROZWlnaGJvcnNMaXN0KCkuYWRkQWxsVG8obmVpZ2hib3JzTGlzdCk7XG4gICAgbGV0IHJlc3VsdCA9IG5laWdoYm9yc0xpc3QuZmlsdGVyKCBub2RlID0+ICggbm9kZS5nZXRJbmRleCgpID09PSAtMSApICk7XG5cbiAgICAvL3NvcnQgdGhlIG5laWdoYm9yc1xuICAgIGxldCBjb21wYXJpc29uRnVuY3Rpb24gPSBmdW5jdGlvbihhLGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYi5nZXREZWdyZWUoKSA+IGEuZ2V0RGVncmVlKCk7XG4gICAgfTtcbiAgICBRdWlja3NvcnQucXVpY2tzb3J0KHJlc3VsdCwgY29tcGFyaXNvbkZ1bmN0aW9uKTsgLy8gVE9ETyBjaGVjayBmb3IgYnVnc1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgZGVncmVlIG9mIHRoaXMgbm9kZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0RGVncmVlID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLmdldEVkZ2VzKCkubGVuZ3RoO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoaXMgbm9kZSBpcyBjdXJyZW50bHkgcGxhY2VkIG9uIGl0c1xuLy8gb3duZXIgY2lyY2xlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5pc09yZGVyZWQgPSAgZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiAodGhpcy5nZXRJbmRleCgpID4gLTEpO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBhbmdsZSBvZiB0aGlzIG5vZGUgdy5yLnQuIGl0cyBvd25lciBjaXJjbGUuIEhlcmVcbi8vIHRoZSBhbmdsZSB2YWx1ZSBpcyBpbiByYWRpYW4uXG5BVlNERk5vZGUucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24oYW5nbGUpXG57XG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBhbmdsZSBvZiB0aGlzIG5vZGUgdy5yLnQuIGl0cyBvd25lciBjaXJjbGUuIEhlcmVcbi8vIHRoZSBhbmdsZSB2YWx1ZSBpcyBpbiByYWRpYW4uXG5BVlNERk5vZGUucHJvdG90eXBlLmdldEFuZ2xlID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLmFuZ2xlO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBpbmRleCBkaWZmZXJlbmNlIG9mIHRoaXMgbm9kZSB3aXRoIHRoZSBpbnB1dFxuLy8gbm9kZS4gTm90ZSB0aGF0IHRoZSBpbmRleCBkaWZmZXJlbmNlIGNhbm5vdCBiZSBuZWdhdGl2ZSBpZiBib3RoIG5vZGVzIGFyZVxuLy8gcGxhY2VkIG9uIHRoZSBjaXJjbGUuIEhlcmUgLTEgbWVhbnMgYXQgbGVhc3Qgb25lIG9mIHRoZSBub2RlcyBhcmUgbm90IHlldFxuLy8gcGxhY2VkIG9uIHRoZSBjaXJjbGUuXG5BVlNERk5vZGUucHJvdG90eXBlLmdldENpcmNEaXN0V2l0aFRoZU5vZGUgPSAgZnVuY3Rpb24ocmVmTm9kZSlcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IG90aGVySW5kZXggPSByZWZOb2RlLmdldEluZGV4KCk7XG4gICAgXG4gICAgaWYob3RoZXJJbmRleCA9PT0gLTEgfHwgc2VsZi5nZXRJbmRleCgpID09PSAtMSlcbiAgICB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBsZXQgZGlmZiA9IHNlbGYuZ2V0SW5kZXgoKSAtIG90aGVySW5kZXg7XG5cbiAgICBpZihkaWZmIDwgMClcbiAgICB7XG4gICAgICAgIGRpZmYgKz0gc2VsZi5nZXRDaXJjbGUoKS5nZXRTaXplKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmY7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGZpbmRzIHRoZSBudW1iZXIgb2YgZWRnZSBjcm9zc2luZ3MgYmV0d2VlbiB0aGUgZWRnZXMgb2Zcbi8vIHRoaXMgbm9kZSBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBpbnB1dCBvbmUuXG5BVlNERk5vZGUucHJvdG90eXBlLmdldENyb3NzaW5nTnVtYmVyV2l0aE5vZGUgPSAgZnVuY3Rpb24ob3RoZXJOb2RlKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdG90YWxDcm9zc2luZyA9IDA7XG5cbiAgICBzZWxmLmdldEVkZ2VzKCkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24oZWRnZSlcbiAgICAgICAge1xuICAgICAgICAgICAgb3RoZXJOb2RlLmdldEVkZ2VzKCkuZm9yRWFjaChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihvdGhlckVkZ2UpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbENyb3NzaW5nICs9IGVkZ2UuY3Jvc3NpbmdXaXRoRWRnZShvdGhlckVkZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRvdGFsQ3Jvc3Npbmc7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBlZGdlIGNyb3NzaW5ncy4gSWYgdGhlIHByZXZpb3VzbHlcbi8vIGNhbGN1bGF0ZWQgdmFsdWUgaXMgbm90IHZhbGlkIGR1ZSB0byBhbiBpbmRleCBjaGFuZ2Ugb24gdGhlIGNpcmNsZSwgdGhlblxuLy8gYSByZWNhbGN1bGF0aW9uIGlzIHBlcmZvcm1lZC5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIGlmKCFzZWxmLmlzQ3Jvc3NpbmdOdW1iZXJWYWxpZClcbiAgICB7XG4gICAgICAgIHNlbGYuY2FsY3VsYXRlVG90YWxDcm9zc2luZygpO1xuICAgICAgICBzZWxmLmlzQ3Jvc3NpbmdOdW1iZXJWYWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYudG90YWxDcm9zc2luZ09mRWRnZXM7XG59O1xuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHRvdGFsIG51bWJlciBvZiBjcm9zc2luZ3MgdGhlIGVkZ2VzIG9mIHRoaXNcbi8vIG5vZGUgY2F1c2UuXG4vLyBUT0RPOiBjaGVjayBmb3IgcG9zc2libGUgZXJyb3JcbkFWU0RGTm9kZS5wcm90b3R5cGUuY2FsY3VsYXRlVG90YWxDcm9zc2luZyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRlbXBfY3Jvc3NpbmdfY291bnQgPSAwO1xuICAgIGxldCB0ZW1wX2VkZ2VfbGlzdCA9IFtdO1xuICAgIHRlbXBfZWRnZV9saXN0LnB1c2guYXBwbHkoc2VsZi5nZXRDaXJjbGUoKS5nZXRFZGdlcygpKTtcbiAgICB0ZW1wX2VkZ2VfbGlzdCA9IHRlbXBfZWRnZV9saXN0LmZpbHRlciggKGVsZSkgPT4gc2VsZi5nZXRFZGdlcygpLmluZGV4T2YoZWxlKSA8IDApO1xuXG4gICAgc2VsZi5nZXRFZGdlcygpLmZvckVhY2goXG4gICAgICAgIChlZGdlKSA9PiB0ZW1wX2Nyb3NzaW5nX2NvdW50ICs9IGVkZ2UuY2FsY3VsYXRlVG90YWxDcm9zc2luZ1dpdGhMaXN0KHRlbXBfZWRnZV9saXN0KVxuICAgICk7XG5cbiAgICBzZWxmLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzID0gdGVtcF9jcm9zc2luZ19jb3VudDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZOb2RlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdnNkZi1iYXNlL3NyYy9BVlNERk5vZGUuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKlxuICogQ2hvb3NlIHRoZSB0eXBlIG9mIGxheW91dCB0aGF0IGJlc3Qgc3VpdHMgeW91ciB1c2VjYXNlIGFzIGEgc3RhcnRpbmcgcG9pbnQuXG4gKlxuICogQSBkaXNjcmV0ZSBsYXlvdXQgaXMgb25lIHRoYXQgYWxnb3JpdGhtaWNhbGx5IHNldHMgcmVzdWx0YW50IHBvc2l0aW9ucy4gIEl0XG4gKiBkb2VzIG5vdCBoYXZlIGludGVybWVkaWF0ZSBwb3NpdGlvbnMuXG4gKlxuICogQSBjb250aW51b3VzIGxheW91dCBpcyBvbmUgdGhhdCB1cGRhdGVzIHBvc2l0aW9ucyBjb250aW51b3VzbHksIGxpa2UgYSBmb3JjZS1cbiAqIGRpcmVjdGVkIC8gcGh5c2ljcyBzaW11bGF0aW9uIGxheW91dC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vQVZTREYnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQvaW5kZXguanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyB0aGUgb3ZlcmFsbCBsYXlvdXQgcHJvY2VzcyBmb3IgdGhlIEFWU0RGIGFsZ29yaXRobVxuICogKENpcmN1bGFyIERyYXdpbmcgQWxnb3JpdGhtIGJ5IEhlIGFuZCBTeWtvcmEpLlxuICpcbiAqXG4gKiBDb3B5cmlnaHQ6IGktVmlzIFJlc2VhcmNoIEdyb3VwLCBCaWxrZW50IFVuaXZlcnNpdHksIDIwMDcgLSBwcmVzZW50XG4gKi9cblxubGV0IExheW91dCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuTGF5b3V0O1xubGV0IFF1aWNrc29ydCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuUXVpY2tzb3J0O1xubGV0IEFWU0RGQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9BVlNERkNvbnN0YW50cy5qcycpO1xuXG5sZXQgQVZTREZDaXJjbGUgPSByZXF1aXJlKCcuL0FWU0RGQ2lyY2xlLmpzJyk7XG5sZXQgQVZTREZOb2RlID0gcmVxdWlyZSgnLi9BVlNERk5vZGUuanMnKTtcbmxldCBBVlNERkVkZ2UgPSByZXF1aXJlKCcuL0FWU0RGRWRnZS5qcycpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogSW5pdGlhbGl6YXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBDb25zdHJ1Y3RvclxuZnVuY3Rpb24gQVZTREZMYXlvdXQoKVxue1xuICAgIExheW91dC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSBBVlNERkNvbnN0YW50cy5ERUZBVUxUX05PREVfU0VQQVJBVElPTjtcbn1cblxuQVZTREZMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yIChsZXQgcHJvcGVydHkgaW4gTGF5b3V0KVxue1xuICAgIEFWU0RGTGF5b3V0W3Byb3BlcnR5XSA9IExheW91dFtwcm9wZXJ0eV07XG59XG5cbkFWU0RGTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2T2JqZWN0KVxue1xuICAgIHJldHVybiBuZXcgQVZTREZDaXJjbGUobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZPYmplY3QpO1xufTtcblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXG57XG4gICAgcmV0dXJuIG5ldyBBVlNERk5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcbn07XG5cbkFWU0RGTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKVxue1xuICAgIHJldHVybiBuZXcgQVZTREZFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHBvc2l0aW9uIGRhdGEgZm9yIGFsbCBub2Rlc1xuQVZTREZMYXlvdXQucHJvdG90eXBlLmdldFBvc2l0aW9uc0RhdGEgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICB2YXIgcERhdGEgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICB2YXIgcmVjdCA9IGFsbE5vZGVzW2ldLnJlY3Q7XG4gICAgICAgIHZhciBpZCA9IGFsbE5vZGVzW2ldLmlkO1xuXG4gICAgICAgIHBEYXRhW2lkXSA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHg6IHJlY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgeTogcmVjdC5nZXRDZW50ZXJZKCksXG4gICAgICAgICAgICB3OiByZWN0LndpZHRoLFxuICAgICAgICAgICAgaDogcmVjdC5oZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcERhdGE7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogTGF5b3V0IFJlbGF0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGxheW91dCBvbiBjb25zdHJ1Y3RlZCBsLWxldmVsIGdyYXBoLlxuLy8gSXQgcmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG90aGVyd2lzZVxuQVZTREZMYXlvdXQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ2hlY2sgaWYgZ3JhcGggY29udGFpbnMgYW55IGNvbXBvdW5kIHN0cnVjdHVyZXNcbiAgICBpZiAoc2VsZi5ncmFwaE1hbmFnZXIuZ2V0R3JhcGhzKCkubGVuZ3RoID4gMSlcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgY2x1c3RlckdyYXBoID0gc2VsZi5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpOyAvL0dldHMgYW4gQVZTREZDaXJjbGUgb2JqZWN0XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGVTZXBhcmF0aW9uKTtcbiAgICBjbHVzdGVyR3JhcGguc2V0Tm9kZVNlcGFyYXRpb24odGhpcy5ub2RlU2VwYXJhdGlvbik7XG4gICAgY2x1c3RlckdyYXBoLmNhbGN1bGF0ZVJhZGl1cygpO1xuICAgIGNsdXN0ZXJHcmFwaC5pbml0T3JkZXJpbmcoKTtcblxuICAgIHdoaWxlICghY2x1c3RlckdyYXBoLmhhc0ZpbmlzaGVkT3JkZXJpbmcoKSlcbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gY2x1c3RlckdyYXBoLmZpbmROb2RlVG9QbGFjZSgpO1xuICAgICAgICBjbHVzdGVyR3JhcGgucHV0SW5PcmRlcihub2RlKTtcbiAgICB9XG5cbi8vICAgIHNlbGYucG9zdFByb2Nlc3MoY2x1c3RlckdyYXBoKTtcbi8vICAgIGNsdXN0ZXJHcmFwaC5jb3JyZWN0QW5nbGVzKCk7XG5cbiAgICBjbHVzdGVyR3JhcGguZ2V0Tm9kZXMoKS5mb3JFYWNoKFxuICAgICAgICAobm9kZSkgPT4gbm9kZS5zZXRDZW50ZXIoY2x1c3RlckdyYXBoLmdldENlbnRlclgoKSArIGNsdXN0ZXJHcmFwaC5nZXRSYWRpdXMoKSAqIE1hdGguY29zKG5vZGUuZ2V0QW5nbGUoKSksIGNsdXN0ZXJHcmFwaC5nZXRDZW50ZXJZKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2x1c3RlckdyYXBoLmdldFJhZGl1cygpICogTWF0aC5zaW4obm9kZS5nZXRBbmdsZSgpKSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBUaGlzIG1ldGhvZCBwZXJmb3JtcyBsYXlvdXQgb24gY29uc3RydWN0ZWQgbC1sZXZlbCBncmFwaC4gSXQgcmV0dXJucyB0cnVlXG4vLyBvbiBzdWNjZXNzLCBmYWxzZSBvdGhlcndpc2UuXG5BVlNERkxheW91dC5wcm90b3R5cGUucG9zdFByb2Nlc3MgPSBmdW5jdGlvbiAoY2lyY2xlKVxue1xuICAgIGNpcmNsZS5jYWxjdWxhdGVFZGdlQ3Jvc3NpbmdzT2ZOb2RlcygpO1xuXG4gICAgbGV0IGxpc3QgPSBjaXJjbGUuZ2V0Tm9kZXMoKTtcblxuICAgIGxldCBjb21wYXJpc29uRnVuY3Rpb24gPSBmdW5jdGlvbihhLGIpXG4gICAge1xuICAgICAgICByZXR1cm4gYi5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpID4gYS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpO1xuICAgIH07XG5cbiAgICBRdWlja3NvcnQucXVpY2tzb3J0KGxpc3QsIGNvbXBhcmlzb25GdW5jdGlvbik7IC8vIFRPRE8gY2hlY2sgZm9yIGJ1Z3NcblxuXG5cbiAgICBmb3IgKGxldCBpID0gbGlzdC5sZW5ndGggLTE7IGkgPj0gMDsgaS0tKVxuICAgIHtcbiAgICAgICAgbGV0IG5vZGUgPSBsaXN0W2ldO1xuICAgICAgICBsZXQgY3VycmVudENyb3NzaW5nTnVtYmVyID0gbm9kZS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpO1xuICAgICAgICBsZXQgbmV3Q3Jvc3NpbmdOdW1iZXI7XG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5laWdoYm9ycy5sZW5ndGg7IGorKylcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5laWdoYm9yID0gbmVpZ2hib3JzW2pdO1xuXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXggPSAobmVpZ2hib3IuZ2V0SW5kZXgoKSArIDEpICUgY2lyY2xlLmdldFNpemUoKTtcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IG5vZGUuZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgaWYgKG9sZEluZGV4ICE9PSBuZXdJbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEluZGV4KG5ld0luZGV4KTtcblxuICAgICAgICAgICAgICAgIGlmIChvbGRJbmRleCA8IG5vZGUuZ2V0SW5kZXgoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9sZEluZGV4ICs9IGNpcmNsZS5nZXRTaXplKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gbm9kZS5nZXRJbmRleCgpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgb2xkSW5kZXgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGNpcmNsZS5nZXRPcmRlcigpW2luZGV4ICUgY2lyY2xlLmdldFNpemUoKV07XG4gICAgICAgICAgICAgICAgICAgIHRlbXAuc2V0SW5kZXgoKHRlbXAuZ2V0SW5kZXgoKSArIDEpICUgY2lyY2xlLmdldFNpemUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbm9kZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCk7XG4gICAgICAgICAgICAgICAgbmV3Q3Jvc3NpbmdOdW1iZXIgPSBub2RlLmdldFRvdGFsQ3Jvc3NpbmdPZkVkZ2VzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3Q3Jvc3NpbmdOdW1iZXIgPj0gY3VycmVudENyb3NzaW5nTnVtYmVyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlLmxvYWRPbGRJbmRpY2VzT2ZOb2RlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaXJjbGUucmVPcmRlclZlcnRpY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDcm9zc2luZ051bWJlciA9IG5ld0Nyb3NzaW5nTnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZMYXlvdXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F2c2RmLWJhc2Uvc3JjL0FWU0RGTGF5b3V0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGltcGwgPSByZXF1aXJlKCcuL2xheW91dCcpO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG4gIGlmKCAhY3l0b3NjYXBlICl7IHJldHVybjsgfSAvLyBjYW4ndCByZWdpc3RlciBpZiBjeXRvc2NhcGUgdW5zcGVjaWZpZWRcblxuICBjeXRvc2NhcGUoICdsYXlvdXQnLCAnYXZzZGYnLCBpbXBsICk7IC8vIHJlZ2lzdGVyIHdpdGggY3l0b3NjYXBlLmpzXG59O1xuXG5pZiggdHlwZW9mIGN5dG9zY2FwZSAhPT0gJ3VuZGVmaW5lZCcgKXsgLy8gZXhwb3NlIHRvIGdsb2JhbCBjeXRvc2NhcGUgKGkuZS4gd2luZG93LmN5dG9zY2FwZSlcbiAgcmVnaXN0ZXIoIGN5dG9zY2FwZSApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIG92ZXJhbGwgbGF5b3V0IHByb2Nlc3MgZm9yIHRoZVxuICogQWRqYWNlbnQgVmVydGV4IHdpdGggU21hbGxlc3QgRGVncmVlIEZpcnN0IChBVlNERikgYWxnb3JpdGhtLlxuICogKENpcmN1bGFyIERyYXdpbmcgQWxnb3JpdGhtIGJ5IEhvbmdtZWkgSGUgJiBPbmRyZWogU8O9a29yYSkuXG4gKlxuICogQGF1dGhvciBEb3J1ayDDh2FrbWFrw6fEsVxuICogQGF1dGhvciBBbGloYW4gT2trYVxuICpcbiAqIENvcHlyaWdodDogaS1WaXMgKEluZm9ybWF0aW9uIFZpc3VhbGl6YXRpb24pIFJlc2VhcmNoIExhYiwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDE5IC0gcHJlc2VudFxuKi9cblxuLy9jeXRvc3NjYXBlLmpzLWF2c2RmIFJFUVVJUkVTIGF2c2RmLWJhc2UgbGlicmFyeSBlbGVtZW50c1xuY29uc3QgQVZTREZMYXlvdXQgPSByZXF1aXJlKCdhdnNkZi1iYXNlJykuQVZTREZMYXlvdXQ7XG5jb25zdCBBVlNERk5vZGUgPSByZXF1aXJlKCdhdnNkZi1iYXNlJykuQVZTREZOb2RlO1xuY29uc3QgQVZTREZDb25zdGFudHMgPSByZXF1aXJlKCdhdnNkZi1iYXNlJykuQVZTREZDb25zdGFudHM7XG5jb25zdCBQb2ludEQgPSByZXF1aXJlKCdhdnNkZi1iYXNlJykubGF5b3V0QmFzZS5Qb2ludEQ7XG5jb25zdCBEaW1lbnNpb25EID0gcmVxdWlyZSgnYXZzZGYtYmFzZScpLmxheW91dEJhc2UuRGltZW5zaW9uRDtcblxuLy9DeXRvc2NhcGUtZXh0ZW50aW9uIHRlbXBsYXRlIHJlcXVpcmVtZW50c1xuLy9Nb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGluIE5QTSAnc2x1c2gtY3l0b3NjYXBlLWV4dGVuc2lvbicgcGFja2FnZVxuY29uc3QgYXNzaWduID0gcmVxdWlyZSgnLi4vYXNzaWduJyk7XG5jb25zdCBDb250aW51b3VzTGF5b3V0ID0gcmVxdWlyZSgnLi9jb250aW51b3VzLWJhc2UnKTtcblxuY29uc3QgaXNGbiA9IGZuID0+IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IG9wdEZuID0gKCBvcHQsIGVsZSApID0+IHtcbiAgaWYoIGlzRm4oIG9wdCApICl7XG4gICAgcmV0dXJuIG9wdCggZWxlICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9wdDtcbiAgfVxufTtcblxubGV0IGRlZmF1bHRzID0ge1xuICByZWFkeTogZnVuY3Rpb24gKCkge30sIC8vIENhbGxlZCBvbiBgbGF5b3V0cmVhZHlgXG4gIHN0b3A6IGZ1bmN0aW9uICgpIHt9LCAvLyBDYWxsZWQgb24gYGxheW91dHN0b3BgXG4gIHJlZnJlc2g6IDMwLCAgLy8gbnVtYmVyIG9mIHRpY2tzIHBlciBmcmFtZTsgaGlnaGVyIGlzIGZhc3RlciBidXQgbW9yZSBqZXJreVxuICBmaXQ6IHRydWUsICAgLy8gV2hldGhlciB0byBmaXQgdGhlIG5ldHdvcmsgdmlldyBhZnRlciB3aGVuIGRvbmVcbiAgcGFkZGluZzogMTAsICAgLy8gUGFkZGluZyBvbiBmaXRcbiAgcmFuZG9taXplOiB0cnVlLCAgIC8vIFdoZXRoZXIgdG8gZW5hYmxlIGluY3JlbWVudGFsIG1vZGVcbiAgbnVtSXRlcjogdW5kZWZpbmVkLCAgIC8vIE1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybVxuICBhbmltYXRlOiAnZW5kJywgICAvLyBUeXBlIG9mIGxheW91dCBhbmltYXRpb24uIFRoZSBvcHRpb24gc2V0IGlzIHsnZHVyaW5nJywgJ2VuZCcsIGZhbHNlfVxuICBhbmltYXRpb25EdXJhdGlvbjogNTAwLCAgIC8vIER1cmF0aW9uIGZvciBhbmltYXRlOmVuZFxuICBub2RlU2VwYXJhdGlvbjogJzYwJyxcblxuICAvLyBSZXByZXNlbnRzIHRoZSBhbW91bnQgb2YgdGhlIHZlcnRpY2FsIHNwYWNlIHRvIHB1dCBiZXR3ZWVuIHRoZSB6ZXJvIGRlZ3JlZSBtZW1iZXJzIGR1cmluZyB0aGUgdGlsaW5nIG9wZXJhdGlvbihjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uKVxuICB0aWxpbmdQYWRkaW5nVmVydGljYWw6IDEwLFxuXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgaG9yaXpvbnRhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ0hvcml6b250YWw6IDEwXG59O1xuXG5jbGFzcyBBVlNERiBleHRlbmRzIENvbnRpbnVvdXNMYXlvdXQge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApe1xuICAgIHN1cGVyKCBhc3NpZ24oIHt9LCBkZWZhdWx0cywgb3B0aW9ucyApICk7XG5cbiAgICBpZihvcHRpb25zLm5vZGVTZXBhcmF0aW9uICE9IG51bGwpXG4gICAgICBBVlNERkNvbnN0YW50cy5ERUZBVUxUX05PREVfU0VQQVJBVElPTiA9IG9wdGlvbnMubm9kZVNlcGFyYXRpb247XG4gICAgZWxzZVxuICAgICAgQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT04gPSBkZWZhdWx0cy5ub2RlU2VwYXJhdGlvbjtcbiAgfVxuXG4gIC8vSW5pdGlhbGl6aW5nIEFWU0RGIGVsZW1lbnRzIGFuZCBhcnJhbmdpbmcgdGhlIG5vZGVzIG9mIHRoZSBncmFwaCBhcm91bmQgdGhlIGNpcmNsZVxuICBwcmVydW4oKXtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlOyAvLyBvcHRpb25zIG9iamVjdCBjb21iaW5lZCB3aXRoIGN1cnJlbnQgc3RhdGVcblxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9uczsgLy8gVE9ETyBEbyB3ZSBuZWVkIGl0P1xuXG4gICAgLy9Jbml0aWFsaXplIEFWU0RGIGVsZW1lbnRzXG4gICAgbGV0IGF2c2RmTGF5b3V0ID0gdGhpcy5hdnNkZkxheW91dCA9IG5ldyBBVlNERkxheW91dCgpO1xuICAgIGxldCBncmFwaE1hbmFnZXIgPSB0aGlzLmdyYXBoTWFuYWdlciA9IGF2c2RmTGF5b3V0Lm5ld0dyYXBoTWFuYWdlcigpO1xuXG4gICAgbGV0IG5vZGVzID0gc3RhdGUubm9kZXM7XG4gICAgbGV0IGVkZ2VzID0gc3RhdGUuZWRnZXM7XG5cbiAgICBsZXQgcm9vdCA9IHRoaXMucm9vdCA9IGdyYXBoTWFuYWdlci5hZGRSb290KCk7XG4gICAgdGhpcy5pZFRvTE5vZGUgPSB7fTtcbiAgICAvL0dldHRpbmcgbm9kZXMgb2YgY3l0b3NjYXBlIGFuZCBjb252ZXJ0aW5nIGl0IHRvIEFWU0RGIHN0cnVjdHVyZVxuICAgIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdChyb290LCBub2RlcywgYXZzZGZMYXlvdXQpO1xuXG4gICAgLy9BZGRpbmcgZWRnZXMgb2YgY3l0b3NjYXBlIGFuZCB0cmFuc2ZlcmluZyBpdCB0byBHcmFwaE1hbmFnZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGxldCBlZGdlID0gZWRnZXNbaV07XG4gICAgICBsZXQgc291cmNlTm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInNvdXJjZVwiKV07XG4gICAgICBsZXQgdGFyZ2V0Tm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInRhcmdldFwiKV07XG4gICAgICBpZihzb3VyY2VOb2RlICE9PSB0YXJnZXROb2RlICYmIHNvdXJjZU5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHRhcmdldE5vZGUpLmxlbmd0aCA9PT0gMClcbiAgICAgIHtcbiAgICAgICAgbGV0IGUxID0gZ3JhcGhNYW5hZ2VyLmFkZChhdnNkZkxheW91dC5uZXdFZGdlKCksIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgICBlMS5pZCA9IGVkZ2UuaWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdnNkZkxheW91dC5sYXlvdXQoKTsgLy9UT0RPIENoYW5nZSBuYW1lP1xuXG4gICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5sYXlvdXRQb3NpdGlvbnMoc2VsZiwgc2VsZi5vcHRpb25zLCBnZXRQb3NpdGlvbnMpO1xuXG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb25zKGVsZSwgaSlcbiAgICB7XG4gICAgICBpZih0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKVxuICAgICAge1xuICAgICAgICBlbGUgPSBpO1xuICAgICAgfVxuICAgICAgbGV0IHRoZUlkID0gZWxlLmRhdGEoJ2lkJyk7XG4gICAgICBsZXQgbE5vZGUgPSBzZWxmLmlkVG9MTm9kZVt0aGVJZF07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGxOb2RlLmdldFJlY3QoKS5nZXRDZW50ZXJYKCksXG4gICAgICAgIHk6IGxOb2RlLmdldFJlY3QoKS5nZXRDZW50ZXJZKClcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLy8gcnVuIHRoaXMgZWFjaCBpdGVyYWN0aW9uXG4gIHRpY2soKXtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIGxldCBpc0RvbmUgPSB0cnVlO1xuXG4gICAgLy8gVE9ETyB1cGRhdGUgc3RhdGUgZm9yIHRoaXMgaXRlcmF0aW9uXG5cbiAgICAvKlxuICAgIHN0YXRlLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuICAgICAgbGV0IHMgPSB0aGlzLmdldFNjcmF0Y2gobik7XG5cbiAgICAgIC8vIGV4YW1wbGUgOiBwdXQgbm9kZSBhdCByYW5kb20gcG9zaXRpb25cbiAgICAgIHMueCA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICBzLnkgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgIH0gKTtcbiAgICAqL1xuXG4gICAgcmV0dXJuIGlzRG9uZTtcbiAgfVxuXG4gIC8vIHJ1biB0aGlzIGZ1bmN0aW9uIGFmdGVyIHRoZSBsYXlvdXQgaXMgZG9uZSB0aWNraW5nXG4gIHBvc3RydW4oKXtcblxuICB9XG5cbiAgLy8gY2xlYW4gdXAgYW55IG9iamVjdCByZWZzIHRoYXQgY291bGQgcHJldmVudCBnYXJiYWdlIGNvbGxlY3Rpb24sIGV0Yy5cbiAgZGVzdHJveSgpe1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy9UcmFuc2l0aW9uIGZyb20gY3l0b3NjYXBlIG5vZGVzIHRvIEFWU0RGIGVsZW1lbnRzXG4gIHByb2Nlc3NDaGlsZHJlbkxpc3QocGFyZW50LCBjaGlsZHJlbiwgbGF5b3V0KSB7XG4gICAgbGV0IHNpemUgPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspXG4gICAge1xuICAgICAgbGV0IHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBsZXQgdGhlTm9kZTtcblxuICAgICAgLy9MYWJlbCBkaW1lbnNpb25zIGFyZSBOT1QgaW5jbHVkZWQgd2hlbiBjYWxjdWxhdGluZyBub2RlIGRpbWVuc2lvbnNcbiAgICAgIGxldCBkaW1lbnNpb25zID0gdGhlQ2hpbGQubGF5b3V0RGltZW5zaW9ucyh7XG4gICAgICAgIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhlQ2hpbGQub3V0ZXJXaWR0aCgpICE9IG51bGwgJiYgdGhlQ2hpbGQub3V0ZXJIZWlnaHQoKSAhPSBudWxsKVxuICAgICAge1xuICAgICAgICB0aGVOb2RlID0gcGFyZW50LmFkZChuZXcgQVZTREZOb2RlKGxheW91dC5ncmFwaE1hbmFnZXIsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbmV3IFBvaW50RCh0aGVDaGlsZC5wb3NpdGlvbigneCcpIC0gZGltZW5zaW9ucy53IC8gMixcbiAgICAgICAgICAgICAgICB0aGVDaGlsZC5wb3NpdGlvbigneScpIC0gZGltZW5zaW9ucy5oIC8gMiksXG4gICAgICAgICAgICBuZXcgRGltZW5zaW9uRChwYXJzZUZsb2F0KGRpbWVuc2lvbnMudyksXG4gICAgICAgICAgICAgICAgcGFyc2VGbG9hdChkaW1lbnNpb25zLmgpKSkpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB0aGVOb2RlID0gcGFyZW50LmFkZChuZXcgQVZTREZOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCBpZCB0byB0aGUgbGF5b3V0IG5vZGVcbiAgICAgIHRoZU5vZGUuaWQgPSB0aGVDaGlsZC5kYXRhKFwiaWRcIik7XG5cbiAgICAgIC8vIEF0dGFjaCB0aGUgcGFkZGluZ3Mgb2YgY3kgbm9kZSB0byBsYXlvdXQgbm9kZVxuICAgICAgdGhlTm9kZS5wYWRkaW5nTGVmdCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgICAgdGhlTm9kZS5wYWRkaW5nVG9wID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgICB0aGVOb2RlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgICAgdGhlTm9kZS5wYWRkaW5nQm90dG9tID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG5cbiAgICAgIC8vIE1hcCB0aGUgbGF5b3V0IG5vZGVcbiAgICAgIHRoaXMuaWRUb0xOb2RlW3RoZUNoaWxkLmRhdGEoXCJpZFwiKV0gPSB0aGVOb2RlO1xuXG4gICAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LngpKVxuICAgICAge1xuICAgICAgICB0aGVOb2RlLnJlY3QueCA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hTih0aGVOb2RlLnJlY3QueSkpXG4gICAgICB7XG4gICAgICAgIHRoZU5vZGUucmVjdC55ID0gMDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC9BVlNERi5qcyIsIi8vIGdlbmVyYWwgZGVmYXVsdCBvcHRpb25zIGZvciBmb3JjZS1kaXJlY3RlZCBsYXlvdXRcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgYW5pbWF0ZTogdHJ1ZSwgLy8gd2hldGhlciB0byBzaG93IHRoZSBsYXlvdXQgYXMgaXQncyBydW5uaW5nOyBzcGVjaWFsICdlbmQnIHZhbHVlIG1ha2VzIHRoZSBsYXlvdXQgYW5pbWF0ZSBsaWtlIGEgZGlzY3JldGUgbGF5b3V0XG4gIHJlZnJlc2g6IDEwLCAvLyBudW1iZXIgb2YgdGlja3MgcGVyIGZyYW1lOyBoaWdoZXIgaXMgZmFzdGVyIGJ1dCBtb3JlIGplcmt5XG4gIG1heEl0ZXJhdGlvbnM6IDEwMDAsIC8vIG1heCBpdGVyYXRpb25zIGJlZm9yZSB0aGUgbGF5b3V0IHdpbGwgYmFpbCBvdXRcbiAgbWF4U2ltdWxhdGlvblRpbWU6IDQwMDAsIC8vIG1heCBsZW5ndGggaW4gbXMgdG8gcnVuIHRoZSBsYXlvdXRcbiAgdW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nOiBmYWxzZSwgLy8gc28geW91IGNhbid0IGRyYWcgbm9kZXMgZHVyaW5nIGxheW91dFxuICBmaXQ6IHRydWUsIC8vIG9uIGV2ZXJ5IGxheW91dCByZXBvc2l0aW9uIG9mIG5vZGVzLCBmaXQgdGhlIHZpZXdwb3J0XG4gIHBhZGRpbmc6IDMwLCAvLyBwYWRkaW5nIGFyb3VuZCB0aGUgc2ltdWxhdGlvblxuICBib3VuZGluZ0JveDogdW5kZWZpbmVkLCAvLyBjb25zdHJhaW4gbGF5b3V0IGJvdW5kczsgeyB4MSwgeTEsIHgyLCB5MiB9IG9yIHsgeDEsIHkxLCB3LCBoIH1cblxuICAvLyBsYXlvdXQgZXZlbnQgY2FsbGJhY2tzXG4gIHJlYWR5OiBmdW5jdGlvbigpe30sIC8vIG9uIGxheW91dHJlYWR5XG4gIHN0b3A6IGZ1bmN0aW9uKCl7fSwgLy8gb24gbGF5b3V0c3RvcFxuXG4gIC8vIHBvc2l0aW9uaW5nIG9wdGlvbnNcbiAgcmFuZG9taXplOiBmYWxzZSwgLy8gdXNlIHJhbmRvbSBub2RlIHBvc2l0aW9ucyBhdCBiZWdpbm5pbmcgb2YgbGF5b3V0XG4gIFxuICAvLyBpbmZpbml0ZSBsYXlvdXQgb3B0aW9uc1xuICBpbmZpbml0ZTogZmFsc2UgLy8gb3ZlcnJpZGVzIGFsbCBvdGhlciBvcHRpb25zIGZvciBhIGZvcmNlcy1hbGwtdGhlLXRpbWUgbW9kZVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9kZWZhdWx0cy5qcyIsIi8qKlxuQSBnZW5lcmljIGNvbnRpbnVvdXMgbGF5b3V0IGNsYXNzXG4qL1xuXG5jb25zdCBhc3NpZ24gPSByZXF1aXJlKCcuLi8uLi9hc3NpZ24nKTtcbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuY29uc3QgbWFrZUJvdW5kaW5nQm94ID0gcmVxdWlyZSgnLi9tYWtlLWJiJyk7XG5jb25zdCB7IHNldEluaXRpYWxQb3NpdGlvblN0YXRlLCByZWZyZXNoUG9zaXRpb25zLCBnZXROb2RlUG9zaXRpb25EYXRhIH0gPSByZXF1aXJlKCcuL3Bvc2l0aW9uJyk7XG5jb25zdCB7IG11bHRpdGljayB9ID0gcmVxdWlyZSgnLi90aWNrJyk7XG5cbmNsYXNzIENvbnRpbnVvdXNMYXlvdXQge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApe1xuICAgIGxldCBvID0gdGhpcy5vcHRpb25zID0gYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuICAgIGxldCBzID0gdGhpcy5zdGF0ZSA9IGFzc2lnbigge30sIG8sIHtcbiAgICAgIGxheW91dDogdGhpcyxcbiAgICAgIG5vZGVzOiBvLmVsZXMubm9kZXMoKSxcbiAgICAgIGVkZ2VzOiBvLmVsZXMuZWRnZXMoKSxcbiAgICAgIHRpY2tJbmRleDogMCxcbiAgICAgIGZpcnN0VXBkYXRlOiB0cnVlXG4gICAgfSApO1xuXG4gICAgcy5hbmltYXRlRW5kID0gby5hbmltYXRlICYmIG8uYW5pbWF0ZSA9PT0gJ2VuZCc7XG4gICAgcy5hbmltYXRlQ29udGludW91c2x5ID0gby5hbmltYXRlICYmICFzLmFuaW1hdGVFbmQ7XG4gIH1cblxuICBnZXRTY3JhdGNoKCBlbCApe1xuICAgIGxldCBuYW1lID0gdGhpcy5zdGF0ZS5uYW1lO1xuICAgIGxldCBzY3JhdGNoID0gZWwuc2NyYXRjaCggbmFtZSApO1xuXG4gICAgaWYoICFzY3JhdGNoICl7XG4gICAgICBzY3JhdGNoID0ge307XG5cbiAgICAgIGVsLnNjcmF0Y2gobmFtZSwgc2NyYXRjaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmF0Y2g7XG4gIH1cblxuICBydW4oKXtcbiAgICBsZXQgbCA9IHRoaXM7XG4gICAgbGV0IHMgPSB0aGlzLnN0YXRlO1xuXG4gICAgcy50aWNrSW5kZXggPSAwO1xuICAgIHMuZmlyc3RVcGRhdGUgPSB0cnVlO1xuXG4gICAgcy5ydW5uaW5nID0gdHJ1ZTtcblxuICAgIHMuY3VycmVudEJvdW5kaW5nQm94ID0gbWFrZUJvdW5kaW5nQm94KCBzLmJvdW5kaW5nQm94LCBzLmN5ICk7XG5cbiAgICBpZiggcy5yZWFkeSApeyBsLm9uZSggJ3JlYWR5Jywgcy5yZWFkeSApOyB9XG4gICAgaWYoIHMuc3RvcCApeyBsLm9uZSggJ3N0b3AnLCBzLnN0b3AgKTsgfVxuXG4gICAgcy5ub2Rlcy5mb3JFYWNoKCBuID0+IHNldEluaXRpYWxQb3NpdGlvblN0YXRlKCBuLCBzICkgKTtcblxuICAgIGwucHJlcnVuKCBzICk7XG5cbiAgICBpZiggcy5hbmltYXRlQ29udGludW91c2x5ICl7XG4gICAgICBsZXQgdW5ncmFiaWZ5ID0gbm9kZSA9PiB7XG4gICAgICAgIGlmKCAhcy51bmdyYWJpZnlXaGlsZVNpbXVsYXRpbmcgKXsgcmV0dXJuOyB9XG5cbiAgICAgICAgbGV0IGdyYWJiYWJsZSA9IGdldE5vZGVQb3NpdGlvbkRhdGEoIG5vZGUsIHMgKS5ncmFiYmFibGUgPSBub2RlLmdyYWJiYWJsZSgpO1xuXG4gICAgICAgIGlmKCBncmFiYmFibGUgKXtcbiAgICAgICAgICBub2RlLnVuZ3JhYmlmeSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgcmVncmFiaWZ5ID0gbm9kZSA9PiB7XG4gICAgICAgIGlmKCAhcy51bmdyYWJpZnlXaGlsZVNpbXVsYXRpbmcgKXsgcmV0dXJuOyB9XG5cbiAgICAgICAgbGV0IGdyYWJiYWJsZSA9IGdldE5vZGVQb3NpdGlvbkRhdGEoIG5vZGUsIHMgKS5ncmFiYmFibGU7XG5cbiAgICAgICAgaWYoIGdyYWJiYWJsZSApe1xuICAgICAgICAgIG5vZGUuZ3JhYmlmeSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgdXBkYXRlR3JhYlN0YXRlID0gbm9kZSA9PiBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkuZ3JhYmJlZCA9IG5vZGUuZ3JhYmJlZCgpO1xuXG4gICAgICBsZXQgb25HcmFiID0gZnVuY3Rpb24oeyB0YXJnZXQgfSl7XG4gICAgICAgIHVwZGF0ZUdyYWJTdGF0ZSggdGFyZ2V0ICk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25GcmVlID0gb25HcmFiO1xuXG4gICAgICBsZXQgb25EcmFnID0gZnVuY3Rpb24oeyB0YXJnZXQgfSl7XG4gICAgICAgIGxldCBwID0gZ2V0Tm9kZVBvc2l0aW9uRGF0YSggdGFyZ2V0LCBzICk7XG4gICAgICAgIGxldCB0cCA9IHRhcmdldC5wb3NpdGlvbigpO1xuXG4gICAgICAgIHAueCA9IHRwLng7XG4gICAgICAgIHAueSA9IHRwLnk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgbGlzdGVuVG9HcmFiID0gbm9kZSA9PiB7XG4gICAgICAgIG5vZGUub24oJ2dyYWInLCBvbkdyYWIpO1xuICAgICAgICBub2RlLm9uKCdmcmVlJywgb25GcmVlKTtcbiAgICAgICAgbm9kZS5vbignZHJhZycsIG9uRHJhZyk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgdW5saXN0ZW5Ub0dyYWIgPSBub2RlID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVMaXN0ZW5lcignZ3JhYicsIG9uR3JhYik7XG4gICAgICAgIG5vZGUucmVtb3ZlTGlzdGVuZXIoJ2ZyZWUnLCBvbkZyZWUpO1xuICAgICAgICBub2RlLnJlbW92ZUxpc3RlbmVyKCdkcmFnJywgb25EcmFnKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmaXQgPSAoKSA9PiB7XG4gICAgICAgIGlmKCBzLmZpdCAmJiBzLmFuaW1hdGVDb250aW51b3VzbHkgKXtcbiAgICAgICAgICBzLmN5LmZpdCggcy5wYWRkaW5nICk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBvbk5vdERvbmUgPSAoKSA9PiB7XG4gICAgICAgIHJlZnJlc2hQb3NpdGlvbnMoIHMubm9kZXMsIHMgKTtcbiAgICAgICAgZml0KCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBmcmFtZSApO1xuICAgICAgfTtcblxuICAgICAgbGV0IGZyYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbXVsdGl0aWNrKCBzLCBvbk5vdERvbmUsIG9uRG9uZSApO1xuICAgICAgfTtcblxuICAgICAgbGV0IG9uRG9uZSA9ICgpID0+IHtcbiAgICAgICAgcmVmcmVzaFBvc2l0aW9ucyggcy5ub2RlcywgcyApO1xuICAgICAgICBmaXQoKTtcblxuICAgICAgICBzLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuICAgICAgICAgIHJlZ3JhYmlmeSggbiApO1xuICAgICAgICAgIHVubGlzdGVuVG9HcmFiKCBuICk7XG4gICAgICAgIH0gKTtcblxuICAgICAgICBzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICBsLmVtaXQoJ2xheW91dHN0b3AnKTtcbiAgICAgIH07XG5cbiAgICAgIHMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgbC5lbWl0KCdsYXlvdXRzdGFydCcpO1xuXG4gICAgICBzLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuICAgICAgICB1bmdyYWJpZnkoIG4gKTtcbiAgICAgICAgbGlzdGVuVG9HcmFiKCBuICk7XG4gICAgICB9ICk7XG5cbiAgICAgIGZyYW1lKCk7IC8vIGtpY2sgb2ZmXG4gICAgfSBlbHNlIHtcbiAgICAgIG11bHRpdGljayggcyApO1xuXG4gICAgICBzLmVsZXMubGF5b3V0UG9zaXRpb25zKCB0aGlzLCBzLCBub2RlID0+IGdldE5vZGVQb3NpdGlvbkRhdGEoIG5vZGUsIHMgKSApO1xuICAgIH1cblxuICAgIGwucG9zdHJ1biggcyApO1xuXG4gICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG4gIH1cblxuICBwcmVydW4oKXt9XG4gIHBvc3RydW4oKXt9XG4gIHRpY2soKXt9XG5cbiAgc3RvcCgpe1xuICAgIHRoaXMuc3RhdGUucnVubmluZyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG4gIH1cblxuICBkZXN0cm95KCl7XG4gICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250aW51b3VzTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBiYiwgY3kgKXtcbiAgaWYoIGJiID09IG51bGwgKXtcbiAgICBiYiA9IHsgeDE6IDAsIHkxOiAwLCB3OiBjeS53aWR0aCgpLCBoOiBjeS5oZWlnaHQoKSB9O1xuICB9IGVsc2UgeyAvLyBjb3B5XG4gICAgYmIgPSB7IHgxOiBiYi54MSwgeDI6IGJiLngyLCB5MTogYmIueTEsIHkyOiBiYi55MiwgdzogYmIudywgaDogYmIuaCB9O1xuICB9XG5cbiAgaWYoIGJiLngyID09IG51bGwgKXsgYmIueDIgPSBiYi54MSArIGJiLnc7IH1cbiAgaWYoIGJiLncgPT0gbnVsbCApeyBiYi53ID0gYmIueDIgLSBiYi54MTsgfVxuICBpZiggYmIueTIgPT0gbnVsbCApeyBiYi55MiA9IGJiLnkxICsgYmIuaDsgfVxuICBpZiggYmIuaCA9PSBudWxsICl7IGJiLmggPSBiYi55MiAtIGJiLnkxOyB9XG5cbiAgcmV0dXJuIGJiO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQvY29udGludW91cy1iYXNlL21ha2UtYmIuanMiLCJjb25zdCBhc3NpZ24gPSByZXF1aXJlKCcuLi8uLi9hc3NpZ24nKTtcblxubGV0IHNldEluaXRpYWxQb3NpdGlvblN0YXRlID0gZnVuY3Rpb24oIG5vZGUsIHN0YXRlICl7XG4gIGxldCBwID0gbm9kZS5wb3NpdGlvbigpO1xuICBsZXQgYmIgPSBzdGF0ZS5jdXJyZW50Qm91bmRpbmdCb3g7XG4gIGxldCBzY3JhdGNoID0gbm9kZS5zY3JhdGNoKCBzdGF0ZS5uYW1lICk7XG5cbiAgaWYoIHNjcmF0Y2ggPT0gbnVsbCApe1xuICAgIHNjcmF0Y2ggPSB7fTtcblxuICAgIG5vZGUuc2NyYXRjaCggc3RhdGUubmFtZSwgc2NyYXRjaCApO1xuICB9XG5cbiAgYXNzaWduKCBzY3JhdGNoLCBzdGF0ZS5yYW5kb21pemUgPyB7XG4gICAgeDogYmIueDEgKyBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICogYmIudyApLFxuICAgIHk6IGJiLnkxICsgTWF0aC5yb3VuZCggTWF0aC5yYW5kb20oKSAqIGJiLmggKVxuICB9IDoge1xuICAgIHg6IHAueCxcbiAgICB5OiBwLnlcbiAgfSApO1xuXG4gIHNjcmF0Y2gubG9ja2VkID0gbm9kZS5sb2NrZWQoKTtcbn07XG5cbmxldCBnZXROb2RlUG9zaXRpb25EYXRhID0gZnVuY3Rpb24oIG5vZGUsIHN0YXRlICl7XG4gIHJldHVybiBub2RlLnNjcmF0Y2goIHN0YXRlLm5hbWUgKTtcbn07XG5cbmxldCByZWZyZXNoUG9zaXRpb25zID0gZnVuY3Rpb24oIG5vZGVzLCBzdGF0ZSApe1xuICBub2Rlcy5wb3NpdGlvbnMoZnVuY3Rpb24oIG5vZGUgKXtcbiAgICBsZXQgc2NyYXRjaCA9IG5vZGUuc2NyYXRjaCggc3RhdGUubmFtZSApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHNjcmF0Y2gueCxcbiAgICAgIHk6IHNjcmF0Y2gueVxuICAgIH07XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHNldEluaXRpYWxQb3NpdGlvblN0YXRlLCBnZXROb2RlUG9zaXRpb25EYXRhLCByZWZyZXNoUG9zaXRpb25zIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9wb3NpdGlvbi5qcyIsImNvbnN0IG5vcCA9IGZ1bmN0aW9uKCl7fTtcblxubGV0IHRpY2sgPSBmdW5jdGlvbiggc3RhdGUgKXtcbiAgbGV0IHMgPSBzdGF0ZTtcbiAgbGV0IGwgPSBzdGF0ZS5sYXlvdXQ7XG5cbiAgbGV0IHRpY2tJbmRpY2F0ZXNEb25lID0gbC50aWNrKCBzICk7XG5cbiAgaWYoIHMuZmlyc3RVcGRhdGUgKXtcbiAgICBpZiggcy5hbmltYXRlQ29udGludW91c2x5ICl7IC8vIGluZGljYXRlIHRoZSBpbml0aWFsIHBvc2l0aW9ucyBoYXZlIGJlZW4gc2V0XG4gICAgICBzLmxheW91dC5lbWl0KCdsYXlvdXRyZWFkeScpO1xuICAgIH1cbiAgICBzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gIH1cblxuICBzLnRpY2tJbmRleCsrO1xuXG4gIGxldCBkdXJhdGlvbiA9IHMuc3RhcnRUaW1lIC0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gIXMuaW5maW5pdGUgJiYgKCB0aWNrSW5kaWNhdGVzRG9uZSB8fCBzLnRpY2tJbmRleCA+PSBzLm1heEl0ZXJhdGlvbnMgfHwgZHVyYXRpb24gPj0gcy5tYXhTaW11bGF0aW9uVGltZSApO1xufTtcblxubGV0IG11bHRpdGljayA9IGZ1bmN0aW9uKCBzdGF0ZSwgb25Ob3REb25lID0gbm9wLCBvbkRvbmUgPSBub3AgKXtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgbGV0IHMgPSBzdGF0ZTtcblxuICBmb3IoIGxldCBpID0gMDsgaSA8IHMubWF4SXRlcmF0aW9uczsgaSsrICl7XG4gICAgZG9uZSA9ICFzLnJ1bm5pbmcgfHwgdGljayggcyApO1xuXG4gICAgaWYoIGRvbmUgKXsgYnJlYWs7IH1cbiAgfVxuXG4gIGlmKCAhZG9uZSApe1xuICAgIG9uTm90RG9uZSgpO1xuICB9IGVsc2Uge1xuICAgIG9uRG9uZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdGljaywgbXVsdGl0aWNrIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS90aWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==