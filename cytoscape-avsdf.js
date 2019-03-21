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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
		exports["avsdfBase"] = factory();
	else
		root["avsdfBase"] = factory();
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


let avsdfBase = {};

avsdfBase.layoutBase = __webpack_require__(1);
avsdfBase.AVSDFConstants = __webpack_require__(2);
avsdfBase.AVSDFEdge = __webpack_require__(3);
avsdfBase.AVSDFCircle = __webpack_require__(4);
avsdfBase.AVSDFLayout = __webpack_require__(5);
avsdfBase.AVSDFNode = __webpack_require__(6);

module.exports = avsdfBase;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var LayoutConstants = __webpack_require__(1).LayoutConstants;

function AVSDFConstants() {}

// AVSDFConstants inherits properties in LayoutConstants
for (var prop in LayoutConstants) {
    AVSDFConstants[prop] = LayoutConstants[prop];
}

AVSDFConstants.DEFAULT_NODE_SEPARATION = 60;

module.exports = AVSDFConstants;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * edge.
 *

 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LEdge = __webpack_require__(1).LEdge;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFEdge(source, target, vEdge) {
    LEdge.call(this, source, target, vEdge);
}

AVSDFEdge.prototype = Object.create(LEdge.prototype);

for (let properties in LEdge) {
    AVSDFEdge[properties] = LEdge[properties];
}

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// The function getOtherEnd returns the other end of this edge.
AVSDFEdge.prototype.getOtherEnd = function (node) {
    return LEdge.prototype.getOtherEnd(node);
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function checks whether this edge crosses with the input edge. It
// returns false, if any of the vertices those edges are incident to are not
// yet placed on the circle.
AVSDFEdge.prototype.crossesWithEdge = function (otherEdge) {
    let self = this;
    let sourcePos = self.getSource().getIndex();
    let targetPos = self.getTarget().getIndex();
    let otherSourcePos = otherEdge.getSource().getIndex();
    let otherTargetPos = otherEdge.getTarget().getIndex();

    // if any of the vertices those two edges are not yet placed
    if (sourcePos === -1 || targetPos === -1 || otherSourcePos === -1 || otherTargetPos === -1) {
        return false;
    }

    let otherSourceDist = otherEdge.getSource().getCircDistWithTheNode(self.getSource());
    let otherTargetDist = otherEdge.getTarget().getCircDistWithTheNode(self.getSource());
    let thisTargetDist = self.getTarget().getCircDistWithTheNode(self.getSource());

    if (thisTargetDist < Math.max(otherSourceDist, otherTargetDist) && thisTargetDist > Math.min(otherSourceDist, otherTargetDist) && otherTargetDist !== 0 && otherSourceDist !== 0) {
        return true;
    }

    return false;
};

// This function returns 1 if this edge crosses with the input edge, 0
// otherwise.
AVSDFEdge.prototype.crossingWithEdge = function (otherEdge) {
    let self = this;
    let result = self.crossesWithEdge(otherEdge);

    return result ? 1 : 0;
};

// This function calculates the total number of crossings of this edge with
// all the edges given in the input list.
AVSDFEdge.prototype.calculateTotalCrossingWithList = function (edgeList) {
    let self = this;
    let totalCrossing = 0;

    edgeList.forEach(edge => totalCrossing += self.crossingWithEdge(edge));

    return totalCrossing;
};

module.exports = AVSDFEdge;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements data and functionality required for AVSDF layout per
 * circle.
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let LGraph = __webpack_require__(1).LGraph;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFCircle(parent, graphMgr, vObject) {
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

for (let property in LGraph) {
    AVSDFCircle[property] = LGraph[property];
}

AVSDFCircle.prototype.initOrdering = function () {
    this.inOrder = [];
};

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the array in which the nodes of this circle are kept in order.
AVSDFCircle.prototype.getOrder = function () {
    return this.inOrder;
};

// This function returns the x-coordinate of the center of this circle.
AVSDFCircle.prototype.getCenterX = function () {
    return this.centerX;
};

// This function returns the y-coordinate of the center of this circle.
AVSDFCircle.prototype.getCenterY = function () {
    return this.centerY;
};

// This function returns the radius of this circle.
AVSDFCircle.prototype.getRadius = function () {
    return this.radius;
};

// This function returns the total number of vertices of this circle.
AVSDFCircle.prototype.getSize = function () {
    return this.getNodes().length;
};

// This function calculates and returns the total number of crossings in this
// circle by adding up the crossing number of individual nodes on it.
AVSDFCircle.prototype.getTotalCrossingOfCircle = function () {
    let self = this;
    let crossingNumber = 0;

    for (let node in self.inOrder) {
        let nodeCrossing = node.getTotalCrossingOfEdges();
        if (nodeCrossing === -1) {
            return -1;
        }
        crossingNumber += nodeCrossing;
    }

    return crossingNumber / 4;
};

// This function checks whether or not all of the vertices of this circle are
// assigned an index on the circle.
AVSDFCircle.prototype.hasFinishedOrdering = function () {
    return this.currentIndex === this.getNodes().length;
};

// This function returns the node separation of this circle.
AVSDFCircle.prototype.getNodeSeparation = function () {
    return this.nodeSeparation;
};

// This function sets the node separation of this circle.
AVSDFCircle.prototype.setNodeSeparation = function (nodeSeparation) {
    this.nodeSeparation = nodeSeparation;
};

// -----------------------------------------------------------------------------
// Section: Remaining Functions
// -----------------------------------------------------------------------------

// This function traverses the vertices of this circle and corrects the angle
// of the vertices with respect to their circle indices.
AVSDFCircle.prototype.correctAngles = function () {
    let self = this;
    self.currentIndex = 0;

    self.inOrder.forEach(node => self.putInOrder(node));
};

// This function puts the given node on the circle in the current order and
// sets its angle appropriately.
AVSDFCircle.prototype.putInOrder = function (node) {
    let self = this;

    let nodes = self.getNodes();

    // Note that id attribute of a node is added before
    // AVSDFLayout is called
    let found = false;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == node.id) {
            found = true;
            break;
        }
    }

    if (!found) {
        throw "The node must be a member of LGraph";
    }

    self.inOrder[self.currentIndex] = node;
    node.setIndex(self.currentIndex);

    if (self.currentIndex === 0) {
        node.setAngle(0.0);
    } else {
        node.setAngle(self.inOrder[self.currentIndex - 1].getAngle() + 2 * Math.PI * (node.getDiagonal() / 2 + self.nodeSeparation + self.inOrder[self.currentIndex - 1].getDiagonal() / 2) / self.perimeter);
    }

    self.currentIndex++;
};

// This function returns the next node to be placed on this circle with
// respect to the AVSDF algorithm.
AVSDFCircle.prototype.findNodeToPlace = function () {
    let self = this;
    let sDegreeNode = undefined;

    // Find the smallest degree vertex if the stack is empty
    if (self.stack.length === 0) {
        sDegreeNode = self.findUnorderedSmallestDegreeNode();
    }
    // Find the first vertex in the stack not yet placed
    else {
            let foundUnorderNode = false;

            while (!foundUnorderNode && !(self.stack.length === 0)) {
                sDegreeNode = self.stack.pop();
                foundUnorderNode = !sDegreeNode.isOrdered();
            }

            if (!foundUnorderNode) {
                sDegreeNode = undefined;
            }
        }

    // If no unordered vertex is found in the stack, find one
    // from the remaining ones
    if (sDegreeNode === undefined) {
        sDegreeNode = self.findUnorderedSmallestDegreeNode();
    }

    // Add the unordered neighbors of this node to the stack
    if (sDegreeNode !== undefined) {
        let neighbors = sDegreeNode.getNeighborsSortedByDegree();

        for (let i = neighbors.length - 1; i >= 0; i--) {
            let neighbor = neighbors[i];

            if (!neighbor.isOrdered()) // Check here for possible error
                {
                    self.stack.push(neighbor);
                }
        }
    }

    return sDegreeNode;
};

// This function calculates the radius of this circle with respect to the sizes
// of the vertices and the node separation parameter.
AVSDFCircle.prototype.calculateRadius = function () {
    let self = this;
    let totalDiagonal = 0;

    self.getNodes().forEach(node => totalDiagonal += Math.sqrt(node.getWidth() * node.getWidth() + node.getHeight() * node.getHeight()));

    self.perimeter = totalDiagonal + self.getNodes().length * self.nodeSeparation;
    let radius = self.perimeter / (2 * Math.PI);

    // Check here for possible error

    self.getParent().setWidth(2 * radius);
    self.getParent().setHeight(2 * radius);
    self.getParent().setCenter(self.getParent().getWidth(), self.getParent().getHeight());

    self.centerX = self.getParent().getCenterX();
    self.centerY = self.getParent().getCenterY();
    self.radius = self.getParent().getHeight() / 2;
};

// This function calculates the total number of crossings of all vertices of
// this circle.
AVSDFCircle.prototype.calculateEdgeCrossingsOfNodes = function () {
    this.getNodes().forEach(node => node.calculateTotalCrossing());
};

// This function sets the index of each vertex to its position in inOrder
// array. Note that index of a node can be different from its place in the
// array due to crossing reduction phase of the AVSDF algorithm. It loads
// old index values to vertices due to an increase in the number of
// crossings with the new indices.
AVSDFCircle.prototype.loadOldIndicesOfNodes = function () {
    //this.inOrder.forEach( (node,index) => node.setIndex(index));
    var self = this;
    for (let i = 0; i < this.inOrder.length; i++) {
        self.inOrder[i].setIndex(i);
    }
};

// This function sets the position of each node in inOrder array to its index.
// Note that index of a node can be different from its place in the inOrder
// array due to crossing reduction phase of the AVSDF algorithm. This function
// puts the nodes to their new index values in inOrder array due to a
// decrease in the number of crossings with the new indices.
AVSDFCircle.prototype.reOrderVertices = function () {
    var self = this;
    this.getNodes().forEach(node => self.inOrder[node.getIndex()] = node);
};

// This function finds and returns the unordered smallest degree vertex on
// this circle.
AVSDFCircle.prototype.findUnorderedSmallestDegreeNode = function () {
    let minDegree = Number.MAX_SAFE_INTEGER;
    let sDegreeNode;

    this.getNodes().forEach(function (node) {
        if (node.getDegree() < minDegree && !node.isOrdered()) {
            minDegree = node.getDegree();
            sDegreeNode = node;
        }
    });

    return sDegreeNode;
};

module.exports = AVSDFCircle;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This class implements the overall layout process for the AVSDF algorithm
 * (Circular Drawing Algorithm by He and Sykora).
 *
 *
 * Copyright: i-Vis Research Group, Bilkent University, 2007 - present
 */

let Layout = __webpack_require__(1).Layout;
let AVSDFConstants = __webpack_require__(2);
let AVSDFCircle = __webpack_require__(4);
let AVSDFNode = __webpack_require__(6);
let AVSDFEdge = __webpack_require__(3);

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

// Constructor
function AVSDFLayout() {
    Layout.call(this);
    this.nodeSeparation = AVSDFConstants.DEFAULT_NODE_SEPARATION;
}

AVSDFLayout.prototype = Object.create(Layout.prototype);

for (let property in Layout) {
    AVSDFLayout[property] = Layout[property];
}

AVSDFLayout.prototype.newGraph = function (vObject) {
    this.avsdfCircle = new AVSDFCircle(null, this.graphManager, vObject);

    return this.avsdfCircle;
};

AVSDFLayout.prototype.newNode = function (vNode) {
    return new AVSDFNode(this.graphManager, vNode);
};

AVSDFLayout.prototype.newEdge = function (vEdge) {
    return new AVSDFEdge(null, null, vEdge);
};

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the position data for all nodes
AVSDFLayout.prototype.getPositionsData = function () {
    var allNodes = this.graphManager.getAllNodes();
    var pData = {};

    for (var i = 0; i < allNodes.length; i++) {
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

/**
 * This function performs layout on constructed l-level graph.
 * It returns true on success, false otherwise.
 * Important!: If you want to see the results of this function then, after this function is called, you have to calculate
 * and set the positions of every node. To do this call updateNodeCoordinates. However, updateNodeAngles on the other
 * hand is not needed (redundant) for this function.
 */
AVSDFLayout.prototype.layout = function () {
    let self = this;

    // Check if graph contains any compound structures
    if (self.graphManager.getGraphs().length > 1) {
        return false;
    }

    let clusterGraph = this.avsdfCircle; // Fixed reference, but now it is a bit redundant

    clusterGraph.setNodeSeparation(this.nodeSeparation);
    clusterGraph.calculateRadius();
    clusterGraph.initOrdering();

    while (!clusterGraph.hasFinishedOrdering()) {
        let node = clusterGraph.findNodeToPlace();
        clusterGraph.putInOrder(node);
    }

    return true;
};

// This function updates the angle (in radians) property of AVSDFNode elements in the circle
AVSDFLayout.prototype.updateNodeAngles = function () {
    this.graphManager.getRoot().correctAngles(); //AVSDFCircle object
};

// This function traverses the vertices of the graph and sets their correct coordinates with respect to the owner circle.
AVSDFLayout.prototype.updateNodeCoordinates = function () {
    let clusterGraph = this.graphManager.getRoot();

    clusterGraph.getNodes().forEach(function (node) {
        node.setCenter(clusterGraph.getCenterX() + clusterGraph.getRadius() * Math.cos(node.getAngle()), clusterGraph.getCenterY() + clusterGraph.getRadius() * Math.sin(node.getAngle()));
    });
};

// -----------------------------------------------------------------------------
// Section: Post Processing
// -----------------------------------------------------------------------------

/**
 * This method implements the post processing step of the algorithm, which
 * tries to minimize the number of edges further with respect to the local
 * adjusting algorithm described by He and Sykora.
 */
AVSDFLayout.prototype.initPostProcess = function () {
    this.avsdfCircle.calculateEdgeCrossingsOfNodes();

    let list = this.avsdfCircle.getNodes();

    list.sort(function (a, b) {
        return b.getTotalCrossingOfEdges() - a.getTotalCrossingOfEdges();
    });

    return list;
};

AVSDFLayout.prototype.oneStepPostProcess = function (node) {
    let self = this;

    let currentCrossingNumber = node.getTotalCrossingOfEdges();
    let newCrossingNumber;

    let neighbours = [];
    node.getNeighborsList().addAllTo(neighbours);

    for (let j = 0; j < neighbours.length; j++) {
        let neighbour = neighbours[j];

        let oldIndex = node.getIndex();
        let newIndex = (neighbour.getIndex() + 1) % self.avsdfCircle.getSize();

        if (oldIndex !== newIndex) {
            node.setIndex(newIndex);

            if (oldIndex < node.getIndex()) {
                oldIndex += self.avsdfCircle.getSize();
            }

            let index = node.getIndex();

            while (index < oldIndex) {
                let temp = self.avsdfCircle.getOrder()[index % self.avsdfCircle.getSize()];
                temp.setIndex((temp.getIndex() + 1) % self.avsdfCircle.getSize());
                index += 1;
            }

            node.calculateTotalCrossing();
            newCrossingNumber = node.getTotalCrossingOfEdges();

            if (newCrossingNumber >= currentCrossingNumber) {
                self.avsdfCircle.loadOldIndicesOfNodes();
            } else {
                self.avsdfCircle.reOrderVertices();
                currentCrossingNumber = newCrossingNumber;
            }
        }
    }
};

module.exports = AVSDFLayout;

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

let LNode = __webpack_require__(1).LNode;
let Quicksort = __webpack_require__(1).Quicksort;

// -----------------------------------------------------------------------------
// Section: Initializations
// -----------------------------------------------------------------------------

function AVSDFNode(gm, vNode, loc, size) {
    // Constructor 1: AVSDFNode(gm, vNode, loc, size)
    if (loc !== undefined && size !== undefined) {
        LNode.call(this, gm, vNode, loc, size);
    }
    // Constructor 2: AVSDFNode(gm, vNode)
    else {
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
for (let properties in LNode) {
    AVSDFNode[properties] = LNode[properties];
}

// -----------------------------------------------------------------------------
// Section: Accessor Functions
// -----------------------------------------------------------------------------

// This function returns the circle this node is owned by.
AVSDFNode.prototype.getCircle = function () {
    return this.getOwner();
};

// This function sets the index of this node on the circle, and sets the
// crossing number invalid. Due to the index change of the node; it needs to
// be recalculated.
AVSDFNode.prototype.setIndex = function (index) {
    this.circleIndex = index;
    this.isCrossingNumberValid = false;
};

// This function returns the index of this node in the ordering of its owner
// circle. Here -1 means that the vertex is not yet placed on its owner
//circle.
AVSDFNode.prototype.getIndex = function () {
    return this.circleIndex;
};

// This function returns the array of the neigbors of this node sorted in
// ascending order.
AVSDFNode.prototype.getNeighborsSortedByDegree = function () {
    let self = this;

    let neighborsList = [];
    self.getNeighborsList().addAllTo(neighborsList);
    let result = neighborsList.filter(node => node.getIndex() === -1);

    result.sort(function (a, b) {
        return a.getDegree() - b.getDegree();
    });

    return result;
};

// This function returns the degree of this node.
AVSDFNode.prototype.getDegree = function () {
    return this.getEdges().length;
};

// This function returns whether or not this node is currently placed on its
// owner circle.
AVSDFNode.prototype.isOrdered = function () {
    return this.getIndex() > -1;
};

// This function sets the angle of this node w.r.t. its owner circle. Here
// the angle value is in radian.
AVSDFNode.prototype.setAngle = function (angle) {
    this.angle = angle;
};

// This function returns the angle of this node w.r.t. its owner circle. Here
// the angle value is in radian.
AVSDFNode.prototype.getAngle = function () {
    return this.angle;
};

// This function returns the index difference of this node with the input
// node. Note that the index difference cannot be negative if both nodes are
// placed on the circle. Here -1 means at least one of the nodes are not yet
// placed on the circle.
AVSDFNode.prototype.getCircDistWithTheNode = function (refNode) {
    let self = this;
    let otherIndex = refNode.getIndex();

    if (otherIndex === -1 || self.getIndex() === -1) {
        return -1;
    }

    let diff = self.getIndex() - otherIndex;

    if (diff < 0) {
        diff += self.getCircle().getSize();
    }

    return diff;
};

// This function finds the number of edge crossings between the edges of
// this node and the edges of the input one.
AVSDFNode.prototype.getCrossingNumberWithNode = function (otherNode) {
    let self = this;
    let totalCrossing = 0;

    self.getEdges().forEach(function (edge) {
        otherNode.getEdges().forEach(function (otherEdge) {
            totalCrossing += edge.crossingWithEdge(otherEdge);
        });
    });

    return totalCrossing;
};

// This function returns the total number of edge crossings. If the previously
// calculated value is not valid due to an index change on the circle, then
// a recalculation is performed.
AVSDFNode.prototype.getTotalCrossingOfEdges = function () {
    let self = this;

    if (!self.isCrossingNumberValid) {
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
AVSDFNode.prototype.calculateTotalCrossing = function () {
    let self = this;
    let temp_crossing_count = 0;
    let temp_edge_list = [];
    temp_edge_list.push.apply(temp_edge_list, self.getCircle().getEdges());
    temp_edge_list = temp_edge_list.filter(ele => self.getEdges().indexOf(ele) < 0);

    self.getEdges().forEach(edge => temp_crossing_count += edge.calculateTotalCrossingWithList(temp_edge_list));

    self.totalCrossingOfEdges = temp_crossing_count;
};

module.exports = AVSDFNode;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdnNkZkJhc2Uvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2F2c2RmQmFzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hdnNkZkJhc2UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdnNkZkJhc2UvLi9ub2RlX21vZHVsZXMvbGF5b3V0LWJhc2UvbGF5b3V0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vYXZzZGZCYXNlLy4vc3JjL0FWU0RGQ29uc3RhbnRzLmpzIiwid2VicGFjazovL2F2c2RmQmFzZS8uL3NyYy9BVlNERkVkZ2UuanMiLCJ3ZWJwYWNrOi8vYXZzZGZCYXNlLy4vc3JjL0FWU0RGQ2lyY2xlLmpzIiwid2VicGFjazovL2F2c2RmQmFzZS8uL3NyYy9BVlNERkxheW91dC5qcyIsIndlYnBhY2s6Ly9hdnNkZkJhc2UvLi9zcmMvQVZTREZOb2RlLmpzIl0sIm5hbWVzIjpbImF2c2RmQmFzZSIsImxheW91dEJhc2UiLCJyZXF1aXJlIiwiQVZTREZDb25zdGFudHMiLCJBVlNERkVkZ2UiLCJBVlNERkNpcmNsZSIsIkFWU0RGTGF5b3V0IiwiQVZTREZOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkxheW91dENvbnN0YW50cyIsInByb3AiLCJERUZBVUxUX05PREVfU0VQQVJBVElPTiIsIkxFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwicHJvcGVydGllcyIsImdldE90aGVyRW5kIiwibm9kZSIsImNyb3NzZXNXaXRoRWRnZSIsIm90aGVyRWRnZSIsInNlbGYiLCJzb3VyY2VQb3MiLCJnZXRTb3VyY2UiLCJnZXRJbmRleCIsInRhcmdldFBvcyIsImdldFRhcmdldCIsIm90aGVyU291cmNlUG9zIiwib3RoZXJUYXJnZXRQb3MiLCJvdGhlclNvdXJjZURpc3QiLCJnZXRDaXJjRGlzdFdpdGhUaGVOb2RlIiwib3RoZXJUYXJnZXREaXN0IiwidGhpc1RhcmdldERpc3QiLCJNYXRoIiwibWF4IiwibWluIiwiY3Jvc3NpbmdXaXRoRWRnZSIsInJlc3VsdCIsImNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmdXaXRoTGlzdCIsImVkZ2VMaXN0IiwidG90YWxDcm9zc2luZyIsImZvckVhY2giLCJlZGdlIiwiTEdyYXBoIiwicGFyZW50IiwiZ3JhcGhNZ3IiLCJ2T2JqZWN0IiwiaW5PcmRlciIsInVuZGVmaW5lZCIsImN1cnJlbnRJbmRleCIsIm5vZGVTZXBhcmF0aW9uIiwic3RhY2siLCJwZXJpbWV0ZXIiLCJjZW50ZXJYIiwiY2VudGVyWSIsInJhZGl1cyIsInByb3BlcnR5IiwiaW5pdE9yZGVyaW5nIiwiZ2V0T3JkZXIiLCJnZXRDZW50ZXJYIiwiZ2V0Q2VudGVyWSIsImdldFJhZGl1cyIsImdldFNpemUiLCJnZXROb2RlcyIsImxlbmd0aCIsImdldFRvdGFsQ3Jvc3NpbmdPZkNpcmNsZSIsImNyb3NzaW5nTnVtYmVyIiwibm9kZUNyb3NzaW5nIiwiZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMiLCJoYXNGaW5pc2hlZE9yZGVyaW5nIiwiZ2V0Tm9kZVNlcGFyYXRpb24iLCJzZXROb2RlU2VwYXJhdGlvbiIsImNvcnJlY3RBbmdsZXMiLCJwdXRJbk9yZGVyIiwibm9kZXMiLCJmb3VuZCIsImkiLCJpZCIsInNldEluZGV4Iiwic2V0QW5nbGUiLCJnZXRBbmdsZSIsIlBJIiwiZ2V0RGlhZ29uYWwiLCJmaW5kTm9kZVRvUGxhY2UiLCJzRGVncmVlTm9kZSIsImZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUiLCJmb3VuZFVub3JkZXJOb2RlIiwicG9wIiwiaXNPcmRlcmVkIiwibmVpZ2hib3JzIiwiZ2V0TmVpZ2hib3JzU29ydGVkQnlEZWdyZWUiLCJuZWlnaGJvciIsInB1c2giLCJjYWxjdWxhdGVSYWRpdXMiLCJ0b3RhbERpYWdvbmFsIiwic3FydCIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwiZ2V0UGFyZW50Iiwic2V0V2lkdGgiLCJzZXRIZWlnaHQiLCJzZXRDZW50ZXIiLCJjYWxjdWxhdGVFZGdlQ3Jvc3NpbmdzT2ZOb2RlcyIsImNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmciLCJsb2FkT2xkSW5kaWNlc09mTm9kZXMiLCJyZU9yZGVyVmVydGljZXMiLCJtaW5EZWdyZWUiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiZ2V0RGVncmVlIiwiTGF5b3V0IiwibmV3R3JhcGgiLCJhdnNkZkNpcmNsZSIsImdyYXBoTWFuYWdlciIsIm5ld05vZGUiLCJ2Tm9kZSIsIm5ld0VkZ2UiLCJnZXRQb3NpdGlvbnNEYXRhIiwiYWxsTm9kZXMiLCJnZXRBbGxOb2RlcyIsInBEYXRhIiwicmVjdCIsIngiLCJ5IiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImxheW91dCIsImdldEdyYXBocyIsImNsdXN0ZXJHcmFwaCIsInVwZGF0ZU5vZGVBbmdsZXMiLCJnZXRSb290IiwidXBkYXRlTm9kZUNvb3JkaW5hdGVzIiwiY29zIiwic2luIiwiaW5pdFBvc3RQcm9jZXNzIiwibGlzdCIsInNvcnQiLCJhIiwiYiIsIm9uZVN0ZXBQb3N0UHJvY2VzcyIsImN1cnJlbnRDcm9zc2luZ051bWJlciIsIm5ld0Nyb3NzaW5nTnVtYmVyIiwibmVpZ2hib3VycyIsImdldE5laWdoYm9yc0xpc3QiLCJhZGRBbGxUbyIsImoiLCJuZWlnaGJvdXIiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwiaW5kZXgiLCJ0ZW1wIiwiTE5vZGUiLCJRdWlja3NvcnQiLCJnbSIsImxvYyIsInNpemUiLCJhbmdsZSIsImNpcmNsZUluZGV4IiwidG90YWxDcm9zc2luZ09mRWRnZXMiLCJpc0Nyb3NzaW5nTnVtYmVyVmFsaWQiLCJnZXRDaXJjbGUiLCJnZXRPd25lciIsIm5laWdoYm9yc0xpc3QiLCJmaWx0ZXIiLCJnZXRFZGdlcyIsInJlZk5vZGUiLCJvdGhlckluZGV4IiwiZGlmZiIsImdldENyb3NzaW5nTnVtYmVyV2l0aE5vZGUiLCJvdGhlck5vZGUiLCJ0ZW1wX2Nyb3NzaW5nX2Nv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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQiwwQkFBMEI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQzs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7O0FBRTlCO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSzs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxR0FBcUc7QUFDckc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBLDRCQUE0QixnQ0FBZ0M7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGFBQWE7O0FBRXBCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0EsQ0FBQyxFOzs7Ozs7QUNwMEhELElBQUlVLGtCQUFrQlIsbUJBQU9BLENBQUMsQ0FBUixFQUF1QlEsZUFBN0M7O0FBRUEsU0FBU1AsY0FBVCxHQUF5QixDQUFFOztBQUUzQjtBQUNBLEtBQUksSUFBSVEsSUFBUixJQUFnQkQsZUFBaEIsRUFBZ0M7QUFDNUJQLG1CQUFlUSxJQUFmLElBQXVCRCxnQkFBZ0JDLElBQWhCLENBQXZCO0FBQ0g7O0FBRURSLGVBQWVTLHVCQUFmLEdBQXlDLEVBQXpDOztBQUVBSixPQUFPQyxPQUFQLEdBQWlCTixjQUFqQixDOzs7Ozs7QUNYQTs7Ozs7Ozs7QUFRQSxJQUFJVSxRQUFRWCxtQkFBT0EsQ0FBQyxDQUFSLEVBQXVCVyxLQUFuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU1QsU0FBVCxDQUFtQlUsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxLQUFuQyxFQUNBO0FBQ0lILFVBQU1JLElBQU4sQ0FBVyxJQUFYLEVBQWlCSCxNQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDO0FBQ0g7O0FBRURaLFVBQVVjLFNBQVYsR0FBc0JDLE9BQU9DLE1BQVAsQ0FBY1AsTUFBTUssU0FBcEIsQ0FBdEI7O0FBRUEsS0FBSyxJQUFJRyxVQUFULElBQXVCUixLQUF2QixFQUNBO0FBQ0lULGNBQVVpQixVQUFWLElBQXdCUixNQUFNUSxVQUFOLENBQXhCO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0FqQixVQUFVYyxTQUFWLENBQW9CSSxXQUFwQixHQUFrQyxVQUFTQyxJQUFULEVBQ2xDO0FBQ0ksV0FBT1YsTUFBTUssU0FBTixDQUFnQkksV0FBaEIsQ0FBNEJDLElBQTVCLENBQVA7QUFDSCxDQUhEOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQW5CLFVBQVVjLFNBQVYsQ0FBb0JNLGVBQXBCLEdBQXNDLFVBQVNDLFNBQVQsRUFDdEM7QUFDSSxRQUFJQyxPQUFPLElBQVg7QUFDQSxRQUFJQyxZQUFZRCxLQUFLRSxTQUFMLEdBQWlCQyxRQUFqQixFQUFoQjtBQUNBLFFBQUlDLFlBQVlKLEtBQUtLLFNBQUwsR0FBaUJGLFFBQWpCLEVBQWhCO0FBQ0EsUUFBSUcsaUJBQWlCUCxVQUFVRyxTQUFWLEdBQXNCQyxRQUF0QixFQUFyQjtBQUNBLFFBQUlJLGlCQUFpQlIsVUFBVU0sU0FBVixHQUFzQkYsUUFBdEIsRUFBckI7O0FBRUE7QUFDQSxRQUFHRixjQUFjLENBQUMsQ0FBZixJQUFvQkcsY0FBYyxDQUFDLENBQW5DLElBQXdDRSxtQkFBbUIsQ0FBQyxDQUE1RCxJQUFpRUMsbUJBQW1CLENBQUMsQ0FBeEYsRUFDQTtBQUNJLGVBQU8sS0FBUDtBQUNIOztBQUVELFFBQUlDLGtCQUFrQlQsVUFBVUcsU0FBVixHQUFzQk8sc0JBQXRCLENBQTZDVCxLQUFLRSxTQUFMLEVBQTdDLENBQXRCO0FBQ0EsUUFBSVEsa0JBQWtCWCxVQUFVTSxTQUFWLEdBQXNCSSxzQkFBdEIsQ0FBNkNULEtBQUtFLFNBQUwsRUFBN0MsQ0FBdEI7QUFDQSxRQUFJUyxpQkFBaUJYLEtBQUtLLFNBQUwsR0FBaUJJLHNCQUFqQixDQUF3Q1QsS0FBS0UsU0FBTCxFQUF4QyxDQUFyQjs7QUFFQSxRQUFJUyxpQkFBaUJDLEtBQUtDLEdBQUwsQ0FBU0wsZUFBVCxFQUEwQkUsZUFBMUIsQ0FBakIsSUFDSUMsaUJBQWlCQyxLQUFLRSxHQUFMLENBQVNOLGVBQVQsRUFBMEJFLGVBQTFCLENBRHJCLElBRVFBLG9CQUFvQixDQUY1QixJQUVpQ0Ysb0JBQW9CLENBRnpELEVBR0E7QUFDSSxlQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPLEtBQVA7QUFDSCxDQTFCRDs7QUE0QkE7QUFDQTtBQUNBOUIsVUFBVWMsU0FBVixDQUFvQnVCLGdCQUFwQixHQUF1QyxVQUFTaEIsU0FBVCxFQUN2QztBQUNJLFFBQUlDLE9BQU8sSUFBWDtBQUNBLFFBQUlnQixTQUFTaEIsS0FBS0YsZUFBTCxDQUFxQkMsU0FBckIsQ0FBYjs7QUFFQSxXQUFRaUIsU0FBUyxDQUFULEdBQWEsQ0FBckI7QUFDSCxDQU5EOztBQVFBO0FBQ0E7QUFDQXRDLFVBQVVjLFNBQVYsQ0FBb0J5Qiw4QkFBcEIsR0FBcUQsVUFBU0MsUUFBVCxFQUNyRDtBQUNJLFFBQUlsQixPQUFPLElBQVg7QUFDQSxRQUFJbUIsZ0JBQWdCLENBQXBCOztBQUVBRCxhQUFTRSxPQUFULENBQ0tDLElBQUQsSUFBVUYsaUJBQWlCbkIsS0FBS2UsZ0JBQUwsQ0FBc0JNLElBQXRCLENBRC9COztBQUlBLFdBQU9GLGFBQVA7QUFDSCxDQVZEOztBQVlBckMsT0FBT0MsT0FBUCxHQUFpQkwsU0FBakIsQzs7Ozs7O0FDL0ZBOzs7Ozs7OztBQVFBLElBQUk0QyxTQUFTOUMsbUJBQU9BLENBQUMsQ0FBUixFQUF1QjhDLE1BQXBDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTM0MsV0FBVCxDQUFxQjRDLE1BQXJCLEVBQTZCQyxRQUE3QixFQUF1Q0MsT0FBdkMsRUFDQTtBQUNJSCxXQUFPL0IsSUFBUCxDQUFZLElBQVosRUFBa0JnQyxNQUFsQixFQUEwQkMsUUFBMUIsRUFBb0NDLE9BQXBDO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQyxTQUFmO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JGLFNBQXRCO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0g7O0FBRUR2RCxZQUFZYSxTQUFaLEdBQXdCQyxPQUFPQyxNQUFQLENBQWM0QixPQUFPOUIsU0FBckIsQ0FBeEI7O0FBRUEsS0FBSSxJQUFJMkMsUUFBUixJQUFvQmIsTUFBcEIsRUFDQTtBQUNJM0MsZ0JBQVl3RCxRQUFaLElBQXdCYixPQUFPYSxRQUFQLENBQXhCO0FBQ0g7O0FBRUR4RCxZQUFZYSxTQUFaLENBQXNCNEMsWUFBdEIsR0FBcUMsWUFDckM7QUFDSSxTQUFLVixPQUFMLEdBQWUsRUFBZjtBQUNILENBSEQ7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EvQyxZQUFZYSxTQUFaLENBQXNCNkMsUUFBdEIsR0FBaUMsWUFDakM7QUFDSSxXQUFPLEtBQUtYLE9BQVo7QUFDSCxDQUhEOztBQUtBO0FBQ0EvQyxZQUFZYSxTQUFaLENBQXNCOEMsVUFBdEIsR0FBbUMsWUFDbkM7QUFDSSxXQUFPLEtBQUtOLE9BQVo7QUFDSCxDQUhEOztBQUtBO0FBQ0FyRCxZQUFZYSxTQUFaLENBQXNCK0MsVUFBdEIsR0FBbUMsWUFDbkM7QUFDSSxXQUFPLEtBQUtOLE9BQVo7QUFDSCxDQUhEOztBQUtBO0FBQ0F0RCxZQUFZYSxTQUFaLENBQXNCZ0QsU0FBdEIsR0FBa0MsWUFDbEM7QUFDSSxXQUFPLEtBQUtOLE1BQVo7QUFDSCxDQUhEOztBQUtBO0FBQ0F2RCxZQUFZYSxTQUFaLENBQXNCaUQsT0FBdEIsR0FBZ0MsWUFDaEM7QUFDSSxXQUFPLEtBQUtDLFFBQUwsR0FBZ0JDLE1BQXZCO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBO0FBQ0FoRSxZQUFZYSxTQUFaLENBQXNCb0Qsd0JBQXRCLEdBQWlELFlBQ2pEO0FBQ0ksUUFBSTVDLE9BQU8sSUFBWDtBQUNBLFFBQUk2QyxpQkFBaUIsQ0FBckI7O0FBRUEsU0FBSSxJQUFJaEQsSUFBUixJQUFnQkcsS0FBSzBCLE9BQXJCLEVBQ0E7QUFDSSxZQUFJb0IsZUFBZWpELEtBQUtrRCx1QkFBTCxFQUFuQjtBQUNBLFlBQUdELGlCQUFpQixDQUFDLENBQXJCLEVBQ0E7QUFDSSxtQkFBTyxDQUFDLENBQVI7QUFDSDtBQUNERCwwQkFBa0JDLFlBQWxCO0FBQ0g7O0FBRUQsV0FBT0QsaUJBQWlCLENBQXhCO0FBQ0gsQ0FoQkQ7O0FBa0JBO0FBQ0E7QUFDQWxFLFlBQVlhLFNBQVosQ0FBc0J3RCxtQkFBdEIsR0FBNEMsWUFDNUM7QUFDSSxXQUFPLEtBQUtwQixZQUFMLEtBQXNCLEtBQUtjLFFBQUwsR0FBZ0JDLE1BQTdDO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBaEUsWUFBWWEsU0FBWixDQUFzQnlELGlCQUF0QixHQUEwQyxZQUMxQztBQUNJLFdBQU8sS0FBS3BCLGNBQVo7QUFDSCxDQUhEOztBQUtBO0FBQ0FsRCxZQUFZYSxTQUFaLENBQXNCMEQsaUJBQXRCLEdBQTBDLFVBQVNyQixjQUFULEVBQzFDO0FBQ0ksU0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSCxDQUhEOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0FsRCxZQUFZYSxTQUFaLENBQXNCMkQsYUFBdEIsR0FBc0MsWUFDdEM7QUFDSSxRQUFJbkQsT0FBTyxJQUFYO0FBQ0FBLFNBQUs0QixZQUFMLEdBQW9CLENBQXBCOztBQUVBNUIsU0FBSzBCLE9BQUwsQ0FBYU4sT0FBYixDQUNLdkIsSUFBRCxJQUFXRyxLQUFLb0QsVUFBTCxDQUFnQnZELElBQWhCLENBRGY7QUFHSCxDQVJEOztBQVdBO0FBQ0E7QUFDQWxCLFlBQVlhLFNBQVosQ0FBc0I0RCxVQUF0QixHQUFtQyxVQUFTdkQsSUFBVCxFQUNuQztBQUNJLFFBQUlHLE9BQU8sSUFBWDs7QUFFQSxRQUFJcUQsUUFBUXJELEtBQUswQyxRQUFMLEVBQVo7O0FBRUE7QUFDQTtBQUNBLFFBQUlZLFFBQVEsS0FBWjtBQUNBLFNBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUlGLE1BQU1WLE1BQXpCLEVBQWlDWSxHQUFqQyxFQUFzQztBQUNsQyxZQUFJRixNQUFNRSxDQUFOLEVBQVNDLEVBQVQsSUFBZTNELEtBQUsyRCxFQUF4QixFQUE0QjtBQUN4QkYsb0JBQVEsSUFBUjtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxRQUFHLENBQUNBLEtBQUosRUFDQTtBQUNJLGNBQU0scUNBQU47QUFDSDs7QUFFRHRELFNBQUswQixPQUFMLENBQWExQixLQUFLNEIsWUFBbEIsSUFBa0MvQixJQUFsQztBQUNBQSxTQUFLNEQsUUFBTCxDQUFjekQsS0FBSzRCLFlBQW5COztBQUVBLFFBQUc1QixLQUFLNEIsWUFBTCxLQUFzQixDQUF6QixFQUNBO0FBQ0kvQixhQUFLNkQsUUFBTCxDQUFjLEdBQWQ7QUFDSCxLQUhELE1BS0E7QUFDSTdELGFBQUs2RCxRQUFMLENBQWMxRCxLQUFLMEIsT0FBTCxDQUFhMUIsS0FBSzRCLFlBQUwsR0FBb0IsQ0FBakMsRUFBb0MrQixRQUFwQyxLQUFpRCxJQUFJL0MsS0FBS2dELEVBQVQsSUFDMUQvRCxLQUFLZ0UsV0FBTCxLQUFxQixDQUFyQixHQUF5QjdELEtBQUs2QixjQUE5QixHQUNHN0IsS0FBSzBCLE9BQUwsQ0FBYTFCLEtBQUs0QixZQUFMLEdBQW9CLENBQWpDLEVBQW9DaUMsV0FBcEMsS0FBb0QsQ0FGRyxJQUd6RDdELEtBQUsrQixTQUhYO0FBSUg7O0FBRUQvQixTQUFLNEIsWUFBTDtBQUNILENBckNEOztBQXVDQTtBQUNBO0FBQ0FqRCxZQUFZYSxTQUFaLENBQXNCc0UsZUFBdEIsR0FBd0MsWUFDeEM7QUFDSSxRQUFJOUQsT0FBTyxJQUFYO0FBQ0EsUUFBSStELGNBQWNwQyxTQUFsQjs7QUFFQTtBQUNBLFFBQUczQixLQUFLOEIsS0FBTCxDQUFXYSxNQUFYLEtBQXNCLENBQXpCLEVBQ0E7QUFDSW9CLHNCQUFjL0QsS0FBS2dFLCtCQUFMLEVBQWQ7QUFDSDtBQUNEO0FBSkEsU0FNQTtBQUNJLGdCQUFJQyxtQkFBbUIsS0FBdkI7O0FBRUEsbUJBQU8sQ0FBQ0EsZ0JBQUQsSUFBcUIsRUFBRWpFLEtBQUs4QixLQUFMLENBQVdhLE1BQVgsS0FBc0IsQ0FBeEIsQ0FBNUIsRUFDQTtBQUNJb0IsOEJBQWMvRCxLQUFLOEIsS0FBTCxDQUFXb0MsR0FBWCxFQUFkO0FBQ0FELG1DQUFtQixDQUFDRixZQUFZSSxTQUFaLEVBQXBCO0FBQ0g7O0FBRUQsZ0JBQUksQ0FBQ0YsZ0JBQUwsRUFDQTtBQUNJRiw4QkFBY3BDLFNBQWQ7QUFDSDtBQUNKOztBQUVEO0FBQ0E7QUFDQSxRQUFHb0MsZ0JBQWdCcEMsU0FBbkIsRUFDQTtBQUNJb0Msc0JBQWMvRCxLQUFLZ0UsK0JBQUwsRUFBZDtBQUNIOztBQUVEO0FBQ0EsUUFBSUQsZ0JBQWdCcEMsU0FBcEIsRUFDQTtBQUNJLFlBQUl5QyxZQUFZTCxZQUFZTSwwQkFBWixFQUFoQjs7QUFFQSxhQUFJLElBQUlkLElBQUlhLFVBQVV6QixNQUFWLEdBQW1CLENBQS9CLEVBQWtDWSxLQUFLLENBQXZDLEVBQTJDQSxHQUEzQyxFQUNBO0FBQ0ksZ0JBQUllLFdBQVdGLFVBQVViLENBQVYsQ0FBZjs7QUFFQSxnQkFBRyxDQUFDZSxTQUFTSCxTQUFULEVBQUosRUFBMEI7QUFDMUI7QUFDSW5FLHlCQUFLOEIsS0FBTCxDQUFXeUMsSUFBWCxDQUFnQkQsUUFBaEI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsV0FBT1AsV0FBUDtBQUNILENBbkREOztBQXFEQTtBQUNBO0FBQ0FwRixZQUFZYSxTQUFaLENBQXNCZ0YsZUFBdEIsR0FBd0MsWUFDeEM7QUFDSSxRQUFJeEUsT0FBTyxJQUFYO0FBQ0EsUUFBSXlFLGdCQUFnQixDQUFwQjs7QUFFQXpFLFNBQUswQyxRQUFMLEdBQWdCdEIsT0FBaEIsQ0FDS3ZCLElBQUQsSUFBVTRFLGlCQUFpQjdELEtBQUs4RCxJQUFMLENBQVU3RSxLQUFLOEUsUUFBTCxLQUFrQjlFLEtBQUs4RSxRQUFMLEVBQWxCLEdBQW9DOUUsS0FBSytFLFNBQUwsS0FBbUIvRSxLQUFLK0UsU0FBTCxFQUFqRSxDQUQvQjs7QUFJQTVFLFNBQUsrQixTQUFMLEdBQWlCMEMsZ0JBQWdCekUsS0FBSzBDLFFBQUwsR0FBZ0JDLE1BQWhCLEdBQXlCM0MsS0FBSzZCLGNBQS9EO0FBQ0EsUUFBSUssU0FBU2xDLEtBQUsrQixTQUFMLElBQW1CLElBQUluQixLQUFLZ0QsRUFBNUIsQ0FBYjs7QUFFQTs7QUFFQTVELFNBQUs2RSxTQUFMLEdBQWlCQyxRQUFqQixDQUEyQixJQUFJNUMsTUFBL0I7QUFDQWxDLFNBQUs2RSxTQUFMLEdBQWlCRSxTQUFqQixDQUE0QixJQUFJN0MsTUFBaEM7QUFDQWxDLFNBQUs2RSxTQUFMLEdBQWlCRyxTQUFqQixDQUE0QmhGLEtBQUs2RSxTQUFMLEdBQWlCRixRQUFqQixFQUE1QixFQUF5RDNFLEtBQUs2RSxTQUFMLEdBQWlCRCxTQUFqQixFQUF6RDs7QUFFQTVFLFNBQUtnQyxPQUFMLEdBQWVoQyxLQUFLNkUsU0FBTCxHQUFpQnZDLFVBQWpCLEVBQWY7QUFDQXRDLFNBQUtpQyxPQUFMLEdBQWVqQyxLQUFLNkUsU0FBTCxHQUFpQnRDLFVBQWpCLEVBQWY7QUFDQXZDLFNBQUtrQyxNQUFMLEdBQWNsQyxLQUFLNkUsU0FBTCxHQUFpQkQsU0FBakIsS0FBK0IsQ0FBN0M7QUFDSCxDQXJCRDs7QUF1QkE7QUFDQTtBQUNBakcsWUFBWWEsU0FBWixDQUFzQnlGLDZCQUF0QixHQUFzRCxZQUN0RDtBQUNJLFNBQUt2QyxRQUFMLEdBQWdCdEIsT0FBaEIsQ0FBMEJ2QixJQUFELElBQVVBLEtBQUtxRixzQkFBTCxFQUFuQztBQUNILENBSEQ7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBdkcsWUFBWWEsU0FBWixDQUFzQjJGLHFCQUF0QixHQUE4QyxZQUM5QztBQUNJO0FBQ0EsUUFBSW5GLE9BQU8sSUFBWDtBQUNBLFNBQUssSUFBSXVELElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLN0IsT0FBTCxDQUFhaUIsTUFBakMsRUFBeUNZLEdBQXpDLEVBQTZDO0FBQ3pDdkQsYUFBSzBCLE9BQUwsQ0FBYTZCLENBQWIsRUFBZ0JFLFFBQWhCLENBQXlCRixDQUF6QjtBQUNIO0FBQ0osQ0FQRDs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E1RSxZQUFZYSxTQUFaLENBQXNCNEYsZUFBdEIsR0FBd0MsWUFDeEM7QUFDSSxRQUFJcEYsT0FBTyxJQUFYO0FBQ0EsU0FBSzBDLFFBQUwsR0FBZ0J0QixPQUFoQixDQUEwQnZCLElBQUQsSUFBVUcsS0FBSzBCLE9BQUwsQ0FBYTdCLEtBQUtNLFFBQUwsRUFBYixJQUFnQ04sSUFBbkU7QUFDSCxDQUpEOztBQU9BO0FBQ0E7QUFDQWxCLFlBQVlhLFNBQVosQ0FBc0J3RSwrQkFBdEIsR0FBd0QsWUFDeEQ7QUFDSSxRQUFJcUIsWUFBWUMsT0FBT0MsZ0JBQXZCO0FBQ0EsUUFBSXhCLFdBQUo7O0FBRUEsU0FBS3JCLFFBQUwsR0FBZ0J0QixPQUFoQixDQUNJLFVBQVN2QixJQUFULEVBQWM7QUFDVixZQUFHQSxLQUFLMkYsU0FBTCxLQUFtQkgsU0FBbkIsSUFBZ0MsQ0FBQ3hGLEtBQUtzRSxTQUFMLEVBQXBDLEVBQ0E7QUFDSWtCLHdCQUFZeEYsS0FBSzJGLFNBQUwsRUFBWjtBQUNBekIsMEJBQWNsRSxJQUFkO0FBQ0g7QUFDSixLQVBMOztBQVVBLFdBQU9rRSxXQUFQO0FBQ0gsQ0FoQkQ7O0FBbUJBakYsT0FBT0MsT0FBUCxHQUFpQkosV0FBakIsQzs7Ozs7O0FDalRBOzs7Ozs7OztBQVFBLElBQUk4RyxTQUFTakgsbUJBQU9BLENBQUMsQ0FBUixFQUF1QmlILE1BQXBDO0FBQ0EsSUFBSWhILGlCQUFpQkQsbUJBQU9BLENBQUMsQ0FBUixDQUFyQjtBQUNBLElBQUlHLGNBQWNILG1CQUFPQSxDQUFDLENBQVIsQ0FBbEI7QUFDQSxJQUFJSyxZQUFZTCxtQkFBT0EsQ0FBQyxDQUFSLENBQWhCO0FBQ0EsSUFBSUUsWUFBWUYsbUJBQU9BLENBQUMsQ0FBUixDQUFoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTSSxXQUFULEdBQ0E7QUFDSTZHLFdBQU9sRyxJQUFQLENBQVksSUFBWjtBQUNBLFNBQUtzQyxjQUFMLEdBQXNCcEQsZUFBZVMsdUJBQXJDO0FBQ0g7O0FBRUROLFlBQVlZLFNBQVosR0FBd0JDLE9BQU9DLE1BQVAsQ0FBYytGLE9BQU9qRyxTQUFyQixDQUF4Qjs7QUFFQSxLQUFLLElBQUkyQyxRQUFULElBQXFCc0QsTUFBckIsRUFDQTtBQUNJN0csZ0JBQVl1RCxRQUFaLElBQXdCc0QsT0FBT3RELFFBQVAsQ0FBeEI7QUFDSDs7QUFFRHZELFlBQVlZLFNBQVosQ0FBc0JrRyxRQUF0QixHQUFpQyxVQUFVakUsT0FBVixFQUNqQztBQUNJLFNBQUtrRSxXQUFMLEdBQW1CLElBQUloSCxXQUFKLENBQWdCLElBQWhCLEVBQXNCLEtBQUtpSCxZQUEzQixFQUF5Q25FLE9BQXpDLENBQW5COztBQUVBLFdBQU8sS0FBS2tFLFdBQVo7QUFDSCxDQUxEOztBQU9BL0csWUFBWVksU0FBWixDQUFzQnFHLE9BQXRCLEdBQWdDLFVBQVVDLEtBQVYsRUFDaEM7QUFDSSxXQUFPLElBQUlqSCxTQUFKLENBQWMsS0FBSytHLFlBQW5CLEVBQWlDRSxLQUFqQyxDQUFQO0FBQ0gsQ0FIRDs7QUFLQWxILFlBQVlZLFNBQVosQ0FBc0J1RyxPQUF0QixHQUFnQyxVQUFVekcsS0FBVixFQUNoQztBQUNJLFdBQU8sSUFBSVosU0FBSixDQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEJZLEtBQTFCLENBQVA7QUFDSCxDQUhEOztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBVixZQUFZWSxTQUFaLENBQXNCd0csZ0JBQXRCLEdBQXlDLFlBQ3pDO0FBQ0ksUUFBSUMsV0FBVyxLQUFLTCxZQUFMLENBQWtCTSxXQUFsQixFQUFmO0FBQ0EsUUFBSUMsUUFBUSxFQUFaOztBQUVBLFNBQUssSUFBSTVDLElBQUksQ0FBYixFQUFnQkEsSUFBSTBDLFNBQVN0RCxNQUE3QixFQUFxQ1ksR0FBckMsRUFDQTtBQUNJLFlBQUk2QyxPQUFPSCxTQUFTMUMsQ0FBVCxFQUFZNkMsSUFBdkI7QUFDQSxZQUFJNUMsS0FBS3lDLFNBQVMxQyxDQUFULEVBQVlDLEVBQXJCOztBQUVBMkMsY0FBTTNDLEVBQU4sSUFBWTtBQUNSQSxnQkFBSUEsRUFESTtBQUVSNkMsZUFBR0QsS0FBSzlELFVBQUwsRUFGSztBQUdSZ0UsZUFBR0YsS0FBSzdELFVBQUwsRUFISztBQUlSZ0UsZUFBR0gsS0FBS0ksS0FKQTtBQUtSQyxlQUFHTCxLQUFLTTtBQUxBLFNBQVo7QUFPSDs7QUFFRCxXQUFPUCxLQUFQO0FBQ0gsQ0FwQkQ7O0FBc0JBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BdkgsWUFBWVksU0FBWixDQUFzQm1ILE1BQXRCLEdBQStCLFlBQy9CO0FBQ0ksUUFBSTNHLE9BQU8sSUFBWDs7QUFFQTtBQUNBLFFBQUlBLEtBQUs0RixZQUFMLENBQWtCZ0IsU0FBbEIsR0FBOEJqRSxNQUE5QixHQUF1QyxDQUEzQyxFQUNBO0FBQ0ksZUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSWtFLGVBQWUsS0FBS2xCLFdBQXhCLENBVEosQ0FTeUM7O0FBRXJDa0IsaUJBQWEzRCxpQkFBYixDQUErQixLQUFLckIsY0FBcEM7QUFDQWdGLGlCQUFhckMsZUFBYjtBQUNBcUMsaUJBQWF6RSxZQUFiOztBQUVBLFdBQU8sQ0FBQ3lFLGFBQWE3RCxtQkFBYixFQUFSLEVBQ0E7QUFDSSxZQUFJbkQsT0FBT2dILGFBQWEvQyxlQUFiLEVBQVg7QUFDQStDLHFCQUFhekQsVUFBYixDQUF3QnZELElBQXhCO0FBQ0g7O0FBRUQsV0FBTyxJQUFQO0FBQ0gsQ0F2QkQ7O0FBeUJBO0FBQ0FqQixZQUFZWSxTQUFaLENBQXNCc0gsZ0JBQXRCLEdBQXlDLFlBQVc7QUFDaEQsU0FBS2xCLFlBQUwsQ0FBa0JtQixPQUFsQixHQUE0QjVELGFBQTVCLEdBRGdELENBQ0g7QUFDaEQsQ0FGRDs7QUFJQTtBQUNBdkUsWUFBWVksU0FBWixDQUFzQndILHFCQUF0QixHQUE4QyxZQUFXO0FBQ3JELFFBQUlILGVBQWUsS0FBS2pCLFlBQUwsQ0FBa0JtQixPQUFsQixFQUFuQjs7QUFFQUYsaUJBQWFuRSxRQUFiLEdBQXdCdEIsT0FBeEIsQ0FBZ0MsVUFBU3ZCLElBQVQsRUFBZTtBQUMzQ0EsYUFBS21GLFNBQUwsQ0FBZTZCLGFBQWF2RSxVQUFiLEtBQTRCdUUsYUFBYXJFLFNBQWIsS0FBMkI1QixLQUFLcUcsR0FBTCxDQUFTcEgsS0FBSzhELFFBQUwsRUFBVCxDQUF0RSxFQUFpR2tELGFBQWF0RSxVQUFiLEtBQzdGc0UsYUFBYXJFLFNBQWIsS0FBMkI1QixLQUFLc0csR0FBTCxDQUFTckgsS0FBSzhELFFBQUwsRUFBVCxDQUQvQjtBQUVILEtBSEQ7QUFJSCxDQVBEOztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQS9FLFlBQVlZLFNBQVosQ0FBc0IySCxlQUF0QixHQUF3QyxZQUN4QztBQUNJLFNBQUt4QixXQUFMLENBQWlCViw2QkFBakI7O0FBRUEsUUFBSW1DLE9BQU8sS0FBS3pCLFdBQUwsQ0FBaUJqRCxRQUFqQixFQUFYOztBQUVBMEUsU0FBS0MsSUFBTCxDQUFVLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQ25CLGVBQU9BLEVBQUV4RSx1QkFBRixLQUE4QnVFLEVBQUV2RSx1QkFBRixFQUFyQztBQUNILEtBRkQ7O0FBSUEsV0FBT3FFLElBQVA7QUFDSCxDQVhEOztBQWFBeEksWUFBWVksU0FBWixDQUFzQmdJLGtCQUF0QixHQUEyQyxVQUFVM0gsSUFBVixFQUMzQztBQUNJLFFBQUlHLE9BQU8sSUFBWDs7QUFFQSxRQUFJeUgsd0JBQXdCNUgsS0FBS2tELHVCQUFMLEVBQTVCO0FBQ0EsUUFBSTJFLGlCQUFKOztBQUVBLFFBQUlDLGFBQWEsRUFBakI7QUFDQTlILFNBQUsrSCxnQkFBTCxHQUF3QkMsUUFBeEIsQ0FBaUNGLFVBQWpDOztBQUVBLFNBQUssSUFBSUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxXQUFXaEYsTUFBL0IsRUFBdUNtRixHQUF2QyxFQUNBO0FBQ0ksWUFBSUMsWUFBWUosV0FBV0csQ0FBWCxDQUFoQjs7QUFFQSxZQUFJRSxXQUFXbkksS0FBS00sUUFBTCxFQUFmO0FBQ0EsWUFBSThILFdBQVcsQ0FBQ0YsVUFBVTVILFFBQVYsS0FBdUIsQ0FBeEIsSUFBNkJILEtBQUsyRixXQUFMLENBQWlCbEQsT0FBakIsRUFBNUM7O0FBRUEsWUFBSXVGLGFBQWFDLFFBQWpCLEVBQ0E7QUFDSXBJLGlCQUFLNEQsUUFBTCxDQUFjd0UsUUFBZDs7QUFFQSxnQkFBSUQsV0FBV25JLEtBQUtNLFFBQUwsRUFBZixFQUNBO0FBQ0k2SCw0QkFBWWhJLEtBQUsyRixXQUFMLENBQWlCbEQsT0FBakIsRUFBWjtBQUNIOztBQUVELGdCQUFJeUYsUUFBUXJJLEtBQUtNLFFBQUwsRUFBWjs7QUFFQSxtQkFBTytILFFBQVFGLFFBQWYsRUFDQTtBQUNJLG9CQUFJRyxPQUFPbkksS0FBSzJGLFdBQUwsQ0FBaUJ0RCxRQUFqQixHQUE0QjZGLFFBQVFsSSxLQUFLMkYsV0FBTCxDQUFpQmxELE9BQWpCLEVBQXBDLENBQVg7QUFDQTBGLHFCQUFLMUUsUUFBTCxDQUFjLENBQUMwRSxLQUFLaEksUUFBTCxLQUFrQixDQUFuQixJQUF3QkgsS0FBSzJGLFdBQUwsQ0FBaUJsRCxPQUFqQixFQUF0QztBQUNBeUYseUJBQVMsQ0FBVDtBQUNIOztBQUVEckksaUJBQUtxRixzQkFBTDtBQUNBd0MsZ0NBQW9CN0gsS0FBS2tELHVCQUFMLEVBQXBCOztBQUVBLGdCQUFJMkUscUJBQXFCRCxxQkFBekIsRUFDQTtBQUNJekgscUJBQUsyRixXQUFMLENBQWlCUixxQkFBakI7QUFDSCxhQUhELE1BS0E7QUFDSW5GLHFCQUFLMkYsV0FBTCxDQUFpQlAsZUFBakI7QUFDQXFDLHdDQUF3QkMsaUJBQXhCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osQ0FqREQ7O0FBbURBNUksT0FBT0MsT0FBUCxHQUFpQkgsV0FBakIsQzs7Ozs7O0FDeE1BOzs7Ozs7OztBQVFBLElBQUl3SixRQUFRNUosbUJBQU9BLENBQUMsQ0FBUixFQUF1QjRKLEtBQW5DO0FBQ0EsSUFBSUMsWUFBWTdKLG1CQUFPQSxDQUFDLENBQVIsRUFBdUI2SixTQUF2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU3hKLFNBQVQsQ0FBbUJ5SixFQUFuQixFQUF1QnhDLEtBQXZCLEVBQThCeUMsR0FBOUIsRUFBbUNDLElBQW5DLEVBQ0E7QUFDSTtBQUNBLFFBQUdELFFBQVE1RyxTQUFSLElBQXFCNkcsU0FBUzdHLFNBQWpDLEVBQ0E7QUFDSXlHLGNBQU03SSxJQUFOLENBQVcsSUFBWCxFQUFpQitJLEVBQWpCLEVBQXFCeEMsS0FBckIsRUFBNEJ5QyxHQUE1QixFQUFpQ0MsSUFBakM7QUFDSDtBQUNEO0FBSkEsU0FNQTtBQUNJSixrQkFBTTdJLElBQU4sQ0FBVyxJQUFYLEVBQWlCK0ksRUFBakIsRUFBcUJ4QyxLQUFyQjtBQUNIOztBQUVKO0FBQ0csU0FBSzJDLEtBQUwsR0FBYSxDQUFiOztBQUVBO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixDQUFDLENBQXBCOztBQUVBO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsQ0FBQyxDQUE3Qjs7QUFFQTtBQUNBO0FBQ0EsU0FBS0MscUJBQUwsR0FBNkIsS0FBN0I7QUFFSDs7QUFFRC9KLFVBQVVXLFNBQVYsR0FBc0JDLE9BQU9DLE1BQVAsQ0FBYzBJLE1BQU01SSxTQUFwQixDQUF0QjtBQUNBLEtBQUssSUFBSUcsVUFBVCxJQUF1QnlJLEtBQXZCLEVBQ0E7QUFDSXZKLGNBQVVjLFVBQVYsSUFBd0J5SSxNQUFNekksVUFBTixDQUF4QjtBQUNIOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBZCxVQUFVVyxTQUFWLENBQW9CcUosU0FBcEIsR0FBZ0MsWUFDaEM7QUFDSSxXQUFPLEtBQUtDLFFBQUwsRUFBUDtBQUNILENBSEQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0FqSyxVQUFVVyxTQUFWLENBQW9CaUUsUUFBcEIsR0FBK0IsVUFBU3lFLEtBQVQsRUFDL0I7QUFDSSxTQUFLUSxXQUFMLEdBQW1CUixLQUFuQjtBQUNBLFNBQUtVLHFCQUFMLEdBQTZCLEtBQTdCO0FBQ0gsQ0FKRDs7QUFNQTtBQUNBO0FBQ0E7QUFDQS9KLFVBQVVXLFNBQVYsQ0FBb0JXLFFBQXBCLEdBQStCLFlBQy9CO0FBQ0ksV0FBTyxLQUFLdUksV0FBWjtBQUNILENBSEQ7O0FBS0E7QUFDQTtBQUNBN0osVUFBVVcsU0FBVixDQUFvQjZFLDBCQUFwQixHQUFpRCxZQUNqRDtBQUNJLFFBQUtyRSxPQUFPLElBQVo7O0FBRUEsUUFBSStJLGdCQUFnQixFQUFwQjtBQUNBL0ksU0FBSzRILGdCQUFMLEdBQXdCQyxRQUF4QixDQUFpQ2tCLGFBQWpDO0FBQ0EsUUFBSS9ILFNBQVMrSCxjQUFjQyxNQUFkLENBQXNCbkosUUFBVUEsS0FBS00sUUFBTCxPQUFvQixDQUFDLENBQXJELENBQWI7O0FBRUFhLFdBQU9xRyxJQUFQLENBQVksVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFDckIsZUFBT0QsRUFBRTlCLFNBQUYsS0FBZ0IrQixFQUFFL0IsU0FBRixFQUF2QjtBQUNILEtBRkQ7O0FBSUEsV0FBT3hFLE1BQVA7QUFDSCxDQWJEOztBQWVBO0FBQ0FuQyxVQUFVVyxTQUFWLENBQW9CZ0csU0FBcEIsR0FBZ0MsWUFDaEM7QUFDSSxXQUFPLEtBQUt5RCxRQUFMLEdBQWdCdEcsTUFBdkI7QUFDSCxDQUhEOztBQUtBO0FBQ0E7QUFDQTlELFVBQVVXLFNBQVYsQ0FBb0IyRSxTQUFwQixHQUFpQyxZQUNqQztBQUNJLFdBQVEsS0FBS2hFLFFBQUwsS0FBa0IsQ0FBQyxDQUEzQjtBQUNILENBSEQ7O0FBS0E7QUFDQTtBQUNBdEIsVUFBVVcsU0FBVixDQUFvQmtFLFFBQXBCLEdBQStCLFVBQVMrRSxLQUFULEVBQy9CO0FBQ0ksU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBO0FBQ0E1SixVQUFVVyxTQUFWLENBQW9CbUUsUUFBcEIsR0FBK0IsWUFDL0I7QUFDSSxXQUFPLEtBQUs4RSxLQUFaO0FBQ0gsQ0FIRDs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBNUosVUFBVVcsU0FBVixDQUFvQmlCLHNCQUFwQixHQUE4QyxVQUFTeUksT0FBVCxFQUM5QztBQUNJLFFBQUlsSixPQUFPLElBQVg7QUFDQSxRQUFJbUosYUFBYUQsUUFBUS9JLFFBQVIsRUFBakI7O0FBRUEsUUFBR2dKLGVBQWUsQ0FBQyxDQUFoQixJQUFxQm5KLEtBQUtHLFFBQUwsT0FBb0IsQ0FBQyxDQUE3QyxFQUNBO0FBQ0ksZUFBTyxDQUFDLENBQVI7QUFDSDs7QUFFRCxRQUFJaUosT0FBT3BKLEtBQUtHLFFBQUwsS0FBa0JnSixVQUE3Qjs7QUFFQSxRQUFHQyxPQUFPLENBQVYsRUFDQTtBQUNJQSxnQkFBUXBKLEtBQUs2SSxTQUFMLEdBQWlCcEcsT0FBakIsRUFBUjtBQUNIOztBQUVELFdBQU8yRyxJQUFQO0FBQ0gsQ0FsQkQ7O0FBb0JBO0FBQ0E7QUFDQXZLLFVBQVVXLFNBQVYsQ0FBb0I2Six5QkFBcEIsR0FBaUQsVUFBU0MsU0FBVCxFQUNqRDtBQUNJLFFBQUl0SixPQUFPLElBQVg7QUFDQSxRQUFJbUIsZ0JBQWdCLENBQXBCOztBQUVBbkIsU0FBS2lKLFFBQUwsR0FBZ0I3SCxPQUFoQixDQUNJLFVBQVNDLElBQVQsRUFDQTtBQUNJaUksa0JBQVVMLFFBQVYsR0FBcUI3SCxPQUFyQixDQUNJLFVBQVNyQixTQUFULEVBQ0E7QUFDSW9CLDZCQUFpQkUsS0FBS04sZ0JBQUwsQ0FBc0JoQixTQUF0QixDQUFqQjtBQUNILFNBSkw7QUFNSCxLQVRMOztBQVlBLFdBQU9vQixhQUFQO0FBQ0gsQ0FsQkQ7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBdEMsVUFBVVcsU0FBVixDQUFvQnVELHVCQUFwQixHQUE4QyxZQUM5QztBQUNJLFFBQUkvQyxPQUFPLElBQVg7O0FBRUEsUUFBRyxDQUFDQSxLQUFLNEkscUJBQVQsRUFDQTtBQUNJNUksYUFBS2tGLHNCQUFMO0FBQ0FsRixhQUFLNEkscUJBQUwsR0FBNkIsSUFBN0I7QUFFSDs7QUFFRCxXQUFPNUksS0FBSzJJLG9CQUFaO0FBQ0gsQ0FaRDs7QUFlQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOUosVUFBVVcsU0FBVixDQUFvQjBGLHNCQUFwQixHQUE2QyxZQUM3QztBQUNJLFFBQUlsRixPQUFPLElBQVg7QUFDQSxRQUFJdUosc0JBQXNCLENBQTFCO0FBQ0EsUUFBSUMsaUJBQWlCLEVBQXJCO0FBQ0FBLG1CQUFlakYsSUFBZixDQUFvQmtGLEtBQXBCLENBQTBCRCxjQUExQixFQUEwQ3hKLEtBQUs2SSxTQUFMLEdBQWlCSSxRQUFqQixFQUExQztBQUNBTyxxQkFBaUJBLGVBQWVSLE1BQWYsQ0FBd0JVLEdBQUQsSUFBUzFKLEtBQUtpSixRQUFMLEdBQWdCVSxPQUFoQixDQUF3QkQsR0FBeEIsSUFBK0IsQ0FBL0QsQ0FBakI7O0FBRUExSixTQUFLaUosUUFBTCxHQUFnQjdILE9BQWhCLENBQ0tDLElBQUQsSUFBVWtJLHVCQUF1QmxJLEtBQUtKLDhCQUFMLENBQW9DdUksY0FBcEMsQ0FEckM7O0FBSUF4SixTQUFLMkksb0JBQUwsR0FBNEJZLG1CQUE1QjtBQUNILENBYkQ7O0FBZUF6SyxPQUFPQyxPQUFQLEdBQWlCRixTQUFqQixDIiwiZmlsZSI6ImF2c2RmLWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdnNkZkJhc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXZzZGZCYXNlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBhdnNkZkJhc2UgPSB7fTtcblxuYXZzZGZCYXNlLmxheW91dEJhc2UgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpO1xuYXZzZGZCYXNlLkFWU0RGQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9zcmMvQVZTREZDb25zdGFudHMnKTtcbmF2c2RmQmFzZS5BVlNERkVkZ2UgPSByZXF1aXJlKCcuL3NyYy9BVlNERkVkZ2UnKTtcbmF2c2RmQmFzZS5BVlNERkNpcmNsZSA9IHJlcXVpcmUoJy4vc3JjL0FWU0RGQ2lyY2xlJyk7XG5hdnNkZkJhc2UuQVZTREZMYXlvdXQgPSByZXF1aXJlKCcuL3NyYy9BVlNERkxheW91dCcpO1xuYXZzZGZCYXNlLkFWU0RGTm9kZSA9IHJlcXVpcmUoJy4vc3JjL0FWU0RGTm9kZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF2c2RmQmFzZTsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsYXlvdXRCYXNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxheW91dEJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmxldCBsYXlvdXRCYXNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm47XG59O1xuXG5sYXlvdXRCYXNlLkZETGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbmxheW91dEJhc2UuRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbmxheW91dEJhc2UuRkRMYXlvdXRFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5sYXlvdXRCYXNlLkZETGF5b3V0Tm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xubGF5b3V0QmFzZS5EaW1lbnNpb25EID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5sYXlvdXRCYXNlLkhhc2hNYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xubGF5b3V0QmFzZS5IYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5sYXlvdXRCYXNlLklHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5sYXlvdXRCYXNlLklNYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5sYXlvdXRCYXNlLkludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbmxheW91dEJhc2UuUG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbmxheW91dEJhc2UuUG9pbnREID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5sYXlvdXRCYXNlLlJhbmRvbVNlZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbmxheW91dEJhc2UuUmVjdGFuZ2xlRCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xubGF5b3V0QmFzZS5UcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbmxheW91dEJhc2UuVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xubGF5b3V0QmFzZS5RdWlja3NvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcbmxheW91dEJhc2UuTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xubGF5b3V0QmFzZS5MR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xubGF5b3V0QmFzZS5MR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbmxheW91dEJhc2UuTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xubGF5b3V0QmFzZS5MR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbmxheW91dEJhc2UuTE5vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbmxheW91dEJhc2UuTGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmxheW91dEJhc2UuTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsYXlvdXRCYXNlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExheW91dCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIElHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuZnVuY3Rpb24gRkRMYXlvdXQoKSB7XG4gIExheW91dC5jYWxsKHRoaXMpO1xuXG4gIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gIHRoaXMuc3ByaW5nQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlID0gMy4wICogRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwMDtcbiAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExheW91dCkge1xuICBGRExheW91dFtwcm9wXSA9IExheW91dFtwcm9wXTtcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZKSB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICs9IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDAuODtcbiAgfSBlbHNlIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkpIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgLT0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMS4yO1xuICB9XG5cbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG5cbiAgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OO1xuXG4gIHRoaXMuZ3JpZCA9IFtdO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNJZGVhbEVkZ2VMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcbiAgdmFyIGxjYURlcHRoO1xuICB2YXIgc291cmNlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgc2l6ZU9mU291cmNlSW5MY2E7XG4gIHZhciBzaXplT2ZUYXJnZXRJbkxjYTtcblxuICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldEFsbEVkZ2VzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBlZGdlID0gYWxsRWRnZXNbaV07XG5cbiAgICBlZGdlLmlkZWFsTGVuZ3RoID0gdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG5cbiAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpIHtcbiAgICAgIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBzaXplT2ZTb3VyY2VJbkxjYSA9IGVkZ2UuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG4gICAgICBzaXplT2ZUYXJnZXRJbkxjYSA9IGVkZ2UuZ2V0VGFyZ2V0SW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24pIHtcbiAgICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBzaXplT2ZTb3VyY2VJbkxjYSArIHNpemVPZlRhcmdldEluTGNhIC0gMiAqIExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFO1xuICAgICAgfVxuXG4gICAgICBsY2FEZXB0aCA9IGVkZ2UuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG5cbiAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAqIEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgKiAoc291cmNlLmdldEluY2x1c2lvblRyZWVEZXB0aCgpICsgdGFyZ2V0LmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGxjYURlcHRoKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMuaW5jcmVtZW50YWwpIHtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UO1xuICB9XG5cbiAgdGhpcy5tYXhJdGVyYXRpb25zID0gTWF0aC5tYXgodGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aCAqIDUsIHRoaXMubWF4SXRlcmF0aW9ucyk7XG5cbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9IHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG5cbiAgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxFZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBlZGdlID0gbEVkZ2VzW2ldO1xuXG4gICAgdGhpcy5jYWxjU3ByaW5nRm9yY2UoZWRnZSwgZWRnZS5pZGVhbExlbmd0aCk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24gKGdyaWRVcGRhdGVBbGxvd2VkID0gdHJ1ZSwgZm9yY2VUb05vZGVTdXJyb3VuZGluZ1VwZGF0ZSA9IGZhbHNlKSB7XG4gIHZhciBpLCBqO1xuICB2YXIgbm9kZUEsIG5vZGVCO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgcHJvY2Vzc2VkTm9kZVNldDtcblxuICBpZiAodGhpcy51c2VGUkdyaWRWYXJpYW50KSB7XG4gICAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCkge1xuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkTm9kZVNldCA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGNhbGN1bGF0ZSByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gZWFjaCBub2RlcyBhbmQgaXRzIHN1cnJvdW5kaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCwgZ3JpZFVwZGF0ZUFsbG93ZWQsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcblxuICAgICAgZm9yIChqID0gaSArIDE7IGogPCBsTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZSA9IGZ1bmN0aW9uIChlZGdlLCBpZGVhbExlbmd0aCkge1xuICB2YXIgc291cmNlTm9kZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gIHZhciB0YXJnZXROb2RlID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3ByaW5nRm9yY2U7XG4gIHZhciBzcHJpbmdGb3JjZVg7XG4gIHZhciBzcHJpbmdGb3JjZVk7XG5cbiAgLy8gVXBkYXRlIGVkZ2UgbGVuZ3RoXG4gIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmIHNvdXJjZU5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIHRhcmdldE5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGhTaW1wbGUoKTtcbiAgfSBlbHNlIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aCgpO1xuXG4gICAgaWYgKGVkZ2UuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIC8vIHR3byBub2RlcyBvdmVybGFwXG4gICAge1xuICAgICAgLy8gY2FsY3VsYXRlIHNlcGFyYXRpb24gYW1vdW50IGluIHggYW5kIHkgZGlyZWN0aW9uc1xuICAgICAgSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50KHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDIuMCk7XG5cbiAgICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgICAgcmVwdWxzaW9uRm9yY2VZID0gMiAqIG92ZXJsYXBBbW91bnRbMV07XG5cbiAgICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG5cbiAgICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzXG4gICAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICAgICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICB9IGVsc2UgLy8gbm8gb3ZlcmxhcFxuICAgIHtcbiAgICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZVxuXG4gICAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJiBub2RlQS5nZXRDaGlsZCgpID09IG51bGwgJiYgbm9kZUIuZ2V0Q2hpbGQoKSA9PSBudWxsKSAvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAgICAgIHtcbiAgICAgICAgICBkaXN0YW5jZVggPSByZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gICAgICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgICAgICB9IGVsc2UgLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgICAgICB7XG4gICAgICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbihyZWN0QSwgcmVjdEIsIGNsaXBQb2ludHMpO1xuXG4gICAgICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICAgICAgZGlzdGFuY2VZID0gY2xpcFBvaW50c1szXSAtIGNsaXBQb2ludHNbMV07XG4gICAgICAgIH1cblxuICAgICAgLy8gTm8gcmVwdWxzaW9uIHJhbmdlLiBGUiBncmlkIHZhcmlhbnQgc2hvdWxkIHRha2UgY2FyZSBvZiB0aGlzLlxuICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpIHtcbiAgICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICogRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCkge1xuICAgICAgICBkaXN0YW5jZVkgPSBJTWF0aC5zaWduKGRpc3RhbmNlWSkgKiBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlU3F1YXJlZCA9IGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWTtcbiAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cbiAgICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgICAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICAgICAgcmVwdWxzaW9uRm9yY2VYID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVggLyBkaXN0YW5jZTtcbiAgICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG5cbiAgICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSByZXB1bHNpb25Gb3JjZVk7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IHJlcHVsc2lvbkZvcmNlWTtcbiAgICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBvd25lckdyYXBoO1xuICB2YXIgb3duZXJDZW50ZXJYO1xuICB2YXIgb3duZXJDZW50ZXJZO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgYWJzRGlzdGFuY2VYO1xuICB2YXIgYWJzRGlzdGFuY2VZO1xuICB2YXIgZXN0aW1hdGVkU2l6ZTtcbiAgb3duZXJHcmFwaCA9IG5vZGUuZ2V0T3duZXIoKTtcblxuICBvd25lckNlbnRlclggPSAob3duZXJHcmFwaC5nZXRSaWdodCgpICsgb3duZXJHcmFwaC5nZXRMZWZ0KCkpIC8gMjtcbiAgb3duZXJDZW50ZXJZID0gKG93bmVyR3JhcGguZ2V0VG9wKCkgKyBvd25lckdyYXBoLmdldEJvdHRvbSgpKSAvIDI7XG4gIGRpc3RhbmNlWCA9IG5vZGUuZ2V0Q2VudGVyWCgpIC0gb3duZXJDZW50ZXJYO1xuICBkaXN0YW5jZVkgPSBub2RlLmdldENlbnRlclkoKSAtIG93bmVyQ2VudGVyWTtcbiAgYWJzRGlzdGFuY2VYID0gTWF0aC5hYnMoZGlzdGFuY2VYKSArIG5vZGUuZ2V0V2lkdGgoKSAvIDI7XG4gIGFic0Rpc3RhbmNlWSA9IE1hdGguYWJzKGRpc3RhbmNlWSkgKyBub2RlLmdldEhlaWdodCgpIC8gMjtcblxuICBpZiAobm9kZS5nZXRPd25lcigpID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkgLy8gaW4gdGhlIHJvb3QgZ3JhcGhcbiAgICB7XG4gICAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSkge1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYO1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZO1xuICAgICAgfVxuICAgIH0gZWxzZSAvLyBpbnNpZGUgYSBjb21wb3VuZFxuICAgIHtcbiAgICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpIHtcbiAgICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVkgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgICAgfVxuICAgIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKSB7XG4gICAgb3NjaWxhdGluZyA9IE1hdGguYWJzKHRoaXMudG90YWxEaXNwbGFjZW1lbnQgLSB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50KSA8IDI7XG4gIH1cblxuICBjb252ZXJnZWQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50IDwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudDtcblxuICByZXR1cm4gY29udmVyZ2VkIHx8IG9zY2lsYXRpbmc7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgaWYgKHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID09IHRoaXMuYW5pbWF0aW9uUGVyaW9kKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucysrO1xuICAgIH1cbiAgfVxufTtcblxuLy9UaGlzIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gKHdlaWdodCkgZm9yIGFsbCBub2Rlc1xuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGU7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICBub2RlLm5vT2ZDaGlsZHJlbiA9IG5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBGUi1HcmlkIFZhcmlhbnQgUmVwdWxzaW9uIEZvcmNlIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICB2YXIgc2l6ZVggPSAwO1xuICB2YXIgc2l6ZVkgPSAwO1xuXG4gIHNpemVYID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRSaWdodCgpIC0gZ3JhcGguZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc2l6ZVkgPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldEJvdHRvbSgpIC0gZ3JhcGguZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIHZhciBncmlkID0gbmV3IEFycmF5KHNpemVYKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHNpemVZKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZVk7IGorKykge1xuICAgICAgZ3JpZFtpXVtqXSA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBncmlkO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFkZE5vZGVUb0dyaWQgPSBmdW5jdGlvbiAodiwgbGVmdCwgdG9wKSB7XG5cbiAgdmFyIHN0YXJ0WCA9IDA7XG4gIHZhciBmaW5pc2hYID0gMDtcbiAgdmFyIHN0YXJ0WSA9IDA7XG4gIHZhciBmaW5pc2hZID0gMDtcblxuICBzdGFydFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS53aWR0aCArIHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc3RhcnRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS5oZWlnaHQgKyB2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnRYOyBpIDw9IGZpbmlzaFg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSBzdGFydFk7IGogPD0gZmluaXNoWTsgaisrKSB7XG4gICAgICB0aGlzLmdyaWRbaV1bal0ucHVzaCh2KTtcbiAgICAgIHYuc2V0R3JpZENvb3JkaW5hdGVzKHN0YXJ0WCwgZmluaXNoWCwgc3RhcnRZLCBmaW5pc2hZKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaTtcbiAgdmFyIG5vZGVBO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuXG4gIHRoaXMuZ3JpZCA9IHRoaXMuY2FsY0dyaWQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcblxuICAvLyBwdXQgYWxsIG5vZGVzIHRvIHByb3BlciBncmlkIGNlbGxzXG4gIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmFkZE5vZGVUb0dyaWQobm9kZUEsIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRMZWZ0KCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRUb3AoKSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUgPSBmdW5jdGlvbiAobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQsIGdyaWRVcGRhdGVBbGxvd2VkLCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlKSB7XG5cbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCB8fCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlKSB7XG4gICAgdmFyIHN1cnJvdW5kaW5nID0gbmV3IFNldCgpO1xuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIG5vZGVCO1xuICAgIHZhciBncmlkID0gdGhpcy5ncmlkO1xuXG4gICAgZm9yICh2YXIgaSA9IG5vZGVBLnN0YXJ0WCAtIDE7IGkgPCBub2RlQS5maW5pc2hYICsgMjsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gbm9kZUEuc3RhcnRZIC0gMTsgaiA8IG5vZGVBLmZpbmlzaFkgKyAyOyBqKyspIHtcbiAgICAgICAgaWYgKCEoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSBncmlkLmxlbmd0aCB8fCBqID49IGdyaWRbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ3JpZFtpXVtqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbm9kZUIgPSBncmlkW2ldW2pdW2tdO1xuXG4gICAgICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgXG4gICAgICAgICAgICAvLyBvciBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSwgc2tpcC5cbiAgICAgICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkgfHwgbm9kZUEgPT0gbm9kZUIpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSByZXB1bHNpb24gZm9yY2UgYmV0d2VlblxuICAgICAgICAgICAgLy8gbm9kZUEgYW5kIG5vZGVCIGhhcyBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlU2V0Lmhhcyhub2RlQikgJiYgIXN1cnJvdW5kaW5nLmhhcyhub2RlQikpIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclgoKSAtIG5vZGVCLmdldENlbnRlclgoKSkgLSAobm9kZUEuZ2V0V2lkdGgoKSAvIDIgKyBub2RlQi5nZXRXaWR0aCgpIC8gMik7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJZKCkgLSBub2RlQi5nZXRDZW50ZXJZKCkpIC0gKG5vZGVBLmdldEhlaWdodCgpIC8gMiArIG5vZGVCLmdldEhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZUEgYW5kIG5vZGVCIFxuICAgICAgICAgICAgICAvLyBpcyBsZXNzIHRoZW4gY2FsY3VsYXRpb24gcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWCA8PSB0aGlzLnJlcHVsc2lvblJhbmdlICYmIGRpc3RhbmNlWSA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy90aGVuIGFkZCBub2RlQiB0byBzdXJyb3VuZGluZyBvZiBub2RlQVxuICAgICAgICAgICAgICAgIHN1cnJvdW5kaW5nLmFkZChub2RlQik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IFsuLi5zdXJyb3VuZGluZ107XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG5vZGVBLnN1cnJvdW5kaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVBLnN1cnJvdW5kaW5nW2ldKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDAuMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBIYXNoTWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBMR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBQb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBUcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbnZhciBFbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgSGFzaFNldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxuICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBjcmVhdGUgYmVuZHBvaW50cyBhcyBuZWVkZWQgb3Igbm90XG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxuICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIGZyb20gYmVmb3JlIHRvIGFmdGVyIGxheW91dCBub2RlIHBvc2l0aW9uc1xuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgLyoqXHJcbiAgICogV2hldGhlciBvciBub3QgbGVhZiBub2RlcyAobm9uLWNvbXBvdW5kIG5vZGVzKSBhcmUgb2YgdW5pZm9ybSBzaXplcy4gV2hlblxyXG4gICAqIHRoZXkgYXJlLCBib3RoIHNwcmluZyBhbmQgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIHR3byBsZWFmIG5vZGVzIGNhbiBiZVxyXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXHJcbiAgICogaW4gbWFqb3Igc3BlZWQtdXAuXHJcbiAgICovXG4gIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB1c2VkIGZvciBjcmVhdGlvbiBvZiBiZW5kcG9pbnRzIGJ5IHVzaW5nIGR1bW15IG5vZGVzIGFuZCBlZGdlcy5cclxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cclxuICAgKi9cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcbiAgdGhpcy5pc1JlbW90ZVVzZSA9IGZhbHNlO1xuXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XG4gICAgdGhpcy5pc1JlbW90ZVVzZSA9IGlzUmVtb3RlVXNlO1xuICB9XG59XG5cbkxheW91dC5SQU5ET01fU0VFRCA9IDE7XG5cbkxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVtaXR0ZXIucHJvdG90eXBlKTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpIHtcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgcmV0dXJuIG5ldyBMTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKSB7XG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbCB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMudGlsaW5nUHJlTGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQcmVMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaW5pdFBhcmFtZXRlcnMoKTtcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG5cbiAgaWYgKHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkpIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XG4gICAgLy8gSWYgdGhpcyBpcyBhICdkdXJpbmcnIGxheW91dCBhbmltYXRpb24uIExheW91dCBpcyBub3QgZmluaXNoZWQgeWV0LiBcbiAgICAvLyBXZSBuZWVkIHRvIHBlcmZvcm0gdGhlc2UgaW4gaW5kZXguanMgd2hlbiBsYXlvdXQgaXMgcmVhbGx5IGZpbmlzaGVkLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKSB7XG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZG9Qb3N0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XG4gIC8vIFByb3BhZ2F0ZSBnZW9tZXRyaWMgY2hhbmdlcyB0byB2LWxldmVsIG9iamVjdHNcbiAgaWYgKCF0aGlzLmluY3JlbWVudGFsKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcbiAgfVxuICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSB0YXJnZXQgZ3JhcGggYWNjb3JkaW5nIHRvXHJcbiAqIGNhbGN1bGF0ZWQgbGF5b3V0LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xuXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxuICAvLyByZW1vdGVseVxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpIHtcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGdlID0gYWxsRWRnZXNbaV07XG4gICAgICAvLyAgICAgIHRoaXMudXBkYXRlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBub2Rlc1xuICAgIHZhciBub2RlO1xuICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIC8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgdGhpcy51cGRhdGUyKCk7XG4gIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICB2YXIgbm9kZSA9IG9iajtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZGF0ZShub2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBub2RlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZFZGdlID0gZWRnZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkVkZ2UudXBkYXRlKGVkZ2UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZ3JhcGggaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgb2JqZWN0IGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChncmFwaC52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNldCBhbGwgbGF5b3V0IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gICAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIH1cblxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpIHtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZmFsc2U7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcbiAgaWYgKG5ld0xlZnRUb3AgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0obmV3IFBvaW50RCgwLCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY3JlYXRlIGEgdHJhbnNmb3JtYXRpb24gb2JqZWN0IChmcm9tIEVjbGlwc2UgdG8gbGF5b3V0KS4gV2hlbiBhblxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXG4gICAgLy8gZHJhd2luZyBvciB0aGUgcm9vdCBncmFwaCBhdCBnaXZlbiBpbnB1dCBjb29yZGluYXRlIChzb21lIG1hcmdpbnNcbiAgICAvLyBhbHJlYWR5IGluY2x1ZGVkIGluIGNhbGN1bGF0aW9uIG9mIGxlZnQtdG9wKS5cblxuICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgICB2YXIgbGVmdFRvcCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XG5cbiAgICBpZiAobGVmdFRvcCAhPSBudWxsKSB7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xuXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICBpZiAoZ3JhcGggPT0gdW5kZWZpbmVkKSB7XG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XG4gICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpO1xuICAgIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbE5vZGU7XG4gICAgdmFyIGNoaWxkR3JhcGg7XG5cbiAgICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcblxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbCkge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkR3JhcGguZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShjaGlsZEdyYXBoKTtcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcclxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxyXG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxyXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZ2V0RmxhdEZvcmVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZsYXRGb3Jlc3QgPSBbXTtcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcblxuICAvLyBRdWljayByZWZlcmVuY2UgZm9yIGFsbCBub2RlcyBpbiB0aGUgZ3JhcGggbWFuYWdlciBhc3NvY2lhdGVkIHdpdGhcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG5cbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XG4gIHZhciBpc0ZsYXQgPSB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsTm9kZXNbaV0uZ2V0Q2hpbGQoKSAhPSBudWxsKSB7XG4gICAgICBpc0ZsYXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cbiAgaWYgKCFpc0ZsYXQpIHtcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcbiAgfVxuXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cblxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xuICB2YXIgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciB1blByb2Nlc3NlZE5vZGVzID0gW107XG5cbiAgdW5Qcm9jZXNzZWROb2RlcyA9IHVuUHJvY2Vzc2VkTm9kZXMuY29uY2F0KGFsbE5vZGVzKTtcblxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxuICAvLyBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgYSB0cmVlIG9yIG5vdC4gSWYgaXQgaXMgYSB0cmVlLCBhZGRzIGl0IHRvIHRoZVxuICAvLyBmb3Jlc3QgYW5kIGNvbnRpbnVlZCB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudC5cblxuICB3aGlsZSAodW5Qcm9jZXNzZWROb2Rlcy5sZW5ndGggPiAwICYmIGlzRm9yZXN0KSB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcblxuICAgIC8vIFN0YXJ0IHRoZSBCRlMuIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCB2aXNpdHMgYSBub2RlIGluIGFcbiAgICAvLyBCRlMgbWFubmVyLlxuICAgIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggPiAwICYmIGlzRm9yZXN0KSB7XG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPSBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcikge1xuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpIHtcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcbiAgICAgICAgICAgIHBhcmVudHMucHV0KGN1cnJlbnROZWlnaGJvciwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxuICAgICAgICAgIC8vIHRoaXMgbmVpZ2hib3IgaXMgbm90IHBhcmVudCBvZiBjdXJyZW50Tm9kZSwgZ2l2ZW5cbiAgICAgICAgICAvLyBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB0cmVlLCBoZW5jZVxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgYSB0cmVlLiBFbXB0eVxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXG4gICAgaWYgKCFpc0ZvcmVzdCkge1xuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xuICAgIH1cbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIHZpc2l0ZWQuYWRkQWxsVG8odGVtcCk7XG4gICAgICAgIGZsYXRGb3Jlc3QucHVzaCh0ZW1wKTtcbiAgICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XG4gICAgICAgIC8vdW5Qcm9jZXNzZWROb2Rlcy5yZW1vdmVBbGwodmlzaXRlZCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgICAgdmFyIGluZGV4ID0gdW5Qcm9jZXNzZWROb2Rlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgICAgICAgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdEZvcmVzdDtcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXHJcbiAqIGZvciB0aGUgZ2l2ZW4gZWRnZSAob25lIHBlciBiZW5kcG9pbnQpLiBUaGUgZXhpc3RpbmcgbC1sZXZlbCBzdHJ1Y3R1cmVcclxuICogaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cclxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpIHtcbiAgdmFyIGR1bW15Tm9kZXMgPSBbXTtcbiAgdmFyIHByZXYgPSBlZGdlLnNvdXJjZTtcblxuICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XG4gICAgZHVtbXlOb2RlLnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKTtcblxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBlZGdlIGJldHdlZW4gcHJldiBhbmQgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZHVtbXlOb2RlKTtcblxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XG4gICAgcHJldiA9IGR1bW15Tm9kZTtcbiAgfVxuXG4gIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGVkZ2UudGFyZ2V0KTtcblxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMucHV0KGVkZ2UsIGR1bW15Tm9kZXMpO1xuXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXG4gIGlmIChlZGdlLmlzSW50ZXJHcmFwaCgpKSB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICB9XG4gIC8vIGVsc2UsIHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGdyYXBoXG4gIGVsc2Uge1xuICAgICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICAgIH1cblxuICByZXR1cm4gZHVtbXlOb2Rlcztcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXHJcbiAqIGF0IGwtbGV2ZWwuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgZWRnZXMgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMua2V5U2V0KCkuY29uY2F0KGVkZ2VzKTtcblxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgdmFyIGxFZGdlID0gZWRnZXNba107XG5cbiAgICBpZiAobEVkZ2UuYmVuZHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGR1bW15Tm9kZSA9IHBhdGhbaV07XG4gICAgICAgIHZhciBwID0gbmV3IFBvaW50RChkdW1teU5vZGUuZ2V0Q2VudGVyWCgpLCBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcblxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xuICAgICAgICBlYnAueCA9IHAueDtcbiAgICAgICAgZWJwLnkgPSBwLnk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MCkge1xuICAgICAgdmFyIG1pblZhbHVlID0gZGVmYXVsdFZhbHVlIC8gbWluRGl2O1xuICAgICAgdmFsdWUgLT0gKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwICogKDUwIC0gc2xpZGVyVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4VmFsdWUgPSBkZWZhdWx0VmFsdWUgKiBtYXhNdWw7XG4gICAgICB2YWx1ZSArPSAobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTAgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBhLCBiO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKSB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XG4gICAgICBiID0gLTggKiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgKiBzbGlkZXJWYWx1ZSArIGI7XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcclxuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cclxuICovXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2Rlcykge1xuICB2YXIgbGlzdCA9IFtdO1xuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xuXG4gIHZhciByZW1vdmVkTm9kZXMgPSBbXTtcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgZm91bmRDZW50ZXIgPSBmYWxzZTtcbiAgdmFyIGNlbnRlck5vZGUgPSBudWxsO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpIHtcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG4gICAgdmFyIGRlZ3JlZSA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKTtcbiAgICByZW1haW5pbmdEZWdyZWVzLnB1dChub2RlLCBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCkpO1xuXG4gICAgaWYgKGRlZ3JlZSA9PSAxKSB7XG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcblxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKSB7XG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xuICAgIHRlbXBMaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKG5vZGUpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhuZWlnaGJvdXJzLnNldCkuZm9yRWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICB2YXIgbmVpZ2hib3VyID0gbmVpZ2hib3Vycy5zZXRbal07XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaW5kZXhPZihuZWlnaGJvdXIpIDwgMCkge1xuICAgICAgICAgIHZhciBvdGhlckRlZ3JlZSA9IHJlbWFpbmluZ0RlZ3JlZXMuZ2V0KG5laWdoYm91cik7XG4gICAgICAgICAgdmFyIG5ld0RlZ3JlZSA9IG90aGVyRGVncmVlIC0gMTtcblxuICAgICAgICAgIGlmIChuZXdEZWdyZWUgPT0gMSkge1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VudGVyTm9kZTtcbn07XG5cbi8qKlxyXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXHJcbiAqIHRoaXMgc2V0dGVyIGZ1bmN0aW9uIGdyYW50cyBhY2Nlc3MgdG8gY2hhbmdlIHRoZSBjdXJyZW50bHkgYmVpbmcgdXNlZCBncmFwaCBtYW5hZ2VyXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoZ20pIHtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gTGF5b3V0Q29uc3RhbnRzKCkge31cblxuLyoqXHJcbiAqIExheW91dCBRdWFsaXR5XHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWSA9IDE7XG5MYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSA9IDI7XG5cbi8qKlxyXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcclxuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gZmFsc2U7XG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EID0gNTA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IGZhbHNlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogR2VuZXJhbCBvdGhlciBjb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxyXG4gKiBNYXJnaW5zIG9mIGEgZ3JhcGggdG8gYmUgYXBwbGllZCBvbiBib3VkaW5nIHJlY3RhbmdsZSBvZiBpdHMgY29udGVudHMuIFdlXHJcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOID0gMTU7XG5cbi8qXHJcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9ucyBvciBub3RcclxuICovXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XG5cbi8qXHJcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgPSA0MDtcblxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfSEFMRl9TSVpFID0gTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgLyAyO1xuXG4vKlxyXG4gKiBFbXB0eSBjb21wb3VuZCBub2RlIHNpemUuIFdoZW4gYSBjb21wb3VuZCBub2RlIGlzIGVtcHR5LCBpdHMgYm90aFxyXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxyXG4gKi9cbkxheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MDtcblxuLypcclxuICogTWluaW11bSBsZW5ndGggdGhhdCBhbiBlZGdlIHNob3VsZCB0YWtlIGR1cmluZyBsYXlvdXRcclxuICovXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcblxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IGxheW91dCBvcGVyYXRlcyBvblxyXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSA9IDEwMDAwMDA7XG5cbi8qXHJcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgLyAxMDAwO1xuXG4vKlxyXG4gKiBDb29yZGluYXRlcyBvZiB0aGUgd29ybGQgY2VudGVyXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xuICB0aGlzLm1hcCA9IHt9O1xuICB0aGlzLmtleXMgPSBbXTtcbn1cblxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkge1xuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gIH1cbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5rZXlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gVW5pcXVlSURHZW5lcmV0b3IoKSB7fVxuXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xuXG5VbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xuICAgIHJldHVybiBvYmoudW5pcXVlSUQ7XG4gIH1cbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XG4gIFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCsrO1xuICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xufTtcblxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmIChpZCA9PSBudWxsKSBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcbiAgcmV0dXJuIFwiT2JqZWN0I1wiICsgaWQgKyBcIlwiO1xufTtcblxuVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgcmV0dXJuIGFyZyA9PSBudWxsIHx8IHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuZnVuY3Rpb24gTEdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxuICB0aGlzLmxheW91dCA9IGxheW91dDtcblxuICB0aGlzLmdyYXBocyA9IFtdO1xuICB0aGlzLmVkZ2VzID0gW107XG59XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuZ3JhcGggPSB0aGlzLmxheW91dC5uZXdHcmFwaCgpO1xuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xuICB2YXIgcm9vdCA9IHRoaXMuYWRkKG5ncmFwaCwgbm5vZGUpO1xuICB0aGlzLnNldFJvb3RHcmFwaChyb290KTtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xuXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XG4gICAgfVxuXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBwYXJlbnROb2RlLmNoaWxkID0gbmV3R3JhcGg7XG5cbiAgICByZXR1cm4gbmV3R3JhcGg7XG4gIH0gZWxzZSB7XG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXG4gICAgdGFyZ2V0Tm9kZSA9IG5ld0VkZ2U7XG4gICAgc291cmNlTm9kZSA9IHBhcmVudE5vZGU7XG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xuICAgIHZhciBzb3VyY2VHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICB2YXIgdGFyZ2V0R3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICBpZiAoIShzb3VyY2VHcmFwaCAhPSBudWxsICYmIHNvdXJjZUdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICghKHRhcmdldEdyYXBoICE9IG51bGwgJiYgdGFyZ2V0R3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlR3JhcGggPT0gdGFyZ2V0R3JhcGgpIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XG5cbiAgICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcbiAgICAgIGlmICh0aGlzLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPiAtMSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gc291cmNlIGFuZCB0YXJnZXQgaW5jaWRlbmN5IGxpc3RzXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZSAhPSBudWxsICYmIG5ld0VkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICBuZXdFZGdlLnNvdXJjZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgbmV3RWRnZS50YXJnZXQuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgcmV0dXJuIG5ld0VkZ2U7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xuICBpZiAobE9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IGxPYmo7XG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XG4gICAgfVxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IGdyYXBoLnBhcmVudCAhPSBudWxsICYmIGdyYXBoLnBhcmVudC5ncmFwaE1hbmFnZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xuXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gdGhlbiB0aGUgbm9kZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgbm9kZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgbm9kZXNUb0JlUmVtb3ZlZCA9IG5vZGVzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuXG4gICAgdmFyIG5vZGU7XG4gICAgcyA9IG5vZGVzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICBub2RlID0gbm9kZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxuICAgIGlmIChncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCkge1xuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIGVkZ2UgPSBsT2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0R3JhcGhzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaHM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbCkge1xuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICB0aGlzLmFsbE5vZGVzID0gbm9kZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbCkge1xuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xuICAgIH1cblxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xuXG4gICAgdGhpcy5hbGxFZGdlcyA9IGVkZ2VMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpIHtcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG5vZGVMaXN0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24gKGdyYXBoKSB7XG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgfVxuXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKSB7XG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sYXlvdXQ7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpIHtcbiAgaWYgKCEoZmlyc3ROb2RlICE9IG51bGwgJiYgc2Vjb25kTm9kZSAhPSBudWxsKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSXMgc2Vjb25kIG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIGZpcnN0IG9uZT9cbiAgdmFyIG93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgdmFyIHBhcmVudE5vZGU7XG5cbiAgZG8ge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuICAvLyBJcyBmaXJzdCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBzZWNvbmQgb25lP1xuICBvd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gIGRvIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IGZpcnN0Tm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgc291cmNlTm9kZTtcbiAgdmFyIHRhcmdldE5vZGU7XG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcblxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XG4gICAgZWRnZS5sY2EgPSBudWxsO1xuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSkge1xuICAgICAgZWRnZS5sY2EgPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuXG4gICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gc291cmNlQW5jZXN0b3JHcmFwaCkge1xuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gZWRnZS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc291cmNlQW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSkge1xuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpIHtcbiAgICByZXR1cm4gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIH1cbiAgdmFyIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuXG4gIGRvIHtcbiAgICBpZiAoZmlyc3RPd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGRvIHtcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaCkge1xuICAgICAgICByZXR1cm4gc2Vjb25kT3duZXJHcmFwaDtcbiAgICAgIH1cbiAgICAgIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmRPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZpcnN0T3duZXJHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24gKGdyYXBoLCBkZXB0aCkge1xuICBpZiAoZ3JhcGggPT0gbnVsbCAmJiBkZXB0aCA9PSBudWxsKSB7XG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcbiAgICBkZXB0aCA9IDE7XG4gIH1cbiAgdmFyIG5vZGU7XG5cbiAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGUuaW5jbHVzaW9uVHJlZURlcHRoID0gZGVwdGg7XG5cbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcblxuICB2YXIgcyA9IHRoaXMuZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIGVkZ2UgPSB0aGlzLmVkZ2VzW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNPbmVBbmNlc3Rvck9mT3RoZXIoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIElHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMudGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzSW50ZXJHcmFwaCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldEJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNvdXJjZUluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldEluTGNhID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gIH1cbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpIHtcbiAgdmFyIG90aGVyRW5kID0gdGhpcy5nZXRPdGhlckVuZChub2RlKTtcbiAgdmFyIHJvb3QgPSBncmFwaC5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaCkge1xuICAgICAgcmV0dXJuIG90aGVyRW5kO1xuICAgIH1cblxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksIHRoaXMuc291cmNlLmdldFJlY3QoKSwgY2xpcFBvaW50Q29vcmRpbmF0ZXMpO1xuXG4gIGlmICghdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpIHtcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xuICAgIHRoaXMubGVuZ3RoWSA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzFdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbM107XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMCkge1xuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKSB7XG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQodGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbiAgfVxufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZW5ndGhYID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWCgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWCgpO1xuICB0aGlzLmxlbmd0aFkgPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJZKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApIHtcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMCkge1xuICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgfVxuXG4gIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExFZGdlO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gTEdyYXBoT2JqZWN0KHZHcmFwaE9iamVjdCkge1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBJR2VvbWV0cnkoKSB7fVxuXG5JR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBvdmVybGFwQW1vdW50LCBzZXBhcmF0aW9uQnVmZmVyKSB7XG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcbiAgSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucyk7XG4gIG92ZXJsYXBBbW91bnRbMF0gPSBNYXRoLm1pbihyZWN0QS5nZXRSaWdodCgpLCByZWN0Qi5nZXRSaWdodCgpKSAtIE1hdGgubWF4KHJlY3RBLngsIHJlY3RCLngpO1xuICBvdmVybGFwQW1vdW50WzFdID0gTWF0aC5taW4ocmVjdEEuZ2V0Qm90dG9tKCksIHJlY3RCLmdldEJvdHRvbSgpKSAtIE1hdGgubWF4KHJlY3RBLnksIHJlY3RCLnkpO1xuICAvLyB1cGRhdGUgdGhlIG92ZXJsYXBwaW5nIGFtb3VudHMgZm9yIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gIGlmIChyZWN0QS5nZXRYKCkgPD0gcmVjdEIuZ2V0WCgpICYmIHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4ocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpLCByZWN0QS5nZXRSaWdodCgpIC0gcmVjdEIuZ2V0UmlnaHQoKSk7XG4gIH0gZWxzZSBpZiAocmVjdEIuZ2V0WCgpIDw9IHJlY3RBLmdldFgoKSAmJiByZWN0Qi5nZXRSaWdodCgpID49IHJlY3RBLmdldFJpZ2h0KCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKHJlY3RBLmdldFgoKSAtIHJlY3RCLmdldFgoKSwgcmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpO1xuICB9XG4gIGlmIChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpICYmIHJlY3RBLmdldEJvdHRvbSgpID49IHJlY3RCLmdldEJvdHRvbSgpKSB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbihyZWN0Qi5nZXRZKCkgLSByZWN0QS5nZXRZKCksIHJlY3RBLmdldEJvdHRvbSgpIC0gcmVjdEIuZ2V0Qm90dG9tKCkpO1xuICB9IGVsc2UgaWYgKHJlY3RCLmdldFkoKSA8PSByZWN0QS5nZXRZKCkgJiYgcmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSwgcmVjdEIuZ2V0Qm90dG9tKCkgLSByZWN0QS5nZXRCb3R0b20oKSk7XG4gIH1cblxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xuICB2YXIgc2xvcGUgPSBNYXRoLmFicygocmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAvIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcbiAgLy8gaWYgY2VudGVycyBhcmUgb3ZlcmxhcHBlZFxuICBpZiAocmVjdEIuZ2V0Q2VudGVyWSgpID09IHJlY3RBLmdldENlbnRlclkoKSAmJiByZWN0Qi5nZXRDZW50ZXJYKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWCgpKSB7XG4gICAgLy8gYXNzdW1lIHRoZSBzbG9wZSBpcyAxICg0NSBkZWdyZWUpXG4gICAgc2xvcGUgPSAxLjA7XG4gIH1cblxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcbiAgdmFyIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzFdIC8gc2xvcGU7XG4gIGlmIChvdmVybGFwQW1vdW50WzBdIDwgbW92ZUJ5WCkge1xuICAgIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzBdO1xuICB9IGVsc2Uge1xuICAgIG1vdmVCeVkgPSBvdmVybGFwQW1vdW50WzFdO1xuICB9XG4gIC8vIHJldHVybiBoYWxmIHRoZSBhbW91bnQgc28gdGhhdCBpZiBlYWNoIHJlY3RhbmdsZSBpcyBtb3ZlZCBieSB0aGVzZVxuICAvLyBhbW91bnRzIGluIG9wcG9zaXRlIGRpcmVjdGlvbnMsIG92ZXJsYXAgd2lsbCBiZSByZXNvbHZlZFxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKG1vdmVCeVggLyAyICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSAtMSAqIGRpcmVjdGlvbnNbMV0gKiAobW92ZUJ5WSAvIDIgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbn07XG5cbklHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpIHtcbiAgaWYgKHJlY3RBLmdldENlbnRlclgoKSA8IHJlY3RCLmdldENlbnRlclgoKSkge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gMTtcbiAgfVxuXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJZKCkgPCByZWN0Qi5nZXRDZW50ZXJZKCkpIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IDE7XG4gIH1cbn07XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgcmVzdWx0KSB7XG4gIC8vcmVzdWx0WzAtMV0gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QSwgcmVzdWx0WzItM10gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QlxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDF5ID0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICB2YXIgcDJ4ID0gcmVjdEIuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xuXG4gIC8vaWYgdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LCB0aGVuIGNsaXBwaW5nIHBvaW50cyBhcmUgY2VudGVyc1xuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgcmVzdWx0WzFdID0gcDF5O1xuICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RBXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QXkgPSByZWN0QS5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeSA9IHJlY3RBLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QSA9IHJlY3RBLmdldEhlaWdodEhhbGYoKTtcbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RCXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QnkgPSByZWN0Qi5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeSA9IHJlY3RCLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QiA9IHJlY3RCLmdldEhlaWdodEhhbGYoKTtcbiAgLy9mbGFnIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnRzIGFyZSBmb3VuZFxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XG4gIHZhciBjbGlwUG9pbnRCRm91bmQgPSBmYWxzZTtcblxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXG4gIGlmIChwMXggPT0gcDJ4KSB7XG4gICAgaWYgKHAxeSA+IHAyeSkge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocDF5IDwgcDJ5KSB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90IGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICAvLyBsaW5lIGlzIGhvcml6b250YWxcbiAgZWxzZSBpZiAocDF5ID09IHAyeSkge1xuICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHAxeCA8IHAyeCkge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL25vdCB2YWxpZCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9zbG9wZXMgb2YgcmVjdEEncyBhbmQgcmVjdEIncyBkaWFnb25hbHNcbiAgICAgIHZhciBzbG9wZUEgPSByZWN0QS5oZWlnaHQgLyByZWN0QS53aWR0aDtcbiAgICAgIHZhciBzbG9wZUIgPSByZWN0Qi5oZWlnaHQgLyByZWN0Qi53aWR0aDtcblxuICAgICAgLy9zbG9wZSBvZiBsaW5lIGJldHdlZW4gY2VudGVyIG9mIHJlY3RBIGFuZCBjZW50ZXIgb2YgcmVjdEJcbiAgICAgIHZhciBzbG9wZVByaW1lID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4KTtcbiAgICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkE7XG4gICAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25CO1xuICAgICAgdmFyIHRlbXBQb2ludEF4O1xuICAgICAgdmFyIHRlbXBQb2ludEF5O1xuICAgICAgdmFyIHRlbXBQb2ludEJ4O1xuICAgICAgdmFyIHRlbXBQb2ludEJ5O1xuXG4gICAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcbiAgICAgIGlmICgtc2xvcGVBID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsb3BlQSA9PSBzbG9wZVByaW1lKSB7XG4gICAgICAgIGlmIChwMXggPiBwMngpIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUJcbiAgICAgIGlmICgtc2xvcGVCID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAyeCA+IHAxeCkge1xuICAgICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsb3BlQiA9PSBzbG9wZVByaW1lKSB7XG4gICAgICAgIGlmIChwMnggPiBwMXgpIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2lmIGJvdGggY2xpcHBpbmcgcG9pbnRzIGFyZSBjb3JuZXJzXG4gICAgICBpZiAoY2xpcFBvaW50QUZvdW5kICYmIGNsaXBQb2ludEJGb3VuZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vZGV0ZXJtaW5lIENhcmRpbmFsIERpcmVjdGlvbiBvZiByZWN0YW5nbGVzXG4gICAgICBpZiAocDF4ID4gcDJ4KSB7XG4gICAgICAgIGlmIChwMXkgPiBwMnkpIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocDF5ID4gcDJ5KSB7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9jYWxjdWxhdGUgY2xpcHBpbmcgUG9pbnQgaWYgaXQgaXMgbm90IGZvdW5kIGJlZm9yZVxuICAgICAgaWYgKCFjbGlwUG9pbnRBRm91bmQpIHtcbiAgICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcbiAgICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgLWhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIGhhbGZXaWR0aEEgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRlbXBQb2ludEF5ID0gYm90dG9tTGVmdEF5O1xuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyBoYWxmSGVpZ2h0QSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21MZWZ0QXg7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIC1oYWxmV2lkdGhBICogc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjbGlwUG9pbnRCRm91bmQpIHtcbiAgICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkIpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHRvcExlZnRCeTtcbiAgICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgLWhhbGZIZWlnaHRCIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIGhhbGZXaWR0aEIgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRlbXBQb2ludEJ5ID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyBoYWxmSGVpZ2h0QiAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21MZWZ0Qng7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIC1oYWxmV2lkdGhCICogc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uID0gZnVuY3Rpb24gKHNsb3BlLCBzbG9wZVByaW1lLCBsaW5lKSB7XG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xuICB9XG59O1xuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKHMxLCBzMiwgZjEsIGYyKSB7XG4gIGlmIChmMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yKHMxLCBzMiwgZjEpO1xuICB9XG4gIHZhciB4MSA9IHMxLng7XG4gIHZhciB5MSA9IHMxLnk7XG4gIHZhciB4MiA9IHMyLng7XG4gIHZhciB5MiA9IHMyLnk7XG4gIHZhciB4MyA9IGYxLng7XG4gIHZhciB5MyA9IGYxLnk7XG4gIHZhciB4NCA9IGYyLng7XG4gIHZhciB5NCA9IGYyLnk7XG4gIHZhciB4LCB5OyAvLyBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXG4gIHZhciBkZW5vbTtcblxuICBhMSA9IHkyIC0geTE7XG4gIGIxID0geDEgLSB4MjtcbiAgYzEgPSB4MiAqIHkxIC0geDEgKiB5MjsgLy8geyBhMSp4ICsgYjEqeSArIGMxID0gMCBpcyBsaW5lIDEgfVxuXG4gIGEyID0geTQgLSB5MztcbiAgYjIgPSB4MyAtIHg0O1xuICBjMiA9IHg0ICogeTMgLSB4MyAqIHk0OyAvLyB7IGEyKnggKyBiMip5ICsgYzIgPSAwIGlzIGxpbmUgMiB9XG5cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcblxuICBpZiAoZGVub20gPT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgeCA9IChiMSAqIGMyIC0gYjIgKiBjMSkgLyBkZW5vbTtcbiAgeSA9IChhMiAqIGMxIC0gYTEgKiBjMikgLyBkZW5vbTtcblxuICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxyXG4gKiBTb21lIHVzZWZ1bCBwcmUtY2FsY3VsYXRlZCBjb25zdGFudHNcclxuICovXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5UV09fUEkgPSAyLjAgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcblxubW9kdWxlLmV4cG9ydHMgPSBJR2VvbWV0cnk7XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gSU1hdGgoKSB7fVxuXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqL1xuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG5JTWF0aC5mbG9vciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xufTtcblxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJTWF0aDtcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBJbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZWN0YW5nbGVEID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgUG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciBMaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ub2RlcyA9IFtdO1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XG4gIH0gZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xuICB9XG59XG5cbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ub2Rlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxlZnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yaWdodDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50b3A7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcbiAgICB9XG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiB0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih0YXJnZXROb2RlKSA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgIC8vIHNldCBhcyBpbnRyYS1ncmFwaCBlZGdlXG4gICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcblxuICAgIC8vIGFkZCB0byBncmFwaCBlZGdlIGxpc3RcbiAgICB0aGlzLmdldEVkZ2VzKCkucHVzaChuZXdFZGdlKTtcblxuICAgIC8vIGFkZCB0byBpbmNpZGVuY3kgbGlzdHNcbiAgICBzb3VyY2VOb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICBpZiAodGFyZ2V0Tm9kZSAhPSBzb3VyY2VOb2RlKSB7XG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VkZ2U7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbm9kZSA9IG9iajtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG5cbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaCkge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJiBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKSB7XG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG4gIH1cblxuICAvLyBEbyB3ZSBoYXZlIGFueSBub2RlcyBpbiB0aGlzIGdyYXBoP1xuICBpZiAodG9wID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH0gZWxzZSB7XG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XG4gIH1cblxuICB0aGlzLmxlZnQgPSBsZWZ0IC0gbWFyZ2luO1xuICB0aGlzLnRvcCA9IHRvcCAtIG1hcmdpbjtcblxuICAvLyBBcHBseSB0aGUgbWFyZ2lucyBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSkge1xuICAvLyBjYWxjdWxhdGUgYm91bmRzXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbCkge1xuICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgfVxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKSB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xuICB9XG5cbiAgaWYgKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCkge1xuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xuICB9IGVsc2Uge1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XG59O1xuXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcblxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKSB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIH1cblxuICBpZiAoc2l6ZSA9PSAwKSB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xuICB2YXIgbmVpZ2hib3JFZGdlcztcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICB9KTtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgY3VycmVudE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcbiAgICB2YXIgc2l6ZSA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICB2YXIgbmVpZ2hib3JFZGdlID0gbmVpZ2hib3JFZGdlc1tpXTtcbiAgICAgIGN1cnJlbnROZWlnaGJvciA9IG5laWdoYm9yRWRnZS5nZXRPdGhlckVuZEluR3JhcGgoY3VycmVudE5vZGUsIHRoaXMpO1xuXG4gICAgICAvLyBBZGQgdW52aXNpdGVkIG5laWdoYm9ycyB0byB0aGUgbGlzdCB0byB2aXNpdFxuICAgICAgaWYgKGN1cnJlbnROZWlnaGJvciAhPSBudWxsICYmICF2aXNpdGVkLmhhcyhjdXJyZW50TmVpZ2hib3IpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbk9mTmVpZ2hib3IgPSBjdXJyZW50TmVpZ2hib3Iud2l0aENoaWxkcmVuKCk7XG5cbiAgICAgICAgY2hpbGRyZW5PZk5laWdoYm9yLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKHZpc2l0ZWQuc2l6ZSA+PSB0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcblxuICAgIHZpc2l0ZWQuZm9yRWFjaChmdW5jdGlvbiAodmlzaXRlZE5vZGUpIHtcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKSB7XG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEludGVnZXIoKSB7fVxuXG5JbnRlZ2VyLk1BWF9WQUxVRSA9IDIxNDc0ODM2NDc7XG5JbnRlZ2VyLk1JTl9WQUxVRSA9IC0yMTQ3NDgzNjQ4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXI7XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExHcmFwaE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIFJlY3RhbmdsZUQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFJhbmRvbVNlZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBQb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBIYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XG4gICAgdk5vZGUgPSBsb2M7XG4gIH1cblxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XG5cbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpIGdtID0gZ20uZ3JhcGhNYW5hZ2VyO1xuXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZOb2RlO1xuICB0aGlzLmVkZ2VzID0gW107XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG5cbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbCkgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQobG9jLngsIGxvYy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7ZWxzZSB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRCgpO1xufVxuXG5MTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmNoaWxkO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKCkge1xuICAvLyAgaWYgKHRoaXMub3duZXIgIT0gbnVsbCkge1xuICAvLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcbiAgLy8gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgLy8gICAgfVxuICAvLyAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDIsIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pIHtcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KSB7XG4gIHRoaXMucmVjdC54ID0gY3ggLSB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnJlY3QueCA9IHg7XG4gIHRoaXMucmVjdC55ID0geTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMucmVjdC54ICs9IGR4O1xuICB0aGlzLnJlY3QueSArPSBkeTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bykge1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnRhcmdldCA9PSB0bykge1xuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcblxuICAgIGlmIChlZGdlLnRhcmdldCA9PSBvdGhlciB8fCBlZGdlLnNvdXJjZSA9PSBvdGhlcikge1xuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnNvdXJjZSA9PSBzZWxmKSB7XG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2UudGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVkZ2UudGFyZ2V0ICE9IHNlbGYpIHtcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgfVxuXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZWlnaGJvcnM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd2l0aE5laWdoYm9yc0xpc3QgPSBuZXcgU2V0KCk7XG4gIHZhciBjaGlsZE5vZGU7XG4gIHZhciBjaGlsZHJlbjtcblxuICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2hpbGQgIT0gbnVsbCkge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aE5laWdoYm9yc0xpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcbiAgdmFyIGNoaWxkTm9kZTtcblxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKSB7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG5cbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vT2ZDaGlsZHJlbiA9PSAwKSB7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYW5kb21DZW50ZXJYO1xuICB2YXIgcmFuZG9tQ2VudGVyWTtcblxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArIFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSArIG1pblg7XG5cbiAgdmFyIG1pblkgPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhZID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgKyBSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhZIC0gbWluWSkgKyBtaW5ZO1xuXG4gIHRoaXMucmVjdC54ID0gcmFuZG9tQ2VudGVyWDtcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKSB7XG4gICAgLy8gd3JhcCB0aGUgY2hpbGRyZW4gbm9kZXMgYnkgcmUtYXJyYW5naW5nIHRoZSBib3VuZGFyaWVzXG4gICAgdmFyIGNoaWxkR3JhcGggPSB0aGlzLmdldENoaWxkKCk7XG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG5cbiAgICB0aGlzLnJlY3QueCA9IGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgIHRoaXMuc2V0V2lkdGgoY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCkpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcblxuICAgIC8vIFVwZGF0ZSBjb21wb3VuZCBib3VuZHMgY29uc2lkZXJpbmcgaXRzIGxhYmVsIHByb3BlcnRpZXMgICAgXG4gICAgaWYgKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpIHtcblxuICAgICAgdmFyIHdpZHRoID0gY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsV2lkdGggPiB3aWR0aCkge1xuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhYmVsUG9zID09IFwidG9wXCIpIHtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSB0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFucykge1xuICB2YXIgbGVmdCA9IHRoaXMucmVjdC54O1xuXG4gIGlmIChsZWZ0ID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKSB7XG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfSBlbHNlIGlmIChsZWZ0IDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIGxlZnQgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIHRvcCA9IHRoaXMucmVjdC55O1xuXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpIHtcbiAgICB0b3AgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH0gZWxzZSBpZiAodG9wIDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcbiAgdmFyIHZMZWZ0VG9wID0gdHJhbnMuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGxlZnRUb3ApO1xuXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0Lnk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3duZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXIuZ2V0UGFyZW50KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExOb2RlO1xuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgdGhpcy54ID0geDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgdGhpcy55ID0geTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKSB7XG4gIGlmICh0aGlzLmdldFJpZ2h0KCkgPCBhLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldFJpZ2h0KCkgPCB0aGlzLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRCb3R0b20oKSA8IHRoaXMueSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5ZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRZKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0SGFsZiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlRDtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBSYW5kb21TZWVkKCkge31cblJhbmRvbVNlZWQuc2VlZCA9IDE7XG5SYW5kb21TZWVkLnggPSAwO1xuXG5SYW5kb21TZWVkLm5leHREb3VibGUgPSBmdW5jdGlvbiAoKSB7XG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFBvaW50RCh4LCB5KSB7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICB0aGlzLnggPSB4O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIChwdCkge1xuICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gcHQueCwgdGhpcy55IC0gcHQueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSkge1xuICB0aGlzLnggKz0gZGltLndpZHRoO1xuICB0aGlzLnkgKz0gZGltLmhlaWdodDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5mdW5jdGlvbiBIYXNoU2V0KCkge1xuICB0aGlzLnNldCA9IHt9O1xufVxuO1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaik7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHRoaXMuc2V0W3RoZUlkXSA9IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildID09IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xuICB9XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIHYgPSBsaXN0W2ldO1xuICAgIHRoaXMuYWRkKHYpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHksIHApIHtcbiAgdGhpcy54ID0gbnVsbDtcbiAgdGhpcy55ID0gbnVsbDtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfSBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy54ID0gcC54O1xuICAgIHRoaXMueSA9IHAueTtcbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50LnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5LCBwKSB7XG4gIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy5zZXRMb2NhdGlvbihwLngsIHAueSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgLy9pZiBib3RoIHBhcmFtZXRlcnMgYXJlIGludGVnZXIganVzdCBtb3ZlICh4LHkpIGxvY2F0aW9uXG4gICAgaWYgKHBhcnNlSW50KHgpID09IHggJiYgcGFyc2VJbnQoeSkgPT0geSkge1xuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHggKyAwLjUpO1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcih5ICsgMC41KTtcbiAgICB9XG4gIH1cbn07XG5cblBvaW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMueCArPSBkeDtcbiAgdGhpcy55ICs9IGR5O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgIHZhciBwdCA9IG9iajtcbiAgICByZXR1cm4gdGhpcy54ID09IHB0LnggJiYgdGhpcy55ID09IHB0Lnk7XG4gIH1cbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xufTtcblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KCkuY29uc3RydWN0b3IubmFtZSArIFwiW3g9XCIgKyB0aGlzLnggKyBcIix5PVwiICsgdGhpcy55ICsgXCJdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XG5cbmNvbnN0IGFkZCA9IChwcmV2LCBub2RlLCBuZXh0LCBsaXN0KSA9PiB7XG4gIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xuICB9XG5cbiAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICBuZXh0LnByZXYgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLnByZXYgPSBwcmV2O1xuICBub2RlLm5leHQgPSBuZXh0O1xuXG4gIGxpc3QubGVuZ3RoKys7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAobm9kZSwgbGlzdCkgPT4ge1xuICBsZXQgeyBwcmV2LCBuZXh0IH0gPSBub2RlO1xuXG4gIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBuZXh0O1xuICB9XG5cbiAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICBuZXh0LnByZXYgPSBwcmV2O1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IHByZXY7XG4gIH1cblxuICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xuXG4gIGxpc3QubGVuZ3RoLS07XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IodmFscykge1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICBpZiAodmFscyAhPSBudWxsKSB7XG4gICAgICB2YWxzLmZvckVhY2godiA9PiB0aGlzLnB1c2godikpO1xuICAgIH1cbiAgfVxuXG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHZhbCwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHZhbCwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydE5vZGVCZWZvcmUobmV3Tm9kZSwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydE5vZGVBZnRlcihuZXdOb2RlLCBvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gYWRkKG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMpO1xuICB9XG5cbiAgcHVzaCh2YWwpIHtcbiAgICByZXR1cm4gYWRkKHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyk7XG4gIH1cblxuICB1bnNoaWZ0KHZhbCkge1xuICAgIHJldHVybiBhZGQobnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzKTtcbiAgfVxuXG4gIHJlbW92ZShub2RlKSB7XG4gICAgcmV0dXJuIHJlbW92ZShub2RlLCB0aGlzKTtcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICByZXR1cm4gcmVtb3ZlKHRoaXMudGFpbCwgdGhpcykudmFsdWU7XG4gIH1cblxuICBwb3BOb2RlKCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy50YWlsLCB0aGlzKTtcbiAgfVxuXG4gIHNoaWZ0KCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy5oZWFkLCB0aGlzKS52YWx1ZTtcbiAgfVxuXG4gIHNoaWZ0Tm9kZSgpIHtcbiAgICByZXR1cm4gcmVtb3ZlKHRoaXMuaGVhZCwgdGhpcyk7XG4gIH1cblxuICBnZXRfb2JqZWN0X2F0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpIHtcbiAgICAgIHZhciBpID0gMTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRfb2JqZWN0X2F0KGluZGV4LCB2YWx1ZSkge1xuICAgIGlmIChpbmRleCA8PSB0aGlzLmxlbmd0aCgpKSB7XG4gICAgICB2YXIgaSA9IDE7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlIChpIDwgaW5kZXgpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIFBvaW50RCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XG4gIHRoaXMubHdvcmxkT3JnWSA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcbiAgdGhpcy5sd29ybGRFeHRYID0gMS4wO1xuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFkgPSAxLjA7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KSB7XG4gIHRoaXMubHdvcmxkT3JnWCA9IHdveDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAod295KSB7XG4gIHRoaXMubHdvcmxkT3JnWSA9IHdveTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KSB7XG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KSB7XG4gIHRoaXMubHdvcmxkRXh0WSA9IHdleTtcbn07XG5cbi8qIERldmljZSByZWxhdGVkICovXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KSB7XG4gIHRoaXMubGRldmljZU9yZ1ggPSBkb3g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKGRveSkge1xuICB0aGlzLmxkZXZpY2VPcmdZID0gZG95O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpIHtcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KSB7XG4gIHRoaXMubGRldmljZUV4dFkgPSBkZXk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgeERldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WCA9IHRoaXMubHdvcmxkRXh0WDtcbiAgaWYgKHdvcmxkRXh0WCAhPSAwLjApIHtcbiAgICB4RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWCArICh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFg7XG4gIH1cblxuICByZXR1cm4geERldmljZTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KSB7XG4gIHZhciB5RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRZID0gdGhpcy5sd29ybGRFeHRZO1xuICBpZiAod29ybGRFeHRZICE9IDAuMCkge1xuICAgIHlEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdZICsgKHkgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHdvcmxkRXh0WTtcbiAgfVxuXG4gIHJldHVybiB5RGV2aWNlO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciB4V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKSB7XG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICsgKHggLSB0aGlzLmxkZXZpY2VPcmdYKSAqIHRoaXMubHdvcmxkRXh0WCAvIGRldmljZUV4dFg7XG4gIH1cblxuICByZXR1cm4geFdvcmxkO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KSB7XG4gIHZhciB5V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRZID0gdGhpcy5sZGV2aWNlRXh0WTtcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKSB7XG4gICAgeVdvcmxkID0gdGhpcy5sd29ybGRPcmdZICsgKHkgLSB0aGlzLmxkZXZpY2VPcmdZKSAqIHRoaXMubHdvcmxkRXh0WSAvIGRldmljZUV4dFk7XG4gIH1cbiAgcmV0dXJuIHlXb3JsZDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpIHtcbiAgdmFyIG91dFBvaW50ID0gbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XG4gIHJldHVybiBvdXRQb2ludDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbnZhciBwID0gRW1pdHRlci5wcm90b3R5cGU7XG5cbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgIGV2ZW50OiBldmVudCxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfSk7XG59O1xuXG5wLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiAobC5ldmVudCA9PT0gZXZlbnQgJiYgbC5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn07XG5cbnAuZW1pdCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmIChldmVudCA9PT0gbC5ldmVudCkge1xuICAgICAgbC5jYWxsYmFjayhkYXRhKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRDb25zdGFudHMoKSB7fVxuXG4vL0ZETGF5b3V0Q29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKSB7XG4gIEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdID0gTGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5GRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IDI1MDA7XG5cbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSA1MDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gMC40NTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gNDUwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gMC40O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gMS4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDMuODtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAxLjU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IDAuNTtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCA9IDEwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMICogMztcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID0gMTAwO1xuRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IDAuMTtcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5GRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Q29uc3RhbnRzO1xuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMRWRnZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMRWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG4gIHRoaXMuaWRlYWxMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xufVxuXG5GRExheW91dEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExFZGdlKSB7XG4gIEZETGF5b3V0RWRnZVtwcm9wXSA9IExFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0RWRnZTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTE5vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKSB7XG4gIHRoaXMuc3RhcnRYID0gX3N0YXJ0WDtcbiAgdGhpcy5maW5pc2hYID0gX2ZpbmlzaFg7XG4gIHRoaXMuc3RhcnRZID0gX3N0YXJ0WTtcbiAgdGhpcy5maW5pc2hZID0gX2ZpbmlzaFk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBEaW1lbnNpb25EKHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbiAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuY29uc3QgTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5mdW5jdGlvbiBRdWlja3NvcnQoKSB7fVxuXG5RdWlja3NvcnQuZ2V0X29iamVjdF9hdCA9IGZ1bmN0aW9uIChsaXN0LCBpKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmdldF9vYmplY3RfYXQoaSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnNldF9vYmplY3RfYXQgPSBmdW5jdGlvbiAobGlzdCwgaSwgdmFsdWUpIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3RbaV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KSB7XG4gICAgICAgIGxpc3Quc2V0X29iamVjdF9hdChpLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnF1aWNrc29ydCA9IGZ1bmN0aW9uIChsaXN0LCBjb21wYXJpc29uX2ZuKSB7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QgfHwgbGlzdCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBjb21wYXJpc29uX2ZuO1xuXG4gICAgaWYgKGNvbXBhcmlzb25fZnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wYXJpc29uX2Z1bmN0aW9uID0gUXVpY2tzb3J0LmNvbXBhcmU7XG4gICAgfVxuICAgIHZhciBlbmRfaW5kZXg7XG5cbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5zaXplKCk7XG4gICAgfSBlbHNlIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZW1wdHkgbGlzdHMgb3IgYXJyYXlzLlxuICAgIGlmIChlbmRfaW5kZXggPj0gMCkge1xuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCAwLCBlbmRfaW5kZXgsIGNvbXBhcmlzb25fZnVuY3Rpb24pO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzID0gZnVuY3Rpb24gKGxpc3QsIGxvdywgaGlnaCwgY29tcGFyaXNvbl9mbikge1xuXG4gICAgLy8gaW5wdXQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBMaW5rZWRMaXN0IGNsYXNzIG9yIG11c3QgYmUgYW4gYXJyYXkgaW4gb3JkZXIgdG8gc29ydFxuICAgIGlmICghKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0IHx8IGxpc3QgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJpc29uX2ZuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcGFyaXNvbl9mbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cblxuICAgIHZhciBpID0gbG93O1xuICAgIHZhciBqID0gaGlnaDtcbiAgICB2YXIgbWlkZGxlSW5kZXggPSBNYXRoLmZsb29yKChpICsgaikgLyAyKTtcbiAgICB2YXIgbWlkZGxlID0gUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgbWlkZGxlSW5kZXgpO1xuXG4gICAgZG8ge1xuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpLCBtaWRkbGUpKSB7XG5cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKG1pZGRsZSwgUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaikpKSB7XG5cbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpIDw9IGopIHtcblxuICAgICAgICAgICAgdmFyIHRlbXAgPSBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBpKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGksIFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGopKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGosIHRlbXApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoaSA8PSBqKTtcblxuICAgIGlmIChsb3cgPCBqKSB7XG5cbiAgICAgICAgUXVpY2tzb3J0LnF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMobGlzdCwgbG93LCBqLCBjb21wYXJpc29uX2ZuKTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaCA+IGkpIHtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCBpLCBoaWdoLCBjb21wYXJpc29uX2ZuKTtcbiAgICB9XG59O1xuXG4vLyB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgb3ZlcnJpZGVuIGZvciBzb3J0aW5nIGRpZmZlcmVudCBkYXRhIHR5cGVzKGUuZy4gc3RyaW5nLCBpbnRlZ2VyIGV0Yy4pXG5RdWlja3NvcnQuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIgPiBhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja3NvcnQ7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxheW91dENvbnN0YW50cztcblxuZnVuY3Rpb24gQVZTREZDb25zdGFudHMoKXt9XG5cbi8vIEFWU0RGQ29uc3RhbnRzIGluaGVyaXRzIHByb3BlcnRpZXMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKXtcbiAgICBBVlNERkNvbnN0YW50c1twcm9wXSA9IExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT04gPSA2MDtcblxubW9kdWxlLmV4cG9ydHMgPSBBVlNERkNvbnN0YW50czsiLCIvKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBkYXRhIGFuZCBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIGZvciBBVlNERiBsYXlvdXQgcGVyXG4gKiBlZGdlLlxuICpcblxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMRWRnZSA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuTEVkZ2U7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBJbml0aWFsaXphdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIEFWU0RGRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpXG57XG4gICAgTEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsdGFyZ2V0LCB2RWRnZSk7XG59XG5cbkFWU0RGRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAobGV0IHByb3BlcnRpZXMgaW4gTEVkZ2UpXG57XG4gICAgQVZTREZFZGdlW3Byb3BlcnRpZXNdID0gTEVkZ2VbcHJvcGVydGllc107XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvbiBnZXRPdGhlckVuZCByZXR1cm5zIHRoZSBvdGhlciBlbmQgb2YgdGhpcyBlZGdlLlxuQVZTREZFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uKG5vZGUpXG57XG4gICAgcmV0dXJuIExFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZChub2RlKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB3aGV0aGVyIHRoaXMgZWRnZSBjcm9zc2VzIHdpdGggdGhlIGlucHV0IGVkZ2UuIEl0XG4vLyByZXR1cm5zIGZhbHNlLCBpZiBhbnkgb2YgdGhlIHZlcnRpY2VzIHRob3NlIGVkZ2VzIGFyZSBpbmNpZGVudCB0byBhcmUgbm90XG4vLyB5ZXQgcGxhY2VkIG9uIHRoZSBjaXJjbGUuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNyb3NzZXNXaXRoRWRnZSA9IGZ1bmN0aW9uKG90aGVyRWRnZSlcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNvdXJjZVBvcyA9IHNlbGYuZ2V0U291cmNlKCkuZ2V0SW5kZXgoKTtcbiAgICBsZXQgdGFyZ2V0UG9zID0gc2VsZi5nZXRUYXJnZXQoKS5nZXRJbmRleCgpO1xuICAgIGxldCBvdGhlclNvdXJjZVBvcyA9IG90aGVyRWRnZS5nZXRTb3VyY2UoKS5nZXRJbmRleCgpO1xuICAgIGxldCBvdGhlclRhcmdldFBvcyA9IG90aGVyRWRnZS5nZXRUYXJnZXQoKS5nZXRJbmRleCgpO1xuICAgIFxuICAgIC8vIGlmIGFueSBvZiB0aGUgdmVydGljZXMgdGhvc2UgdHdvIGVkZ2VzIGFyZSBub3QgeWV0IHBsYWNlZFxuICAgIGlmKHNvdXJjZVBvcyA9PT0gLTEgfHwgdGFyZ2V0UG9zID09PSAtMSB8fCBvdGhlclNvdXJjZVBvcyA9PT0gLTEgfHwgb3RoZXJUYXJnZXRQb3MgPT09IC0xKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBvdGhlclNvdXJjZURpc3QgPSBvdGhlckVkZ2UuZ2V0U291cmNlKCkuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZShzZWxmLmdldFNvdXJjZSgpKTtcbiAgICBsZXQgb3RoZXJUYXJnZXREaXN0ID0gb3RoZXJFZGdlLmdldFRhcmdldCgpLmdldENpcmNEaXN0V2l0aFRoZU5vZGUoc2VsZi5nZXRTb3VyY2UoKSk7XG4gICAgbGV0IHRoaXNUYXJnZXREaXN0ID0gc2VsZi5nZXRUYXJnZXQoKS5nZXRDaXJjRGlzdFdpdGhUaGVOb2RlKHNlbGYuZ2V0U291cmNlKCkpO1xuXG4gICAgaWYgKHRoaXNUYXJnZXREaXN0IDwgTWF0aC5tYXgob3RoZXJTb3VyY2VEaXN0LCBvdGhlclRhcmdldERpc3QpICYmXG4gICAgICAgICAgICB0aGlzVGFyZ2V0RGlzdCA+IE1hdGgubWluKG90aGVyU291cmNlRGlzdCwgb3RoZXJUYXJnZXREaXN0KSAmJlxuICAgICAgICAgICAgICAgIG90aGVyVGFyZ2V0RGlzdCAhPT0gMCAmJiBvdGhlclNvdXJjZURpc3QgIT09IDApXG4gICAge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgMSBpZiB0aGlzIGVkZ2UgY3Jvc3NlcyB3aXRoIHRoZSBpbnB1dCBlZGdlLCAwXG4vLyBvdGhlcndpc2UuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNyb3NzaW5nV2l0aEVkZ2UgPSBmdW5jdGlvbihvdGhlckVkZ2UpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCByZXN1bHQgPSBzZWxmLmNyb3NzZXNXaXRoRWRnZShvdGhlckVkZ2UpO1xuXG4gICAgcmV0dXJuICByZXN1bHQgPyAxIDogMDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBvZiB0aGlzIGVkZ2Ugd2l0aFxuLy8gYWxsIHRoZSBlZGdlcyBnaXZlbiBpbiB0aGUgaW5wdXQgbGlzdC5cbkFWU0RGRWRnZS5wcm90b3R5cGUuY2FsY3VsYXRlVG90YWxDcm9zc2luZ1dpdGhMaXN0ID0gZnVuY3Rpb24oZWRnZUxpc3QpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0b3RhbENyb3NzaW5nID0gMDtcblxuICAgIGVkZ2VMaXN0LmZvckVhY2goXG4gICAgICAgIChlZGdlKSA9PiB0b3RhbENyb3NzaW5nICs9IHNlbGYuY3Jvc3NpbmdXaXRoRWRnZShlZGdlKVxuICAgICk7XG5cbiAgICByZXR1cm4gdG90YWxDcm9zc2luZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZFZGdlOyIsIi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIGNpcmNsZS5cbiAqXG4gKlxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMR3JhcGggPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxHcmFwaDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gQVZTREZDaXJjbGUocGFyZW50LCBncmFwaE1nciwgdk9iamVjdClcbntcbiAgICBMR3JhcGguY2FsbCh0aGlzLCBwYXJlbnQsIGdyYXBoTWdyLCB2T2JqZWN0KTtcbiAgICB0aGlzLmluT3JkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMucGVyaW1ldGVyID0gMDtcbiAgICB0aGlzLmNlbnRlclggPSAwO1xuICAgIHRoaXMuY2VudGVyWSA9IDA7XG4gICAgdGhpcy5yYWRpdXMgPSAwO1xufVxuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaC5wcm90b3R5cGUpO1xuXG5mb3IobGV0IHByb3BlcnR5IGluIExHcmFwaClcbntcbiAgICBBVlNERkNpcmNsZVtwcm9wZXJ0eV0gPSBMR3JhcGhbcHJvcGVydHldO1xufVxuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuaW5pdE9yZGVyaW5nID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuaW5PcmRlciA9IFtdO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEFjY2Vzc29yIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBhcnJheSBpbiB3aGljaCB0aGUgbm9kZXMgb2YgdGhpcyBjaXJjbGUgYXJlIGtlcHQgaW4gb3JkZXIuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0T3JkZXIgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuaW5PcmRlcjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSBjZW50ZXIgb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5jZW50ZXJYO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24oKVxue1xuICAgIHJldHVybiB0aGlzLmNlbnRlclk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJhZGl1cyBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRSYWRpdXMgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5nZXROb2RlcygpLmxlbmd0aDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyBhbmQgcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBpbiB0aGlzXG4vLyBjaXJjbGUgYnkgYWRkaW5nIHVwIHRoZSBjcm9zc2luZyBudW1iZXIgb2YgaW5kaXZpZHVhbCBub2RlcyBvbiBpdC5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRUb3RhbENyb3NzaW5nT2ZDaXJjbGUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBjcm9zc2luZ051bWJlciA9IDA7XG4gICAgXG4gICAgZm9yKGxldCBub2RlIGluIHNlbGYuaW5PcmRlcilcbiAgICB7XG4gICAgICAgIGxldCBub2RlQ3Jvc3NpbmcgPSBub2RlLmdldFRvdGFsQ3Jvc3NpbmdPZkVkZ2VzKCk7XG4gICAgICAgIGlmKG5vZGVDcm9zc2luZyA9PT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBjcm9zc2luZ051bWJlciArPSBub2RlQ3Jvc3Npbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyb3NzaW5nTnVtYmVyIC8gNDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2hlY2tzIHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGUgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUgYXJlXG4vLyBhc3NpZ25lZCBhbiBpbmRleCBvbiB0aGUgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmhhc0ZpbmlzaGVkT3JkZXJpbmcgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEluZGV4ID09PSB0aGlzLmdldE5vZGVzKCkubGVuZ3RoO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBub2RlIHNlcGFyYXRpb24gb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZ2V0Tm9kZVNlcGFyYXRpb24gPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMubm9kZVNlcGFyYXRpb247XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIG5vZGUgc2VwYXJhdGlvbiBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5zZXROb2RlU2VwYXJhdGlvbiA9IGZ1bmN0aW9uKG5vZGVTZXBhcmF0aW9uKVxue1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSBub2RlU2VwYXJhdGlvbjtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgdmVydGljZXMgb2YgdGhpcyBjaXJjbGUgYW5kIGNvcnJlY3RzIHRoZSBhbmdsZVxuLy8gb2YgdGhlIHZlcnRpY2VzIHdpdGggcmVzcGVjdCB0byB0aGVpciBjaXJjbGUgaW5kaWNlcy5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5jb3JyZWN0QW5nbGVzID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLmN1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBzZWxmLmluT3JkZXIuZm9yRWFjaChcbiAgICAgICAgKG5vZGUpID0+ICBzZWxmLnB1dEluT3JkZXIobm9kZSlcbiAgICApO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIHB1dHMgdGhlIGdpdmVuIG5vZGUgb24gdGhlIGNpcmNsZSBpbiB0aGUgY3VycmVudCBvcmRlciBhbmRcbi8vIHNldHMgaXRzIGFuZ2xlIGFwcHJvcHJpYXRlbHkuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUucHV0SW5PcmRlciA9IGZ1bmN0aW9uKG5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG5vZGVzID0gc2VsZi5nZXROb2RlcygpO1xuXG4gICAgLy8gTm90ZSB0aGF0IGlkIGF0dHJpYnV0ZSBvZiBhIG5vZGUgaXMgYWRkZWQgYmVmb3JlXG4gICAgLy8gQVZTREZMYXlvdXQgaXMgY2FsbGVkXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChub2Rlc1tpXS5pZCA9PSBub2RlLmlkKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKCFmb3VuZClcbiAgICB7XG4gICAgICAgIHRocm93IFwiVGhlIG5vZGUgbXVzdCBiZSBhIG1lbWJlciBvZiBMR3JhcGhcIjtcbiAgICB9XG5cbiAgICBzZWxmLmluT3JkZXJbc2VsZi5jdXJyZW50SW5kZXhdID0gbm9kZTtcbiAgICBub2RlLnNldEluZGV4KHNlbGYuY3VycmVudEluZGV4KTtcblxuICAgIGlmKHNlbGYuY3VycmVudEluZGV4ID09PSAwKVxuICAgIHtcbiAgICAgICAgbm9kZS5zZXRBbmdsZSgwLjApO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBub2RlLnNldEFuZ2xlKHNlbGYuaW5PcmRlcltzZWxmLmN1cnJlbnRJbmRleCAtIDFdLmdldEFuZ2xlKCkgKyAyICogTWF0aC5QSSAqXG4gICAgICAgICAgICAobm9kZS5nZXREaWFnb25hbCgpIC8gMiArIHNlbGYubm9kZVNlcGFyYXRpb24gK1xuICAgICAgICAgICAgICAgIHNlbGYuaW5PcmRlcltzZWxmLmN1cnJlbnRJbmRleCAtIDFdLmdldERpYWdvbmFsKCkgLyAyKVxuICAgICAgICAgICAgLyBzZWxmLnBlcmltZXRlcik7XG4gICAgfVxuXG4gICAgc2VsZi5jdXJyZW50SW5kZXgrKztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbmV4dCBub2RlIHRvIGJlIHBsYWNlZCBvbiB0aGlzIGNpcmNsZSB3aXRoXG4vLyByZXNwZWN0IHRvIHRoZSBBVlNERiBhbGdvcml0aG0uXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuZmluZE5vZGVUb1BsYWNlID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgc0RlZ3JlZU5vZGUgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBGaW5kIHRoZSBzbWFsbGVzdCBkZWdyZWUgdmVydGV4IGlmIHRoZSBzdGFjayBpcyBlbXB0eVxuICAgIGlmKHNlbGYuc3RhY2subGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgc0RlZ3JlZU5vZGUgPSBzZWxmLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUoKTtcbiAgICB9XG4gICAgLy8gRmluZCB0aGUgZmlyc3QgdmVydGV4IGluIHRoZSBzdGFjayBub3QgeWV0IHBsYWNlZFxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGxldCBmb3VuZFVub3JkZXJOb2RlID0gZmFsc2U7XG5cbiAgICAgICAgd2hpbGUgKCFmb3VuZFVub3JkZXJOb2RlICYmICEoc2VsZi5zdGFjay5sZW5ndGggPT09IDApKVxuICAgICAgICB7XG4gICAgICAgICAgICBzRGVncmVlTm9kZSA9IHNlbGYuc3RhY2sucG9wKCk7XG4gICAgICAgICAgICBmb3VuZFVub3JkZXJOb2RlID0gIXNEZWdyZWVOb2RlLmlzT3JkZXJlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmb3VuZFVub3JkZXJOb2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBzRGVncmVlTm9kZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIG5vIHVub3JkZXJlZCB2ZXJ0ZXggaXMgZm91bmQgaW4gdGhlIHN0YWNrLCBmaW5kIG9uZVxuICAgIC8vIGZyb20gdGhlIHJlbWFpbmluZyBvbmVzXG4gICAgaWYoc0RlZ3JlZU5vZGUgPT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIHNEZWdyZWVOb2RlID0gc2VsZi5maW5kVW5vcmRlcmVkU21hbGxlc3REZWdyZWVOb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSB1bm9yZGVyZWQgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSB0byB0aGUgc3RhY2tcbiAgICBpZiggc0RlZ3JlZU5vZGUgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIGxldCBuZWlnaGJvcnMgPSBzRGVncmVlTm9kZS5nZXROZWlnaGJvcnNTb3J0ZWRCeURlZ3JlZSgpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IG5laWdoYm9ycy5sZW5ndGggLSAxOyBpID49IDAgOyBpLS0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcblxuICAgICAgICAgICAgaWYoIW5laWdoYm9yLmlzT3JkZXJlZCgpKSAvLyBDaGVjayBoZXJlIGZvciBwb3NzaWJsZSBlcnJvclxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhY2sucHVzaChuZWlnaGJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc0RlZ3JlZU5vZGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHJhZGl1cyBvZiB0aGlzIGNpcmNsZSB3aXRoIHJlc3BlY3QgdG8gdGhlIHNpemVzXG4vLyBvZiB0aGUgdmVydGljZXMgYW5kIHRoZSBub2RlIHNlcGFyYXRpb24gcGFyYW1ldGVyLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmNhbGN1bGF0ZVJhZGl1cyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRvdGFsRGlhZ29uYWwgPSAwO1xuXG4gICAgc2VsZi5nZXROb2RlcygpLmZvckVhY2goXG4gICAgICAgIChub2RlKSA9PiB0b3RhbERpYWdvbmFsICs9IE1hdGguc3FydChub2RlLmdldFdpZHRoKCkgKiBub2RlLmdldFdpZHRoKCkgKyBub2RlLmdldEhlaWdodCgpICogbm9kZS5nZXRIZWlnaHQoKSlcbiAgICApO1xuXG4gICAgc2VsZi5wZXJpbWV0ZXIgPSB0b3RhbERpYWdvbmFsICsgc2VsZi5nZXROb2RlcygpLmxlbmd0aCAqIHNlbGYubm9kZVNlcGFyYXRpb247XG4gICAgbGV0IHJhZGl1cyA9IHNlbGYucGVyaW1ldGVyIC8gKCAyICogTWF0aC5QSSk7XG5cbiAgICAvLyBDaGVjayBoZXJlIGZvciBwb3NzaWJsZSBlcnJvclxuXG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRXaWR0aCggMiAqIHJhZGl1cyApO1xuICAgIHNlbGYuZ2V0UGFyZW50KCkuc2V0SGVpZ2h0KCAyICogcmFkaXVzICk7XG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRDZW50ZXIoIHNlbGYuZ2V0UGFyZW50KCkuZ2V0V2lkdGgoKSwgc2VsZi5nZXRQYXJlbnQoKS5nZXRIZWlnaHQoKSApO1xuXG4gICAgc2VsZi5jZW50ZXJYID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRDZW50ZXJYKCk7XG4gICAgc2VsZi5jZW50ZXJZID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRDZW50ZXJZKCk7XG4gICAgc2VsZi5yYWRpdXMgPSBzZWxmLmdldFBhcmVudCgpLmdldEhlaWdodCgpIC8gMjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBvZiBhbGwgdmVydGljZXMgb2Zcbi8vIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmNhbGN1bGF0ZUVkZ2VDcm9zc2luZ3NPZk5vZGVzID0gZnVuY3Rpb24oKVxue1xuICAgIHRoaXMuZ2V0Tm9kZXMoKS5mb3JFYWNoKCAobm9kZSkgPT4gbm9kZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCkpO1xufTtcblxuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGluZGV4IG9mIGVhY2ggdmVydGV4IHRvIGl0cyBwb3NpdGlvbiBpbiBpbk9yZGVyXG4vLyBhcnJheS4gTm90ZSB0aGF0IGluZGV4IG9mIGEgbm9kZSBjYW4gYmUgZGlmZmVyZW50IGZyb20gaXRzIHBsYWNlIGluIHRoZVxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBJdCBsb2Fkc1xuLy8gb2xkIGluZGV4IHZhbHVlcyB0byB2ZXJ0aWNlcyBkdWUgdG8gYW4gaW5jcmVhc2UgaW4gdGhlIG51bWJlciBvZlxuLy8gY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmxvYWRPbGRJbmRpY2VzT2ZOb2RlcyA9IGZ1bmN0aW9uKClcbntcbiAgICAvL3RoaXMuaW5PcmRlci5mb3JFYWNoKCAobm9kZSxpbmRleCkgPT4gbm9kZS5zZXRJbmRleChpbmRleCkpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5PcmRlci5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNlbGYuaW5PcmRlcltpXS5zZXRJbmRleChpKTtcbiAgICB9XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIHBvc2l0aW9uIG9mIGVhY2ggbm9kZSBpbiBpbk9yZGVyIGFycmF5IHRvIGl0cyBpbmRleC5cbi8vIE5vdGUgdGhhdCBpbmRleCBvZiBhIG5vZGUgY2FuIGJlIGRpZmZlcmVudCBmcm9tIGl0cyBwbGFjZSBpbiB0aGUgaW5PcmRlclxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBUaGlzIGZ1bmN0aW9uXG4vLyBwdXRzIHRoZSBub2RlcyB0byB0aGVpciBuZXcgaW5kZXggdmFsdWVzIGluIGluT3JkZXIgYXJyYXkgZHVlIHRvIGFcbi8vIGRlY3JlYXNlIGluIHRoZSBudW1iZXIgb2YgY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLnJlT3JkZXJWZXJ0aWNlcyA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLmZvckVhY2goIChub2RlKSA9PiBzZWxmLmluT3JkZXJbbm9kZS5nZXRJbmRleCgpXSA9IG5vZGUgKTtcbn07XG5cblxuLy8gVGhpcyBmdW5jdGlvbiBmaW5kcyBhbmQgcmV0dXJucyB0aGUgdW5vcmRlcmVkIHNtYWxsZXN0IGRlZ3JlZSB2ZXJ0ZXggb25cbi8vIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0IG1pbkRlZ3JlZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGxldCBzRGVncmVlTm9kZTtcbiAgICBcbiAgICB0aGlzLmdldE5vZGVzKCkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgICBpZihub2RlLmdldERlZ3JlZSgpIDwgbWluRGVncmVlICYmICFub2RlLmlzT3JkZXJlZCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1pbkRlZ3JlZSA9IG5vZGUuZ2V0RGVncmVlKCk7XG4gICAgICAgICAgICAgICAgc0RlZ3JlZU5vZGUgPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiBzRGVncmVlTm9kZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBBVlNERkNpcmNsZTsiLCIvKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyB0aGUgb3ZlcmFsbCBsYXlvdXQgcHJvY2VzcyBmb3IgdGhlIEFWU0RGIGFsZ29yaXRobVxuICogKENpcmN1bGFyIERyYXdpbmcgQWxnb3JpdGhtIGJ5IEhlIGFuZCBTeWtvcmEpLlxuICpcbiAqXG4gKiBDb3B5cmlnaHQ6IGktVmlzIFJlc2VhcmNoIEdyb3VwLCBCaWxrZW50IFVuaXZlcnNpdHksIDIwMDcgLSBwcmVzZW50XG4gKi9cblxubGV0IExheW91dCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuTGF5b3V0O1xubGV0IEFWU0RGQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9BVlNERkNvbnN0YW50cy5qcycpO1xubGV0IEFWU0RGQ2lyY2xlID0gcmVxdWlyZSgnLi9BVlNERkNpcmNsZS5qcycpO1xubGV0IEFWU0RGTm9kZSA9IHJlcXVpcmUoJy4vQVZTREZOb2RlLmpzJyk7XG5sZXQgQVZTREZFZGdlID0gcmVxdWlyZSgnLi9BVlNERkVkZ2UuanMnKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQ29uc3RydWN0b3JcbmZ1bmN0aW9uIEFWU0RGTGF5b3V0KClcbntcbiAgICBMYXlvdXQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm5vZGVTZXBhcmF0aW9uID0gQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT047XG59XG5cbkFWU0RGTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTGF5b3V0LnByb3RvdHlwZSk7XG5cbmZvciAobGV0IHByb3BlcnR5IGluIExheW91dClcbntcbiAgICBBVlNERkxheW91dFtwcm9wZXJ0eV0gPSBMYXlvdXRbcHJvcGVydHldO1xufVxuXG5BVlNERkxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodk9iamVjdClcbntcbiAgICB0aGlzLmF2c2RmQ2lyY2xlID0gbmV3IEFWU0RGQ2lyY2xlKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2T2JqZWN0KTtcblxuICAgIHJldHVybiB0aGlzLmF2c2RmQ2lyY2xlO1xufTtcblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXG57XG4gICAgcmV0dXJuIG5ldyBBVlNERk5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcbn07XG5cbkFWU0RGTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKVxue1xuICAgIHJldHVybiBuZXcgQVZTREZFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcG9zaXRpb24gZGF0YSBmb3IgYWxsIG5vZGVzXG5BVlNERkxheW91dC5wcm90b3R5cGUuZ2V0UG9zaXRpb25zRGF0YSA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICAgIHZhciBwRGF0YSA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciByZWN0ID0gYWxsTm9kZXNbaV0ucmVjdDtcbiAgICAgICAgdmFyIGlkID0gYWxsTm9kZXNbaV0uaWQ7XG5cbiAgICAgICAgcERhdGFbaWRdID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgeDogcmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICB5OiByZWN0LmdldENlbnRlclkoKSxcbiAgICAgICAgICAgIHc6IHJlY3Qud2lkdGgsXG4gICAgICAgICAgICBoOiByZWN0LmhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBwRGF0YTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBMYXlvdXQgUmVsYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHBlcmZvcm1zIGxheW91dCBvbiBjb25zdHJ1Y3RlZCBsLWxldmVsIGdyYXBoLlxuICogSXQgcmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MsIGZhbHNlIG90aGVyd2lzZS5cbiAqIEltcG9ydGFudCE6IElmIHlvdSB3YW50IHRvIHNlZSB0aGUgcmVzdWx0cyBvZiB0aGlzIGZ1bmN0aW9uIHRoZW4sIGFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB5b3UgaGF2ZSB0byBjYWxjdWxhdGVcbiAqIGFuZCBzZXQgdGhlIHBvc2l0aW9ucyBvZiBldmVyeSBub2RlLiBUbyBkbyB0aGlzIGNhbGwgdXBkYXRlTm9kZUNvb3JkaW5hdGVzLiBIb3dldmVyLCB1cGRhdGVOb2RlQW5nbGVzIG9uIHRoZSBvdGhlclxuICogaGFuZCBpcyBub3QgbmVlZGVkIChyZWR1bmRhbnQpIGZvciB0aGlzIGZ1bmN0aW9uLlxuICovXG5BVlNERkxheW91dC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBDaGVjayBpZiBncmFwaCBjb250YWlucyBhbnkgY29tcG91bmQgc3RydWN0dXJlc1xuICAgIGlmIChzZWxmLmdyYXBoTWFuYWdlci5nZXRHcmFwaHMoKS5sZW5ndGggPiAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBjbHVzdGVyR3JhcGggPSB0aGlzLmF2c2RmQ2lyY2xlOyAvLyBGaXhlZCByZWZlcmVuY2UsIGJ1dCBub3cgaXQgaXMgYSBiaXQgcmVkdW5kYW50XG5cbiAgICBjbHVzdGVyR3JhcGguc2V0Tm9kZVNlcGFyYXRpb24odGhpcy5ub2RlU2VwYXJhdGlvbik7XG4gICAgY2x1c3RlckdyYXBoLmNhbGN1bGF0ZVJhZGl1cygpO1xuICAgIGNsdXN0ZXJHcmFwaC5pbml0T3JkZXJpbmcoKTtcblxuICAgIHdoaWxlICghY2x1c3RlckdyYXBoLmhhc0ZpbmlzaGVkT3JkZXJpbmcoKSlcbiAgICB7XG4gICAgICAgIGxldCBub2RlID0gY2x1c3RlckdyYXBoLmZpbmROb2RlVG9QbGFjZSgpO1xuICAgICAgICBjbHVzdGVyR3JhcGgucHV0SW5PcmRlcihub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHByb3BlcnR5IG9mIEFWU0RGTm9kZSBlbGVtZW50cyBpbiB0aGUgY2lyY2xlXG5BVlNERkxheW91dC5wcm90b3R5cGUudXBkYXRlTm9kZUFuZ2xlcyA9IGZ1bmN0aW9uICgpe1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5jb3JyZWN0QW5nbGVzKCk7IC8vQVZTREZDaXJjbGUgb2JqZWN0XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgdmVydGljZXMgb2YgdGhlIGdyYXBoIGFuZCBzZXRzIHRoZWlyIGNvcnJlY3QgY29vcmRpbmF0ZXMgd2l0aCByZXNwZWN0IHRvIHRoZSBvd25lciBjaXJjbGUuXG5BVlNERkxheW91dC5wcm90b3R5cGUudXBkYXRlTm9kZUNvb3JkaW5hdGVzID0gZnVuY3Rpb24gKCl7XG4gICAgbGV0IGNsdXN0ZXJHcmFwaCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKTtcblxuICAgIGNsdXN0ZXJHcmFwaC5nZXROb2RlcygpLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBub2RlLnNldENlbnRlcihjbHVzdGVyR3JhcGguZ2V0Q2VudGVyWCgpICsgY2x1c3RlckdyYXBoLmdldFJhZGl1cygpICogTWF0aC5jb3Mobm9kZS5nZXRBbmdsZSgpKSwgY2x1c3RlckdyYXBoLmdldENlbnRlclkoKSArXG4gICAgICAgICAgICBjbHVzdGVyR3JhcGguZ2V0UmFkaXVzKCkgKiBNYXRoLnNpbihub2RlLmdldEFuZ2xlKCkpKTtcbiAgICB9KTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBQb3N0IFByb2Nlc3Npbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVGhpcyBtZXRob2QgaW1wbGVtZW50cyB0aGUgcG9zdCBwcm9jZXNzaW5nIHN0ZXAgb2YgdGhlIGFsZ29yaXRobSwgd2hpY2hcbiAqIHRyaWVzIHRvIG1pbmltaXplIHRoZSBudW1iZXIgb2YgZWRnZXMgZnVydGhlciB3aXRoIHJlc3BlY3QgdG8gdGhlIGxvY2FsXG4gKiBhZGp1c3RpbmcgYWxnb3JpdGhtIGRlc2NyaWJlZCBieSBIZSBhbmQgU3lrb3JhLlxuICovXG5BVlNERkxheW91dC5wcm90b3R5cGUuaW5pdFBvc3RQcm9jZXNzID0gZnVuY3Rpb24gKClcbntcbiAgICB0aGlzLmF2c2RmQ2lyY2xlLmNhbGN1bGF0ZUVkZ2VDcm9zc2luZ3NPZk5vZGVzKCk7XG5cbiAgICBsZXQgbGlzdCA9IHRoaXMuYXZzZGZDaXJjbGUuZ2V0Tm9kZXMoKTtcblxuICAgIGxpc3Quc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYi5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpIC0gYS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5BVlNERkxheW91dC5wcm90b3R5cGUub25lU3RlcFBvc3RQcm9jZXNzID0gZnVuY3Rpb24gKG5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGN1cnJlbnRDcm9zc2luZ051bWJlciA9IG5vZGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKTtcbiAgICBsZXQgbmV3Q3Jvc3NpbmdOdW1iZXI7XG5cbiAgICBsZXQgbmVpZ2hib3VycyA9IFtdO1xuICAgIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLmFkZEFsbFRvKG5laWdoYm91cnMpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZWlnaGJvdXJzLmxlbmd0aDsgaisrKVxuICAgIHtcbiAgICAgICAgbGV0IG5laWdoYm91ciA9IG5laWdoYm91cnNbal07XG5cbiAgICAgICAgbGV0IG9sZEluZGV4ID0gbm9kZS5nZXRJbmRleCgpO1xuICAgICAgICBsZXQgbmV3SW5kZXggPSAobmVpZ2hib3VyLmdldEluZGV4KCkgKyAxKSAlIHNlbGYuYXZzZGZDaXJjbGUuZ2V0U2l6ZSgpO1xuXG4gICAgICAgIGlmIChvbGRJbmRleCAhPT0gbmV3SW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vZGUuc2V0SW5kZXgobmV3SW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAob2xkSW5kZXggPCBub2RlLmdldEluZGV4KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXggKz0gc2VsZi5hdnNkZkNpcmNsZS5nZXRTaXplKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vZGUuZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgb2xkSW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBzZWxmLmF2c2RmQ2lyY2xlLmdldE9yZGVyKClbaW5kZXggJSBzZWxmLmF2c2RmQ2lyY2xlLmdldFNpemUoKV07XG4gICAgICAgICAgICAgICAgdGVtcC5zZXRJbmRleCgodGVtcC5nZXRJbmRleCgpICsgMSkgJSBzZWxmLmF2c2RmQ2lyY2xlLmdldFNpemUoKSk7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm9kZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCk7XG4gICAgICAgICAgICBuZXdDcm9zc2luZ051bWJlciA9IG5vZGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKTtcblxuICAgICAgICAgICAgaWYgKG5ld0Nyb3NzaW5nTnVtYmVyID49IGN1cnJlbnRDcm9zc2luZ051bWJlcilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxmLmF2c2RmQ2lyY2xlLmxvYWRPbGRJbmRpY2VzT2ZOb2RlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGYuYXZzZGZDaXJjbGUucmVPcmRlclZlcnRpY2VzKCk7XG4gICAgICAgICAgICAgICAgY3VycmVudENyb3NzaW5nTnVtYmVyID0gbmV3Q3Jvc3NpbmdOdW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGTGF5b3V0OyIsIi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIG5vZGUuXG4gKlxuICpcbiAqIENvcHlyaWdodDogaS1WaXMgUmVzZWFyY2ggR3JvdXAsIEJpbGtlbnQgVW5pdmVyc2l0eSwgMjAwNyAtIHByZXNlbnRcbiAqL1xuXG5sZXQgTE5vZGUgPSByZXF1aXJlKCdsYXlvdXQtYmFzZScpLkxOb2RlO1xubGV0IFF1aWNrc29ydCA9IHJlcXVpcmUoJ2xheW91dC1iYXNlJykuUXVpY2tzb3J0O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogSW5pdGlhbGl6YXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBBVlNERk5vZGUoZ20sIHZOb2RlLCBsb2MsIHNpemUpXG57XG4gICAgLy8gQ29uc3RydWN0b3IgMTogQVZTREZOb2RlKGdtLCB2Tm9kZSwgbG9jLCBzaXplKVxuICAgIGlmKGxvYyAhPT0gdW5kZWZpbmVkICYmIHNpemUgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIExOb2RlLmNhbGwodGhpcywgZ20sIHZOb2RlLCBsb2MsIHNpemUpO1xuICAgIH1cbiAgICAvLyBDb25zdHJ1Y3RvciAyOiBBVlNERk5vZGUoZ20sIHZOb2RlKVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIExOb2RlLmNhbGwodGhpcywgZ20sIHZOb2RlKTtcbiAgICB9XG5cblx0Ly8gQW5nbGUgb2YgdGhpcyBub2RlIG9uIHRoZSBvd25lciBjaXJjbGUgaW4gcmFkaWFuc1xuICAgIHRoaXMuYW5nbGUgPSAwO1xuXG4gICAgLy8gSW5kZXggb2YgdGhpcyBub2RlIG9uIHRoZSBvd25lciBjaXJjbGVcbiAgICB0aGlzLmNpcmNsZUluZGV4ID0gLTE7XG5cbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgY3Jvc3NpbmdzIG9mIHRoZSBlZGdlcyB0aGlzIG5vZGUgaXMgaW5jaWRlbnQgdG9cbiAgICB0aGlzLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzID0gLTE7XG5cbiAgICAvLyBXaGV0aGVyIHRoZSBjdXJyZW50IGVkZ2UgY3Jvc3NpbmcgbnVtYmVyIGlzIHZhbGlkIG9yIGl0IG5lZWRzIHRvIGJlXG4gICAgLy8gcmVjYWxjdWxhdGVkXG4gICAgdGhpcy5pc0Nyb3NzaW5nTnVtYmVyVmFsaWQgPSBmYWxzZTtcblxufVxuXG5BVlNERk5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMTm9kZS5wcm90b3R5cGUpO1xuZm9yIChsZXQgcHJvcGVydGllcyBpbiBMTm9kZSlcbntcbiAgICBBVlNERk5vZGVbcHJvcGVydGllc10gPSBMTm9kZVtwcm9wZXJ0aWVzXTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEFjY2Vzc29yIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBjaXJjbGUgdGhpcyBub2RlIGlzIG93bmVkIGJ5LlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRDaXJjbGUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3duZXIoKTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgaW5kZXggb2YgdGhpcyBub2RlIG9uIHRoZSBjaXJjbGUsIGFuZCBzZXRzIHRoZVxuLy8gY3Jvc3NpbmcgbnVtYmVyIGludmFsaWQuIER1ZSB0byB0aGUgaW5kZXggY2hhbmdlIG9mIHRoZSBub2RlOyBpdCBuZWVkcyB0b1xuLy8gYmUgcmVjYWxjdWxhdGVkLlxuQVZTREZOb2RlLnByb3RvdHlwZS5zZXRJbmRleCA9IGZ1bmN0aW9uKGluZGV4KVxue1xuICAgIHRoaXMuY2lyY2xlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmlzQ3Jvc3NpbmdOdW1iZXJWYWxpZCA9IGZhbHNlO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGlzIG5vZGUgaW4gdGhlIG9yZGVyaW5nIG9mIGl0cyBvd25lclxuLy8gY2lyY2xlLiBIZXJlIC0xIG1lYW5zIHRoYXQgdGhlIHZlcnRleCBpcyBub3QgeWV0IHBsYWNlZCBvbiBpdHMgb3duZXJcbi8vY2lyY2xlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uKClcbntcbiAgICByZXR1cm4gdGhpcy5jaXJjbGVJbmRleDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYXJyYXkgb2YgdGhlIG5laWdib3JzIG9mIHRoaXMgbm9kZSBzb3J0ZWQgaW5cbi8vIGFzY2VuZGluZyBvcmRlci5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzU29ydGVkQnlEZWdyZWUgPSBmdW5jdGlvbigpXG57XG4gICAgbGV0ICBzZWxmID0gdGhpcztcblxuICAgIGxldCBuZWlnaGJvcnNMaXN0ID0gW107XG4gICAgc2VsZi5nZXROZWlnaGJvcnNMaXN0KCkuYWRkQWxsVG8obmVpZ2hib3JzTGlzdCk7XG4gICAgbGV0IHJlc3VsdCA9IG5laWdoYm9yc0xpc3QuZmlsdGVyKCBub2RlID0+ICggbm9kZS5nZXRJbmRleCgpID09PSAtMSApICk7XG5cbiAgICByZXN1bHQuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgICByZXR1cm4gYS5nZXREZWdyZWUoKSAtIGIuZ2V0RGVncmVlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBkZWdyZWUgb2YgdGhpcyBub2RlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXREZWdyZWUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuZ2V0RWRnZXMoKS5sZW5ndGg7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgd2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGN1cnJlbnRseSBwbGFjZWQgb24gaXRzXG4vLyBvd25lciBjaXJjbGUuXG5BVlNERk5vZGUucHJvdG90eXBlLmlzT3JkZXJlZCA9ICBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuICh0aGlzLmdldEluZGV4KCkgPiAtMSk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGFuZ2xlIG9mIHRoaXMgbm9kZSB3LnIudC4gaXRzIG93bmVyIGNpcmNsZS4gSGVyZVxuLy8gdGhlIGFuZ2xlIHZhbHVlIGlzIGluIHJhZGlhbi5cbkFWU0RGTm9kZS5wcm90b3R5cGUuc2V0QW5nbGUgPSBmdW5jdGlvbihhbmdsZSlcbntcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGFuZ2xlIG9mIHRoaXMgbm9kZSB3LnIudC4gaXRzIG93bmVyIGNpcmNsZS4gSGVyZVxuLy8gdGhlIGFuZ2xlIHZhbHVlIGlzIGluIHJhZGlhbi5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbigpXG57XG4gICAgcmV0dXJuIHRoaXMuYW5nbGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGluZGV4IGRpZmZlcmVuY2Ugb2YgdGhpcyBub2RlIHdpdGggdGhlIGlucHV0XG4vLyBub2RlLiBOb3RlIHRoYXQgdGhlIGluZGV4IGRpZmZlcmVuY2UgY2Fubm90IGJlIG5lZ2F0aXZlIGlmIGJvdGggbm9kZXMgYXJlXG4vLyBwbGFjZWQgb24gdGhlIGNpcmNsZS4gSGVyZSAtMSBtZWFucyBhdCBsZWFzdCBvbmUgb2YgdGhlIG5vZGVzIGFyZSBub3QgeWV0XG4vLyBwbGFjZWQgb24gdGhlIGNpcmNsZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZSA9ICBmdW5jdGlvbihyZWZOb2RlKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgb3RoZXJJbmRleCA9IHJlZk5vZGUuZ2V0SW5kZXgoKTtcbiAgICBcbiAgICBpZihvdGhlckluZGV4ID09PSAtMSB8fCBzZWxmLmdldEluZGV4KCkgPT09IC0xKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBkaWZmID0gc2VsZi5nZXRJbmRleCgpIC0gb3RoZXJJbmRleDtcblxuICAgIGlmKGRpZmYgPCAwKVxuICAgIHtcbiAgICAgICAgZGlmZiArPSBzZWxmLmdldENpcmNsZSgpLmdldFNpemUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlmZjtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gZmluZHMgdGhlIG51bWJlciBvZiBlZGdlIGNyb3NzaW5ncyBiZXR3ZWVuIHRoZSBlZGdlcyBvZlxuLy8gdGhpcyBub2RlIGFuZCB0aGUgZWRnZXMgb2YgdGhlIGlucHV0IG9uZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0Q3Jvc3NpbmdOdW1iZXJXaXRoTm9kZSA9ICBmdW5jdGlvbihvdGhlck5vZGUpXG57XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCB0b3RhbENyb3NzaW5nID0gMDtcblxuICAgIHNlbGYuZ2V0RWRnZXMoKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbihlZGdlKVxuICAgICAgICB7XG4gICAgICAgICAgICBvdGhlck5vZGUuZ2V0RWRnZXMoKS5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG90aGVyRWRnZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQ3Jvc3NpbmcgKz0gZWRnZS5jcm9zc2luZ1dpdGhFZGdlKG90aGVyRWRnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdG90YWxDcm9zc2luZztcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGVkZ2UgY3Jvc3NpbmdzLiBJZiB0aGUgcHJldmlvdXNseVxuLy8gY2FsY3VsYXRlZCB2YWx1ZSBpcyBub3QgdmFsaWQgZHVlIHRvIGFuIGluZGV4IGNoYW5nZSBvbiB0aGUgY2lyY2xlLCB0aGVuXG4vLyBhIHJlY2FsY3VsYXRpb24gaXMgcGVyZm9ybWVkLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcyA9IGZ1bmN0aW9uKClcbntcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgaWYoIXNlbGYuaXNDcm9zc2luZ051bWJlclZhbGlkKVxuICAgIHtcbiAgICAgICAgc2VsZi5jYWxjdWxhdGVUb3RhbENyb3NzaW5nKCk7XG4gICAgICAgIHNlbGYuaXNDcm9zc2luZ051bWJlclZhbGlkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIHJldHVybiBzZWxmLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogUmVtYWluaW5nIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSB0b3RhbCBudW1iZXIgb2YgY3Jvc3NpbmdzIHRoZSBlZGdlcyBvZiB0aGlzXG4vLyBub2RlIGNhdXNlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5jYWxjdWxhdGVUb3RhbENyb3NzaW5nID0gZnVuY3Rpb24oKVxue1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdGVtcF9jcm9zc2luZ19jb3VudCA9IDA7XG4gICAgbGV0IHRlbXBfZWRnZV9saXN0ID0gW107XG4gICAgdGVtcF9lZGdlX2xpc3QucHVzaC5hcHBseSh0ZW1wX2VkZ2VfbGlzdCwgc2VsZi5nZXRDaXJjbGUoKS5nZXRFZGdlcygpKTtcbiAgICB0ZW1wX2VkZ2VfbGlzdCA9IHRlbXBfZWRnZV9saXN0LmZpbHRlciggKGVsZSkgPT4gc2VsZi5nZXRFZGdlcygpLmluZGV4T2YoZWxlKSA8IDApO1xuXG4gICAgc2VsZi5nZXRFZGdlcygpLmZvckVhY2goXG4gICAgICAgIChlZGdlKSA9PiB0ZW1wX2Nyb3NzaW5nX2NvdW50ICs9IGVkZ2UuY2FsY3VsYXRlVG90YWxDcm9zc2luZ1dpdGhMaXN0KHRlbXBfZWRnZV9saXN0KVxuICAgICk7XG5cbiAgICBzZWxmLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzID0gdGVtcF9jcm9zc2luZ19jb3VudDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZOb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 1 */
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
/* 2 */
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

module.exports = __webpack_require__(4);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var impl = __webpack_require__(2);

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
/* 4 */
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

// cytosscape.js-avsdf REQUIRES avsdf-base library elements
var AVSDFLayout = __webpack_require__(0).AVSDFLayout;
var AVSDFNode = __webpack_require__(0).AVSDFNode;
var AVSDFConstants = __webpack_require__(0).AVSDFConstants;
var PointD = __webpack_require__(0).layoutBase.PointD;
var DimensionD = __webpack_require__(0).layoutBase.DimensionD;

// Cytoscape-extention template requirements
// More details can be found in NPM 'slush-cytoscape-extension' package
var assign = __webpack_require__(1);
var ContinuousLayout = __webpack_require__(6);

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
  randomize: false, // Whether to enable incremental mode
  animate: 'end', // Type of layout animation. The option set is {'during', 'end', false}
  animationDuration: 500, // Duration for animate:end
  nodeSeparation: 60 // How apart the nodes are
};

/**
 *  This is the main class that does all the functionality.
 *  The class is utilized by functions in the continuous-base folder.
 */

var AVSDF = function (_ContinuousLayout) {
  _inherits(AVSDF, _ContinuousLayout);

  function AVSDF(options) {
    _classCallCheck(this, AVSDF);

    // Whether node separation value is used
    var _this = _possibleConstructorReturn(this, (AVSDF.__proto__ || Object.getPrototypeOf(AVSDF)).call(this, assign({}, defaults, options)));

    if (options.nodeSeparation != null) AVSDFConstants.DEFAULT_NODE_SEPARATION = options.nodeSeparation;else AVSDFConstants.DEFAULT_NODE_SEPARATION = defaults.nodeSeparation;
    return _this;
  }

  /**
   *  Initializing AVSDF elements and arranging the nodes of the graph around the circle
   */


  _createClass(AVSDF, [{
    key: 'prerun',
    value: function prerun() {
      var state = this.state; // options object combined with current state

      // Initialize AVSDF elements and their requirements
      var avsdfLayout = this.avsdfLayout = new AVSDFLayout();
      var graphManager = this.graphManager = avsdfLayout.newGraphManager();
      var root = this.root = graphManager.addRoot();
      var nodes = state.nodes;
      var edges = state.edges;

      // Getting nodes of cytoscape and converting it to AVSDF structure
      this.idToLNode = {};
      this.processChildrenList(root, nodes, avsdfLayout);

      // Getting edges of cytoscape and transfering it to GraphManager
      for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        var sourceNode = this.idToLNode[edge.data("source")];
        var targetNode = this.idToLNode[edge.data("target")];
        if (sourceNode !== targetNode && sourceNode.getEdgesBetween(targetNode).length === 0) {
          var e1 = graphManager.add(avsdfLayout.newEdge(), sourceNode, targetNode);
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

  }, {
    key: 'tick',
    value: function tick() {
      var state = this.state;

      // This function is used for getting coordinates from AVSDF elements and passing it to cytoscape
      var positions = this.avsdfLayout.getPositionsData();
      var getPositions = function getPositions(ele, i) {
        if (typeof ele === "number") {
          ele = i;
        }

        var lNode = positions[ele.data('id')];

        return {
          x: lNode.x,
          y: lNode.y
        };
      };
      this.options.eles.nodes().layoutPositions(this, this.options, getPositions);

      if (state.tickIndex >= state.nodes.size()) return true;

      this.avsdfLayout.oneStepPostProcess(this.sortedByDegreeList[state.tickIndex]);
      this.avsdfLayout.updateNodeAngles();
      this.avsdfLayout.updateNodeCoordinates();
    }

    /**
     *  Runs this function after the layout is done ticking
     */

  }, {
    key: 'postrun',
    value: function postrun() {}

    /**
     *  Clean up any object refs that could prevent garbage collection, etc.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      _get(AVSDF.prototype.__proto__ || Object.getPrototypeOf(AVSDF.prototype), 'destroy', this).call(this);
      return this;
    }

    /**
     *  Transition from cytoscape nodes to AVSDF elements
     */

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// general default options for force-directed layout

module.exports = Object.freeze({
  animate: true, // whether to show the layout as it's running; special 'end' value makes the layout animate like a discrete layout
  refresh: 10, // number of ticks per frame; higher is faster but more jerky
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
A generic continuous layout class
*/

var assign = __webpack_require__(1);
var defaults = __webpack_require__(5);
var makeBoundingBox = __webpack_require__(7);

var _require = __webpack_require__(8),
    setInitialPositionState = _require.setInitialPositionState,
    refreshPositions = _require.refreshPositions,
    getNodePositionData = _require.getNodePositionData;

var _require2 = __webpack_require__(9),
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(1);

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
/* 9 */
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

  return !s.infinite && tickIndicatesDone;
};

var multitick = function multitick(state) {
  var onNotDone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nop;
  var onDone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : nop;

  var done = false;
  var s = state;

  for (var i = 0; i < s.refresh; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNjI4NDcyZDhkOTJmOTAzZmM0ZCIsIndlYnBhY2s6Ly8vLi9+L2F2c2RmLWJhc2UvYXZzZGYtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzaWduLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvQVZTREYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvbWFrZS1iYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS90aWNrLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJPYmplY3QiLCJhc3NpZ24iLCJiaW5kIiwidGd0Iiwic3JjcyIsImZvckVhY2giLCJrZXlzIiwic3JjIiwiayIsInJlcXVpcmUiLCJpbXBsIiwicmVnaXN0ZXIiLCJjeXRvc2NhcGUiLCJBVlNERkxheW91dCIsIkFWU0RGTm9kZSIsIkFWU0RGQ29uc3RhbnRzIiwiUG9pbnREIiwibGF5b3V0QmFzZSIsIkRpbWVuc2lvbkQiLCJDb250aW51b3VzTGF5b3V0IiwiaXNGbiIsImZuIiwib3B0Rm4iLCJvcHQiLCJlbGUiLCJkZWZhdWx0cyIsInJlYWR5Iiwic3RvcCIsInJlZnJlc2giLCJmaXQiLCJwYWRkaW5nIiwicmFuZG9taXplIiwiYW5pbWF0ZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwibm9kZVNlcGFyYXRpb24iLCJBVlNERiIsIm9wdGlvbnMiLCJERUZBVUxUX05PREVfU0VQQVJBVElPTiIsInN0YXRlIiwiYXZzZGZMYXlvdXQiLCJncmFwaE1hbmFnZXIiLCJuZXdHcmFwaE1hbmFnZXIiLCJyb290IiwiYWRkUm9vdCIsIm5vZGVzIiwiZWRnZXMiLCJpZFRvTE5vZGUiLCJwcm9jZXNzQ2hpbGRyZW5MaXN0IiwiaSIsImxlbmd0aCIsImVkZ2UiLCJzb3VyY2VOb2RlIiwiZGF0YSIsInRhcmdldE5vZGUiLCJnZXRFZGdlc0JldHdlZW4iLCJlMSIsImFkZCIsIm5ld0VkZ2UiLCJpZCIsImxheW91dCIsInVwZGF0ZU5vZGVDb29yZGluYXRlcyIsInNvcnRlZEJ5RGVncmVlTGlzdCIsImluaXRQb3N0UHJvY2VzcyIsInBvc2l0aW9ucyIsImdldFBvc2l0aW9uc0RhdGEiLCJnZXRQb3NpdGlvbnMiLCJsTm9kZSIsIngiLCJ5IiwiZWxlcyIsImxheW91dFBvc2l0aW9ucyIsInRpY2tJbmRleCIsInNpemUiLCJvbmVTdGVwUG9zdFByb2Nlc3MiLCJ1cGRhdGVOb2RlQW5nbGVzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJ0aGVDaGlsZCIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwidyIsImgiLCJwYXJzZUZsb2F0IiwicGFkZGluZ0xlZnQiLCJwYXJzZUludCIsImNzcyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiaXNOYU4iLCJyZWN0IiwiZnJlZXplIiwidW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nIiwiYm91bmRpbmdCb3giLCJ1bmRlZmluZWQiLCJpbmZpbml0ZSIsIm1ha2VCb3VuZGluZ0JveCIsInNldEluaXRpYWxQb3NpdGlvblN0YXRlIiwicmVmcmVzaFBvc2l0aW9ucyIsImdldE5vZGVQb3NpdGlvbkRhdGEiLCJtdWx0aXRpY2siLCJvIiwicyIsImZpcnN0VXBkYXRlIiwiYW5pbWF0ZUVuZCIsImFuaW1hdGVDb250aW51b3VzbHkiLCJlbCIsIm5hbWUiLCJzY3JhdGNoIiwibCIsInJ1bm5pbmciLCJjdXJyZW50Qm91bmRpbmdCb3giLCJjeSIsIm9uZSIsIm4iLCJwcmVydW4iLCJ1bmdyYWJpZnkiLCJncmFiYmFibGUiLCJub2RlIiwicmVncmFiaWZ5IiwiZ3JhYmlmeSIsInVwZGF0ZUdyYWJTdGF0ZSIsImdyYWJiZWQiLCJvbkdyYWIiLCJ0YXJnZXQiLCJvbkZyZWUiLCJvbkRyYWciLCJwIiwidHAiLCJsaXN0ZW5Ub0dyYWIiLCJvbiIsInVubGlzdGVuVG9HcmFiIiwicmVtb3ZlTGlzdGVuZXIiLCJvbk5vdERvbmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJmcmFtZSIsIm9uRG9uZSIsImVtaXQiLCJzdGFydFRpbWUiLCJEYXRlIiwibm93IiwicG9zdHJ1biIsImJiIiwieDEiLCJ5MSIsIndpZHRoIiwiaGVpZ2h0IiwieDIiLCJ5MiIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImxvY2tlZCIsIm5vcCIsInRpY2siLCJ0aWNrSW5kaWNhdGVzRG9uZSIsImR1cmF0aW9uIiwiZG9uZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FB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QUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxlQUFlLG1CQUFtQjtBQUNsQzs7QUFFQSxxQkFBcUIsbUJBQW1CO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBOztBQUVBLGlCQUFpQixXQUFXO0FBQzVCLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixjQUFjO0FBQ3BDLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyx1QkFBdUI7QUFDekQsb0NBQW9DLHVCQUF1QjtBQUMzRDtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSzs7QUFFOUI7QUFDQTtBQUNBLHlCQUF5QixLQUFLOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFHQUFxRztBQUNyRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUEsNEJBQTRCLGdDQUFnQzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU8sYUFBYTs7QUFFcEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDOztBQUVELE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsUUFBUTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFSLEVBQWpCLEMiLCJmaWxlIjoiY3l0b3NjYXBlLWF2c2RmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlQXZzZGZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlQXZzZGZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNjI4NDcyZDhkOTJmOTAzZmM0ZCIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF2c2RmQmFzZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdnNkZkJhc2VcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmxldCBhdnNkZkJhc2UgPSB7fTtcblxuYXZzZGZCYXNlLmxheW91dEJhc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuYXZzZGZCYXNlLkFWU0RGQ29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmF2c2RmQmFzZS5BVlNERkVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuYXZzZGZCYXNlLkFWU0RGQ2lyY2xlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbmF2c2RmQmFzZS5BVlNERkxheW91dCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5hdnNkZkJhc2UuQVZTREZOb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdnNkZkJhc2U7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0cnVlKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIHt9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmxldCBsYXlvdXRCYXNlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm47XG59O1xuXG5sYXlvdXRCYXNlLkZETGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbmxheW91dEJhc2UuRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbmxheW91dEJhc2UuRkRMYXlvdXRFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG5sYXlvdXRCYXNlLkZETGF5b3V0Tm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xubGF5b3V0QmFzZS5EaW1lbnNpb25EID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5sYXlvdXRCYXNlLkhhc2hNYXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xubGF5b3V0QmFzZS5IYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5sYXlvdXRCYXNlLklHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5sYXlvdXRCYXNlLklNYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5sYXlvdXRCYXNlLkludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbmxheW91dEJhc2UuUG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbmxheW91dEJhc2UuUG9pbnREID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5sYXlvdXRCYXNlLlJhbmRvbVNlZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbmxheW91dEJhc2UuUmVjdGFuZ2xlRCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xubGF5b3V0QmFzZS5UcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbmxheW91dEJhc2UuVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xubGF5b3V0QmFzZS5RdWlja3NvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcbmxheW91dEJhc2UuTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xubGF5b3V0QmFzZS5MR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xubGF5b3V0QmFzZS5MR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbmxheW91dEJhc2UuTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xubGF5b3V0QmFzZS5MR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbmxheW91dEJhc2UuTE5vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbmxheW91dEJhc2UuTGF5b3V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmxheW91dEJhc2UuTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBsYXlvdXRCYXNlO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExheW91dCA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIElHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuZnVuY3Rpb24gRkRMYXlvdXQoKSB7XG4gIExheW91dC5jYWxsKHRoaXMpO1xuXG4gIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gIHRoaXMuc3ByaW5nQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlID0gMy4wICogRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwMDtcbiAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExheW91dCkge1xuICBGRExheW91dFtwcm9wXSA9IExheW91dFtwcm9wXTtcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZKSB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICs9IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDAuODtcbiAgfSBlbHNlIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkpIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgLT0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMS4yO1xuICB9XG5cbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG5cbiAgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OO1xuXG4gIHRoaXMuZ3JpZCA9IFtdO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNJZGVhbEVkZ2VMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcbiAgdmFyIGxjYURlcHRoO1xuICB2YXIgc291cmNlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgc2l6ZU9mU291cmNlSW5MY2E7XG4gIHZhciBzaXplT2ZUYXJnZXRJbkxjYTtcblxuICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldEFsbEVkZ2VzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBlZGdlID0gYWxsRWRnZXNbaV07XG5cbiAgICBlZGdlLmlkZWFsTGVuZ3RoID0gdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG5cbiAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpIHtcbiAgICAgIHNvdXJjZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gICAgICB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBzaXplT2ZTb3VyY2VJbkxjYSA9IGVkZ2UuZ2V0U291cmNlSW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG4gICAgICBzaXplT2ZUYXJnZXRJbkxjYSA9IGVkZ2UuZ2V0VGFyZ2V0SW5MY2EoKS5nZXRFc3RpbWF0ZWRTaXplKCk7XG5cbiAgICAgIGlmICh0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24pIHtcbiAgICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBzaXplT2ZTb3VyY2VJbkxjYSArIHNpemVPZlRhcmdldEluTGNhIC0gMiAqIExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFO1xuICAgICAgfVxuXG4gICAgICBsY2FEZXB0aCA9IGVkZ2UuZ2V0TGNhKCkuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG5cbiAgICAgIGVkZ2UuaWRlYWxMZW5ndGggKz0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAqIEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgKiAoc291cmNlLmdldEluY2x1c2lvblRyZWVEZXB0aCgpICsgdGFyZ2V0LmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGxjYURlcHRoKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMuaW5jcmVtZW50YWwpIHtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UO1xuICB9XG5cbiAgdGhpcy5tYXhJdGVyYXRpb25zID0gTWF0aC5tYXgodGhpcy5nZXRBbGxOb2RlcygpLmxlbmd0aCAqIDUsIHRoaXMubWF4SXRlcmF0aW9ucyk7XG5cbiAgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZCA9IHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG5cbiAgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxFZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsRWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBlZGdlID0gbEVkZ2VzW2ldO1xuXG4gICAgdGhpcy5jYWxjU3ByaW5nRm9yY2UoZWRnZSwgZWRnZS5pZGVhbExlbmd0aCk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24gKGdyaWRVcGRhdGVBbGxvd2VkID0gdHJ1ZSwgZm9yY2VUb05vZGVTdXJyb3VuZGluZ1VwZGF0ZSA9IGZhbHNlKSB7XG4gIHZhciBpLCBqO1xuICB2YXIgbm9kZUEsIG5vZGVCO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgcHJvY2Vzc2VkTm9kZVNldDtcblxuICBpZiAodGhpcy51c2VGUkdyaWRWYXJpYW50KSB7XG4gICAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCkge1xuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc2VkTm9kZVNldCA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGNhbGN1bGF0ZSByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gZWFjaCBub2RlcyBhbmQgaXRzIHN1cnJvdW5kaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgICB0aGlzLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZShub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCwgZ3JpZFVwZGF0ZUFsbG93ZWQsIGZvcmNlVG9Ob2RlU3Vycm91bmRpbmdVcGRhdGUpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcblxuICAgICAgZm9yIChqID0gaSArIDE7IGogPCBsTm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZSA9IGZ1bmN0aW9uIChlZGdlLCBpZGVhbExlbmd0aCkge1xuICB2YXIgc291cmNlTm9kZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gIHZhciB0YXJnZXROb2RlID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3ByaW5nRm9yY2U7XG4gIHZhciBzcHJpbmdGb3JjZVg7XG4gIHZhciBzcHJpbmdGb3JjZVk7XG5cbiAgLy8gVXBkYXRlIGVkZ2UgbGVuZ3RoXG4gIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmIHNvdXJjZU5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIHRhcmdldE5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGhTaW1wbGUoKTtcbiAgfSBlbHNlIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aCgpO1xuXG4gICAgaWYgKGVkZ2UuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIC8vIHR3byBub2RlcyBvdmVybGFwXG4gICAge1xuICAgICAgLy8gY2FsY3VsYXRlIHNlcGFyYXRpb24gYW1vdW50IGluIHggYW5kIHkgZGlyZWN0aW9uc1xuICAgICAgSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50KHJlY3RBLCByZWN0Qiwgb3ZlcmxhcEFtb3VudCwgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDIuMCk7XG5cbiAgICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgICAgcmVwdWxzaW9uRm9yY2VZID0gMiAqIG92ZXJsYXBBbW91bnRbMV07XG5cbiAgICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG5cbiAgICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzXG4gICAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSBjaGlsZHJlbkNvbnN0YW50ICogcmVwdWxzaW9uRm9yY2VZO1xuICAgICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICB9IGVsc2UgLy8gbm8gb3ZlcmxhcFxuICAgIHtcbiAgICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZVxuXG4gICAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJiBub2RlQS5nZXRDaGlsZCgpID09IG51bGwgJiYgbm9kZUIuZ2V0Q2hpbGQoKSA9PSBudWxsKSAvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAgICAgIHtcbiAgICAgICAgICBkaXN0YW5jZVggPSByZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gICAgICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgICAgICB9IGVsc2UgLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgICAgICB7XG4gICAgICAgICAgSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbihyZWN0QSwgcmVjdEIsIGNsaXBQb2ludHMpO1xuXG4gICAgICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICAgICAgZGlzdGFuY2VZID0gY2xpcFBvaW50c1szXSAtIGNsaXBQb2ludHNbMV07XG4gICAgICAgIH1cblxuICAgICAgLy8gTm8gcmVwdWxzaW9uIHJhbmdlLiBGUiBncmlkIHZhcmlhbnQgc2hvdWxkIHRha2UgY2FyZSBvZiB0aGlzLlxuICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpIHtcbiAgICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICogRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgICAgfVxuXG4gICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCkge1xuICAgICAgICBkaXN0YW5jZVkgPSBJTWF0aC5zaWduKGRpc3RhbmNlWSkgKiBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlU3F1YXJlZCA9IGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWTtcbiAgICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cbiAgICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgICAgLy8gUHJvamVjdCBmb3JjZSBvbnRvIHggYW5kIHkgYXhlc1xuICAgICAgcmVwdWxzaW9uRm9yY2VYID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVggLyBkaXN0YW5jZTtcbiAgICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG5cbiAgICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IHJlcHVsc2lvbkZvcmNlWDtcbiAgICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSByZXB1bHNpb25Gb3JjZVk7XG4gICAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IHJlcHVsc2lvbkZvcmNlWTtcbiAgICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBvd25lckdyYXBoO1xuICB2YXIgb3duZXJDZW50ZXJYO1xuICB2YXIgb3duZXJDZW50ZXJZO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgYWJzRGlzdGFuY2VYO1xuICB2YXIgYWJzRGlzdGFuY2VZO1xuICB2YXIgZXN0aW1hdGVkU2l6ZTtcbiAgb3duZXJHcmFwaCA9IG5vZGUuZ2V0T3duZXIoKTtcblxuICBvd25lckNlbnRlclggPSAob3duZXJHcmFwaC5nZXRSaWdodCgpICsgb3duZXJHcmFwaC5nZXRMZWZ0KCkpIC8gMjtcbiAgb3duZXJDZW50ZXJZID0gKG93bmVyR3JhcGguZ2V0VG9wKCkgKyBvd25lckdyYXBoLmdldEJvdHRvbSgpKSAvIDI7XG4gIGRpc3RhbmNlWCA9IG5vZGUuZ2V0Q2VudGVyWCgpIC0gb3duZXJDZW50ZXJYO1xuICBkaXN0YW5jZVkgPSBub2RlLmdldENlbnRlclkoKSAtIG93bmVyQ2VudGVyWTtcbiAgYWJzRGlzdGFuY2VYID0gTWF0aC5hYnMoZGlzdGFuY2VYKSArIG5vZGUuZ2V0V2lkdGgoKSAvIDI7XG4gIGFic0Rpc3RhbmNlWSA9IE1hdGguYWJzKGRpc3RhbmNlWSkgKyBub2RlLmdldEhlaWdodCgpIC8gMjtcblxuICBpZiAobm9kZS5nZXRPd25lcigpID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkgLy8gaW4gdGhlIHJvb3QgZ3JhcGhcbiAgICB7XG4gICAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgICAgaWYgKGFic0Rpc3RhbmNlWCA+IGVzdGltYXRlZFNpemUgfHwgYWJzRGlzdGFuY2VZID4gZXN0aW1hdGVkU2l6ZSkge1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VYID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VYO1xuICAgICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZO1xuICAgICAgfVxuICAgIH0gZWxzZSAvLyBpbnNpZGUgYSBjb21wb3VuZFxuICAgIHtcbiAgICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpIHtcbiAgICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVkgKiB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgICAgfVxuICAgIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKSB7XG4gICAgb3NjaWxhdGluZyA9IE1hdGguYWJzKHRoaXMudG90YWxEaXNwbGFjZW1lbnQgLSB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50KSA8IDI7XG4gIH1cblxuICBjb252ZXJnZWQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50IDwgdGhpcy50b3RhbERpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gdGhpcy50b3RhbERpc3BsYWNlbWVudDtcblxuICByZXR1cm4gY29udmVyZ2VkIHx8IG9zY2lsYXRpbmc7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ICYmICF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgaWYgKHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID09IHRoaXMuYW5pbWF0aW9uUGVyaW9kKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucysrO1xuICAgIH1cbiAgfVxufTtcblxuLy9UaGlzIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gKHdlaWdodCkgZm9yIGFsbCBub2Rlc1xuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5vZGU7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICBub2RlLm5vT2ZDaGlsZHJlbiA9IG5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBGUi1HcmlkIFZhcmlhbnQgUmVwdWxzaW9uIEZvcmNlIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICB2YXIgc2l6ZVggPSAwO1xuICB2YXIgc2l6ZVkgPSAwO1xuXG4gIHNpemVYID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRSaWdodCgpIC0gZ3JhcGguZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc2l6ZVkgPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldEJvdHRvbSgpIC0gZ3JhcGguZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIHZhciBncmlkID0gbmV3IEFycmF5KHNpemVYKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspIHtcbiAgICBncmlkW2ldID0gbmV3IEFycmF5KHNpemVZKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2l6ZVk7IGorKykge1xuICAgICAgZ3JpZFtpXVtqXSA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBncmlkO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFkZE5vZGVUb0dyaWQgPSBmdW5jdGlvbiAodiwgbGVmdCwgdG9wKSB7XG5cbiAgdmFyIHN0YXJ0WCA9IDA7XG4gIHZhciBmaW5pc2hYID0gMDtcbiAgdmFyIHN0YXJ0WSA9IDA7XG4gIHZhciBmaW5pc2hZID0gMDtcblxuICBzdGFydFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS53aWR0aCArIHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc3RhcnRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS5oZWlnaHQgKyB2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnRYOyBpIDw9IGZpbmlzaFg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSBzdGFydFk7IGogPD0gZmluaXNoWTsgaisrKSB7XG4gICAgICB0aGlzLmdyaWRbaV1bal0ucHVzaCh2KTtcbiAgICAgIHYuc2V0R3JpZENvb3JkaW5hdGVzKHN0YXJ0WCwgZmluaXNoWCwgc3RhcnRZLCBmaW5pc2hZKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaTtcbiAgdmFyIG5vZGVBO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuXG4gIHRoaXMuZ3JpZCA9IHRoaXMuY2FsY0dyaWQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcblxuICAvLyBwdXQgYWxsIG5vZGVzIHRvIHByb3BlciBncmlkIGNlbGxzXG4gIGZvciAoaSA9IDA7IGkgPCBsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmFkZE5vZGVUb0dyaWQobm9kZUEsIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRMZWZ0KCksIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXRUb3AoKSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUgPSBmdW5jdGlvbiAobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQsIGdyaWRVcGRhdGVBbGxvd2VkLCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlKSB7XG5cbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiBncmlkVXBkYXRlQWxsb3dlZCB8fCBmb3JjZVRvTm9kZVN1cnJvdW5kaW5nVXBkYXRlKSB7XG4gICAgdmFyIHN1cnJvdW5kaW5nID0gbmV3IFNldCgpO1xuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIG5vZGVCO1xuICAgIHZhciBncmlkID0gdGhpcy5ncmlkO1xuXG4gICAgZm9yICh2YXIgaSA9IG5vZGVBLnN0YXJ0WCAtIDE7IGkgPCBub2RlQS5maW5pc2hYICsgMjsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gbm9kZUEuc3RhcnRZIC0gMTsgaiA8IG5vZGVBLmZpbmlzaFkgKyAyOyBqKyspIHtcbiAgICAgICAgaWYgKCEoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSBncmlkLmxlbmd0aCB8fCBqID49IGdyaWRbMF0ubGVuZ3RoKSkge1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ3JpZFtpXVtqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbm9kZUIgPSBncmlkW2ldW2pdW2tdO1xuXG4gICAgICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgXG4gICAgICAgICAgICAvLyBvciBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSwgc2tpcC5cbiAgICAgICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkgfHwgbm9kZUEgPT0gbm9kZUIpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSByZXB1bHNpb24gZm9yY2UgYmV0d2VlblxuICAgICAgICAgICAgLy8gbm9kZUEgYW5kIG5vZGVCIGhhcyBhbHJlYWR5IGJlZW4gY2FsY3VsYXRlZFxuICAgICAgICAgICAgaWYgKCFwcm9jZXNzZWROb2RlU2V0Lmhhcyhub2RlQikgJiYgIXN1cnJvdW5kaW5nLmhhcyhub2RlQikpIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclgoKSAtIG5vZGVCLmdldENlbnRlclgoKSkgLSAobm9kZUEuZ2V0V2lkdGgoKSAvIDIgKyBub2RlQi5nZXRXaWR0aCgpIC8gMik7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBNYXRoLmFicyhub2RlQS5nZXRDZW50ZXJZKCkgLSBub2RlQi5nZXRDZW50ZXJZKCkpIC0gKG5vZGVBLmdldEhlaWdodCgpIC8gMiArIG5vZGVCLmdldEhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZUEgYW5kIG5vZGVCIFxuICAgICAgICAgICAgICAvLyBpcyBsZXNzIHRoZW4gY2FsY3VsYXRpb24gcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWCA8PSB0aGlzLnJlcHVsc2lvblJhbmdlICYmIGRpc3RhbmNlWSA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy90aGVuIGFkZCBub2RlQiB0byBzdXJyb3VuZGluZyBvZiBub2RlQVxuICAgICAgICAgICAgICAgIHN1cnJvdW5kaW5nLmFkZChub2RlQik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IFsuLi5zdXJyb3VuZGluZ107XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG5vZGVBLnN1cnJvdW5kaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVBLnN1cnJvdW5kaW5nW2ldKTtcbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDAuMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXQ7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBIYXNoTWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBMR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBQb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBUcmFuc2Zvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbnZhciBFbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgSGFzaFNldCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xuXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcbiAgRW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gIC8vTGF5b3V0IFF1YWxpdHk6IDA6cHJvb2YsIDE6ZGVmYXVsdCwgMjpkcmFmdFxuICB0aGlzLmxheW91dFF1YWxpdHkgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBjcmVhdGUgYmVuZHBvaW50cyBhcyBuZWVkZWQgb3Igbm90XG4gIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxuICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIGZyb20gYmVmb3JlIHRvIGFmdGVyIGxheW91dCBub2RlIHBvc2l0aW9uc1xuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgLyoqXHJcbiAgICogV2hldGhlciBvciBub3QgbGVhZiBub2RlcyAobm9uLWNvbXBvdW5kIG5vZGVzKSBhcmUgb2YgdW5pZm9ybSBzaXplcy4gV2hlblxyXG4gICAqIHRoZXkgYXJlLCBib3RoIHNwcmluZyBhbmQgcmVwdWxzaW9uIGZvcmNlcyBiZXR3ZWVuIHR3byBsZWFmIG5vZGVzIGNhbiBiZVxyXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXHJcbiAgICogaW4gbWFqb3Igc3BlZWQtdXAuXHJcbiAgICovXG4gIHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB1c2VkIGZvciBjcmVhdGlvbiBvZiBiZW5kcG9pbnRzIGJ5IHVzaW5nIGR1bW15IG5vZGVzIGFuZCBlZGdlcy5cclxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cclxuICAgKi9cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcbiAgdGhpcy5pc1JlbW90ZVVzZSA9IGZhbHNlO1xuXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XG4gICAgdGhpcy5pc1JlbW90ZVVzZSA9IGlzUmVtb3RlVXNlO1xuICB9XG59XG5cbkxheW91dC5SQU5ET01fU0VFRCA9IDE7XG5cbkxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVtaXR0ZXIucHJvdG90eXBlKTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpIHtcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgcmV0dXJuIG5ldyBMTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKSB7XG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbCB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCB8fCB0aGlzLmdyYXBoTWFuYWdlci5pbmNsdWRlc0ludmFsaWRFZGdlKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnJ1bkxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMudGlsaW5nUHJlTGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQcmVMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaW5pdFBhcmFtZXRlcnMoKTtcbiAgdmFyIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG5cbiAgaWYgKHRoaXMuY2hlY2tMYXlvdXRTdWNjZXNzKCkpIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IHRoaXMubGF5b3V0KCk7XG4gIH1cblxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XG4gICAgLy8gSWYgdGhpcyBpcyBhICdkdXJpbmcnIGxheW91dCBhbmltYXRpb24uIExheW91dCBpcyBub3QgZmluaXNoZWQgeWV0LiBcbiAgICAvLyBXZSBuZWVkIHRvIHBlcmZvcm0gdGhlc2UgaW4gaW5kZXguanMgd2hlbiBsYXlvdXQgaXMgcmVhbGx5IGZpbmlzaGVkLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKSB7XG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgICB0aGlzLmRvUG9zdExheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgfVxuXG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IHRydWU7XG5cbiAgcmV0dXJuIGlzTGF5b3V0U3VjY2Vzc2Z1bGw7XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZG9Qb3N0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAvL2Fzc2VydCAhaXNTdWJMYXlvdXQgOiBcIlNob3VsZCBub3QgYmUgY2FsbGVkIG9uIHN1Yi1sYXlvdXQhXCI7XG4gIC8vIFByb3BhZ2F0ZSBnZW9tZXRyaWMgY2hhbmdlcyB0byB2LWxldmVsIG9iamVjdHNcbiAgaWYgKCF0aGlzLmluY3JlbWVudGFsKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcbiAgfVxuICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSB0YXJnZXQgZ3JhcGggYWNjb3JkaW5nIHRvXHJcbiAqIGNhbGN1bGF0ZWQgbGF5b3V0LlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xuXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxuICAvLyByZW1vdGVseVxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpIHtcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBlZGdlID0gYWxsRWRnZXNbaV07XG4gICAgICAvLyAgICAgIHRoaXMudXBkYXRlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBub2Rlc1xuICAgIHZhciBub2RlO1xuICAgIHZhciBub2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIC8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgdGhpcy51cGRhdGUyKCk7XG4gIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICB2YXIgbm9kZSA9IG9iajtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZGF0ZShub2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBub2RlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZFZGdlID0gZWRnZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkVkZ2UudXBkYXRlKGVkZ2UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZ3JhcGggaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgb2JqZWN0IGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChncmFwaC52R3JhcGhPYmplY3QgIT0gbnVsbCkge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHNldCBhbGwgbGF5b3V0IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB2YWx1ZXNcclxuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KSB7XG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gICAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIH1cblxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpIHtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZmFsc2U7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcbiAgaWYgKG5ld0xlZnRUb3AgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0obmV3IFBvaW50RCgwLCAwKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gY3JlYXRlIGEgdHJhbnNmb3JtYXRpb24gb2JqZWN0IChmcm9tIEVjbGlwc2UgdG8gbGF5b3V0KS4gV2hlbiBhblxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXG4gICAgLy8gZHJhd2luZyBvciB0aGUgcm9vdCBncmFwaCBhdCBnaXZlbiBpbnB1dCBjb29yZGluYXRlIChzb21lIG1hcmdpbnNcbiAgICAvLyBhbHJlYWR5IGluY2x1ZGVkIGluIGNhbGN1bGF0aW9uIG9mIGxlZnQtdG9wKS5cblxuICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgICB2YXIgbGVmdFRvcCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XG5cbiAgICBpZiAobGVmdFRvcCAhPSBudWxsKSB7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xuXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICBpZiAoZ3JhcGggPT0gdW5kZWZpbmVkKSB7XG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XG4gICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpO1xuICAgIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbE5vZGU7XG4gICAgdmFyIGNoaWxkR3JhcGg7XG5cbiAgICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcblxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbCkge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkR3JhcGguZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seShjaGlsZEdyYXBoKTtcbiAgICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcclxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxyXG4gKiAtIFRoZSBncmFwaCBpcyBub3QgZmxhdCBvclxyXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZ2V0RmxhdEZvcmVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZsYXRGb3Jlc3QgPSBbXTtcbiAgdmFyIGlzRm9yZXN0ID0gdHJ1ZTtcblxuICAvLyBRdWljayByZWZlcmVuY2UgZm9yIGFsbCBub2RlcyBpbiB0aGUgZ3JhcGggbWFuYWdlciBhc3NvY2lhdGVkIHdpdGhcbiAgLy8gdGhpcyBsYXlvdXQuIFRoZSBsaXN0IHNob3VsZCBub3QgYmUgY2hhbmdlZC5cbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG5cbiAgLy8gRmlyc3QgYmUgc3VyZSB0aGF0IHRoZSBncmFwaCBpcyBmbGF0XG4gIHZhciBpc0ZsYXQgPSB0cnVlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsTm9kZXNbaV0uZ2V0Q2hpbGQoKSAhPSBudWxsKSB7XG4gICAgICBpc0ZsYXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cbiAgaWYgKCFpc0ZsYXQpIHtcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcbiAgfVxuXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cblxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xuICB2YXIgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciB1blByb2Nlc3NlZE5vZGVzID0gW107XG5cbiAgdW5Qcm9jZXNzZWROb2RlcyA9IHVuUHJvY2Vzc2VkTm9kZXMuY29uY2F0KGFsbE5vZGVzKTtcblxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxuICAvLyBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgYSB0cmVlIG9yIG5vdC4gSWYgaXQgaXMgYSB0cmVlLCBhZGRzIGl0IHRvIHRoZVxuICAvLyBmb3Jlc3QgYW5kIGNvbnRpbnVlZCB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudC5cblxuICB3aGlsZSAodW5Qcm9jZXNzZWROb2Rlcy5sZW5ndGggPiAwICYmIGlzRm9yZXN0KSB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcblxuICAgIC8vIFN0YXJ0IHRoZSBCRlMuIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCB2aXNpdHMgYSBub2RlIGluIGFcbiAgICAvLyBCRlMgbWFubmVyLlxuICAgIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggPiAwICYmIGlzRm9yZXN0KSB7XG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPSBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcikge1xuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpIHtcbiAgICAgICAgICAgIHRvQmVWaXNpdGVkLnB1c2goY3VycmVudE5laWdoYm9yKTtcbiAgICAgICAgICAgIHBhcmVudHMucHV0KGN1cnJlbnROZWlnaGJvciwgY3VycmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaW5jZSB3ZSBoYXZlIHByZXZpb3VzbHkgdmlzaXRlZCB0aGlzIG5laWdoYm9yIGFuZFxuICAgICAgICAgIC8vIHRoaXMgbmVpZ2hib3IgaXMgbm90IHBhcmVudCBvZiBjdXJyZW50Tm9kZSwgZ2l2ZW5cbiAgICAgICAgICAvLyBncmFwaCBjb250YWlucyBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB0cmVlLCBoZW5jZVxuICAgICAgICAgIC8vIGl0IGlzIG5vdCBhIGZvcmVzdC5cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgaXNGb3Jlc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgYSB0cmVlLiBFbXB0eVxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXG4gICAgaWYgKCFpc0ZvcmVzdCkge1xuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xuICAgIH1cbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICAgIHZpc2l0ZWQuYWRkQWxsVG8odGVtcCk7XG4gICAgICAgIGZsYXRGb3Jlc3QucHVzaCh0ZW1wKTtcbiAgICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XG4gICAgICAgIC8vdW5Qcm9jZXNzZWROb2Rlcy5yZW1vdmVBbGwodmlzaXRlZCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgICAgdmFyIGluZGV4ID0gdW5Qcm9jZXNzZWROb2Rlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgICAgICAgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gZmxhdEZvcmVzdDtcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXHJcbiAqIGZvciB0aGUgZ2l2ZW4gZWRnZSAob25lIHBlciBiZW5kcG9pbnQpLiBUaGUgZXhpc3RpbmcgbC1sZXZlbCBzdHJ1Y3R1cmVcclxuICogaXMgdXBkYXRlZCBhY2NvcmRpbmdseS5cclxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpIHtcbiAgdmFyIGR1bW15Tm9kZXMgPSBbXTtcbiAgdmFyIHByZXYgPSBlZGdlLnNvdXJjZTtcblxuICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XG4gICAgZHVtbXlOb2RlLnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKTtcblxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBlZGdlIGJldHdlZW4gcHJldiBhbmQgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZHVtbXlOb2RlKTtcblxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XG4gICAgcHJldiA9IGR1bW15Tm9kZTtcbiAgfVxuXG4gIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGVkZ2UudGFyZ2V0KTtcblxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMucHV0KGVkZ2UsIGR1bW15Tm9kZXMpO1xuXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXG4gIGlmIChlZGdlLmlzSW50ZXJHcmFwaCgpKSB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICB9XG4gIC8vIGVsc2UsIHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGdyYXBoXG4gIGVsc2Uge1xuICAgICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICAgIH1cblxuICByZXR1cm4gZHVtbXlOb2Rlcztcbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXHJcbiAqIGF0IGwtbGV2ZWwuXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgZWRnZXMgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMua2V5U2V0KCkuY29uY2F0KGVkZ2VzKTtcblxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgdmFyIGxFZGdlID0gZWRnZXNba107XG5cbiAgICBpZiAobEVkZ2UuYmVuZHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGR1bW15Tm9kZSA9IHBhdGhbaV07XG4gICAgICAgIHZhciBwID0gbmV3IFBvaW50RChkdW1teU5vZGUuZ2V0Q2VudGVyWCgpLCBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcblxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xuICAgICAgICBlYnAueCA9IHAueDtcbiAgICAgICAgZWJwLnkgPSBwLnk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MCkge1xuICAgICAgdmFyIG1pblZhbHVlID0gZGVmYXVsdFZhbHVlIC8gbWluRGl2O1xuICAgICAgdmFsdWUgLT0gKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwICogKDUwIC0gc2xpZGVyVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF4VmFsdWUgPSBkZWZhdWx0VmFsdWUgKiBtYXhNdWw7XG4gICAgICB2YWx1ZSArPSAobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTAgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBhLCBiO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKSB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XG4gICAgICBiID0gLTggKiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgKiBzbGlkZXJWYWx1ZSArIGI7XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcclxuICogdGhhdCB0aGUgZ2l2ZW4gbm9kZXMgZm9ybSBhIHRyZWUgaW4gdGhlbXNlbHZlcy5cclxuICovXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2Rlcykge1xuICB2YXIgbGlzdCA9IFtdO1xuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xuXG4gIHZhciByZW1vdmVkTm9kZXMgPSBbXTtcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgZm91bmRDZW50ZXIgPSBmYWxzZTtcbiAgdmFyIGNlbnRlck5vZGUgPSBudWxsO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpIHtcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG4gICAgdmFyIGRlZ3JlZSA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKTtcbiAgICByZW1haW5pbmdEZWdyZWVzLnB1dChub2RlLCBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCkpO1xuXG4gICAgaWYgKGRlZ3JlZSA9PSAxKSB7XG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcblxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKSB7XG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xuICAgIHRlbXBMaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBub2RlID0gbGlzdFtpXTtcblxuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKG5vZGUpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmVpZ2hib3VycyA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhuZWlnaGJvdXJzLnNldCkuZm9yRWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICB2YXIgbmVpZ2hib3VyID0gbmVpZ2hib3Vycy5zZXRbal07XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaW5kZXhPZihuZWlnaGJvdXIpIDwgMCkge1xuICAgICAgICAgIHZhciBvdGhlckRlZ3JlZSA9IHJlbWFpbmluZ0RlZ3JlZXMuZ2V0KG5laWdoYm91cik7XG4gICAgICAgICAgdmFyIG5ld0RlZ3JlZSA9IG90aGVyRGVncmVlIC0gMTtcblxuICAgICAgICAgIGlmIChuZXdEZWdyZWUgPT0gMSkge1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgICBjZW50ZXJOb2RlID0gbGlzdFswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VudGVyTm9kZTtcbn07XG5cbi8qKlxyXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXHJcbiAqIHRoaXMgc2V0dGVyIGZ1bmN0aW9uIGdyYW50cyBhY2Nlc3MgdG8gY2hhbmdlIHRoZSBjdXJyZW50bHkgYmVpbmcgdXNlZCBncmFwaCBtYW5hZ2VyXHJcbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5zZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoZ20pIHtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gTGF5b3V0Q29uc3RhbnRzKCkge31cblxuLyoqXHJcbiAqIExheW91dCBRdWFsaXR5XHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWSA9IDE7XG5MYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSA9IDI7XG5cbi8qKlxyXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcclxuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEID0gZmFsc2U7XG4vL0xheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUID0gdHJ1ZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUID0gZmFsc2U7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EID0gNTA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyA9IGZhbHNlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogR2VuZXJhbCBvdGhlciBjb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxyXG4gKiBNYXJnaW5zIG9mIGEgZ3JhcGggdG8gYmUgYXBwbGllZCBvbiBib3VkaW5nIHJlY3RhbmdsZSBvZiBpdHMgY29udGVudHMuIFdlXHJcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBUEhfTUFSR0lOID0gMTU7XG5cbi8qXHJcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9ucyBvciBub3RcclxuICovXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XG5cbi8qXHJcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgPSA0MDtcblxuLypcclxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cclxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfSEFMRl9TSVpFID0gTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgLyAyO1xuXG4vKlxyXG4gKiBFbXB0eSBjb21wb3VuZCBub2RlIHNpemUuIFdoZW4gYSBjb21wb3VuZCBub2RlIGlzIGVtcHR5LCBpdHMgYm90aFxyXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxyXG4gKi9cbkxheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkUgPSA0MDtcblxuLypcclxuICogTWluaW11bSBsZW5ndGggdGhhdCBhbiBlZGdlIHNob3VsZCB0YWtlIGR1cmluZyBsYXlvdXRcclxuICovXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcblxuLypcclxuICogV29ybGQgYm91bmRhcmllcyB0aGF0IGxheW91dCBvcGVyYXRlcyBvblxyXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSA9IDEwMDAwMDA7XG5cbi8qXHJcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkgLyAxMDAwO1xuXG4vKlxyXG4gKiBDb29yZGluYXRlcyBvZiB0aGUgd29ybGQgY2VudGVyXHJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xuICB0aGlzLm1hcCA9IHt9O1xuICB0aGlzLmtleXMgPSBbXTtcbn1cblxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkge1xuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gIH1cbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5rZXlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gVW5pcXVlSURHZW5lcmV0b3IoKSB7fVxuXG5VbmlxdWVJREdlbmVyZXRvci5sYXN0SUQgPSAwO1xuXG5VbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKFVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlKG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIGlmIChvYmoudW5pcXVlSUQgIT0gbnVsbCkge1xuICAgIHJldHVybiBvYmoudW5pcXVlSUQ7XG4gIH1cbiAgb2JqLnVuaXF1ZUlEID0gVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nKCk7XG4gIFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCsrO1xuICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xufTtcblxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmIChpZCA9PSBudWxsKSBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcbiAgcmV0dXJuIFwiT2JqZWN0I1wiICsgaWQgKyBcIlwiO1xufTtcblxuVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGFyZztcbiAgcmV0dXJuIGFyZyA9PSBudWxsIHx8IHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxuZnVuY3Rpb24gTEdyYXBoTWFuYWdlcihsYXlvdXQpIHtcbiAgTEdyYXBoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxuICB0aGlzLmxheW91dCA9IGxheW91dDtcblxuICB0aGlzLmdyYXBocyA9IFtdO1xuICB0aGlzLmVkZ2VzID0gW107XG59XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuZ3JhcGggPSB0aGlzLmxheW91dC5uZXdHcmFwaCgpO1xuICB2YXIgbm5vZGUgPSB0aGlzLmxheW91dC5uZXdOb2RlKG51bGwpO1xuICB2YXIgcm9vdCA9IHRoaXMuYWRkKG5ncmFwaCwgbm5vZGUpO1xuICB0aGlzLnNldFJvb3RHcmFwaChyb290KTtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5ld0dyYXBoLCBwYXJlbnROb2RlLCBuZXdFZGdlLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xuXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XG4gICAgfVxuXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBwYXJlbnROb2RlLmNoaWxkID0gbmV3R3JhcGg7XG5cbiAgICByZXR1cm4gbmV3R3JhcGg7XG4gIH0gZWxzZSB7XG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXG4gICAgdGFyZ2V0Tm9kZSA9IG5ld0VkZ2U7XG4gICAgc291cmNlTm9kZSA9IHBhcmVudE5vZGU7XG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xuICAgIHZhciBzb3VyY2VHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICB2YXIgdGFyZ2V0R3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICBpZiAoIShzb3VyY2VHcmFwaCAhPSBudWxsICYmIHNvdXJjZUdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICghKHRhcmdldEdyYXBoICE9IG51bGwgJiYgdGFyZ2V0R3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlR3JhcGggPT0gdGFyZ2V0R3JhcGgpIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XG5cbiAgICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcbiAgICAgIGlmICh0aGlzLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPiAtMSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gc291cmNlIGFuZCB0YXJnZXQgaW5jaWRlbmN5IGxpc3RzXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZSAhPSBudWxsICYmIG5ld0VkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICBuZXdFZGdlLnNvdXJjZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgbmV3RWRnZS50YXJnZXQuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgcmV0dXJuIG5ld0VkZ2U7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xuICBpZiAobE9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IGxPYmo7XG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XG4gICAgfVxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IGdyYXBoLnBhcmVudCAhPSBudWxsICYmIGdyYXBoLnBhcmVudC5ncmFwaE1hbmFnZXIgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xuXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gdGhlbiB0aGUgbm9kZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgbm9kZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgbm9kZXNUb0JlUmVtb3ZlZCA9IG5vZGVzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuXG4gICAgdmFyIG5vZGU7XG4gICAgcyA9IG5vZGVzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICBub2RlID0gbm9kZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxuICAgIGlmIChncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCkge1xuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIGVkZ2UgPSBsT2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0R3JhcGhzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaHM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbCkge1xuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICB0aGlzLmFsbE5vZGVzID0gbm9kZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZXNldEFsbE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG51bGw7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbCkge1xuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQoZ3JhcGhzW2ldLmdldEVkZ2VzKCkpO1xuICAgIH1cblxuICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRoaXMuZWRnZXMpO1xuXG4gICAgdGhpcy5hbGxFZGdlcyA9IGVkZ2VMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbEVkZ2VzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpIHtcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG5vZGVMaXN0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucm9vdEdyYXBoO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0Um9vdEdyYXBoID0gZnVuY3Rpb24gKGdyYXBoKSB7XG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgfVxuXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKSB7XG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sYXlvdXQ7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpIHtcbiAgaWYgKCEoZmlyc3ROb2RlICE9IG51bGwgJiYgc2Vjb25kTm9kZSAhPSBudWxsKSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSXMgc2Vjb25kIG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIGZpcnN0IG9uZT9cbiAgdmFyIG93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcbiAgdmFyIHBhcmVudE5vZGU7XG5cbiAgZG8ge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuICAvLyBJcyBmaXJzdCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBzZWNvbmQgb25lP1xuICBvd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gIGRvIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IGZpcnN0Tm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNMb3dlc3RDb21tb25BbmNlc3RvcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgc291cmNlTm9kZTtcbiAgdmFyIHRhcmdldE5vZGU7XG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcblxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XG4gICAgZWRnZS5sY2EgPSBudWxsO1xuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSkge1xuICAgICAgZWRnZS5sY2EgPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzb3VyY2VBbmNlc3RvckdyYXBoID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuXG4gICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gc291cmNlQW5jZXN0b3JHcmFwaCkge1xuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gZWRnZS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc291cmNlQW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSkge1xuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpIHtcbiAgICByZXR1cm4gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIH1cbiAgdmFyIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuXG4gIGRvIHtcbiAgICBpZiAoZmlyc3RPd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGRvIHtcbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaCkge1xuICAgICAgICByZXR1cm4gc2Vjb25kT3duZXJHcmFwaDtcbiAgICAgIH1cbiAgICAgIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmRPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZpcnN0T3duZXJHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24gKGdyYXBoLCBkZXB0aCkge1xuICBpZiAoZ3JhcGggPT0gbnVsbCAmJiBkZXB0aCA9PSBudWxsKSB7XG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcbiAgICBkZXB0aCA9IDE7XG4gIH1cbiAgdmFyIG5vZGU7XG5cbiAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGUuaW5jbHVzaW9uVHJlZURlcHRoID0gZGVwdGg7XG5cbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcblxuICB2YXIgcyA9IHRoaXMuZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIGVkZ2UgPSB0aGlzLmVkZ2VzW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNPbmVBbmNlc3Rvck9mT3RoZXIoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMR3JhcGhPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIElHZW9tZXRyeSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgSU1hdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMudGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzSW50ZXJHcmFwaCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0O1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldEJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNvdXJjZUluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldEluTGNhID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gbm9kZSkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gIH1cbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpIHtcbiAgdmFyIG90aGVyRW5kID0gdGhpcy5nZXRPdGhlckVuZChub2RlKTtcbiAgdmFyIHJvb3QgPSBncmFwaC5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaCkge1xuICAgICAgcmV0dXJuIG90aGVyRW5kO1xuICAgIH1cblxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG90aGVyRW5kID0gb3RoZXJFbmQuZ2V0T3duZXIoKS5nZXRQYXJlbnQoKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gSUdlb21ldHJ5LmdldEludGVyc2VjdGlvbih0aGlzLnRhcmdldC5nZXRSZWN0KCksIHRoaXMuc291cmNlLmdldFJlY3QoKSwgY2xpcFBvaW50Q29vcmRpbmF0ZXMpO1xuXG4gIGlmICghdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpIHtcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xuICAgIHRoaXMubGVuZ3RoWSA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzFdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbM107XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMCkge1xuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKSB7XG4gICAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQodGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbiAgfVxufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZW5ndGhYID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWCgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWCgpO1xuICB0aGlzLmxlbmd0aFkgPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJZKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApIHtcbiAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhZKSA8IDEuMCkge1xuICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgfVxuXG4gIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExFZGdlO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gTEdyYXBoT2JqZWN0KHZHcmFwaE9iamVjdCkge1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBJR2VvbWV0cnkoKSB7fVxuXG5JR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBvdmVybGFwQW1vdW50LCBzZXBhcmF0aW9uQnVmZmVyKSB7XG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcbiAgSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucyk7XG4gIG92ZXJsYXBBbW91bnRbMF0gPSBNYXRoLm1pbihyZWN0QS5nZXRSaWdodCgpLCByZWN0Qi5nZXRSaWdodCgpKSAtIE1hdGgubWF4KHJlY3RBLngsIHJlY3RCLngpO1xuICBvdmVybGFwQW1vdW50WzFdID0gTWF0aC5taW4ocmVjdEEuZ2V0Qm90dG9tKCksIHJlY3RCLmdldEJvdHRvbSgpKSAtIE1hdGgubWF4KHJlY3RBLnksIHJlY3RCLnkpO1xuICAvLyB1cGRhdGUgdGhlIG92ZXJsYXBwaW5nIGFtb3VudHMgZm9yIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gIGlmIChyZWN0QS5nZXRYKCkgPD0gcmVjdEIuZ2V0WCgpICYmIHJlY3RBLmdldFJpZ2h0KCkgPj0gcmVjdEIuZ2V0UmlnaHQoKSkge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4ocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpLCByZWN0QS5nZXRSaWdodCgpIC0gcmVjdEIuZ2V0UmlnaHQoKSk7XG4gIH0gZWxzZSBpZiAocmVjdEIuZ2V0WCgpIDw9IHJlY3RBLmdldFgoKSAmJiByZWN0Qi5nZXRSaWdodCgpID49IHJlY3RBLmdldFJpZ2h0KCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKHJlY3RBLmdldFgoKSAtIHJlY3RCLmdldFgoKSwgcmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpO1xuICB9XG4gIGlmIChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpICYmIHJlY3RBLmdldEJvdHRvbSgpID49IHJlY3RCLmdldEJvdHRvbSgpKSB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbihyZWN0Qi5nZXRZKCkgLSByZWN0QS5nZXRZKCksIHJlY3RBLmdldEJvdHRvbSgpIC0gcmVjdEIuZ2V0Qm90dG9tKCkpO1xuICB9IGVsc2UgaWYgKHJlY3RCLmdldFkoKSA8PSByZWN0QS5nZXRZKCkgJiYgcmVjdEIuZ2V0Qm90dG9tKCkgPj0gcmVjdEEuZ2V0Qm90dG9tKCkpIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSwgcmVjdEIuZ2V0Qm90dG9tKCkgLSByZWN0QS5nZXRCb3R0b20oKSk7XG4gIH1cblxuICAvLyBmaW5kIHNsb3BlIG9mIHRoZSBsaW5lIHBhc3NlcyB0d28gY2VudGVyc1xuICB2YXIgc2xvcGUgPSBNYXRoLmFicygocmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAvIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcbiAgLy8gaWYgY2VudGVycyBhcmUgb3ZlcmxhcHBlZFxuICBpZiAocmVjdEIuZ2V0Q2VudGVyWSgpID09IHJlY3RBLmdldENlbnRlclkoKSAmJiByZWN0Qi5nZXRDZW50ZXJYKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWCgpKSB7XG4gICAgLy8gYXNzdW1lIHRoZSBzbG9wZSBpcyAxICg0NSBkZWdyZWUpXG4gICAgc2xvcGUgPSAxLjA7XG4gIH1cblxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcbiAgdmFyIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzFdIC8gc2xvcGU7XG4gIGlmIChvdmVybGFwQW1vdW50WzBdIDwgbW92ZUJ5WCkge1xuICAgIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzBdO1xuICB9IGVsc2Uge1xuICAgIG1vdmVCeVkgPSBvdmVybGFwQW1vdW50WzFdO1xuICB9XG4gIC8vIHJldHVybiBoYWxmIHRoZSBhbW91bnQgc28gdGhhdCBpZiBlYWNoIHJlY3RhbmdsZSBpcyBtb3ZlZCBieSB0aGVzZVxuICAvLyBhbW91bnRzIGluIG9wcG9zaXRlIGRpcmVjdGlvbnMsIG92ZXJsYXAgd2lsbCBiZSByZXNvbHZlZFxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKG1vdmVCeVggLyAyICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSAtMSAqIGRpcmVjdGlvbnNbMV0gKiAobW92ZUJ5WSAvIDIgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbn07XG5cbklHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpIHtcbiAgaWYgKHJlY3RBLmdldENlbnRlclgoKSA8IHJlY3RCLmdldENlbnRlclgoKSkge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gMTtcbiAgfVxuXG4gIGlmIChyZWN0QS5nZXRDZW50ZXJZKCkgPCByZWN0Qi5nZXRDZW50ZXJZKCkpIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gLTE7XG4gIH0gZWxzZSB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IDE7XG4gIH1cbn07XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgcmVzdWx0KSB7XG4gIC8vcmVzdWx0WzAtMV0gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QSwgcmVzdWx0WzItM10gd2lsbCBjb250YWluIGNsaXBQb2ludCBvZiByZWN0QlxuICB2YXIgcDF4ID0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDF5ID0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICB2YXIgcDJ4ID0gcmVjdEIuZ2V0Q2VudGVyWCgpO1xuICB2YXIgcDJ5ID0gcmVjdEIuZ2V0Q2VudGVyWSgpO1xuXG4gIC8vaWYgdHdvIHJlY3RhbmdsZXMgaW50ZXJzZWN0LCB0aGVuIGNsaXBwaW5nIHBvaW50cyBhcmUgY2VudGVyc1xuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgcmVzdWx0WzFdID0gcDF5O1xuICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RBXG4gIHZhciB0b3BMZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QXkgPSByZWN0QS5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRBeSA9IHJlY3RBLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhBID0gcmVjdEEuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QSA9IHJlY3RBLmdldEhlaWdodEhhbGYoKTtcbiAgLy92YXJpYWJsZXMgZm9yIHJlY3RCXG4gIHZhciB0b3BMZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciB0b3BMZWZ0QnkgPSByZWN0Qi5nZXRZKCk7XG4gIHZhciB0b3BSaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIGJvdHRvbUxlZnRCeSA9IHJlY3RCLmdldEJvdHRvbSgpO1xuICB2YXIgYm90dG9tUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBoYWxmV2lkdGhCID0gcmVjdEIuZ2V0V2lkdGhIYWxmKCk7XG4gIHZhciBoYWxmSGVpZ2h0QiA9IHJlY3RCLmdldEhlaWdodEhhbGYoKTtcbiAgLy9mbGFnIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnRzIGFyZSBmb3VuZFxuICB2YXIgY2xpcFBvaW50QUZvdW5kID0gZmFsc2U7XG4gIHZhciBjbGlwUG9pbnRCRm91bmQgPSBmYWxzZTtcblxuICAvLyBsaW5lIGlzIHZlcnRpY2FsXG4gIGlmIChwMXggPT0gcDJ4KSB7XG4gICAgaWYgKHAxeSA+IHAyeSkge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAocDF5IDwgcDJ5KSB7XG4gICAgICByZXN1bHRbMF0gPSBwMXg7XG4gICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90IGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICAvLyBsaW5lIGlzIGhvcml6b250YWxcbiAgZWxzZSBpZiAocDF5ID09IHAyeSkge1xuICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHAxeCA8IHAyeCkge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL25vdCB2YWxpZCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9zbG9wZXMgb2YgcmVjdEEncyBhbmQgcmVjdEIncyBkaWFnb25hbHNcbiAgICAgIHZhciBzbG9wZUEgPSByZWN0QS5oZWlnaHQgLyByZWN0QS53aWR0aDtcbiAgICAgIHZhciBzbG9wZUIgPSByZWN0Qi5oZWlnaHQgLyByZWN0Qi53aWR0aDtcblxuICAgICAgLy9zbG9wZSBvZiBsaW5lIGJldHdlZW4gY2VudGVyIG9mIHJlY3RBIGFuZCBjZW50ZXIgb2YgcmVjdEJcbiAgICAgIHZhciBzbG9wZVByaW1lID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4KTtcbiAgICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkE7XG4gICAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25CO1xuICAgICAgdmFyIHRlbXBQb2ludEF4O1xuICAgICAgdmFyIHRlbXBQb2ludEF5O1xuICAgICAgdmFyIHRlbXBQb2ludEJ4O1xuICAgICAgdmFyIHRlbXBQb2ludEJ5O1xuXG4gICAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUFcbiAgICAgIGlmICgtc2xvcGVBID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAxeCA+IHAyeCkge1xuICAgICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsb3BlQSA9PSBzbG9wZVByaW1lKSB7XG4gICAgICAgIGlmIChwMXggPiBwMngpIHtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2RldGVybWluZSB3aGV0aGVyIGNsaXBwaW5nIHBvaW50IGlzIHRoZSBjb3JuZXIgb2Ygbm9kZUJcbiAgICAgIGlmICgtc2xvcGVCID09IHNsb3BlUHJpbWUpIHtcbiAgICAgICAgaWYgKHAyeCA+IHAxeCkge1xuICAgICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNsb3BlQiA9PSBzbG9wZVByaW1lKSB7XG4gICAgICAgIGlmIChwMnggPiBwMXgpIHtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2lmIGJvdGggY2xpcHBpbmcgcG9pbnRzIGFyZSBjb3JuZXJzXG4gICAgICBpZiAoY2xpcFBvaW50QUZvdW5kICYmIGNsaXBQb2ludEJGb3VuZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vZGV0ZXJtaW5lIENhcmRpbmFsIERpcmVjdGlvbiBvZiByZWN0YW5nbGVzXG4gICAgICBpZiAocDF4ID4gcDJ4KSB7XG4gICAgICAgIGlmIChwMXkgPiBwMnkpIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocDF5ID4gcDJ5KSB7XG4gICAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDEpO1xuICAgICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCA0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9jYWxjdWxhdGUgY2xpcHBpbmcgUG9pbnQgaWYgaXQgaXMgbm90IGZvdW5kIGJlZm9yZVxuICAgICAgaWYgKCFjbGlwUG9pbnRBRm91bmQpIHtcbiAgICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcbiAgICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgLWhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbVJpZ2h0QXg7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIGhhbGZXaWR0aEEgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRlbXBQb2ludEF5ID0gYm90dG9tTGVmdEF5O1xuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyBoYWxmSGVpZ2h0QSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21MZWZ0QXg7XG4gICAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIC1oYWxmV2lkdGhBICogc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFjbGlwUG9pbnRCRm91bmQpIHtcbiAgICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkIpIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHRvcExlZnRCeTtcbiAgICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgLWhhbGZIZWlnaHRCIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIGhhbGZXaWR0aEIgKiBzbG9wZVByaW1lO1xuICAgICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRlbXBQb2ludEJ5ID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyBoYWxmSGVpZ2h0QiAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21MZWZ0Qng7XG4gICAgICAgICAgICB0ZW1wUG9pbnRCeSA9IHAyeSArIC1oYWxmV2lkdGhCICogc2xvcGVQcmltZTtcbiAgICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uID0gZnVuY3Rpb24gKHNsb3BlLCBzbG9wZVByaW1lLCBsaW5lKSB7XG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xuICB9XG59O1xuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKHMxLCBzMiwgZjEsIGYyKSB7XG4gIGlmIChmMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yKHMxLCBzMiwgZjEpO1xuICB9XG4gIHZhciB4MSA9IHMxLng7XG4gIHZhciB5MSA9IHMxLnk7XG4gIHZhciB4MiA9IHMyLng7XG4gIHZhciB5MiA9IHMyLnk7XG4gIHZhciB4MyA9IGYxLng7XG4gIHZhciB5MyA9IGYxLnk7XG4gIHZhciB4NCA9IGYyLng7XG4gIHZhciB5NCA9IGYyLnk7XG4gIHZhciB4LCB5OyAvLyBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXG4gIHZhciBkZW5vbTtcblxuICBhMSA9IHkyIC0geTE7XG4gIGIxID0geDEgLSB4MjtcbiAgYzEgPSB4MiAqIHkxIC0geDEgKiB5MjsgLy8geyBhMSp4ICsgYjEqeSArIGMxID0gMCBpcyBsaW5lIDEgfVxuXG4gIGEyID0geTQgLSB5MztcbiAgYjIgPSB4MyAtIHg0O1xuICBjMiA9IHg0ICogeTMgLSB4MyAqIHk0OyAvLyB7IGEyKnggKyBiMip5ICsgYzIgPSAwIGlzIGxpbmUgMiB9XG5cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcblxuICBpZiAoZGVub20gPT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgeCA9IChiMSAqIGMyIC0gYjIgKiBjMSkgLyBkZW5vbTtcbiAgeSA9IChhMiAqIGMxIC0gYTEgKiBjMikgLyBkZW5vbTtcblxuICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IENsYXNzIENvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qKlxyXG4gKiBTb21lIHVzZWZ1bCBwcmUtY2FsY3VsYXRlZCBjb25zdGFudHNcclxuICovXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5UV09fUEkgPSAyLjAgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcblxubW9kdWxlLmV4cG9ydHMgPSBJR2VvbWV0cnk7XG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gSU1hdGgoKSB7fVxuXG4vKipcclxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgc2lnbiBvZiB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqL1xuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAodmFsdWUgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG5JTWF0aC5mbG9vciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xufTtcblxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJTWF0aDtcblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTEdyYXBoT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBJbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBMTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIExFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZWN0YW5nbGVEID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgUG9pbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciBMaW5rZWRMaXN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG5cbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ub2RlcyA9IFtdO1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XG4gIH0gZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xuICB9XG59XG5cbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ub2Rlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxlZnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yaWdodDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy50b3A7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcbiAgICB9XG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiB0aGlzLmdldE5vZGVzKCkuaW5kZXhPZih0YXJnZXROb2RlKSA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gc2V0IHNvdXJjZSBhbmQgdGFyZ2V0XG4gICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgIC8vIHNldCBhcyBpbnRyYS1ncmFwaCBlZGdlXG4gICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcblxuICAgIC8vIGFkZCB0byBncmFwaCBlZGdlIGxpc3RcbiAgICB0aGlzLmdldEVkZ2VzKCkucHVzaChuZXdFZGdlKTtcblxuICAgIC8vIGFkZCB0byBpbmNpZGVuY3kgbGlzdHNcbiAgICBzb3VyY2VOb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICBpZiAodGFyZ2V0Tm9kZSAhPSBzb3VyY2VOb2RlKSB7XG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VkZ2U7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbm9kZSA9IG9iajtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG5cbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaCkge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJiBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKSB7XG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG4gIH1cblxuICAvLyBEbyB3ZSBoYXZlIGFueSBub2RlcyBpbiB0aGlzIGdyYXBoP1xuICBpZiAodG9wID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH0gZWxzZSB7XG4gICAgbWFyZ2luID0gdGhpcy5tYXJnaW47XG4gIH1cblxuICB0aGlzLmxlZnQgPSBsZWZ0IC0gbWFyZ2luO1xuICB0aGlzLnRvcCA9IHRvcCAtIG1hcmdpbjtcblxuICAvLyBBcHBseSB0aGUgbWFyZ2lucyBhbmQgcmV0dXJuIHRoZSByZXN1bHRcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKHJlY3Vyc2l2ZSkge1xuICAvLyBjYWxjdWxhdGUgYm91bmRzXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbCkge1xuICAgICAgbE5vZGUudXBkYXRlQm91bmRzKCk7XG4gICAgfVxuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKSB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xuICB9XG5cbiAgaWYgKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCkge1xuICAgIG1hcmdpbiA9IG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0O1xuICB9IGVsc2Uge1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XG59O1xuXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKSB7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcblxuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVMZWZ0ID0gbE5vZGUuZ2V0TGVmdCgpO1xuICAgIG5vZGVSaWdodCA9IGxOb2RlLmdldFJpZ2h0KCk7XG4gICAgbm9kZVRvcCA9IGxOb2RlLmdldFRvcCgpO1xuICAgIG5vZGVCb3R0b20gPSBsTm9kZS5nZXRCb3R0b20oKTtcblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKSB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChib3R0b20gPCBub2RlQm90dG9tKSB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIH1cblxuICBpZiAoc2l6ZSA9PSAwKSB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAodGhpcy5ub2Rlcy5sZW5ndGggPT0gMCkge1xuICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBxdWV1ZSA9IG5ldyBMaW5rZWRMaXN0KCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xuICB2YXIgbmVpZ2hib3JFZGdlcztcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICB9KTtcblxuICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgY3VycmVudE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcbiAgICB2YXIgc2l6ZSA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICB2YXIgbmVpZ2hib3JFZGdlID0gbmVpZ2hib3JFZGdlc1tpXTtcbiAgICAgIGN1cnJlbnROZWlnaGJvciA9IG5laWdoYm9yRWRnZS5nZXRPdGhlckVuZEluR3JhcGgoY3VycmVudE5vZGUsIHRoaXMpO1xuXG4gICAgICAvLyBBZGQgdW52aXNpdGVkIG5laWdoYm9ycyB0byB0aGUgbGlzdCB0byB2aXNpdFxuICAgICAgaWYgKGN1cnJlbnROZWlnaGJvciAhPSBudWxsICYmICF2aXNpdGVkLmhhcyhjdXJyZW50TmVpZ2hib3IpKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbk9mTmVpZ2hib3IgPSBjdXJyZW50TmVpZ2hib3Iud2l0aENoaWxkcmVuKCk7XG5cbiAgICAgICAgY2hpbGRyZW5PZk5laWdoYm9yLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICAgICAgICAgIHZpc2l0ZWQuYWRkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKHZpc2l0ZWQuc2l6ZSA+PSB0aGlzLm5vZGVzLmxlbmd0aCkge1xuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcblxuICAgIHZpc2l0ZWQuZm9yRWFjaChmdW5jdGlvbiAodmlzaXRlZE5vZGUpIHtcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKSB7XG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEludGVnZXIoKSB7fVxuXG5JbnRlZ2VyLk1BWF9WQUxVRSA9IDIxNDc0ODM2NDc7XG5JbnRlZ2VyLk1JTl9WQUxVRSA9IC0yMTQ3NDgzNjQ4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXI7XG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExHcmFwaE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIFJlY3RhbmdsZUQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFJhbmRvbVNlZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBQb2ludEQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBIYXNoU2V0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XG4gICAgdk5vZGUgPSBsb2M7XG4gIH1cblxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XG5cbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpIGdtID0gZ20uZ3JhcGhNYW5hZ2VyO1xuXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZOb2RlO1xuICB0aGlzLmVkZ2VzID0gW107XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG5cbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbCkgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQobG9jLngsIGxvYy55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7ZWxzZSB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRCgpO1xufVxuXG5MTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTE5vZGVbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmNoaWxkO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKCkge1xuICAvLyAgaWYgKHRoaXMub3duZXIgIT0gbnVsbCkge1xuICAvLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcbiAgLy8gICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgLy8gICAgfVxuICAvLyAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDIsIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLnJlY3QueCwgdGhpcy5yZWN0LnkpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnJlY3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pIHtcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KSB7XG4gIHRoaXMucmVjdC54ID0gY3ggLSB0aGlzLnJlY3Qud2lkdGggLyAyO1xuICB0aGlzLnJlY3QueSA9IGN5IC0gdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnJlY3QueCA9IHg7XG4gIHRoaXMucmVjdC55ID0geTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMucmVjdC54ICs9IGR4O1xuICB0aGlzLnJlY3QueSArPSBkeTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bykge1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnRhcmdldCA9PSB0bykge1xuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICB2YXIgZWRnZUxpc3QgPSBbXTtcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcblxuICAgIGlmIChlZGdlLnRhcmdldCA9PSBvdGhlciB8fCBlZGdlLnNvdXJjZSA9PSBvdGhlcikge1xuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbmVpZ2hib3JzID0gbmV3IEhhc2hTZXQoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24gKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnNvdXJjZSA9PSBzZWxmKSB7XG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2UudGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVkZ2UudGFyZ2V0ICE9IHNlbGYpIHtcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgfVxuXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZWlnaGJvcnM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgd2l0aE5laWdoYm9yc0xpc3QgPSBuZXcgU2V0KCk7XG4gIHZhciBjaGlsZE5vZGU7XG4gIHZhciBjaGlsZHJlbjtcblxuICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQodGhpcyk7XG5cbiAgaWYgKHRoaXMuY2hpbGQgIT0gbnVsbCkge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aE5laWdoYm9yc0xpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcbiAgdmFyIGNoaWxkTm9kZTtcblxuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKSB7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG5cbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG5vT2ZDaGlsZHJlbiA9PSAwKSB7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYW5kb21DZW50ZXJYO1xuICB2YXIgcmFuZG9tQ2VudGVyWTtcblxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArIFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSArIG1pblg7XG5cbiAgdmFyIG1pblkgPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhZID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclkgPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgKyBSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhZIC0gbWluWSkgKyBtaW5ZO1xuXG4gIHRoaXMucmVjdC54ID0gcmFuZG9tQ2VudGVyWDtcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKSA9PSBudWxsKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpLmxlbmd0aCAhPSAwKSB7XG4gICAgLy8gd3JhcCB0aGUgY2hpbGRyZW4gbm9kZXMgYnkgcmUtYXJyYW5naW5nIHRoZSBib3VuZGFyaWVzXG4gICAgdmFyIGNoaWxkR3JhcGggPSB0aGlzLmdldENoaWxkKCk7XG4gICAgY2hpbGRHcmFwaC51cGRhdGVCb3VuZHModHJ1ZSk7XG5cbiAgICB0aGlzLnJlY3QueCA9IGNoaWxkR3JhcGguZ2V0TGVmdCgpO1xuICAgIHRoaXMucmVjdC55ID0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgIHRoaXMuc2V0V2lkdGgoY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCkpO1xuICAgIHRoaXMuc2V0SGVpZ2h0KGNoaWxkR3JhcGguZ2V0Qm90dG9tKCkgLSBjaGlsZEdyYXBoLmdldFRvcCgpKTtcblxuICAgIC8vIFVwZGF0ZSBjb21wb3VuZCBib3VuZHMgY29uc2lkZXJpbmcgaXRzIGxhYmVsIHByb3BlcnRpZXMgICAgXG4gICAgaWYgKExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMpIHtcblxuICAgICAgdmFyIHdpZHRoID0gY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsV2lkdGggPiB3aWR0aCkge1xuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhYmVsUG9zID09IFwidG9wXCIpIHtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSB0aGlzLmxhYmVsSGVpZ2h0IC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID09IEludGVnZXIuTUFYX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uICh0cmFucykge1xuICB2YXIgbGVmdCA9IHRoaXMucmVjdC54O1xuXG4gIGlmIChsZWZ0ID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKSB7XG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfSBlbHNlIGlmIChsZWZ0IDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIGxlZnQgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIHRvcCA9IHRoaXMucmVjdC55O1xuXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpIHtcbiAgICB0b3AgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH0gZWxzZSBpZiAodG9wIDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSkge1xuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcbiAgdmFyIHZMZWZ0VG9wID0gdHJhbnMuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGxlZnRUb3ApO1xuXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0Lnk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3duZXIgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMub3duZXIuZ2V0UGFyZW50KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExOb2RlO1xuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFJlY3RhbmdsZUQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuXG4gIGlmICh4ICE9IG51bGwgJiYgeSAhPSBudWxsICYmIHdpZHRoICE9IG51bGwgJiYgaGVpZ2h0ICE9IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG59XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpIHtcbiAgdGhpcy54ID0geDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgdGhpcy55ID0geTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XG4gIHRoaXMud2lkdGggPSB3aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodCkge1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEJvdHRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKSB7XG4gIGlmICh0aGlzLmdldFJpZ2h0KCkgPCBhLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldFJpZ2h0KCkgPCB0aGlzLngpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRCb3R0b20oKSA8IHRoaXMueSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5ZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRZKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMud2lkdGggLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0SGFsZiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlRDtcblxuLyoqKi8gfSksXG4vKiAxNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBSYW5kb21TZWVkKCkge31cblJhbmRvbVNlZWQuc2VlZCA9IDE7XG5SYW5kb21TZWVkLnggPSAwO1xuXG5SYW5kb21TZWVkLm5leHREb3VibGUgPSBmdW5jdGlvbiAoKSB7XG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIFBvaW50RCh4LCB5KSB7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeCkge1xuICB0aGlzLnggPSB4O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpIHtcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0RGlmZmVyZW5jZSA9IGZ1bmN0aW9uIChwdCkge1xuICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gcHQueCwgdGhpcy55IC0gcHQueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSkge1xuICB0aGlzLnggKz0gZGltLndpZHRoO1xuICB0aGlzLnkgKz0gZGltLmhlaWdodDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50RDtcblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG5mdW5jdGlvbiBIYXNoU2V0KCkge1xuICB0aGlzLnNldCA9IHt9O1xufVxuO1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaik7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHRoaXMuc2V0W3RoZUlkXSA9IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildID09IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xuICB9XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIHYgPSBsaXN0W2ldO1xuICAgIHRoaXMuYWRkKHYpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XG5cbi8qKiovIH0pLFxuLyogMTggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLypcclxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xyXG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHksIHApIHtcbiAgdGhpcy54ID0gbnVsbDtcbiAgdGhpcy55ID0gbnVsbDtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfSBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy54ID0gcC54O1xuICAgIHRoaXMueSA9IHAueTtcbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50LnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5LCBwKSB7XG4gIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy5zZXRMb2NhdGlvbihwLngsIHAueSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgLy9pZiBib3RoIHBhcmFtZXRlcnMgYXJlIGludGVnZXIganVzdCBtb3ZlICh4LHkpIGxvY2F0aW9uXG4gICAgaWYgKHBhcnNlSW50KHgpID09IHggJiYgcGFyc2VJbnQoeSkgPT0geSkge1xuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHggKyAwLjUpO1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcih5ICsgMC41KTtcbiAgICB9XG4gIH1cbn07XG5cblBvaW50LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbn07XG5cblBvaW50LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMueCArPSBkeDtcbiAgdGhpcy55ICs9IGR5O1xufTtcblxuUG9pbnQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgIHZhciBwdCA9IG9iajtcbiAgICByZXR1cm4gdGhpcy54ID09IHB0LnggJiYgdGhpcy55ID09IHB0Lnk7XG4gIH1cbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xufTtcblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KCkuY29uc3RydWN0b3IubmFtZSArIFwiW3g9XCIgKyB0aGlzLnggKyBcIix5PVwiICsgdGhpcy55ICsgXCJdXCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50O1xuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XG5cbmNvbnN0IGFkZCA9IChwcmV2LCBub2RlLCBuZXh0LCBsaXN0KSA9PiB7XG4gIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xuICB9XG5cbiAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICBuZXh0LnByZXYgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLnByZXYgPSBwcmV2O1xuICBub2RlLm5leHQgPSBuZXh0O1xuXG4gIGxpc3QubGVuZ3RoKys7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAobm9kZSwgbGlzdCkgPT4ge1xuICBsZXQgeyBwcmV2LCBuZXh0IH0gPSBub2RlO1xuXG4gIGlmIChwcmV2ICE9PSBudWxsKSB7XG4gICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBuZXh0O1xuICB9XG5cbiAgaWYgKG5leHQgIT09IG51bGwpIHtcbiAgICBuZXh0LnByZXYgPSBwcmV2O1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IHByZXY7XG4gIH1cblxuICBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsO1xuXG4gIGxpc3QubGVuZ3RoLS07XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgY29uc3RydWN0b3IodmFscykge1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICBpZiAodmFscyAhPSBudWxsKSB7XG4gICAgICB2YWxzLmZvckVhY2godiA9PiB0aGlzLnB1c2godikpO1xuICAgIH1cbiAgfVxuXG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKHZhbCwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHZhbCwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydE5vZGVCZWZvcmUobmV3Tm9kZSwgb3RoZXJOb2RlKSB7XG4gICAgcmV0dXJuIGFkZChvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzKTtcbiAgfVxuXG4gIGluc2VydE5vZGVBZnRlcihuZXdOb2RlLCBvdGhlck5vZGUpIHtcbiAgICByZXR1cm4gYWRkKG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMpO1xuICB9XG5cbiAgcHVzaCh2YWwpIHtcbiAgICByZXR1cm4gYWRkKHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyk7XG4gIH1cblxuICB1bnNoaWZ0KHZhbCkge1xuICAgIHJldHVybiBhZGQobnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzKTtcbiAgfVxuXG4gIHJlbW92ZShub2RlKSB7XG4gICAgcmV0dXJuIHJlbW92ZShub2RlLCB0aGlzKTtcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICByZXR1cm4gcmVtb3ZlKHRoaXMudGFpbCwgdGhpcykudmFsdWU7XG4gIH1cblxuICBwb3BOb2RlKCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy50YWlsLCB0aGlzKTtcbiAgfVxuXG4gIHNoaWZ0KCkge1xuICAgIHJldHVybiByZW1vdmUodGhpcy5oZWFkLCB0aGlzKS52YWx1ZTtcbiAgfVxuXG4gIHNoaWZ0Tm9kZSgpIHtcbiAgICByZXR1cm4gcmVtb3ZlKHRoaXMuaGVhZCwgdGhpcyk7XG4gIH1cblxuICBnZXRfb2JqZWN0X2F0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDw9IHRoaXMubGVuZ3RoKCkpIHtcbiAgICAgIHZhciBpID0gMTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgd2hpbGUgKGkgPCBpbmRleCkge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBzZXRfb2JqZWN0X2F0KGluZGV4LCB2YWx1ZSkge1xuICAgIGlmIChpbmRleCA8PSB0aGlzLmxlbmd0aCgpKSB7XG4gICAgICB2YXIgaSA9IDE7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlIChpIDwgaW5kZXgpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XG5cbi8qKiovIH0pLFxuLyogMjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIFBvaW50RCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XG4gIHRoaXMubHdvcmxkT3JnWSA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcbiAgdGhpcy5sd29ybGRFeHRYID0gMS4wO1xuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFkgPSAxLjA7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KSB7XG4gIHRoaXMubHdvcmxkT3JnWCA9IHdveDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAod295KSB7XG4gIHRoaXMubHdvcmxkT3JnWSA9IHdveTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRYO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KSB7XG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KSB7XG4gIHRoaXMubHdvcmxkRXh0WSA9IHdleTtcbn07XG5cbi8qIERldmljZSByZWxhdGVkICovXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KSB7XG4gIHRoaXMubGRldmljZU9yZ1ggPSBkb3g7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKGRveSkge1xuICB0aGlzLmxkZXZpY2VPcmdZID0gZG95O1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpIHtcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KSB7XG4gIHRoaXMubGRldmljZUV4dFkgPSBkZXk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgeERldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WCA9IHRoaXMubHdvcmxkRXh0WDtcbiAgaWYgKHdvcmxkRXh0WCAhPSAwLjApIHtcbiAgICB4RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWCArICh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFg7XG4gIH1cblxuICByZXR1cm4geERldmljZTtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KSB7XG4gIHZhciB5RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRZID0gdGhpcy5sd29ybGRFeHRZO1xuICBpZiAod29ybGRFeHRZICE9IDAuMCkge1xuICAgIHlEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdZICsgKHkgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHdvcmxkRXh0WTtcbiAgfVxuXG4gIHJldHVybiB5RGV2aWNlO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KSB7XG4gIHZhciB4V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKSB7XG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICsgKHggLSB0aGlzLmxkZXZpY2VPcmdYKSAqIHRoaXMubHdvcmxkRXh0WCAvIGRldmljZUV4dFg7XG4gIH1cblxuICByZXR1cm4geFdvcmxkO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KSB7XG4gIHZhciB5V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRZID0gdGhpcy5sZGV2aWNlRXh0WTtcbiAgaWYgKGRldmljZUV4dFkgIT0gMC4wKSB7XG4gICAgeVdvcmxkID0gdGhpcy5sd29ybGRPcmdZICsgKHkgLSB0aGlzLmxkZXZpY2VPcmdZKSAqIHRoaXMubHdvcmxkRXh0WSAvIGRldmljZUV4dFk7XG4gIH1cbiAgcmV0dXJuIHlXb3JsZDtcbn07XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpIHtcbiAgdmFyIG91dFBvaW50ID0gbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksIHRoaXMuaW52ZXJzZVRyYW5zZm9ybVkoaW5Qb2ludC55KSk7XG4gIHJldHVybiBvdXRQb2ludDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIEVtaXR0ZXIoKSB7XG4gIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbnZhciBwID0gRW1pdHRlci5wcm90b3R5cGU7XG5cbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgIGV2ZW50OiBldmVudCxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfSk7XG59O1xuXG5wLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICBmb3IgKHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiAobC5ldmVudCA9PT0gZXZlbnQgJiYgbC5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn07XG5cbnAuZW1pdCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmIChldmVudCA9PT0gbC5ldmVudCkge1xuICAgICAgbC5jYWxsYmFjayhkYXRhKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTGF5b3V0Q29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRDb25zdGFudHMoKSB7fVxuXG4vL0ZETGF5b3V0Q29uc3RhbnRzIGluaGVyaXRzIHN0YXRpYyBwcm9wcyBpbiBMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gTGF5b3V0Q29uc3RhbnRzKSB7XG4gIEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdID0gTGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5GRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IDI1MDA7XG5cbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSA1MDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gMC40NTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gNDUwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gMC40O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gMS4wO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDMuODtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAxLjU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9SRVBVTFNJT05fUkFOR0VfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IDAuNTtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCA9IDEwMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UID0gRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMICogMztcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLyAxMC4wO1xuRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID0gMTAwO1xuRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IDAuMTtcbkZETGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5GRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9IDEwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Q29uc3RhbnRzO1xuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBMRWRnZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBMRWRnZS5jYWxsKHRoaXMsIHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSk7XG4gIHRoaXMuaWRlYWxMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xufVxuXG5GRExheW91dEVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExFZGdlKSB7XG4gIEZETGF5b3V0RWRnZVtwcm9wXSA9IExFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0RWRnZTtcblxuLyoqKi8gfSksXG4vKiAyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTE5vZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKSB7XG4gIHRoaXMuc3RhcnRYID0gX3N0YXJ0WDtcbiAgdGhpcy5maW5pc2hYID0gX2ZpbmlzaFg7XG4gIHRoaXMuc3RhcnRZID0gX3N0YXJ0WTtcbiAgdGhpcy5maW5pc2hZID0gX2ZpbmlzaFk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBEaW1lbnNpb25EKHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbiAgaWYgKHdpZHRoICE9PSBudWxsICYmIGhlaWdodCAhPT0gbnVsbCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgfVxufVxuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aCkge1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhlaWdodDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuY29uc3QgTGlua2VkTGlzdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXG5mdW5jdGlvbiBRdWlja3NvcnQoKSB7fVxuXG5RdWlja3NvcnQuZ2V0X29iamVjdF9hdCA9IGZ1bmN0aW9uIChsaXN0LCBpKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0LmdldF9vYmplY3RfYXQoaSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnNldF9vYmplY3RfYXQgPSBmdW5jdGlvbiAobGlzdCwgaSwgdmFsdWUpIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3RbaV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0KSB7XG4gICAgICAgIGxpc3Quc2V0X29iamVjdF9hdChpLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuUXVpY2tzb3J0LnF1aWNrc29ydCA9IGZ1bmN0aW9uIChsaXN0LCBjb21wYXJpc29uX2ZuKSB7XG5cbiAgICAvLyBpbnB1dCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIExpbmtlZExpc3QgY2xhc3Mgb3IgbXVzdCBiZSBhbiBhcnJheSBpbiBvcmRlciB0byBzb3J0XG4gICAgaWYgKCEobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QgfHwgbGlzdCBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvbXBhcmlzb25fZnVuY3Rpb24gPSBjb21wYXJpc29uX2ZuO1xuXG4gICAgaWYgKGNvbXBhcmlzb25fZnVuY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wYXJpc29uX2Z1bmN0aW9uID0gUXVpY2tzb3J0LmNvbXBhcmU7XG4gICAgfVxuICAgIHZhciBlbmRfaW5kZXg7XG5cbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIExpbmtlZExpc3QpIHtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5zaXplKCk7XG4gICAgfSBlbHNlIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZW5kX2luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZW1wdHkgbGlzdHMgb3IgYXJyYXlzLlxuICAgIGlmIChlbmRfaW5kZXggPj0gMCkge1xuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCAwLCBlbmRfaW5kZXgsIGNvbXBhcmlzb25fZnVuY3Rpb24pO1xuICAgIH1cbn07XG5cblF1aWNrc29ydC5xdWlja3NvcnRfYmV0d2Vlbl9pbmRpY2VzID0gZnVuY3Rpb24gKGxpc3QsIGxvdywgaGlnaCwgY29tcGFyaXNvbl9mbikge1xuXG4gICAgLy8gaW5wdXQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBMaW5rZWRMaXN0IGNsYXNzIG9yIG11c3QgYmUgYW4gYXJyYXkgaW4gb3JkZXIgdG8gc29ydFxuICAgIGlmICghKGxpc3QgaW5zdGFuY2VvZiBMaW5rZWRMaXN0IHx8IGxpc3QgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJpc29uX2ZuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcGFyaXNvbl9mbiA9IFF1aWNrc29ydC5jb21wYXJlO1xuICAgIH1cblxuICAgIHZhciBpID0gbG93O1xuICAgIHZhciBqID0gaGlnaDtcbiAgICB2YXIgbWlkZGxlSW5kZXggPSBNYXRoLmZsb29yKChpICsgaikgLyAyKTtcbiAgICB2YXIgbWlkZGxlID0gUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgbWlkZGxlSW5kZXgpO1xuXG4gICAgZG8ge1xuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGkpLCBtaWRkbGUpKSB7XG5cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjb21wYXJpc29uX2ZuKG1pZGRsZSwgUXVpY2tzb3J0LmdldF9vYmplY3RfYXQobGlzdCwgaikpKSB7XG5cbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpIDw9IGopIHtcblxuICAgICAgICAgICAgdmFyIHRlbXAgPSBRdWlja3NvcnQuZ2V0X29iamVjdF9hdChsaXN0LCBpKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGksIFF1aWNrc29ydC5nZXRfb2JqZWN0X2F0KGxpc3QsIGopKTtcbiAgICAgICAgICAgIFF1aWNrc29ydC5zZXRfb2JqZWN0X2F0KGxpc3QsIGosIHRlbXApO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICB9XG4gICAgfSB3aGlsZSAoaSA8PSBqKTtcblxuICAgIGlmIChsb3cgPCBqKSB7XG5cbiAgICAgICAgUXVpY2tzb3J0LnF1aWNrc29ydF9iZXR3ZWVuX2luZGljZXMobGlzdCwgbG93LCBqLCBjb21wYXJpc29uX2ZuKTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaCA+IGkpIHtcblxuICAgICAgICBRdWlja3NvcnQucXVpY2tzb3J0X2JldHdlZW5faW5kaWNlcyhsaXN0LCBpLCBoaWdoLCBjb21wYXJpc29uX2ZuKTtcbiAgICB9XG59O1xuXG4vLyB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgb3ZlcnJpZGVuIGZvciBzb3J0aW5nIGRpZmZlcmVudCBkYXRhIHR5cGVzKGUuZy4gc3RyaW5nLCBpbnRlZ2VyIGV0Yy4pXG5RdWlja3NvcnQuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIgPiBhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWlja3NvcnQ7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIExheW91dENvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMSkuTGF5b3V0Q29uc3RhbnRzO1xuXG5mdW5jdGlvbiBBVlNERkNvbnN0YW50cygpIHt9XG5cbi8vIEFWU0RGQ29uc3RhbnRzIGluaGVyaXRzIHByb3BlcnRpZXMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IgKHZhciBwcm9wIGluIExheW91dENvbnN0YW50cykge1xuICAgIEFWU0RGQ29uc3RhbnRzW3Byb3BdID0gTGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5BVlNERkNvbnN0YW50cy5ERUZBVUxUX05PREVfU0VQQVJBVElPTiA9IDYwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGQ29uc3RhbnRzO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgZGF0YSBhbmQgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCBmb3IgQVZTREYgbGF5b3V0IHBlclxuICogZWRnZS5cbiAqXG5cbiAqIENvcHlyaWdodDogaS1WaXMgUmVzZWFyY2ggR3JvdXAsIEJpbGtlbnQgVW5pdmVyc2l0eSwgMjAwNyAtIHByZXNlbnRcbiAqL1xuXG5sZXQgTEVkZ2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLkxFZGdlO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogSW5pdGlhbGl6YXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBBVlNERkVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gICAgTEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsIHRhcmdldCwgdkVkZ2UpO1xufVxuXG5BVlNERkVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMRWRnZS5wcm90b3R5cGUpO1xuXG5mb3IgKGxldCBwcm9wZXJ0aWVzIGluIExFZGdlKSB7XG4gICAgQVZTREZFZGdlW3Byb3BlcnRpZXNdID0gTEVkZ2VbcHJvcGVydGllc107XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoZSBmdW5jdGlvbiBnZXRPdGhlckVuZCByZXR1cm5zIHRoZSBvdGhlciBlbmQgb2YgdGhpcyBlZGdlLlxuQVZTREZFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmV0dXJuIExFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZChub2RlKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBSZW1haW5pbmcgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB3aGV0aGVyIHRoaXMgZWRnZSBjcm9zc2VzIHdpdGggdGhlIGlucHV0IGVkZ2UuIEl0XG4vLyByZXR1cm5zIGZhbHNlLCBpZiBhbnkgb2YgdGhlIHZlcnRpY2VzIHRob3NlIGVkZ2VzIGFyZSBpbmNpZGVudCB0byBhcmUgbm90XG4vLyB5ZXQgcGxhY2VkIG9uIHRoZSBjaXJjbGUuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNyb3NzZXNXaXRoRWRnZSA9IGZ1bmN0aW9uIChvdGhlckVkZ2UpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNvdXJjZVBvcyA9IHNlbGYuZ2V0U291cmNlKCkuZ2V0SW5kZXgoKTtcbiAgICBsZXQgdGFyZ2V0UG9zID0gc2VsZi5nZXRUYXJnZXQoKS5nZXRJbmRleCgpO1xuICAgIGxldCBvdGhlclNvdXJjZVBvcyA9IG90aGVyRWRnZS5nZXRTb3VyY2UoKS5nZXRJbmRleCgpO1xuICAgIGxldCBvdGhlclRhcmdldFBvcyA9IG90aGVyRWRnZS5nZXRUYXJnZXQoKS5nZXRJbmRleCgpO1xuXG4gICAgLy8gaWYgYW55IG9mIHRoZSB2ZXJ0aWNlcyB0aG9zZSB0d28gZWRnZXMgYXJlIG5vdCB5ZXQgcGxhY2VkXG4gICAgaWYgKHNvdXJjZVBvcyA9PT0gLTEgfHwgdGFyZ2V0UG9zID09PSAtMSB8fCBvdGhlclNvdXJjZVBvcyA9PT0gLTEgfHwgb3RoZXJUYXJnZXRQb3MgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgb3RoZXJTb3VyY2VEaXN0ID0gb3RoZXJFZGdlLmdldFNvdXJjZSgpLmdldENpcmNEaXN0V2l0aFRoZU5vZGUoc2VsZi5nZXRTb3VyY2UoKSk7XG4gICAgbGV0IG90aGVyVGFyZ2V0RGlzdCA9IG90aGVyRWRnZS5nZXRUYXJnZXQoKS5nZXRDaXJjRGlzdFdpdGhUaGVOb2RlKHNlbGYuZ2V0U291cmNlKCkpO1xuICAgIGxldCB0aGlzVGFyZ2V0RGlzdCA9IHNlbGYuZ2V0VGFyZ2V0KCkuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZShzZWxmLmdldFNvdXJjZSgpKTtcblxuICAgIGlmICh0aGlzVGFyZ2V0RGlzdCA8IE1hdGgubWF4KG90aGVyU291cmNlRGlzdCwgb3RoZXJUYXJnZXREaXN0KSAmJiB0aGlzVGFyZ2V0RGlzdCA+IE1hdGgubWluKG90aGVyU291cmNlRGlzdCwgb3RoZXJUYXJnZXREaXN0KSAmJiBvdGhlclRhcmdldERpc3QgIT09IDAgJiYgb3RoZXJTb3VyY2VEaXN0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyAxIGlmIHRoaXMgZWRnZSBjcm9zc2VzIHdpdGggdGhlIGlucHV0IGVkZ2UsIDBcbi8vIG90aGVyd2lzZS5cbkFWU0RGRWRnZS5wcm90b3R5cGUuY3Jvc3NpbmdXaXRoRWRnZSA9IGZ1bmN0aW9uIChvdGhlckVkZ2UpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdCA9IHNlbGYuY3Jvc3Nlc1dpdGhFZGdlKG90aGVyRWRnZSk7XG5cbiAgICByZXR1cm4gcmVzdWx0ID8gMSA6IDA7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHRvdGFsIG51bWJlciBvZiBjcm9zc2luZ3Mgb2YgdGhpcyBlZGdlIHdpdGhcbi8vIGFsbCB0aGUgZWRnZXMgZ2l2ZW4gaW4gdGhlIGlucHV0IGxpc3QuXG5BVlNERkVkZ2UucHJvdG90eXBlLmNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmdXaXRoTGlzdCA9IGZ1bmN0aW9uIChlZGdlTGlzdCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdG90YWxDcm9zc2luZyA9IDA7XG5cbiAgICBlZGdlTGlzdC5mb3JFYWNoKGVkZ2UgPT4gdG90YWxDcm9zc2luZyArPSBzZWxmLmNyb3NzaW5nV2l0aEVkZ2UoZWRnZSkpO1xuXG4gICAgcmV0dXJuIHRvdGFsQ3Jvc3Npbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGRWRnZTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpbXBsZW1lbnRzIGRhdGEgYW5kIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgZm9yIEFWU0RGIGxheW91dCBwZXJcbiAqIGNpcmNsZS5cbiAqXG4gKlxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLkxHcmFwaDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gQVZTREZDaXJjbGUocGFyZW50LCBncmFwaE1nciwgdk9iamVjdCkge1xuICAgIExHcmFwaC5jYWxsKHRoaXMsIHBhcmVudCwgZ3JhcGhNZ3IsIHZPYmplY3QpO1xuICAgIHRoaXMuaW5PcmRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgdGhpcy5ub2RlU2VwYXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YWNrID0gW107XG4gICAgdGhpcy5wZXJpbWV0ZXIgPSAwO1xuICAgIHRoaXMuY2VudGVyWCA9IDA7XG4gICAgdGhpcy5jZW50ZXJZID0gMDtcbiAgICB0aGlzLnJhZGl1cyA9IDA7XG59XG5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoLnByb3RvdHlwZSk7XG5cbmZvciAobGV0IHByb3BlcnR5IGluIExHcmFwaCkge1xuICAgIEFWU0RGQ2lyY2xlW3Byb3BlcnR5XSA9IExHcmFwaFtwcm9wZXJ0eV07XG59XG5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5pbml0T3JkZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbk9yZGVyID0gW107XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogQWNjZXNzb3IgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGFycmF5IGluIHdoaWNoIHRoZSBub2RlcyBvZiB0aGlzIGNpcmNsZSBhcmUga2VwdCBpbiBvcmRlci5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRPcmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbk9yZGVyO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIGNlbnRlciBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNlbnRlclg7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgY2VudGVyIG9mIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2VudGVyWTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmFkaXVzIG9mIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmdldFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXM7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiB2ZXJ0aWNlcyBvZiB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldE5vZGVzKCkubGVuZ3RoO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIGFuZCByZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgY3Jvc3NpbmdzIGluIHRoaXNcbi8vIGNpcmNsZSBieSBhZGRpbmcgdXAgdGhlIGNyb3NzaW5nIG51bWJlciBvZiBpbmRpdmlkdWFsIG5vZGVzIG9uIGl0LlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmdldFRvdGFsQ3Jvc3NpbmdPZkNpcmNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IGNyb3NzaW5nTnVtYmVyID0gMDtcblxuICAgIGZvciAobGV0IG5vZGUgaW4gc2VsZi5pbk9yZGVyKSB7XG4gICAgICAgIGxldCBub2RlQ3Jvc3NpbmcgPSBub2RlLmdldFRvdGFsQ3Jvc3NpbmdPZkVkZ2VzKCk7XG4gICAgICAgIGlmIChub2RlQ3Jvc3NpbmcgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgY3Jvc3NpbmdOdW1iZXIgKz0gbm9kZUNyb3NzaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBjcm9zc2luZ051bWJlciAvIDQ7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNoZWNrcyB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlIHZlcnRpY2VzIG9mIHRoaXMgY2lyY2xlIGFyZVxuLy8gYXNzaWduZWQgYW4gaW5kZXggb24gdGhlIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5oYXNGaW5pc2hlZE9yZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5nZXROb2RlcygpLmxlbmd0aDtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbm9kZSBzZXBhcmF0aW9uIG9mIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmdldE5vZGVTZXBhcmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVTZXBhcmF0aW9uO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBub2RlIHNlcGFyYXRpb24gb2YgdGhpcyBjaXJjbGUuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuc2V0Tm9kZVNlcGFyYXRpb24gPSBmdW5jdGlvbiAobm9kZVNlcGFyYXRpb24pIHtcbiAgICB0aGlzLm5vZGVTZXBhcmF0aW9uID0gbm9kZVNlcGFyYXRpb247XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogUmVtYWluaW5nIEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gVGhpcyBmdW5jdGlvbiB0cmF2ZXJzZXMgdGhlIHZlcnRpY2VzIG9mIHRoaXMgY2lyY2xlIGFuZCBjb3JyZWN0cyB0aGUgYW5nbGVcbi8vIG9mIHRoZSB2ZXJ0aWNlcyB3aXRoIHJlc3BlY3QgdG8gdGhlaXIgY2lyY2xlIGluZGljZXMuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuY29ycmVjdEFuZ2xlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5jdXJyZW50SW5kZXggPSAwO1xuXG4gICAgc2VsZi5pbk9yZGVyLmZvckVhY2gobm9kZSA9PiBzZWxmLnB1dEluT3JkZXIobm9kZSkpO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBwdXRzIHRoZSBnaXZlbiBub2RlIG9uIHRoZSBjaXJjbGUgaW4gdGhlIGN1cnJlbnQgb3JkZXIgYW5kXG4vLyBzZXRzIGl0cyBhbmdsZSBhcHByb3ByaWF0ZWx5LlxuQVZTREZDaXJjbGUucHJvdG90eXBlLnB1dEluT3JkZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBub2RlcyA9IHNlbGYuZ2V0Tm9kZXMoKTtcblxuICAgIC8vIE5vdGUgdGhhdCBpZCBhdHRyaWJ1dGUgb2YgYSBub2RlIGlzIGFkZGVkIGJlZm9yZVxuICAgIC8vIEFWU0RGTGF5b3V0IGlzIGNhbGxlZFxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG5vZGVzW2ldLmlkID09IG5vZGUuaWQpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgICB0aHJvdyBcIlRoZSBub2RlIG11c3QgYmUgYSBtZW1iZXIgb2YgTEdyYXBoXCI7XG4gICAgfVxuXG4gICAgc2VsZi5pbk9yZGVyW3NlbGYuY3VycmVudEluZGV4XSA9IG5vZGU7XG4gICAgbm9kZS5zZXRJbmRleChzZWxmLmN1cnJlbnRJbmRleCk7XG5cbiAgICBpZiAoc2VsZi5jdXJyZW50SW5kZXggPT09IDApIHtcbiAgICAgICAgbm9kZS5zZXRBbmdsZSgwLjApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc2V0QW5nbGUoc2VsZi5pbk9yZGVyW3NlbGYuY3VycmVudEluZGV4IC0gMV0uZ2V0QW5nbGUoKSArIDIgKiBNYXRoLlBJICogKG5vZGUuZ2V0RGlhZ29uYWwoKSAvIDIgKyBzZWxmLm5vZGVTZXBhcmF0aW9uICsgc2VsZi5pbk9yZGVyW3NlbGYuY3VycmVudEluZGV4IC0gMV0uZ2V0RGlhZ29uYWwoKSAvIDIpIC8gc2VsZi5wZXJpbWV0ZXIpO1xuICAgIH1cblxuICAgIHNlbGYuY3VycmVudEluZGV4Kys7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIG5leHQgbm9kZSB0byBiZSBwbGFjZWQgb24gdGhpcyBjaXJjbGUgd2l0aFxuLy8gcmVzcGVjdCB0byB0aGUgQVZTREYgYWxnb3JpdGhtLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmZpbmROb2RlVG9QbGFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNEZWdyZWVOb2RlID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRmluZCB0aGUgc21hbGxlc3QgZGVncmVlIHZlcnRleCBpZiB0aGUgc3RhY2sgaXMgZW1wdHlcbiAgICBpZiAoc2VsZi5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc0RlZ3JlZU5vZGUgPSBzZWxmLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUoKTtcbiAgICB9XG4gICAgLy8gRmluZCB0aGUgZmlyc3QgdmVydGV4IGluIHRoZSBzdGFjayBub3QgeWV0IHBsYWNlZFxuICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZvdW5kVW5vcmRlck5vZGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKCFmb3VuZFVub3JkZXJOb2RlICYmICEoc2VsZi5zdGFjay5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgc0RlZ3JlZU5vZGUgPSBzZWxmLnN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgIGZvdW5kVW5vcmRlck5vZGUgPSAhc0RlZ3JlZU5vZGUuaXNPcmRlcmVkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZm91bmRVbm9yZGVyTm9kZSkge1xuICAgICAgICAgICAgICAgIHNEZWdyZWVOb2RlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAvLyBJZiBubyB1bm9yZGVyZWQgdmVydGV4IGlzIGZvdW5kIGluIHRoZSBzdGFjaywgZmluZCBvbmVcbiAgICAvLyBmcm9tIHRoZSByZW1haW5pbmcgb25lc1xuICAgIGlmIChzRGVncmVlTm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNEZWdyZWVOb2RlID0gc2VsZi5maW5kVW5vcmRlcmVkU21hbGxlc3REZWdyZWVOb2RlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSB1bm9yZGVyZWQgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSB0byB0aGUgc3RhY2tcbiAgICBpZiAoc0RlZ3JlZU5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgbmVpZ2hib3JzID0gc0RlZ3JlZU5vZGUuZ2V0TmVpZ2hib3JzU29ydGVkQnlEZWdyZWUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gbmVpZ2hib3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgbmVpZ2hib3IgPSBuZWlnaGJvcnNbaV07XG5cbiAgICAgICAgICAgIGlmICghbmVpZ2hib3IuaXNPcmRlcmVkKCkpIC8vIENoZWNrIGhlcmUgZm9yIHBvc3NpYmxlIGVycm9yXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0YWNrLnB1c2gobmVpZ2hib3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzRGVncmVlTm9kZTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgcmFkaXVzIG9mIHRoaXMgY2lyY2xlIHdpdGggcmVzcGVjdCB0byB0aGUgc2l6ZXNcbi8vIG9mIHRoZSB2ZXJ0aWNlcyBhbmQgdGhlIG5vZGUgc2VwYXJhdGlvbiBwYXJhbWV0ZXIuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUuY2FsY3VsYXRlUmFkaXVzID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdG90YWxEaWFnb25hbCA9IDA7XG5cbiAgICBzZWxmLmdldE5vZGVzKCkuZm9yRWFjaChub2RlID0+IHRvdGFsRGlhZ29uYWwgKz0gTWF0aC5zcXJ0KG5vZGUuZ2V0V2lkdGgoKSAqIG5vZGUuZ2V0V2lkdGgoKSArIG5vZGUuZ2V0SGVpZ2h0KCkgKiBub2RlLmdldEhlaWdodCgpKSk7XG5cbiAgICBzZWxmLnBlcmltZXRlciA9IHRvdGFsRGlhZ29uYWwgKyBzZWxmLmdldE5vZGVzKCkubGVuZ3RoICogc2VsZi5ub2RlU2VwYXJhdGlvbjtcbiAgICBsZXQgcmFkaXVzID0gc2VsZi5wZXJpbWV0ZXIgLyAoMiAqIE1hdGguUEkpO1xuXG4gICAgLy8gQ2hlY2sgaGVyZSBmb3IgcG9zc2libGUgZXJyb3JcblxuICAgIHNlbGYuZ2V0UGFyZW50KCkuc2V0V2lkdGgoMiAqIHJhZGl1cyk7XG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRIZWlnaHQoMiAqIHJhZGl1cyk7XG4gICAgc2VsZi5nZXRQYXJlbnQoKS5zZXRDZW50ZXIoc2VsZi5nZXRQYXJlbnQoKS5nZXRXaWR0aCgpLCBzZWxmLmdldFBhcmVudCgpLmdldEhlaWdodCgpKTtcblxuICAgIHNlbGYuY2VudGVyWCA9IHNlbGYuZ2V0UGFyZW50KCkuZ2V0Q2VudGVyWCgpO1xuICAgIHNlbGYuY2VudGVyWSA9IHNlbGYuZ2V0UGFyZW50KCkuZ2V0Q2VudGVyWSgpO1xuICAgIHNlbGYucmFkaXVzID0gc2VsZi5nZXRQYXJlbnQoKS5nZXRIZWlnaHQoKSAvIDI7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIGNhbGN1bGF0ZXMgdGhlIHRvdGFsIG51bWJlciBvZiBjcm9zc2luZ3Mgb2YgYWxsIHZlcnRpY2VzIG9mXG4vLyB0aGlzIGNpcmNsZS5cbkFWU0RGQ2lyY2xlLnByb3RvdHlwZS5jYWxjdWxhdGVFZGdlQ3Jvc3NpbmdzT2ZOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdldE5vZGVzKCkuZm9yRWFjaChub2RlID0+IG5vZGUuY2FsY3VsYXRlVG90YWxDcm9zc2luZygpKTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gc2V0cyB0aGUgaW5kZXggb2YgZWFjaCB2ZXJ0ZXggdG8gaXRzIHBvc2l0aW9uIGluIGluT3JkZXJcbi8vIGFycmF5LiBOb3RlIHRoYXQgaW5kZXggb2YgYSBub2RlIGNhbiBiZSBkaWZmZXJlbnQgZnJvbSBpdHMgcGxhY2UgaW4gdGhlXG4vLyBhcnJheSBkdWUgdG8gY3Jvc3NpbmcgcmVkdWN0aW9uIHBoYXNlIG9mIHRoZSBBVlNERiBhbGdvcml0aG0uIEl0IGxvYWRzXG4vLyBvbGQgaW5kZXggdmFsdWVzIHRvIHZlcnRpY2VzIGR1ZSB0byBhbiBpbmNyZWFzZSBpbiB0aGUgbnVtYmVyIG9mXG4vLyBjcm9zc2luZ3Mgd2l0aCB0aGUgbmV3IGluZGljZXMuXG5BVlNERkNpcmNsZS5wcm90b3R5cGUubG9hZE9sZEluZGljZXNPZk5vZGVzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdGhpcy5pbk9yZGVyLmZvckVhY2goIChub2RlLGluZGV4KSA9PiBub2RlLnNldEluZGV4KGluZGV4KSk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGYuaW5PcmRlcltpXS5zZXRJbmRleChpKTtcbiAgICB9XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIHBvc2l0aW9uIG9mIGVhY2ggbm9kZSBpbiBpbk9yZGVyIGFycmF5IHRvIGl0cyBpbmRleC5cbi8vIE5vdGUgdGhhdCBpbmRleCBvZiBhIG5vZGUgY2FuIGJlIGRpZmZlcmVudCBmcm9tIGl0cyBwbGFjZSBpbiB0aGUgaW5PcmRlclxuLy8gYXJyYXkgZHVlIHRvIGNyb3NzaW5nIHJlZHVjdGlvbiBwaGFzZSBvZiB0aGUgQVZTREYgYWxnb3JpdGhtLiBUaGlzIGZ1bmN0aW9uXG4vLyBwdXRzIHRoZSBub2RlcyB0byB0aGVpciBuZXcgaW5kZXggdmFsdWVzIGluIGluT3JkZXIgYXJyYXkgZHVlIHRvIGFcbi8vIGRlY3JlYXNlIGluIHRoZSBudW1iZXIgb2YgY3Jvc3NpbmdzIHdpdGggdGhlIG5ldyBpbmRpY2VzLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLnJlT3JkZXJWZXJ0aWNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLmZvckVhY2gobm9kZSA9PiBzZWxmLmluT3JkZXJbbm9kZS5nZXRJbmRleCgpXSA9IG5vZGUpO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBmaW5kcyBhbmQgcmV0dXJucyB0aGUgdW5vcmRlcmVkIHNtYWxsZXN0IGRlZ3JlZSB2ZXJ0ZXggb25cbi8vIHRoaXMgY2lyY2xlLlxuQVZTREZDaXJjbGUucHJvdG90eXBlLmZpbmRVbm9yZGVyZWRTbWFsbGVzdERlZ3JlZU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1pbkRlZ3JlZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGxldCBzRGVncmVlTm9kZTtcblxuICAgIHRoaXMuZ2V0Tm9kZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmdldERlZ3JlZSgpIDwgbWluRGVncmVlICYmICFub2RlLmlzT3JkZXJlZCgpKSB7XG4gICAgICAgICAgICBtaW5EZWdyZWUgPSBub2RlLmdldERlZ3JlZSgpO1xuICAgICAgICAgICAgc0RlZ3JlZU5vZGUgPSBub2RlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc0RlZ3JlZU5vZGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGQ2lyY2xlO1xuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIG92ZXJhbGwgbGF5b3V0IHByb2Nlc3MgZm9yIHRoZSBBVlNERiBhbGdvcml0aG1cbiAqIChDaXJjdWxhciBEcmF3aW5nIEFsZ29yaXRobSBieSBIZSBhbmQgU3lrb3JhKS5cbiAqXG4gKlxuICogQ29weXJpZ2h0OiBpLVZpcyBSZXNlYXJjaCBHcm91cCwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDA3IC0gcHJlc2VudFxuICovXG5cbmxldCBMYXlvdXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLkxheW91dDtcbmxldCBBVlNERkNvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5sZXQgQVZTREZDaXJjbGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xubGV0IEFWU0RGTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5sZXQgQVZTREZFZGdlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQ29uc3RydWN0b3JcbmZ1bmN0aW9uIEFWU0RGTGF5b3V0KCkge1xuICAgIExheW91dC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubm9kZVNlcGFyYXRpb24gPSBBVlNERkNvbnN0YW50cy5ERUZBVUxUX05PREVfU0VQQVJBVElPTjtcbn1cblxuQVZTREZMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yIChsZXQgcHJvcGVydHkgaW4gTGF5b3V0KSB7XG4gICAgQVZTREZMYXlvdXRbcHJvcGVydHldID0gTGF5b3V0W3Byb3BlcnR5XTtcbn1cblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZPYmplY3QpIHtcbiAgICB0aGlzLmF2c2RmQ2lyY2xlID0gbmV3IEFWU0RGQ2lyY2xlKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2T2JqZWN0KTtcblxuICAgIHJldHVybiB0aGlzLmF2c2RmQ2lyY2xlO1xufTtcblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgICByZXR1cm4gbmV3IEFWU0RGTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpIHtcbiAgICByZXR1cm4gbmV3IEFWU0RGRWRnZShudWxsLCBudWxsLCB2RWRnZSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogQWNjZXNzb3IgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHBvc2l0aW9uIGRhdGEgZm9yIGFsbCBub2Rlc1xuQVZTREZMYXlvdXQucHJvdG90eXBlLmdldFBvc2l0aW9uc0RhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICB2YXIgcERhdGEgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlY3QgPSBhbGxOb2Rlc1tpXS5yZWN0O1xuICAgICAgICB2YXIgaWQgPSBhbGxOb2Rlc1tpXS5pZDtcblxuICAgICAgICBwRGF0YVtpZF0gPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB4OiByZWN0LmdldENlbnRlclgoKSxcbiAgICAgICAgICAgIHk6IHJlY3QuZ2V0Q2VudGVyWSgpLFxuICAgICAgICAgICAgdzogcmVjdC53aWR0aCxcbiAgICAgICAgICAgIGg6IHJlY3QuaGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBEYXRhO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IExheW91dCBSZWxhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcGVyZm9ybXMgbGF5b3V0IG9uIGNvbnN0cnVjdGVkIGwtbGV2ZWwgZ3JhcGguXG4gKiBJdCByZXR1cm5zIHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb3RoZXJ3aXNlLlxuICogSW1wb3J0YW50ITogSWYgeW91IHdhbnQgdG8gc2VlIHRoZSByZXN1bHRzIG9mIHRoaXMgZnVuY3Rpb24gdGhlbiwgYWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHlvdSBoYXZlIHRvIGNhbGN1bGF0ZVxuICogYW5kIHNldCB0aGUgcG9zaXRpb25zIG9mIGV2ZXJ5IG5vZGUuIFRvIGRvIHRoaXMgY2FsbCB1cGRhdGVOb2RlQ29vcmRpbmF0ZXMuIEhvd2V2ZXIsIHVwZGF0ZU5vZGVBbmdsZXMgb24gdGhlIG90aGVyXG4gKiBoYW5kIGlzIG5vdCBuZWVkZWQgKHJlZHVuZGFudCkgZm9yIHRoaXMgZnVuY3Rpb24uXG4gKi9cbkFWU0RGTGF5b3V0LnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gQ2hlY2sgaWYgZ3JhcGggY29udGFpbnMgYW55IGNvbXBvdW5kIHN0cnVjdHVyZXNcbiAgICBpZiAoc2VsZi5ncmFwaE1hbmFnZXIuZ2V0R3JhcGhzKCkubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IGNsdXN0ZXJHcmFwaCA9IHRoaXMuYXZzZGZDaXJjbGU7IC8vIEZpeGVkIHJlZmVyZW5jZSwgYnV0IG5vdyBpdCBpcyBhIGJpdCByZWR1bmRhbnRcblxuICAgIGNsdXN0ZXJHcmFwaC5zZXROb2RlU2VwYXJhdGlvbih0aGlzLm5vZGVTZXBhcmF0aW9uKTtcbiAgICBjbHVzdGVyR3JhcGguY2FsY3VsYXRlUmFkaXVzKCk7XG4gICAgY2x1c3RlckdyYXBoLmluaXRPcmRlcmluZygpO1xuXG4gICAgd2hpbGUgKCFjbHVzdGVyR3JhcGguaGFzRmluaXNoZWRPcmRlcmluZygpKSB7XG4gICAgICAgIGxldCBub2RlID0gY2x1c3RlckdyYXBoLmZpbmROb2RlVG9QbGFjZSgpO1xuICAgICAgICBjbHVzdGVyR3JhcGgucHV0SW5PcmRlcihub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgYW5nbGUgKGluIHJhZGlhbnMpIHByb3BlcnR5IG9mIEFWU0RGTm9kZSBlbGVtZW50cyBpbiB0aGUgY2lyY2xlXG5BVlNERkxheW91dC5wcm90b3R5cGUudXBkYXRlTm9kZUFuZ2xlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuY29ycmVjdEFuZ2xlcygpOyAvL0FWU0RGQ2lyY2xlIG9iamVjdFxufTtcblxuLy8gVGhpcyBmdW5jdGlvbiB0cmF2ZXJzZXMgdGhlIHZlcnRpY2VzIG9mIHRoZSBncmFwaCBhbmQgc2V0cyB0aGVpciBjb3JyZWN0IGNvb3JkaW5hdGVzIHdpdGggcmVzcGVjdCB0byB0aGUgb3duZXIgY2lyY2xlLlxuQVZTREZMYXlvdXQucHJvdG90eXBlLnVwZGF0ZU5vZGVDb29yZGluYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY2x1c3RlckdyYXBoID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpO1xuXG4gICAgY2x1c3RlckdyYXBoLmdldE5vZGVzKCkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBub2RlLnNldENlbnRlcihjbHVzdGVyR3JhcGguZ2V0Q2VudGVyWCgpICsgY2x1c3RlckdyYXBoLmdldFJhZGl1cygpICogTWF0aC5jb3Mobm9kZS5nZXRBbmdsZSgpKSwgY2x1c3RlckdyYXBoLmdldENlbnRlclkoKSArIGNsdXN0ZXJHcmFwaC5nZXRSYWRpdXMoKSAqIE1hdGguc2luKG5vZGUuZ2V0QW5nbGUoKSkpO1xuICAgIH0pO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IFBvc3QgUHJvY2Vzc2luZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpbXBsZW1lbnRzIHRoZSBwb3N0IHByb2Nlc3Npbmcgc3RlcCBvZiB0aGUgYWxnb3JpdGhtLCB3aGljaFxuICogdHJpZXMgdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiBlZGdlcyBmdXJ0aGVyIHdpdGggcmVzcGVjdCB0byB0aGUgbG9jYWxcbiAqIGFkanVzdGluZyBhbGdvcml0aG0gZGVzY3JpYmVkIGJ5IEhlIGFuZCBTeWtvcmEuXG4gKi9cbkFWU0RGTGF5b3V0LnByb3RvdHlwZS5pbml0UG9zdFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hdnNkZkNpcmNsZS5jYWxjdWxhdGVFZGdlQ3Jvc3NpbmdzT2ZOb2RlcygpO1xuXG4gICAgbGV0IGxpc3QgPSB0aGlzLmF2c2RmQ2lyY2xlLmdldE5vZGVzKCk7XG5cbiAgICBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKSAtIGEuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuQVZTREZMYXlvdXQucHJvdG90eXBlLm9uZVN0ZXBQb3N0UHJvY2VzcyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IGN1cnJlbnRDcm9zc2luZ051bWJlciA9IG5vZGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMoKTtcbiAgICBsZXQgbmV3Q3Jvc3NpbmdOdW1iZXI7XG5cbiAgICBsZXQgbmVpZ2hib3VycyA9IFtdO1xuICAgIG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLmFkZEFsbFRvKG5laWdoYm91cnMpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZWlnaGJvdXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGxldCBuZWlnaGJvdXIgPSBuZWlnaGJvdXJzW2pdO1xuXG4gICAgICAgIGxldCBvbGRJbmRleCA9IG5vZGUuZ2V0SW5kZXgoKTtcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gKG5laWdoYm91ci5nZXRJbmRleCgpICsgMSkgJSBzZWxmLmF2c2RmQ2lyY2xlLmdldFNpemUoKTtcblxuICAgICAgICBpZiAob2xkSW5kZXggIT09IG5ld0luZGV4KSB7XG4gICAgICAgICAgICBub2RlLnNldEluZGV4KG5ld0luZGV4KTtcblxuICAgICAgICAgICAgaWYgKG9sZEluZGV4IDwgbm9kZS5nZXRJbmRleCgpKSB7XG4gICAgICAgICAgICAgICAgb2xkSW5kZXggKz0gc2VsZi5hdnNkZkNpcmNsZS5nZXRTaXplKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IG5vZGUuZ2V0SW5kZXgoKTtcblxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgb2xkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IHNlbGYuYXZzZGZDaXJjbGUuZ2V0T3JkZXIoKVtpbmRleCAlIHNlbGYuYXZzZGZDaXJjbGUuZ2V0U2l6ZSgpXTtcbiAgICAgICAgICAgICAgICB0ZW1wLnNldEluZGV4KCh0ZW1wLmdldEluZGV4KCkgKyAxKSAlIHNlbGYuYXZzZGZDaXJjbGUuZ2V0U2l6ZSgpKTtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlLmNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmcoKTtcbiAgICAgICAgICAgIG5ld0Nyb3NzaW5nTnVtYmVyID0gbm9kZS5nZXRUb3RhbENyb3NzaW5nT2ZFZGdlcygpO1xuXG4gICAgICAgICAgICBpZiAobmV3Q3Jvc3NpbmdOdW1iZXIgPj0gY3VycmVudENyb3NzaW5nTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdnNkZkNpcmNsZS5sb2FkT2xkSW5kaWNlc09mTm9kZXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hdnNkZkNpcmNsZS5yZU9yZGVyVmVydGljZXMoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3Jvc3NpbmdOdW1iZXIgPSBuZXdDcm9zc2luZ051bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREZMYXlvdXQ7XG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaW1wbGVtZW50cyBkYXRhIGFuZCBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIGZvciBBVlNERiBsYXlvdXQgcGVyXG4gKiBub2RlLlxuICpcbiAqXG4gKiBDb3B5cmlnaHQ6IGktVmlzIFJlc2VhcmNoIEdyb3VwLCBCaWxrZW50IFVuaXZlcnNpdHksIDIwMDcgLSBwcmVzZW50XG4gKi9cblxubGV0IExOb2RlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKS5MTm9kZTtcbmxldCBRdWlja3NvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLlF1aWNrc29ydDtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEluaXRpYWxpemF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gQVZTREZOb2RlKGdtLCB2Tm9kZSwgbG9jLCBzaXplKSB7XG4gICAgLy8gQ29uc3RydWN0b3IgMTogQVZTREZOb2RlKGdtLCB2Tm9kZSwgbG9jLCBzaXplKVxuICAgIGlmIChsb2MgIT09IHVuZGVmaW5lZCAmJiBzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgTE5vZGUuY2FsbCh0aGlzLCBnbSwgdk5vZGUsIGxvYywgc2l6ZSk7XG4gICAgfVxuICAgIC8vIENvbnN0cnVjdG9yIDI6IEFWU0RGTm9kZShnbSwgdk5vZGUpXG4gICAgZWxzZSB7XG4gICAgICAgICAgICBMTm9kZS5jYWxsKHRoaXMsIGdtLCB2Tm9kZSk7XG4gICAgICAgIH1cblxuICAgIC8vIEFuZ2xlIG9mIHRoaXMgbm9kZSBvbiB0aGUgb3duZXIgY2lyY2xlIGluIHJhZGlhbnNcbiAgICB0aGlzLmFuZ2xlID0gMDtcblxuICAgIC8vIEluZGV4IG9mIHRoaXMgbm9kZSBvbiB0aGUgb3duZXIgY2lyY2xlXG4gICAgdGhpcy5jaXJjbGVJbmRleCA9IC0xO1xuXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyBvZiB0aGUgZWRnZXMgdGhpcyBub2RlIGlzIGluY2lkZW50IHRvXG4gICAgdGhpcy50b3RhbENyb3NzaW5nT2ZFZGdlcyA9IC0xO1xuXG4gICAgLy8gV2hldGhlciB0aGUgY3VycmVudCBlZGdlIGNyb3NzaW5nIG51bWJlciBpcyB2YWxpZCBvciBpdCBuZWVkcyB0byBiZVxuICAgIC8vIHJlY2FsY3VsYXRlZFxuICAgIHRoaXMuaXNDcm9zc2luZ051bWJlclZhbGlkID0gZmFsc2U7XG59XG5cbkFWU0RGTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExOb2RlLnByb3RvdHlwZSk7XG5mb3IgKGxldCBwcm9wZXJ0aWVzIGluIExOb2RlKSB7XG4gICAgQVZTREZOb2RlW3Byb3BlcnRpZXNdID0gTE5vZGVbcHJvcGVydGllc107XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBBY2Nlc3NvciBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgY2lyY2xlIHRoaXMgbm9kZSBpcyBvd25lZCBieS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0Q2lyY2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldE93bmVyKCk7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGluZGV4IG9mIHRoaXMgbm9kZSBvbiB0aGUgY2lyY2xlLCBhbmQgc2V0cyB0aGVcbi8vIGNyb3NzaW5nIG51bWJlciBpbnZhbGlkLiBEdWUgdG8gdGhlIGluZGV4IGNoYW5nZSBvZiB0aGUgbm9kZTsgaXQgbmVlZHMgdG9cbi8vIGJlIHJlY2FsY3VsYXRlZC5cbkFWU0RGTm9kZS5wcm90b3R5cGUuc2V0SW5kZXggPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB0aGlzLmNpcmNsZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5pc0Nyb3NzaW5nTnVtYmVyVmFsaWQgPSBmYWxzZTtcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhpcyBub2RlIGluIHRoZSBvcmRlcmluZyBvZiBpdHMgb3duZXJcbi8vIGNpcmNsZS4gSGVyZSAtMSBtZWFucyB0aGF0IHRoZSB2ZXJ0ZXggaXMgbm90IHlldCBwbGFjZWQgb24gaXRzIG93bmVyXG4vL2NpcmNsZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0SW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2lyY2xlSW5kZXg7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGFycmF5IG9mIHRoZSBuZWlnYm9ycyBvZiB0aGlzIG5vZGUgc29ydGVkIGluXG4vLyBhc2NlbmRpbmcgb3JkZXIuXG5BVlNERk5vZGUucHJvdG90eXBlLmdldE5laWdoYm9yc1NvcnRlZEJ5RGVncmVlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBuZWlnaGJvcnNMaXN0ID0gW107XG4gICAgc2VsZi5nZXROZWlnaGJvcnNMaXN0KCkuYWRkQWxsVG8obmVpZ2hib3JzTGlzdCk7XG4gICAgbGV0IHJlc3VsdCA9IG5laWdoYm9yc0xpc3QuZmlsdGVyKG5vZGUgPT4gbm9kZS5nZXRJbmRleCgpID09PSAtMSk7XG5cbiAgICByZXN1bHQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5nZXREZWdyZWUoKSAtIGIuZ2V0RGVncmVlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBkZWdyZWUgb2YgdGhpcyBub2RlLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXREZWdyZWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RWRnZXMoKS5sZW5ndGg7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgd2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGN1cnJlbnRseSBwbGFjZWQgb24gaXRzXG4vLyBvd25lciBjaXJjbGUuXG5BVlNERk5vZGUucHJvdG90eXBlLmlzT3JkZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbmRleCgpID4gLTE7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGFuZ2xlIG9mIHRoaXMgbm9kZSB3LnIudC4gaXRzIG93bmVyIGNpcmNsZS4gSGVyZVxuLy8gdGhlIGFuZ2xlIHZhbHVlIGlzIGluIHJhZGlhbi5cbkFWU0RGTm9kZS5wcm90b3R5cGUuc2V0QW5nbGUgPSBmdW5jdGlvbiAoYW5nbGUpIHtcbiAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGFuZ2xlIG9mIHRoaXMgbm9kZSB3LnIudC4gaXRzIG93bmVyIGNpcmNsZS4gSGVyZVxuLy8gdGhlIGFuZ2xlIHZhbHVlIGlzIGluIHJhZGlhbi5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5nbGU7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGluZGV4IGRpZmZlcmVuY2Ugb2YgdGhpcyBub2RlIHdpdGggdGhlIGlucHV0XG4vLyBub2RlLiBOb3RlIHRoYXQgdGhlIGluZGV4IGRpZmZlcmVuY2UgY2Fubm90IGJlIG5lZ2F0aXZlIGlmIGJvdGggbm9kZXMgYXJlXG4vLyBwbGFjZWQgb24gdGhlIGNpcmNsZS4gSGVyZSAtMSBtZWFucyBhdCBsZWFzdCBvbmUgb2YgdGhlIG5vZGVzIGFyZSBub3QgeWV0XG4vLyBwbGFjZWQgb24gdGhlIGNpcmNsZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0Q2lyY0Rpc3RXaXRoVGhlTm9kZSA9IGZ1bmN0aW9uIChyZWZOb2RlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBvdGhlckluZGV4ID0gcmVmTm9kZS5nZXRJbmRleCgpO1xuXG4gICAgaWYgKG90aGVySW5kZXggPT09IC0xIHx8IHNlbGYuZ2V0SW5kZXgoKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBkaWZmID0gc2VsZi5nZXRJbmRleCgpIC0gb3RoZXJJbmRleDtcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICBkaWZmICs9IHNlbGYuZ2V0Q2lyY2xlKCkuZ2V0U2l6ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBkaWZmO1xufTtcblxuLy8gVGhpcyBmdW5jdGlvbiBmaW5kcyB0aGUgbnVtYmVyIG9mIGVkZ2UgY3Jvc3NpbmdzIGJldHdlZW4gdGhlIGVkZ2VzIG9mXG4vLyB0aGlzIG5vZGUgYW5kIHRoZSBlZGdlcyBvZiB0aGUgaW5wdXQgb25lLlxuQVZTREZOb2RlLnByb3RvdHlwZS5nZXRDcm9zc2luZ051bWJlcldpdGhOb2RlID0gZnVuY3Rpb24gKG90aGVyTm9kZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBsZXQgdG90YWxDcm9zc2luZyA9IDA7XG5cbiAgICBzZWxmLmdldEVkZ2VzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWRnZSkge1xuICAgICAgICBvdGhlck5vZGUuZ2V0RWRnZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChvdGhlckVkZ2UpIHtcbiAgICAgICAgICAgIHRvdGFsQ3Jvc3NpbmcgKz0gZWRnZS5jcm9zc2luZ1dpdGhFZGdlKG90aGVyRWRnZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvdGFsQ3Jvc3Npbmc7XG59O1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBlZGdlIGNyb3NzaW5ncy4gSWYgdGhlIHByZXZpb3VzbHlcbi8vIGNhbGN1bGF0ZWQgdmFsdWUgaXMgbm90IHZhbGlkIGR1ZSB0byBhbiBpbmRleCBjaGFuZ2Ugb24gdGhlIGNpcmNsZSwgdGhlblxuLy8gYSByZWNhbGN1bGF0aW9uIGlzIHBlcmZvcm1lZC5cbkFWU0RGTm9kZS5wcm90b3R5cGUuZ2V0VG90YWxDcm9zc2luZ09mRWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLmlzQ3Jvc3NpbmdOdW1iZXJWYWxpZCkge1xuICAgICAgICBzZWxmLmNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmcoKTtcbiAgICAgICAgc2VsZi5pc0Nyb3NzaW5nTnVtYmVyVmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLnRvdGFsQ3Jvc3NpbmdPZkVkZ2VzO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IFJlbWFpbmluZyBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyB0aGUgdG90YWwgbnVtYmVyIG9mIGNyb3NzaW5ncyB0aGUgZWRnZXMgb2YgdGhpc1xuLy8gbm9kZSBjYXVzZS5cbkFWU0RGTm9kZS5wcm90b3R5cGUuY2FsY3VsYXRlVG90YWxDcm9zc2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHRlbXBfY3Jvc3NpbmdfY291bnQgPSAwO1xuICAgIGxldCB0ZW1wX2VkZ2VfbGlzdCA9IFtdO1xuICAgIHRlbXBfZWRnZV9saXN0LnB1c2guYXBwbHkodGVtcF9lZGdlX2xpc3QsIHNlbGYuZ2V0Q2lyY2xlKCkuZ2V0RWRnZXMoKSk7XG4gICAgdGVtcF9lZGdlX2xpc3QgPSB0ZW1wX2VkZ2VfbGlzdC5maWx0ZXIoZWxlID0+IHNlbGYuZ2V0RWRnZXMoKS5pbmRleE9mKGVsZSkgPCAwKTtcblxuICAgIHNlbGYuZ2V0RWRnZXMoKS5mb3JFYWNoKGVkZ2UgPT4gdGVtcF9jcm9zc2luZ19jb3VudCArPSBlZGdlLmNhbGN1bGF0ZVRvdGFsQ3Jvc3NpbmdXaXRoTGlzdCh0ZW1wX2VkZ2VfbGlzdCkpO1xuXG4gICAgc2VsZi50b3RhbENyb3NzaW5nT2ZFZGdlcyA9IHRlbXBfY3Jvc3NpbmdfY291bnQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFWU0RGTm9kZTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTloZG5Oa1prSmhjMlV2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92TDJGMmMyUm1RbUZ6WlM5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NJc0luZGxZbkJoWTJzNkx5OWhkbk5rWmtKaGMyVXZMaTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5aGRuTmtaa0poYzJVdkxpOXViMlJsWDIxdlpIVnNaWE12YkdGNWIzVjBMV0poYzJVdmJHRjViM1YwTFdKaGMyVXVhbk1pTENKM1pXSndZV05yT2k4dllYWnpaR1pDWVhObEx5NHZjM0pqTDBGV1UwUkdRMjl1YzNSaGJuUnpMbXB6SWl3aWQyVmljR0ZqYXpvdkwyRjJjMlJtUW1GelpTOHVMM055WXk5QlZsTkVSa1ZrWjJVdWFuTWlMQ0ozWldKd1lXTnJPaTh2WVhaelpHWkNZWE5sTHk0dmMzSmpMMEZXVTBSR1EybHlZMnhsTG1weklpd2lkMlZpY0dGamF6b3ZMMkYyYzJSbVFtRnpaUzh1TDNOeVl5OUJWbE5FUmt4aGVXOTFkQzVxY3lJc0luZGxZbkJoWTJzNkx5OWhkbk5rWmtKaGMyVXZMaTl6Y21NdlFWWlRSRVpPYjJSbExtcHpJbDBzSW01aGJXVnpJanBiSW1GMmMyUm1RbUZ6WlNJc0lteGhlVzkxZEVKaGMyVWlMQ0p5WlhGMWFYSmxJaXdpUVZaVFJFWkRiMjV6ZEdGdWRITWlMQ0pCVmxORVJrVmtaMlVpTENKQlZsTkVSa05wY21Oc1pTSXNJa0ZXVTBSR1RHRjViM1YwSWl3aVFWWlRSRVpPYjJSbElpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SXNJa3hoZVc5MWRFTnZibk4wWVc1MGN5SXNJbkJ5YjNBaUxDSkVSVVpCVlV4VVgwNVBSRVZmVTBWUVFWSkJWRWxQVGlJc0lreEZaR2RsSWl3aWMyOTFjbU5sSWl3aWRHRnlaMlYwSWl3aWRrVmtaMlVpTENKallXeHNJaXdpY0hKdmRHOTBlWEJsSWl3aVQySnFaV04wSWl3aVkzSmxZWFJsSWl3aWNISnZjR1Z5ZEdsbGN5SXNJbWRsZEU5MGFHVnlSVzVrSWl3aWJtOWtaU0lzSW1OeWIzTnpaWE5YYVhSb1JXUm5aU0lzSW05MGFHVnlSV1JuWlNJc0luTmxiR1lpTENKemIzVnlZMlZRYjNNaUxDSm5aWFJUYjNWeVkyVWlMQ0puWlhSSmJtUmxlQ0lzSW5SaGNtZGxkRkJ2Y3lJc0ltZGxkRlJoY21kbGRDSXNJbTkwYUdWeVUyOTFjbU5sVUc5eklpd2liM1JvWlhKVVlYSm5aWFJRYjNNaUxDSnZkR2hsY2xOdmRYSmpaVVJwYzNRaUxDSm5aWFJEYVhKalJHbHpkRmRwZEdoVWFHVk9iMlJsSWl3aWIzUm9aWEpVWVhKblpYUkVhWE4wSWl3aWRHaHBjMVJoY21kbGRFUnBjM1FpTENKTllYUm9JaXdpYldGNElpd2liV2x1SWl3aVkzSnZjM05wYm1kWGFYUm9SV1JuWlNJc0luSmxjM1ZzZENJc0ltTmhiR04xYkdGMFpWUnZkR0ZzUTNKdmMzTnBibWRYYVhSb1RHbHpkQ0lzSW1Wa1oyVk1hWE4wSWl3aWRHOTBZV3hEY205emMybHVaeUlzSW1admNrVmhZMmdpTENKbFpHZGxJaXdpVEVkeVlYQm9JaXdpY0dGeVpXNTBJaXdpWjNKaGNHaE5aM0lpTENKMlQySnFaV04wSWl3aWFXNVBjbVJsY2lJc0luVnVaR1ZtYVc1bFpDSXNJbU4xY25KbGJuUkpibVJsZUNJc0ltNXZaR1ZUWlhCaGNtRjBhVzl1SWl3aWMzUmhZMnNpTENKd1pYSnBiV1YwWlhJaUxDSmpaVzUwWlhKWUlpd2lZMlZ1ZEdWeVdTSXNJbkpoWkdsMWN5SXNJbkJ5YjNCbGNuUjVJaXdpYVc1cGRFOXlaR1Z5YVc1bklpd2laMlYwVDNKa1pYSWlMQ0puWlhSRFpXNTBaWEpZSWl3aVoyVjBRMlZ1ZEdWeVdTSXNJbWRsZEZKaFpHbDFjeUlzSW1kbGRGTnBlbVVpTENKblpYUk9iMlJsY3lJc0lteGxibWQwYUNJc0ltZGxkRlJ2ZEdGc1EzSnZjM05wYm1kUFprTnBjbU5zWlNJc0ltTnliM056YVc1blRuVnRZbVZ5SWl3aWJtOWtaVU55YjNOemFXNW5JaXdpWjJWMFZHOTBZV3hEY205emMybHVaMDltUldSblpYTWlMQ0pvWVhOR2FXNXBjMmhsWkU5eVpHVnlhVzVuSWl3aVoyVjBUbTlrWlZObGNHRnlZWFJwYjI0aUxDSnpaWFJPYjJSbFUyVndZWEpoZEdsdmJpSXNJbU52Y25KbFkzUkJibWRzWlhNaUxDSndkWFJKYms5eVpHVnlJaXdpYm05a1pYTWlMQ0ptYjNWdVpDSXNJbWtpTENKcFpDSXNJbk5sZEVsdVpHVjRJaXdpYzJWMFFXNW5iR1VpTENKblpYUkJibWRzWlNJc0lsQkpJaXdpWjJWMFJHbGhaMjl1WVd3aUxDSm1hVzVrVG05a1pWUnZVR3hoWTJVaUxDSnpSR1ZuY21WbFRtOWtaU0lzSW1acGJtUlZibTl5WkdWeVpXUlRiV0ZzYkdWemRFUmxaM0psWlU1dlpHVWlMQ0ptYjNWdVpGVnViM0prWlhKT2IyUmxJaXdpY0c5d0lpd2lhWE5QY21SbGNtVmtJaXdpYm1WcFoyaGliM0p6SWl3aVoyVjBUbVZwWjJoaWIzSnpVMjl5ZEdWa1FubEVaV2R5WldVaUxDSnVaV2xuYUdKdmNpSXNJbkIxYzJnaUxDSmpZV3hqZFd4aGRHVlNZV1JwZFhNaUxDSjBiM1JoYkVScFlXZHZibUZzSWl3aWMzRnlkQ0lzSW1kbGRGZHBaSFJvSWl3aVoyVjBTR1ZwWjJoMElpd2laMlYwVUdGeVpXNTBJaXdpYzJWMFYybGtkR2dpTENKelpYUklaV2xuYUhRaUxDSnpaWFJEWlc1MFpYSWlMQ0pqWVd4amRXeGhkR1ZGWkdkbFEzSnZjM05wYm1kelQyWk9iMlJsY3lJc0ltTmhiR04xYkdGMFpWUnZkR0ZzUTNKdmMzTnBibWNpTENKc2IyRmtUMnhrU1c1a2FXTmxjMDltVG05a1pYTWlMQ0p5WlU5eVpHVnlWbVZ5ZEdsalpYTWlMQ0p0YVc1RVpXZHlaV1VpTENKT2RXMWlaWElpTENKTlFWaGZVMEZHUlY5SlRsUkZSMFZTSWl3aVoyVjBSR1ZuY21WbElpd2lUR0Y1YjNWMElpd2libVYzUjNKaGNHZ2lMQ0poZG5Oa1prTnBjbU5zWlNJc0ltZHlZWEJvVFdGdVlXZGxjaUlzSW01bGQwNXZaR1VpTENKMlRtOWtaU0lzSW01bGQwVmtaMlVpTENKblpYUlFiM05wZEdsdmJuTkVZWFJoSWl3aVlXeHNUbTlrWlhNaUxDSm5aWFJCYkd4T2IyUmxjeUlzSW5CRVlYUmhJaXdpY21WamRDSXNJbmdpTENKNUlpd2lkeUlzSW5kcFpIUm9JaXdpYUNJc0ltaGxhV2RvZENJc0lteGhlVzkxZENJc0ltZGxkRWR5WVhCb2N5SXNJbU5zZFhOMFpYSkhjbUZ3YUNJc0luVndaR0YwWlU1dlpHVkJibWRzWlhNaUxDSm5aWFJTYjI5MElpd2lkWEJrWVhSbFRtOWtaVU52YjNKa2FXNWhkR1Z6SWl3aVkyOXpJaXdpYzJsdUlpd2lhVzVwZEZCdmMzUlFjbTlqWlhOeklpd2liR2x6ZENJc0luTnZjblFpTENKaElpd2lZaUlzSW05dVpWTjBaWEJRYjNOMFVISnZZMlZ6Y3lJc0ltTjFjbkpsYm5SRGNtOXpjMmx1WjA1MWJXSmxjaUlzSW01bGQwTnliM056YVc1blRuVnRZbVZ5SWl3aWJtVnBaMmhpYjNWeWN5SXNJbWRsZEU1bGFXZG9ZbTl5YzB4cGMzUWlMQ0poWkdSQmJHeFVieUlzSW1vaUxDSnVaV2xuYUdKdmRYSWlMQ0p2YkdSSmJtUmxlQ0lzSW01bGQwbHVaR1Y0SWl3aWFXNWtaWGdpTENKMFpXMXdJaXdpVEU1dlpHVWlMQ0pSZFdsamEzTnZjblFpTENKbmJTSXNJbXh2WXlJc0luTnBlbVVpTENKaGJtZHNaU0lzSW1OcGNtTnNaVWx1WkdWNElpd2lkRzkwWVd4RGNtOXpjMmx1WjA5bVJXUm5aWE1pTENKcGMwTnliM056YVc1blRuVnRZbVZ5Vm1Gc2FXUWlMQ0puWlhSRGFYSmpiR1VpTENKblpYUlBkMjVsY2lJc0ltNWxhV2RvWW05eWMweHBjM1FpTENKbWFXeDBaWElpTENKblpYUkZaR2RsY3lJc0luSmxaazV2WkdVaUxDSnZkR2hsY2tsdVpHVjRJaXdpWkdsbVppSXNJbWRsZEVOeWIzTnphVzVuVG5WdFltVnlWMmwwYUU1dlpHVWlMQ0p2ZEdobGNrNXZaR1VpTENKMFpXMXdYMk55YjNOemFXNW5YMk52ZFc1MElpd2lkR1Z0Y0Y5bFpHZGxYMnhwYzNRaUxDSmhjSEJzZVNJc0ltVnNaU0lzSW1sdVpHVjRUMllpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3p0QlEyeEdZVHM3UVVGRllpeEpRVUZKUVN4WlFVRlpMRVZCUVdoQ096dEJRVVZCUVN4VlFVRlZReXhWUVVGV0xFZEJRWFZDUXl4dFFrRkJUMEVzUTBGQlF5eERRVUZTTEVOQlFYWkNPMEZCUTBGR0xGVkJRVlZITEdOQlFWWXNSMEZCTWtKRUxHMUNRVUZQUVN4RFFVRkRMRU5CUVZJc1EwRkJNMEk3UVVGRFFVWXNWVUZCVlVrc1UwRkJWaXhIUVVGelFrWXNiVUpCUVU5QkxFTkJRVU1zUTBGQlVpeERRVUYwUWp0QlFVTkJSaXhWUVVGVlN5eFhRVUZXTEVkQlFYZENTQ3h0UWtGQlQwRXNRMEZCUXl4RFFVRlNMRU5CUVhoQ08wRkJRMEZHTEZWQlFWVk5MRmRCUVZZc1IwRkJkMEpLTEcxQ1FVRlBRU3hEUVVGRExFTkJRVklzUTBGQmVFSTdRVUZEUVVZc1ZVRkJWVThzVTBGQlZpeEhRVUZ6UWt3c2JVSkJRVTlCTEVOQlFVTXNRMEZCVWl4RFFVRjBRanM3UVVGRlFVMHNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFsUXNVMEZCYWtJc1F6czdPenM3TzBGRFdFRTdRVUZEUVN4SlFVRkpMRWxCUVhsRU8wRkJRemRFTzBGQlEwRXNUVUZCVFN4RlFVc3lRanRCUVVOcVF5eERRVUZETzBGQlEwUXNiME5CUVc5RE8wRkJRM0JETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMFJCUVd0RUxHZERRVUZuUXp0QlFVTnNSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJaMFVzYTBKQlFXdENPMEZCUTJ4R08wRkJRMEVzZVVSQlFYbEVMR05CUVdNN1FVRkRka1U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJhVVFzYVVOQlFXbERPMEZCUTJ4R0xIZElRVUYzU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU0zU1R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCYlVNc01FSkJRVEJDTEVWQlFVVTdRVUZETDBRc2VVTkJRWGxETEdWQlFXVTdRVUZEZUVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERoRVFVRTRSQ3dyUkVGQkswUTdRVUZETjBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlZPMEZCUTFZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3hQUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNhVUpCUVdsQ0xIRkNRVUZ4UWp0QlFVTjBRenM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc2JVSkJRVzFDTzBGQlEzQkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNaVUZCWlN4dFFrRkJiVUk3UVVGRGJFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGdzWlVGQlpTeHRRa0ZCYlVJN1FVRkRiRU03TzBGQlJVRXNjVUpCUVhGQ0xHMUNRVUZ0UWp0QlFVTjRRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc2JVSkJRVzFDTzBGQlEzQkRPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNiVUpCUVcxQ08wRkJRM0JETzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzY1VKQlFYRkNPMEZCUTNSRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc2FVSkJRV2xDTEZkQlFWYzdRVUZETlVJN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc1YwRkJWenRCUVVNMVFpeHRRa0ZCYlVJc1YwRkJWenRCUVVNNVFqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h6UWtGQmMwSXNZMEZCWXp0QlFVTndReXgzUWtGQmQwSXNZMEZCWXp0QlFVTjBRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1lVRkJZU3h0UWtGQmJVSTdRVUZEYUVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4clEwRkJhME1zZFVKQlFYVkNPMEZCUTNwRUxHOURRVUZ2UXl4MVFrRkJkVUk3UVVGRE0wUTdRVUZEUVN4NVFrRkJlVUlzZFVKQlFYVkNPMEZCUTJoRU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4aFFVRmhMRGhDUVVFNFFqdEJRVU16UXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxQ1FVRnRRaXh4UWtGQmNVSTdRVUZEZUVNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeHJRa0ZCYTBJN1FVRkRja003UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhGQ1FVRnhRaXhyUWtGQmEwSTdRVUZEZGtNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzY1VKQlFYRkNMR3RDUVVGclFqdEJRVU4yUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHMUNRVUZ0UWl4clFrRkJhMEk3UVVGRGNrTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEhGQ1FVRnhRanRCUVVOMFF6dEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTEhGQ1FVRnhRaXd3UWtGQk1FSTdRVUZETDBNN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gxUWtGQmRVSXNhVUpCUVdsQ08wRkJRM2hETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4cFFrRkJhVUlzTkVKQlFUUkNPMEZCUXpkRE8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xHdENRVUZyUWp0QlFVTnVRenM3UVVGRlFUdEJRVU5CT3p0QlFVVkJMSEZDUVVGeFFpeHBRa0ZCYVVJN1FVRkRkRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHbENRVUZwUWl4cFFrRkJhVUk3UVVGRGJFTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2JVSkJRVzFDTEdsQ1FVRnBRanRCUVVOd1F6czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4UFFVRlBPMEZCUTFBN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc1QwRkJUenRCUVVOUU8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUVzVDBGQlR6dEJRVU5RTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEcxRFFVRnRRenRCUVVOdVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xFOUJRVTg3UVVGRE1VSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWl4UFFVRlBPMEZCUXpGQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFDUVVGdFFpeFBRVUZQTzBGQlF6RkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEcxQ1FVRnRRanRCUVVOMFF6dEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZIT3p0QlFVVklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHBRa0ZCYVVJc1QwRkJUenRCUVVONFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE96dEJRVVZNTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xFOUJRVTg3UVVGRGVFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRa0ZCYVVJc1QwRkJUenRCUVVONFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc1QwRkJUenRCUVVOUU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc1QwRkJUenRCUVVOUU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEU5QlFVODdRVUZEVUR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUE8wRkJRMUE3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnp0QlFVTllMRFpDUVVFMlFqdEJRVU0zUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzZVVKQlFYbENMRXRCUVVzN08wRkJSVGxDTzBGQlEwRTdRVUZEUVN4NVFrRkJlVUlzUzBGQlN6czdRVUZGT1VJN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFTeFBRVUZQTzBGQlExQTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRXNUMEZCVHp0QlFVTlFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xFOUJRVTg3UVVGRE1VSTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xFOUJRVTg3UVVGRGVFSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xFOUJRVTg3UVVGRGVFSTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEdsQ1FVRnBRaXhQUVVGUE8wRkJRM2hDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNUMEZCVHp0QlFVTjRRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UWtGQmJVSXNWVUZCVlR0QlFVTTNRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMT3p0QlFVVk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc1QwRkJUenRCUVVOUU8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4UFFVRlBPMEZCUTFBN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFIwRkJjVWM3UVVGRGNrYzdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFZEJRVWM3TzBGQlJVZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPenRCUVVWSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN08wRkJSVWc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEd0Q1FVRnJRanRCUVVOeVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3h0UWtGQmJVSXNhMEpCUVd0Q08wRkJRM0pET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRk5CUVZNN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3hQUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRXNUMEZCVHp0QlFVTlFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUVzVDBGQlR6dEJRVU5RTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpeFpRVUZaTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4UFFVRlBPMEZCUTNoQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJMRFJDUVVFMFFpeG5RMEZCWjBNN08wRkJSVFZFTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4UFFVRlBMR0ZCUVdFN08wRkJSWEJDTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEU5QlFVODdRVUZEVUR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQkxIRkRRVUZ4UXl4UlFVRlJPMEZCUXpkRE96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHBRa0ZCYVVJc01rSkJRVEpDTzBGQlF6VkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUVzVDBGQlR6dEJRVU5RTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3hQUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRU3hQUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEU5QlFVODdRVUZEVUR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN08wRkJSVXc3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFc1QwRkJUenRCUVVOUU8wRkJRMEVzUTBGQlF5eEZPenM3T3pzN1FVTndNRWhFTEVsQlFVbFZMR3RDUVVGclFsSXNiVUpCUVU5QkxFTkJRVU1zUTBGQlVpeEZRVUYxUWxFc1pVRkJOME03TzBGQlJVRXNVMEZCVTFBc1kwRkJWQ3hIUVVGNVFpeERRVUZGT3p0QlFVVXpRanRCUVVOQkxFdEJRVWtzU1VGQlNWRXNTVUZCVWl4SlFVRm5Ra1FzWlVGQmFFSXNSVUZCWjBNN1FVRkROVUpRTEcxQ1FVRmxVU3hKUVVGbUxFbEJRWFZDUkN4blFrRkJaMEpETEVsQlFXaENMRU5CUVhaQ08wRkJRMGc3TzBGQlJVUlNMR1ZCUVdWVExIVkNRVUZtTEVkQlFYbERMRVZCUVhwRE96dEJRVVZCU2l4UFFVRlBReXhQUVVGUUxFZEJRV2xDVGl4alFVRnFRaXhET3pzN096czdRVU5ZUVRzN096czdPenM3UVVGUlFTeEpRVUZKVlN4UlFVRlJXQ3h0UWtGQlQwRXNRMEZCUXl4RFFVRlNMRVZCUVhWQ1Z5eExRVUZ1UXpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNVMEZCVTFRc1UwRkJWQ3hEUVVGdFFsVXNUVUZCYmtJc1JVRkJNa0pETEUxQlFUTkNMRVZCUVcxRFF5eExRVUZ1UXl4RlFVTkJPMEZCUTBsSUxGVkJRVTFKTEVsQlFVNHNRMEZCVnl4SlFVRllMRVZCUVdsQ1NDeE5RVUZxUWl4RlFVRjNRa01zVFVGQmVFSXNSVUZCWjBORExFdEJRV2hETzBGQlEwZzdPMEZCUlVSYUxGVkJRVlZqTEZOQlFWWXNSMEZCYzBKRExFOUJRVTlETEUxQlFWQXNRMEZCWTFBc1RVRkJUVXNzVTBGQmNFSXNRMEZCZEVJN08wRkJSVUVzUzBGQlN5eEpRVUZKUnl4VlFVRlVMRWxCUVhWQ1VpeExRVUYyUWl4RlFVTkJPMEZCUTBsVUxHTkJRVlZwUWl4VlFVRldMRWxCUVhkQ1VpeE5RVUZOVVN4VlFVRk9MRU5CUVhoQ08wRkJRMGc3TzBGQlJVUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEZxUWl4VlFVRlZZeXhUUVVGV0xFTkJRVzlDU1N4WFFVRndRaXhIUVVGclF5eFZRVUZUUXl4SlFVRlVMRVZCUTJ4RE8wRkJRMGtzVjBGQlQxWXNUVUZCVFVzc1UwRkJUaXhEUVVGblFra3NWMEZCYUVJc1EwRkJORUpETEVsQlFUVkNMRU5CUVZBN1FVRkRTQ3hEUVVoRU96dEJRVXRCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFXNUNMRlZCUVZWakxGTkJRVllzUTBGQmIwSk5MR1ZCUVhCQ0xFZEJRWE5ETEZWQlFWTkRMRk5CUVZRc1JVRkRkRU03UVVGRFNTeFJRVUZKUXl4UFFVRlBMRWxCUVZnN1FVRkRRU3hSUVVGSlF5eFpRVUZaUkN4TFFVRkxSU3hUUVVGTUxFZEJRV2xDUXl4UlFVRnFRaXhGUVVGb1FqdEJRVU5CTEZGQlFVbERMRmxCUVZsS0xFdEJRVXRMTEZOQlFVd3NSMEZCYVVKR0xGRkJRV3BDTEVWQlFXaENPMEZCUTBFc1VVRkJTVWNzYVVKQlFXbENVQ3hWUVVGVlJ5eFRRVUZXTEVkQlFYTkNReXhSUVVGMFFpeEZRVUZ5UWp0QlFVTkJMRkZCUVVsSkxHbENRVUZwUWxJc1ZVRkJWVTBzVTBGQlZpeEhRVUZ6UWtZc1VVRkJkRUlzUlVGQmNrSTdPMEZCUlVFN1FVRkRRU3hSUVVGSFJpeGpRVUZqTEVOQlFVTXNRMEZCWml4SlFVRnZRa2NzWTBGQll5eERRVUZETEVOQlFXNURMRWxCUVhkRFJTeHRRa0ZCYlVJc1EwRkJReXhEUVVFMVJDeEpRVUZwUlVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCZUVZc1JVRkRRVHRCUVVOSkxHVkJRVThzUzBGQlVEdEJRVU5JT3p0QlFVVkVMRkZCUVVsRExHdENRVUZyUWxRc1ZVRkJWVWNzVTBGQlZpeEhRVUZ6UWs4c2MwSkJRWFJDTEVOQlFUWkRWQ3hMUVVGTFJTeFRRVUZNTEVWQlFUZERMRU5CUVhSQ08wRkJRMEVzVVVGQlNWRXNhMEpCUVd0Q1dDeFZRVUZWVFN4VFFVRldMRWRCUVhOQ1NTeHpRa0ZCZEVJc1EwRkJOa05VTEV0QlFVdEZMRk5CUVV3c1JVRkJOME1zUTBGQmRFSTdRVUZEUVN4UlFVRkpVeXhwUWtGQmFVSllMRXRCUVV0TExGTkJRVXdzUjBGQmFVSkpMSE5DUVVGcVFpeERRVUYzUTFRc1MwRkJTMFVzVTBGQlRDeEZRVUY0UXl4RFFVRnlRanM3UVVGRlFTeFJRVUZKVXl4cFFrRkJhVUpETEV0QlFVdERMRWRCUVV3c1EwRkJVMHdzWlVGQlZDeEZRVUV3UWtVc1pVRkJNVUlzUTBGQmFrSXNTVUZEU1VNc2FVSkJRV2xDUXl4TFFVRkxSU3hIUVVGTUxFTkJRVk5PTEdWQlFWUXNSVUZCTUVKRkxHVkJRVEZDTEVOQlJISkNMRWxCUlZGQkxHOUNRVUZ2UWl4RFFVWTFRaXhKUVVWcFEwWXNiMEpCUVc5Q0xFTkJSbnBFTEVWQlIwRTdRVUZEU1N4bFFVRlBMRWxCUVZBN1FVRkRTRHM3UVVGRlJDeFhRVUZQTEV0QlFWQTdRVUZEU0N4RFFURkNSRHM3UVVFMFFrRTdRVUZEUVR0QlFVTkJPVUlzVlVGQlZXTXNVMEZCVml4RFFVRnZRblZDTEdkQ1FVRndRaXhIUVVGMVF5eFZRVUZUYUVJc1UwRkJWQ3hGUVVOMlF6dEJRVU5KTEZGQlFVbERMRTlCUVU4c1NVRkJXRHRCUVVOQkxGRkJRVWxuUWl4VFFVRlRhRUlzUzBGQlMwWXNaVUZCVEN4RFFVRnhRa01zVTBGQmNrSXNRMEZCWWpzN1FVRkZRU3hYUVVGUmFVSXNVMEZCVXl4RFFVRlVMRWRCUVdFc1EwRkJja0k3UVVGRFNDeERRVTVFT3p0QlFWRkJPMEZCUTBFN1FVRkRRWFJETEZWQlFWVmpMRk5CUVZZc1EwRkJiMEo1UWl3NFFrRkJjRUlzUjBGQmNVUXNWVUZCVTBNc1VVRkJWQ3hGUVVOeVJEdEJRVU5KTEZGQlFVbHNRaXhQUVVGUExFbEJRVmc3UVVGRFFTeFJRVUZKYlVJc1owSkJRV2RDTEVOQlFYQkNPenRCUVVWQlJDeGhRVUZUUlN4UFFVRlVMRU5CUTB0RExFbEJRVVFzU1VGQlZVWXNhVUpCUVdsQ2JrSXNTMEZCUzJVc1owSkJRVXdzUTBGQmMwSk5MRWxCUVhSQ0xFTkJSQzlDT3p0QlFVbEJMRmRCUVU5R0xHRkJRVkE3UVVGRFNDeERRVlpFT3p0QlFWbEJja01zVDBGQlQwTXNUMEZCVUN4SFFVRnBRa3dzVTBGQmFrSXNRenM3T3pzN08wRkRMMFpCT3pzN096czdPenRCUVZGQkxFbEJRVWswUXl4VFFVRlRPVU1zYlVKQlFVOUJMRU5CUVVNc1EwRkJVaXhGUVVGMVFqaERMRTFCUVhCRE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hUUVVGVE0wTXNWMEZCVkN4RFFVRnhRalJETEUxQlFYSkNMRVZCUVRaQ1F5eFJRVUUzUWl4RlFVRjFRME1zVDBGQmRrTXNSVUZEUVR0QlFVTkpTQ3hYUVVGUEwwSXNTVUZCVUN4RFFVRlpMRWxCUVZvc1JVRkJhMEpuUXl4TlFVRnNRaXhGUVVFd1FrTXNVVUZCTVVJc1JVRkJiME5ETEU5QlFYQkRPMEZCUTBFc1UwRkJTME1zVDBGQlRDeEhRVUZsUXl4VFFVRm1PMEZCUTBFc1UwRkJTME1zV1VGQlRDeEhRVUZ2UWl4RFFVRndRanRCUVVOQkxGTkJRVXRETEdOQlFVd3NSMEZCYzBKR0xGTkJRWFJDTzBGQlEwRXNVMEZCUzBjc1MwRkJUQ3hIUVVGaExFVkJRV0k3UVVGRFFTeFRRVUZMUXl4VFFVRk1MRWRCUVdsQ0xFTkJRV3BDTzBGQlEwRXNVMEZCUzBNc1QwRkJUQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMUXl4UFFVRk1MRWRCUVdVc1EwRkJaanRCUVVOQkxGTkJRVXRETEUxQlFVd3NSMEZCWXl4RFFVRmtPMEZCUTBnN08wRkJSVVIyUkN4WlFVRlpZU3hUUVVGYUxFZEJRWGRDUXl4UFFVRlBReXhOUVVGUUxFTkJRV00wUWl4UFFVRlBPVUlzVTBGQmNrSXNRMEZCZUVJN08wRkJSVUVzUzBGQlNTeEpRVUZKTWtNc1VVRkJVaXhKUVVGdlFtSXNUVUZCY0VJc1JVRkRRVHRCUVVOSk0wTXNaMEpCUVZsM1JDeFJRVUZhTEVsQlFYZENZaXhQUVVGUFlTeFJRVUZRTEVOQlFYaENPMEZCUTBnN08wRkJSVVI0UkN4WlFVRlpZU3hUUVVGYUxFTkJRWE5DTkVNc1dVRkJkRUlzUjBGQmNVTXNXVUZEY2tNN1FVRkRTU3hUUVVGTFZpeFBRVUZNTEVkQlFXVXNSVUZCWmp0QlFVTklMRU5CU0VRN08wRkJTMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFdlF5eFpRVUZaWVN4VFFVRmFMRU5CUVhOQ05rTXNVVUZCZEVJc1IwRkJhVU1zV1VGRGFrTTdRVUZEU1N4WFFVRlBMRXRCUVV0WUxFOUJRVm83UVVGRFNDeERRVWhFT3p0QlFVdEJPMEZCUTBFdlF5eFpRVUZaWVN4VFFVRmFMRU5CUVhOQ09FTXNWVUZCZEVJc1IwRkJiVU1zV1VGRGJrTTdRVUZEU1N4WFFVRlBMRXRCUVV0T0xFOUJRVm83UVVGRFNDeERRVWhFT3p0QlFVdEJPMEZCUTBGeVJDeFpRVUZaWVN4VFFVRmFMRU5CUVhOQ0swTXNWVUZCZEVJc1IwRkJiVU1zV1VGRGJrTTdRVUZEU1N4WFFVRlBMRXRCUVV0T0xFOUJRVm83UVVGRFNDeERRVWhFT3p0QlFVdEJPMEZCUTBGMFJDeFpRVUZaWVN4VFFVRmFMRU5CUVhOQ1owUXNVMEZCZEVJc1IwRkJhME1zV1VGRGJFTTdRVUZEU1N4WFFVRlBMRXRCUVV0T0xFMUJRVm83UVVGRFNDeERRVWhFT3p0QlFVdEJPMEZCUTBGMlJDeFpRVUZaWVN4VFFVRmFMRU5CUVhOQ2FVUXNUMEZCZEVJc1IwRkJaME1zV1VGRGFFTTdRVUZEU1N4WFFVRlBMRXRCUVV0RExGRkJRVXdzUjBGQlowSkRMRTFCUVhaQ08wRkJRMGdzUTBGSVJEczdRVUZMUVR0QlFVTkJPMEZCUTBGb1JTeFpRVUZaWVN4VFFVRmFMRU5CUVhOQ2IwUXNkMEpCUVhSQ0xFZEJRV2xFTEZsQlEycEVPMEZCUTBrc1VVRkJTVFZETEU5QlFVOHNTVUZCV0R0QlFVTkJMRkZCUVVrMlF5eHBRa0ZCYVVJc1EwRkJja0k3TzBGQlJVRXNVMEZCU1N4SlFVRkphRVFzU1VGQlVpeEpRVUZuUWtjc1MwRkJTekJDTEU5QlFYSkNMRVZCUTBFN1FVRkRTU3haUVVGSmIwSXNaVUZCWldwRUxFdEJRVXRyUkN4MVFrRkJUQ3hGUVVGdVFqdEJRVU5CTEZsQlFVZEVMR2xDUVVGcFFpeERRVUZETEVOQlFYSkNMRVZCUTBFN1FVRkRTU3h0UWtGQlR5eERRVUZETEVOQlFWSTdRVUZEU0R0QlFVTkVSQ3d3UWtGQmEwSkRMRmxCUVd4Q08wRkJRMGc3TzBGQlJVUXNWMEZCVDBRc2FVSkJRV2xDTEVOQlFYaENPMEZCUTBnc1EwRm9Ra1E3TzBGQmEwSkJPMEZCUTBFN1FVRkRRV3hGTEZsQlFWbGhMRk5CUVZvc1EwRkJjMEozUkN4dFFrRkJkRUlzUjBGQk5FTXNXVUZETlVNN1FVRkRTU3hYUVVGUExFdEJRVXR3UWl4WlFVRk1MRXRCUVhOQ0xFdEJRVXRqTEZGQlFVd3NSMEZCWjBKRExFMUJRVGRETzBGQlEwZ3NRMEZJUkRzN1FVRkxRVHRCUVVOQmFFVXNXVUZCV1dFc1UwRkJXaXhEUVVGelFubEVMR2xDUVVGMFFpeEhRVUV3UXl4WlFVTXhRenRCUVVOSkxGZEJRVThzUzBGQlMzQkNMR05CUVZvN1FVRkRTQ3hEUVVoRU96dEJRVXRCTzBGQlEwRnNSQ3haUVVGWllTeFRRVUZhTEVOQlFYTkNNRVFzYVVKQlFYUkNMRWRCUVRCRExGVkJRVk55UWl4alFVRlVMRVZCUXpGRE8wRkJRMGtzVTBGQlMwRXNZMEZCVEN4SFFVRnpRa0VzWTBGQmRFSTdRVUZEU0N4RFFVaEVPenRCUVV0Qk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBGc1JDeFpRVUZaWVN4VFFVRmFMRU5CUVhOQ01rUXNZVUZCZEVJc1IwRkJjME1zV1VGRGRFTTdRVUZEU1N4UlFVRkpia1FzVDBGQlR5eEpRVUZZTzBGQlEwRkJMRk5CUVVzMFFpeFpRVUZNTEVkQlFXOUNMRU5CUVhCQ096dEJRVVZCTlVJc1UwRkJTekJDTEU5QlFVd3NRMEZCWVU0c1QwRkJZaXhEUVVOTGRrSXNTVUZCUkN4SlFVRlhSeXhMUVVGTGIwUXNWVUZCVEN4RFFVRm5RblpFTEVsQlFXaENMRU5CUkdZN1FVRkhTQ3hEUVZKRU96dEJRVmRCTzBGQlEwRTdRVUZEUVd4Q0xGbEJRVmxoTEZOQlFWb3NRMEZCYzBJMFJDeFZRVUYwUWl4SFFVRnRReXhWUVVGVGRrUXNTVUZCVkN4RlFVTnVRenRCUVVOSkxGRkJRVWxITEU5QlFVOHNTVUZCV0RzN1FVRkZRU3hSUVVGSmNVUXNVVUZCVVhKRUxFdEJRVXN3UXl4UlFVRk1MRVZCUVZvN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZGQlFVbFpMRkZCUVZFc1MwRkJXanRCUVVOQkxGTkJRVWtzU1VGQlNVTXNTVUZCU1N4RFFVRmFMRVZCUVdWQkxFbEJRVWxHTEUxQlFVMVdMRTFCUVhwQ0xFVkJRV2xEV1N4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4WlFVRkpSaXhOUVVGTlJTeERRVUZPTEVWQlFWTkRMRVZCUVZRc1NVRkJaVE5FTEV0QlFVc3lSQ3hGUVVGNFFpeEZRVUUwUWp0QlFVTjRRa1lzYjBKQlFWRXNTVUZCVWp0QlFVTkJPMEZCUTBnN1FVRkRTanM3UVVGRlJDeFJRVUZITEVOQlFVTkJMRXRCUVVvc1JVRkRRVHRCUVVOSkxHTkJRVTBzY1VOQlFVNDdRVUZEU0RzN1FVRkZSSFJFTEZOQlFVc3dRaXhQUVVGTUxFTkJRV0V4UWl4TFFVRkxORUlzV1VGQmJFSXNTVUZCYTBNdlFpeEpRVUZzUXp0QlFVTkJRU3hUUVVGTE5FUXNVVUZCVEN4RFFVRmpla1FzUzBGQlN6UkNMRmxCUVc1Q096dEJRVVZCTEZGQlFVYzFRaXhMUVVGTE5FSXNXVUZCVEN4TFFVRnpRaXhEUVVGNlFpeEZRVU5CTzBGQlEwa3ZRaXhoUVVGTE5rUXNVVUZCVEN4RFFVRmpMRWRCUVdRN1FVRkRTQ3hMUVVoRUxFMUJTMEU3UVVGRFNUZEVMR0ZCUVVzMlJDeFJRVUZNTEVOQlFXTXhSQ3hMUVVGTE1FSXNUMEZCVEN4RFFVRmhNVUlzUzBGQlN6UkNMRmxCUVV3c1IwRkJiMElzUTBGQmFrTXNSVUZCYjBNclFpeFJRVUZ3UXl4TFFVRnBSQ3hKUVVGSkwwTXNTMEZCUzJkRUxFVkJRVlFzU1VGRE1VUXZSQ3hMUVVGTFowVXNWMEZCVEN4TFFVRnhRaXhEUVVGeVFpeEhRVUY1UWpkRUxFdEJRVXMyUWl4alFVRTVRaXhIUVVOSE4wSXNTMEZCU3pCQ0xFOUJRVXdzUTBGQllURkNMRXRCUVVzMFFpeFpRVUZNTEVkQlFXOUNMRU5CUVdwRExFVkJRVzlEYVVNc1YwRkJjRU1zUzBGQmIwUXNRMEZHUnl4SlFVZDZSRGRFTEV0QlFVc3JRaXhUUVVoWU8wRkJTVWc3TzBGQlJVUXZRaXhUUVVGTE5FSXNXVUZCVER0QlFVTklMRU5CY2tORU96dEJRWFZEUVR0QlFVTkJPMEZCUTBGcVJDeFpRVUZaWVN4VFFVRmFMRU5CUVhOQ2MwVXNaVUZCZEVJc1IwRkJkME1zV1VGRGVFTTdRVUZEU1N4UlFVRkpPVVFzVDBGQlR5eEpRVUZZTzBGQlEwRXNVVUZCU1N0RUxHTkJRV053UXl4VFFVRnNRanM3UVVGRlFUdEJRVU5CTEZGQlFVY3pRaXhMUVVGTE9FSXNTMEZCVEN4RFFVRlhZU3hOUVVGWUxFdEJRWE5DTEVOQlFYcENMRVZCUTBFN1FVRkRTVzlDTEhOQ1FVRmpMMFFzUzBGQlMyZEZMQ3RDUVVGTUxFVkJRV1E3UVVGRFNEdEJRVU5FTzBGQlNrRXNVMEZOUVR0QlFVTkpMR2RDUVVGSlF5eHRRa0ZCYlVJc1MwRkJka0k3TzBGQlJVRXNiVUpCUVU4c1EwRkJRMEVzWjBKQlFVUXNTVUZCY1VJc1JVRkJSV3BGTEV0QlFVczRRaXhMUVVGTUxFTkJRVmRoTEUxQlFWZ3NTMEZCYzBJc1EwRkJlRUlzUTBGQk5VSXNSVUZEUVR0QlFVTkpiMElzT0VKQlFXTXZSQ3hMUVVGTE9FSXNTMEZCVEN4RFFVRlhiME1zUjBGQldDeEZRVUZrTzBGQlEwRkVMRzFEUVVGdFFpeERRVUZEUml4WlFVRlpTU3hUUVVGYUxFVkJRWEJDTzBGQlEwZzdPMEZCUlVRc1owSkJRVWtzUTBGQlEwWXNaMEpCUVV3c1JVRkRRVHRCUVVOSlJpdzRRa0ZCWTNCRExGTkJRV1E3UVVGRFNEdEJRVU5LT3p0QlFVVkVPMEZCUTBFN1FVRkRRU3hSUVVGSGIwTXNaMEpCUVdkQ2NFTXNVMEZCYmtJc1JVRkRRVHRCUVVOSmIwTXNjMEpCUVdNdlJDeExRVUZMWjBVc0swSkJRVXdzUlVGQlpEdEJRVU5JT3p0QlFVVkVPMEZCUTBFc1VVRkJTVVFzWjBKQlFXZENjRU1zVTBGQmNFSXNSVUZEUVR0QlFVTkpMRmxCUVVsNVF5eFpRVUZaVEN4WlFVRlpUU3d3UWtGQldpeEZRVUZvUWpzN1FVRkZRU3hoUVVGSkxFbEJRVWxrTEVsQlFVbGhMRlZCUVZWNlFpeE5RVUZXTEVkQlFXMUNMRU5CUVM5Q0xFVkJRV3REV1N4TFFVRkxMRU5CUVhaRExFVkJRVEpEUVN4SFFVRXpReXhGUVVOQk8wRkJRMGtzWjBKQlFVbGxMRmRCUVZkR0xGVkJRVlZpTEVOQlFWWXNRMEZCWmpzN1FVRkZRU3huUWtGQlJ5eERRVUZEWlN4VFFVRlRTQ3hUUVVGVUxFVkJRVW9zUlVGQk1FSTdRVUZETVVJN1FVRkRTVzVGTEhsQ1FVRkxPRUlzUzBGQlRDeERRVUZYZVVNc1NVRkJXQ3hEUVVGblFrUXNVVUZCYUVJN1FVRkRTRHRCUVVOS08wRkJRMG83TzBGQlJVUXNWMEZCVDFBc1YwRkJVRHRCUVVOSUxFTkJia1JFT3p0QlFYRkVRVHRCUVVOQk8wRkJRMEZ3Uml4WlFVRlpZU3hUUVVGYUxFTkJRWE5DWjBZc1pVRkJkRUlzUjBGQmQwTXNXVUZEZUVNN1FVRkRTU3hSUVVGSmVFVXNUMEZCVHl4SlFVRllPMEZCUTBFc1VVRkJTWGxGTEdkQ1FVRm5RaXhEUVVGd1FqczdRVUZGUVhwRkxGTkJRVXN3UXl4UlFVRk1MRWRCUVdkQ2RFSXNUMEZCYUVJc1EwRkRTM1pDTEVsQlFVUXNTVUZCVlRSRkxHbENRVUZwUWpkRUxFdEJRVXM0UkN4SlFVRk1MRU5CUVZVM1JTeExRVUZMT0VVc1VVRkJUQ3hMUVVGclFqbEZMRXRCUVVzNFJTeFJRVUZNTEVWQlFXeENMRWRCUVc5RE9VVXNTMEZCU3l0RkxGTkJRVXdzUzBGQmJVSXZSU3hMUVVGTEswVXNVMEZCVEN4RlFVRnFSU3hEUVVRdlFqczdRVUZKUVRWRkxGTkJRVXNyUWl4VFFVRk1MRWRCUVdsQ01FTXNaMEpCUVdkQ2VrVXNTMEZCU3pCRExGRkJRVXdzUjBGQlowSkRMRTFCUVdoQ0xFZEJRWGxDTTBNc1MwRkJTelpDTEdOQlFTOUVPMEZCUTBFc1VVRkJTVXNzVTBGQlUyeERMRXRCUVVzclFpeFRRVUZNTEVsQlFXMUNMRWxCUVVsdVFpeExRVUZMWjBRc1JVRkJOVUlzUTBGQllqczdRVUZGUVRzN1FVRkZRVFZFTEZOQlFVczJSU3hUUVVGTUxFZEJRV2xDUXl4UlFVRnFRaXhEUVVFeVFpeEpRVUZKTlVNc1RVRkJMMEk3UVVGRFFXeERMRk5CUVVzMlJTeFRRVUZNTEVkQlFXbENSU3hUUVVGcVFpeERRVUUwUWl4SlFVRkpOME1zVFVGQmFFTTdRVUZEUVd4RExGTkJRVXMyUlN4VFFVRk1MRWRCUVdsQ1J5eFRRVUZxUWl4RFFVRTBRbWhHTEV0QlFVczJSU3hUUVVGTUxFZEJRV2xDUml4UlFVRnFRaXhGUVVFMVFpeEZRVUY1UkRORkxFdEJRVXMyUlN4VFFVRk1MRWRCUVdsQ1JDeFRRVUZxUWl4RlFVRjZSRHM3UVVGRlFUVkZMRk5CUVV0blF5eFBRVUZNTEVkQlFXVm9ReXhMUVVGTE5rVXNVMEZCVEN4SFFVRnBRblpETEZWQlFXcENMRVZCUVdZN1FVRkRRWFJETEZOQlFVdHBReXhQUVVGTUxFZEJRV1ZxUXl4TFFVRkxOa1VzVTBGQlRDeEhRVUZwUW5SRExGVkJRV3BDTEVWQlFXWTdRVUZEUVhaRExGTkJRVXRyUXl4TlFVRk1MRWRCUVdOc1F5eExRVUZMTmtVc1UwRkJUQ3hIUVVGcFFrUXNVMEZCYWtJc1MwRkJLMElzUTBGQk4wTTdRVUZEU0N4RFFYSkNSRHM3UVVGMVFrRTdRVUZEUVR0QlFVTkJha2NzV1VGQldXRXNVMEZCV2l4RFFVRnpRbmxHTERaQ1FVRjBRaXhIUVVGelJDeFpRVU4wUkR0QlFVTkpMRk5CUVV0MlF5eFJRVUZNTEVkQlFXZENkRUlzVDBGQmFFSXNRMEZCTUVKMlFpeEpRVUZFTEVsQlFWVkJMRXRCUVV0eFJpeHpRa0ZCVEN4RlFVRnVRenRCUVVOSUxFTkJTRVE3TzBGQlRVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQmRrY3NXVUZCV1dFc1UwRkJXaXhEUVVGelFqSkdMSEZDUVVGMFFpeEhRVUU0UXl4WlFVTTVRenRCUVVOSk8wRkJRMEVzVVVGQlNXNUdMRTlCUVU4c1NVRkJXRHRCUVVOQkxGTkJRVXNzU1VGQlNYVkVMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1N4TFFVRkxOMElzVDBGQlRDeERRVUZoYVVJc1RVRkJha01zUlVGQmVVTlpMRWRCUVhwRExFVkJRVFpETzBGQlEzcERka1FzWVVGQlN6QkNMRTlCUVV3c1EwRkJZVFpDTEVOQlFXSXNSVUZCWjBKRkxGRkJRV2hDTEVOQlFYbENSaXhEUVVGNlFqdEJRVU5JTzBGQlEwb3NRMEZRUkRzN1FVRlRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTFSU3haUVVGWllTeFRRVUZhTEVOQlFYTkNORVlzWlVGQmRFSXNSMEZCZDBNc1dVRkRlRU03UVVGRFNTeFJRVUZKY0VZc1QwRkJUeXhKUVVGWU8wRkJRMEVzVTBGQlN6QkRMRkZCUVV3c1IwRkJaMEowUWl4UFFVRm9RaXhEUVVFd1FuWkNMRWxCUVVRc1NVRkJWVWNzUzBGQlN6QkNMRTlCUVV3c1EwRkJZVGRDTEV0QlFVdE5MRkZCUVV3c1JVRkJZaXhKUVVGblEwNHNTVUZCYmtVN1FVRkRTQ3hEUVVwRU96dEJRVTlCTzBGQlEwRTdRVUZEUVd4Q0xGbEJRVmxoTEZOQlFWb3NRMEZCYzBKM1JTd3JRa0ZCZEVJc1IwRkJkMFFzV1VGRGVFUTdRVUZEU1N4UlFVRkpjVUlzV1VGQldVTXNUMEZCVDBNc1owSkJRWFpDTzBGQlEwRXNVVUZCU1hoQ0xGZEJRVW83TzBGQlJVRXNVMEZCUzNKQ0xGRkJRVXdzUjBGQlowSjBRaXhQUVVGb1FpeERRVU5KTEZWQlFWTjJRaXhKUVVGVUxFVkJRV003UVVGRFZpeFpRVUZIUVN4TFFVRkxNa1lzVTBGQlRDeExRVUZ0UWtnc1UwRkJia0lzU1VGQlowTXNRMEZCUTNoR0xFdEJRVXR6UlN4VFFVRk1MRVZCUVhCRExFVkJRMEU3UVVGRFNXdENMSGRDUVVGWmVFWXNTMEZCU3pKR0xGTkJRVXdzUlVGQldqdEJRVU5CZWtJc01FSkJRV05zUlN4SlFVRmtPMEZCUTBnN1FVRkRTaXhMUVZCTU96dEJRVlZCTEZkQlFVOXJSU3hYUVVGUU8wRkJRMGdzUTBGb1FrUTdPMEZCYlVKQmFrWXNUMEZCVDBNc1QwRkJVQ3hIUVVGcFFrb3NWMEZCYWtJc1F6czdPenM3TzBGRGFsUkJPenM3T3pzN096dEJRVkZCTEVsQlFVazRSeXhUUVVGVGFrZ3NiVUpCUVU5QkxFTkJRVU1zUTBGQlVpeEZRVUYxUW1sSUxFMUJRWEJETzBGQlEwRXNTVUZCU1doSUxHbENRVUZwUWtRc2JVSkJRVTlCTEVOQlFVTXNRMEZCVWl4RFFVRnlRanRCUVVOQkxFbEJRVWxITEdOQlFXTklMRzFDUVVGUFFTeERRVUZETEVOQlFWSXNRMEZCYkVJN1FVRkRRU3hKUVVGSlN5eFpRVUZaVEN4dFFrRkJUMEVzUTBGQlF5eERRVUZTTEVOQlFXaENPMEZCUTBFc1NVRkJTVVVzV1VGQldVWXNiVUpCUVU5QkxFTkJRVU1zUTBGQlVpeERRVUZvUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4VFFVRlRTU3hYUVVGVUxFZEJRMEU3UVVGRFNUWkhMRmRCUVU5c1J5eEpRVUZRTEVOQlFWa3NTVUZCV2p0QlFVTkJMRk5CUVV0elF5eGpRVUZNTEVkQlFYTkNjRVFzWlVGQlpWTXNkVUpCUVhKRE8wRkJRMGc3TzBGQlJVUk9MRmxCUVZsWkxGTkJRVm9zUjBGQmQwSkRMRTlCUVU5RExFMUJRVkFzUTBGQll5dEdMRTlCUVU5cVJ5eFRRVUZ5UWl4RFFVRjRRanM3UVVGRlFTeExRVUZMTEVsQlFVa3lReXhSUVVGVUxFbEJRWEZDYzBRc1RVRkJja0lzUlVGRFFUdEJRVU5KTjBjc1owSkJRVmwxUkN4UlFVRmFMRWxCUVhkQ2MwUXNUMEZCVDNSRUxGRkJRVkFzUTBGQmVFSTdRVUZEU0RzN1FVRkZSSFpFTEZsQlFWbFpMRk5CUVZvc1EwRkJjMEpyUnl4UlFVRjBRaXhIUVVGcFF5eFZRVUZWYWtVc1QwRkJWaXhGUVVOcVF6dEJRVU5KTEZOQlFVdHJSU3hYUVVGTUxFZEJRVzFDTEVsQlFVbG9TQ3hYUVVGS0xFTkJRV2RDTEVsQlFXaENMRVZCUVhOQ0xFdEJRVXRwU0N4WlFVRXpRaXhGUVVGNVEyNUZMRTlCUVhwRExFTkJRVzVDT3p0QlFVVkJMRmRCUVU4c1MwRkJTMnRGTEZkQlFWbzdRVUZEU0N4RFFVeEVPenRCUVU5QkwwY3NXVUZCV1Zrc1UwRkJXaXhEUVVGelFuRkhMRTlCUVhSQ0xFZEJRV2RETEZWQlFWVkRMRXRCUVZZc1JVRkRhRU03UVVGRFNTeFhRVUZQTEVsQlFVbHFTQ3hUUVVGS0xFTkJRV01zUzBGQlN5dEhMRmxCUVc1Q0xFVkJRV2xEUlN4TFFVRnFReXhEUVVGUU8wRkJRMGdzUTBGSVJEczdRVUZMUVd4SUxGbEJRVmxaTEZOQlFWb3NRMEZCYzBKMVJ5eFBRVUYwUWl4SFFVRm5ReXhWUVVGVmVrY3NTMEZCVml4RlFVTm9RenRCUVVOSkxGZEJRVThzU1VGQlNWb3NVMEZCU2l4RFFVRmpMRWxCUVdRc1JVRkJiMElzU1VGQmNFSXNSVUZCTUVKWkxFdEJRVEZDTEVOQlFWQTdRVUZEU0N4RFFVaEVPenRCUVV0Qk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJWaXhaUVVGWldTeFRRVUZhTEVOQlFYTkNkMGNzWjBKQlFYUkNMRWRCUVhsRExGbEJRM3BETzBGQlEwa3NVVUZCU1VNc1YwRkJWeXhMUVVGTFRDeFpRVUZNTEVOQlFXdENUU3hYUVVGc1FpeEZRVUZtTzBGQlEwRXNVVUZCU1VNc1VVRkJVU3hGUVVGYU96dEJRVVZCTEZOQlFVc3NTVUZCU1RWRExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVEJETEZOQlFWTjBSQ3hOUVVFM1FpeEZRVUZ4UTFrc1IwRkJja01zUlVGRFFUdEJRVU5KTEZsQlFVazJReXhQUVVGUFNDeFRRVUZUTVVNc1EwRkJWQ3hGUVVGWk5rTXNTVUZCZGtJN1FVRkRRU3haUVVGSk5VTXNTMEZCUzNsRExGTkJRVk14UXl4RFFVRlVMRVZCUVZsRExFVkJRWEpDT3p0QlFVVkJNa01zWTBGQlRUTkRMRVZCUVU0c1NVRkJXVHRCUVVOU1FTeG5Ra0ZCU1VFc1JVRkVTVHRCUVVWU05rTXNaVUZCUjBRc1MwRkJTemxFTEZWQlFVd3NSVUZHU3p0QlFVZFNaMFVzWlVGQlIwWXNTMEZCU3pkRUxGVkJRVXdzUlVGSVN6dEJRVWxTWjBVc1pVRkJSMGdzUzBGQlMwa3NTMEZLUVR0QlFVdFNReXhsUVVGSFRDeExRVUZMVFR0QlFVeEJMRk5CUVZvN1FVRlBTRHM3UVVGRlJDeFhRVUZQVUN4TFFVRlFPMEZCUTBnc1EwRndRa1E3TzBGQmMwSkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3p0QlFVOUJka2dzV1VGQldWa3NVMEZCV2l4RFFVRnpRbTFJTEUxQlFYUkNMRWRCUVN0Q0xGbEJReTlDTzBGQlEwa3NVVUZCU1ROSExFOUJRVThzU1VGQldEczdRVUZGUVR0QlFVTkJMRkZCUVVsQkxFdEJRVXMwUml4WlFVRk1MRU5CUVd0Q1owSXNVMEZCYkVJc1IwRkJPRUpxUlN4TlFVRTVRaXhIUVVGMVF5eERRVUV6UXl4RlFVTkJPMEZCUTBrc1pVRkJUeXhMUVVGUU8wRkJRMGc3TzBGQlJVUXNVVUZCU1d0RkxHVkJRV1VzUzBGQlMyeENMRmRCUVhoQ0xFTkJWRW9zUTBGVGVVTTdPMEZCUlhKRGEwSXNhVUpCUVdFelJDeHBRa0ZCWWl4RFFVRXJRaXhMUVVGTGNrSXNZMEZCY0VNN1FVRkRRV2RHTEdsQ1FVRmhja01zWlVGQllqdEJRVU5CY1VNc2FVSkJRV0Y2UlN4WlFVRmlPenRCUVVWQkxGZEJRVThzUTBGQlEzbEZMR0ZCUVdFM1JDeHRRa0ZCWWl4RlFVRlNMRVZCUTBFN1FVRkRTU3haUVVGSmJrUXNUMEZCVDJkSUxHRkJRV0V2UXl4bFFVRmlMRVZCUVZnN1FVRkRRU3RETEhGQ1FVRmhla1FzVlVGQllpeERRVUYzUW5aRUxFbEJRWGhDTzBGQlEwZzdPMEZCUlVRc1YwRkJUeXhKUVVGUU8wRkJRMGdzUTBGMlFrUTdPMEZCZVVKQk8wRkJRMEZxUWl4WlFVRlpXU3hUUVVGYUxFTkJRWE5DYzBnc1owSkJRWFJDTEVkQlFYbERMRmxCUVZjN1FVRkRhRVFzVTBGQlMyeENMRmxCUVV3c1EwRkJhMEp0UWl4UFFVRnNRaXhIUVVFMFFqVkVMR0ZCUVRWQ0xFZEJSR2RFTEVOQlEwZzdRVUZEYUVRc1EwRkdSRHM3UVVGSlFUdEJRVU5CZGtVc1dVRkJXVmtzVTBGQldpeERRVUZ6UW5kSUxIRkNRVUYwUWl4SFFVRTRReXhaUVVGWE8wRkJRM0pFTEZGQlFVbElMR1ZCUVdVc1MwRkJTMnBDTEZsQlFVd3NRMEZCYTBKdFFpeFBRVUZzUWl4RlFVRnVRanM3UVVGRlFVWXNhVUpCUVdGdVJTeFJRVUZpTEVkQlFYZENkRUlzVDBGQmVFSXNRMEZCWjBNc1ZVRkJVM1pDTEVsQlFWUXNSVUZCWlR0QlFVTXpRMEVzWVVGQlMyMUdMRk5CUVV3c1EwRkJaVFpDTEdGQlFXRjJSU3hWUVVGaUxFdEJRVFJDZFVVc1lVRkJZWEpGTEZOQlFXSXNTMEZCTWtJMVFpeExRVUZMY1Vjc1IwRkJUQ3hEUVVGVGNFZ3NTMEZCU3poRUxGRkJRVXdzUlVGQlZDeERRVUYwUlN4RlFVRnBSMnRFTEdGQlFXRjBSU3hWUVVGaUxFdEJRemRHYzBVc1lVRkJZWEpGTEZOQlFXSXNTMEZCTWtJMVFpeExRVUZMYzBjc1IwRkJUQ3hEUVVGVGNrZ3NTMEZCU3poRUxGRkJRVXdzUlVGQlZDeERRVVF2UWp0QlFVVklMRXRCU0VRN1FVRkpTQ3hEUVZCRU96dEJRVk5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN1FVRkxRUzlGTEZsQlFWbFpMRk5CUVZvc1EwRkJjMEl5U0N4bFFVRjBRaXhIUVVGM1F5eFpRVU40UXp0QlFVTkpMRk5CUVV0NFFpeFhRVUZNTEVOQlFXbENWaXcyUWtGQmFrSTdPMEZCUlVFc1VVRkJTVzFETEU5QlFVOHNTMEZCUzNwQ0xGZEJRVXdzUTBGQmFVSnFSQ3hSUVVGcVFpeEZRVUZZT3p0QlFVVkJNRVVzVTBGQlMwTXNTVUZCVEN4RFFVRlZMRlZCUVZORExFTkJRVlFzUlVGQlYwTXNRMEZCV0N4RlFVRmhPMEZCUTI1Q0xHVkJRVTlCTEVWQlFVVjRSU3gxUWtGQlJpeExRVUU0UW5WRkxFVkJRVVYyUlN4MVFrRkJSaXhGUVVGeVF6dEJRVU5JTEV0QlJrUTdPMEZCU1VFc1YwRkJUM0ZGTEVsQlFWQTdRVUZEU0N4RFFWaEVPenRCUVdGQmVFa3NXVUZCV1Zrc1UwRkJXaXhEUVVGelFtZEpMR3RDUVVGMFFpeEhRVUV5UXl4VlFVRlZNMGdzU1VGQlZpeEZRVU16UXp0QlFVTkpMRkZCUVVsSExFOUJRVThzU1VGQldEczdRVUZGUVN4UlFVRkplVWdzZDBKQlFYZENOVWdzUzBGQlMydEVMSFZDUVVGTUxFVkJRVFZDTzBGQlEwRXNVVUZCU1RKRkxHbENRVUZLT3p0QlFVVkJMRkZCUVVsRExHRkJRV0VzUlVGQmFrSTdRVUZEUVRsSUxGTkJRVXNyU0N4blFrRkJUQ3hIUVVGM1FrTXNVVUZCZUVJc1EwRkJhVU5HTEZWQlFXcERPenRCUVVWQkxGTkJRVXNzU1VGQlNVY3NTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKU0N4WFFVRlhhRVlzVFVGQkwwSXNSVUZCZFVOdFJpeEhRVUYyUXl4RlFVTkJPMEZCUTBrc1dVRkJTVU1zV1VGQldVb3NWMEZCVjBjc1EwRkJXQ3hEUVVGb1FqczdRVUZGUVN4WlFVRkpSU3hYUVVGWGJra3NTMEZCUzAwc1VVRkJUQ3hGUVVGbU8wRkJRMEVzV1VGQlNUaElMRmRCUVZjc1EwRkJRMFlzVlVGQlZUVklMRkZCUVZZc1MwRkJkVUlzUTBGQmVFSXNTVUZCTmtKSUxFdEJRVXN5Uml4WFFVRk1MRU5CUVdsQ2JFUXNUMEZCYWtJc1JVRkJOVU03TzBGQlJVRXNXVUZCU1hWR0xHRkJRV0ZETEZGQlFXcENMRVZCUTBFN1FVRkRTWEJKTEdsQ1FVRkxORVFzVVVGQlRDeERRVUZqZDBVc1VVRkJaRHM3UVVGRlFTeG5Ra0ZCU1VRc1YwRkJWMjVKTEV0QlFVdE5MRkZCUVV3c1JVRkJaaXhGUVVOQk8wRkJRMGsyU0N3MFFrRkJXV2hKTEV0QlFVc3lSaXhYUVVGTUxFTkJRV2xDYkVRc1QwRkJha0lzUlVGQldqdEJRVU5JT3p0QlFVVkVMR2RDUVVGSmVVWXNVVUZCVVhKSkxFdEJRVXROTEZGQlFVd3NSVUZCV2pzN1FVRkZRU3h0UWtGQlR5dElMRkZCUVZGR0xGRkJRV1lzUlVGRFFUdEJRVU5KTEc5Q1FVRkpSeXhQUVVGUGJra3NTMEZCU3pKR0xGZEJRVXdzUTBGQmFVSjBSQ3hSUVVGcVFpeEhRVUUwUWpaR0xGRkJRVkZzU1N4TFFVRkxNa1lzVjBGQlRDeERRVUZwUW14RUxFOUJRV3BDTEVWQlFYQkRMRU5CUVZnN1FVRkRRVEJHTEhGQ1FVRkxNVVVzVVVGQlRDeERRVUZqTEVOQlFVTXdSU3hMUVVGTGFFa3NVVUZCVEN4TFFVRnJRaXhEUVVGdVFpeEpRVUYzUWtnc1MwRkJTekpHTEZkQlFVd3NRMEZCYVVKc1JDeFBRVUZxUWl4RlFVRjBRenRCUVVOQmVVWXNlVUpCUVZNc1EwRkJWRHRCUVVOSU96dEJRVVZFY2trc2FVSkJRVXR4Uml4elFrRkJURHRCUVVOQmQwTXNaME5CUVc5Q04wZ3NTMEZCUzJ0RUxIVkNRVUZNTEVWQlFYQkNPenRCUVVWQkxHZENRVUZKTWtVc2NVSkJRWEZDUkN4eFFrRkJla0lzUlVGRFFUdEJRVU5KZWtnc2NVSkJRVXN5Uml4WFFVRk1MRU5CUVdsQ1VpeHhRa0ZCYWtJN1FVRkRTQ3hoUVVoRUxFMUJTMEU3UVVGRFNXNUdMSEZDUVVGTE1rWXNWMEZCVEN4RFFVRnBRbEFzWlVGQmFrSTdRVUZEUVhGRExIZERRVUYzUWtNc2FVSkJRWGhDTzBGQlEwZzdRVUZEU2p0QlFVTktPMEZCUTBvc1EwRnFSRVE3TzBGQmJVUkJOVWtzVDBGQlQwTXNUMEZCVUN4SFFVRnBRa2dzVjBGQmFrSXNRenM3T3pzN08wRkRlRTFCT3pzN096czdPenRCUVZGQkxFbEJRVWwzU2l4UlFVRlJOVW9zYlVKQlFVOUJMRU5CUVVNc1EwRkJVaXhGUVVGMVFqUktMRXRCUVc1RE8wRkJRMEVzU1VGQlNVTXNXVUZCV1RkS0xHMUNRVUZQUVN4RFFVRkRMRU5CUVZJc1JVRkJkVUkyU2l4VFFVRjJRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1UwRkJVM2hLTEZOQlFWUXNRMEZCYlVKNVNpeEZRVUZ1UWl4RlFVRjFRbmhETEV0QlFYWkNMRVZCUVRoQ2VVTXNSMEZCT1VJc1JVRkJiVU5ETEVsQlFXNURMRVZCUTBFN1FVRkRTVHRCUVVOQkxGRkJRVWRFTEZGQlFWRTFSeXhUUVVGU0xFbEJRWEZDTmtjc1UwRkJVemRITEZOQlFXcERMRVZCUTBFN1FVRkRTWGxITEdOQlFVMDNTU3hKUVVGT0xFTkJRVmNzU1VGQldDeEZRVUZwUWl0SkxFVkJRV3BDTEVWQlFYRkNlRU1zUzBGQmNrSXNSVUZCTkVKNVF5eEhRVUUxUWl4RlFVRnBRME1zU1VGQmFrTTdRVUZEU0R0QlFVTkVPMEZCU2tFc1UwRk5RVHRCUVVOSlNpeHJRa0ZCVFRkSkxFbEJRVTRzUTBGQlZ5eEpRVUZZTEVWQlFXbENLMGtzUlVGQmFrSXNSVUZCY1VKNFF5eExRVUZ5UWp0QlFVTklPenRCUVVWS08wRkJRMGNzVTBGQlN6SkRMRXRCUVV3c1IwRkJZU3hEUVVGaU96dEJRVVZCTzBGQlEwRXNVMEZCUzBNc1YwRkJUQ3hIUVVGdFFpeERRVUZETEVOQlFYQkNPenRCUVVWQk8wRkJRMEVzVTBGQlMwTXNiMEpCUVV3c1IwRkJORUlzUTBGQlF5eERRVUUzUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVTBGQlMwTXNjVUpCUVV3c1IwRkJOa0lzUzBGQk4wSTdRVUZGU0RzN1FVRkZSQzlLTEZWQlFWVlhMRk5CUVZZc1IwRkJjMEpETEU5QlFVOURMRTFCUVZBc1EwRkJZekJKTEUxQlFVMDFTU3hUUVVGd1FpeERRVUYwUWp0QlFVTkJMRXRCUVVzc1NVRkJTVWNzVlVGQlZDeEpRVUYxUW5sSkxFdEJRWFpDTEVWQlEwRTdRVUZEU1haS0xHTkJRVlZqTEZWQlFWWXNTVUZCZDBKNVNTeE5RVUZOZWtrc1ZVRkJUaXhEUVVGNFFqdEJRVU5JT3p0QlFVVkVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CWkN4VlFVRlZWeXhUUVVGV0xFTkJRVzlDY1Vvc1UwRkJjRUlzUjBGQlowTXNXVUZEYUVNN1FVRkRTU3hYUVVGUExFdEJRVXRETEZGQlFVd3NSVUZCVUR0QlFVTklMRU5CU0VRN08wRkJTMEU3UVVGRFFUdEJRVU5CTzBGQlEwRnFTeXhWUVVGVlZ5eFRRVUZXTEVOQlFXOUNhVVVzVVVGQmNFSXNSMEZCSzBJc1ZVRkJVM2xGTEV0QlFWUXNSVUZETDBJN1FVRkRTU3hUUVVGTFVTeFhRVUZNTEVkQlFXMUNVaXhMUVVGdVFqdEJRVU5CTEZOQlFVdFZMSEZDUVVGTUxFZEJRVFpDTEV0QlFUZENPMEZCUTBnc1EwRktSRHM3UVVGTlFUdEJRVU5CTzBGQlEwRTdRVUZEUVM5S0xGVkJRVlZYTEZOQlFWWXNRMEZCYjBKWExGRkJRWEJDTEVkQlFTdENMRmxCUXk5Q08wRkJRMGtzVjBGQlR5eExRVUZMZFVrc1YwRkJXanRCUVVOSUxFTkJTRVE3TzBGQlMwRTdRVUZEUVR0QlFVTkJOMG9zVlVGQlZWY3NVMEZCVml4RFFVRnZRalpGTERCQ1FVRndRaXhIUVVGcFJDeFpRVU5xUkR0QlFVTkpMRkZCUVV0eVJTeFBRVUZQTEVsQlFWbzdPMEZCUlVFc1VVRkJTU3RKTEdkQ1FVRm5RaXhGUVVGd1FqdEJRVU5CTDBrc1UwRkJTelJJTEdkQ1FVRk1MRWRCUVhkQ1F5eFJRVUY0UWl4RFFVRnBRMnRDTEdGQlFXcERPMEZCUTBFc1VVRkJTUzlJTEZOQlFWTXJTQ3hqUVVGalF5eE5RVUZrTEVOQlFYTkNia29zVVVGQlZVRXNTMEZCUzAwc1VVRkJUQ3hQUVVGdlFpeERRVUZETEVOQlFYSkVMRU5CUVdJN08wRkJSVUZoTEZkQlFVOXhSeXhKUVVGUUxFTkJRVmtzVlVGQlUwTXNRMEZCVkN4RlFVRlhReXhEUVVGWUxFVkJRV0U3UVVGRGNrSXNaVUZCVDBRc1JVRkJSVGxDTEZOQlFVWXNTMEZCWjBJclFpeEZRVUZGTDBJc1UwRkJSaXhGUVVGMlFqdEJRVU5JTEV0QlJrUTdPMEZCU1VFc1YwRkJUM2hGTEUxQlFWQTdRVUZEU0N4RFFXSkVPenRCUVdWQk8wRkJRMEZ1UXl4VlFVRlZWeXhUUVVGV0xFTkJRVzlDWjBjc1UwRkJjRUlzUjBGQlowTXNXVUZEYUVNN1FVRkRTU3hYUVVGUExFdEJRVXQ1UkN4UlFVRk1MRWRCUVdkQ2RFY3NUVUZCZGtJN1FVRkRTQ3hEUVVoRU96dEJRVXRCTzBGQlEwRTdRVUZEUVRsRUxGVkJRVlZYTEZOQlFWWXNRMEZCYjBJeVJTeFRRVUZ3UWl4SFFVRnBReXhaUVVOcVF6dEJRVU5KTEZkQlFWRXNTMEZCUzJoRkxGRkJRVXdzUzBGQmEwSXNRMEZCUXl4RFFVRXpRanRCUVVOSUxFTkJTRVE3TzBGQlMwRTdRVUZEUVR0QlFVTkJkRUlzVlVGQlZWY3NVMEZCVml4RFFVRnZRbXRGTEZGQlFYQkNMRWRCUVN0Q0xGVkJRVk1yUlN4TFFVRlVMRVZCUXk5Q08wRkJRMGtzVTBGQlMwRXNTMEZCVEN4SFFVRmhRU3hMUVVGaU8wRkJRMGdzUTBGSVJEczdRVUZMUVR0QlFVTkJPMEZCUTBFMVNpeFZRVUZWVnl4VFFVRldMRU5CUVc5Q2JVVXNVVUZCY0VJc1IwRkJLMElzV1VGREwwSTdRVUZEU1N4WFFVRlBMRXRCUVVzNFJTeExRVUZhTzBGQlEwZ3NRMEZJUkRzN1FVRkxRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTlVvc1ZVRkJWVmNzVTBGQlZpeERRVUZ2UW1sQ0xITkNRVUZ3UWl4SFFVRTRReXhWUVVGVGVVa3NUMEZCVkN4RlFVTTVRenRCUVVOSkxGRkJRVWxzU2l4UFFVRlBMRWxCUVZnN1FVRkRRU3hSUVVGSmJVb3NZVUZCWVVRc1VVRkJVUzlKTEZGQlFWSXNSVUZCYWtJN08wRkJSVUVzVVVGQlIyZEtMR1ZCUVdVc1EwRkJReXhEUVVGb1FpeEpRVUZ4UW01S0xFdEJRVXRITEZGQlFVd3NUMEZCYjBJc1EwRkJReXhEUVVFM1F5eEZRVU5CTzBGQlEwa3NaVUZCVHl4RFFVRkRMRU5CUVZJN1FVRkRTRHM3UVVGRlJDeFJRVUZKYVVvc1QwRkJUM0JLTEV0QlFVdEhMRkZCUVV3c1MwRkJhMEpuU2l4VlFVRTNRanM3UVVGRlFTeFJRVUZIUXl4UFFVRlBMRU5CUVZZc1JVRkRRVHRCUVVOSlFTeG5Ra0ZCVVhCS0xFdEJRVXMyU1N4VFFVRk1MRWRCUVdsQ2NFY3NUMEZCYWtJc1JVRkJVanRCUVVOSU96dEJRVVZFTEZkQlFVOHlSeXhKUVVGUU8wRkJRMGdzUTBGc1FrUTdPMEZCYjBKQk8wRkJRMEU3UVVGRFFYWkxMRlZCUVZWWExGTkJRVllzUTBGQmIwSTJTaXg1UWtGQmNFSXNSMEZCYVVRc1ZVRkJVME1zVTBGQlZDeEZRVU5xUkR0QlFVTkpMRkZCUVVsMFNpeFBRVUZQTEVsQlFWZzdRVUZEUVN4UlFVRkpiVUlzWjBKQlFXZENMRU5CUVhCQ096dEJRVVZCYmtJc1UwRkJTMmxLTEZGQlFVd3NSMEZCWjBJM1NDeFBRVUZvUWl4RFFVTkpMRlZCUVZORExFbEJRVlFzUlVGRFFUdEJRVU5KYVVrc2EwSkJRVlZNTEZGQlFWWXNSMEZCY1VJM1NDeFBRVUZ5UWl4RFFVTkpMRlZCUVZOeVFpeFRRVUZVTEVWQlEwRTdRVUZEU1c5Q0xEWkNRVUZwUWtVc1MwRkJTMDRzWjBKQlFVd3NRMEZCYzBKb1FpeFRRVUYwUWl4RFFVRnFRanRCUVVOSUxGTkJTa3c3UVVGTlNDeExRVlJNT3p0QlFWbEJMRmRCUVU5dlFpeGhRVUZRTzBGQlEwZ3NRMEZzUWtRN08wRkJiMEpCTzBGQlEwRTdRVUZEUVR0QlFVTkJkRU1zVlVGQlZWY3NVMEZCVml4RFFVRnZRblZFTEhWQ1FVRndRaXhIUVVFNFF5eFpRVU01UXp0QlFVTkpMRkZCUVVrdlF5eFBRVUZQTEVsQlFWZzdPMEZCUlVFc1VVRkJSeXhEUVVGRFFTeExRVUZMTkVrc2NVSkJRVlFzUlVGRFFUdEJRVU5KTlVrc1lVRkJTMnRHTEhOQ1FVRk1PMEZCUTBGc1JpeGhRVUZMTkVrc2NVSkJRVXdzUjBGQk5rSXNTVUZCTjBJN1FVRkZTRHM3UVVGRlJDeFhRVUZQTlVrc1MwRkJTekpKTEc5Q1FVRmFPMEZCUTBnc1EwRmFSRHM3UVVGbFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk9Vb3NWVUZCVlZjc1UwRkJWaXhEUVVGdlFqQkdMSE5DUVVGd1FpeEhRVUUyUXl4WlFVTTNRenRCUVVOSkxGRkJRVWxzUml4UFFVRlBMRWxCUVZnN1FVRkRRU3hSUVVGSmRVb3NjMEpCUVhOQ0xFTkJRVEZDTzBGQlEwRXNVVUZCU1VNc2FVSkJRV2xDTEVWQlFYSkNPMEZCUTBGQkxHMUNRVUZsYWtZc1NVRkJaaXhEUVVGdlFtdEdMRXRCUVhCQ0xFTkJRVEJDUkN4alFVRXhRaXhGUVVFd1EzaEtMRXRCUVVzMlNTeFRRVUZNTEVkQlFXbENTU3hSUVVGcVFpeEZRVUV4UXp0QlFVTkJUeXh4UWtGQmFVSkJMR1ZCUVdWU0xFMUJRV1lzUTBGQmQwSlZMRWRCUVVRc1NVRkJVekZLTEV0QlFVdHBTaXhSUVVGTUxFZEJRV2RDVlN4UFFVRm9RaXhEUVVGM1FrUXNSMEZCZUVJc1NVRkJLMElzUTBGQkwwUXNRMEZCYWtJN08wRkJSVUV4U2l4VFFVRkxhVW9zVVVGQlRDeEhRVUZuUWpkSUxFOUJRV2hDTEVOQlEwdERMRWxCUVVRc1NVRkJWV3RKTEhWQ1FVRjFRbXhKTEV0QlFVdEtMRGhDUVVGTUxFTkJRVzlEZFVrc1kwRkJjRU1zUTBGRWNrTTdPMEZCU1VGNFNpeFRRVUZMTWtrc2IwSkJRVXdzUjBGQk5FSlpMRzFDUVVFMVFqdEJRVU5JTEVOQllrUTdPMEZCWlVGNlN5eFBRVUZQUXl4UFFVRlFMRWRCUVdsQ1JpeFRRVUZxUWl4RElpd2labWxzWlNJNkltRjJjMlJtTFdKaGMyVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0poZG5Oa1prSmhjMlZjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpWVhaelpHWkNZWE5sWENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2QybHVaRzkzTENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibXhsZENCaGRuTmtaa0poYzJVZ1BTQjdmVHRjYmx4dVlYWnpaR1pDWVhObExteGhlVzkxZEVKaGMyVWdQU0J5WlhGMWFYSmxLQ2RzWVhsdmRYUXRZbUZ6WlNjcE8xeHVZWFp6WkdaQ1lYTmxMa0ZXVTBSR1EyOXVjM1JoYm5SeklEMGdjbVZ4ZFdseVpTZ25MaTl6Y21NdlFWWlRSRVpEYjI1emRHRnVkSE1uS1R0Y2JtRjJjMlJtUW1GelpTNUJWbE5FUmtWa1oyVWdQU0J5WlhGMWFYSmxLQ2N1TDNOeVl5OUJWbE5FUmtWa1oyVW5LVHRjYm1GMmMyUm1RbUZ6WlM1QlZsTkVSa05wY21Oc1pTQTlJSEpsY1hWcGNtVW9KeTR2YzNKakwwRldVMFJHUTJseVkyeGxKeWs3WEc1aGRuTmtaa0poYzJVdVFWWlRSRVpNWVhsdmRYUWdQU0J5WlhGMWFYSmxLQ2N1TDNOeVl5OUJWbE5FUmt4aGVXOTFkQ2NwTzF4dVlYWnpaR1pDWVhObExrRldVMFJHVG05a1pTQTlJSEpsY1hWcGNtVW9KeTR2YzNKakwwRldVMFJHVG05a1pTY3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdGMmMyUm1RbUZ6WlRzaUxDSW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKc1lYbHZkWFJDWVhObFhDSmRJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0lteGhlVzkxZEVKaGMyVmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNTlLU2gzYVc1a2IzY3NJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUM4cUtpb3FLaW92SUNobWRXNWpkR2x2YmlodGIyUjFiR1Z6S1NCN0lDOHZJSGRsWW5CaFkydENiMjkwYzNSeVlYQmNiaThxS2lvcUtpb3ZJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUx5b3FLaW9xS2k4Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVMeW9xS2lvcUtpOWNiaThxS2lvcUtpb3ZJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaThxS2lvcUtpb3ZJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVMeW9xS2lvcUtpOWNiaThxS2lvcUtpb3ZJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaThxS2lvcUtpb3ZJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1THlvcUtpb3FLaThnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNHZLaW9xS2lvcUx5QmNkRngwZlZ4dUx5b3FLaW9xS2k4Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNHZLaW9xS2lvcUx5QmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1THlvcUtpb3FLaThnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0dktpb3FLaW9xTHlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmk4cUtpb3FLaW92SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0dktpb3FLaW9xTHlCY2RGeDBmVHRjYmk4cUtpb3FLaW92WEc0dktpb3FLaW9xTHlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0dktpb3FLaW9xTHlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc0dktpb3FLaW9xTDF4dUx5b3FLaW9xS2k4Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmk4cUtpb3FLaW92SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNHZLaW9xS2lvcUwxeHVMeW9xS2lvcUtpOGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0dktpb3FLaW9xTHlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUx5b3FLaW9xS2k4Z1hIUjlYRzR2S2lvcUtpb3FMMXh1THlvcUtpb3FLaTljYmk4cUtpb3FLaW92SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmk4cUtpb3FLaW92SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmk4cUtpb3FLaW92WEc0dktpb3FLaW9xTHlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNHZLaW9xS2lvcUx5QmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNHZLaW9xS2lvcUwxeHVMeW9xS2lvcUtpOGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmk4cUtpb3FLaW92SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzR2S2lvcUtpb3FMeUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUx5b3FLaW9xS2k4Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0dktpb3FLaW9xTHlCY2RGeDBmVnh1THlvcUtpb3FLaThnWEhSOU8xeHVMeW9xS2lvcUtpOWNiaThxS2lvcUtpb3ZJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVMeW9xS2lvcUtpOGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzR2S2lvcUtpb3FMeUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzR2S2lvcUtpb3FMeUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaThxS2lvcUtpb3ZJRngwWEhSOVhHNHZLaW9xS2lvcUx5QmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmk4cUtpb3FLaW92SUZ4MGZUdGNiaThxS2lvcUtpb3ZYRzR2S2lvcUtpb3FMeUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1THlvcUtpb3FLaThnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpOHFLaW9xS2lvdklGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzR2S2lvcUtpb3FMeUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVMeW9xS2lvcUtpOGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzR2S2lvcUtpb3FMeUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNHZLaW9xS2lvcUx5QmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNHZLaW9xS2lvcUx5QmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmk4cUtpb3FLaW92SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUx5b3FLaW9xS2k4Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0dktpb3FLaW9xTHlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaThxS2lvcUtpb3ZJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNHZLaW9xS2lvcUx5QmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVMeW9xS2lvcUtpOGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpOHFLaW9xS2lvdklGeDBmVHRjYmk4cUtpb3FLaW92WEc0dktpb3FLaW9xTHlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNHZLaW9xS2lvcUx5QmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVMeW9xS2lvcUtpOGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1THlvcUtpb3FLaThnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaThxS2lvcUtpb3ZJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzR2S2lvcUtpb3FMeUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUx5b3FLaW9xS2k4Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNHZLaW9xS2lvcUx5QmNkSDA3WEc0dktpb3FLaW9xTDF4dUx5b3FLaW9xS2k4Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmk4cUtpb3FLaW92SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVMeW9xS2lvcUtpOWNiaThxS2lvcUtpb3ZJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmk4cUtpb3FLaW92SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNiaThxS2lvcUtpb3ZYRzR2S2lvcUtpb3FMMXh1THlvcUtpb3FLaThnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaThxS2lvcUtpb3ZJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0dktpb3FLaW9xTHlCOUtWeHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaTljYmk4cUtpb3FLaW92SUNoYlhHNHZLaUF3SUNvdlhHNHZLaW9xTHlBb1puVnVZM1JwYjI0b2JXOWtkV3hsTENCbGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktTQjdYRzVjYmx3aWRYTmxJSE4wY21samRGd2lPMXh1WEc1Y2JteGxkQ0JzWVhsdmRYUkNZWE5sSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTQ3WEc1OU8xeHVYRzVzWVhsdmRYUkNZWE5sTGtaRVRHRjViM1YwSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5Z3hLVHRjYm14aGVXOTFkRUpoYzJVdVJrUk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREl5S1R0Y2JteGhlVzkxZEVKaGMyVXVSa1JNWVhsdmRYUkZaR2RsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5Z3lNeWs3WEc1c1lYbHZkWFJDWVhObExrWkVUR0Y1YjNWMFRtOWtaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01qUXBPMXh1YkdGNWIzVjBRbUZ6WlM1RWFXMWxibk5wYjI1RUlEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd5TlNrN1hHNXNZWGx2ZFhSQ1lYTmxMa2hoYzJoTllYQWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RRcE8xeHViR0Y1YjNWMFFtRnpaUzVJWVhOb1UyVjBJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlneE55azdYRzVzWVhsdmRYUkNZWE5sTGtsSFpXOXRaWFJ5ZVNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9PU2s3WEc1c1lYbHZkWFJDWVhObExrbE5ZWFJvSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5Z3hNQ2s3WEc1c1lYbHZkWFJDWVhObExrbHVkR1ZuWlhJZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREV5S1R0Y2JteGhlVzkxZEVKaGMyVXVVRzlwYm5RZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREU0S1R0Y2JteGhlVzkxZEVKaGMyVXVVRzlwYm5SRUlEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd4TmlrN1hHNXNZWGx2ZFhSQ1lYTmxMbEpoYm1SdmJWTmxaV1FnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktERTFLVHRjYm14aGVXOTFkRUpoYzJVdVVtVmpkR0Z1WjJ4bFJDQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvTVRRcE8xeHViR0Y1YjNWMFFtRnpaUzVVY21GdWMyWnZjbTBnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktESXdLVHRjYm14aGVXOTFkRUpoYzJVdVZXNXBjWFZsU1VSSFpXNWxjbVYwYjNJZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRFVwTzF4dWJHRjViM1YwUW1GelpTNVJkV2xqYTNOdmNuUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RJMktUdGNibXhoZVc5MWRFSmhjMlV1VEdsdWEyVmtUR2x6ZENBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9NVGtwTzF4dWJHRjViM1YwUW1GelpTNU1SM0poY0doUFltcGxZM1FnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktEZ3BPMXh1YkdGNWIzVjBRbUZ6WlM1TVIzSmhjR2dnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktERXhLVHRjYm14aGVXOTFkRUpoYzJVdVRFVmtaMlVnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktEY3BPMXh1YkdGNWIzVjBRbUZ6WlM1TVIzSmhjR2hOWVc1aFoyVnlJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnMktUdGNibXhoZVc5MWRFSmhjMlV1VEU1dlpHVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RFektUdGNibXhoZVc5MWRFSmhjMlV1VEdGNWIzVjBJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlneUtUdGNibXhoZVc5MWRFSmhjMlV1VEdGNWIzVjBRMjl1YzNSaGJuUnpJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnektUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JzWVhsdmRYUkNZWE5sTzF4dVhHNHZLaW9xTHlCOUtTeGNiaThxSURFZ0tpOWNiaThxS2lvdklDaG1kVzVqZEdsdmJpaHRiMlIxYkdVc0lHVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBJSHRjYmx4dWRtRnlJRXhoZVc5MWRDQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvTWlrN1hHNTJZWElnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE1nUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktESXlLVHRjYm5aaGNpQk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRE1wTzF4dWRtRnlJRWxIWlc5dFpYUnllU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b09TazdYRzUyWVhJZ1NVMWhkR2dnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktERXdLVHRjYmx4dVpuVnVZM1JwYjI0Z1JrUk1ZWGx2ZFhRb0tTQjdYRzRnSUV4aGVXOTFkQzVqWVd4c0tIUm9hWE1wTzF4dVhHNGdJSFJvYVhNdWRYTmxVMjFoY25SSlpHVmhiRVZrWjJWTVpXNW5kR2hEWVd4amRXeGhkR2x2YmlBOUlFWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlZWTkZYMU5OUVZKVVgwbEVSVUZNWDBWRVIwVmZURVZPUjFSSVgwTkJURU5WVEVGVVNVOU9PMXh1SUNCMGFHbHpMbWxrWldGc1JXUm5aVXhsYm1kMGFDQTlJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZSVVJIUlY5TVJVNUhWRWc3WEc0Z0lIUm9hWE11YzNCeWFXNW5RMjl1YzNSaGJuUWdQU0JHUkV4aGVXOTFkRU52Ym5OMFlXNTBjeTVFUlVaQlZVeFVYMU5RVWtsT1IxOVRWRkpGVGtkVVNEdGNiaUFnZEdocGN5NXlaWEIxYkhOcGIyNURiMjV6ZEdGdWRDQTlJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZVa1ZRVlV4VFNVOU9YMU5VVWtWT1IxUklPMXh1SUNCMGFHbHpMbWR5WVhacGRIbERiMjV6ZEdGdWRDQTlJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZSMUpCVmtsVVdWOVRWRkpGVGtkVVNEdGNiaUFnZEdocGN5NWpiMjF3YjNWdVpFZHlZWFpwZEhsRGIyNXpkR0Z1ZENBOUlFWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlEwOU5VRTlWVGtSZlIxSkJWa2xVV1Y5VFZGSkZUa2RVU0R0Y2JpQWdkR2hwY3k1bmNtRjJhWFI1VW1GdVoyVkdZV04wYjNJZ1BTQkdSRXhoZVc5MWRFTnZibk4wWVc1MGN5NUVSVVpCVlV4VVgwZFNRVlpKVkZsZlVrRk9SMFZmUmtGRFZFOVNPMXh1SUNCMGFHbHpMbU52YlhCdmRXNWtSM0poZG1sMGVWSmhibWRsUm1GamRHOXlJRDBnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlEVDAxUVQxVk9SRjlIVWtGV1NWUlpYMUpCVGtkRlgwWkJRMVJQVWp0Y2JpQWdkR2hwY3k1a2FYTndiR0ZqWlcxbGJuUlVhSEpsYzJodmJHUlFaWEpPYjJSbElEMGdNeTR3SUNvZ1JrUk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVJFVkdRVlZNVkY5RlJFZEZYMHhGVGtkVVNDQXZJREV3TUR0Y2JpQWdkR2hwY3k1amIyOXNhVzVuUm1GamRHOXlJRDBnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlEVDA5TVNVNUhYMFpCUTFSUFVsOUpUa05TUlUxRlRsUkJURHRjYmlBZ2RHaHBjeTVwYm1sMGFXRnNRMjl2YkdsdVowWmhZM1J2Y2lBOUlFWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlEwOVBURWxPUjE5R1FVTlVUMUpmU1U1RFVrVk5SVTVVUVV3N1hHNGdJSFJvYVhNdWRHOTBZV3hFYVhOd2JHRmpaVzFsYm5RZ1BTQXdMakE3WEc0Z0lIUm9hWE11YjJ4a1ZHOTBZV3hFYVhOd2JHRmpaVzFsYm5RZ1BTQXdMakE3WEc0Z0lIUm9hWE11YldGNFNYUmxjbUYwYVc5dWN5QTlJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpMazFCV0Y5SlZFVlNRVlJKVDA1VE8xeHVmVnh1WEc1R1JFeGhlVzkxZEM1d2NtOTBiM1I1Y0dVZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0V4aGVXOTFkQzV3Y205MGIzUjVjR1VwTzF4dVhHNW1iM0lnS0haaGNpQndjbTl3SUdsdUlFeGhlVzkxZENrZ2UxeHVJQ0JHUkV4aGVXOTFkRnR3Y205d1hTQTlJRXhoZVc5MWRGdHdjbTl3WFR0Y2JuMWNibHh1UmtSTVlYbHZkWFF1Y0hKdmRHOTBlWEJsTG1sdWFYUlFZWEpoYldWMFpYSnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0JNWVhsdmRYUXVjSEp2ZEc5MGVYQmxMbWx1YVhSUVlYSmhiV1YwWlhKekxtTmhiR3dvZEdocGN5d2dZWEpuZFcxbGJuUnpLVHRjYmx4dUlDQnBaaUFvZEdocGN5NXNZWGx2ZFhSUmRXRnNhWFI1SUQwOUlFeGhlVzkxZEVOdmJuTjBZVzUwY3k1RVVrRkdWRjlSVlVGTVNWUlpLU0I3WEc0Z0lDQWdkR2hwY3k1a2FYTndiR0ZqWlcxbGJuUlVhSEpsYzJodmJHUlFaWEpPYjJSbElDczlJREF1TXpBN1hHNGdJQ0FnZEdocGN5NXRZWGhKZEdWeVlYUnBiMjV6SUNvOUlEQXVPRHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDBhR2x6TG14aGVXOTFkRkYxWVd4cGRIa2dQVDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMbEJTVDA5R1gxRlZRVXhKVkZrcElIdGNiaUFnSUNCMGFHbHpMbVJwYzNCc1lXTmxiV1Z1ZEZSb2NtVnphRzlzWkZCbGNrNXZaR1VnTFQwZ01DNHpNRHRjYmlBZ0lDQjBhR2x6TG0xaGVFbDBaWEpoZEdsdmJuTWdLajBnTVM0eU8xeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1MGIzUmhiRWwwWlhKaGRHbHZibk1nUFNBd08xeHVJQ0IwYUdsekxtNXZkRUZ1YVcxaGRHVmtTWFJsY21GMGFXOXVjeUE5SURBN1hHNWNiaUFnZEdocGN5NTFjMlZHVWtkeWFXUldZWEpwWVc1MElEMGdSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOVZVMFZmVTAxQlVsUmZVa1ZRVlV4VFNVOU9YMUpCVGtkRlgwTkJURU5WVEVGVVNVOU9PMXh1WEc0Z0lIUm9hWE11WjNKcFpDQTlJRnRkTzF4dWZUdGNibHh1UmtSTVlYbHZkWFF1Y0hKdmRHOTBlWEJsTG1OaGJHTkpaR1ZoYkVWa1oyVk1aVzVuZEdoeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQjJZWElnWldSblpUdGNiaUFnZG1GeUlHeGpZVVJsY0hSb08xeHVJQ0IyWVhJZ2MyOTFjbU5sTzF4dUlDQjJZWElnZEdGeVoyVjBPMXh1SUNCMllYSWdjMmw2WlU5bVUyOTFjbU5sU1c1TVkyRTdYRzRnSUhaaGNpQnphWHBsVDJaVVlYSm5aWFJKYmt4allUdGNibHh1SUNCMllYSWdZV3hzUldSblpYTWdQU0IwYUdsekxtZGxkRWR5WVhCb1RXRnVZV2RsY2lncExtZGxkRUZzYkVWa1oyVnpLQ2s3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dZV3hzUldSblpYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0JsWkdkbElEMGdZV3hzUldSblpYTmJhVjA3WEc1Y2JpQWdJQ0JsWkdkbExtbGtaV0ZzVEdWdVozUm9JRDBnZEdocGN5NXBaR1ZoYkVWa1oyVk1aVzVuZEdnN1hHNWNiaUFnSUNCcFppQW9aV1JuWlM1cGMwbHVkR1Z5UjNKaGNHZ3BJSHRjYmlBZ0lDQWdJSE52ZFhKalpTQTlJR1ZrWjJVdVoyVjBVMjkxY21ObEtDazdYRzRnSUNBZ0lDQjBZWEpuWlhRZ1BTQmxaR2RsTG1kbGRGUmhjbWRsZENncE8xeHVYRzRnSUNBZ0lDQnphWHBsVDJaVGIzVnlZMlZKYmt4allTQTlJR1ZrWjJVdVoyVjBVMjkxY21ObFNXNU1ZMkVvS1M1blpYUkZjM1JwYldGMFpXUlRhWHBsS0NrN1hHNGdJQ0FnSUNCemFYcGxUMlpVWVhKblpYUkpia3hqWVNBOUlHVmtaMlV1WjJWMFZHRnlaMlYwU1c1TVkyRW9LUzVuWlhSRmMzUnBiV0YwWldSVGFYcGxLQ2s3WEc1Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG5WelpWTnRZWEowU1dSbFlXeEZaR2RsVEdWdVozUm9RMkZzWTNWc1lYUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ1pXUm5aUzVwWkdWaGJFeGxibWQwYUNBclBTQnphWHBsVDJaVGIzVnlZMlZKYmt4allTQXJJSE5wZW1WUFpsUmhjbWRsZEVsdVRHTmhJQzBnTWlBcUlFeGhlVzkxZEVOdmJuTjBZVzUwY3k1VFNVMVFURVZmVGs5RVJWOVRTVnBGTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCc1kyRkVaWEIwYUNBOUlHVmtaMlV1WjJWMFRHTmhLQ2t1WjJWMFNXNWpiSFZ6YVc5dVZISmxaVVJsY0hSb0tDazdYRzVjYmlBZ0lDQWdJR1ZrWjJVdWFXUmxZV3hNWlc1bmRHZ2dLejBnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlGUkVkRlgweEZUa2RVU0NBcUlFWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxsQkZVbDlNUlZaRlRGOUpSRVZCVEY5RlJFZEZYMHhGVGtkVVNGOUdRVU5VVDFJZ0tpQW9jMjkxY21ObExtZGxkRWx1WTJ4MWMybHZibFJ5WldWRVpYQjBhQ2dwSUNzZ2RHRnlaMlYwTG1kbGRFbHVZMngxYzJsdmJsUnlaV1ZFWlhCMGFDZ3BJQzBnTWlBcUlHeGpZVVJsY0hSb0tUdGNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNWNia1pFVEdGNWIzVjBMbkJ5YjNSdmRIbHdaUzVwYm1sMFUzQnlhVzVuUlcxaVpXUmtaWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjYmlBZ2FXWWdLSFJvYVhNdWFXNWpjbVZ0Wlc1MFlXd3BJSHRjYmlBZ0lDQjBhR2x6TG0xaGVFNXZaR1ZFYVhOd2JHRmpaVzFsYm5RZ1BTQkdSRXhoZVc5MWRFTnZibk4wWVc1MGN5NU5RVmhmVGs5RVJWOUVTVk5RVEVGRFJVMUZUbFJmU1U1RFVrVk5SVTVVUVV3N1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2RHaHBjeTVqYjI5c2FXNW5SbUZqZEc5eUlEMGdNUzR3TzF4dUlDQWdJSFJvYVhNdWFXNXBkR2xoYkVOdmIyeHBibWRHWVdOMGIzSWdQU0F4TGpBN1hHNGdJQ0FnZEdocGN5NXRZWGhPYjJSbFJHbHpjR3hoWTJWdFpXNTBJRDBnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11VFVGWVgwNVBSRVZmUkVsVFVFeEJRMFZOUlU1VU8xeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1dFlYaEpkR1Z5WVhScGIyNXpJRDBnVFdGMGFDNXRZWGdvZEdocGN5NW5aWFJCYkd4T2IyUmxjeWdwTG14bGJtZDBhQ0FxSURVc0lIUm9hWE11YldGNFNYUmxjbUYwYVc5dWN5azdYRzVjYmlBZ2RHaHBjeTUwYjNSaGJFUnBjM0JzWVdObGJXVnVkRlJvY21WemFHOXNaQ0E5SUhSb2FYTXVaR2x6Y0d4aFkyVnRaVzUwVkdoeVpYTm9iMnhrVUdWeVRtOWtaU0FxSUhSb2FYTXVaMlYwUVd4c1RtOWtaWE1vS1M1c1pXNW5kR2c3WEc1Y2JpQWdkR2hwY3k1eVpYQjFiSE5wYjI1U1lXNW5aU0E5SUhSb2FYTXVZMkZzWTFKbGNIVnNjMmx2YmxKaGJtZGxLQ2s3WEc1OU8xeHVYRzVHUkV4aGVXOTFkQzV3Y205MGIzUjVjR1V1WTJGc1kxTndjbWx1WjBadmNtTmxjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZG1GeUlHeEZaR2RsY3lBOUlIUm9hWE11WjJWMFFXeHNSV1JuWlhNb0tUdGNiaUFnZG1GeUlHVmtaMlU3WEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzUldSblpYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0JsWkdkbElEMGdiRVZrWjJWelcybGRPMXh1WEc0Z0lDQWdkR2hwY3k1allXeGpVM0J5YVc1blJtOXlZMlVvWldSblpTd2daV1JuWlM1cFpHVmhiRXhsYm1kMGFDazdYRzRnSUgxY2JuMDdYRzVjYmtaRVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1allXeGpVbVZ3ZFd4emFXOXVSbTl5WTJWeklEMGdablZ1WTNScGIyNGdLR2R5YVdSVmNHUmhkR1ZCYkd4dmQyVmtJRDBnZEhKMVpTd2dabTl5WTJWVWIwNXZaR1ZUZFhKeWIzVnVaR2x1WjFWd1pHRjBaU0E5SUdaaGJITmxLU0I3WEc0Z0lIWmhjaUJwTENCcU8xeHVJQ0IyWVhJZ2JtOWtaVUVzSUc1dlpHVkNPMXh1SUNCMllYSWdiRTV2WkdWeklEMGdkR2hwY3k1blpYUkJiR3hPYjJSbGN5Z3BPMXh1SUNCMllYSWdjSEp2WTJWemMyVmtUbTlrWlZObGREdGNibHh1SUNCcFppQW9kR2hwY3k1MWMyVkdVa2R5YVdSV1lYSnBZVzUwS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11ZEc5MFlXeEpkR1Z5WVhScGIyNXpJQ1VnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UjFKSlJGOURRVXhEVlV4QlZFbFBUbDlEU0VWRFMxOVFSVkpKVDBRZ1BUMGdNU0FtSmlCbmNtbGtWWEJrWVhSbFFXeHNiM2RsWkNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTUxY0dSaGRHVkhjbWxrS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKdlkyVnpjMlZrVG05a1pWTmxkQ0E5SUc1bGR5QlRaWFFvS1R0Y2JseHVJQ0FnSUM4dklHTmhiR04xYkdGMFpTQnlaWEIxYkhOcGIyNGdabTl5WTJWeklHSmxkSGRsWlc0Z1pXRmphQ0J1YjJSbGN5QmhibVFnYVhSeklITjFjbkp2ZFc1a2FXNW5YRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUd4T2IyUmxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2JtOWtaVUVnUFNCc1RtOWtaWE5iYVYwN1hHNGdJQ0FnSUNCMGFHbHpMbU5oYkdOMWJHRjBaVkpsY0hWc2MybHZia1p2Y21ObFQyWkJUbTlrWlNodWIyUmxRU3dnY0hKdlkyVnpjMlZrVG05a1pWTmxkQ3dnWjNKcFpGVndaR0YwWlVGc2JHOTNaV1FzSUdadmNtTmxWRzlPYjJSbFUzVnljbTkxYm1ScGJtZFZjR1JoZEdVcE8xeHVJQ0FnSUNBZ2NISnZZMlZ6YzJWa1RtOWtaVk5sZEM1aFpHUW9ibTlrWlVFcE8xeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYkU1dlpHVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCdWIyUmxRU0E5SUd4T2IyUmxjMXRwWFR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2hxSUQwZ2FTQXJJREU3SUdvZ1BDQnNUbTlrWlhNdWJHVnVaM1JvT3lCcUt5c3BJSHRjYmlBZ0lDQWdJQ0FnYm05a1pVSWdQU0JzVG05a1pYTmJhbDA3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnWW05MGFDQnViMlJsY3lCaGNtVWdibTkwSUcxbGJXSmxjbk1nYjJZZ2RHaGxJSE5oYldVZ1ozSmhjR2dzSUhOcmFYQXVYRzRnSUNBZ0lDQWdJR2xtSUNodWIyUmxRUzVuWlhSUGQyNWxjaWdwSUNFOUlHNXZaR1ZDTG1kbGRFOTNibVZ5S0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MGFXNTFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WTJGc1kxSmxjSFZzYzJsdmJrWnZjbU5sS0c1dlpHVkJMQ0J1YjJSbFFpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVHUkV4aGVXOTFkQzV3Y205MGIzUjVjR1V1WTJGc1kwZHlZWFpwZEdGMGFXOXVZV3hHYjNKalpYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCdWIyUmxPMXh1SUNCMllYSWdiRTV2WkdWeklEMGdkR2hwY3k1blpYUkJiR3hPYjJSbGMxUnZRWEJ3YkhsSGNtRjJhWFJoZEdsdmJpZ3BPMXh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diRTV2WkdWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdibTlrWlNBOUlHeE9iMlJsYzF0cFhUdGNiaUFnSUNCMGFHbHpMbU5oYkdOSGNtRjJhWFJoZEdsdmJtRnNSbTl5WTJVb2JtOWtaU2s3WEc0Z0lIMWNibjA3WEc1Y2JrWkVUR0Y1YjNWMExuQnliM1J2ZEhsd1pTNXRiM1psVG05a1pYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCc1RtOWtaWE1nUFNCMGFHbHpMbWRsZEVGc2JFNXZaR1Z6S0NrN1hHNGdJSFpoY2lCdWIyUmxPMXh1WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diRTV2WkdWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdibTlrWlNBOUlHeE9iMlJsYzF0cFhUdGNiaUFnSUNCdWIyUmxMbTF2ZG1Vb0tUdGNiaUFnZlZ4dWZUdGNibHh1UmtSTVlYbHZkWFF1Y0hKdmRHOTBlWEJsTG1OaGJHTlRjSEpwYm1kR2IzSmpaU0E5SUdaMWJtTjBhVzl1SUNobFpHZGxMQ0JwWkdWaGJFeGxibWQwYUNrZ2UxeHVJQ0IyWVhJZ2MyOTFjbU5sVG05a1pTQTlJR1ZrWjJVdVoyVjBVMjkxY21ObEtDazdYRzRnSUhaaGNpQjBZWEpuWlhST2IyUmxJRDBnWldSblpTNW5aWFJVWVhKblpYUW9LVHRjYmx4dUlDQjJZWElnYkdWdVozUm9PMXh1SUNCMllYSWdjM0J5YVc1blJtOXlZMlU3WEc0Z0lIWmhjaUJ6Y0hKcGJtZEdiM0pqWlZnN1hHNGdJSFpoY2lCemNISnBibWRHYjNKalpWazdYRzVjYmlBZ0x5OGdWWEJrWVhSbElHVmtaMlVnYkdWdVozUm9YRzRnSUdsbUlDaDBhR2x6TG5WdWFXWnZjbTFNWldGbVRtOWtaVk5wZW1WeklDWW1JSE52ZFhKalpVNXZaR1V1WjJWMFEyaHBiR1FvS1NBOVBTQnVkV3hzSUNZbUlIUmhjbWRsZEU1dlpHVXVaMlYwUTJocGJHUW9LU0E5UFNCdWRXeHNLU0I3WEc0Z0lDQWdaV1JuWlM1MWNHUmhkR1ZNWlc1bmRHaFRhVzF3YkdVb0tUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmxaR2RsTG5Wd1pHRjBaVXhsYm1kMGFDZ3BPMXh1WEc0Z0lDQWdhV1lnS0dWa1oyVXVhWE5QZG1WeWJHRndhVzVuVTI5MWNtTmxRVzVrVkdGeVoyVjBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiR1Z1WjNSb0lEMGdaV1JuWlM1blpYUk1aVzVuZEdnb0tUdGNibHh1SUNBdkx5QkRZV3hqZFd4aGRHVWdjM0J5YVc1bklHWnZjbU5sYzF4dUlDQnpjSEpwYm1kR2IzSmpaU0E5SUhSb2FYTXVjM0J5YVc1blEyOXVjM1JoYm5RZ0tpQW9iR1Z1WjNSb0lDMGdhV1JsWVd4TVpXNW5kR2dwTzF4dVhHNGdJQzh2SUZCeWIycGxZM1FnWm05eVkyVWdiMjUwYnlCNElHRnVaQ0I1SUdGNFpYTmNiaUFnYzNCeWFXNW5SbTl5WTJWWUlEMGdjM0J5YVc1blJtOXlZMlVnS2lBb1pXUm5aUzVzWlc1bmRHaFlJQzhnYkdWdVozUm9LVHRjYmlBZ2MzQnlhVzVuUm05eVkyVlpJRDBnYzNCeWFXNW5SbTl5WTJVZ0tpQW9aV1JuWlM1c1pXNW5kR2haSUM4Z2JHVnVaM1JvS1R0Y2JseHVJQ0F2THlCQmNIQnNlU0JtYjNKalpYTWdiMjRnZEdobElHVnVaQ0J1YjJSbGMxeHVJQ0J6YjNWeVkyVk9iMlJsTG5Od2NtbHVaMFp2Y21ObFdDQXJQU0J6Y0hKcGJtZEdiM0pqWlZnN1hHNGdJSE52ZFhKalpVNXZaR1V1YzNCeWFXNW5SbTl5WTJWWklDczlJSE53Y21sdVowWnZjbU5sV1R0Y2JpQWdkR0Z5WjJWMFRtOWtaUzV6Y0hKcGJtZEdiM0pqWlZnZ0xUMGdjM0J5YVc1blJtOXlZMlZZTzF4dUlDQjBZWEpuWlhST2IyUmxMbk53Y21sdVowWnZjbU5sV1NBdFBTQnpjSEpwYm1kR2IzSmpaVms3WEc1OU8xeHVYRzVHUkV4aGVXOTFkQzV3Y205MGIzUjVjR1V1WTJGc1kxSmxjSFZzYzJsdmJrWnZjbU5sSUQwZ1puVnVZM1JwYjI0Z0tHNXZaR1ZCTENCdWIyUmxRaWtnZTF4dUlDQjJZWElnY21WamRFRWdQU0J1YjJSbFFTNW5aWFJTWldOMEtDazdYRzRnSUhaaGNpQnlaV04wUWlBOUlHNXZaR1ZDTG1kbGRGSmxZM1FvS1R0Y2JpQWdkbUZ5SUc5MlpYSnNZWEJCYlc5MWJuUWdQU0J1WlhjZ1FYSnlZWGtvTWlrN1hHNGdJSFpoY2lCamJHbHdVRzlwYm5SeklEMGdibVYzSUVGeWNtRjVLRFFwTzF4dUlDQjJZWElnWkdsemRHRnVZMlZZTzF4dUlDQjJZWElnWkdsemRHRnVZMlZaTzF4dUlDQjJZWElnWkdsemRHRnVZMlZUY1hWaGNtVmtPMXh1SUNCMllYSWdaR2x6ZEdGdVkyVTdYRzRnSUhaaGNpQnlaWEIxYkhOcGIyNUdiM0pqWlR0Y2JpQWdkbUZ5SUhKbGNIVnNjMmx2YmtadmNtTmxXRHRjYmlBZ2RtRnlJSEpsY0hWc2MybHZia1p2Y21ObFdUdGNibHh1SUNCcFppQW9jbVZqZEVFdWFXNTBaWEp6WldOMGN5aHlaV04wUWlrcElDOHZJSFIzYnlCdWIyUmxjeUJ2ZG1WeWJHRndYRzRnSUNBZ2UxeHVJQ0FnSUNBZ0x5OGdZMkZzWTNWc1lYUmxJSE5sY0dGeVlYUnBiMjRnWVcxdmRXNTBJR2x1SUhnZ1lXNWtJSGtnWkdseVpXTjBhVzl1YzF4dUlDQWdJQ0FnU1VkbGIyMWxkSEo1TG1OaGJHTlRaWEJoY21GMGFXOXVRVzF2ZFc1MEtISmxZM1JCTENCeVpXTjBRaXdnYjNabGNteGhjRUZ0YjNWdWRDd2dSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOUZSRWRGWDB4RlRrZFVTQ0F2SURJdU1DazdYRzVjYmlBZ0lDQWdJSEpsY0hWc2MybHZia1p2Y21ObFdDQTlJRElnS2lCdmRtVnliR0Z3UVcxdmRXNTBXekJkTzF4dUlDQWdJQ0FnY21Wd2RXeHphVzl1Um05eVkyVlpJRDBnTWlBcUlHOTJaWEpzWVhCQmJXOTFiblJiTVYwN1hHNWNiaUFnSUNBZ0lIWmhjaUJqYUdsc1pISmxia052Ym5OMFlXNTBJRDBnYm05a1pVRXVibTlQWmtOb2FXeGtjbVZ1SUNvZ2JtOWtaVUl1Ym05UFprTm9hV3hrY21WdUlDOGdLRzV2WkdWQkxtNXZUMlpEYUdsc1pISmxiaUFySUc1dlpHVkNMbTV2VDJaRGFHbHNaSEpsYmlrN1hHNWNiaUFnSUNBZ0lDOHZJRUZ3Y0d4NUlHWnZjbU5sY3lCdmJpQjBhR1VnZEhkdklHNXZaR1Z6WEc0Z0lDQWdJQ0J1YjJSbFFTNXlaWEIxYkhOcGIyNUdiM0pqWlZnZ0xUMGdZMmhwYkdSeVpXNURiMjV6ZEdGdWRDQXFJSEpsY0hWc2MybHZia1p2Y21ObFdEdGNiaUFnSUNBZ0lHNXZaR1ZCTG5KbGNIVnNjMmx2YmtadmNtTmxXU0F0UFNCamFHbHNaSEpsYmtOdmJuTjBZVzUwSUNvZ2NtVndkV3h6YVc5dVJtOXlZMlZaTzF4dUlDQWdJQ0FnYm05a1pVSXVjbVZ3ZFd4emFXOXVSbTl5WTJWWUlDczlJR05vYVd4a2NtVnVRMjl1YzNSaGJuUWdLaUJ5WlhCMWJITnBiMjVHYjNKalpWZzdYRzRnSUNBZ0lDQnViMlJsUWk1eVpYQjFiSE5wYjI1R2IzSmpaVmtnS3owZ1kyaHBiR1J5Wlc1RGIyNXpkR0Z1ZENBcUlISmxjSFZzYzJsdmJrWnZjbU5sV1R0Y2JpQWdJQ0I5SUdWc2MyVWdMeThnYm04Z2IzWmxjbXhoY0Z4dUlDQWdJSHRjYmlBZ0lDQWdJQzh2SUdOaGJHTjFiR0YwWlNCa2FYTjBZVzVqWlZ4dVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1MWJtbG1iM0p0VEdWaFprNXZaR1ZUYVhwbGN5QW1KaUJ1YjJSbFFTNW5aWFJEYUdsc1pDZ3BJRDA5SUc1MWJHd2dKaVlnYm05a1pVSXVaMlYwUTJocGJHUW9LU0E5UFNCdWRXeHNLU0F2THlCemFXMXdiSGtnWW1GelpTQnlaWEIxYkhOcGIyNGdiMjRnWkdsemRHRnVZMlVnYjJZZ2JtOWtaU0JqWlc1MFpYSnpYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCa2FYTjBZVzVqWlZnZ1BTQnlaV04wUWk1blpYUkRaVzUwWlhKWUtDa2dMU0J5WldOMFFTNW5aWFJEWlc1MFpYSllLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1pHbHpkR0Z1WTJWWklEMGdjbVZqZEVJdVoyVjBRMlZ1ZEdWeVdTZ3BJQzBnY21WamRFRXVaMlYwUTJWdWRHVnlXU2dwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnTHk4Z2RYTmxJR05zYVhCd2FXNW5JSEJ2YVc1MGMxeHVJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnU1VkbGIyMWxkSEo1TG1kbGRFbHVkR1Z5YzJWamRHbHZiaWh5WldOMFFTd2djbVZqZEVJc0lHTnNhWEJRYjJsdWRITXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ1pHbHpkR0Z1WTJWWUlEMGdZMnhwY0ZCdmFXNTBjMXN5WFNBdElHTnNhWEJRYjJsdWRITmJNRjA3WEc0Z0lDQWdJQ0FnSUNBZ1pHbHpkR0Z1WTJWWklEMGdZMnhwY0ZCdmFXNTBjMXN6WFNBdElHTnNhWEJRYjJsdWRITmJNVjA3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdUbThnY21Wd2RXeHphVzl1SUhKaGJtZGxMaUJHVWlCbmNtbGtJSFpoY21saGJuUWdjMmh2ZFd4a0lIUmhhMlVnWTJGeVpTQnZaaUIwYUdsekxseHVJQ0FnSUNBZ2FXWWdLRTFoZEdndVlXSnpLR1JwYzNSaGJtTmxXQ2tnUENCR1JFeGhlVzkxZEVOdmJuTjBZVzUwY3k1TlNVNWZVa1ZRVlV4VFNVOU9YMFJKVTFRcElIdGNiaUFnSUNBZ0lDQWdaR2x6ZEdGdVkyVllJRDBnU1UxaGRHZ3VjMmxuYmloa2FYTjBZVzVqWlZncElDb2dSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITXVUVWxPWDFKRlVGVk1VMGxQVGw5RVNWTlVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb1RXRjBhQzVoWW5Nb1pHbHpkR0Z1WTJWWktTQThJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpMazFKVGw5U1JWQlZURk5KVDA1ZlJFbFRWQ2tnZTF4dUlDQWdJQ0FnSUNCa2FYTjBZVzVqWlZrZ1BTQkpUV0YwYUM1emFXZHVLR1JwYzNSaGJtTmxXU2tnS2lCR1JFeGhlVzkxZEVOdmJuTjBZVzUwY3k1TlNVNWZVa1ZRVlV4VFNVOU9YMFJKVTFRN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHUnBjM1JoYm1ObFUzRjFZWEpsWkNBOUlHUnBjM1JoYm1ObFdDQXFJR1JwYzNSaGJtTmxXQ0FySUdScGMzUmhibU5sV1NBcUlHUnBjM1JoYm1ObFdUdGNiaUFnSUNBZ0lHUnBjM1JoYm1ObElEMGdUV0YwYUM1emNYSjBLR1JwYzNSaGJtTmxVM0YxWVhKbFpDazdYRzVjYmlBZ0lDQWdJSEpsY0hWc2MybHZia1p2Y21ObElEMGdkR2hwY3k1eVpYQjFiSE5wYjI1RGIyNXpkR0Z1ZENBcUlHNXZaR1ZCTG01dlQyWkRhR2xzWkhKbGJpQXFJRzV2WkdWQ0xtNXZUMlpEYUdsc1pISmxiaUF2SUdScGMzUmhibU5sVTNGMVlYSmxaRHRjYmx4dUlDQWdJQ0FnTHk4Z1VISnZhbVZqZENCbWIzSmpaU0J2Ym5SdklIZ2dZVzVrSUhrZ1lYaGxjMXh1SUNBZ0lDQWdjbVZ3ZFd4emFXOXVSbTl5WTJWWUlEMGdjbVZ3ZFd4emFXOXVSbTl5WTJVZ0tpQmthWE4wWVc1alpWZ2dMeUJrYVhOMFlXNWpaVHRjYmlBZ0lDQWdJSEpsY0hWc2MybHZia1p2Y21ObFdTQTlJSEpsY0hWc2MybHZia1p2Y21ObElDb2daR2x6ZEdGdVkyVlpJQzhnWkdsemRHRnVZMlU3WEc1Y2JpQWdJQ0FnSUM4dklFRndjR3g1SUdadmNtTmxjeUJ2YmlCMGFHVWdkSGR2SUc1dlpHVnpJQ0FnSUZ4dUlDQWdJQ0FnYm05a1pVRXVjbVZ3ZFd4emFXOXVSbTl5WTJWWUlDMDlJSEpsY0hWc2MybHZia1p2Y21ObFdEdGNiaUFnSUNBZ0lHNXZaR1ZCTG5KbGNIVnNjMmx2YmtadmNtTmxXU0F0UFNCeVpYQjFiSE5wYjI1R2IzSmpaVms3WEc0Z0lDQWdJQ0J1YjJSbFFpNXlaWEIxYkhOcGIyNUdiM0pqWlZnZ0t6MGdjbVZ3ZFd4emFXOXVSbTl5WTJWWU8xeHVJQ0FnSUNBZ2JtOWtaVUl1Y21Wd2RXeHphVzl1Um05eVkyVlpJQ3M5SUhKbGNIVnNjMmx2YmtadmNtTmxXVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNUdSRXhoZVc5MWRDNXdjbTkwYjNSNWNHVXVZMkZzWTBkeVlYWnBkR0YwYVc5dVlXeEdiM0pqWlNBOUlHWjFibU4wYVc5dUlDaHViMlJsS1NCN1hHNGdJSFpoY2lCdmQyNWxja2R5WVhCb08xeHVJQ0IyWVhJZ2IzZHVaWEpEWlc1MFpYSllPMXh1SUNCMllYSWdiM2R1WlhKRFpXNTBaWEpaTzF4dUlDQjJZWElnWkdsemRHRnVZMlZZTzF4dUlDQjJZWElnWkdsemRHRnVZMlZaTzF4dUlDQjJZWElnWVdKelJHbHpkR0Z1WTJWWU8xeHVJQ0IyWVhJZ1lXSnpSR2x6ZEdGdVkyVlpPMXh1SUNCMllYSWdaWE4wYVcxaGRHVmtVMmw2WlR0Y2JpQWdiM2R1WlhKSGNtRndhQ0E5SUc1dlpHVXVaMlYwVDNkdVpYSW9LVHRjYmx4dUlDQnZkMjVsY2tObGJuUmxjbGdnUFNBb2IzZHVaWEpIY21Gd2FDNW5aWFJTYVdkb2RDZ3BJQ3NnYjNkdVpYSkhjbUZ3YUM1blpYUk1aV1owS0NrcElDOGdNanRjYmlBZ2IzZHVaWEpEWlc1MFpYSlpJRDBnS0c5M2JtVnlSM0poY0dndVoyVjBWRzl3S0NrZ0t5QnZkMjVsY2tkeVlYQm9MbWRsZEVKdmRIUnZiU2dwS1NBdklESTdYRzRnSUdScGMzUmhibU5sV0NBOUlHNXZaR1V1WjJWMFEyVnVkR1Z5V0NncElDMGdiM2R1WlhKRFpXNTBaWEpZTzF4dUlDQmthWE4wWVc1alpWa2dQU0J1YjJSbExtZGxkRU5sYm5SbGNsa29LU0F0SUc5M2JtVnlRMlZ1ZEdWeVdUdGNiaUFnWVdKelJHbHpkR0Z1WTJWWUlEMGdUV0YwYUM1aFluTW9aR2x6ZEdGdVkyVllLU0FySUc1dlpHVXVaMlYwVjJsa2RHZ29LU0F2SURJN1hHNGdJR0ZpYzBScGMzUmhibU5sV1NBOUlFMWhkR2d1WVdKektHUnBjM1JoYm1ObFdTa2dLeUJ1YjJSbExtZGxkRWhsYVdkb2RDZ3BJQzhnTWp0Y2JseHVJQ0JwWmlBb2JtOWtaUzVuWlhSUGQyNWxjaWdwSUQwOUlIUm9hWE11WjNKaGNHaE5ZVzVoWjJWeUxtZGxkRkp2YjNRb0tTa2dMeThnYVc0Z2RHaGxJSEp2YjNRZ1ozSmhjR2hjYmlBZ0lDQjdYRzRnSUNBZ0lDQmxjM1JwYldGMFpXUlRhWHBsSUQwZ2IzZHVaWEpIY21Gd2FDNW5aWFJGYzNScGJXRjBaV1JUYVhwbEtDa2dLaUIwYUdsekxtZHlZWFpwZEhsU1lXNW5aVVpoWTNSdmNqdGNibHh1SUNBZ0lDQWdhV1lnS0dGaWMwUnBjM1JoYm1ObFdDQStJR1Z6ZEdsdFlYUmxaRk5wZW1VZ2ZId2dZV0p6UkdsemRHRnVZMlZaSUQ0Z1pYTjBhVzFoZEdWa1UybDZaU2tnZTF4dUlDQWdJQ0FnSUNCdWIyUmxMbWR5WVhacGRHRjBhVzl1Um05eVkyVllJRDBnTFhSb2FYTXVaM0poZG1sMGVVTnZibk4wWVc1MElDb2daR2x6ZEdGdVkyVllPMXh1SUNBZ0lDQWdJQ0J1YjJSbExtZHlZWFpwZEdGMGFXOXVSbTl5WTJWWklEMGdMWFJvYVhNdVozSmhkbWwwZVVOdmJuTjBZVzUwSUNvZ1pHbHpkR0Z1WTJWWk8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0F2THlCcGJuTnBaR1VnWVNCamIyMXdiM1Z1WkZ4dUlDQWdJSHRjYmlBZ0lDQWdJR1Z6ZEdsdFlYUmxaRk5wZW1VZ1BTQnZkMjVsY2tkeVlYQm9MbWRsZEVWemRHbHRZWFJsWkZOcGVtVW9LU0FxSUhSb2FYTXVZMjl0Y0c5MWJtUkhjbUYyYVhSNVVtRnVaMlZHWVdOMGIzSTdYRzVjYmlBZ0lDQWdJR2xtSUNoaFluTkVhWE4wWVc1alpWZ2dQaUJsYzNScGJXRjBaV1JUYVhwbElIeDhJR0ZpYzBScGMzUmhibU5sV1NBK0lHVnpkR2x0WVhSbFpGTnBlbVVwSUh0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzVuY21GMmFYUmhkR2x2YmtadmNtTmxXQ0E5SUMxMGFHbHpMbWR5WVhacGRIbERiMjV6ZEdGdWRDQXFJR1JwYzNSaGJtTmxXQ0FxSUhSb2FYTXVZMjl0Y0c5MWJtUkhjbUYyYVhSNVEyOXVjM1JoYm5RN1hHNGdJQ0FnSUNBZ0lHNXZaR1V1WjNKaGRtbDBZWFJwYjI1R2IzSmpaVmtnUFNBdGRHaHBjeTVuY21GMmFYUjVRMjl1YzNSaGJuUWdLaUJrYVhOMFlXNWpaVmtnS2lCMGFHbHpMbU52YlhCdmRXNWtSM0poZG1sMGVVTnZibk4wWVc1ME8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMDdYRzVjYmtaRVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1cGMwTnZiblpsY21kbFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUdOdmJuWmxjbWRsWkR0Y2JpQWdkbUZ5SUc5elkybHNZWFJwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVJQ0JwWmlBb2RHaHBjeTUwYjNSaGJFbDBaWEpoZEdsdmJuTWdQaUIwYUdsekxtMWhlRWwwWlhKaGRHbHZibk1nTHlBektTQjdYRzRnSUNBZ2IzTmphV3hoZEdsdVp5QTlJRTFoZEdndVlXSnpLSFJvYVhNdWRHOTBZV3hFYVhOd2JHRmpaVzFsYm5RZ0xTQjBhR2x6TG05c1pGUnZkR0ZzUkdsemNHeGhZMlZ0Wlc1MEtTQThJREk3WEc0Z0lIMWNibHh1SUNCamIyNTJaWEpuWldRZ1BTQjBhR2x6TG5SdmRHRnNSR2x6Y0d4aFkyVnRaVzUwSUR3Z2RHaHBjeTUwYjNSaGJFUnBjM0JzWVdObGJXVnVkRlJvY21WemFHOXNaRHRjYmx4dUlDQjBhR2x6TG05c1pGUnZkR0ZzUkdsemNHeGhZMlZ0Wlc1MElEMGdkR2hwY3k1MGIzUmhiRVJwYzNCc1lXTmxiV1Z1ZER0Y2JseHVJQ0J5WlhSMWNtNGdZMjl1ZG1WeVoyVmtJSHg4SUc5elkybHNZWFJwYm1jN1hHNTlPMXh1WEc1R1JFeGhlVzkxZEM1d2NtOTBiM1I1Y0dVdVlXNXBiV0YwWlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2FXWWdLSFJvYVhNdVlXNXBiV0YwYVc5dVJIVnlhVzVuVEdGNWIzVjBJQ1ltSUNGMGFHbHpMbWx6VTNWaVRHRjViM1YwS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11Ym05MFFXNXBiV0YwWldSSmRHVnlZWFJwYjI1eklEMDlJSFJvYVhNdVlXNXBiV0YwYVc5dVVHVnlhVzlrS1NCN1hHNGdJQ0FnSUNCMGFHbHpMblZ3WkdGMFpTZ3BPMXh1SUNBZ0lDQWdkR2hwY3k1dWIzUkJibWx0WVhSbFpFbDBaWEpoZEdsdmJuTWdQU0F3TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG01dmRFRnVhVzFoZEdWa1NYUmxjbUYwYVc5dWN5c3JPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNibHh1THk5VWFHbHpJRzFsZEdodlpDQmpZV3hqZFd4aGRHVnpJSFJvWlNCdWRXMWlaWElnYjJZZ1kyaHBiR1J5Wlc0Z0tIZGxhV2RvZENrZ1ptOXlJR0ZzYkNCdWIyUmxjMXh1UmtSTVlYbHZkWFF1Y0hKdmRHOTBlWEJsTG1OaGJHTk9iMDltUTJocGJHUnlaVzVHYjNKQmJHeE9iMlJsY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2RtRnlJRzV2WkdVN1hHNGdJSFpoY2lCaGJHeE9iMlJsY3lBOUlIUm9hWE11WjNKaGNHaE5ZVzVoWjJWeUxtZGxkRUZzYkU1dlpHVnpLQ2s3WEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JoYkd4T2IyUmxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUc1dlpHVWdQU0JoYkd4T2IyUmxjMXRwWFR0Y2JpQWdJQ0J1YjJSbExtNXZUMlpEYUdsc1pISmxiaUE5SUc1dlpHVXVaMlYwVG05UFprTm9hV3hrY21WdUtDazdYRzRnSUgxY2JuMDdYRzVjYmk4dklDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0dkx5QlRaV04wYVc5dU9pQkdVaTFIY21sa0lGWmhjbWxoYm5RZ1VtVndkV3h6YVc5dUlFWnZjbU5sSUVOaGJHTjFiR0YwYVc5dVhHNHZMeUF0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVYRzVHUkV4aGVXOTFkQzV3Y205MGIzUjVjR1V1WTJGc1kwZHlhV1FnUFNCbWRXNWpkR2x2YmlBb1ozSmhjR2dwSUh0Y2JseHVJQ0IyWVhJZ2MybDZaVmdnUFNBd08xeHVJQ0IyWVhJZ2MybDZaVmtnUFNBd08xeHVYRzRnSUhOcGVtVllJRDBnY0dGeWMyVkpiblFvVFdGMGFDNWpaV2xzS0NobmNtRndhQzVuWlhSU2FXZG9kQ2dwSUMwZ1ozSmhjR2d1WjJWMFRHVm1kQ2dwS1NBdklIUm9hWE11Y21Wd2RXeHphVzl1VW1GdVoyVXBLVHRjYmlBZ2MybDZaVmtnUFNCd1lYSnpaVWx1ZENoTllYUm9MbU5sYVd3b0tHZHlZWEJvTG1kbGRFSnZkSFJ2YlNncElDMGdaM0poY0dndVoyVjBWRzl3S0NrcElDOGdkR2hwY3k1eVpYQjFiSE5wYjI1U1lXNW5aU2twTzF4dVhHNGdJSFpoY2lCbmNtbGtJRDBnYm1WM0lFRnljbUY1S0hOcGVtVllLVHRjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE5wZW1WWU95QnBLeXNwSUh0Y2JpQWdJQ0JuY21sa1cybGRJRDBnYm1WM0lFRnljbUY1S0hOcGVtVlpLVHRjYmlBZ2ZWeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MybDZaVmc3SUdrckt5a2dlMXh1SUNBZ0lHWnZjaUFvZG1GeUlHb2dQU0F3T3lCcUlEd2djMmw2WlZrN0lHb3JLeWtnZTF4dUlDQWdJQ0FnWjNKcFpGdHBYVnRxWFNBOUlHNWxkeUJCY25KaGVTZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQm5jbWxrTzF4dWZUdGNibHh1UmtSTVlYbHZkWFF1Y0hKdmRHOTBlWEJsTG1Ga1pFNXZaR1ZVYjBkeWFXUWdQU0JtZFc1amRHbHZiaUFvZGl3Z2JHVm1kQ3dnZEc5d0tTQjdYRzVjYmlBZ2RtRnlJSE4wWVhKMFdDQTlJREE3WEc0Z0lIWmhjaUJtYVc1cGMyaFlJRDBnTUR0Y2JpQWdkbUZ5SUhOMFlYSjBXU0E5SURBN1hHNGdJSFpoY2lCbWFXNXBjMmhaSUQwZ01EdGNibHh1SUNCemRHRnlkRmdnUFNCd1lYSnpaVWx1ZENoTllYUm9MbVpzYjI5eUtDaDJMbWRsZEZKbFkzUW9LUzU0SUMwZ2JHVm1kQ2tnTHlCMGFHbHpMbkpsY0hWc2MybHZibEpoYm1kbEtTazdYRzRnSUdacGJtbHphRmdnUFNCd1lYSnpaVWx1ZENoTllYUm9MbVpzYjI5eUtDaDJMbWRsZEZKbFkzUW9LUzUzYVdSMGFDQXJJSFl1WjJWMFVtVmpkQ2dwTG5nZ0xTQnNaV1owS1NBdklIUm9hWE11Y21Wd2RXeHphVzl1VW1GdVoyVXBLVHRjYmlBZ2MzUmhjblJaSUQwZ2NHRnljMlZKYm5Rb1RXRjBhQzVtYkc5dmNpZ29kaTVuWlhSU1pXTjBLQ2t1ZVNBdElIUnZjQ2tnTHlCMGFHbHpMbkpsY0hWc2MybHZibEpoYm1kbEtTazdYRzRnSUdacGJtbHphRmtnUFNCd1lYSnpaVWx1ZENoTllYUm9MbVpzYjI5eUtDaDJMbWRsZEZKbFkzUW9LUzVvWldsbmFIUWdLeUIyTG1kbGRGSmxZM1FvS1M1NUlDMGdkRzl3S1NBdklIUm9hWE11Y21Wd2RXeHphVzl1VW1GdVoyVXBLVHRjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnYzNSaGNuUllPeUJwSUR3OUlHWnBibWx6YUZnN0lHa3JLeWtnZTF4dUlDQWdJR1p2Y2lBb2RtRnlJR29nUFNCemRHRnlkRms3SUdvZ1BEMGdabWx1YVhOb1dUc2dhaXNyS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWR5YVdSYmFWMWJhbDB1Y0hWemFDaDJLVHRjYmlBZ0lDQWdJSFl1YzJWMFIzSnBaRU52YjNKa2FXNWhkR1Z6S0hOMFlYSjBXQ3dnWm1sdWFYTm9XQ3dnYzNSaGNuUlpMQ0JtYVc1cGMyaFpLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzVjYmtaRVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1MWNHUmhkR1ZIY21sa0lEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQjJZWElnYVR0Y2JpQWdkbUZ5SUc1dlpHVkJPMXh1SUNCMllYSWdiRTV2WkdWeklEMGdkR2hwY3k1blpYUkJiR3hPYjJSbGN5Z3BPMXh1WEc0Z0lIUm9hWE11WjNKcFpDQTlJSFJvYVhNdVkyRnNZMGR5YVdRb2RHaHBjeTVuY21Gd2FFMWhibUZuWlhJdVoyVjBVbTl2ZENncEtUdGNibHh1SUNBdkx5QndkWFFnWVd4c0lHNXZaR1Z6SUhSdklIQnliM0JsY2lCbmNtbGtJR05sYkd4elhHNGdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnNUbTlrWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQnViMlJsUVNBOUlHeE9iMlJsYzF0cFhUdGNiaUFnSUNCMGFHbHpMbUZrWkU1dlpHVlViMGR5YVdRb2JtOWtaVUVzSUhSb2FYTXVaM0poY0doTllXNWhaMlZ5TG1kbGRGSnZiM1FvS1M1blpYUk1aV1owS0Nrc0lIUm9hWE11WjNKaGNHaE5ZVzVoWjJWeUxtZGxkRkp2YjNRb0tTNW5aWFJVYjNBb0tTazdYRzRnSUgxY2JuMDdYRzVjYmtaRVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1allXeGpkV3hoZEdWU1pYQjFiSE5wYjI1R2IzSmpaVTltUVU1dlpHVWdQU0JtZFc1amRHbHZiaUFvYm05a1pVRXNJSEJ5YjJObGMzTmxaRTV2WkdWVFpYUXNJR2R5YVdSVmNHUmhkR1ZCYkd4dmQyVmtMQ0JtYjNKalpWUnZUbTlrWlZOMWNuSnZkVzVrYVc1blZYQmtZWFJsS1NCN1hHNWNiaUFnYVdZZ0tIUm9hWE11ZEc5MFlXeEpkR1Z5WVhScGIyNXpJQ1VnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UjFKSlJGOURRVXhEVlV4QlZFbFBUbDlEU0VWRFMxOVFSVkpKVDBRZ1BUMGdNU0FtSmlCbmNtbGtWWEJrWVhSbFFXeHNiM2RsWkNCOGZDQm1iM0pqWlZSdlRtOWtaVk4xY25KdmRXNWthVzVuVlhCa1lYUmxLU0I3WEc0Z0lDQWdkbUZ5SUhOMWNuSnZkVzVrYVc1bklEMGdibVYzSUZObGRDZ3BPMXh1SUNBZ0lHNXZaR1ZCTG5OMWNuSnZkVzVrYVc1bklEMGdibVYzSUVGeWNtRjVLQ2s3WEc0Z0lDQWdkbUZ5SUc1dlpHVkNPMXh1SUNBZ0lIWmhjaUJuY21sa0lEMGdkR2hwY3k1bmNtbGtPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SUc1dlpHVkJMbk4wWVhKMFdDQXRJREU3SUdrZ1BDQnViMlJsUVM1bWFXNXBjMmhZSUNzZ01qc2dhU3NyS1NCN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcUlEMGdibTlrWlVFdWMzUmhjblJaSUMwZ01Uc2dhaUE4SUc1dlpHVkJMbVpwYm1semFGa2dLeUF5T3lCcUt5c3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRW9hU0E4SURBZ2ZId2dhaUE4SURBZ2ZId2dhU0ErUFNCbmNtbGtMbXhsYm1kMGFDQjhmQ0JxSUQ0OUlHZHlhV1JiTUYwdWJHVnVaM1JvS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR3NnUFNBd095QnJJRHdnWjNKcFpGdHBYVnRxWFM1c1pXNW5kR2c3SUdzckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtOWtaVUlnUFNCbmNtbGtXMmxkVzJwZFcydGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCaWIzUm9JRzV2WkdWeklHRnlaU0J1YjNRZ2JXVnRZbVZ5Y3lCdlppQjBhR1VnYzJGdFpTQm5jbUZ3YUN3Z1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCdmNpQmliM1JvSUc1dlpHVnpJR0Z5WlNCMGFHVWdjMkZ0WlN3Z2MydHBjQzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1YjJSbFFTNW5aWFJQZDI1bGNpZ3BJQ0U5SUc1dlpHVkNMbWRsZEU5M2JtVnlLQ2tnZkh3Z2JtOWtaVUVnUFQwZ2JtOWtaVUlwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJR05vWldOcklHbG1JSFJvWlNCeVpYQjFiSE5wYjI0Z1ptOXlZMlVnWW1WMGQyVmxibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdibTlrWlVFZ1lXNWtJRzV2WkdWQ0lHaGhjeUJoYkhKbFlXUjVJR0psWlc0Z1kyRnNZM1ZzWVhSbFpGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRndjbTlqWlhOelpXUk9iMlJsVTJWMExtaGhjeWh1YjJSbFFpa2dKaVlnSVhOMWNuSnZkVzVrYVc1bkxtaGhjeWh1YjJSbFFpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUdScGMzUmhibU5sV0NBOUlFMWhkR2d1WVdKektHNXZaR1ZCTG1kbGRFTmxiblJsY2xnb0tTQXRJRzV2WkdWQ0xtZGxkRU5sYm5SbGNsZ29LU2tnTFNBb2JtOWtaVUV1WjJWMFYybGtkR2dvS1NBdklESWdLeUJ1YjJSbFFpNW5aWFJYYVdSMGFDZ3BJQzhnTWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQmthWE4wWVc1alpWa2dQU0JOWVhSb0xtRmljeWh1YjJSbFFTNW5aWFJEWlc1MFpYSlpLQ2tnTFNCdWIyUmxRaTVuWlhSRFpXNTBaWEpaS0NrcElDMGdLRzV2WkdWQkxtZGxkRWhsYVdkb2RDZ3BJQzhnTWlBcklHNXZaR1ZDTG1kbGRFaGxhV2RvZENncElDOGdNaWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2FXWWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnYm05a1pVRWdZVzVrSUc1dlpHVkNJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJwY3lCc1pYTnpJSFJvWlc0Z1kyRnNZM1ZzWVhScGIyNGdjbUZ1WjJWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUnBjM1JoYm1ObFdDQThQU0IwYUdsekxuSmxjSFZzYzJsdmJsSmhibWRsSUNZbUlHUnBjM1JoYm1ObFdTQThQU0IwYUdsekxuSmxjSFZzYzJsdmJsSmhibWRsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OTBhR1Z1SUdGa1pDQnViMlJsUWlCMGJ5QnpkWEp5YjNWdVpHbHVaeUJ2WmlCdWIyUmxRVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4xY25KdmRXNWthVzVuTG1Ga1pDaHViMlJsUWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdWIyUmxRUzV6ZFhKeWIzVnVaR2x1WnlBOUlGc3VMaTV6ZFhKeWIzVnVaR2x1WjEwN1hHNGdJSDFjYmlBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc1dlpHVkJMbk4xY25KdmRXNWthVzVuTG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2RHaHBjeTVqWVd4alVtVndkV3h6YVc5dVJtOXlZMlVvYm05a1pVRXNJRzV2WkdWQkxuTjFjbkp2ZFc1a2FXNW5XMmxkS1R0Y2JpQWdmVnh1ZlR0Y2JseHVSa1JNWVhsdmRYUXVjSEp2ZEc5MGVYQmxMbU5oYkdOU1pYQjFiSE5wYjI1U1lXNW5aU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJREF1TUR0Y2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUmtSTVlYbHZkWFE3WEc1Y2JpOHFLaW92SUgwcExGeHVMeW9nTWlBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5a2dlMXh1WEc1MllYSWdUR0Y1YjNWMFEyOXVjM1JoYm5SeklEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd6S1R0Y2JuWmhjaUJJWVhOb1RXRndJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnMEtUdGNiblpoY2lCTVIzSmhjR2hOWVc1aFoyVnlJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnMktUdGNiblpoY2lCTVRtOWtaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01UTXBPMXh1ZG1GeUlFeEZaR2RsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5ZzNLVHRjYm5aaGNpQk1SM0poY0dnZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREV4S1R0Y2JuWmhjaUJRYjJsdWRFUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RFMktUdGNiblpoY2lCVWNtRnVjMlp2Y20wZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREl3S1R0Y2JuWmhjaUJGYldsMGRHVnlJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlneU1TazdYRzUyWVhJZ1NHRnphRk5sZENBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9NVGNwTzF4dVhHNW1kVzVqZEdsdmJpQk1ZWGx2ZFhRb2FYTlNaVzF2ZEdWVmMyVXBJSHRjYmlBZ1JXMXBkSFJsY2k1allXeHNLSFJvYVhNcE8xeHVYRzRnSUM4dlRHRjViM1YwSUZGMVlXeHBkSGs2SURBNmNISnZiMllzSURFNlpHVm1ZWFZzZEN3Z01qcGtjbUZtZEZ4dUlDQjBhR2x6TG14aGVXOTFkRkYxWVd4cGRIa2dQU0JNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOVJWVUZNU1ZSWk8xeHVJQ0F2TDFkb1pYUm9aWElnYkdGNWIzVjBJSE5vYjNWc1pDQmpjbVZoZEdVZ1ltVnVaSEJ2YVc1MGN5QmhjeUJ1WldWa1pXUWdiM0lnYm05MFhHNGdJSFJvYVhNdVkzSmxZWFJsUW1WdVpITkJjMDVsWldSbFpDQTlJRXhoZVc5MWRFTnZibk4wWVc1MGN5NUVSVVpCVlV4VVgwTlNSVUZVUlY5Q1JVNUVVMTlCVTE5T1JVVkVSVVE3WEc0Z0lDOHZWMmhsZEdobGNpQnNZWGx2ZFhRZ2MyaHZkV3hrSUdKbElHbHVZM0psYldWdWRHRnNJRzl5SUc1dmRGeHVJQ0IwYUdsekxtbHVZM0psYldWdWRHRnNJRDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZTVTVEVWtWTlJVNVVRVXc3WEc0Z0lDOHZWMmhsZEdobGNpQjNaU0JoYm1sdFlYUmxJR1p5YjIwZ1ltVm1iM0psSUhSdklHRm1kR1Z5SUd4aGVXOTFkQ0J1YjJSbElIQnZjMmwwYVc5dWMxeHVJQ0IwYUdsekxtRnVhVzFoZEdsdmJrOXVUR0Y1YjNWMElEMGdUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlFVNUpUVUZVU1U5T1gwOU9YMHhCV1U5VlZEdGNiaUFnTHk5WGFHVjBhR1Z5SUhkbElHRnVhVzFoZEdVZ2RHaGxJR3hoZVc5MWRDQndjbTlqWlhOeklHOXlJRzV2ZEZ4dUlDQjBhR2x6TG1GdWFXMWhkR2x2YmtSMWNtbHVaMHhoZVc5MWRDQTlJRXhoZVc5MWRFTnZibk4wWVc1MGN5NUVSVVpCVlV4VVgwRk9TVTFCVkVsUFRsOUVWVkpKVGtkZlRFRlpUMVZVTzF4dUlDQXZMMDUxYldKbGNpQnBkR1Z5WVhScGIyNXpJSFJvWVhRZ2MyaHZkV3hrSUdKbElHUnZibVVnWW1WMGQyVmxiaUIwZDI4Z2MzVmpZMlZ6YzJsMlpTQmhibWx0WVhScGIyNXpYRzRnSUhSb2FYTXVZVzVwYldGMGFXOXVVR1Z5YVc5a0lEMGdUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlFVNUpUVUZVU1U5T1gxQkZVa2xQUkR0Y2JpQWdMeW9xWEhKY2JpQWdJQ29nVjJobGRHaGxjaUJ2Y2lCdWIzUWdiR1ZoWmlCdWIyUmxjeUFvYm05dUxXTnZiWEJ2ZFc1a0lHNXZaR1Z6S1NCaGNtVWdiMllnZFc1cFptOXliU0J6YVhwbGN5NGdWMmhsYmx4eVhHNGdJQ0FxSUhSb1pYa2dZWEpsTENCaWIzUm9JSE53Y21sdVp5QmhibVFnY21Wd2RXeHphVzl1SUdadmNtTmxjeUJpWlhSM1pXVnVJSFIzYnlCc1pXRm1JRzV2WkdWeklHTmhiaUJpWlZ4eVhHNGdJQ0FxSUdOaGJHTjFiR0YwWldRZ2QybDBhRzkxZENCMGFHVWdaWGh3Wlc1emFYWmxJR05zYVhCd2FXNW5JSEJ2YVc1MElHTmhiR04xYkdGMGFXOXVjeXdnY21WemRXeDBhVzVuWEhKY2JpQWdJQ29nYVc0Z2JXRnFiM0lnYzNCbFpXUXRkWEF1WEhKY2JpQWdJQ292WEc0Z0lIUm9hWE11ZFc1cFptOXliVXhsWVdaT2IyUmxVMmw2WlhNZ1BTQk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVJFVkdRVlZNVkY5VlRrbEdUMUpOWDB4RlFVWmZUazlFUlY5VFNWcEZVenRjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dWR2hwY3lCcGN5QjFjMlZrSUdadmNpQmpjbVZoZEdsdmJpQnZaaUJpWlc1a2NHOXBiblJ6SUdKNUlIVnphVzVuSUdSMWJXMTVJRzV2WkdWeklHRnVaQ0JsWkdkbGN5NWNjbHh1SUNBZ0tpQk5ZWEJ6SUdGdUlFeEZaR2RsSUhSdklHbDBjeUJrZFcxdGVTQmlaVzVrY0c5cGJuUWdjR0YwYUM1Y2NseHVJQ0FnS2k5Y2JpQWdkR2hwY3k1bFpHZGxWRzlFZFcxdGVVNXZaR1Z6SUQwZ2JtVjNJRWhoYzJoTllYQW9LVHRjYmlBZ2RHaHBjeTVuY21Gd2FFMWhibUZuWlhJZ1BTQnVaWGNnVEVkeVlYQm9UV0Z1WVdkbGNpaDBhR2x6S1R0Y2JpQWdkR2hwY3k1cGMweGhlVzkxZEVacGJtbHphR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lIUm9hWE11YVhOVGRXSk1ZWGx2ZFhRZ1BTQm1ZV3h6WlR0Y2JpQWdkR2hwY3k1cGMxSmxiVzkwWlZWelpTQTlJR1poYkhObE8xeHVYRzRnSUdsbUlDaHBjMUpsYlc5MFpWVnpaU0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdkR2hwY3k1cGMxSmxiVzkwWlZWelpTQTlJR2x6VW1WdGIzUmxWWE5sTzF4dUlDQjlYRzU5WEc1Y2JreGhlVzkxZEM1U1FVNUVUMDFmVTBWRlJDQTlJREU3WEc1Y2JreGhlVzkxZEM1d2NtOTBiM1I1Y0dVZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0VWdGFYUjBaWEl1Y0hKdmRHOTBlWEJsS1R0Y2JseHVUR0Y1YjNWMExuQnliM1J2ZEhsd1pTNW5aWFJIY21Gd2FFMWhibUZuWlhJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2p0Y2JuMDdYRzVjYmt4aGVXOTFkQzV3Y205MGIzUjVjR1V1WjJWMFFXeHNUbTlrWlhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2k1blpYUkJiR3hPYjJSbGN5Z3BPMXh1ZlR0Y2JseHVUR0Y1YjNWMExuQnliM1J2ZEhsd1pTNW5aWFJCYkd4RlpHZGxjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdVozSmhjR2hOWVc1aFoyVnlMbWRsZEVGc2JFVmtaMlZ6S0NrN1hHNTlPMXh1WEc1TVlYbHZkWFF1Y0hKdmRHOTBlWEJsTG1kbGRFRnNiRTV2WkdWelZHOUJjSEJzZVVkeVlYWnBkR0YwYVc5dUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTVuY21Gd2FFMWhibUZuWlhJdVoyVjBRV3hzVG05a1pYTlViMEZ3Y0d4NVIzSmhkbWwwWVhScGIyNG9LVHRjYm4wN1hHNWNia3hoZVc5MWRDNXdjbTkwYjNSNWNHVXVibVYzUjNKaGNHaE5ZVzVoWjJWeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQjJZWElnWjIwZ1BTQnVaWGNnVEVkeVlYQm9UV0Z1WVdkbGNpaDBhR2x6S1R0Y2JpQWdkR2hwY3k1bmNtRndhRTFoYm1GblpYSWdQU0JuYlR0Y2JpQWdjbVYwZFhKdUlHZHRPMXh1ZlR0Y2JseHVUR0Y1YjNWMExuQnliM1J2ZEhsd1pTNXVaWGRIY21Gd2FDQTlJR1oxYm1OMGFXOXVJQ2gyUjNKaGNHZ3BJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5Qk1SM0poY0dnb2JuVnNiQ3dnZEdocGN5NW5jbUZ3YUUxaGJtRm5aWElzSUhaSGNtRndhQ2s3WEc1OU8xeHVYRzVNWVhsdmRYUXVjSEp2ZEc5MGVYQmxMbTVsZDA1dlpHVWdQU0JtZFc1amRHbHZiaUFvZGs1dlpHVXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5Qk1UbTlrWlNoMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2l3Z2RrNXZaR1VwTzF4dWZUdGNibHh1VEdGNWIzVjBMbkJ5YjNSdmRIbHdaUzV1WlhkRlpHZGxJRDBnWm5WdVkzUnBiMjRnS0haRlpHZGxLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dURVZrWjJVb2JuVnNiQ3dnYm5Wc2JDd2dka1ZrWjJVcE8xeHVmVHRjYmx4dVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1amFHVmphMHhoZVc5MWRGTjFZMk5sYzNNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2k1blpYUlNiMjkwS0NrZ1BUMGdiblZzYkNCOGZDQjBhR2x6TG1keVlYQm9UV0Z1WVdkbGNpNW5aWFJTYjI5MEtDa3VaMlYwVG05a1pYTW9LUzVzWlc1bmRHZ2dQVDBnTUNCOGZDQjBhR2x6TG1keVlYQm9UV0Z1WVdkbGNpNXBibU5zZFdSbGMwbHVkbUZzYVdSRlpHZGxLQ2s3WEc1OU8xeHVYRzVNWVhsdmRYUXVjSEp2ZEc5MGVYQmxMbkoxYmt4aGVXOTFkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZEdocGN5NXBjMHhoZVc5MWRFWnBibWx6YUdWa0lEMGdabUZzYzJVN1hHNWNiaUFnYVdZZ0tIUm9hWE11ZEdsc2FXNW5VSEpsVEdGNWIzVjBLU0I3WEc0Z0lDQWdkR2hwY3k1MGFXeHBibWRRY21WTVlYbHZkWFFvS1R0Y2JpQWdmVnh1WEc0Z0lIUm9hWE11YVc1cGRGQmhjbUZ0WlhSbGNuTW9LVHRjYmlBZ2RtRnlJR2x6VEdGNWIzVjBVM1ZqWTJWemMyWjFiR3c3WEc1Y2JpQWdhV1lnS0hSb2FYTXVZMmhsWTJ0TVlYbHZkWFJUZFdOalpYTnpLQ2twSUh0Y2JpQWdJQ0JwYzB4aGVXOTFkRk4xWTJObGMzTm1kV3hzSUQwZ1ptRnNjMlU3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYVhOTVlYbHZkWFJUZFdOalpYTnpablZzYkNBOUlIUm9hWE11YkdGNWIzVjBLQ2s3WEc0Z0lIMWNibHh1SUNCcFppQW9UR0Y1YjNWMFEyOXVjM1JoYm5SekxrRk9TVTFCVkVVZ1BUMDlJQ2RrZFhKcGJtY25LU0I3WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElDZGtkWEpwYm1jbklHeGhlVzkxZENCaGJtbHRZWFJwYjI0dUlFeGhlVzkxZENCcGN5QnViM1FnWm1sdWFYTm9aV1FnZVdWMExpQmNiaUFnSUNBdkx5QlhaU0J1WldWa0lIUnZJSEJsY21admNtMGdkR2hsYzJVZ2FXNGdhVzVrWlhndWFuTWdkMmhsYmlCc1lYbHZkWFFnYVhNZ2NtVmhiR3g1SUdacGJtbHphR1ZrTGx4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hwYzB4aGVXOTFkRk4xWTJObGMzTm1kV3hzS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG1selUzVmlUR0Y1YjNWMEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1SdlVHOXpkRXhoZVc5MWRDZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNoMGFHbHpMblJwYkdsdVoxQnZjM1JNWVhsdmRYUXBJSHRjYmlBZ0lDQjBhR2x6TG5ScGJHbHVaMUJ2YzNSTVlYbHZkWFFvS1R0Y2JpQWdmVnh1WEc0Z0lIUm9hWE11YVhOTVlYbHZkWFJHYVc1cGMyaGxaQ0E5SUhSeWRXVTdYRzVjYmlBZ2NtVjBkWEp1SUdselRHRjViM1YwVTNWalkyVnpjMloxYkd3N1hHNTlPMXh1WEc0dktpcGNjbHh1SUNvZ1ZHaHBjeUJ0WlhSb2IyUWdjR1Z5Wm05eWJYTWdkR2hsSUc5d1pYSmhkR2x2Ym5NZ2NtVnhkV2x5WldRZ1lXWjBaWElnYkdGNWIzVjBMbHh5WEc0Z0tpOWNia3hoZVc5MWRDNXdjbTkwYjNSNWNHVXVaRzlRYjNOMFRHRjViM1YwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBdkwyRnpjMlZ5ZENBaGFYTlRkV0pNWVhsdmRYUWdPaUJjSWxOb2IzVnNaQ0J1YjNRZ1ltVWdZMkZzYkdWa0lHOXVJSE4xWWkxc1lYbHZkWFFoWENJN1hHNGdJQzh2SUZCeWIzQmhaMkYwWlNCblpXOXRaWFJ5YVdNZ1kyaGhibWRsY3lCMGJ5QjJMV3hsZG1Wc0lHOWlhbVZqZEhOY2JpQWdhV1lnS0NGMGFHbHpMbWx1WTNKbGJXVnVkR0ZzS1NCN1hHNGdJQ0FnZEdocGN5NTBjbUZ1YzJadmNtMG9LVHRjYmlBZ2ZWeHVJQ0IwYUdsekxuVndaR0YwWlNncE8xeHVmVHRjYmx4dUx5b3FYSEpjYmlBcUlGUm9hWE1nYldWMGFHOWtJSFZ3WkdGMFpYTWdkR2hsSUdkbGIyMWxkSEo1SUc5bUlIUm9aU0IwWVhKblpYUWdaM0poY0dnZ1lXTmpiM0prYVc1bklIUnZYSEpjYmlBcUlHTmhiR04xYkdGMFpXUWdiR0Y1YjNWMExseHlYRzRnS2k5Y2JreGhlVzkxZEM1d2NtOTBiM1I1Y0dVdWRYQmtZWFJsTWlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0x5OGdkWEJrWVhSbElHSmxibVFnY0c5cGJuUnpYRzRnSUdsbUlDaDBhR2x6TG1OeVpXRjBaVUpsYm1SelFYTk9aV1ZrWldRcElIdGNiaUFnSUNCMGFHbHpMbU55WldGMFpVSmxibVJ3YjJsdWRITkdjbTl0UkhWdGJYbE9iMlJsY3lncE8xeHVYRzRnSUNBZ0x5OGdjbVZ6WlhRZ1lXeHNJR1ZrWjJWekxDQnphVzVqWlNCMGFHVWdkRzl3YjJ4dloza2dhR0Z6SUdOb1lXNW5aV1JjYmlBZ0lDQjBhR2x6TG1keVlYQm9UV0Z1WVdkbGNpNXlaWE5sZEVGc2JFVmtaMlZ6S0NrN1hHNGdJSDFjYmx4dUlDQXZMeUJ3WlhKbWIzSnRJR1ZrWjJVc0lHNXZaR1VnWVc1a0lISnZiM1FnZFhCa1lYUmxjeUJwWmlCc1lYbHZkWFFnYVhNZ2JtOTBJR05oYkd4bFpGeHVJQ0F2THlCeVpXMXZkR1ZzZVZ4dUlDQnBaaUFvSVhSb2FYTXVhWE5TWlcxdmRHVlZjMlVwSUh0Y2JpQWdJQ0F2THlCMWNHUmhkR1VnWVd4c0lHVmtaMlZ6WEc0Z0lDQWdkbUZ5SUdWa1oyVTdYRzRnSUNBZ2RtRnlJR0ZzYkVWa1oyVnpJRDBnZEdocGN5NW5jbUZ3YUUxaGJtRm5aWEl1WjJWMFFXeHNSV1JuWlhNb0tUdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHRnNiRVZrWjJWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JsWkdkbElEMGdZV3hzUldSblpYTmJhVjA3WEc0Z0lDQWdJQ0F2THlBZ0lDQWdJSFJvYVhNdWRYQmtZWFJsS0dWa1oyVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJSEpsWTNWeWMybDJaV3g1SUhWd1pHRjBaU0J1YjJSbGMxeHVJQ0FnSUhaaGNpQnViMlJsTzF4dUlDQWdJSFpoY2lCdWIyUmxjeUE5SUhSb2FYTXVaM0poY0doTllXNWhaMlZ5TG1kbGRGSnZiM1FvS1M1blpYUk9iMlJsY3lncE8xeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JtOWtaWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHNXZaR1VnUFNCdWIyUmxjMXRwWFR0Y2JpQWdJQ0FnSUM4dklDQWdJQ0FnZEdocGN5NTFjR1JoZEdVb2JtOWtaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnZFhCa1lYUmxJSEp2YjNRZ1ozSmhjR2hjYmlBZ0lDQjBhR2x6TG5Wd1pHRjBaU2gwYUdsekxtZHlZWEJvVFdGdVlXZGxjaTVuWlhSU2IyOTBLQ2twTzF4dUlDQjlYRzU5TzF4dVhHNU1ZWGx2ZFhRdWNISnZkRzkwZVhCbExuVndaR0YwWlNBOUlHWjFibU4wYVc5dUlDaHZZbW9wSUh0Y2JpQWdhV1lnS0c5aWFpQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ2RHaHBjeTUxY0dSaGRHVXlLQ2s3WEc0Z0lIMGdaV3h6WlNCcFppQW9iMkpxSUdsdWMzUmhibU5sYjJZZ1RFNXZaR1VwSUh0Y2JpQWdJQ0IyWVhJZ2JtOWtaU0E5SUc5aWFqdGNiaUFnSUNCcFppQW9ibTlrWlM1blpYUkRhR2xzWkNncElDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDOHZJSE5wYm1ObElHNXZaR1VnYVhNZ1kyOXRjRzkxYm1Rc0lISmxZM1Z5YzJsMlpXeDVJSFZ3WkdGMFpTQmphR2xzWkNCdWIyUmxjMXh1SUNBZ0lDQWdkbUZ5SUc1dlpHVnpJRDBnYm05a1pTNW5aWFJEYUdsc1pDZ3BMbWRsZEU1dlpHVnpLQ2s3WEc0Z0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1dlpHVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lIVndaR0YwWlNodWIyUmxjMXRwWFNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z2FXWWdkR2hsSUd3dGJHVjJaV3dnYm05a1pTQnBjeUJoYzNOdlkybGhkR1ZrSUhkcGRHZ2dZU0IyTFd4bGRtVnNJR2R5WVhCb0lHOWlhbVZqZEN4Y2JpQWdJQ0F2THlCMGFHVnVJR2wwSUdseklHRnpjM1Z0WldRZ2RHaGhkQ0IwYUdVZ2RpMXNaWFpsYkNCdWIyUmxJR2x0Y0d4bGJXVnVkSE1nZEdobFhHNGdJQ0FnTHk4Z2FXNTBaWEptWVdObElGVndaR0YwWVdKc1pTNWNiaUFnSUNCcFppQW9ibTlrWlM1MlIzSmhjR2hQWW1wbFkzUWdJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdMeThnWTJGemRDQjBieUJWY0dSaGRHRmliR1VnZDJsMGFHOTFkQ0JoYm5rZ2RIbHdaU0JqYUdWamExeHVJQ0FnSUNBZ2RtRnlJSFpPYjJSbElEMGdibTlrWlM1MlIzSmhjR2hQWW1wbFkzUTdYRzVjYmlBZ0lDQWdJQzh2SUdOaGJHd2dkR2hsSUhWd1pHRjBaU0J0WlhSb2IyUWdiMllnZEdobElHbHVkR1Z5Wm1GalpWeHVJQ0FnSUNBZ2RrNXZaR1V1ZFhCa1lYUmxLRzV2WkdVcE8xeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElHbG1JQ2h2WW1vZ2FXNXpkR0Z1WTJWdlppQk1SV1JuWlNrZ2UxeHVJQ0FnSUhaaGNpQmxaR2RsSUQwZ2IySnFPMXh1SUNBZ0lDOHZJR2xtSUhSb1pTQnNMV3hsZG1Wc0lHVmtaMlVnYVhNZ1lYTnpiMk5wWVhSbFpDQjNhWFJvSUdFZ2RpMXNaWFpsYkNCbmNtRndhQ0J2WW1wbFkzUXNYRzRnSUNBZ0x5OGdkR2hsYmlCcGRDQnBjeUJoYzNOMWJXVmtJSFJvWVhRZ2RHaGxJSFl0YkdWMlpXd2daV1JuWlNCcGJYQnNaVzFsYm5SeklIUm9aVnh1SUNBZ0lDOHZJR2x1ZEdWeVptRmpaU0JWY0dSaGRHRmliR1V1WEc1Y2JpQWdJQ0JwWmlBb1pXUm5aUzUyUjNKaGNHaFBZbXBsWTNRZ0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0x5OGdZMkZ6ZENCMGJ5QlZjR1JoZEdGaWJHVWdkMmwwYUc5MWRDQmhibmtnZEhsd1pTQmphR1ZqYTF4dUlDQWdJQ0FnZG1GeUlIWkZaR2RsSUQwZ1pXUm5aUzUyUjNKaGNHaFBZbXBsWTNRN1hHNWNiaUFnSUNBZ0lDOHZJR05oYkd3Z2RHaGxJSFZ3WkdGMFpTQnRaWFJvYjJRZ2IyWWdkR2hsSUdsdWRHVnlabUZqWlZ4dUlDQWdJQ0FnZGtWa1oyVXVkWEJrWVhSbEtHVmtaMlVwTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDaHZZbW9nYVc1emRHRnVZMlZ2WmlCTVIzSmhjR2dwSUh0Y2JpQWdJQ0IyWVhJZ1ozSmhjR2dnUFNCdlltbzdYRzRnSUNBZ0x5OGdhV1lnZEdobElHd3RiR1YyWld3Z1ozSmhjR2dnYVhNZ1lYTnpiMk5wWVhSbFpDQjNhWFJvSUdFZ2RpMXNaWFpsYkNCbmNtRndhQ0J2WW1wbFkzUXNYRzRnSUNBZ0x5OGdkR2hsYmlCcGRDQnBjeUJoYzNOMWJXVmtJSFJvWVhRZ2RHaGxJSFl0YkdWMlpXd2diMkpxWldOMElHbHRjR3hsYldWdWRITWdkR2hsWEc0Z0lDQWdMeThnYVc1MFpYSm1ZV05sSUZWd1pHRjBZV0pzWlM1Y2JseHVJQ0FnSUdsbUlDaG5jbUZ3YUM1MlIzSmhjR2hQWW1wbFkzUWdJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdMeThnWTJGemRDQjBieUJWY0dSaGRHRmliR1VnZDJsMGFHOTFkQ0JoYm5rZ2RIbHdaU0JqYUdWamExeHVJQ0FnSUNBZ2RtRnlJSFpIY21Gd2FDQTlJR2R5WVhCb0xuWkhjbUZ3YUU5aWFtVmpkRHRjYmx4dUlDQWdJQ0FnTHk4Z1kyRnNiQ0IwYUdVZ2RYQmtZWFJsSUcxbGRHaHZaQ0J2WmlCMGFHVWdhVzUwWlhKbVlXTmxYRzRnSUNBZ0lDQjJSM0poY0dndWRYQmtZWFJsS0dkeVlYQm9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzVjYmk4cUtseHlYRzRnS2lCVWFHbHpJRzFsZEdodlpDQnBjeUIxYzJWa0lIUnZJSE5sZENCaGJHd2diR0Y1YjNWMElIQmhjbUZ0WlhSbGNuTWdkRzhnWkdWbVlYVnNkQ0IyWVd4MVpYTmNjbHh1SUNvZ1pHVjBaWEp0YVc1bFpDQmhkQ0JqYjIxd2FXeGxJSFJwYldVdVhISmNiaUFxTDF4dVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1cGJtbDBVR0Z5WVcxbGRHVnljeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnYVdZZ0tDRjBhR2x6TG1selUzVmlUR0Y1YjNWMEtTQjdYRzRnSUNBZ2RHaHBjeTVzWVhsdmRYUlJkV0ZzYVhSNUlEMGdUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlVWVkJURWxVV1R0Y2JpQWdJQ0IwYUdsekxtRnVhVzFoZEdsdmJrUjFjbWx1WjB4aGVXOTFkQ0E5SUV4aGVXOTFkRU52Ym5OMFlXNTBjeTVFUlVaQlZVeFVYMEZPU1UxQlZFbFBUbDlFVlZKSlRrZGZURUZaVDFWVU8xeHVJQ0FnSUhSb2FYTXVZVzVwYldGMGFXOXVVR1Z5YVc5a0lEMGdUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlFVNUpUVUZVU1U5T1gxQkZVa2xQUkR0Y2JpQWdJQ0IwYUdsekxtRnVhVzFoZEdsdmJrOXVUR0Y1YjNWMElEMGdUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlFVNUpUVUZVU1U5T1gwOU9YMHhCV1U5VlZEdGNiaUFnSUNCMGFHbHpMbWx1WTNKbGJXVnVkR0ZzSUQwZ1RHRjViM1YwUTI5dWMzUmhiblJ6TGtSRlJrRlZURlJmU1U1RFVrVk5SVTVVUVV3N1hHNGdJQ0FnZEdocGN5NWpjbVZoZEdWQ1pXNWtjMEZ6VG1WbFpHVmtJRDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZRMUpGUVZSRlgwSkZUa1JUWDBGVFgwNUZSVVJGUkR0Y2JpQWdJQ0IwYUdsekxuVnVhV1p2Y20xTVpXRm1UbTlrWlZOcGVtVnpJRDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZWVTVKUms5U1RWOU1SVUZHWDA1UFJFVmZVMGxhUlZNN1hHNGdJSDFjYmx4dUlDQnBaaUFvZEdocGN5NWhibWx0WVhScGIyNUVkWEpwYm1kTVlYbHZkWFFwSUh0Y2JpQWdJQ0IwYUdsekxtRnVhVzFoZEdsdmJrOXVUR0Y1YjNWMElEMGdabUZzYzJVN1hHNGdJSDFjYm4wN1hHNWNia3hoZVc5MWRDNXdjbTkwYjNSNWNHVXVkSEpoYm5ObWIzSnRJRDBnWm5WdVkzUnBiMjRnS0c1bGQweGxablJVYjNBcElIdGNiaUFnYVdZZ0tHNWxkMHhsWm5SVWIzQWdQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnZEdocGN5NTBjbUZ1YzJadmNtMG9ibVYzSUZCdmFXNTBSQ2d3TENBd0tTazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdMeThnWTNKbFlYUmxJR0VnZEhKaGJuTm1iM0p0WVhScGIyNGdiMkpxWldOMElDaG1jbTl0SUVWamJHbHdjMlVnZEc4Z2JHRjViM1YwS1M0Z1YyaGxiaUJoYmx4dUlDQWdJQzh2SUdsdWRtVnljMlVnZEhKaGJuTm1iM0p0SUdseklHRndjR3hwWldRc0lIZGxJR2RsZENCMWNIQmxjaTFzWldaMElHTnZiM0prYVc1aGRHVWdiMllnZEdobFhHNGdJQ0FnTHk4Z1pISmhkMmx1WnlCdmNpQjBhR1VnY205dmRDQm5jbUZ3YUNCaGRDQm5hWFpsYmlCcGJuQjFkQ0JqYjI5eVpHbHVZWFJsSUNoemIyMWxJRzFoY21kcGJuTmNiaUFnSUNBdkx5QmhiSEpsWVdSNUlHbHVZMngxWkdWa0lHbHVJR05oYkdOMWJHRjBhVzl1SUc5bUlHeGxablF0ZEc5d0tTNWNibHh1SUNBZ0lIWmhjaUIwY21GdWN5QTlJRzVsZHlCVWNtRnVjMlp2Y20wb0tUdGNiaUFnSUNCMllYSWdiR1ZtZEZSdmNDQTlJSFJvYVhNdVozSmhjR2hOWVc1aFoyVnlMbWRsZEZKdmIzUW9LUzUxY0dSaGRHVk1aV1owVkc5d0tDazdYRzVjYmlBZ0lDQnBaaUFvYkdWbWRGUnZjQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0IwY21GdWN5NXpaWFJYYjNKc1pFOXlaMWdvYm1WM1RHVm1kRlJ2Y0M1NEtUdGNiaUFnSUNBZ0lIUnlZVzV6TG5ObGRGZHZjbXhrVDNKbldTaHVaWGRNWldaMFZHOXdMbmtwTzF4dVhHNGdJQ0FnSUNCMGNtRnVjeTV6WlhSRVpYWnBZMlZQY21kWUtHeGxablJVYjNBdWVDazdYRzRnSUNBZ0lDQjBjbUZ1Y3k1elpYUkVaWFpwWTJWUGNtZFpLR3hsWm5SVWIzQXVlU2s3WEc1Y2JpQWdJQ0FnSUhaaGNpQnViMlJsY3lBOUlIUm9hWE11WjJWMFFXeHNUbTlrWlhNb0tUdGNiaUFnSUNBZ0lIWmhjaUJ1YjJSbE8xeHVYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJRzV2WkdWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUc1dlpHVWdQU0J1YjJSbGMxdHBYVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNTBjbUZ1YzJadmNtMG9kSEpoYm5NcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JseHVUR0Y1YjNWMExuQnliM1J2ZEhsd1pTNXdiM05wZEdsdmJrNXZaR1Z6VW1GdVpHOXRiSGtnUFNCbWRXNWpkR2x2YmlBb1ozSmhjR2dwSUh0Y2JseHVJQ0JwWmlBb1ozSmhjR2dnUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0x5OWhjM05sY25RZ0lYUm9hWE11YVc1amNtVnRaVzUwWVd3N1hHNGdJQ0FnZEdocGN5NXdiM05wZEdsdmJrNXZaR1Z6VW1GdVpHOXRiSGtvZEdocGN5NW5aWFJIY21Gd2FFMWhibUZuWlhJb0tTNW5aWFJTYjI5MEtDa3BPMXh1SUNBZ0lIUm9hWE11WjJWMFIzSmhjR2hOWVc1aFoyVnlLQ2t1WjJWMFVtOXZkQ2dwTG5Wd1pHRjBaVUp2ZFc1a2N5aDBjblZsS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdiRTV2WkdVN1hHNGdJQ0FnZG1GeUlHTm9hV3hrUjNKaGNHZzdYRzVjYmlBZ0lDQjJZWElnYm05a1pYTWdQU0JuY21Gd2FDNW5aWFJPYjJSbGN5Z3BPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dibTlrWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR3hPYjJSbElEMGdibTlrWlhOYmFWMDdYRzRnSUNBZ0lDQmphR2xzWkVkeVlYQm9JRDBnYkU1dlpHVXVaMlYwUTJocGJHUW9LVHRjYmx4dUlDQWdJQ0FnYVdZZ0tHTm9hV3hrUjNKaGNHZ2dQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdJQ0JzVG05a1pTNXpZMkYwZEdWeUtDazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR05vYVd4a1IzSmhjR2d1WjJWMFRtOWtaWE1vS1M1c1pXNW5kR2dnUFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0JzVG05a1pTNXpZMkYwZEdWeUtDazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmMybDBhVzl1VG05a1pYTlNZVzVrYjIxc2VTaGphR2xzWkVkeVlYQm9LVHRjYmlBZ0lDQWdJQ0FnYkU1dlpHVXVkWEJrWVhSbFFtOTFibVJ6S0NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNHZLaXBjY2x4dUlDb2dWR2hwY3lCdFpYUm9iMlFnY21WMGRYSnVjeUJoSUd4cGMzUWdiMllnZEhKbFpYTWdkMmhsY21VZ1pXRmphQ0IwY21WbElHbHpJSEpsY0hKbGMyVnVkR1ZrSUdGeklHRmNjbHh1SUNvZ2JHbHpkQ0J2WmlCc0xXNXZaR1Z6TGlCVWFHVWdiV1YwYUc5a0lISmxkSFZ5Ym5NZ1lTQnNhWE4wSUc5bUlITnBlbVVnTUNCM2FHVnVPbHh5WEc0Z0tpQXRJRlJvWlNCbmNtRndhQ0JwY3lCdWIzUWdabXhoZENCdmNseHlYRzRnS2lBdElFOXVaU0J2WmlCMGFHVWdZMjl0Y0c5dVpXNTBLSE1wSUc5bUlIUm9aU0JuY21Gd2FDQnBjeUJ1YjNRZ1lTQjBjbVZsTGx4eVhHNGdLaTljYmt4aGVXOTFkQzV3Y205MGIzUjVjR1V1WjJWMFJteGhkRVp2Y21WemRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUdac1lYUkdiM0psYzNRZ1BTQmJYVHRjYmlBZ2RtRnlJR2x6Um05eVpYTjBJRDBnZEhKMVpUdGNibHh1SUNBdkx5QlJkV2xqYXlCeVpXWmxjbVZ1WTJVZ1ptOXlJR0ZzYkNCdWIyUmxjeUJwYmlCMGFHVWdaM0poY0dnZ2JXRnVZV2RsY2lCaGMzTnZZMmxoZEdWa0lIZHBkR2hjYmlBZ0x5OGdkR2hwY3lCc1lYbHZkWFF1SUZSb1pTQnNhWE4wSUhOb2IzVnNaQ0J1YjNRZ1ltVWdZMmhoYm1kbFpDNWNiaUFnZG1GeUlHRnNiRTV2WkdWeklEMGdkR2hwY3k1bmNtRndhRTFoYm1GblpYSXVaMlYwVW05dmRDZ3BMbWRsZEU1dlpHVnpLQ2s3WEc1Y2JpQWdMeThnUm1seWMzUWdZbVVnYzNWeVpTQjBhR0YwSUhSb1pTQm5jbUZ3YUNCcGN5Qm1iR0YwWEc0Z0lIWmhjaUJwYzBac1lYUWdQU0IwY25WbE8xeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1lXeHNUbTlrWlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQnBaaUFvWVd4c1RtOWtaWE5iYVYwdVoyVjBRMmhwYkdRb0tTQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQnBjMFpzWVhRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QlNaWFIxY200Z1pXMXdkSGtnWm05eVpYTjBJR2xtSUhSb1pTQm5jbUZ3YUNCcGN5QnViM1FnWm14aGRDNWNiaUFnYVdZZ0tDRnBjMFpzWVhRcElIdGNiaUFnSUNCeVpYUjFjbTRnWm14aGRFWnZjbVZ6ZER0Y2JpQWdmVnh1WEc0Z0lDOHZJRkoxYmlCQ1JsTWdabTl5SUdWaFkyZ2dZMjl0Y0c5dVpXNTBJRzltSUhSb1pTQm5jbUZ3YUM1Y2JseHVJQ0IyWVhJZ2RtbHphWFJsWkNBOUlHNWxkeUJJWVhOb1UyVjBLQ2s3WEc0Z0lIWmhjaUIwYjBKbFZtbHphWFJsWkNBOUlGdGRPMXh1SUNCMllYSWdjR0Z5Wlc1MGN5QTlJRzVsZHlCSVlYTm9UV0Z3S0NrN1hHNGdJSFpoY2lCMWJsQnliMk5sYzNObFpFNXZaR1Z6SUQwZ1cxMDdYRzVjYmlBZ2RXNVFjbTlqWlhOelpXUk9iMlJsY3lBOUlIVnVVSEp2WTJWemMyVmtUbTlrWlhNdVkyOXVZMkYwS0dGc2JFNXZaR1Z6S1R0Y2JseHVJQ0F2THlCRllXTm9JR2wwWlhKaGRHbHZiaUJ2WmlCMGFHbHpJR3h2YjNBZ1ptbHVaSE1nWVNCamIyMXdiMjVsYm5RZ2IyWWdkR2hsSUdkeVlYQm9JR0Z1WkZ4dUlDQXZMeUJrWldOcFpHVnpJSGRvWlhSb1pYSWdhWFFnYVhNZ1lTQjBjbVZsSUc5eUlHNXZkQzRnU1dZZ2FYUWdhWE1nWVNCMGNtVmxMQ0JoWkdSeklHbDBJSFJ2SUhSb1pWeHVJQ0F2THlCbWIzSmxjM1FnWVc1a0lHTnZiblJwYm5WbFpDQjNhWFJvSUhSb1pTQnVaWGgwSUdOdmJYQnZibVZ1ZEM1Y2JseHVJQ0IzYUdsc1pTQW9kVzVRY205alpYTnpaV1JPYjJSbGN5NXNaVzVuZEdnZ1BpQXdJQ1ltSUdselJtOXlaWE4wS1NCN1hHNGdJQ0FnZEc5Q1pWWnBjMmwwWldRdWNIVnphQ2gxYmxCeWIyTmxjM05sWkU1dlpHVnpXekJkS1R0Y2JseHVJQ0FnSUM4dklGTjBZWEowSUhSb1pTQkNSbE11SUVWaFkyZ2dhWFJsY21GMGFXOXVJRzltSUhSb2FYTWdiRzl2Y0NCMmFYTnBkSE1nWVNCdWIyUmxJR2x1SUdGY2JpQWdJQ0F2THlCQ1JsTWdiV0Z1Ym1WeUxseHVJQ0FnSUhkb2FXeGxJQ2gwYjBKbFZtbHphWFJsWkM1c1pXNW5kR2dnUGlBd0lDWW1JR2x6Um05eVpYTjBLU0I3WEc0Z0lDQWdJQ0F2TDNCdmIyd2diM0JsY21GMGFXOXVYRzRnSUNBZ0lDQjJZWElnWTNWeWNtVnVkRTV2WkdVZ1BTQjBiMEpsVm1semFYUmxaRnN3WFR0Y2JpQWdJQ0FnSUhSdlFtVldhWE5wZEdWa0xuTndiR2xqWlNnd0xDQXhLVHRjYmlBZ0lDQWdJSFpwYzJsMFpXUXVZV1JrS0dOMWNuSmxiblJPYjJSbEtUdGNibHh1SUNBZ0lDQWdMeThnVkhKaGRtVnljMlVnWVd4c0lHNWxhV2RvWW05eWN5QnZaaUIwYUdseklHNXZaR1ZjYmlBZ0lDQWdJSFpoY2lCdVpXbG5hR0p2Y2tWa1oyVnpJRDBnWTNWeWNtVnVkRTV2WkdVdVoyVjBSV1JuWlhNb0tUdGNibHh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J1WldsbmFHSnZja1ZrWjJWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmpkWEp5Wlc1MFRtVnBaMmhpYjNJZ1BTQnVaV2xuYUdKdmNrVmtaMlZ6VzJsZExtZGxkRTkwYUdWeVJXNWtLR04xY25KbGJuUk9iMlJsS1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCQ1JsTWdhWE1nYm05MElHZHliM2RwYm1jZ1puSnZiU0IwYUdseklHNWxhV2RvWW05eUxseHVJQ0FnSUNBZ0lDQnBaaUFvY0dGeVpXNTBjeTVuWlhRb1kzVnljbVZ1ZEU1dlpHVXBJQ0U5SUdOMWNuSmxiblJPWldsbmFHSnZjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRmRsSUdoaGRtVnVKM1FnY0hKbGRtbHZkWE5zZVNCMmFYTnBkR1ZrSUhSb2FYTWdibVZwWjJoaWIzSXVYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjJhWE5wZEdWa0xtTnZiblJoYVc1ektHTjFjbkpsYm5ST1pXbG5hR0p2Y2lrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSdlFtVldhWE5wZEdWa0xuQjFjMmdvWTNWeWNtVnVkRTVsYVdkb1ltOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjbVZ1ZEhNdWNIVjBLR04xY25KbGJuUk9aV2xuYUdKdmNpd2dZM1Z5Y21WdWRFNXZaR1VwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0F2THlCVGFXNWpaU0IzWlNCb1lYWmxJSEJ5WlhacGIzVnpiSGtnZG1semFYUmxaQ0IwYUdseklHNWxhV2RvWW05eUlHRnVaRnh1SUNBZ0lDQWdJQ0FnSUM4dklIUm9hWE1nYm1WcFoyaGliM0lnYVhNZ2JtOTBJSEJoY21WdWRDQnZaaUJqZFhKeVpXNTBUbTlrWlN3Z1oybDJaVzVjYmlBZ0lDQWdJQ0FnSUNBdkx5Qm5jbUZ3YUNCamIyNTBZV2x1Y3lCaElHTnZiWEJ2Ym1WdWRDQjBhR0YwSUdseklHNXZkQ0IwY21WbExDQm9aVzVqWlZ4dUlDQWdJQ0FnSUNBZ0lDOHZJR2wwSUdseklHNXZkQ0JoSUdadmNtVnpkQzVjYmlBZ0lDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhWE5HYjNKbGMzUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJVYUdVZ1ozSmhjR2dnWTI5dWRHRnBibk1nWVNCamIyMXdiMjVsYm5RZ2RHaGhkQ0JwY3lCdWIzUWdZU0IwY21WbExpQkZiWEIwZVZ4dUlDQWdJQzh2SUhCeVpYWnBiM1Z6YkhrZ1ptOTFibVFnZEhKbFpYTXVJRlJvWlNCdFpYUm9iMlFnZDJsc2JDQmxibVF1WEc0Z0lDQWdhV1lnS0NGcGMwWnZjbVZ6ZENrZ2UxeHVJQ0FnSUNBZ1pteGhkRVp2Y21WemRDQTlJRnRkTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJUWVhabElHTjFjbkpsYm5Sc2VTQjJhWE5wZEdWa0lHNXZaR1Z6SUdGeklHRWdkSEpsWlNCcGJpQnZkWElnWm05eVpYTjBMaUJTWlhObGRGeHVJQ0FnSUM4dklIWnBjMmwwWldRZ1lXNWtJSEJoY21WdWRITWdiR2x6ZEhNdUlFTnZiblJwYm5WbElIZHBkR2dnZEdobElHNWxlSFFnWTI5dGNHOXVaVzUwSUc5bVhHNGdJQ0FnTHk4Z2RHaGxJR2R5WVhCb0xDQnBaaUJoYm5rdVhHNGdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCMFpXMXdJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIWnBjMmwwWldRdVlXUmtRV3hzVkc4b2RHVnRjQ2s3WEc0Z0lDQWdJQ0FnSUdac1lYUkdiM0psYzNRdWNIVnphQ2gwWlcxd0tUdGNiaUFnSUNBZ0lDQWdMeTltYkdGMFJtOXlaWE4wSUQwZ1pteGhkRVp2Y21WemRDNWpiMjVqWVhRb2RHVnRjQ2s3WEc0Z0lDQWdJQ0FnSUM4dmRXNVFjbTlqWlhOelpXUk9iMlJsY3k1eVpXMXZkbVZCYkd3b2RtbHphWFJsWkNrN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dkR1Z0Y0M1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjJZV3gxWlNBOUlIUmxiWEJiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdsdVpHVjRJRDBnZFc1UWNtOWpaWE56WldST2IyUmxjeTVwYm1SbGVFOW1LSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2FXNWtaWGdnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RXNVFjbTlqWlhOelpXUk9iMlJsY3k1emNHeHBZMlVvYVc1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IyYVhOcGRHVmtJRDBnYm1WM0lFaGhjMmhUWlhRb0tUdGNiaUFnSUNBZ0lDQWdjR0Z5Wlc1MGN5QTlJRzVsZHlCSVlYTm9UV0Z3S0NrN1hHNGdJQ0FnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1pteGhkRVp2Y21WemREdGNibjA3WEc1Y2JpOHFLbHh5WEc0Z0tpQlVhR2x6SUcxbGRHaHZaQ0JqY21WaGRHVnpJR1IxYlcxNUlHNXZaR1Z6SUNoaGJpQnNMV3hsZG1Wc0lHNXZaR1VnZDJsMGFDQnRhVzVwYldGc0lHUnBiV1Z1YzJsdmJuTXBYSEpjYmlBcUlHWnZjaUIwYUdVZ1oybDJaVzRnWldSblpTQW9iMjVsSUhCbGNpQmlaVzVrY0c5cGJuUXBMaUJVYUdVZ1pYaHBjM1JwYm1jZ2JDMXNaWFpsYkNCemRISjFZM1IxY21WY2NseHVJQ29nYVhNZ2RYQmtZWFJsWkNCaFkyTnZjbVJwYm1kc2VTNWNjbHh1SUNvdlhHNU1ZWGx2ZFhRdWNISnZkRzkwZVhCbExtTnlaV0YwWlVSMWJXMTVUbTlrWlhOR2IzSkNaVzVrY0c5cGJuUnpJRDBnWm5WdVkzUnBiMjRnS0dWa1oyVXBJSHRjYmlBZ2RtRnlJR1IxYlcxNVRtOWtaWE1nUFNCYlhUdGNiaUFnZG1GeUlIQnlaWFlnUFNCbFpHZGxMbk52ZFhKalpUdGNibHh1SUNCMllYSWdaM0poY0dnZ1BTQjBhR2x6TG1keVlYQm9UV0Z1WVdkbGNpNWpZV3hqVEc5M1pYTjBRMjl0Ylc5dVFXNWpaWE4wYjNJb1pXUm5aUzV6YjNWeVkyVXNJR1ZrWjJVdWRHRnlaMlYwS1R0Y2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdWa1oyVXVZbVZ1WkhCdmFXNTBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUM4dklHTnlaV0YwWlNCdVpYY2daSFZ0YlhrZ2JtOWtaVnh1SUNBZ0lIWmhjaUJrZFcxdGVVNXZaR1VnUFNCMGFHbHpMbTVsZDA1dlpHVW9iblZzYkNrN1hHNGdJQ0FnWkhWdGJYbE9iMlJsTG5ObGRGSmxZM1FvYm1WM0lGQnZhVzUwS0RBc0lEQXBMQ0J1WlhjZ1JHbHRaVzV6YVc5dUtERXNJREVwS1R0Y2JseHVJQ0FnSUdkeVlYQm9MbUZrWkNoa2RXMXRlVTV2WkdVcE8xeHVYRzRnSUNBZ0x5OGdZM0psWVhSbElHNWxkeUJrZFcxdGVTQmxaR2RsSUdKbGRIZGxaVzRnY0hKbGRpQmhibVFnWkhWdGJYa2dibTlrWlZ4dUlDQWdJSFpoY2lCa2RXMXRlVVZrWjJVZ1BTQjBhR2x6TG01bGQwVmtaMlVvYm5Wc2JDazdYRzRnSUNBZ2RHaHBjeTVuY21Gd2FFMWhibUZuWlhJdVlXUmtLR1IxYlcxNVJXUm5aU3dnY0hKbGRpd2daSFZ0YlhsT2IyUmxLVHRjYmx4dUlDQWdJR1IxYlcxNVRtOWtaWE11WVdSa0tHUjFiVzE1VG05a1pTazdYRzRnSUNBZ2NISmxkaUE5SUdSMWJXMTVUbTlrWlR0Y2JpQWdmVnh1WEc0Z0lIWmhjaUJrZFcxdGVVVmtaMlVnUFNCMGFHbHpMbTVsZDBWa1oyVW9iblZzYkNrN1hHNGdJSFJvYVhNdVozSmhjR2hOWVc1aFoyVnlMbUZrWkNoa2RXMXRlVVZrWjJVc0lIQnlaWFlzSUdWa1oyVXVkR0Z5WjJWMEtUdGNibHh1SUNCMGFHbHpMbVZrWjJWVWIwUjFiVzE1VG05a1pYTXVjSFYwS0dWa1oyVXNJR1IxYlcxNVRtOWtaWE1wTzF4dVhHNGdJQzh2SUhKbGJXOTJaU0J5WldGc0lHVmtaMlVnWm5KdmJTQm5jbUZ3YUNCdFlXNWhaMlZ5SUdsbUlHbDBJR2x6SUdsdWRHVnlMV2R5WVhCb1hHNGdJR2xtSUNobFpHZGxMbWx6U1c1MFpYSkhjbUZ3YUNncEtTQjdYRzRnSUNBZ2RHaHBjeTVuY21Gd2FFMWhibUZuWlhJdWNtVnRiM1psS0dWa1oyVXBPMXh1SUNCOVhHNGdJQzh2SUdWc2MyVXNJSEpsYlc5MlpTQjBhR1VnWldSblpTQm1jbTl0SUhSb1pTQmpkWEp5Wlc1MElHZHlZWEJvWEc0Z0lHVnNjMlVnZTF4dUlDQWdJQ0FnWjNKaGNHZ3VjbVZ0YjNabEtHVmtaMlVwTzF4dUlDQWdJSDFjYmx4dUlDQnlaWFIxY200Z1pIVnRiWGxPYjJSbGN6dGNibjA3WEc1Y2JpOHFLbHh5WEc0Z0tpQlVhR2x6SUcxbGRHaHZaQ0JqY21WaGRHVnpJR0psYm1Sd2IybHVkSE1nWm05eUlHVmtaMlZ6SUdaeWIyMGdkR2hsSUdSMWJXMTVJRzV2WkdWelhISmNiaUFxSUdGMElHd3RiR1YyWld3dVhISmNiaUFxTDF4dVRHRjViM1YwTG5CeWIzUnZkSGx3WlM1amNtVmhkR1ZDWlc1a2NHOXBiblJ6Um5KdmJVUjFiVzE1VG05a1pYTWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCbFpHZGxjeUE5SUZ0ZE8xeHVJQ0JsWkdkbGN5QTlJR1ZrWjJWekxtTnZibU5oZENoMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2k1blpYUkJiR3hGWkdkbGN5Z3BLVHRjYmlBZ1pXUm5aWE1nUFNCMGFHbHpMbVZrWjJWVWIwUjFiVzE1VG05a1pYTXVhMlY1VTJWMEtDa3VZMjl1WTJGMEtHVmtaMlZ6S1R0Y2JseHVJQ0JtYjNJZ0tIWmhjaUJySUQwZ01Ec2dheUE4SUdWa1oyVnpMbXhsYm1kMGFEc2dheXNyS1NCN1hHNGdJQ0FnZG1GeUlHeEZaR2RsSUQwZ1pXUm5aWE5iYTEwN1hHNWNiaUFnSUNCcFppQW9iRVZrWjJVdVltVnVaSEJ2YVc1MGN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2NHRjBhQ0E5SUhSb2FYTXVaV1JuWlZSdlJIVnRiWGxPYjJSbGN5NW5aWFFvYkVWa1oyVXBPMXh1WEc0Z0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhCaGRHZ3ViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1IxYlcxNVRtOWtaU0E5SUhCaGRHaGJhVjA3WEc0Z0lDQWdJQ0FnSUhaaGNpQndJRDBnYm1WM0lGQnZhVzUwUkNoa2RXMXRlVTV2WkdVdVoyVjBRMlZ1ZEdWeVdDZ3BMQ0JrZFcxdGVVNXZaR1V1WjJWMFEyVnVkR1Z5V1NncEtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCMWNHUmhkR1VnWW1WdVpIQnZhVzUwSjNNZ2JHOWpZWFJwYjI0Z1lXTmpiM0prYVc1bklIUnZJR1IxYlcxNUlHNXZaR1ZjYmlBZ0lDQWdJQ0FnZG1GeUlHVmljQ0E5SUd4RlpHZGxMbUpsYm1Sd2IybHVkSE11WjJWMEtHa3BPMXh1SUNBZ0lDQWdJQ0JsWW5BdWVDQTlJSEF1ZUR0Y2JpQWdJQ0FnSUNBZ1pXSndMbmtnUFNCd0xuazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z2NtVnRiM1psSUhSb1pTQmtkVzF0ZVNCdWIyUmxMQ0JrZFcxdGVTQmxaR2RsY3lCcGJtTnBaR1Z1ZENCM2FYUm9JSFJvYVhOY2JpQWdJQ0FnSUNBZ0x5OGdaSFZ0YlhrZ2JtOWtaU0JwY3lCaGJITnZJSEpsYlc5MlpXUWdLSGRwZEdocGJpQjBhR1VnY21WdGIzWmxJRzFsZEdodlpDbGNiaUFnSUNBZ0lDQWdaSFZ0YlhsT2IyUmxMbWRsZEU5M2JtVnlLQ2t1Y21WdGIzWmxLR1IxYlcxNVRtOWtaU2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklHRmtaQ0IwYUdVZ2NtVmhiQ0JsWkdkbElIUnZJR2R5WVhCb1hHNGdJQ0FnSUNCMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2k1aFpHUW9iRVZrWjJVc0lHeEZaR2RsTG5OdmRYSmpaU3dnYkVWa1oyVXVkR0Z5WjJWMEtUdGNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNWNia3hoZVc5MWRDNTBjbUZ1YzJadmNtMGdQU0JtZFc1amRHbHZiaUFvYzJ4cFpHVnlWbUZzZFdVc0lHUmxabUYxYkhSV1lXeDFaU3dnYldsdVJHbDJMQ0J0WVhoTmRXd3BJSHRjYmlBZ2FXWWdLRzFwYmtScGRpQWhQU0IxYm1SbFptbHVaV1FnSmlZZ2JXRjRUWFZzSUNFOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIWmhjaUIyWVd4MVpTQTlJR1JsWm1GMWJIUldZV3gxWlR0Y2JseHVJQ0FnSUdsbUlDaHpiR2xrWlhKV1lXeDFaU0E4UFNBMU1Da2dlMXh1SUNBZ0lDQWdkbUZ5SUcxcGJsWmhiSFZsSUQwZ1pHVm1ZWFZzZEZaaGJIVmxJQzhnYldsdVJHbDJPMXh1SUNBZ0lDQWdkbUZzZFdVZ0xUMGdLR1JsWm1GMWJIUldZV3gxWlNBdElHMXBibFpoYkhWbEtTQXZJRFV3SUNvZ0tEVXdJQzBnYzJ4cFpHVnlWbUZzZFdVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IyWVhJZ2JXRjRWbUZzZFdVZ1BTQmtaV1poZFd4MFZtRnNkV1VnS2lCdFlYaE5kV3c3WEc0Z0lDQWdJQ0IyWVd4MVpTQXJQU0FvYldGNFZtRnNkV1VnTFNCa1pXWmhkV3gwVm1Gc2RXVXBJQzhnTlRBZ0tpQW9jMnhwWkdWeVZtRnNkV1VnTFNBMU1DazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSFpoY2lCaExDQmlPMXh1WEc0Z0lDQWdhV1lnS0hOc2FXUmxjbFpoYkhWbElEdzlJRFV3S1NCN1hHNGdJQ0FnSUNCaElEMGdPUzR3SUNvZ1pHVm1ZWFZzZEZaaGJIVmxJQzhnTlRBd0xqQTdYRzRnSUNBZ0lDQmlJRDBnWkdWbVlYVnNkRlpoYkhWbElDOGdNVEF1TUR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZU0E5SURrdU1DQXFJR1JsWm1GMWJIUldZV3gxWlNBdklEVXdMakE3WEc0Z0lDQWdJQ0JpSUQwZ0xUZ2dLaUJrWldaaGRXeDBWbUZzZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR0VnS2lCemJHbGtaWEpXWVd4MVpTQXJJR0k3WEc0Z0lIMWNibjA3WEc1Y2JpOHFLbHh5WEc0Z0tpQlVhR2x6SUcxbGRHaHZaQ0JtYVc1a2N5QmhibVFnY21WMGRYSnVjeUIwYUdVZ1kyVnVkR1Z5SUc5bUlIUm9aU0JuYVhabGJpQnViMlJsY3l3Z1lYTnpkVzFwYm1kY2NseHVJQ29nZEdoaGRDQjBhR1VnWjJsMlpXNGdibTlrWlhNZ1ptOXliU0JoSUhSeVpXVWdhVzRnZEdobGJYTmxiSFpsY3k1Y2NseHVJQ292WEc1TVlYbHZkWFF1Wm1sdVpFTmxiblJsY2s5bVZISmxaU0E5SUdaMWJtTjBhVzl1SUNodWIyUmxjeWtnZTF4dUlDQjJZWElnYkdsemRDQTlJRnRkTzF4dUlDQnNhWE4wSUQwZ2JHbHpkQzVqYjI1allYUW9ibTlrWlhNcE8xeHVYRzRnSUhaaGNpQnlaVzF2ZG1Wa1RtOWtaWE1nUFNCYlhUdGNiaUFnZG1GeUlISmxiV0ZwYm1sdVowUmxaM0psWlhNZ1BTQnVaWGNnU0dGemFFMWhjQ2dwTzF4dUlDQjJZWElnWm05MWJtUkRaVzUwWlhJZ1BTQm1ZV3h6WlR0Y2JpQWdkbUZ5SUdObGJuUmxjazV2WkdVZ1BTQnVkV3hzTzF4dVhHNGdJR2xtSUNoc2FYTjBMbXhsYm1kMGFDQTlQU0F4SUh4OElHeHBjM1F1YkdWdVozUm9JRDA5SURJcElIdGNiaUFnSUNCbWIzVnVaRU5sYm5SbGNpQTlJSFJ5ZFdVN1hHNGdJQ0FnWTJWdWRHVnlUbTlrWlNBOUlHeHBjM1JiTUYwN1hHNGdJSDFjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hwYzNRdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQjJZWElnYm05a1pTQTlJR3hwYzNSYmFWMDdYRzRnSUNBZ2RtRnlJR1JsWjNKbFpTQTlJRzV2WkdVdVoyVjBUbVZwWjJoaWIzSnpUR2x6ZENncExuTnBlbVVvS1R0Y2JpQWdJQ0J5WlcxaGFXNXBibWRFWldkeVpXVnpMbkIxZENodWIyUmxMQ0J1YjJSbExtZGxkRTVsYVdkb1ltOXljMHhwYzNRb0tTNXphWHBsS0NrcE8xeHVYRzRnSUNBZ2FXWWdLR1JsWjNKbFpTQTlQU0F4S1NCN1hHNGdJQ0FnSUNCeVpXMXZkbVZrVG05a1pYTXVjSFZ6YUNodWIyUmxLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0IyWVhJZ2RHVnRjRXhwYzNRZ1BTQmJYVHRjYmlBZ2RHVnRjRXhwYzNRZ1BTQjBaVzF3VEdsemRDNWpiMjVqWVhRb2NtVnRiM1psWkU1dlpHVnpLVHRjYmx4dUlDQjNhR2xzWlNBb0lXWnZkVzVrUTJWdWRHVnlLU0I3WEc0Z0lDQWdkbUZ5SUhSbGJYQk1hWE4wTWlBOUlGdGRPMXh1SUNBZ0lIUmxiWEJNYVhOME1pQTlJSFJsYlhCTWFYTjBNaTVqYjI1allYUW9kR1Z0Y0V4cGMzUXBPMXh1SUNBZ0lIUmxiWEJNYVhOMElEMGdXMTA3WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4cGMzUXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUhaaGNpQnViMlJsSUQwZ2JHbHpkRnRwWFR0Y2JseHVJQ0FnSUNBZ2RtRnlJR2x1WkdWNElEMGdiR2x6ZEM1cGJtUmxlRTltS0c1dlpHVXBPMXh1SUNBZ0lDQWdhV1lnS0dsdVpHVjRJRDQ5SURBcElIdGNiaUFnSUNBZ0lDQWdiR2x6ZEM1emNHeHBZMlVvYVc1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMllYSWdibVZwWjJoaWIzVnljeUE5SUc1dlpHVXVaMlYwVG1WcFoyaGliM0p6VEdsemRDZ3BPMXh1WEc0Z0lDQWdJQ0JQWW1wbFkzUXVhMlY1Y3lodVpXbG5hR0p2ZFhKekxuTmxkQ2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYWlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnYm1WcFoyaGliM1Z5SUQwZ2JtVnBaMmhpYjNWeWN5NXpaWFJiYWwwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h5WlcxdmRtVmtUbTlrWlhNdWFXNWtaWGhQWmlodVpXbG5hR0p2ZFhJcElEd2dNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJ2ZEdobGNrUmxaM0psWlNBOUlISmxiV0ZwYm1sdVowUmxaM0psWlhNdVoyVjBLRzVsYVdkb1ltOTFjaWs3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJRzVsZDBSbFozSmxaU0E5SUc5MGFHVnlSR1ZuY21WbElDMGdNVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkRVpXZHlaV1VnUFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVnRjRXhwYzNRdWNIVnphQ2h1WldsbmFHSnZkWElwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUhKbGJXRnBibWx1WjBSbFozSmxaWE11Y0hWMEtHNWxhV2RvWW05MWNpd2dibVYzUkdWbmNtVmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WdGIzWmxaRTV2WkdWeklEMGdjbVZ0YjNabFpFNXZaR1Z6TG1OdmJtTmhkQ2gwWlcxd1RHbHpkQ2s3WEc1Y2JpQWdJQ0JwWmlBb2JHbHpkQzVzWlc1bmRHZ2dQVDBnTVNCOGZDQnNhWE4wTG14bGJtZDBhQ0E5UFNBeUtTQjdYRzRnSUNBZ0lDQm1iM1Z1WkVObGJuUmxjaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQmpaVzUwWlhKT2IyUmxJRDBnYkdsemRGc3dYVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMlZ1ZEdWeVRtOWtaVHRjYm4wN1hHNWNiaThxS2x4eVhHNGdLaUJFZFhKcGJtY2dkR2hsSUdOdllYSnpaVzVwYm1jZ2NISnZZMlZ6Y3l3Z2RHaHBjeUJzWVhsdmRYUWdiV0Y1SUdKbElISmxabVZ5Wlc1alpXUWdZbmtnZEhkdklHZHlZWEJvSUcxaGJtRm5aWEp6WEhKY2JpQXFJSFJvYVhNZ2MyVjBkR1Z5SUdaMWJtTjBhVzl1SUdkeVlXNTBjeUJoWTJObGMzTWdkRzhnWTJoaGJtZGxJSFJvWlNCamRYSnlaVzUwYkhrZ1ltVnBibWNnZFhObFpDQm5jbUZ3YUNCdFlXNWhaMlZ5WEhKY2JpQXFMMXh1VEdGNWIzVjBMbkJ5YjNSdmRIbHdaUzV6WlhSSGNtRndhRTFoYm1GblpYSWdQU0JtZFc1amRHbHZiaUFvWjIwcElIdGNiaUFnZEdocGN5NW5jbUZ3YUUxaGJtRm5aWElnUFNCbmJUdGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1RHRjViM1YwTzF4dVhHNHZLaW9xTHlCOUtTeGNiaThxSURNZ0tpOWNiaThxS2lvdklDaG1kVzVqZEdsdmJpaHRiMlIxYkdVc0lHVjRjRzl5ZEhNcElIdGNibHh1Wm5WdVkzUnBiMjRnVEdGNWIzVjBRMjl1YzNSaGJuUnpLQ2tnZTMxY2JseHVMeW9xWEhKY2JpQXFJRXhoZVc5MWRDQlJkV0ZzYVhSNVhISmNiaUFxTDF4dVRHRjViM1YwUTI5dWMzUmhiblJ6TGxCU1QwOUdYMUZWUVV4SlZGa2dQU0F3TzF4dVRHRjViM1YwUTI5dWMzUmhiblJ6TGtSRlJrRlZURlJmVVZWQlRFbFVXU0E5SURFN1hHNU1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVJGSkJSbFJmVVZWQlRFbFVXU0E5SURJN1hHNWNiaThxS2x4eVhHNGdLaUJFWldaaGRXeDBJSEJoY21GdFpYUmxjbk5jY2x4dUlDb3ZYRzVNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOURVa1ZCVkVWZlFrVk9SRk5mUVZOZlRrVkZSRVZFSUQwZ1ptRnNjMlU3WEc0dkwweGhlVzkxZEVOdmJuTjBZVzUwY3k1RVJVWkJWVXhVWDBsT1ExSkZUVVZPVkVGTUlEMGdkSEoxWlR0Y2JreGhlVzkxZEVOdmJuTjBZVzUwY3k1RVJVWkJWVXhVWDBsT1ExSkZUVVZPVkVGTUlEMGdabUZzYzJVN1hHNU1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVJFVkdRVlZNVkY5QlRrbE5RVlJKVDA1ZlQwNWZURUZaVDFWVUlEMGdkSEoxWlR0Y2JreGhlVzkxZEVOdmJuTjBZVzUwY3k1RVJVWkJWVXhVWDBGT1NVMUJWRWxQVGw5RVZWSkpUa2RmVEVGWlQxVlVJRDBnWm1Gc2MyVTdYRzVNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOUJUa2xOUVZSSlQwNWZVRVZTU1U5RUlEMGdOVEE3WEc1TVlYbHZkWFJEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlWVGtsR1QxSk5YMHhGUVVaZlRrOUVSVjlUU1ZwRlV5QTlJR1poYkhObE8xeHVYRzR2THlBdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1THk4Z1UyVmpkR2x2YmpvZ1IyVnVaWEpoYkNCdmRHaGxjaUJqYjI1emRHRnVkSE5jYmk4dklDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0dktseHlYRzRnS2lCTllYSm5hVzV6SUc5bUlHRWdaM0poY0dnZ2RHOGdZbVVnWVhCd2JHbGxaQ0J2YmlCaWIzVmthVzVuSUhKbFkzUmhibWRzWlNCdlppQnBkSE1nWTI5dWRHVnVkSE11SUZkbFhISmNiaUFxSUdGemMzVnRaU0J0WVhKbmFXNXpJRzl1SUdGc2JDQm1iM1Z5SUhOcFpHVnpJSFJ2SUdKbElIVnVhV1p2Y20wdVhISmNiaUFxTDF4dVRHRjViM1YwUTI5dWMzUmhiblJ6TGtSRlJrRlZURlJmUjFKQlVFaGZUVUZTUjBsT0lEMGdNVFU3WEc1Y2JpOHFYSEpjYmlBcUlGZG9aWFJvWlhJZ2RHOGdZMjl1YzJsa1pYSWdiR0ZpWld4eklHbHVJRzV2WkdVZ1pHbHRaVzV6YVc5dWN5QnZjaUJ1YjNSY2NseHVJQ292WEc1TVlYbHZkWFJEYjI1emRHRnVkSE11VGs5RVJWOUVTVTFGVGxOSlQwNVRYMGxPUTB4VlJFVmZURUZDUlV4VElEMGdabUZzYzJVN1hHNWNiaThxWEhKY2JpQXFJRVJsWm1GMWJIUWdaR2x0Wlc1emFXOXVJRzltSUdFZ2JtOXVMV052YlhCdmRXNWtJRzV2WkdVdVhISmNiaUFxTDF4dVRHRjViM1YwUTI5dWMzUmhiblJ6TGxOSlRWQk1SVjlPVDBSRlgxTkpXa1VnUFNBME1EdGNibHh1THlwY2NseHVJQ29nUkdWbVlYVnNkQ0JrYVcxbGJuTnBiMjRnYjJZZ1lTQnViMjR0WTI5dGNHOTFibVFnYm05a1pTNWNjbHh1SUNvdlhHNU1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVUwbE5VRXhGWDA1UFJFVmZTRUZNUmw5VFNWcEZJRDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMbE5KVFZCTVJWOU9UMFJGWDFOSldrVWdMeUF5TzF4dVhHNHZLbHh5WEc0Z0tpQkZiWEIwZVNCamIyMXdiM1Z1WkNCdWIyUmxJSE5wZW1VdUlGZG9aVzRnWVNCamIyMXdiM1Z1WkNCdWIyUmxJR2x6SUdWdGNIUjVMQ0JwZEhNZ1ltOTBhRnh5WEc0Z0tpQmthVzFsYm5OcGIyNXpJSE5vYjNWc1pDQmlaU0J2WmlCMGFHbHpJSFpoYkhWbExseHlYRzRnS2k5Y2JreGhlVzkxZEVOdmJuTjBZVzUwY3k1RlRWQlVXVjlEVDAxUVQxVk9SRjlPVDBSRlgxTkpXa1VnUFNBME1EdGNibHh1THlwY2NseHVJQ29nVFdsdWFXMTFiU0JzWlc1bmRHZ2dkR2hoZENCaGJpQmxaR2RsSUhOb2IzVnNaQ0IwWVd0bElHUjFjbWx1WnlCc1lYbHZkWFJjY2x4dUlDb3ZYRzVNWVhsdmRYUkRiMjV6ZEdGdWRITXVUVWxPWDBWRVIwVmZURVZPUjFSSUlEMGdNVHRjYmx4dUx5cGNjbHh1SUNvZ1YyOXliR1FnWW05MWJtUmhjbWxsY3lCMGFHRjBJR3hoZVc5MWRDQnZjR1Z5WVhSbGN5QnZibHh5WEc0Z0tpOWNia3hoZVc5MWRFTnZibk4wWVc1MGN5NVhUMUpNUkY5Q1QxVk9SRUZTV1NBOUlERXdNREF3TURBN1hHNWNiaThxWEhKY2JpQXFJRmR2Y214a0lHSnZkVzVrWVhKcFpYTWdkR2hoZENCeVlXNWtiMjBnY0c5emFYUnBiMjVwYm1jZ1kyRnVJR0psSUhCbGNtWnZjbTFsWkNCM2FYUm9YSEpjYmlBcUwxeHVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrbE9TVlJKUVV4ZlYwOVNURVJmUWs5VlRrUkJVbGtnUFNCTVlYbHZkWFJEYjI1emRHRnVkSE11VjA5U1RFUmZRazlWVGtSQlVsa2dMeUF4TURBd08xeHVYRzR2S2x4eVhHNGdLaUJEYjI5eVpHbHVZWFJsY3lCdlppQjBhR1VnZDI5eWJHUWdZMlZ1ZEdWeVhISmNiaUFxTDF4dVRHRjViM1YwUTI5dWMzUmhiblJ6TGxkUFVreEVYME5GVGxSRlVsOVlJRDBnTVRJd01EdGNia3hoZVc5MWRFTnZibk4wWVc1MGN5NVhUMUpNUkY5RFJVNVVSVkpmV1NBOUlEa3dNRHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCTVlYbHZkWFJEYjI1emRHRnVkSE03WEc1Y2JpOHFLaW92SUgwcExGeHVMeW9nTkNBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5a2dlMXh1WEc1MllYSWdWVzVwY1hWbFNVUkhaVzVsY21WMGIzSWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RVcE8xeHVYRzVtZFc1amRHbHZiaUJJWVhOb1RXRndLQ2tnZTF4dUlDQjBhR2x6TG0xaGNDQTlJSHQ5TzF4dUlDQjBhR2x6TG10bGVYTWdQU0JiWFR0Y2JuMWNibHh1U0dGemFFMWhjQzV3Y205MGIzUjVjR1V1Y0hWMElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdkbUZ5SUhSb1pVbGtJRDBnVlc1cGNYVmxTVVJIWlc1bGNtVjBiM0l1WTNKbFlYUmxTVVFvYTJWNUtUdGNiaUFnYVdZZ0tDRjBhR2x6TG1OdmJuUmhhVzV6S0hSb1pVbGtLU2tnZTF4dUlDQWdJSFJvYVhNdWJXRndXM1JvWlVsa1hTQTlJSFpoYkhWbE8xeHVJQ0FnSUhSb2FYTXVhMlY1Y3k1d2RYTm9LR3RsZVNrN1hHNGdJSDFjYm4wN1hHNWNia2hoYzJoTllYQXVjSEp2ZEc5MGVYQmxMbU52Ym5SaGFXNXpJRDBnWm5WdVkzUnBiMjRnS0d0bGVTa2dlMXh1SUNCMllYSWdkR2hsU1dRZ1BTQlZibWx4ZFdWSlJFZGxibVZ5WlhSdmNpNWpjbVZoZEdWSlJDaHJaWGtwTzF4dUlDQnlaWFIxY200Z2RHaHBjeTV0WVhCYmEyVjVYU0FoUFNCdWRXeHNPMXh1ZlR0Y2JseHVTR0Z6YUUxaGNDNXdjbTkwYjNSNWNHVXVaMlYwSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU2tnZTF4dUlDQjJZWElnZEdobFNXUWdQU0JWYm1seGRXVkpSRWRsYm1WeVpYUnZjaTVqY21WaGRHVkpSQ2hyWlhrcE8xeHVJQ0J5WlhSMWNtNGdkR2hwY3k1dFlYQmJkR2hsU1dSZE8xeHVmVHRjYmx4dVNHRnphRTFoY0M1d2NtOTBiM1I1Y0dVdWEyVjVVMlYwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXJaWGx6TzF4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JJWVhOb1RXRndPMXh1WEc0dktpb3FMeUI5S1N4Y2JpOHFJRFVnS2k5Y2JpOHFLaW92SUNobWRXNWpkR2x2YmlodGIyUjFiR1VzSUdWNGNHOXlkSE1wSUh0Y2JseHVablZ1WTNScGIyNGdWVzVwY1hWbFNVUkhaVzVsY21WMGIzSW9LU0I3ZlZ4dVhHNVZibWx4ZFdWSlJFZGxibVZ5WlhSdmNpNXNZWE4wU1VRZ1BTQXdPMXh1WEc1VmJtbHhkV1ZKUkVkbGJtVnlaWFJ2Y2k1amNtVmhkR1ZKUkNBOUlHWjFibU4wYVc5dUlDaHZZbW9wSUh0Y2JpQWdhV1lnS0ZWdWFYRjFaVWxFUjJWdVpYSmxkRzl5TG1selVISnBiV2wwYVhabEtHOWlhaWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdiMkpxTzF4dUlDQjlYRzRnSUdsbUlDaHZZbW91ZFc1cGNYVmxTVVFnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnZZbW91ZFc1cGNYVmxTVVE3WEc0Z0lIMWNiaUFnYjJKcUxuVnVhWEYxWlVsRUlEMGdWVzVwY1hWbFNVUkhaVzVsY21WMGIzSXVaMlYwVTNSeWFXNW5LQ2s3WEc0Z0lGVnVhWEYxWlVsRVIyVnVaWEpsZEc5eUxteGhjM1JKUkNzck8xeHVJQ0J5WlhSMWNtNGdiMkpxTG5WdWFYRjFaVWxFTzF4dWZUdGNibHh1Vlc1cGNYVmxTVVJIWlc1bGNtVjBiM0l1WjJWMFUzUnlhVzVuSUQwZ1puVnVZM1JwYjI0Z0tHbGtLU0I3WEc0Z0lHbG1JQ2hwWkNBOVBTQnVkV3hzS1NCcFpDQTlJRlZ1YVhGMVpVbEVSMlZ1WlhKbGRHOXlMbXhoYzNSSlJEdGNiaUFnY21WMGRYSnVJRndpVDJKcVpXTjBJMXdpSUNzZ2FXUWdLeUJjSWx3aU8xeHVmVHRjYmx4dVZXNXBjWFZsU1VSSFpXNWxjbVYwYjNJdWFYTlFjbWx0YVhScGRtVWdQU0JtZFc1amRHbHZiaUFvWVhKbktTQjdYRzRnSUhaaGNpQjBlWEJsSUQwZ2RIbHdaVzltSUdGeVp6dGNiaUFnY21WMGRYSnVJR0Z5WnlBOVBTQnVkV3hzSUh4OElIUjVjR1VnSVQwZ1hDSnZZbXBsWTNSY0lpQW1KaUIwZVhCbElDRTlJRndpWm5WdVkzUnBiMjVjSWp0Y2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnVlc1cGNYVmxTVVJIWlc1bGNtVjBiM0k3WEc1Y2JpOHFLaW92SUgwcExGeHVMeW9nTmlBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5a2dlMXh1WEc1MllYSWdURWR5WVhCb08xeHVkbUZ5SUV4RlpHZGxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnM0tUdGNibHh1Wm5WdVkzUnBiMjRnVEVkeVlYQm9UV0Z1WVdkbGNpaHNZWGx2ZFhRcElIdGNiaUFnVEVkeVlYQm9JRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlneE1TazdJQzh2SUVsMElHMWhlU0JpWlNCaVpYUjBaWElnZEc4Z2FXNXBkR2xzYVhwbElIUm9hWE1nYjNWMElHOW1JSFJvYVhNZ1puVnVZM1JwYjI0Z1luVjBJR2wwSUdkcGRtVnpJR0Z1SUdWeWNtOXlJQ2hTYVdkb2RDMW9ZVzVrSUhOcFpHVWdiMllnSjJsdWMzUmhibU5sYjJZbklHbHpJRzV2ZENCallXeHNZV0pzWlNrZ2JtOTNMbHh1SUNCMGFHbHpMbXhoZVc5MWRDQTlJR3hoZVc5MWREdGNibHh1SUNCMGFHbHpMbWR5WVhCb2N5QTlJRnRkTzF4dUlDQjBhR2x6TG1Wa1oyVnpJRDBnVzEwN1hHNTlYRzVjYmt4SGNtRndhRTFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbUZrWkZKdmIzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCdVozSmhjR2dnUFNCMGFHbHpMbXhoZVc5MWRDNXVaWGRIY21Gd2FDZ3BPMXh1SUNCMllYSWdibTV2WkdVZ1BTQjBhR2x6TG14aGVXOTFkQzV1WlhkT2IyUmxLRzUxYkd3cE8xeHVJQ0IyWVhJZ2NtOXZkQ0E5SUhSb2FYTXVZV1JrS0c1bmNtRndhQ3dnYm01dlpHVXBPMXh1SUNCMGFHbHpMbk5sZEZKdmIzUkhjbUZ3YUNoeWIyOTBLVHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVjbTl2ZEVkeVlYQm9PMXh1ZlR0Y2JseHVURWR5WVhCb1RXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdVlXUmtJRDBnWm5WdVkzUnBiMjRnS0c1bGQwZHlZWEJvTENCd1lYSmxiblJPYjJSbExDQnVaWGRGWkdkbExDQnpiM1Z5WTJWT2IyUmxMQ0IwWVhKblpYUk9iMlJsS1NCN1hHNGdJQzh2ZEdobGNtVWdZWEpsSUdwMWMzUWdNaUJ3WVhKaGJXVjBaWEp6SUdGeVpTQndZWE56WldRZ2RHaGxiaUJwZENCaFpHUnpJR0Z1SUV4SGNtRndhQ0JsYkhObElHbDBJR0ZrWkhNZ1lXNGdURVZrWjJWY2JpQWdhV1lnS0c1bGQwVmtaMlVnUFQwZ2JuVnNiQ0FtSmlCemIzVnlZMlZPYjJSbElEMDlJRzUxYkd3Z0ppWWdkR0Z5WjJWMFRtOWtaU0E5UFNCdWRXeHNLU0I3WEc0Z0lDQWdhV1lnS0c1bGQwZHlZWEJvSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRndpUjNKaGNHZ2dhWE1nYm5Wc2JDRmNJanRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSEJoY21WdWRFNXZaR1VnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnZEdoeWIzY2dYQ0pRWVhKbGJuUWdibTlrWlNCcGN5QnVkV3hzSVZ3aU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVuY21Gd2FITXVhVzVrWlhoUFppaHVaWGRIY21Gd2FDa2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnWENKSGNtRndhQ0JoYkhKbFlXUjVJR2x1SUhSb2FYTWdaM0poY0dnZ2JXZHlJVndpTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVozSmhjR2h6TG5CMWMyZ29ibVYzUjNKaGNHZ3BPMXh1WEc0Z0lDQWdhV1lnS0c1bGQwZHlZWEJvTG5CaGNtVnVkQ0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QmNJa0ZzY21WaFpIa2dhR0Z6SUdFZ2NHRnlaVzUwSVZ3aU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2NHRnlaVzUwVG05a1pTNWphR2xzWkNBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJjSWtGc2NtVmhaSGtnYUdGeklHRWdZMmhwYkdRaFhDSTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JtVjNSM0poY0dndWNHRnlaVzUwSUQwZ2NHRnlaVzUwVG05a1pUdGNiaUFnSUNCd1lYSmxiblJPYjJSbExtTm9hV3hrSUQwZ2JtVjNSM0poY0dnN1hHNWNiaUFnSUNCeVpYUjFjbTRnYm1WM1IzSmhjR2c3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnTHk5amFHRnVaMlVnZEdobElHOXlaR1Z5SUc5bUlIUm9aU0J3WVhKaGJXVjBaWEp6WEc0Z0lDQWdkR0Z5WjJWMFRtOWtaU0E5SUc1bGQwVmtaMlU3WEc0Z0lDQWdjMjkxY21ObFRtOWtaU0E5SUhCaGNtVnVkRTV2WkdVN1hHNGdJQ0FnYm1WM1JXUm5aU0E5SUc1bGQwZHlZWEJvTzF4dUlDQWdJSFpoY2lCemIzVnlZMlZIY21Gd2FDQTlJSE52ZFhKalpVNXZaR1V1WjJWMFQzZHVaWElvS1R0Y2JpQWdJQ0IyWVhJZ2RHRnlaMlYwUjNKaGNHZ2dQU0IwWVhKblpYUk9iMlJsTG1kbGRFOTNibVZ5S0NrN1hHNWNiaUFnSUNCcFppQW9JU2h6YjNWeVkyVkhjbUZ3YUNBaFBTQnVkV3hzSUNZbUlITnZkWEpqWlVkeVlYQm9MbWRsZEVkeVlYQm9UV0Z1WVdkbGNpZ3BJRDA5SUhSb2FYTXBLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QmNJbE52ZFhKalpTQnViM1FnYVc0Z2RHaHBjeUJuY21Gd2FDQnRaM0loWENJN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNnaEtIUmhjbWRsZEVkeVlYQm9JQ0U5SUc1MWJHd2dKaVlnZEdGeVoyVjBSM0poY0dndVoyVjBSM0poY0doTllXNWhaMlZ5S0NrZ1BUMGdkR2hwY3lrcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUZ3aVZHRnlaMlYwSUc1dmRDQnBiaUIwYUdseklHZHlZWEJvSUcxbmNpRmNJanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYzI5MWNtTmxSM0poY0dnZ1BUMGdkR0Z5WjJWMFIzSmhjR2dwSUh0Y2JpQWdJQ0FnSUc1bGQwVmtaMlV1YVhOSmJuUmxja2R5WVhCb0lEMGdabUZzYzJVN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYzI5MWNtTmxSM0poY0dndVlXUmtLRzVsZDBWa1oyVXNJSE52ZFhKalpVNXZaR1VzSUhSaGNtZGxkRTV2WkdVcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J1WlhkRlpHZGxMbWx6U1c1MFpYSkhjbUZ3YUNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUM4dklITmxkQ0J6YjNWeVkyVWdZVzVrSUhSaGNtZGxkRnh1SUNBZ0lDQWdibVYzUldSblpTNXpiM1Z5WTJVZ1BTQnpiM1Z5WTJWT2IyUmxPMXh1SUNBZ0lDQWdibVYzUldSblpTNTBZWEpuWlhRZ1BTQjBZWEpuWlhST2IyUmxPMXh1WEc0Z0lDQWdJQ0F2THlCaFpHUWdaV1JuWlNCMGJ5QnBiblJsY2kxbmNtRndhQ0JsWkdkbElHeHBjM1JjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbVZrWjJWekxtbHVaR1Y0VDJZb2JtVjNSV1JuWlNrZ1BpQXRNU2tnZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJjSWtWa1oyVWdZV3h5WldGa2VTQnBiaUJwYm5SbGNpMW5jbUZ3YUNCbFpHZGxJR3hwYzNRaFhDSTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhNdVpXUm5aWE11Y0hWemFDaHVaWGRGWkdkbEtUdGNibHh1SUNBZ0lDQWdMeThnWVdSa0lHVmtaMlVnZEc4Z2MyOTFjbU5sSUdGdVpDQjBZWEpuWlhRZ2FXNWphV1JsYm1ONUlHeHBjM1J6WEc0Z0lDQWdJQ0JwWmlBb0lTaHVaWGRGWkdkbExuTnZkWEpqWlNBaFBTQnVkV3hzSUNZbUlHNWxkMFZrWjJVdWRHRnlaMlYwSUNFOUlHNTFiR3dwS1NCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUZ3aVJXUm5aU0J6YjNWeVkyVWdZVzVrTDI5eUlIUmhjbWRsZENCcGN5QnVkV3hzSVZ3aU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvSVNodVpYZEZaR2RsTG5OdmRYSmpaUzVsWkdkbGN5NXBibVJsZUU5bUtHNWxkMFZrWjJVcElEMDlJQzB4SUNZbUlHNWxkMFZrWjJVdWRHRnlaMlYwTG1Wa1oyVnpMbWx1WkdWNFQyWW9ibVYzUldSblpTa2dQVDBnTFRFcEtTQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lGd2lSV1JuWlNCaGJISmxZV1I1SUdsdUlITnZkWEpqWlNCaGJtUXZiM0lnZEdGeVoyVjBJR2x1WTJsa1pXNWplU0JzYVhOMElWd2lPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J1WlhkRlpHZGxMbk52ZFhKalpTNWxaR2RsY3k1d2RYTm9LRzVsZDBWa1oyVXBPMXh1SUNBZ0lDQWdibVYzUldSblpTNTBZWEpuWlhRdVpXUm5aWE11Y0hWemFDaHVaWGRGWkdkbEtUdGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlHNWxkMFZrWjJVN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNU1SM0poY0doTllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1eVpXMXZkbVVnUFNCbWRXNWpkR2x2YmlBb2JFOWlhaWtnZTF4dUlDQnBaaUFvYkU5aWFpQnBibk4wWVc1alpXOW1JRXhIY21Gd2FDa2dlMXh1SUNBZ0lIWmhjaUJuY21Gd2FDQTlJR3hQWW1vN1hHNGdJQ0FnYVdZZ0tHZHlZWEJvTG1kbGRFZHlZWEJvVFdGdVlXZGxjaWdwSUNFOUlIUm9hWE1wSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRndpUjNKaGNHZ2dibTkwSUdsdUlIUm9hWE1nWjNKaGNHZ2diV2R5WENJN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNnaEtHZHlZWEJvSUQwOUlIUm9hWE11Y205dmRFZHlZWEJvSUh4OElHZHlZWEJvTG5CaGNtVnVkQ0FoUFNCdWRXeHNJQ1ltSUdkeVlYQm9MbkJoY21WdWRDNW5jbUZ3YUUxaGJtRm5aWElnUFQwZ2RHaHBjeWtwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRndpU1c1MllXeHBaQ0J3WVhKbGJuUWdibTlrWlNGY0lqdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5Qm1hWEp6ZENCMGFHVWdaV1JuWlhNZ0tHMWhhMlVnWVNCamIzQjVJSFJ2SUdSdklHbDBJSE5oWm1Wc2VTbGNiaUFnSUNCMllYSWdaV1JuWlhOVWIwSmxVbVZ0YjNabFpDQTlJRnRkTzF4dVhHNGdJQ0FnWldSblpYTlViMEpsVW1WdGIzWmxaQ0E5SUdWa1oyVnpWRzlDWlZKbGJXOTJaV1F1WTI5dVkyRjBLR2R5WVhCb0xtZGxkRVZrWjJWektDa3BPMXh1WEc0Z0lDQWdkbUZ5SUdWa1oyVTdYRzRnSUNBZ2RtRnlJSE1nUFNCbFpHZGxjMVJ2UW1WU1pXMXZkbVZrTG14bGJtZDBhRHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE03SUdrckt5a2dlMXh1SUNBZ0lDQWdaV1JuWlNBOUlHVmtaMlZ6Vkc5Q1pWSmxiVzkyWldSYmFWMDdYRzRnSUNBZ0lDQm5jbUZ3YUM1eVpXMXZkbVVvWldSblpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdkR2hsYmlCMGFHVWdibTlrWlhNZ0tHMWhhMlVnWVNCamIzQjVJSFJ2SUdSdklHbDBJSE5oWm1Wc2VTbGNiaUFnSUNCMllYSWdibTlrWlhOVWIwSmxVbVZ0YjNabFpDQTlJRnRkTzF4dVhHNGdJQ0FnYm05a1pYTlViMEpsVW1WdGIzWmxaQ0E5SUc1dlpHVnpWRzlDWlZKbGJXOTJaV1F1WTI5dVkyRjBLR2R5WVhCb0xtZGxkRTV2WkdWektDa3BPMXh1WEc0Z0lDQWdkbUZ5SUc1dlpHVTdYRzRnSUNBZ2N5QTlJRzV2WkdWelZHOUNaVkpsYlc5MlpXUXViR1Z1WjNSb08xeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2N6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCdWIyUmxJRDBnYm05a1pYTlViMEpsVW1WdGIzWmxaRnRwWFR0Y2JpQWdJQ0FnSUdkeVlYQm9MbkpsYlc5MlpTaHViMlJsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCamFHVmpheUJwWmlCbmNtRndhQ0JwY3lCMGFHVWdjbTl2ZEZ4dUlDQWdJR2xtSUNobmNtRndhQ0E5UFNCMGFHbHpMbkp2YjNSSGNtRndhQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXpaWFJTYjI5MFIzSmhjR2dvYm5Wc2JDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdibTkzSUhKbGJXOTJaU0IwYUdVZ1ozSmhjR2dnYVhSelpXeG1YRzRnSUNBZ2RtRnlJR2x1WkdWNElEMGdkR2hwY3k1bmNtRndhSE11YVc1a1pYaFBaaWhuY21Gd2FDazdYRzRnSUNBZ2RHaHBjeTVuY21Gd2FITXVjM0JzYVdObEtHbHVaR1Y0TENBeEtUdGNibHh1SUNBZ0lDOHZJR0ZzYzI4Z2NtVnpaWFFnZEdobElIQmhjbVZ1ZENCdlppQjBhR1VnWjNKaGNHaGNiaUFnSUNCbmNtRndhQzV3WVhKbGJuUWdQU0J1ZFd4c08xeHVJQ0I5SUdWc2MyVWdhV1lnS0d4UFltb2dhVzV6ZEdGdVkyVnZaaUJNUldSblpTa2dlMXh1SUNBZ0lHVmtaMlVnUFNCc1QySnFPMXh1SUNBZ0lHbG1JQ2hsWkdkbElEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lIUm9jbTkzSUZ3aVJXUm5aU0JwY3lCdWRXeHNJVndpTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvSVdWa1oyVXVhWE5KYm5SbGNrZHlZWEJvS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJjSWs1dmRDQmhiaUJwYm5SbGNpMW5jbUZ3YUNCbFpHZGxJVndpTzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvSVNobFpHZGxMbk52ZFhKalpTQWhQU0J1ZFd4c0lDWW1JR1ZrWjJVdWRHRnlaMlYwSUNFOUlHNTFiR3dwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJjSWxOdmRYSmpaU0JoYm1RdmIzSWdkR0Z5WjJWMElHbHpJRzUxYkd3aFhDSTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdjbVZ0YjNabElHVmtaMlVnWm5KdmJTQnpiM1Z5WTJVZ1lXNWtJSFJoY21kbGRDQnViMlJsY3ljZ2FXNWphV1JsYm1ONUlHeHBjM1J6WEc1Y2JpQWdJQ0JwWmlBb0lTaGxaR2RsTG5OdmRYSmpaUzVsWkdkbGN5NXBibVJsZUU5bUtHVmtaMlVwSUNFOUlDMHhJQ1ltSUdWa1oyVXVkR0Z5WjJWMExtVmtaMlZ6TG1sdVpHVjRUMllvWldSblpTa2dJVDBnTFRFcEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCY0lsTnZkWEpqWlNCaGJtUXZiM0lnZEdGeVoyVjBJR1J2WlhOdUozUWdhMjV2ZHlCMGFHbHpJR1ZrWjJVaFhDSTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJR2x1WkdWNElEMGdaV1JuWlM1emIzVnlZMlV1WldSblpYTXVhVzVrWlhoUFppaGxaR2RsS1R0Y2JpQWdJQ0JsWkdkbExuTnZkWEpqWlM1bFpHZGxjeTV6Y0d4cFkyVW9hVzVrWlhnc0lERXBPMXh1SUNBZ0lHbHVaR1Y0SUQwZ1pXUm5aUzUwWVhKblpYUXVaV1JuWlhNdWFXNWtaWGhQWmlobFpHZGxLVHRjYmlBZ0lDQmxaR2RsTG5SaGNtZGxkQzVsWkdkbGN5NXpjR3hwWTJVb2FXNWtaWGdzSURFcE8xeHVYRzRnSUNBZ0x5OGdjbVZ0YjNabElHVmtaMlVnWm5KdmJTQnZkMjVsY2lCbmNtRndhQ0J0WVc1aFoyVnlKM01nYVc1MFpYSXRaM0poY0dnZ1pXUm5aU0JzYVhOMFhHNWNiaUFnSUNCcFppQW9JU2hsWkdkbExuTnZkWEpqWlM1dmQyNWxjaUFoUFNCdWRXeHNJQ1ltSUdWa1oyVXVjMjkxY21ObExtOTNibVZ5TG1kbGRFZHlZWEJvVFdGdVlXZGxjaWdwSUNFOUlHNTFiR3dwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJjSWtWa1oyVWdiM2R1WlhJZ1ozSmhjR2dnYjNJZ2IzZHVaWElnWjNKaGNHZ2diV0Z1WVdkbGNpQnBjeUJ1ZFd4c0lWd2lPMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9aV1JuWlM1emIzVnlZMlV1YjNkdVpYSXVaMlYwUjNKaGNHaE5ZVzVoWjJWeUtDa3VaV1JuWlhNdWFXNWtaWGhQWmlobFpHZGxLU0E5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ1hDSk9iM1FnYVc0Z2IzZHVaWElnWjNKaGNHZ2diV0Z1WVdkbGNpZHpJR1ZrWjJVZ2JHbHpkQ0ZjSWp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ2FXNWtaWGdnUFNCbFpHZGxMbk52ZFhKalpTNXZkMjVsY2k1blpYUkhjbUZ3YUUxaGJtRm5aWElvS1M1bFpHZGxjeTVwYm1SbGVFOW1LR1ZrWjJVcE8xeHVJQ0FnSUdWa1oyVXVjMjkxY21ObExtOTNibVZ5TG1kbGRFZHlZWEJvVFdGdVlXZGxjaWdwTG1Wa1oyVnpMbk53YkdsalpTaHBibVJsZUN3Z01TazdYRzRnSUgxY2JuMDdYRzVjYmt4SGNtRndhRTFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMblZ3WkdGMFpVSnZkVzVrY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2RHaHBjeTV5YjI5MFIzSmhjR2d1ZFhCa1lYUmxRbTkxYm1SektIUnlkV1VwTzF4dWZUdGNibHh1VEVkeVlYQm9UV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVaMlYwUjNKaGNHaHpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1bmNtRndhSE03WEc1OU8xeHVYRzVNUjNKaGNHaE5ZVzVoWjJWeUxuQnliM1J2ZEhsd1pTNW5aWFJCYkd4T2IyUmxjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnYVdZZ0tIUm9hWE11WVd4c1RtOWtaWE1nUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJSFpoY2lCdWIyUmxUR2x6ZENBOUlGdGRPMXh1SUNBZ0lIWmhjaUJuY21Gd2FITWdQU0IwYUdsekxtZGxkRWR5WVhCb2N5Z3BPMXh1SUNBZ0lIWmhjaUJ6SUQwZ1ozSmhjR2h6TG14bGJtZDBhRHRjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE03SUdrckt5a2dlMXh1SUNBZ0lDQWdibTlrWlV4cGMzUWdQU0J1YjJSbFRHbHpkQzVqYjI1allYUW9aM0poY0doelcybGRMbWRsZEU1dlpHVnpLQ2twTzF4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1Gc2JFNXZaR1Z6SUQwZ2JtOWtaVXhwYzNRN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb2FYTXVZV3hzVG05a1pYTTdYRzU5TzF4dVhHNU1SM0poY0doTllXNWhaMlZ5TG5CeWIzUnZkSGx3WlM1eVpYTmxkRUZzYkU1dlpHVnpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IwYUdsekxtRnNiRTV2WkdWeklEMGdiblZzYkR0Y2JuMDdYRzVjYmt4SGNtRndhRTFoYm1GblpYSXVjSEp2ZEc5MGVYQmxMbkpsYzJWMFFXeHNSV1JuWlhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lIUm9hWE11WVd4c1JXUm5aWE1nUFNCdWRXeHNPMXh1ZlR0Y2JseHVURWR5WVhCb1RXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdWNtVnpaWFJCYkd4T2IyUmxjMVJ2UVhCd2JIbEhjbUYyYVhSaGRHbHZiaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZEdocGN5NWhiR3hPYjJSbGMxUnZRWEJ3YkhsSGNtRjJhWFJoZEdsdmJpQTlJRzUxYkd3N1hHNTlPMXh1WEc1TVIzSmhjR2hOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVuWlhSQmJHeEZaR2RsY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2FXWWdLSFJvYVhNdVlXeHNSV1JuWlhNZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUhaaGNpQmxaR2RsVEdsemRDQTlJRnRkTzF4dUlDQWdJSFpoY2lCbmNtRndhSE1nUFNCMGFHbHpMbWRsZEVkeVlYQm9jeWdwTzF4dUlDQWdJSFpoY2lCeklEMGdaM0poY0doekxteGxibWQwYUR0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdkeVlYQm9jeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1pXUm5aVXhwYzNRZ1BTQmxaR2RsVEdsemRDNWpiMjVqWVhRb1ozSmhjR2h6VzJsZExtZGxkRVZrWjJWektDa3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHVmtaMlZNYVhOMElEMGdaV1JuWlV4cGMzUXVZMjl1WTJGMEtIUm9hWE11WldSblpYTXBPMXh1WEc0Z0lDQWdkR2hwY3k1aGJHeEZaR2RsY3lBOUlHVmtaMlZNYVhOME8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbUZzYkVWa1oyVnpPMXh1ZlR0Y2JseHVURWR5WVhCb1RXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdVoyVjBRV3hzVG05a1pYTlViMEZ3Y0d4NVIzSmhkbWwwWVhScGIyNGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG1Gc2JFNXZaR1Z6Vkc5QmNIQnNlVWR5WVhacGRHRjBhVzl1TzF4dWZUdGNibHh1VEVkeVlYQm9UV0Z1WVdkbGNpNXdjbTkwYjNSNWNHVXVjMlYwUVd4c1RtOWtaWE5VYjBGd2NHeDVSM0poZG1sMFlYUnBiMjRnUFNCbWRXNWpkR2x2YmlBb2JtOWtaVXhwYzNRcElIdGNiaUFnYVdZZ0tIUm9hWE11WVd4c1RtOWtaWE5VYjBGd2NHeDVSM0poZG1sMFlYUnBiMjRnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJSFJvY205M0lGd2lZWE56WlhKMElHWmhhV3hsWkZ3aU8xeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1aGJHeE9iMlJsYzFSdlFYQndiSGxIY21GMmFYUmhkR2x2YmlBOUlHNXZaR1ZNYVhOME8xeHVmVHRjYmx4dVRFZHlZWEJvVFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1WjJWMFVtOXZkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdWNtOXZkRWR5WVhCb08xeHVmVHRjYmx4dVRFZHlZWEJvVFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1YzJWMFVtOXZkRWR5WVhCb0lEMGdablZ1WTNScGIyNGdLR2R5WVhCb0tTQjdYRzRnSUdsbUlDaG5jbUZ3YUM1blpYUkhjbUZ3YUUxaGJtRm5aWElvS1NBaFBTQjBhR2x6S1NCN1hHNGdJQ0FnZEdoeWIzY2dYQ0pTYjI5MElHNXZkQ0JwYmlCMGFHbHpJR2R5WVhCb0lHMW5jaUZjSWp0Y2JpQWdmVnh1WEc0Z0lIUm9hWE11Y205dmRFZHlZWEJvSUQwZ1ozSmhjR2c3WEc0Z0lDOHZJSEp2YjNRZ1ozSmhjR2dnYlhWemRDQm9ZWFpsSUdFZ2NtOXZkQ0J1YjJSbElHRnpjMjlqYVdGMFpXUWdkMmwwYUNCcGRDQm1iM0lnWTI5dWRtVnVhV1Z1WTJWY2JpQWdhV1lnS0dkeVlYQm9MbkJoY21WdWRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ1ozSmhjR2d1Y0dGeVpXNTBJRDBnZEdocGN5NXNZWGx2ZFhRdWJtVjNUbTlrWlNoY0lsSnZiM1FnYm05a1pWd2lLVHRjYmlBZ2ZWeHVmVHRjYmx4dVRFZHlZWEJvVFdGdVlXZGxjaTV3Y205MGIzUjVjR1V1WjJWMFRHRjViM1YwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXNZWGx2ZFhRN1hHNTlPMXh1WEc1TVIzSmhjR2hOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVwYzA5dVpVRnVZMlZ6ZEc5eVQyWlBkR2hsY2lBOUlHWjFibU4wYVc5dUlDaG1hWEp6ZEU1dlpHVXNJSE5sWTI5dVpFNXZaR1VwSUh0Y2JpQWdhV1lnS0NFb1ptbHljM1JPYjJSbElDRTlJRzUxYkd3Z0ppWWdjMlZqYjI1a1RtOWtaU0FoUFNCdWRXeHNLU2tnZTF4dUlDQWdJSFJvY205M0lGd2lZWE56WlhKMElHWmhhV3hsWkZ3aU8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0dacGNuTjBUbTlrWlNBOVBTQnpaV052Ym1ST2IyUmxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lIMWNiaUFnTHk4Z1NYTWdjMlZqYjI1a0lHNXZaR1VnWVc0Z1lXNWpaWE4wYjNJZ2IyWWdkR2hsSUdacGNuTjBJRzl1WlQ5Y2JpQWdkbUZ5SUc5M2JtVnlSM0poY0dnZ1BTQm1hWEp6ZEU1dlpHVXVaMlYwVDNkdVpYSW9LVHRjYmlBZ2RtRnlJSEJoY21WdWRFNXZaR1U3WEc1Y2JpQWdaRzhnZTF4dUlDQWdJSEJoY21WdWRFNXZaR1VnUFNCdmQyNWxja2R5WVhCb0xtZGxkRkJoY21WdWRDZ3BPMXh1WEc0Z0lDQWdhV1lnS0hCaGNtVnVkRTV2WkdVZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hCaGNtVnVkRTV2WkdVZ1BUMGdjMlZqYjI1a1RtOWtaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjNkdVpYSkhjbUZ3YUNBOUlIQmhjbVZ1ZEU1dlpHVXVaMlYwVDNkdVpYSW9LVHRjYmlBZ0lDQnBaaUFvYjNkdVpYSkhjbUZ3YUNBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUgwZ2QyaHBiR1VnS0hSeWRXVXBPMXh1SUNBdkx5QkpjeUJtYVhKemRDQnViMlJsSUdGdUlHRnVZMlZ6ZEc5eUlHOW1JSFJvWlNCelpXTnZibVFnYjI1bFAxeHVJQ0J2ZDI1bGNrZHlZWEJvSUQwZ2MyVmpiMjVrVG05a1pTNW5aWFJQZDI1bGNpZ3BPMXh1WEc0Z0lHUnZJSHRjYmlBZ0lDQndZWEpsYm5ST2IyUmxJRDBnYjNkdVpYSkhjbUZ3YUM1blpYUlFZWEpsYm5Rb0tUdGNibHh1SUNBZ0lHbG1JQ2h3WVhKbGJuUk9iMlJsSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h3WVhKbGJuUk9iMlJsSUQwOUlHWnBjbk4wVG05a1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiM2R1WlhKSGNtRndhQ0E5SUhCaGNtVnVkRTV2WkdVdVoyVjBUM2R1WlhJb0tUdGNiaUFnSUNCcFppQW9iM2R1WlhKSGNtRndhQ0E5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJSDBnZDJocGJHVWdLSFJ5ZFdVcE8xeHVYRzRnSUhKbGRIVnliaUJtWVd4elpUdGNibjA3WEc1Y2JreEhjbUZ3YUUxaGJtRm5aWEl1Y0hKdmRHOTBlWEJsTG1OaGJHTk1iM2RsYzNSRGIyMXRiMjVCYm1ObGMzUnZjbk1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhaaGNpQmxaR2RsTzF4dUlDQjJZWElnYzI5MWNtTmxUbTlrWlR0Y2JpQWdkbUZ5SUhSaGNtZGxkRTV2WkdVN1hHNGdJSFpoY2lCemIzVnlZMlZCYm1ObGMzUnZja2R5WVhCb08xeHVJQ0IyWVhJZ2RHRnlaMlYwUVc1alpYTjBiM0pIY21Gd2FEdGNibHh1SUNCMllYSWdaV1JuWlhNZ1BTQjBhR2x6TG1kbGRFRnNiRVZrWjJWektDazdYRzRnSUhaaGNpQnpJRDBnWldSblpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhNN0lHa3JLeWtnZTF4dUlDQWdJR1ZrWjJVZ1BTQmxaR2RsYzF0cFhUdGNibHh1SUNBZ0lITnZkWEpqWlU1dlpHVWdQU0JsWkdkbExuTnZkWEpqWlR0Y2JpQWdJQ0IwWVhKblpYUk9iMlJsSUQwZ1pXUm5aUzUwWVhKblpYUTdYRzRnSUNBZ1pXUm5aUzVzWTJFZ1BTQnVkV3hzTzF4dUlDQWdJR1ZrWjJVdWMyOTFjbU5sU1c1TVkyRWdQU0J6YjNWeVkyVk9iMlJsTzF4dUlDQWdJR1ZrWjJVdWRHRnlaMlYwU1c1TVkyRWdQU0IwWVhKblpYUk9iMlJsTzF4dVhHNGdJQ0FnYVdZZ0tITnZkWEpqWlU1dlpHVWdQVDBnZEdGeVoyVjBUbTlrWlNrZ2UxeHVJQ0FnSUNBZ1pXUm5aUzVzWTJFZ1BTQnpiM1Z5WTJWT2IyUmxMbWRsZEU5M2JtVnlLQ2s3WEc0Z0lDQWdJQ0JqYjI1MGFXNTFaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpiM1Z5WTJWQmJtTmxjM1J2Y2tkeVlYQm9JRDBnYzI5MWNtTmxUbTlrWlM1blpYUlBkMjVsY2lncE8xeHVYRzRnSUNBZ2QyaHBiR1VnS0dWa1oyVXViR05oSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdWa1oyVXVkR0Z5WjJWMFNXNU1ZMkVnUFNCMFlYSm5aWFJPYjJSbE8xeHVJQ0FnSUNBZ2RHRnlaMlYwUVc1alpYTjBiM0pIY21Gd2FDQTlJSFJoY21kbGRFNXZaR1V1WjJWMFQzZHVaWElvS1R0Y2JseHVJQ0FnSUNBZ2QyaHBiR1VnS0dWa1oyVXViR05oSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRFRnVZMlZ6ZEc5eVIzSmhjR2dnUFQwZ2MyOTFjbU5sUVc1alpYTjBiM0pIY21Gd2FDa2dlMXh1SUNBZ0lDQWdJQ0FnSUdWa1oyVXViR05oSUQwZ2RHRnlaMlYwUVc1alpYTjBiM0pIY21Gd2FEdGNiaUFnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBZWEpuWlhSQmJtTmxjM1J2Y2tkeVlYQm9JRDA5SUhSb2FYTXVjbTl2ZEVkeVlYQm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvWldSblpTNXNZMkVnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9jbTkzSUZ3aVlYTnpaWEowSUdaaGFXeGxaRndpTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVmtaMlV1ZEdGeVoyVjBTVzVNWTJFZ1BTQjBZWEpuWlhSQmJtTmxjM1J2Y2tkeVlYQm9MbWRsZEZCaGNtVnVkQ2dwTzF4dUlDQWdJQ0FnSUNCMFlYSm5aWFJCYm1ObGMzUnZja2R5WVhCb0lEMGdaV1JuWlM1MFlYSm5aWFJKYmt4allTNW5aWFJQZDI1bGNpZ3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb2MyOTFjbU5sUVc1alpYTjBiM0pIY21Gd2FDQTlQU0IwYUdsekxuSnZiM1JIY21Gd2FDa2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0dWa1oyVXViR05oSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ1pXUm5aUzV6YjNWeVkyVkpia3hqWVNBOUlITnZkWEpqWlVGdVkyVnpkRzl5UjNKaGNHZ3VaMlYwVUdGeVpXNTBLQ2s3WEc0Z0lDQWdJQ0FnSUhOdmRYSmpaVUZ1WTJWemRHOXlSM0poY0dnZ1BTQmxaR2RsTG5OdmRYSmpaVWx1VEdOaExtZGxkRTkzYm1WeUtDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR1ZrWjJVdWJHTmhJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvY205M0lGd2lZWE56WlhKMElHWmhhV3hsWkZ3aU8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JseHVURWR5WVhCb1RXRnVZV2RsY2k1d2NtOTBiM1I1Y0dVdVkyRnNZMHh2ZDJWemRFTnZiVzF2YmtGdVkyVnpkRzl5SUQwZ1puVnVZM1JwYjI0Z0tHWnBjbk4wVG05a1pTd2djMlZqYjI1a1RtOWtaU2tnZTF4dUlDQnBaaUFvWm1seWMzUk9iMlJsSUQwOUlITmxZMjl1WkU1dlpHVXBJSHRjYmlBZ0lDQnlaWFIxY200Z1ptbHljM1JPYjJSbExtZGxkRTkzYm1WeUtDazdYRzRnSUgxY2JpQWdkbUZ5SUdacGNuTjBUM2R1WlhKSGNtRndhQ0E5SUdacGNuTjBUbTlrWlM1blpYUlBkMjVsY2lncE8xeHVYRzRnSUdSdklIdGNiaUFnSUNCcFppQW9abWx5YzNSUGQyNWxja2R5WVhCb0lEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnYzJWamIyNWtUM2R1WlhKSGNtRndhQ0E5SUhObFkyOXVaRTV2WkdVdVoyVjBUM2R1WlhJb0tUdGNibHh1SUNBZ0lHUnZJSHRjYmlBZ0lDQWdJR2xtSUNoelpXTnZibVJQZDI1bGNrZHlZWEJvSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaHpaV052Ym1SUGQyNWxja2R5WVhCb0lEMDlJR1pwY25OMFQzZHVaWEpIY21Gd2FDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMlZqYjI1a1QzZHVaWEpIY21Gd2FEdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lITmxZMjl1WkU5M2JtVnlSM0poY0dnZ1BTQnpaV052Ym1SUGQyNWxja2R5WVhCb0xtZGxkRkJoY21WdWRDZ3BMbWRsZEU5M2JtVnlLQ2s3WEc0Z0lDQWdmU0IzYUdsc1pTQW9kSEoxWlNrN1hHNWNiaUFnSUNCbWFYSnpkRTkzYm1WeVIzSmhjR2dnUFNCbWFYSnpkRTkzYm1WeVIzSmhjR2d1WjJWMFVHRnlaVzUwS0NrdVoyVjBUM2R1WlhJb0tUdGNiaUFnZlNCM2FHbHNaU0FvZEhKMVpTazdYRzVjYmlBZ2NtVjBkWEp1SUdacGNuTjBUM2R1WlhKSGNtRndhRHRjYm4wN1hHNWNia3hIY21Gd2FFMWhibUZuWlhJdWNISnZkRzkwZVhCbExtTmhiR05KYm1Oc2RYTnBiMjVVY21WbFJHVndkR2h6SUQwZ1puVnVZM1JwYjI0Z0tHZHlZWEJvTENCa1pYQjBhQ2tnZTF4dUlDQnBaaUFvWjNKaGNHZ2dQVDBnYm5Wc2JDQW1KaUJrWlhCMGFDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ1ozSmhjR2dnUFNCMGFHbHpMbkp2YjNSSGNtRndhRHRjYmlBZ0lDQmtaWEIwYUNBOUlERTdYRzRnSUgxY2JpQWdkbUZ5SUc1dlpHVTdYRzVjYmlBZ2RtRnlJRzV2WkdWeklEMGdaM0poY0dndVoyVjBUbTlrWlhNb0tUdGNiaUFnZG1GeUlITWdQU0J1YjJSbGN5NXNaVzVuZEdnN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnY3pzZ2FTc3JLU0I3WEc0Z0lDQWdibTlrWlNBOUlHNXZaR1Z6VzJsZE8xeHVJQ0FnSUc1dlpHVXVhVzVqYkhWemFXOXVWSEpsWlVSbGNIUm9JRDBnWkdWd2RHZzdYRzVjYmlBZ0lDQnBaaUFvYm05a1pTNWphR2xzWkNBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5oYkdOSmJtTnNkWE5wYjI1VWNtVmxSR1Z3ZEdoektHNXZaR1V1WTJocGJHUXNJR1JsY0hSb0lDc2dNU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1TVIzSmhjR2hOWVc1aFoyVnlMbkJ5YjNSdmRIbHdaUzVwYm1Oc2RXUmxjMGx1ZG1Gc2FXUkZaR2RsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMllYSWdaV1JuWlR0Y2JseHVJQ0IyWVhJZ2N5QTlJSFJvYVhNdVpXUm5aWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITTdJR2tyS3lrZ2UxeHVJQ0FnSUdWa1oyVWdQU0IwYUdsekxtVmtaMlZ6VzJsZE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTlBibVZCYm1ObGMzUnZjazltVDNSb1pYSW9aV1JuWlM1emIzVnlZMlVzSUdWa1oyVXVkR0Z5WjJWMEtTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUnlkV1U3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnVEVkeVlYQm9UV0Z1WVdkbGNqdGNibHh1THlvcUtpOGdmU2tzWEc0dktpQTNJQ292WEc0dktpb3FMeUFvWm5WdVkzUnBiMjRvYlc5a2RXeGxMQ0JsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1NCN1hHNWNiblpoY2lCTVIzSmhjR2hQWW1wbFkzUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RncE8xeHVkbUZ5SUVsSFpXOXRaWFJ5ZVNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9PU2s3WEc1MllYSWdTVTFoZEdnZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLREV3S1R0Y2JseHVablZ1WTNScGIyNGdURVZrWjJVb2MyOTFjbU5sTENCMFlYSm5aWFFzSUhaRlpHZGxLU0I3WEc0Z0lFeEhjbUZ3YUU5aWFtVmpkQzVqWVd4c0tIUm9hWE1zSUhaRlpHZGxLVHRjYmx4dUlDQjBhR2x6TG1selQzWmxjbXhoY0dsdVoxTnZkWEpqWlVGdVpGUmhjbWRsZENBOUlHWmhiSE5sTzF4dUlDQjBhR2x6TG5aSGNtRndhRTlpYW1WamRDQTlJSFpGWkdkbE8xeHVJQ0IwYUdsekxtSmxibVJ3YjJsdWRITWdQU0JiWFR0Y2JpQWdkR2hwY3k1emIzVnlZMlVnUFNCemIzVnlZMlU3WEc0Z0lIUm9hWE11ZEdGeVoyVjBJRDBnZEdGeVoyVjBPMXh1ZlZ4dVhHNU1SV1JuWlM1d2NtOTBiM1I1Y0dVZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0V4SGNtRndhRTlpYW1WamRDNXdjbTkwYjNSNWNHVXBPMXh1WEc1bWIzSWdLSFpoY2lCd2NtOXdJR2x1SUV4SGNtRndhRTlpYW1WamRDa2dlMXh1SUNCTVJXUm5aVnR3Y205d1hTQTlJRXhIY21Gd2FFOWlhbVZqZEZ0d2NtOXdYVHRjYm4xY2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExtZGxkRk52ZFhKalpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11YzI5MWNtTmxPMXh1ZlR0Y2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExtZGxkRlJoY21kbGRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11ZEdGeVoyVjBPMXh1ZlR0Y2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExtbHpTVzUwWlhKSGNtRndhQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdWFYTkpiblJsY2tkeVlYQm9PMXh1ZlR0Y2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExtZGxkRXhsYm1kMGFDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11YkdWdVozUm9PMXh1ZlR0Y2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExtbHpUM1psY214aGNHbHVaMU52ZFhKalpVRnVaRlJoY21kbGRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11YVhOUGRtVnliR0Z3YVc1blUyOTFjbU5sUVc1a1ZHRnlaMlYwTzF4dWZUdGNibHh1VEVWa1oyVXVjSEp2ZEc5MGVYQmxMbWRsZEVKbGJtUndiMmx1ZEhNZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbUpsYm1Sd2IybHVkSE03WEc1OU8xeHVYRzVNUldSblpTNXdjbTkwYjNSNWNHVXVaMlYwVEdOaElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTVzWTJFN1hHNTlPMXh1WEc1TVJXUm5aUzV3Y205MGIzUjVjR1V1WjJWMFUyOTFjbU5sU1c1TVkyRWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG5OdmRYSmpaVWx1VEdOaE8xeHVmVHRjYmx4dVRFVmtaMlV1Y0hKdmRHOTBlWEJsTG1kbGRGUmhjbWRsZEVsdVRHTmhJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1MFlYSm5aWFJKYmt4allUdGNibjA3WEc1Y2JreEZaR2RsTG5CeWIzUnZkSGx3WlM1blpYUlBkR2hsY2tWdVpDQTlJR1oxYm1OMGFXOXVJQ2h1YjJSbEtTQjdYRzRnSUdsbUlDaDBhR2x6TG5OdmRYSmpaU0E5UFQwZ2JtOWtaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5SaGNtZGxkRHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDBhR2x6TG5SaGNtZGxkQ0E5UFQwZ2JtOWtaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5OdmRYSmpaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IwYUhKdmR5QmNJazV2WkdVZ2FYTWdibTkwSUdsdVkybGtaVzUwSUhkcGRHZ2dkR2hwY3lCbFpHZGxYQ0k3WEc0Z0lIMWNibjA3WEc1Y2JreEZaR2RsTG5CeWIzUnZkSGx3WlM1blpYUlBkR2hsY2tWdVpFbHVSM0poY0dnZ1BTQm1kVzVqZEdsdmJpQW9ibTlrWlN3Z1ozSmhjR2dwSUh0Y2JpQWdkbUZ5SUc5MGFHVnlSVzVrSUQwZ2RHaHBjeTVuWlhSUGRHaGxja1Z1WkNodWIyUmxLVHRjYmlBZ2RtRnlJSEp2YjNRZ1BTQm5jbUZ3YUM1blpYUkhjbUZ3YUUxaGJtRm5aWElvS1M1blpYUlNiMjkwS0NrN1hHNWNiaUFnZDJocGJHVWdLSFJ5ZFdVcElIdGNiaUFnSUNCcFppQW9iM1JvWlhKRmJtUXVaMlYwVDNkdVpYSW9LU0E5UFNCbmNtRndhQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkwYUdWeVJXNWtPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2ZEdobGNrVnVaQzVuWlhSUGQyNWxjaWdwSUQwOUlISnZiM1FwSUh0Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOTBhR1Z5Ulc1a0lEMGdiM1JvWlhKRmJtUXVaMlYwVDNkdVpYSW9LUzVuWlhSUVlYSmxiblFvS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCdWRXeHNPMXh1ZlR0Y2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExuVndaR0YwWlV4bGJtZDBhQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZG1GeUlHTnNhWEJRYjJsdWRFTnZiM0prYVc1aGRHVnpJRDBnYm1WM0lFRnljbUY1S0RRcE8xeHVYRzRnSUhSb2FYTXVhWE5QZG1WeWJHRndhVzVuVTI5MWNtTmxRVzVrVkdGeVoyVjBJRDBnU1VkbGIyMWxkSEo1TG1kbGRFbHVkR1Z5YzJWamRHbHZiaWgwYUdsekxuUmhjbWRsZEM1blpYUlNaV04wS0Nrc0lIUm9hWE11YzI5MWNtTmxMbWRsZEZKbFkzUW9LU3dnWTJ4cGNGQnZhVzUwUTI5dmNtUnBibUYwWlhNcE8xeHVYRzRnSUdsbUlDZ2hkR2hwY3k1cGMwOTJaWEpzWVhCcGJtZFRiM1Z5WTJWQmJtUlVZWEpuWlhRcElIdGNiaUFnSUNCMGFHbHpMbXhsYm1kMGFGZ2dQU0JqYkdsd1VHOXBiblJEYjI5eVpHbHVZWFJsYzFzd1hTQXRJR05zYVhCUWIybHVkRU52YjNKa2FXNWhkR1Z6V3pKZE8xeHVJQ0FnSUhSb2FYTXViR1Z1WjNSb1dTQTlJR05zYVhCUWIybHVkRU52YjNKa2FXNWhkR1Z6V3pGZElDMGdZMnhwY0ZCdmFXNTBRMjl2Y21ScGJtRjBaWE5iTTEwN1hHNWNiaUFnSUNCcFppQW9UV0YwYUM1aFluTW9kR2hwY3k1c1pXNW5kR2hZS1NBOElERXVNQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXNaVzVuZEdoWUlEMGdTVTFoZEdndWMybG5iaWgwYUdsekxteGxibWQwYUZncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaE5ZWFJvTG1GaWN5aDBhR2x6TG14bGJtZDBhRmtwSUR3Z01TNHdLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGxibWQwYUZrZ1BTQkpUV0YwYUM1emFXZHVLSFJvYVhNdWJHVnVaM1JvV1NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NXNaVzVuZEdnZ1BTQk5ZWFJvTG5OeGNuUW9kR2hwY3k1c1pXNW5kR2hZSUNvZ2RHaHBjeTVzWlc1bmRHaFlJQ3NnZEdocGN5NXNaVzVuZEdoWklDb2dkR2hwY3k1c1pXNW5kR2haS1R0Y2JpQWdmVnh1ZlR0Y2JseHVURVZrWjJVdWNISnZkRzkwZVhCbExuVndaR0YwWlV4bGJtZDBhRk5wYlhCc1pTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkR2hwY3k1c1pXNW5kR2hZSUQwZ2RHaHBjeTUwWVhKblpYUXVaMlYwUTJWdWRHVnlXQ2dwSUMwZ2RHaHBjeTV6YjNWeVkyVXVaMlYwUTJWdWRHVnlXQ2dwTzF4dUlDQjBhR2x6TG14bGJtZDBhRmtnUFNCMGFHbHpMblJoY21kbGRDNW5aWFJEWlc1MFpYSlpLQ2tnTFNCMGFHbHpMbk52ZFhKalpTNW5aWFJEWlc1MFpYSlpLQ2s3WEc1Y2JpQWdhV1lnS0UxaGRHZ3VZV0p6S0hSb2FYTXViR1Z1WjNSb1dDa2dQQ0F4TGpBcElIdGNiaUFnSUNCMGFHbHpMbXhsYm1kMGFGZ2dQU0JKVFdGMGFDNXphV2R1S0hSb2FYTXViR1Z1WjNSb1dDazdYRzRnSUgxY2JseHVJQ0JwWmlBb1RXRjBhQzVoWW5Nb2RHaHBjeTVzWlc1bmRHaFpLU0E4SURFdU1Da2dlMXh1SUNBZ0lIUm9hWE11YkdWdVozUm9XU0E5SUVsTllYUm9Mbk5wWjI0b2RHaHBjeTVzWlc1bmRHaFpLVHRjYmlBZ2ZWeHVYRzRnSUhSb2FYTXViR1Z1WjNSb0lEMGdUV0YwYUM1emNYSjBLSFJvYVhNdWJHVnVaM1JvV0NBcUlIUm9hWE11YkdWdVozUm9XQ0FySUhSb2FYTXViR1Z1WjNSb1dTQXFJSFJvYVhNdWJHVnVaM1JvV1NrN1hHNTlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUV4RlpHZGxPMXh1WEc0dktpb3FMeUI5S1N4Y2JpOHFJRGdnS2k5Y2JpOHFLaW92SUNobWRXNWpkR2x2YmlodGIyUjFiR1VzSUdWNGNHOXlkSE1wSUh0Y2JseHVablZ1WTNScGIyNGdURWR5WVhCb1QySnFaV04wS0haSGNtRndhRTlpYW1WamRDa2dlMXh1SUNCMGFHbHpMblpIY21Gd2FFOWlhbVZqZENBOUlIWkhjbUZ3YUU5aWFtVmpkRHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQk1SM0poY0doUFltcGxZM1E3WEc1Y2JpOHFLaW92SUgwcExGeHVMeW9nT1NBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3lrZ2UxeHVYRzVtZFc1amRHbHZiaUJKUjJWdmJXVjBjbmtvS1NCN2ZWeHVYRzVKUjJWdmJXVjBjbmt1WTJGc1kxTmxjR0Z5WVhScGIyNUJiVzkxYm5RZ1BTQm1kVzVqZEdsdmJpQW9jbVZqZEVFc0lISmxZM1JDTENCdmRtVnliR0Z3UVcxdmRXNTBMQ0J6WlhCaGNtRjBhVzl1UW5WbVptVnlLU0I3WEc0Z0lHbG1JQ2doY21WamRFRXVhVzUwWlhKelpXTjBjeWh5WldOMFFpa3BJSHRjYmlBZ0lDQjBhSEp2ZHlCY0ltRnpjMlZ5ZENCbVlXbHNaV1JjSWp0Y2JpQWdmVnh1SUNCMllYSWdaR2x5WldOMGFXOXVjeUE5SUc1bGR5QkJjbkpoZVNneUtUdGNiaUFnU1VkbGIyMWxkSEo1TG1SbFkybGtaVVJwY21WamRHbHZibk5HYjNKUGRtVnliR0Z3Y0dsdVowNXZaR1Z6S0hKbFkzUkJMQ0J5WldOMFFpd2daR2x5WldOMGFXOXVjeWs3WEc0Z0lHOTJaWEpzWVhCQmJXOTFiblJiTUYwZ1BTQk5ZWFJvTG0xcGJpaHlaV04wUVM1blpYUlNhV2RvZENncExDQnlaV04wUWk1blpYUlNhV2RvZENncEtTQXRJRTFoZEdndWJXRjRLSEpsWTNSQkxuZ3NJSEpsWTNSQ0xuZ3BPMXh1SUNCdmRtVnliR0Z3UVcxdmRXNTBXekZkSUQwZ1RXRjBhQzV0YVc0b2NtVmpkRUV1WjJWMFFtOTBkRzl0S0Nrc0lISmxZM1JDTG1kbGRFSnZkSFJ2YlNncEtTQXRJRTFoZEdndWJXRjRLSEpsWTNSQkxua3NJSEpsWTNSQ0xua3BPMXh1SUNBdkx5QjFjR1JoZEdVZ2RHaGxJRzkyWlhKc1lYQndhVzVuSUdGdGIzVnVkSE1nWm05eUlIUm9aU0JtYjJ4c2IzZHBibWNnWTJGelpYTTZYRzRnSUdsbUlDaHlaV04wUVM1blpYUllLQ2tnUEQwZ2NtVmpkRUl1WjJWMFdDZ3BJQ1ltSUhKbFkzUkJMbWRsZEZKcFoyaDBLQ2tnUGowZ2NtVmpkRUl1WjJWMFVtbG5hSFFvS1NrZ2UxeHVJQ0FnSUc5MlpYSnNZWEJCYlc5MWJuUmJNRjBnS3owZ1RXRjBhQzV0YVc0b2NtVmpkRUl1WjJWMFdDZ3BJQzBnY21WamRFRXVaMlYwV0NncExDQnlaV04wUVM1blpYUlNhV2RvZENncElDMGdjbVZqZEVJdVoyVjBVbWxuYUhRb0tTazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2NtVmpkRUl1WjJWMFdDZ3BJRHc5SUhKbFkzUkJMbWRsZEZnb0tTQW1KaUJ5WldOMFFpNW5aWFJTYVdkb2RDZ3BJRDQ5SUhKbFkzUkJMbWRsZEZKcFoyaDBLQ2twSUh0Y2JpQWdJQ0J2ZG1WeWJHRndRVzF2ZFc1MFd6QmRJQ3M5SUUxaGRHZ3ViV2x1S0hKbFkzUkJMbWRsZEZnb0tTQXRJSEpsWTNSQ0xtZGxkRmdvS1N3Z2NtVmpkRUl1WjJWMFVtbG5hSFFvS1NBdElISmxZM1JCTG1kbGRGSnBaMmgwS0NrcE8xeHVJQ0I5WEc0Z0lHbG1JQ2h5WldOMFFTNW5aWFJaS0NrZ1BEMGdjbVZqZEVJdVoyVjBXU2dwSUNZbUlISmxZM1JCTG1kbGRFSnZkSFJ2YlNncElENDlJSEpsWTNSQ0xtZGxkRUp2ZEhSdmJTZ3BLU0I3WEc0Z0lDQWdiM1psY214aGNFRnRiM1Z1ZEZzeFhTQXJQU0JOWVhSb0xtMXBiaWh5WldOMFFpNW5aWFJaS0NrZ0xTQnlaV04wUVM1blpYUlpLQ2tzSUhKbFkzUkJMbWRsZEVKdmRIUnZiU2dwSUMwZ2NtVmpkRUl1WjJWMFFtOTBkRzl0S0NrcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hKbFkzUkNMbWRsZEZrb0tTQThQU0J5WldOMFFTNW5aWFJaS0NrZ0ppWWdjbVZqZEVJdVoyVjBRbTkwZEc5dEtDa2dQajBnY21WamRFRXVaMlYwUW05MGRHOXRLQ2twSUh0Y2JpQWdJQ0J2ZG1WeWJHRndRVzF2ZFc1MFd6RmRJQ3M5SUUxaGRHZ3ViV2x1S0hKbFkzUkJMbWRsZEZrb0tTQXRJSEpsWTNSQ0xtZGxkRmtvS1N3Z2NtVmpkRUl1WjJWMFFtOTBkRzl0S0NrZ0xTQnlaV04wUVM1blpYUkNiM1IwYjIwb0tTazdYRzRnSUgxY2JseHVJQ0F2THlCbWFXNWtJSE5zYjNCbElHOW1JSFJvWlNCc2FXNWxJSEJoYzNObGN5QjBkMjhnWTJWdWRHVnljMXh1SUNCMllYSWdjMnh2Y0dVZ1BTQk5ZWFJvTG1GaWN5Z29jbVZqZEVJdVoyVjBRMlZ1ZEdWeVdTZ3BJQzBnY21WamRFRXVaMlYwUTJWdWRHVnlXU2dwS1NBdklDaHlaV04wUWk1blpYUkRaVzUwWlhKWUtDa2dMU0J5WldOMFFTNW5aWFJEWlc1MFpYSllLQ2twS1R0Y2JpQWdMeThnYVdZZ1kyVnVkR1Z5Y3lCaGNtVWdiM1psY214aGNIQmxaRnh1SUNCcFppQW9jbVZqZEVJdVoyVjBRMlZ1ZEdWeVdTZ3BJRDA5SUhKbFkzUkJMbWRsZEVObGJuUmxjbGtvS1NBbUppQnlaV04wUWk1blpYUkRaVzUwWlhKWUtDa2dQVDBnY21WamRFRXVaMlYwUTJWdWRHVnlXQ2dwS1NCN1hHNGdJQ0FnTHk4Z1lYTnpkVzFsSUhSb1pTQnpiRzl3WlNCcGN5QXhJQ2cwTlNCa1pXZHlaV1VwWEc0Z0lDQWdjMnh2Y0dVZ1BTQXhMakE3WEc0Z0lIMWNibHh1SUNCMllYSWdiVzkyWlVKNVdTQTlJSE5zYjNCbElDb2diM1psY214aGNFRnRiM1Z1ZEZzd1hUdGNiaUFnZG1GeUlHMXZkbVZDZVZnZ1BTQnZkbVZ5YkdGd1FXMXZkVzUwV3pGZElDOGdjMnh2Y0dVN1hHNGdJR2xtSUNodmRtVnliR0Z3UVcxdmRXNTBXekJkSUR3Z2JXOTJaVUo1V0NrZ2UxeHVJQ0FnSUcxdmRtVkNlVmdnUFNCdmRtVnliR0Z3UVcxdmRXNTBXekJkTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUcxdmRtVkNlVmtnUFNCdmRtVnliR0Z3UVcxdmRXNTBXekZkTzF4dUlDQjlYRzRnSUM4dklISmxkSFZ5YmlCb1lXeG1JSFJvWlNCaGJXOTFiblFnYzI4Z2RHaGhkQ0JwWmlCbFlXTm9JSEpsWTNSaGJtZHNaU0JwY3lCdGIzWmxaQ0JpZVNCMGFHVnpaVnh1SUNBdkx5QmhiVzkxYm5SeklHbHVJRzl3Y0c5emFYUmxJR1JwY21WamRHbHZibk1zSUc5MlpYSnNZWEFnZDJsc2JDQmlaU0J5WlhOdmJIWmxaRnh1SUNCdmRtVnliR0Z3UVcxdmRXNTBXekJkSUQwZ0xURWdLaUJrYVhKbFkzUnBiMjV6V3pCZElDb2dLRzF2ZG1WQ2VWZ2dMeUF5SUNzZ2MyVndZWEpoZEdsdmJrSjFabVpsY2lrN1hHNGdJRzkyWlhKc1lYQkJiVzkxYm5SYk1WMGdQU0F0TVNBcUlHUnBjbVZqZEdsdmJuTmJNVjBnS2lBb2JXOTJaVUo1V1NBdklESWdLeUJ6WlhCaGNtRjBhVzl1UW5WbVptVnlLVHRjYm4wN1hHNWNia2xIWlc5dFpYUnllUzVrWldOcFpHVkVhWEpsWTNScGIyNXpSbTl5VDNabGNteGhjSEJwYm1kT2IyUmxjeUE5SUdaMWJtTjBhVzl1SUNoeVpXTjBRU3dnY21WamRFSXNJR1JwY21WamRHbHZibk1wSUh0Y2JpQWdhV1lnS0hKbFkzUkJMbWRsZEVObGJuUmxjbGdvS1NBOElISmxZM1JDTG1kbGRFTmxiblJsY2xnb0tTa2dlMXh1SUNBZ0lHUnBjbVZqZEdsdmJuTmJNRjBnUFNBdE1UdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmthWEpsWTNScGIyNXpXekJkSUQwZ01UdGNiaUFnZlZ4dVhHNGdJR2xtSUNoeVpXTjBRUzVuWlhSRFpXNTBaWEpaS0NrZ1BDQnlaV04wUWk1blpYUkRaVzUwWlhKWktDa3BJSHRjYmlBZ0lDQmthWEpsWTNScGIyNXpXekZkSUQwZ0xURTdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdaR2x5WldOMGFXOXVjMXN4WFNBOUlERTdYRzRnSUgxY2JuMDdYRzVjYmtsSFpXOXRaWFJ5ZVM1blpYUkpiblJsY25ObFkzUnBiMjR5SUQwZ1puVnVZM1JwYjI0Z0tISmxZM1JCTENCeVpXTjBRaXdnY21WemRXeDBLU0I3WEc0Z0lDOHZjbVZ6ZFd4MFd6QXRNVjBnZDJsc2JDQmpiMjUwWVdsdUlHTnNhWEJRYjJsdWRDQnZaaUJ5WldOMFFTd2djbVZ6ZFd4MFd6SXRNMTBnZDJsc2JDQmpiMjUwWVdsdUlHTnNhWEJRYjJsdWRDQnZaaUJ5WldOMFFseHVJQ0IyWVhJZ2NERjRJRDBnY21WamRFRXVaMlYwUTJWdWRHVnlXQ2dwTzF4dUlDQjJZWElnY0RGNUlEMGdjbVZqZEVFdVoyVjBRMlZ1ZEdWeVdTZ3BPMXh1SUNCMllYSWdjREo0SUQwZ2NtVmpkRUl1WjJWMFEyVnVkR1Z5V0NncE8xeHVJQ0IyWVhJZ2NESjVJRDBnY21WamRFSXVaMlYwUTJWdWRHVnlXU2dwTzF4dVhHNGdJQzh2YVdZZ2RIZHZJSEpsWTNSaGJtZHNaWE1nYVc1MFpYSnpaV04wTENCMGFHVnVJR05zYVhCd2FXNW5JSEJ2YVc1MGN5QmhjbVVnWTJWdWRHVnljMXh1SUNCcFppQW9jbVZqZEVFdWFXNTBaWEp6WldOMGN5aHlaV04wUWlrcElIdGNiaUFnSUNCeVpYTjFiSFJiTUYwZ1BTQndNWGc3WEc0Z0lDQWdjbVZ6ZFd4MFd6RmRJRDBnY0RGNU8xeHVJQ0FnSUhKbGMzVnNkRnN5WFNBOUlIQXllRHRjYmlBZ0lDQnlaWE4xYkhSYk0xMGdQU0J3TW5rN1hHNGdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJSDFjYmlBZ0x5OTJZWEpwWVdKc1pYTWdabTl5SUhKbFkzUkJYRzRnSUhaaGNpQjBiM0JNWldaMFFYZ2dQU0J5WldOMFFTNW5aWFJZS0NrN1hHNGdJSFpoY2lCMGIzQk1aV1owUVhrZ1BTQnlaV04wUVM1blpYUlpLQ2s3WEc0Z0lIWmhjaUIwYjNCU2FXZG9kRUY0SUQwZ2NtVmpkRUV1WjJWMFVtbG5hSFFvS1R0Y2JpQWdkbUZ5SUdKdmRIUnZiVXhsWm5SQmVDQTlJSEpsWTNSQkxtZGxkRmdvS1R0Y2JpQWdkbUZ5SUdKdmRIUnZiVXhsWm5SQmVTQTlJSEpsWTNSQkxtZGxkRUp2ZEhSdmJTZ3BPMXh1SUNCMllYSWdZbTkwZEc5dFVtbG5hSFJCZUNBOUlISmxZM1JCTG1kbGRGSnBaMmgwS0NrN1hHNGdJSFpoY2lCb1lXeG1WMmxrZEdoQklEMGdjbVZqZEVFdVoyVjBWMmxrZEdoSVlXeG1LQ2s3WEc0Z0lIWmhjaUJvWVd4bVNHVnBaMmgwUVNBOUlISmxZM1JCTG1kbGRFaGxhV2RvZEVoaGJHWW9LVHRjYmlBZ0x5OTJZWEpwWVdKc1pYTWdabTl5SUhKbFkzUkNYRzRnSUhaaGNpQjBiM0JNWldaMFFuZ2dQU0J5WldOMFFpNW5aWFJZS0NrN1hHNGdJSFpoY2lCMGIzQk1aV1owUW5rZ1BTQnlaV04wUWk1blpYUlpLQ2s3WEc0Z0lIWmhjaUIwYjNCU2FXZG9kRUo0SUQwZ2NtVmpkRUl1WjJWMFVtbG5hSFFvS1R0Y2JpQWdkbUZ5SUdKdmRIUnZiVXhsWm5SQ2VDQTlJSEpsWTNSQ0xtZGxkRmdvS1R0Y2JpQWdkbUZ5SUdKdmRIUnZiVXhsWm5SQ2VTQTlJSEpsWTNSQ0xtZGxkRUp2ZEhSdmJTZ3BPMXh1SUNCMllYSWdZbTkwZEc5dFVtbG5hSFJDZUNBOUlISmxZM1JDTG1kbGRGSnBaMmgwS0NrN1hHNGdJSFpoY2lCb1lXeG1WMmxrZEdoQ0lEMGdjbVZqZEVJdVoyVjBWMmxrZEdoSVlXeG1LQ2s3WEc0Z0lIWmhjaUJvWVd4bVNHVnBaMmgwUWlBOUlISmxZM1JDTG1kbGRFaGxhV2RvZEVoaGJHWW9LVHRjYmlBZ0x5OW1iR0ZuSUhkb1pYUm9aWElnWTJ4cGNIQnBibWNnY0c5cGJuUnpJR0Z5WlNCbWIzVnVaRnh1SUNCMllYSWdZMnhwY0ZCdmFXNTBRVVp2ZFc1a0lEMGdabUZzYzJVN1hHNGdJSFpoY2lCamJHbHdVRzlwYm5SQ1JtOTFibVFnUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUJzYVc1bElHbHpJSFpsY25ScFkyRnNYRzRnSUdsbUlDaHdNWGdnUFQwZ2NESjRLU0I3WEc0Z0lDQWdhV1lnS0hBeGVTQStJSEF5ZVNrZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwV3pCZElEMGdjREY0TzF4dUlDQWdJQ0FnY21WemRXeDBXekZkSUQwZ2RHOXdUR1ZtZEVGNU8xeHVJQ0FnSUNBZ2NtVnpkV3gwV3pKZElEMGdjREo0TzF4dUlDQWdJQ0FnY21WemRXeDBXek5kSUQwZ1ltOTBkRzl0VEdWbWRFSjVPMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvY0RGNUlEd2djREo1S1NCN1hHNGdJQ0FnSUNCeVpYTjFiSFJiTUYwZ1BTQndNWGc3WEc0Z0lDQWdJQ0J5WlhOMWJIUmJNVjBnUFNCaWIzUjBiMjFNWldaMFFYazdYRzRnSUNBZ0lDQnlaWE4xYkhSYk1sMGdQU0J3TW5nN1hHNGdJQ0FnSUNCeVpYTjFiSFJiTTEwZ1BTQjBiM0JNWldaMFFuazdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDOHZibTkwSUd4cGJtVXNJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0F2THlCc2FXNWxJR2x6SUdodmNtbDZiMjUwWVd4Y2JpQWdaV3h6WlNCcFppQW9jREY1SUQwOUlIQXllU2tnZTF4dUlDQWdJQ0FnYVdZZ0tIQXhlQ0ErSUhBeWVDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhOMWJIUmJNRjBnUFNCMGIzQk1aV1owUVhnN1hHNGdJQ0FnSUNBZ0lISmxjM1ZzZEZzeFhTQTlJSEF4ZVR0Y2JpQWdJQ0FnSUNBZ2NtVnpkV3gwV3pKZElEMGdkRzl3VW1sbmFIUkNlRHRjYmlBZ0lDQWdJQ0FnY21WemRXeDBXek5kSUQwZ2NESjVPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIQXhlQ0E4SUhBeWVDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhOMWJIUmJNRjBnUFNCMGIzQlNhV2RvZEVGNE8xeHVJQ0FnSUNBZ0lDQnlaWE4xYkhSYk1WMGdQU0J3TVhrN1hHNGdJQ0FnSUNBZ0lISmxjM1ZzZEZzeVhTQTlJSFJ2Y0V4bFpuUkNlRHRjYmlBZ0lDQWdJQ0FnY21WemRXeDBXek5kSUQwZ2NESjVPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBdkwyNXZkQ0IyWVd4cFpDQnNhVzVsTENCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnTHk5emJHOXdaWE1nYjJZZ2NtVmpkRUVuY3lCaGJtUWdjbVZqZEVJbmN5QmthV0ZuYjI1aGJITmNiaUFnSUNBZ0lIWmhjaUJ6Ykc5d1pVRWdQU0J5WldOMFFTNW9aV2xuYUhRZ0x5QnlaV04wUVM1M2FXUjBhRHRjYmlBZ0lDQWdJSFpoY2lCemJHOXdaVUlnUFNCeVpXTjBRaTVvWldsbmFIUWdMeUJ5WldOMFFpNTNhV1IwYUR0Y2JseHVJQ0FnSUNBZ0x5OXpiRzl3WlNCdlppQnNhVzVsSUdKbGRIZGxaVzRnWTJWdWRHVnlJRzltSUhKbFkzUkJJR0Z1WkNCalpXNTBaWElnYjJZZ2NtVmpkRUpjYmlBZ0lDQWdJSFpoY2lCemJHOXdaVkJ5YVcxbElEMGdLSEF5ZVNBdElIQXhlU2tnTHlBb2NESjRJQzBnY0RGNEtUdGNiaUFnSUNBZ0lIWmhjaUJqWVhKa2FXNWhiRVJwY21WamRHbHZia0U3WEc0Z0lDQWdJQ0IyWVhJZ1kyRnlaR2x1WVd4RWFYSmxZM1JwYjI1Q08xeHVJQ0FnSUNBZ2RtRnlJSFJsYlhCUWIybHVkRUY0TzF4dUlDQWdJQ0FnZG1GeUlIUmxiWEJRYjJsdWRFRjVPMXh1SUNBZ0lDQWdkbUZ5SUhSbGJYQlFiMmx1ZEVKNE8xeHVJQ0FnSUNBZ2RtRnlJSFJsYlhCUWIybHVkRUo1TzF4dVhHNGdJQ0FnSUNBdkwyUmxkR1Z5YldsdVpTQjNhR1YwYUdWeUlHTnNhWEJ3YVc1bklIQnZhVzUwSUdseklIUm9aU0JqYjNKdVpYSWdiMllnYm05a1pVRmNiaUFnSUNBZ0lHbG1JQ2d0YzJ4dmNHVkJJRDA5SUhOc2IzQmxVSEpwYldVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hBeGVDQStJSEF5ZUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RGc3dYU0E5SUdKdmRIUnZiVXhsWm5SQmVEdGNiaUFnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJNVjBnUFNCaWIzUjBiMjFNWldaMFFYazdYRzRnSUNBZ0lDQWdJQ0FnWTJ4cGNGQnZhVzUwUVVadmRXNWtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJNRjBnUFNCMGIzQlNhV2RvZEVGNE8xeHVJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RGc3hYU0E5SUhSdmNFeGxablJCZVR0Y2JpQWdJQ0FnSUNBZ0lDQmpiR2x3VUc5cGJuUkJSbTkxYm1RZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tITnNiM0JsUVNBOVBTQnpiRzl3WlZCeWFXMWxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHdNWGdnUGlCd01uZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJiTUYwZ1BTQjBiM0JNWldaMFFYZzdYRzRnSUNBZ0lDQWdJQ0FnY21WemRXeDBXekZkSUQwZ2RHOXdUR1ZtZEVGNU8xeHVJQ0FnSUNBZ0lDQWdJR05zYVhCUWIybHVkRUZHYjNWdVpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MFd6QmRJRDBnWW05MGRHOXRVbWxuYUhSQmVEdGNiaUFnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJNVjBnUFNCaWIzUjBiMjFNWldaMFFYazdYRzRnSUNBZ0lDQWdJQ0FnWTJ4cGNGQnZhVzUwUVVadmRXNWtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2TDJSbGRHVnliV2x1WlNCM2FHVjBhR1Z5SUdOc2FYQndhVzVuSUhCdmFXNTBJR2x6SUhSb1pTQmpiM0p1WlhJZ2IyWWdibTlrWlVKY2JpQWdJQ0FnSUdsbUlDZ3RjMnh2Y0dWQ0lEMDlJSE5zYjNCbFVISnBiV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEF5ZUNBK0lIQXhlQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxjM1ZzZEZzeVhTQTlJR0p2ZEhSdmJVeGxablJDZUR0Y2JpQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSYk0xMGdQU0JpYjNSMGIyMU1aV1owUW5rN1hHNGdJQ0FnSUNBZ0lDQWdZMnhwY0ZCdmFXNTBRa1p2ZFc1a0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSYk1sMGdQU0IwYjNCU2FXZG9kRUo0TzF4dUlDQWdJQ0FnSUNBZ0lISmxjM1ZzZEZzelhTQTlJSFJ2Y0V4bFpuUkNlVHRjYmlBZ0lDQWdJQ0FnSUNCamJHbHdVRzlwYm5SQ1JtOTFibVFnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hOc2IzQmxRaUE5UFNCemJHOXdaVkJ5YVcxbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNod01uZ2dQaUJ3TVhncElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJNbDBnUFNCMGIzQk1aV1owUW5nN1hHNGdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MFd6TmRJRDBnZEc5d1RHVm1kRUo1TzF4dUlDQWdJQ0FnSUNBZ0lHTnNhWEJRYjJsdWRFSkdiM1Z1WkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVnpkV3gwV3pKZElEMGdZbTkwZEc5dFVtbG5hSFJDZUR0Y2JpQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSYk0xMGdQU0JpYjNSMGIyMU1aV1owUW5rN1hHNGdJQ0FnSUNBZ0lDQWdZMnhwY0ZCdmFXNTBRa1p2ZFc1a0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMMmxtSUdKdmRHZ2dZMnhwY0hCcGJtY2djRzlwYm5SeklHRnlaU0JqYjNKdVpYSnpYRzRnSUNBZ0lDQnBaaUFvWTJ4cGNGQnZhVzUwUVVadmRXNWtJQ1ltSUdOc2FYQlFiMmx1ZEVKR2IzVnVaQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2WkdWMFpYSnRhVzVsSUVOaGNtUnBibUZzSUVScGNtVmpkR2x2YmlCdlppQnlaV04wWVc1bmJHVnpYRzRnSUNBZ0lDQnBaaUFvY0RGNElENGdjREo0S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h3TVhrZ1BpQndNbmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpZWEprYVc1aGJFUnBjbVZqZEdsdmJrRWdQU0JKUjJWdmJXVjBjbmt1WjJWMFEyRnlaR2x1WVd4RWFYSmxZM1JwYjI0b2MyeHZjR1ZCTENCemJHOXdaVkJ5YVcxbExDQTBLVHRjYmlBZ0lDQWdJQ0FnSUNCallYSmthVzVoYkVScGNtVmpkR2x2YmtJZ1BTQkpSMlZ2YldWMGNua3VaMlYwUTJGeVpHbHVZV3hFYVhKbFkzUnBiMjRvYzJ4dmNHVkNMQ0J6Ykc5d1pWQnlhVzFsTENBeUtUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JqWVhKa2FXNWhiRVJwY21WamRHbHZia0VnUFNCSlIyVnZiV1YwY25rdVoyVjBRMkZ5WkdsdVlXeEVhWEpsWTNScGIyNG9MWE5zYjNCbFFTd2djMnh2Y0dWUWNtbHRaU3dnTXlrN1hHNGdJQ0FnSUNBZ0lDQWdZMkZ5WkdsdVlXeEVhWEpsWTNScGIyNUNJRDBnU1VkbGIyMWxkSEo1TG1kbGRFTmhjbVJwYm1Gc1JHbHlaV04wYVc5dUtDMXpiRzl3WlVJc0lITnNiM0JsVUhKcGJXVXNJREVwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCcFppQW9jREY1SUQ0Z2NESjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1kyRnlaR2x1WVd4RWFYSmxZM1JwYjI1QklEMGdTVWRsYjIxbGRISjVMbWRsZEVOaGNtUnBibUZzUkdseVpXTjBhVzl1S0MxemJHOXdaVUVzSUhOc2IzQmxVSEpwYldVc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUdOaGNtUnBibUZzUkdseVpXTjBhVzl1UWlBOUlFbEhaVzl0WlhSeWVTNW5aWFJEWVhKa2FXNWhiRVJwY21WamRHbHZiaWd0YzJ4dmNHVkNMQ0J6Ykc5d1pWQnlhVzFsTENBektUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0JqWVhKa2FXNWhiRVJwY21WamRHbHZia0VnUFNCSlIyVnZiV1YwY25rdVoyVjBRMkZ5WkdsdVlXeEVhWEpsWTNScGIyNG9jMnh2Y0dWQkxDQnpiRzl3WlZCeWFXMWxMQ0F5S1R0Y2JpQWdJQ0FnSUNBZ0lDQmpZWEprYVc1aGJFUnBjbVZqZEdsdmJrSWdQU0JKUjJWdmJXVjBjbmt1WjJWMFEyRnlaR2x1WVd4RWFYSmxZM1JwYjI0b2MyeHZjR1ZDTENCemJHOXdaVkJ5YVcxbExDQTBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnTHk5allXeGpkV3hoZEdVZ1kyeHBjSEJwYm1jZ1VHOXBiblFnYVdZZ2FYUWdhWE1nYm05MElHWnZkVzVrSUdKbFptOXlaVnh1SUNBZ0lDQWdhV1lnS0NGamJHbHdVRzlwYm5SQlJtOTFibVFwSUh0Y2JpQWdJQ0FnSUNBZ2MzZHBkR05vSUNoallYSmthVzVoYkVScGNtVmpkR2x2YmtFcElIdGNiaUFnSUNBZ0lDQWdJQ0JqWVhObElERTZYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdVRzlwYm5SQmVTQTlJSFJ2Y0V4bFpuUkJlVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmxiWEJRYjJsdWRFRjRJRDBnY0RGNElDc2dMV2hoYkdaSVpXbG5hSFJCSUM4Z2MyeHZjR1ZRY21sdFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkRnN3WFNBOUlIUmxiWEJRYjJsdWRFRjRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwV3pGZElEMGdkR1Z0Y0ZCdmFXNTBRWGs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSURJNlhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlcxd1VHOXBiblJCZUNBOUlHSnZkSFJ2YlZKcFoyaDBRWGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3VUc5cGJuUkJlU0E5SUhBeGVTQXJJR2hoYkdaWGFXUjBhRUVnS2lCemJHOXdaVkJ5YVcxbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBXekJkSUQwZ2RHVnRjRkJ2YVc1MFFYZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJiTVYwZ1BTQjBaVzF3VUc5cGJuUkJlVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lHTmhjMlVnTXpwY2JpQWdJQ0FnSUNBZ0lDQWdJSFJsYlhCUWIybHVkRUY1SUQwZ1ltOTBkRzl0VEdWbWRFRjVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVnRjRkJ2YVc1MFFYZ2dQU0J3TVhnZ0t5Qm9ZV3htU0dWcFoyaDBRU0F2SUhOc2IzQmxVSEpwYldVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUmJNRjBnUFNCMFpXMXdVRzlwYm5SQmVEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkRnN4WFNBOUlIUmxiWEJRYjJsdWRFRjVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ1kyRnpaU0EwT2x4dUlDQWdJQ0FnSUNBZ0lDQWdkR1Z0Y0ZCdmFXNTBRWGdnUFNCaWIzUjBiMjFNWldaMFFYZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdVRzlwYm5SQmVTQTlJSEF4ZVNBcklDMW9ZV3htVjJsa2RHaEJJQ29nYzJ4dmNHVlFjbWx0WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RGc3dYU0E5SUhSbGJYQlFiMmx1ZEVGNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemRXeDBXekZkSUQwZ2RHVnRjRkJ2YVc1MFFYazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tDRmpiR2x3VUc5cGJuUkNSbTkxYm1RcElIdGNiaUFnSUNBZ0lDQWdjM2RwZEdOb0lDaGpZWEprYVc1aGJFUnBjbVZqZEdsdmJrSXBJSHRjYmlBZ0lDQWdJQ0FnSUNCallYTmxJREU2WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3VUc5cGJuUkNlU0E5SUhSdmNFeGxablJDZVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJsYlhCUWIybHVkRUo0SUQwZ2NESjRJQ3NnTFdoaGJHWklaV2xuYUhSQ0lDOGdjMnh2Y0dWUWNtbHRaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEZzeVhTQTlJSFJsYlhCUWIybHVkRUo0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6ZFd4MFd6TmRJRDBnZEdWdGNGQnZhVzUwUW5rN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0JqWVhObElESTZYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdVRzlwYm5SQ2VDQTlJR0p2ZEhSdmJWSnBaMmgwUW5nN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlcxd1VHOXBiblJDZVNBOUlIQXllU0FySUdoaGJHWlhhV1IwYUVJZ0tpQnpiRzl3WlZCeWFXMWxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwV3pKZElEMGdkR1Z0Y0ZCdmFXNTBRbmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhSYk0xMGdQU0IwWlcxd1VHOXBiblJDZVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJR05oYzJVZ016cGNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGJYQlFiMmx1ZEVKNUlEMGdZbTkwZEc5dFRHVm1kRUo1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR1Z0Y0ZCdmFXNTBRbmdnUFNCd01uZ2dLeUJvWVd4bVNHVnBaMmgwUWlBdklITnNiM0JsVUhKcGJXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFJiTWwwZ1BTQjBaVzF3VUc5cGJuUkNlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEZzelhTQTlJSFJsYlhCUWIybHVkRUo1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdZMkZ6WlNBME9seHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWdGNGQnZhVzUwUW5nZ1BTQmliM1IwYjIxTVpXWjBRbmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3VUc5cGJuUkNlU0E5SUhBeWVTQXJJQzFvWVd4bVYybGtkR2hDSUNvZ2MyeHZjR1ZRY21sdFpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkRnN5WFNBOUlIUmxiWEJRYjJsdWRFSjRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpkV3gwV3pOZElEMGdkR1Z0Y0ZCdmFXNTBRbms3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdjbVYwZFhKdUlHWmhiSE5sTzF4dWZUdGNibHh1U1VkbGIyMWxkSEo1TG1kbGRFTmhjbVJwYm1Gc1JHbHlaV04wYVc5dUlEMGdablZ1WTNScGIyNGdLSE5zYjNCbExDQnpiRzl3WlZCeWFXMWxMQ0JzYVc1bEtTQjdYRzRnSUdsbUlDaHpiRzl3WlNBK0lITnNiM0JsVUhKcGJXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2JHbHVaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhSMWNtNGdNU0FySUd4cGJtVWdKU0EwTzF4dUlDQjlYRzU5TzF4dVhHNUpSMlZ2YldWMGNua3VaMlYwU1c1MFpYSnpaV04wYVc5dUlEMGdablZ1WTNScGIyNGdLSE14TENCek1pd2daakVzSUdZeUtTQjdYRzRnSUdsbUlDaG1NaUE5UFNCdWRXeHNLU0I3WEc0Z0lDQWdjbVYwZFhKdUlFbEhaVzl0WlhSeWVTNW5aWFJKYm5SbGNuTmxZM1JwYjI0eUtITXhMQ0J6TWl3Z1pqRXBPMXh1SUNCOVhHNGdJSFpoY2lCNE1TQTlJSE14TG5nN1hHNGdJSFpoY2lCNU1TQTlJSE14TG5rN1hHNGdJSFpoY2lCNE1pQTlJSE15TG5nN1hHNGdJSFpoY2lCNU1pQTlJSE15TG5rN1hHNGdJSFpoY2lCNE15QTlJR1l4TG5nN1hHNGdJSFpoY2lCNU15QTlJR1l4TG5rN1hHNGdJSFpoY2lCNE5DQTlJR1l5TG5nN1hHNGdJSFpoY2lCNU5DQTlJR1l5TG5rN1hHNGdJSFpoY2lCNExDQjVPeUF2THlCcGJuUmxjbk5sWTNScGIyNGdjRzlwYm5SY2JpQWdkbUZ5SUdFeExDQmhNaXdnWWpFc0lHSXlMQ0JqTVN3Z1l6STdJQzh2SUdOdlpXWm1hV05wWlc1MGN5QnZaaUJzYVc1bElHVnhibk11WEc0Z0lIWmhjaUJrWlc1dmJUdGNibHh1SUNCaE1TQTlJSGt5SUMwZ2VURTdYRzRnSUdJeElEMGdlREVnTFNCNE1qdGNiaUFnWXpFZ1BTQjRNaUFxSUhreElDMGdlREVnS2lCNU1qc2dMeThnZXlCaE1TcDRJQ3NnWWpFcWVTQXJJR014SUQwZ01DQnBjeUJzYVc1bElERWdmVnh1WEc0Z0lHRXlJRDBnZVRRZ0xTQjVNenRjYmlBZ1lqSWdQU0I0TXlBdElIZzBPMXh1SUNCak1pQTlJSGcwSUNvZ2VUTWdMU0I0TXlBcUlIazBPeUF2THlCN0lHRXlLbmdnS3lCaU1pcDVJQ3NnWXpJZ1BTQXdJR2x6SUd4cGJtVWdNaUI5WEc1Y2JpQWdaR1Z1YjIwZ1BTQmhNU0FxSUdJeUlDMGdZVElnS2lCaU1UdGNibHh1SUNCcFppQW9aR1Z1YjIwZ1BUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQjlYRzVjYmlBZ2VDQTlJQ2hpTVNBcUlHTXlJQzBnWWpJZ0tpQmpNU2tnTHlCa1pXNXZiVHRjYmlBZ2VTQTlJQ2hoTWlBcUlHTXhJQzBnWVRFZ0tpQmpNaWtnTHlCa1pXNXZiVHRjYmx4dUlDQnlaWFIxY200Z2JtVjNJRkJ2YVc1MEtIZ3NJSGtwTzF4dWZUdGNibHh1THk4Z0xTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmk4dklGTmxZM1JwYjI0NklFTnNZWE56SUVOdmJuTjBZVzUwYzF4dUx5OGdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpOHFLbHh5WEc0Z0tpQlRiMjFsSUhWelpXWjFiQ0J3Y21VdFkyRnNZM1ZzWVhSbFpDQmpiMjV6ZEdGdWRITmNjbHh1SUNvdlhHNUpSMlZ2YldWMGNua3VTRUZNUmw5UVNTQTlJREF1TlNBcUlFMWhkR2d1VUVrN1hHNUpSMlZ2YldWMGNua3VUMDVGWDBGT1JGOUlRVXhHWDFCSklEMGdNUzQxSUNvZ1RXRjBhQzVRU1R0Y2JrbEhaVzl0WlhSeWVTNVVWMDlmVUVrZ1BTQXlMakFnS2lCTllYUm9MbEJKTzF4dVNVZGxiMjFsZEhKNUxsUklVa1ZGWDFCSklEMGdNeTR3SUNvZ1RXRjBhQzVRU1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkpSMlZ2YldWMGNuazdYRzVjYmk4cUtpb3ZJSDBwTEZ4dUx5b2dNVEFnS2k5Y2JpOHFLaW92SUNobWRXNWpkR2x2YmlodGIyUjFiR1VzSUdWNGNHOXlkSE1wSUh0Y2JseHVablZ1WTNScGIyNGdTVTFoZEdnb0tTQjdmVnh1WEc0dktpcGNjbHh1SUNvZ1ZHaHBjeUJ0WlhSb2IyUWdjbVYwZFhKdWN5QjBhR1VnYzJsbmJpQnZaaUIwYUdVZ2FXNXdkWFFnZG1Gc2RXVXVYSEpjYmlBcUwxeHVTVTFoZEdndWMybG5iaUE5SUdaMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQnBaaUFvZG1Gc2RXVWdQaUF3S1NCN1hHNGdJQ0FnY21WMGRYSnVJREU3WEc0Z0lIMGdaV3h6WlNCcFppQW9kbUZzZFdVZ1BDQXdLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsZEhWeWJpQXdPMXh1SUNCOVhHNTlPMXh1WEc1SlRXRjBhQzVtYkc5dmNpQTlJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc2RXVWdQQ0F3SUQ4Z1RXRjBhQzVqWldsc0tIWmhiSFZsS1NBNklFMWhkR2d1Wm14dmIzSW9kbUZzZFdVcE8xeHVmVHRjYmx4dVNVMWhkR2d1WTJWcGJDQTlJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc2RXVWdQQ0F3SUQ4Z1RXRjBhQzVtYkc5dmNpaDJZV3gxWlNrZ09pQk5ZWFJvTG1ObGFXd29kbUZzZFdVcE8xeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCSlRXRjBhRHRjYmx4dUx5b3FLaThnZlNrc1hHNHZLaUF4TVNBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5a2dlMXh1WEc1MllYSWdURWR5WVhCb1QySnFaV04wSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5ZzRLVHRjYm5aaGNpQkpiblJsWjJWeUlEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd4TWlrN1hHNTJZWElnVEdGNWIzVjBRMjl1YzNSaGJuUnpJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnektUdGNiblpoY2lCTVIzSmhjR2hOWVc1aFoyVnlJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlnMktUdGNiblpoY2lCTVRtOWtaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01UTXBPMXh1ZG1GeUlFeEZaR2RsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5ZzNLVHRjYm5aaGNpQlNaV04wWVc1bmJHVkVJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlneE5DazdYRzUyWVhJZ1VHOXBiblFnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktERTRLVHRjYm5aaGNpQk1hVzVyWldSTWFYTjBJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlneE9TazdYRzVjYm1aMWJtTjBhVzl1SUV4SGNtRndhQ2h3WVhKbGJuUXNJRzlpYWpJc0lIWkhjbUZ3YUNrZ2UxeHVJQ0JNUjNKaGNHaFBZbXBsWTNRdVkyRnNiQ2gwYUdsekxDQjJSM0poY0dncE8xeHVJQ0IwYUdsekxtVnpkR2x0WVhSbFpGTnBlbVVnUFNCSmJuUmxaMlZ5TGsxSlRsOVdRVXhWUlR0Y2JpQWdkR2hwY3k1dFlYSm5hVzRnUFNCTVlYbHZkWFJEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlIVWtGUVNGOU5RVkpIU1U0N1hHNGdJSFJvYVhNdVpXUm5aWE1nUFNCYlhUdGNiaUFnZEdocGN5NXViMlJsY3lBOUlGdGRPMXh1SUNCMGFHbHpMbWx6UTI5dWJtVmpkR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lIUm9hWE11Y0dGeVpXNTBJRDBnY0dGeVpXNTBPMXh1WEc0Z0lHbG1JQ2h2WW1veUlDRTlJRzUxYkd3Z0ppWWdiMkpxTWlCcGJuTjBZVzVqWlc5bUlFeEhjbUZ3YUUxaGJtRm5aWElwSUh0Y2JpQWdJQ0IwYUdsekxtZHlZWEJvVFdGdVlXZGxjaUE5SUc5aWFqSTdYRzRnSUgwZ1pXeHpaU0JwWmlBb2IySnFNaUFoUFNCdWRXeHNJQ1ltSUc5aWFqSWdhVzV6ZEdGdVkyVnZaaUJNWVhsdmRYUXBJSHRjYmlBZ0lDQjBhR2x6TG1keVlYQm9UV0Z1WVdkbGNpQTlJRzlpYWpJdVozSmhjR2hOWVc1aFoyVnlPMXh1SUNCOVhHNTlYRzVjYmt4SGNtRndhQzV3Y205MGIzUjVjR1VnUFNCUFltcGxZM1F1WTNKbFlYUmxLRXhIY21Gd2FFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVcE8xeHVabTl5SUNoMllYSWdjSEp2Y0NCcGJpQk1SM0poY0doUFltcGxZM1FwSUh0Y2JpQWdURWR5WVhCb1czQnliM0JkSUQwZ1RFZHlZWEJvVDJKcVpXTjBXM0J5YjNCZE8xeHVmVnh1WEc1TVIzSmhjR2d1Y0hKdmRHOTBlWEJsTG1kbGRFNXZaR1Z6SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXViMlJsY3p0Y2JuMDdYRzVjYmt4SGNtRndhQzV3Y205MGIzUjVjR1V1WjJWMFJXUm5aWE1nUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhKbGRIVnliaUIwYUdsekxtVmtaMlZ6TzF4dWZUdGNibHh1VEVkeVlYQm9MbkJ5YjNSdmRIbHdaUzVuWlhSSGNtRndhRTFoYm1GblpYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG1keVlYQm9UV0Z1WVdkbGNqdGNibjA3WEc1Y2JreEhjbUZ3YUM1d2NtOTBiM1I1Y0dVdVoyVjBVR0Z5Wlc1MElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTV3WVhKbGJuUTdYRzU5TzF4dVhHNU1SM0poY0dndWNISnZkRzkwZVhCbExtZGxkRXhsWm5RZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbXhsWm5RN1hHNTlPMXh1WEc1TVIzSmhjR2d1Y0hKdmRHOTBlWEJsTG1kbGRGSnBaMmgwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXlhV2RvZER0Y2JuMDdYRzVjYmt4SGNtRndhQzV3Y205MGIzUjVjR1V1WjJWMFZHOXdJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1MGIzQTdYRzU5TzF4dVhHNU1SM0poY0dndWNISnZkRzkwZVhCbExtZGxkRUp2ZEhSdmJTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11WW05MGRHOXRPMXh1ZlR0Y2JseHVURWR5WVhCb0xuQnliM1J2ZEhsd1pTNXBjME52Ym01bFkzUmxaQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdWFYTkRiMjV1WldOMFpXUTdYRzU5TzF4dVhHNU1SM0poY0dndWNISnZkRzkwZVhCbExtRmtaQ0E5SUdaMWJtTjBhVzl1SUNodlltb3hMQ0J6YjNWeVkyVk9iMlJsTENCMFlYSm5aWFJPYjJSbEtTQjdYRzRnSUdsbUlDaHpiM1Z5WTJWT2IyUmxJRDA5SUc1MWJHd2dKaVlnZEdGeVoyVjBUbTlrWlNBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnZG1GeUlHNWxkMDV2WkdVZ1BTQnZZbW94TzF4dUlDQWdJR2xtSUNoMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2lBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJjSWtkeVlYQm9JR2hoY3lCdWJ5Qm5jbUZ3YUNCdFozSWhYQ0k3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxtZGxkRTV2WkdWektDa3VhVzVrWlhoUFppaHVaWGRPYjJSbEtTQStJQzB4S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJjSWs1dlpHVWdZV3h5WldGa2VTQnBiaUJuY21Gd2FDRmNJanRjYmlBZ0lDQjlYRzRnSUNBZ2JtVjNUbTlrWlM1dmQyNWxjaUE5SUhSb2FYTTdYRzRnSUNBZ2RHaHBjeTVuWlhST2IyUmxjeWdwTG5CMWMyZ29ibVYzVG05a1pTazdYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNUbTlrWlR0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdibVYzUldSblpTQTlJRzlpYWpFN1hHNGdJQ0FnYVdZZ0tDRW9kR2hwY3k1blpYUk9iMlJsY3lncExtbHVaR1Y0VDJZb2MyOTFjbU5sVG05a1pTa2dQaUF0TVNBbUppQjBhR2x6TG1kbGRFNXZaR1Z6S0NrdWFXNWtaWGhQWmloMFlYSm5aWFJPYjJSbEtTQStJQzB4S1NrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnWENKVGIzVnlZMlVnYjNJZ2RHRnlaMlYwSUc1dmRDQnBiaUJuY21Gd2FDRmNJanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvSVNoemIzVnlZMlZPYjJSbExtOTNibVZ5SUQwOUlIUmhjbWRsZEU1dlpHVXViM2R1WlhJZ0ppWWdjMjkxY21ObFRtOWtaUzV2ZDI1bGNpQTlQU0IwYUdsektTa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ1hDSkNiM1JvSUc5M2JtVnljeUJ0ZFhOMElHSmxJSFJvYVhNZ1ozSmhjR2doWENJN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITnZkWEpqWlU1dlpHVXViM2R1WlhJZ0lUMGdkR0Z5WjJWMFRtOWtaUzV2ZDI1bGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnYzJWMElITnZkWEpqWlNCaGJtUWdkR0Z5WjJWMFhHNGdJQ0FnYm1WM1JXUm5aUzV6YjNWeVkyVWdQU0J6YjNWeVkyVk9iMlJsTzF4dUlDQWdJRzVsZDBWa1oyVXVkR0Z5WjJWMElEMGdkR0Z5WjJWMFRtOWtaVHRjYmx4dUlDQWdJQzh2SUhObGRDQmhjeUJwYm5SeVlTMW5jbUZ3YUNCbFpHZGxYRzRnSUNBZ2JtVjNSV1JuWlM1cGMwbHVkR1Z5UjNKaGNHZ2dQU0JtWVd4elpUdGNibHh1SUNBZ0lDOHZJR0ZrWkNCMGJ5Qm5jbUZ3YUNCbFpHZGxJR3hwYzNSY2JpQWdJQ0IwYUdsekxtZGxkRVZrWjJWektDa3VjSFZ6YUNodVpYZEZaR2RsS1R0Y2JseHVJQ0FnSUM4dklHRmtaQ0IwYnlCcGJtTnBaR1Z1WTNrZ2JHbHpkSE5jYmlBZ0lDQnpiM1Z5WTJWT2IyUmxMbVZrWjJWekxuQjFjMmdvYm1WM1JXUm5aU2s3WEc1Y2JpQWdJQ0JwWmlBb2RHRnlaMlYwVG05a1pTQWhQU0J6YjNWeVkyVk9iMlJsS1NCN1hHNGdJQ0FnSUNCMFlYSm5aWFJPYjJSbExtVmtaMlZ6TG5CMWMyZ29ibVYzUldSblpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGQwVmtaMlU3WEc0Z0lIMWNibjA3WEc1Y2JreEhjbUZ3YUM1d2NtOTBiM1I1Y0dVdWNtVnRiM1psSUQwZ1puVnVZM1JwYjI0Z0tHOWlhaWtnZTF4dUlDQjJZWElnYm05a1pTQTlJRzlpYWp0Y2JpQWdhV1lnS0c5aWFpQnBibk4wWVc1alpXOW1JRXhPYjJSbEtTQjdYRzRnSUNBZ2FXWWdLRzV2WkdVZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnWENKT2IyUmxJR2x6SUc1MWJHd2hYQ0k3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2doS0c1dlpHVXViM2R1WlhJZ0lUMGdiblZzYkNBbUppQnViMlJsTG05M2JtVnlJRDA5SUhSb2FYTXBLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QmNJazkzYm1WeUlHZHlZWEJvSUdseklHbHVkbUZzYVdRaFhDSTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG1keVlYQm9UV0Z1WVdkbGNpQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCY0lrOTNibVZ5SUdkeVlYQm9JRzFoYm1GblpYSWdhWE1nYVc1MllXeHBaQ0ZjSWp0Y2JpQWdJQ0I5WEc0Z0lDQWdMeThnY21WdGIzWmxJR2x1WTJsa1pXNTBJR1ZrWjJWeklHWnBjbk4wSUNodFlXdGxJR0VnWTI5d2VTQjBieUJrYnlCcGRDQnpZV1psYkhrcFhHNGdJQ0FnZG1GeUlHVmtaMlZ6Vkc5Q1pWSmxiVzkyWldRZ1BTQnViMlJsTG1Wa1oyVnpMbk5zYVdObEtDazdYRzRnSUNBZ2RtRnlJR1ZrWjJVN1hHNGdJQ0FnZG1GeUlITWdQU0JsWkdkbGMxUnZRbVZTWlcxdmRtVmtMbXhsYm1kMGFEdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1pXUm5aU0E5SUdWa1oyVnpWRzlDWlZKbGJXOTJaV1JiYVYwN1hHNWNiaUFnSUNBZ0lHbG1JQ2hsWkdkbExtbHpTVzUwWlhKSGNtRndhQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWR5WVhCb1RXRnVZV2RsY2k1eVpXMXZkbVVvWldSblpTazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmxaR2RsTG5OdmRYSmpaUzV2ZDI1bGNpNXlaVzF2ZG1Vb1pXUm5aU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnYm05M0lIUm9aU0J1YjJSbElHbDBjMlZzWmx4dUlDQWdJSFpoY2lCcGJtUmxlQ0E5SUhSb2FYTXVibTlrWlhNdWFXNWtaWGhQWmlodWIyUmxLVHRjYmlBZ0lDQnBaaUFvYVc1a1pYZ2dQVDBnTFRFcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUZ3aVRtOWtaU0J1YjNRZ2FXNGdiM2R1WlhJZ2JtOWtaU0JzYVhOMElWd2lPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11Ym05a1pYTXVjM0JzYVdObEtHbHVaR1Y0TENBeEtUdGNiaUFnZlNCbGJITmxJR2xtSUNodlltb2dhVzV6ZEdGdVkyVnZaaUJNUldSblpTa2dlMXh1SUNBZ0lIWmhjaUJsWkdkbElEMGdiMkpxTzF4dUlDQWdJR2xtSUNobFpHZGxJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvY205M0lGd2lSV1JuWlNCcGN5QnVkV3hzSVZ3aU8xeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb0lTaGxaR2RsTG5OdmRYSmpaU0FoUFNCdWRXeHNJQ1ltSUdWa1oyVXVkR0Z5WjJWMElDRTlJRzUxYkd3cEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCY0lsTnZkWEpqWlNCaGJtUXZiM0lnZEdGeVoyVjBJR2x6SUc1MWJHd2hYQ0k3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2doS0dWa1oyVXVjMjkxY21ObExtOTNibVZ5SUNFOUlHNTFiR3dnSmlZZ1pXUm5aUzUwWVhKblpYUXViM2R1WlhJZ0lUMGdiblZzYkNBbUppQmxaR2RsTG5OdmRYSmpaUzV2ZDI1bGNpQTlQU0IwYUdseklDWW1JR1ZrWjJVdWRHRnlaMlYwTG05M2JtVnlJRDA5SUhSb2FYTXBLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QmNJbE52ZFhKalpTQmhibVF2YjNJZ2RHRnlaMlYwSUc5M2JtVnlJR2x6SUdsdWRtRnNhV1FoWENJN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlITnZkWEpqWlVsdVpHVjRJRDBnWldSblpTNXpiM1Z5WTJVdVpXUm5aWE11YVc1a1pYaFBaaWhsWkdkbEtUdGNiaUFnSUNCMllYSWdkR0Z5WjJWMFNXNWtaWGdnUFNCbFpHZGxMblJoY21kbGRDNWxaR2RsY3k1cGJtUmxlRTltS0dWa1oyVXBPMXh1SUNBZ0lHbG1JQ2doS0hOdmRYSmpaVWx1WkdWNElENGdMVEVnSmlZZ2RHRnlaMlYwU1c1a1pYZ2dQaUF0TVNrcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUZ3aVUyOTFjbU5sSUdGdVpDOXZjaUIwWVhKblpYUWdaRzlsYzI0bmRDQnJibTkzSUhSb2FYTWdaV1JuWlNGY0lqdGNiaUFnSUNCOVhHNWNiaUFnSUNCbFpHZGxMbk52ZFhKalpTNWxaR2RsY3k1emNHeHBZMlVvYzI5MWNtTmxTVzVrWlhnc0lERXBPMXh1WEc0Z0lDQWdhV1lnS0dWa1oyVXVkR0Z5WjJWMElDRTlJR1ZrWjJVdWMyOTFjbU5sS1NCN1hHNGdJQ0FnSUNCbFpHZGxMblJoY21kbGRDNWxaR2RsY3k1emNHeHBZMlVvZEdGeVoyVjBTVzVrWlhnc0lERXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIWmhjaUJwYm1SbGVDQTlJR1ZrWjJVdWMyOTFjbU5sTG05M2JtVnlMbWRsZEVWa1oyVnpLQ2t1YVc1a1pYaFBaaWhsWkdkbEtUdGNiaUFnSUNCcFppQW9hVzVrWlhnZ1BUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRndpVG05MElHbHVJRzkzYm1WeUozTWdaV1JuWlNCc2FYTjBJVndpTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1ZrWjJVdWMyOTFjbU5sTG05M2JtVnlMbWRsZEVWa1oyVnpLQ2t1YzNCc2FXTmxLR2x1WkdWNExDQXhLVHRjYmlBZ2ZWeHVmVHRjYmx4dVRFZHlZWEJvTG5CeWIzUnZkSGx3WlM1MWNHUmhkR1ZNWldaMFZHOXdJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IyWVhJZ2RHOXdJRDBnU1c1MFpXZGxjaTVOUVZoZlZrRk1WVVU3WEc0Z0lIWmhjaUJzWldaMElEMGdTVzUwWldkbGNpNU5RVmhmVmtGTVZVVTdYRzRnSUhaaGNpQnViMlJsVkc5d08xeHVJQ0IyWVhJZ2JtOWtaVXhsWm5RN1hHNGdJSFpoY2lCdFlYSm5hVzQ3WEc1Y2JpQWdkbUZ5SUc1dlpHVnpJRDBnZEdocGN5NW5aWFJPYjJSbGN5Z3BPMXh1SUNCMllYSWdjeUE5SUc1dlpHVnpMbXhsYm1kMGFEdGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITTdJR2tyS3lrZ2UxeHVJQ0FnSUhaaGNpQnNUbTlrWlNBOUlHNXZaR1Z6VzJsZE8xeHVJQ0FnSUc1dlpHVlViM0FnUFNCc1RtOWtaUzVuWlhSVWIzQW9LVHRjYmlBZ0lDQnViMlJsVEdWbWRDQTlJR3hPYjJSbExtZGxkRXhsWm5Rb0tUdGNibHh1SUNBZ0lHbG1JQ2gwYjNBZ1BpQnViMlJsVkc5d0tTQjdYRzRnSUNBZ0lDQjBiM0FnUFNCdWIyUmxWRzl3TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoc1pXWjBJRDRnYm05a1pVeGxablFwSUh0Y2JpQWdJQ0FnSUd4bFpuUWdQU0J1YjJSbFRHVm1kRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCRWJ5QjNaU0JvWVhabElHRnVlU0J1YjJSbGN5QnBiaUIwYUdseklHZHlZWEJvUDF4dUlDQnBaaUFvZEc5d0lEMDlJRWx1ZEdWblpYSXVUVUZZWDFaQlRGVkZLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lIMWNibHh1SUNCcFppQW9ibTlrWlhOYk1GMHVaMlYwVUdGeVpXNTBLQ2t1Y0dGa1pHbHVaMHhsWm5RZ0lUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdiV0Z5WjJsdUlEMGdibTlrWlhOYk1GMHVaMlYwVUdGeVpXNTBLQ2t1Y0dGa1pHbHVaMHhsWm5RN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2JXRnlaMmx1SUQwZ2RHaHBjeTV0WVhKbmFXNDdYRzRnSUgxY2JseHVJQ0IwYUdsekxteGxablFnUFNCc1pXWjBJQzBnYldGeVoybHVPMXh1SUNCMGFHbHpMblJ2Y0NBOUlIUnZjQ0F0SUcxaGNtZHBianRjYmx4dUlDQXZMeUJCY0hCc2VTQjBhR1VnYldGeVoybHVjeUJoYm1RZ2NtVjBkWEp1SUhSb1pTQnlaWE4xYkhSY2JpQWdjbVYwZFhKdUlHNWxkeUJRYjJsdWRDaDBhR2x6TG14bFpuUXNJSFJvYVhNdWRHOXdLVHRjYm4wN1hHNWNia3hIY21Gd2FDNXdjbTkwYjNSNWNHVXVkWEJrWVhSbFFtOTFibVJ6SUQwZ1puVnVZM1JwYjI0Z0tISmxZM1Z5YzJsMlpTa2dlMXh1SUNBdkx5QmpZV3hqZFd4aGRHVWdZbTkxYm1SelhHNGdJSFpoY2lCc1pXWjBJRDBnU1c1MFpXZGxjaTVOUVZoZlZrRk1WVVU3WEc0Z0lIWmhjaUJ5YVdkb2RDQTlJQzFKYm5SbFoyVnlMazFCV0Y5V1FVeFZSVHRjYmlBZ2RtRnlJSFJ2Y0NBOUlFbHVkR1ZuWlhJdVRVRllYMVpCVEZWRk8xeHVJQ0IyWVhJZ1ltOTBkRzl0SUQwZ0xVbHVkR1ZuWlhJdVRVRllYMVpCVEZWRk8xeHVJQ0IyWVhJZ2JtOWtaVXhsWm5RN1hHNGdJSFpoY2lCdWIyUmxVbWxuYUhRN1hHNGdJSFpoY2lCdWIyUmxWRzl3TzF4dUlDQjJZWElnYm05a1pVSnZkSFJ2YlR0Y2JpQWdkbUZ5SUcxaGNtZHBianRjYmx4dUlDQjJZWElnYm05a1pYTWdQU0IwYUdsekxtNXZaR1Z6TzF4dUlDQjJZWElnY3lBOUlHNXZaR1Z6TG14bGJtZDBhRHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpPeUJwS3lzcElIdGNiaUFnSUNCMllYSWdiRTV2WkdVZ1BTQnViMlJsYzF0cFhUdGNibHh1SUNBZ0lHbG1JQ2h5WldOMWNuTnBkbVVnSmlZZ2JFNXZaR1V1WTJocGJHUWdJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdiRTV2WkdVdWRYQmtZWFJsUW05MWJtUnpLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHNXZaR1ZNWldaMElEMGdiRTV2WkdVdVoyVjBUR1ZtZENncE8xeHVJQ0FnSUc1dlpHVlNhV2RvZENBOUlHeE9iMlJsTG1kbGRGSnBaMmgwS0NrN1hHNGdJQ0FnYm05a1pWUnZjQ0E5SUd4T2IyUmxMbWRsZEZSdmNDZ3BPMXh1SUNBZ0lHNXZaR1ZDYjNSMGIyMGdQU0JzVG05a1pTNW5aWFJDYjNSMGIyMG9LVHRjYmx4dUlDQWdJR2xtSUNoc1pXWjBJRDRnYm05a1pVeGxablFwSUh0Y2JpQWdJQ0FnSUd4bFpuUWdQU0J1YjJSbFRHVm1kRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvY21sbmFIUWdQQ0J1YjJSbFVtbG5hSFFwSUh0Y2JpQWdJQ0FnSUhKcFoyaDBJRDBnYm05a1pWSnBaMmgwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGIzQWdQaUJ1YjJSbFZHOXdLU0I3WEc0Z0lDQWdJQ0IwYjNBZ1BTQnViMlJsVkc5d08xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGliM1IwYjIwZ1BDQnViMlJsUW05MGRHOXRLU0I3WEc0Z0lDQWdJQ0JpYjNSMGIyMGdQU0J1YjJSbFFtOTBkRzl0TzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhaaGNpQmliM1Z1WkdsdVoxSmxZM1FnUFNCdVpYY2dVbVZqZEdGdVoyeGxSQ2hzWldaMExDQjBiM0FzSUhKcFoyaDBJQzBnYkdWbWRDd2dZbTkwZEc5dElDMGdkRzl3S1R0Y2JpQWdhV1lnS0d4bFpuUWdQVDBnU1c1MFpXZGxjaTVOUVZoZlZrRk1WVVVwSUh0Y2JpQWdJQ0IwYUdsekxteGxablFnUFNCMGFHbHpMbkJoY21WdWRDNW5aWFJNWldaMEtDazdYRzRnSUNBZ2RHaHBjeTV5YVdkb2RDQTlJSFJvYVhNdWNHRnlaVzUwTG1kbGRGSnBaMmgwS0NrN1hHNGdJQ0FnZEdocGN5NTBiM0FnUFNCMGFHbHpMbkJoY21WdWRDNW5aWFJVYjNBb0tUdGNiaUFnSUNCMGFHbHpMbUp2ZEhSdmJTQTlJSFJvYVhNdWNHRnlaVzUwTG1kbGRFSnZkSFJ2YlNncE8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0c1dlpHVnpXekJkTG1kbGRGQmhjbVZ1ZENncExuQmhaR1JwYm1kTVpXWjBJQ0U5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUcxaGNtZHBiaUE5SUc1dlpHVnpXekJkTG1kbGRGQmhjbVZ1ZENncExuQmhaR1JwYm1kTVpXWjBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJRzFoY21kcGJpQTlJSFJvYVhNdWJXRnlaMmx1TzF4dUlDQjlYRzVjYmlBZ2RHaHBjeTVzWldaMElEMGdZbTkxYm1ScGJtZFNaV04wTG5nZ0xTQnRZWEpuYVc0N1hHNGdJSFJvYVhNdWNtbG5hSFFnUFNCaWIzVnVaR2x1WjFKbFkzUXVlQ0FySUdKdmRXNWthVzVuVW1WamRDNTNhV1IwYUNBcklHMWhjbWRwYmp0Y2JpQWdkR2hwY3k1MGIzQWdQU0JpYjNWdVpHbHVaMUpsWTNRdWVTQXRJRzFoY21kcGJqdGNiaUFnZEdocGN5NWliM1IwYjIwZ1BTQmliM1Z1WkdsdVoxSmxZM1F1ZVNBcklHSnZkVzVrYVc1blVtVmpkQzVvWldsbmFIUWdLeUJ0WVhKbmFXNDdYRzU5TzF4dVhHNU1SM0poY0dndVkyRnNZM1ZzWVhSbFFtOTFibVJ6SUQwZ1puVnVZM1JwYjI0Z0tHNXZaR1Z6S1NCN1hHNGdJSFpoY2lCc1pXWjBJRDBnU1c1MFpXZGxjaTVOUVZoZlZrRk1WVVU3WEc0Z0lIWmhjaUJ5YVdkb2RDQTlJQzFKYm5SbFoyVnlMazFCV0Y5V1FVeFZSVHRjYmlBZ2RtRnlJSFJ2Y0NBOUlFbHVkR1ZuWlhJdVRVRllYMVpCVEZWRk8xeHVJQ0IyWVhJZ1ltOTBkRzl0SUQwZ0xVbHVkR1ZuWlhJdVRVRllYMVpCVEZWRk8xeHVJQ0IyWVhJZ2JtOWtaVXhsWm5RN1hHNGdJSFpoY2lCdWIyUmxVbWxuYUhRN1hHNGdJSFpoY2lCdWIyUmxWRzl3TzF4dUlDQjJZWElnYm05a1pVSnZkSFJ2YlR0Y2JseHVJQ0IyWVhJZ2N5QTlJRzV2WkdWekxteGxibWQwYUR0Y2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhNN0lHa3JLeWtnZTF4dUlDQWdJSFpoY2lCc1RtOWtaU0E5SUc1dlpHVnpXMmxkTzF4dUlDQWdJRzV2WkdWTVpXWjBJRDBnYkU1dlpHVXVaMlYwVEdWbWRDZ3BPMXh1SUNBZ0lHNXZaR1ZTYVdkb2RDQTlJR3hPYjJSbExtZGxkRkpwWjJoMEtDazdYRzRnSUNBZ2JtOWtaVlJ2Y0NBOUlHeE9iMlJsTG1kbGRGUnZjQ2dwTzF4dUlDQWdJRzV2WkdWQ2IzUjBiMjBnUFNCc1RtOWtaUzVuWlhSQ2IzUjBiMjBvS1R0Y2JseHVJQ0FnSUdsbUlDaHNaV1owSUQ0Z2JtOWtaVXhsWm5RcElIdGNiaUFnSUNBZ0lHeGxablFnUFNCdWIyUmxUR1ZtZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2NtbG5hSFFnUENCdWIyUmxVbWxuYUhRcElIdGNiaUFnSUNBZ0lISnBaMmgwSUQwZ2JtOWtaVkpwWjJoME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBiM0FnUGlCdWIyUmxWRzl3S1NCN1hHNGdJQ0FnSUNCMGIzQWdQU0J1YjJSbFZHOXdPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hpYjNSMGIyMGdQQ0J1YjJSbFFtOTBkRzl0S1NCN1hHNGdJQ0FnSUNCaWIzUjBiMjBnUFNCdWIyUmxRbTkwZEc5dE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIWmhjaUJpYjNWdVpHbHVaMUpsWTNRZ1BTQnVaWGNnVW1WamRHRnVaMnhsUkNoc1pXWjBMQ0IwYjNBc0lISnBaMmgwSUMwZ2JHVm1kQ3dnWW05MGRHOXRJQzBnZEc5d0tUdGNibHh1SUNCeVpYUjFjbTRnWW05MWJtUnBibWRTWldOME8xeHVmVHRjYmx4dVRFZHlZWEJvTG5CeWIzUnZkSGx3WlM1blpYUkpibU5zZFhOcGIyNVVjbVZsUkdWd2RHZ2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJR2xtSUNoMGFHbHpJRDA5SUhSb2FYTXVaM0poY0doTllXNWhaMlZ5TG1kbGRGSnZiM1FvS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUF4TzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQmhjbVZ1ZEM1blpYUkpibU5zZFhOcGIyNVVjbVZsUkdWd2RHZ29LVHRjYmlBZ2ZWeHVmVHRjYmx4dVRFZHlZWEJvTG5CeWIzUnZkSGx3WlM1blpYUkZjM1JwYldGMFpXUlRhWHBsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCcFppQW9kR2hwY3k1bGMzUnBiV0YwWldSVGFYcGxJRDA5SUVsdWRHVm5aWEl1VFVsT1gxWkJURlZGS1NCN1hHNGdJQ0FnZEdoeWIzY2dYQ0poYzNObGNuUWdabUZwYkdWa1hDSTdYRzRnSUgxY2JpQWdjbVYwZFhKdUlIUm9hWE11WlhOMGFXMWhkR1ZrVTJsNlpUdGNibjA3WEc1Y2JreEhjbUZ3YUM1d2NtOTBiM1I1Y0dVdVkyRnNZMFZ6ZEdsdFlYUmxaRk5wZW1VZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lIWmhjaUJ6YVhwbElEMGdNRHRjYmlBZ2RtRnlJRzV2WkdWeklEMGdkR2hwY3k1dWIyUmxjenRjYmlBZ2RtRnlJSE1nUFNCdWIyUmxjeTVzWlc1bmRHZzdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnpPeUJwS3lzcElIdGNiaUFnSUNCMllYSWdiRTV2WkdVZ1BTQnViMlJsYzF0cFhUdGNiaUFnSUNCemFYcGxJQ3M5SUd4T2IyUmxMbU5oYkdORmMzUnBiV0YwWldSVGFYcGxLQ2s3WEc0Z0lIMWNibHh1SUNCcFppQW9jMmw2WlNBOVBTQXdLU0I3WEc0Z0lDQWdkR2hwY3k1bGMzUnBiV0YwWldSVGFYcGxJRDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1ZOVUZSWlgwTlBUVkJQVlU1RVgwNVBSRVZmVTBsYVJUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjBhR2x6TG1WemRHbHRZWFJsWkZOcGVtVWdQU0J6YVhwbElDOGdUV0YwYUM1emNYSjBLSFJvYVhNdWJtOWtaWE11YkdWdVozUm9LVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIwYUdsekxtVnpkR2x0WVhSbFpGTnBlbVU3WEc1OU8xeHVYRzVNUjNKaGNHZ3VjSEp2ZEc5MGVYQmxMblZ3WkdGMFpVTnZibTVsWTNSbFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUhObGJHWWdQU0IwYUdsek8xeHVJQ0JwWmlBb2RHaHBjeTV1YjJSbGN5NXNaVzVuZEdnZ1BUMGdNQ2tnZTF4dUlDQWdJSFJvYVhNdWFYTkRiMjV1WldOMFpXUWdQU0IwY25WbE8xeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVYRzRnSUhaaGNpQnhkV1YxWlNBOUlHNWxkeUJNYVc1clpXUk1hWE4wS0NrN1hHNGdJSFpoY2lCMmFYTnBkR1ZrSUQwZ2JtVjNJRk5sZENncE8xeHVJQ0IyWVhJZ1kzVnljbVZ1ZEU1dlpHVWdQU0IwYUdsekxtNXZaR1Z6V3pCZE8xeHVJQ0IyWVhJZ2JtVnBaMmhpYjNKRlpHZGxjenRjYmlBZ2RtRnlJR04xY25KbGJuUk9aV2xuYUdKdmNqdGNiaUFnZG1GeUlHTm9hV3hrY21WdVQyWk9iMlJsSUQwZ1kzVnljbVZ1ZEU1dlpHVXVkMmwwYUVOb2FXeGtjbVZ1S0NrN1hHNGdJR05vYVd4a2NtVnVUMlpPYjJSbExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHNXZaR1VwSUh0Y2JpQWdJQ0J4ZFdWMVpTNXdkWE5vS0c1dlpHVXBPMXh1SUNBZ0lIWnBjMmwwWldRdVlXUmtLRzV2WkdVcE8xeHVJQ0I5S1R0Y2JseHVJQ0IzYUdsc1pTQW9jWFZsZFdVdWJHVnVaM1JvSUNFOVBTQXdLU0I3WEc0Z0lDQWdZM1Z5Y21WdWRFNXZaR1VnUFNCeGRXVjFaUzV6YUdsbWRDZ3BPMXh1WEc0Z0lDQWdMeThnVkhKaGRtVnljMlVnWVd4c0lHNWxhV2RvWW05eWN5QnZaaUIwYUdseklHNXZaR1ZjYmlBZ0lDQnVaV2xuYUdKdmNrVmtaMlZ6SUQwZ1kzVnljbVZ1ZEU1dlpHVXVaMlYwUldSblpYTW9LVHRjYmlBZ0lDQjJZWElnYzJsNlpTQTlJRzVsYVdkb1ltOXlSV1JuWlhNdWJHVnVaM1JvTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYzJsNlpUc2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllYSWdibVZwWjJoaWIzSkZaR2RsSUQwZ2JtVnBaMmhpYjNKRlpHZGxjMXRwWFR0Y2JpQWdJQ0FnSUdOMWNuSmxiblJPWldsbmFHSnZjaUE5SUc1bGFXZG9ZbTl5UldSblpTNW5aWFJQZEdobGNrVnVaRWx1UjNKaGNHZ29ZM1Z5Y21WdWRFNXZaR1VzSUhSb2FYTXBPMXh1WEc0Z0lDQWdJQ0F2THlCQlpHUWdkVzUyYVhOcGRHVmtJRzVsYVdkb1ltOXljeUIwYnlCMGFHVWdiR2x6ZENCMGJ5QjJhWE5wZEZ4dUlDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5ST1pXbG5hR0p2Y2lBaFBTQnVkV3hzSUNZbUlDRjJhWE5wZEdWa0xtaGhjeWhqZFhKeVpXNTBUbVZwWjJoaWIzSXBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmphR2xzWkhKbGJrOW1UbVZwWjJoaWIzSWdQU0JqZFhKeVpXNTBUbVZwWjJoaWIzSXVkMmwwYUVOb2FXeGtjbVZ1S0NrN1hHNWNiaUFnSUNBZ0lDQWdZMmhwYkdSeVpXNVBaazVsYVdkb1ltOXlMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLRzV2WkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0J4ZFdWMVpTNXdkWE5vS0c1dlpHVXBPMXh1SUNBZ0lDQWdJQ0FnSUhacGMybDBaV1F1WVdSa0tHNXZaR1VwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQjBhR2x6TG1selEyOXVibVZqZEdWa0lEMGdabUZzYzJVN1hHNWNiaUFnYVdZZ0tIWnBjMmwwWldRdWMybDZaU0ErUFNCMGFHbHpMbTV2WkdWekxteGxibWQwYUNrZ2UxeHVJQ0FnSUhaaGNpQnViMDltVm1semFYUmxaRWx1VkdocGMwZHlZWEJvSUQwZ01EdGNibHh1SUNBZ0lIWnBjMmwwWldRdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2RtbHphWFJsWkU1dlpHVXBJSHRjYmlBZ0lDQWdJR2xtSUNoMmFYTnBkR1ZrVG05a1pTNXZkMjVsY2lBOVBTQnpaV3htS1NCN1hHNGdJQ0FnSUNBZ0lHNXZUMlpXYVhOcGRHVmtTVzVVYUdselIzSmhjR2dyS3p0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUdsbUlDaHViMDltVm1semFYUmxaRWx1VkdocGMwZHlZWEJvSUQwOUlIUm9hWE11Ym05a1pYTXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1selEyOXVibVZqZEdWa0lEMGdkSEoxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1RFZHlZWEJvTzF4dVhHNHZLaW9xTHlCOUtTeGNiaThxSURFeUlDb3ZYRzR2S2lvcUx5QW9ablZ1WTNScGIyNG9iVzlrZFd4bExDQmxlSEJ2Y25SektTQjdYRzVjYm1aMWJtTjBhVzl1SUVsdWRHVm5aWElvS1NCN2ZWeHVYRzVKYm5SbFoyVnlMazFCV0Y5V1FVeFZSU0E5SURJeE5EYzBPRE0yTkRjN1hHNUpiblJsWjJWeUxrMUpUbDlXUVV4VlJTQTlJQzB5TVRRM05EZ3pOalE0TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFbHVkR1ZuWlhJN1hHNWNiaThxS2lvdklIMHBMRnh1THlvZ01UTWdLaTljYmk4cUtpb3ZJQ2htZFc1amRHbHZiaWh0YjJSMWJHVXNJR1Y0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwSUh0Y2JseHVkbUZ5SUV4SGNtRndhRTlpYW1WamRDQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvT0NrN1hHNTJZWElnU1c1MFpXZGxjaUE5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01USXBPMXh1ZG1GeUlGSmxZM1JoYm1kc1pVUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RFMEtUdGNiblpoY2lCTVlYbHZkWFJEYjI1emRHRnVkSE1nUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktETXBPMXh1ZG1GeUlGSmhibVJ2YlZObFpXUWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RFMUtUdGNiblpoY2lCUWIybHVkRVFnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktERTJLVHRjYm5aaGNpQklZWE5vVTJWMElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd4TnlrN1hHNWNibVoxYm1OMGFXOXVJRXhPYjJSbEtHZHRMQ0JzYjJNc0lITnBlbVVzSUhaT2IyUmxLU0I3WEc0Z0lDOHZRV3gwWlhKdVlYUnBkbVVnWTI5dWMzUnlkV04wYjNJZ01TQTZJRXhPYjJSbEtFeEhjbUZ3YUUxaGJtRm5aWElnWjIwc0lGQnZhVzUwSUd4dll5d2dSR2x0Wlc1emFXOXVJSE5wZW1Vc0lFOWlhbVZqZENCMlRtOWtaU2xjYmlBZ2FXWWdLSE5wZW1VZ1BUMGdiblZzYkNBbUppQjJUbTlrWlNBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnZGs1dlpHVWdQU0JzYjJNN1hHNGdJSDFjYmx4dUlDQk1SM0poY0doUFltcGxZM1F1WTJGc2JDaDBhR2x6TENCMlRtOWtaU2s3WEc1Y2JpQWdMeTlCYkhSbGNtNWhkR2wyWlNCamIyNXpkSEoxWTNSdmNpQXlJRG9nVEU1dlpHVW9UR0Y1YjNWMElHeGhlVzkxZEN3Z1QySnFaV04wSUhaT2IyUmxLVnh1SUNCcFppQW9aMjB1WjNKaGNHaE5ZVzVoWjJWeUlDRTlJRzUxYkd3cElHZHRJRDBnWjIwdVozSmhjR2hOWVc1aFoyVnlPMXh1WEc0Z0lIUm9hWE11WlhOMGFXMWhkR1ZrVTJsNlpTQTlJRWx1ZEdWblpYSXVUVWxPWDFaQlRGVkZPMXh1SUNCMGFHbHpMbWx1WTJ4MWMybHZibFJ5WldWRVpYQjBhQ0E5SUVsdWRHVm5aWEl1VFVGWVgxWkJURlZGTzF4dUlDQjBhR2x6TG5aSGNtRndhRTlpYW1WamRDQTlJSFpPYjJSbE8xeHVJQ0IwYUdsekxtVmtaMlZ6SUQwZ1cxMDdYRzRnSUhSb2FYTXVaM0poY0doTllXNWhaMlZ5SUQwZ1oyMDdYRzVjYmlBZ2FXWWdLSE5wZW1VZ0lUMGdiblZzYkNBbUppQnNiMk1nSVQwZ2JuVnNiQ2tnZEdocGN5NXlaV04wSUQwZ2JtVjNJRkpsWTNSaGJtZHNaVVFvYkc5akxuZ3NJR3h2WXk1NUxDQnphWHBsTG5kcFpIUm9MQ0J6YVhwbExtaGxhV2RvZENrN1pXeHpaU0IwYUdsekxuSmxZM1FnUFNCdVpYY2dVbVZqZEdGdVoyeGxSQ2dwTzF4dWZWeHVYRzVNVG05a1pTNXdjbTkwYjNSNWNHVWdQU0JQWW1wbFkzUXVZM0psWVhSbEtFeEhjbUZ3YUU5aWFtVmpkQzV3Y205MGIzUjVjR1VwTzF4dVptOXlJQ2gyWVhJZ2NISnZjQ0JwYmlCTVIzSmhjR2hQWW1wbFkzUXBJSHRjYmlBZ1RFNXZaR1ZiY0hKdmNGMGdQU0JNUjNKaGNHaFBZbXBsWTNSYmNISnZjRjA3WEc1OVhHNWNia3hPYjJSbExuQnliM1J2ZEhsd1pTNW5aWFJGWkdkbGN5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11WldSblpYTTdYRzU5TzF4dVhHNU1UbTlrWlM1d2NtOTBiM1I1Y0dVdVoyVjBRMmhwYkdRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbU5vYVd4a08xeHVmVHRjYmx4dVRFNXZaR1V1Y0hKdmRHOTBlWEJsTG1kbGRFOTNibVZ5SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBdkx5QWdhV1lnS0hSb2FYTXViM2R1WlhJZ0lUMGdiblZzYkNrZ2UxeHVJQ0F2THlBZ0lDQnBaaUFvSVNoMGFHbHpMbTkzYm1WeUlEMDlJRzUxYkd3Z2ZId2dkR2hwY3k1dmQyNWxjaTVuWlhST2IyUmxjeWdwTG1sdVpHVjRUMllvZEdocGN5a2dQaUF0TVNrcElIdGNiaUFnTHk4Z0lDQWdJQ0IwYUhKdmR5QmNJbUZ6YzJWeWRDQm1ZV2xzWldSY0lqdGNiaUFnTHk4Z0lDQWdmVnh1SUNBdkx5QWdmVnh1WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbTkzYm1WeU8xeHVmVHRjYmx4dVRFNXZaR1V1Y0hKdmRHOTBlWEJsTG1kbGRGZHBaSFJvSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXlaV04wTG5kcFpIUm9PMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExuTmxkRmRwWkhSb0lEMGdablZ1WTNScGIyNGdLSGRwWkhSb0tTQjdYRzRnSUhSb2FYTXVjbVZqZEM1M2FXUjBhQ0E5SUhkcFpIUm9PMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRWhsYVdkb2RDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11Y21WamRDNW9aV2xuYUhRN1hHNTlPMXh1WEc1TVRtOWtaUzV3Y205MGIzUjVjR1V1YzJWMFNHVnBaMmgwSUQwZ1puVnVZM1JwYjI0Z0tHaGxhV2RvZENrZ2UxeHVJQ0IwYUdsekxuSmxZM1F1YUdWcFoyaDBJRDBnYUdWcFoyaDBPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRU5sYm5SbGNsZ2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG5KbFkzUXVlQ0FySUhSb2FYTXVjbVZqZEM1M2FXUjBhQ0F2SURJN1hHNTlPMXh1WEc1TVRtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFEyVnVkR1Z5V1NBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVjbVZqZEM1NUlDc2dkR2hwY3k1eVpXTjBMbWhsYVdkb2RDQXZJREk3WEc1OU8xeHVYRzVNVG05a1pTNXdjbTkwYjNSNWNHVXVaMlYwUTJWdWRHVnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZCdmFXNTBSQ2gwYUdsekxuSmxZM1F1ZUNBcklIUm9hWE11Y21WamRDNTNhV1IwYUNBdklESXNJSFJvYVhNdWNtVmpkQzU1SUNzZ2RHaHBjeTV5WldOMExtaGxhV2RvZENBdklESXBPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRXh2WTJGMGFXOXVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZCdmFXNTBSQ2gwYUdsekxuSmxZM1F1ZUN3Z2RHaHBjeTV5WldOMExua3BPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRkpsWTNRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbkpsWTNRN1hHNTlPMXh1WEc1TVRtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFJHbGhaMjl1WVd3Z1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb2RHaHBjeTV5WldOMExuZHBaSFJvSUNvZ2RHaHBjeTV5WldOMExuZHBaSFJvSUNzZ2RHaHBjeTV5WldOMExtaGxhV2RvZENBcUlIUm9hWE11Y21WamRDNW9aV2xuYUhRcE8xeHVmVHRjYmx4dVRFNXZaR1V1Y0hKdmRHOTBlWEJsTG5ObGRGSmxZM1FnUFNCbWRXNWpkR2x2YmlBb2RYQndaWEpNWldaMExDQmthVzFsYm5OcGIyNHBJSHRjYmlBZ2RHaHBjeTV5WldOMExuZ2dQU0IxY0hCbGNreGxablF1ZUR0Y2JpQWdkR2hwY3k1eVpXTjBMbmtnUFNCMWNIQmxja3hsWm5RdWVUdGNiaUFnZEdocGN5NXlaV04wTG5kcFpIUm9JRDBnWkdsdFpXNXphVzl1TG5kcFpIUm9PMXh1SUNCMGFHbHpMbkpsWTNRdWFHVnBaMmgwSUQwZ1pHbHRaVzV6YVc5dUxtaGxhV2RvZER0Y2JuMDdYRzVjYmt4T2IyUmxMbkJ5YjNSdmRIbHdaUzV6WlhSRFpXNTBaWElnUFNCbWRXNWpkR2x2YmlBb1kzZ3NJR041S1NCN1hHNGdJSFJvYVhNdWNtVmpkQzU0SUQwZ1kzZ2dMU0IwYUdsekxuSmxZM1F1ZDJsa2RHZ2dMeUF5TzF4dUlDQjBhR2x6TG5KbFkzUXVlU0E5SUdONUlDMGdkR2hwY3k1eVpXTjBMbWhsYVdkb2RDQXZJREk3WEc1OU8xeHVYRzVNVG05a1pTNXdjbTkwYjNSNWNHVXVjMlYwVEc5allYUnBiMjRnUFNCbWRXNWpkR2x2YmlBb2VDd2dlU2tnZTF4dUlDQjBhR2x6TG5KbFkzUXVlQ0E5SUhnN1hHNGdJSFJvYVhNdWNtVmpkQzU1SUQwZ2VUdGNibjA3WEc1Y2JreE9iMlJsTG5CeWIzUnZkSGx3WlM1dGIzWmxRbmtnUFNCbWRXNWpkR2x2YmlBb1pIZ3NJR1I1S1NCN1hHNGdJSFJvYVhNdWNtVmpkQzU0SUNzOUlHUjRPMXh1SUNCMGFHbHpMbkpsWTNRdWVTQXJQU0JrZVR0Y2JuMDdYRzVjYmt4T2IyUmxMbkJ5YjNSdmRIbHdaUzVuWlhSRlpHZGxUR2x6ZEZSdlRtOWtaU0E5SUdaMWJtTjBhVzl1SUNoMGJ5a2dlMXh1SUNCMllYSWdaV1JuWlV4cGMzUWdQU0JiWFR0Y2JpQWdkbUZ5SUdWa1oyVTdYRzRnSUhaaGNpQnpaV3htSUQwZ2RHaHBjenRjYmx4dUlDQnpaV3htTG1Wa1oyVnpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR1ZrWjJVcElIdGNibHh1SUNBZ0lHbG1JQ2hsWkdkbExuUmhjbWRsZENBOVBTQjBieWtnZTF4dUlDQWdJQ0FnYVdZZ0tHVmtaMlV1YzI5MWNtTmxJQ0U5SUhObGJHWXBJSFJvY205M0lGd2lTVzVqYjNKeVpXTjBJR1ZrWjJVZ2MyOTFjbU5sSVZ3aU8xeHVYRzRnSUNBZ0lDQmxaR2RsVEdsemRDNXdkWE5vS0dWa1oyVXBPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJR1ZrWjJWTWFYTjBPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRVZrWjJWelFtVjBkMlZsYmlBOUlHWjFibU4wYVc5dUlDaHZkR2hsY2lrZ2UxeHVJQ0IyWVhJZ1pXUm5aVXhwYzNRZ1BTQmJYVHRjYmlBZ2RtRnlJR1ZrWjJVN1hHNWNiaUFnZG1GeUlITmxiR1lnUFNCMGFHbHpPMXh1SUNCelpXeG1MbVZrWjJWekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHVmtaMlVwSUh0Y2JseHVJQ0FnSUdsbUlDZ2hLR1ZrWjJVdWMyOTFjbU5sSUQwOUlITmxiR1lnZkh3Z1pXUm5aUzUwWVhKblpYUWdQVDBnYzJWc1ppa3BJSFJvY205M0lGd2lTVzVqYjNKeVpXTjBJR1ZrWjJVZ2MyOTFjbU5sSUdGdVpDOXZjaUIwWVhKblpYUmNJanRjYmx4dUlDQWdJR2xtSUNobFpHZGxMblJoY21kbGRDQTlQU0J2ZEdobGNpQjhmQ0JsWkdkbExuTnZkWEpqWlNBOVBTQnZkR2hsY2lrZ2UxeHVJQ0FnSUNBZ1pXUm5aVXhwYzNRdWNIVnphQ2hsWkdkbEtUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQmxaR2RsVEdsemREdGNibjA3WEc1Y2JreE9iMlJsTG5CeWIzUnZkSGx3WlM1blpYUk9aV2xuYUdKdmNuTk1hWE4wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMllYSWdibVZwWjJoaWIzSnpJRDBnYm1WM0lFaGhjMmhUWlhRb0tUdGNiaUFnZG1GeUlHVmtaMlU3WEc1Y2JpQWdkbUZ5SUhObGJHWWdQU0IwYUdsek8xeHVJQ0J6Wld4bUxtVmtaMlZ6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0dWa1oyVXBJSHRjYmx4dUlDQWdJR2xtSUNobFpHZGxMbk52ZFhKalpTQTlQU0J6Wld4bUtTQjdYRzRnSUNBZ0lDQnVaV2xuYUdKdmNuTXVZV1JrS0dWa1oyVXVkR0Z5WjJWMEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYVdZZ0tHVmtaMlV1ZEdGeVoyVjBJQ0U5SUhObGJHWXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dYQ0pKYm1OdmNuSmxZM1FnYVc1amFXUmxibU41SVZ3aU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnVaV2xuYUdKdmNuTXVZV1JrS0dWa1oyVXVjMjkxY21ObEtUdGNiaUFnSUNCOVhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQnVaV2xuYUdKdmNuTTdYRzU5TzF4dVhHNU1UbTlrWlM1d2NtOTBiM1I1Y0dVdWQybDBhRU5vYVd4a2NtVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IyWVhJZ2QybDBhRTVsYVdkb1ltOXljMHhwYzNRZ1BTQnVaWGNnVTJWMEtDazdYRzRnSUhaaGNpQmphR2xzWkU1dlpHVTdYRzRnSUhaaGNpQmphR2xzWkhKbGJqdGNibHh1SUNCM2FYUm9UbVZwWjJoaWIzSnpUR2x6ZEM1aFpHUW9kR2hwY3lrN1hHNWNiaUFnYVdZZ0tIUm9hWE11WTJocGJHUWdJVDBnYm5Wc2JDa2dlMXh1SUNBZ0lIWmhjaUJ1YjJSbGN5QTlJSFJvYVhNdVkyaHBiR1F1WjJWMFRtOWtaWE1vS1R0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1dlpHVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCamFHbHNaRTV2WkdVZ1BTQnViMlJsYzF0cFhUdGNiaUFnSUNBZ0lHTm9hV3hrY21WdUlEMGdZMmhwYkdST2IyUmxMbmRwZEdoRGFHbHNaSEpsYmlncE8xeHVJQ0FnSUNBZ1kyaHBiR1J5Wlc0dVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2JtOWtaU2tnZTF4dUlDQWdJQ0FnSUNCM2FYUm9UbVZwWjJoaWIzSnpUR2x6ZEM1aFpHUW9ibTlrWlNrN1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2QybDBhRTVsYVdkb1ltOXljMHhwYzNRN1hHNTlPMXh1WEc1TVRtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFRtOVBaa05vYVd4a2NtVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IyWVhJZ2JtOVBaa05vYVd4a2NtVnVJRDBnTUR0Y2JpQWdkbUZ5SUdOb2FXeGtUbTlrWlR0Y2JseHVJQ0JwWmlBb2RHaHBjeTVqYUdsc1pDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ2JtOVBaa05vYVd4a2NtVnVJRDBnTVR0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdibTlrWlhNZ1BTQjBhR2x6TG1Ob2FXeGtMbWRsZEU1dlpHVnpLQ2s3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J1YjJSbGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWTJocGJHUk9iMlJsSUQwZ2JtOWtaWE5iYVYwN1hHNWNiaUFnSUNBZ0lHNXZUMlpEYUdsc1pISmxiaUFyUFNCamFHbHNaRTV2WkdVdVoyVjBUbTlQWmtOb2FXeGtjbVZ1S0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLRzV2VDJaRGFHbHNaSEpsYmlBOVBTQXdLU0I3WEc0Z0lDQWdibTlQWmtOb2FXeGtjbVZ1SUQwZ01UdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2JtOVBaa05vYVd4a2NtVnVPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRVZ6ZEdsdFlYUmxaRk5wZW1VZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lHbG1JQ2gwYUdsekxtVnpkR2x0WVhSbFpGTnBlbVVnUFQwZ1NXNTBaV2RsY2k1TlNVNWZWa0ZNVlVVcElIdGNiaUFnSUNCMGFISnZkeUJjSW1GemMyVnlkQ0JtWVdsc1pXUmNJanRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkR2hwY3k1bGMzUnBiV0YwWldSVGFYcGxPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtTmhiR05GYzNScGJXRjBaV1JUYVhwbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnBaaUFvZEdocGN5NWphR2xzWkNBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpYTjBhVzFoZEdWa1UybDZaU0E5SUNoMGFHbHpMbkpsWTNRdWQybGtkR2dnS3lCMGFHbHpMbkpsWTNRdWFHVnBaMmgwS1NBdklESTdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdkR2hwY3k1bGMzUnBiV0YwWldSVGFYcGxJRDBnZEdocGN5NWphR2xzWkM1allXeGpSWE4wYVcxaGRHVmtVMmw2WlNncE8xeHVJQ0FnSUhSb2FYTXVjbVZqZEM1M2FXUjBhQ0E5SUhSb2FYTXVaWE4wYVcxaGRHVmtVMmw2WlR0Y2JpQWdJQ0IwYUdsekxuSmxZM1F1YUdWcFoyaDBJRDBnZEdocGN5NWxjM1JwYldGMFpXUlRhWHBsTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpYTjBhVzFoZEdWa1UybDZaVHRjYmlBZ2ZWeHVmVHRjYmx4dVRFNXZaR1V1Y0hKdmRHOTBlWEJsTG5OallYUjBaWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhaaGNpQnlZVzVrYjIxRFpXNTBaWEpZTzF4dUlDQjJZWElnY21GdVpHOXRRMlZ1ZEdWeVdUdGNibHh1SUNCMllYSWdiV2x1V0NBOUlDMU1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVNVNUpWRWxCVEY5WFQxSk1SRjlDVDFWT1JFRlNXVHRjYmlBZ2RtRnlJRzFoZUZnZ1BTQk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVNVNUpWRWxCVEY5WFQxSk1SRjlDVDFWT1JFRlNXVHRjYmlBZ2NtRnVaRzl0UTJWdWRHVnlXQ0E5SUV4aGVXOTFkRU52Ym5OMFlXNTBjeTVYVDFKTVJGOURSVTVVUlZKZldDQXJJRkpoYm1SdmJWTmxaV1F1Ym1WNGRFUnZkV0pzWlNncElDb2dLRzFoZUZnZ0xTQnRhVzVZS1NBcklHMXBibGc3WEc1Y2JpQWdkbUZ5SUcxcGJsa2dQU0F0VEdGNWIzVjBRMjl1YzNSaGJuUnpMa2xPU1ZSSlFVeGZWMDlTVEVSZlFrOVZUa1JCVWxrN1hHNGdJSFpoY2lCdFlYaFpJRDBnVEdGNWIzVjBRMjl1YzNSaGJuUnpMa2xPU1ZSSlFVeGZWMDlTVEVSZlFrOVZUa1JCVWxrN1hHNGdJSEpoYm1SdmJVTmxiblJsY2xrZ1BTQk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVYwOVNURVJmUTBWT1ZFVlNYMWtnS3lCU1lXNWtiMjFUWldWa0xtNWxlSFJFYjNWaWJHVW9LU0FxSUNodFlYaFpJQzBnYldsdVdTa2dLeUJ0YVc1Wk8xeHVYRzRnSUhSb2FYTXVjbVZqZEM1NElEMGdjbUZ1Wkc5dFEyVnVkR1Z5V0R0Y2JpQWdkR2hwY3k1eVpXTjBMbmtnUFNCeVlXNWtiMjFEWlc1MFpYSlpPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExuVndaR0YwWlVKdmRXNWtjeUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnYVdZZ0tIUm9hWE11WjJWMFEyaHBiR1FvS1NBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnZEdoeWIzY2dYQ0poYzNObGNuUWdabUZwYkdWa1hDSTdYRzRnSUgxY2JpQWdhV1lnS0hSb2FYTXVaMlYwUTJocGJHUW9LUzVuWlhST2IyUmxjeWdwTG14bGJtZDBhQ0FoUFNBd0tTQjdYRzRnSUNBZ0x5OGdkM0poY0NCMGFHVWdZMmhwYkdSeVpXNGdibTlrWlhNZ1lua2djbVV0WVhKeVlXNW5hVzVuSUhSb1pTQmliM1Z1WkdGeWFXVnpYRzRnSUNBZ2RtRnlJR05vYVd4a1IzSmhjR2dnUFNCMGFHbHpMbWRsZEVOb2FXeGtLQ2s3WEc0Z0lDQWdZMmhwYkdSSGNtRndhQzUxY0dSaGRHVkNiM1Z1WkhNb2RISjFaU2s3WEc1Y2JpQWdJQ0IwYUdsekxuSmxZM1F1ZUNBOUlHTm9hV3hrUjNKaGNHZ3VaMlYwVEdWbWRDZ3BPMXh1SUNBZ0lIUm9hWE11Y21WamRDNTVJRDBnWTJocGJHUkhjbUZ3YUM1blpYUlViM0FvS1R0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVjJsa2RHZ29ZMmhwYkdSSGNtRndhQzVuWlhSU2FXZG9kQ2dwSUMwZ1kyaHBiR1JIY21Gd2FDNW5aWFJNWldaMEtDa3BPMXh1SUNBZ0lIUm9hWE11YzJWMFNHVnBaMmgwS0dOb2FXeGtSM0poY0dndVoyVjBRbTkwZEc5dEtDa2dMU0JqYUdsc1pFZHlZWEJvTG1kbGRGUnZjQ2dwS1R0Y2JseHVJQ0FnSUM4dklGVndaR0YwWlNCamIyMXdiM1Z1WkNCaWIzVnVaSE1nWTI5dWMybGtaWEpwYm1jZ2FYUnpJR3hoWW1Wc0lIQnliM0JsY25ScFpYTWdJQ0FnWEc0Z0lDQWdhV1lnS0V4aGVXOTFkRU52Ym5OMFlXNTBjeTVPVDBSRlgwUkpUVVZPVTBsUFRsTmZTVTVEVEZWRVJWOU1RVUpGVEZNcElIdGNibHh1SUNBZ0lDQWdkbUZ5SUhkcFpIUm9JRDBnWTJocGJHUkhjbUZ3YUM1blpYUlNhV2RvZENncElDMGdZMmhwYkdSSGNtRndhQzVuWlhSTVpXWjBLQ2s3WEc0Z0lDQWdJQ0IyWVhJZ2FHVnBaMmgwSUQwZ1kyaHBiR1JIY21Gd2FDNW5aWFJDYjNSMGIyMG9LU0F0SUdOb2FXeGtSM0poY0dndVoyVjBWRzl3S0NrN1hHNWNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxteGhZbVZzVjJsa2RHZ2dQaUIzYVdSMGFDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuSmxZM1F1ZUNBdFBTQW9kR2hwY3k1c1lXSmxiRmRwWkhSb0lDMGdkMmxrZEdncElDOGdNanRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpaWFJYYVdSMGFDaDBhR2x6TG14aFltVnNWMmxrZEdncE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXNZV0psYkVobGFXZG9kQ0ErSUdobGFXZG9kQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1c1lXSmxiRkJ2Y3lBOVBTQmNJbU5sYm5SbGNsd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV5WldOMExua2dMVDBnS0hSb2FYTXViR0ZpWld4SVpXbG5hSFFnTFNCb1pXbG5hSFFwSUM4Z01qdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxteGhZbVZzVUc5eklEMDlJRndpZEc5d1hDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbkpsWTNRdWVTQXRQU0IwYUdsekxteGhZbVZzU0dWcFoyaDBJQzBnYUdWcFoyaDBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlYwU0dWcFoyaDBLSFJvYVhNdWJHRmlaV3hJWldsbmFIUXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNibHh1VEU1dlpHVXVjSEp2ZEc5MGVYQmxMbWRsZEVsdVkyeDFjMmx2YmxSeVpXVkVaWEIwYUNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2FXWWdLSFJvYVhNdWFXNWpiSFZ6YVc5dVZISmxaVVJsY0hSb0lEMDlJRWx1ZEdWblpYSXVUVUZZWDFaQlRGVkZLU0I3WEc0Z0lDQWdkR2h5YjNjZ1hDSmhjM05sY25RZ1ptRnBiR1ZrWENJN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb2FYTXVhVzVqYkhWemFXOXVWSEpsWlVSbGNIUm9PMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExuUnlZVzV6Wm05eWJTQTlJR1oxYm1OMGFXOXVJQ2gwY21GdWN5a2dlMXh1SUNCMllYSWdiR1ZtZENBOUlIUm9hWE11Y21WamRDNTRPMXh1WEc0Z0lHbG1JQ2hzWldaMElENGdUR0Y1YjNWMFEyOXVjM1JoYm5SekxsZFBVa3hFWDBKUFZVNUVRVkpaS1NCN1hHNGdJQ0FnYkdWbWRDQTlJRXhoZVc5MWRFTnZibk4wWVc1MGN5NVhUMUpNUkY5Q1QxVk9SRUZTV1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hzWldaMElEd2dMVXhoZVc5MWRFTnZibk4wWVc1MGN5NVhUMUpNUkY5Q1QxVk9SRUZTV1NrZ2UxeHVJQ0FnSUd4bFpuUWdQU0F0VEdGNWIzVjBRMjl1YzNSaGJuUnpMbGRQVWt4RVgwSlBWVTVFUVZKWk8xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUhSdmNDQTlJSFJvYVhNdWNtVmpkQzU1TzF4dVhHNGdJR2xtSUNoMGIzQWdQaUJNWVhsdmRYUkRiMjV6ZEdGdWRITXVWMDlTVEVSZlFrOVZUa1JCVWxrcElIdGNiaUFnSUNCMGIzQWdQU0JNWVhsdmRYUkRiMjV6ZEdGdWRITXVWMDlTVEVSZlFrOVZUa1JCVWxrN1hHNGdJSDBnWld4elpTQnBaaUFvZEc5d0lEd2dMVXhoZVc5MWRFTnZibk4wWVc1MGN5NVhUMUpNUkY5Q1QxVk9SRUZTV1NrZ2UxeHVJQ0FnSUhSdmNDQTlJQzFNWVhsdmRYUkRiMjV6ZEdGdWRITXVWMDlTVEVSZlFrOVZUa1JCVWxrN1hHNGdJSDFjYmx4dUlDQjJZWElnYkdWbWRGUnZjQ0E5SUc1bGR5QlFiMmx1ZEVRb2JHVm1kQ3dnZEc5d0tUdGNiaUFnZG1GeUlIWk1aV1owVkc5d0lEMGdkSEpoYm5NdWFXNTJaWEp6WlZSeVlXNXpabTl5YlZCdmFXNTBLR3hsWm5SVWIzQXBPMXh1WEc0Z0lIUm9hWE11YzJWMFRHOWpZWFJwYjI0b2RreGxablJVYjNBdWVDd2dka3hsWm5SVWIzQXVlU2s3WEc1OU8xeHVYRzVNVG05a1pTNXdjbTkwYjNSNWNHVXVaMlYwVEdWbWRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11Y21WamRDNTRPMXh1ZlR0Y2JseHVURTV2WkdVdWNISnZkRzkwZVhCbExtZGxkRkpwWjJoMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTV5WldOMExuZ2dLeUIwYUdsekxuSmxZM1F1ZDJsa2RHZzdYRzU5TzF4dVhHNU1UbTlrWlM1d2NtOTBiM1I1Y0dVdVoyVjBWRzl3SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXlaV04wTG5rN1hHNTlPMXh1WEc1TVRtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFFtOTBkRzl0SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXlaV04wTG5rZ0t5QjBhR2x6TG5KbFkzUXVhR1ZwWjJoME8xeHVmVHRjYmx4dVRFNXZaR1V1Y0hKdmRHOTBlWEJsTG1kbGRGQmhjbVZ1ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2FXWWdLSFJvYVhNdWIzZHVaWElnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhSb2FYTXViM2R1WlhJdVoyVjBVR0Z5Wlc1MEtDazdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFeE9iMlJsTzF4dVhHNHZLaW9xTHlCOUtTeGNiaThxSURFMElDb3ZYRzR2S2lvcUx5QW9ablZ1WTNScGIyNG9iVzlrZFd4bExDQmxlSEJ2Y25SektTQjdYRzVjYm1aMWJtTjBhVzl1SUZKbFkzUmhibWRzWlVRb2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDa2dlMXh1SUNCMGFHbHpMbmdnUFNBd08xeHVJQ0IwYUdsekxua2dQU0F3TzF4dUlDQjBhR2x6TG5kcFpIUm9JRDBnTUR0Y2JpQWdkR2hwY3k1b1pXbG5hSFFnUFNBd08xeHVYRzRnSUdsbUlDaDRJQ0U5SUc1MWJHd2dKaVlnZVNBaFBTQnVkV3hzSUNZbUlIZHBaSFJvSUNFOUlHNTFiR3dnSmlZZ2FHVnBaMmgwSUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0IwYUdsekxuZ2dQU0I0TzF4dUlDQWdJSFJvYVhNdWVTQTlJSGs3WEc0Z0lDQWdkR2hwY3k1M2FXUjBhQ0E5SUhkcFpIUm9PMXh1SUNBZ0lIUm9hWE11YUdWcFoyaDBJRDBnYUdWcFoyaDBPMXh1SUNCOVhHNTlYRzVjYmxKbFkzUmhibWRzWlVRdWNISnZkRzkwZVhCbExtZGxkRmdnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhKbGRIVnliaUIwYUdsekxuZzdYRzU5TzF4dVhHNVNaV04wWVc1bmJHVkVMbkJ5YjNSdmRIbHdaUzV6WlhSWUlEMGdablZ1WTNScGIyNGdLSGdwSUh0Y2JpQWdkR2hwY3k1NElEMGdlRHRjYm4wN1hHNWNibEpsWTNSaGJtZHNaVVF1Y0hKdmRHOTBlWEJsTG1kbGRGa2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG5rN1hHNTlPMXh1WEc1U1pXTjBZVzVuYkdWRUxuQnliM1J2ZEhsd1pTNXpaWFJaSUQwZ1puVnVZM1JwYjI0Z0tIa3BJSHRjYmlBZ2RHaHBjeTU1SUQwZ2VUdGNibjA3WEc1Y2JsSmxZM1JoYm1kc1pVUXVjSEp2ZEc5MGVYQmxMbWRsZEZkcFpIUm9JRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1M2FXUjBhRHRjYm4wN1hHNWNibEpsWTNSaGJtZHNaVVF1Y0hKdmRHOTBlWEJsTG5ObGRGZHBaSFJvSUQwZ1puVnVZM1JwYjI0Z0tIZHBaSFJvS1NCN1hHNGdJSFJvYVhNdWQybGtkR2dnUFNCM2FXUjBhRHRjYm4wN1hHNWNibEpsWTNSaGJtZHNaVVF1Y0hKdmRHOTBlWEJsTG1kbGRFaGxhV2RvZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVhR1ZwWjJoME8xeHVmVHRjYmx4dVVtVmpkR0Z1WjJ4bFJDNXdjbTkwYjNSNWNHVXVjMlYwU0dWcFoyaDBJRDBnWm5WdVkzUnBiMjRnS0dobGFXZG9kQ2tnZTF4dUlDQjBhR2x6TG1obGFXZG9kQ0E5SUdobGFXZG9kRHRjYm4wN1hHNWNibEpsWTNSaGJtZHNaVVF1Y0hKdmRHOTBlWEJsTG1kbGRGSnBaMmgwSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NTRJQ3NnZEdocGN5NTNhV1IwYUR0Y2JuMDdYRzVjYmxKbFkzUmhibWRzWlVRdWNISnZkRzkwZVhCbExtZGxkRUp2ZEhSdmJTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11ZVNBcklIUm9hWE11YUdWcFoyaDBPMXh1ZlR0Y2JseHVVbVZqZEdGdVoyeGxSQzV3Y205MGIzUjVjR1V1YVc1MFpYSnpaV04wY3lBOUlHWjFibU4wYVc5dUlDaGhLU0I3WEc0Z0lHbG1JQ2gwYUdsekxtZGxkRkpwWjJoMEtDa2dQQ0JoTG5ncElIdGNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JseHVJQ0JwWmlBb2RHaHBjeTVuWlhSQ2IzUjBiMjBvS1NBOElHRXVlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hoTG1kbGRGSnBaMmgwS0NrZ1BDQjBhR2x6TG5ncElIdGNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JseHVJQ0JwWmlBb1lTNW5aWFJDYjNSMGIyMG9LU0E4SUhSb2FYTXVlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMGNuVmxPMXh1ZlR0Y2JseHVVbVZqZEdGdVoyeGxSQzV3Y205MGIzUjVjR1V1WjJWMFEyVnVkR1Z5V0NBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVlQ0FySUhSb2FYTXVkMmxrZEdnZ0x5QXlPMXh1ZlR0Y2JseHVVbVZqZEdGdVoyeGxSQzV3Y205MGIzUjVjR1V1WjJWMFRXbHVXQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdVoyVjBXQ2dwTzF4dWZUdGNibHh1VW1WamRHRnVaMnhsUkM1d2NtOTBiM1I1Y0dVdVoyVjBUV0Y0V0NBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVaMlYwV0NncElDc2dkR2hwY3k1M2FXUjBhRHRjYm4wN1hHNWNibEpsWTNSaGJtZHNaVVF1Y0hKdmRHOTBlWEJsTG1kbGRFTmxiblJsY2xrZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbmtnS3lCMGFHbHpMbWhsYVdkb2RDQXZJREk3WEc1OU8xeHVYRzVTWldOMFlXNW5iR1ZFTG5CeWIzUnZkSGx3WlM1blpYUk5hVzVaSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NW5aWFJaS0NrN1hHNTlPMXh1WEc1U1pXTjBZVzVuYkdWRUxuQnliM1J2ZEhsd1pTNW5aWFJOWVhoWklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTVuWlhSWktDa2dLeUIwYUdsekxtaGxhV2RvZER0Y2JuMDdYRzVjYmxKbFkzUmhibWRzWlVRdWNISnZkRzkwZVhCbExtZGxkRmRwWkhSb1NHRnNaaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdWQybGtkR2dnTHlBeU8xeHVmVHRjYmx4dVVtVmpkR0Z1WjJ4bFJDNXdjbTkwYjNSNWNHVXVaMlYwU0dWcFoyaDBTR0ZzWmlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVhR1ZwWjJoMElDOGdNanRjYm4wN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdVbVZqZEdGdVoyeGxSRHRjYmx4dUx5b3FLaThnZlNrc1hHNHZLaUF4TlNBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3lrZ2UxeHVYRzVtZFc1amRHbHZiaUJTWVc1a2IyMVRaV1ZrS0NrZ2UzMWNibEpoYm1SdmJWTmxaV1F1YzJWbFpDQTlJREU3WEc1U1lXNWtiMjFUWldWa0xuZ2dQU0F3TzF4dVhHNVNZVzVrYjIxVFpXVmtMbTVsZUhSRWIzVmliR1VnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUZKaGJtUnZiVk5sWldRdWVDQTlJRTFoZEdndWMybHVLRkpoYm1SdmJWTmxaV1F1YzJWbFpDc3JLU0FxSURFd01EQXdPMXh1SUNCeVpYUjFjbTRnVW1GdVpHOXRVMlZsWkM1NElDMGdUV0YwYUM1bWJHOXZjaWhTWVc1a2IyMVRaV1ZrTG5ncE8xeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCU1lXNWtiMjFUWldWa08xeHVYRzR2S2lvcUx5QjlLU3hjYmk4cUlERTJJQ292WEc0dktpb3FMeUFvWm5WdVkzUnBiMjRvYlc5a2RXeGxMQ0JsZUhCdmNuUnpLU0I3WEc1Y2JtWjFibU4wYVc5dUlGQnZhVzUwUkNoNExDQjVLU0I3WEc0Z0lHbG1JQ2g0SUQwOUlHNTFiR3dnSmlZZ2VTQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ2RHaHBjeTU0SUQwZ01EdGNiaUFnSUNCMGFHbHpMbmtnUFNBd08xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIUm9hWE11ZUNBOUlIZzdYRzRnSUNBZ2RHaHBjeTU1SUQwZ2VUdGNiaUFnZlZ4dWZWeHVYRzVRYjJsdWRFUXVjSEp2ZEc5MGVYQmxMbWRsZEZnZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbmc3WEc1OU8xeHVYRzVRYjJsdWRFUXVjSEp2ZEc5MGVYQmxMbWRsZEZrZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbms3WEc1OU8xeHVYRzVRYjJsdWRFUXVjSEp2ZEc5MGVYQmxMbk5sZEZnZ1BTQm1kVzVqZEdsdmJpQW9lQ2tnZTF4dUlDQjBhR2x6TG5nZ1BTQjRPMXh1ZlR0Y2JseHVVRzlwYm5SRUxuQnliM1J2ZEhsd1pTNXpaWFJaSUQwZ1puVnVZM1JwYjI0Z0tIa3BJSHRjYmlBZ2RHaHBjeTU1SUQwZ2VUdGNibjA3WEc1Y2JsQnZhVzUwUkM1d2NtOTBiM1I1Y0dVdVoyVjBSR2xtWm1WeVpXNWpaU0E5SUdaMWJtTjBhVzl1SUNod2RDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lFUnBiV1Z1YzJsdmJrUW9kR2hwY3k1NElDMGdjSFF1ZUN3Z2RHaHBjeTU1SUMwZ2NIUXVlU2s3WEc1OU8xeHVYRzVRYjJsdWRFUXVjSEp2ZEc5MGVYQmxMbWRsZEVOdmNIa2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnVUc5cGJuUkVLSFJvYVhNdWVDd2dkR2hwY3k1NUtUdGNibjA3WEc1Y2JsQnZhVzUwUkM1d2NtOTBiM1I1Y0dVdWRISmhibk5zWVhSbElEMGdablZ1WTNScGIyNGdLR1JwYlNrZ2UxeHVJQ0IwYUdsekxuZ2dLejBnWkdsdExuZHBaSFJvTzF4dUlDQjBhR2x6TG5rZ0t6MGdaR2x0TG1obGFXZG9kRHRjYmlBZ2NtVjBkWEp1SUhSb2FYTTdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGQnZhVzUwUkR0Y2JseHVMeW9xS2k4Z2ZTa3NYRzR2S2lBeE55QXFMMXh1THlvcUtpOGdLR1oxYm1OMGFXOXVLRzF2WkhWc1pTd2daWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWtnZTF4dVhHNTJZWElnVlc1cGNYVmxTVVJIWlc1bGNtVjBiM0lnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktEVXBPMXh1WEc1bWRXNWpkR2x2YmlCSVlYTm9VMlYwS0NrZ2UxeHVJQ0IwYUdsekxuTmxkQ0E5SUh0OU8xeHVmVnh1TzF4dVhHNUlZWE5vVTJWMExuQnliM1J2ZEhsd1pTNWhaR1FnUFNCbWRXNWpkR2x2YmlBb2IySnFLU0I3WEc0Z0lIWmhjaUIwYUdWSlpDQTlJRlZ1YVhGMVpVbEVSMlZ1WlhKbGRHOXlMbU55WldGMFpVbEVLRzlpYWlrN1hHNGdJR2xtSUNnaGRHaHBjeTVqYjI1MFlXbHVjeWgwYUdWSlpDa3BJSFJvYVhNdWMyVjBXM1JvWlVsa1hTQTlJRzlpYWp0Y2JuMDdYRzVjYmtoaGMyaFRaWFF1Y0hKdmRHOTBlWEJsTG5KbGJXOTJaU0E5SUdaMWJtTjBhVzl1SUNodlltb3BJSHRjYmlBZ1pHVnNaWFJsSUhSb2FYTXVjMlYwVzFWdWFYRjFaVWxFUjJWdVpYSmxkRzl5TG1OeVpXRjBaVWxFS0c5aWFpbGRPMXh1ZlR0Y2JseHVTR0Z6YUZObGRDNXdjbTkwYjNSNWNHVXVZMnhsWVhJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lIUm9hWE11YzJWMElEMGdlMzA3WEc1OU8xeHVYRzVJWVhOb1UyVjBMbkJ5YjNSdmRIbHdaUzVqYjI1MFlXbHVjeUE5SUdaMWJtTjBhVzl1SUNodlltb3BJSHRjYmlBZ2NtVjBkWEp1SUhSb2FYTXVjMlYwVzFWdWFYRjFaVWxFUjJWdVpYSmxkRzl5TG1OeVpXRjBaVWxFS0c5aWFpbGRJRDA5SUc5aWFqdGNibjA3WEc1Y2JraGhjMmhUWlhRdWNISnZkRzkwZVhCbExtbHpSVzF3ZEhrZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCMGFHbHpMbk5wZW1Vb0tTQTlQVDBnTUR0Y2JuMDdYRzVjYmtoaGMyaFRaWFF1Y0hKdmRHOTBlWEJsTG5OcGVtVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQlBZbXBsWTNRdWEyVjVjeWgwYUdsekxuTmxkQ2t1YkdWdVozUm9PMXh1ZlR0Y2JseHVMeTlqYjI1allYUnpJSFJvYVhNdWMyVjBJSFJ2SUhSb1pTQm5hWFpsYmlCc2FYTjBYRzVJWVhOb1UyVjBMbkJ5YjNSdmRIbHdaUzVoWkdSQmJHeFVieUE5SUdaMWJtTjBhVzl1SUNoc2FYTjBLU0I3WEc0Z0lIWmhjaUJyWlhseklEMGdUMkpxWldOMExtdGxlWE1vZEdocGN5NXpaWFFwTzF4dUlDQjJZWElnYkdWdVozUm9JRDBnYTJWNWN5NXNaVzVuZEdnN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNCc2FYTjBMbkIxYzJnb2RHaHBjeTV6WlhSYmEyVjVjMXRwWFYwcE8xeHVJQ0I5WEc1OU8xeHVYRzVJWVhOb1UyVjBMbkJ5YjNSdmRIbHdaUzV6YVhwbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z1QySnFaV04wTG10bGVYTW9kR2hwY3k1elpYUXBMbXhsYm1kMGFEdGNibjA3WEc1Y2JraGhjMmhUWlhRdWNISnZkRzkwZVhCbExtRmtaRUZzYkNBOUlHWjFibU4wYVc5dUlDaHNhWE4wS1NCN1hHNGdJSFpoY2lCeklEMGdiR2x6ZEM1c1pXNW5kR2c3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djenNnYVNzcktTQjdYRzRnSUNBZ2RtRnlJSFlnUFNCc2FYTjBXMmxkTzF4dUlDQWdJSFJvYVhNdVlXUmtLSFlwTzF4dUlDQjlYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFaGhjMmhUWlhRN1hHNWNiaThxS2lvdklIMHBMRnh1THlvZ01UZ2dLaTljYmk4cUtpb3ZJQ2htZFc1amRHbHZiaWh0YjJSMWJHVXNJR1Y0Y0c5eWRITXBJSHRjYmx4dUx5cGNjbHh1SUNwVWFHbHpJR05zWVhOeklHbHpJSFJvWlNCcVlYWmhjMk55YVhCMElHbHRjR3hsYldWdWRHRjBhVzl1SUc5bUlIUm9aU0JRYjJsdWRDNXFZWFpoSUdOc1lYTnpJR2x1SUdwa2ExeHlYRzRnS2k5Y2JtWjFibU4wYVc5dUlGQnZhVzUwS0hnc0lIa3NJSEFwSUh0Y2JpQWdkR2hwY3k1NElEMGdiblZzYkR0Y2JpQWdkR2hwY3k1NUlEMGdiblZzYkR0Y2JpQWdhV1lnS0hnZ1BUMGdiblZzYkNBbUppQjVJRDA5SUc1MWJHd2dKaVlnY0NBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnZEdocGN5NTRJRDBnTUR0Y2JpQWdJQ0IwYUdsekxua2dQU0F3TzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQjRJRDA5SUNkdWRXMWlaWEluSUNZbUlIUjVjR1Z2WmlCNUlEMDlJQ2R1ZFcxaVpYSW5JQ1ltSUhBZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUhSb2FYTXVlQ0E5SUhnN1hHNGdJQ0FnZEdocGN5NTVJRDBnZVR0Y2JpQWdmU0JsYkhObElHbG1JQ2g0TG1OdmJuTjBjblZqZEc5eUxtNWhiV1VnUFQwZ0oxQnZhVzUwSnlBbUppQjVJRDA5SUc1MWJHd2dKaVlnY0NBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnY0NBOUlIZzdYRzRnSUNBZ2RHaHBjeTU0SUQwZ2NDNTRPMXh1SUNBZ0lIUm9hWE11ZVNBOUlIQXVlVHRjYmlBZ2ZWeHVmVnh1WEc1UWIybHVkQzV3Y205MGIzUjVjR1V1WjJWMFdDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11ZUR0Y2JuMDdYRzVjYmxCdmFXNTBMbkJ5YjNSdmRIbHdaUzVuWlhSWklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTU1TzF4dWZUdGNibHh1VUc5cGJuUXVjSEp2ZEc5MGVYQmxMbWRsZEV4dlkyRjBhVzl1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGQnZhVzUwS0hSb2FYTXVlQ3dnZEdocGN5NTVLVHRjYm4wN1hHNWNibEJ2YVc1MExuQnliM1J2ZEhsd1pTNXpaWFJNYjJOaGRHbHZiaUE5SUdaMWJtTjBhVzl1SUNoNExDQjVMQ0J3S1NCN1hHNGdJR2xtSUNoNExtTnZibk4wY25WamRHOXlMbTVoYldVZ1BUMGdKMUJ2YVc1MEp5QW1KaUI1SUQwOUlHNTFiR3dnSmlZZ2NDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ2NDQTlJSGc3WEc0Z0lDQWdkR2hwY3k1elpYUk1iMk5oZEdsdmJpaHdMbmdzSUhBdWVTazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhnZ1BUMGdKMjUxYldKbGNpY2dKaVlnZEhsd1pXOW1JSGtnUFQwZ0oyNTFiV0psY2ljZ0ppWWdjQ0E5UFNCdWRXeHNLU0I3WEc0Z0lDQWdMeTlwWmlCaWIzUm9JSEJoY21GdFpYUmxjbk1nWVhKbElHbHVkR1ZuWlhJZ2FuVnpkQ0J0YjNabElDaDRMSGtwSUd4dlkyRjBhVzl1WEc0Z0lDQWdhV1lnS0hCaGNuTmxTVzUwS0hncElEMDlJSGdnSmlZZ2NHRnljMlZKYm5Rb2VTa2dQVDBnZVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0YjNabEtIZ3NJSGtwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG5nZ1BTQk5ZWFJvTG1ac2IyOXlLSGdnS3lBd0xqVXBPMXh1SUNBZ0lDQWdkR2hwY3k1NUlEMGdUV0YwYUM1bWJHOXZjaWg1SUNzZ01DNDFLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzVjYmxCdmFXNTBMbkJ5YjNSdmRIbHdaUzV0YjNabElEMGdablZ1WTNScGIyNGdLSGdzSUhrcElIdGNiaUFnZEdocGN5NTRJRDBnZUR0Y2JpQWdkR2hwY3k1NUlEMGdlVHRjYm4wN1hHNWNibEJ2YVc1MExuQnliM1J2ZEhsd1pTNTBjbUZ1YzJ4aGRHVWdQU0JtZFc1amRHbHZiaUFvWkhnc0lHUjVLU0I3WEc0Z0lIUm9hWE11ZUNBclBTQmtlRHRjYmlBZ2RHaHBjeTU1SUNzOUlHUjVPMXh1ZlR0Y2JseHVVRzlwYm5RdWNISnZkRzkwZVhCbExtVnhkV0ZzY3lBOUlHWjFibU4wYVc5dUlDaHZZbW9wSUh0Y2JpQWdhV1lnS0c5aWFpNWpiMjV6ZEhKMVkzUnZjaTV1WVcxbElEMDlJRndpVUc5cGJuUmNJaWtnZTF4dUlDQWdJSFpoY2lCd2RDQTlJRzlpYWp0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1NElEMDlJSEIwTG5nZ0ppWWdkR2hwY3k1NUlEMDlJSEIwTG5rN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb2FYTWdQVDBnYjJKcU8xeHVmVHRjYmx4dVVHOXBiblF1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGQnZhVzUwS0NrdVkyOXVjM1J5ZFdOMGIzSXVibUZ0WlNBcklGd2lXM2c5WENJZ0t5QjBhR2x6TG5nZ0t5QmNJaXg1UFZ3aUlDc2dkR2hwY3k1NUlDc2dYQ0pkWENJN1hHNTlPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUZCdmFXNTBPMXh1WEc0dktpb3FMeUI5S1N4Y2JpOHFJREU1SUNvdlhHNHZLaW9xTHlBb1puVnVZM1JwYjI0b2JXOWtkV3hsTENCbGVIQnZjblJ6S1NCN1hHNWNibU52Ym5OMElHNXZaR1ZHY205dElEMGdkbUZzZFdVZ1BUNGdLSHNnZG1Gc2RXVXNJRzVsZUhRNklHNTFiR3dzSUhCeVpYWTZJRzUxYkd3Z2ZTazdYRzVjYm1OdmJuTjBJR0ZrWkNBOUlDaHdjbVYyTENCdWIyUmxMQ0J1WlhoMExDQnNhWE4wS1NBOVBpQjdYRzRnSUdsbUlDaHdjbVYySUNFOVBTQnVkV3hzS1NCN1hHNGdJQ0FnY0hKbGRpNXVaWGgwSUQwZ2JtOWtaVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JzYVhOMExtaGxZV1FnUFNCdWIyUmxPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHNWxlSFFnSVQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0J1WlhoMExuQnlaWFlnUFNCdWIyUmxPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR3hwYzNRdWRHRnBiQ0E5SUc1dlpHVTdYRzRnSUgxY2JseHVJQ0J1YjJSbExuQnlaWFlnUFNCd2NtVjJPMXh1SUNCdWIyUmxMbTVsZUhRZ1BTQnVaWGgwTzF4dVhHNGdJR3hwYzNRdWJHVnVaM1JvS3lzN1hHNWNiaUFnY21WMGRYSnVJRzV2WkdVN1hHNTlPMXh1WEc1amIyNXpkQ0J5WlcxdmRtVWdQU0FvYm05a1pTd2diR2x6ZENrZ1BUNGdlMXh1SUNCc1pYUWdleUJ3Y21WMkxDQnVaWGgwSUgwZ1BTQnViMlJsTzF4dVhHNGdJR2xtSUNod2NtVjJJQ0U5UFNCdWRXeHNLU0I3WEc0Z0lDQWdjSEpsZGk1dVpYaDBJRDBnYm1WNGREdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnNhWE4wTG1obFlXUWdQU0J1WlhoME8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0c1bGVIUWdJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQnVaWGgwTG5CeVpYWWdQU0J3Y21WMk8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHeHBjM1F1ZEdGcGJDQTlJSEJ5WlhZN1hHNGdJSDFjYmx4dUlDQnViMlJsTG5CeVpYWWdQU0J1YjJSbExtNWxlSFFnUFNCdWRXeHNPMXh1WEc0Z0lHeHBjM1F1YkdWdVozUm9MUzA3WEc1Y2JpQWdjbVYwZFhKdUlHNXZaR1U3WEc1OU8xeHVYRzVqYkdGemN5Qk1hVzVyWldSTWFYTjBJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9kbUZzY3lrZ2UxeHVJQ0FnSUhSb2FYTXViR1Z1WjNSb0lEMGdNRHRjYmlBZ0lDQjBhR2x6TG1obFlXUWdQU0J1ZFd4c08xeHVJQ0FnSUhSb2FYTXVkR0ZwYkNBOUlHNTFiR3c3WEc1Y2JpQWdJQ0JwWmlBb2RtRnNjeUFoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0IyWVd4ekxtWnZja1ZoWTJnb2RpQTlQaUIwYUdsekxuQjFjMmdvZGlrcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lITnBlbVVvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWJHVnVaM1JvTzF4dUlDQjlYRzVjYmlBZ2FXNXpaWEowUW1WbWIzSmxLSFpoYkN3Z2IzUm9aWEpPYjJSbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdGa1pDaHZkR2hsY2s1dlpHVXVjSEpsZGl3Z2JtOWtaVVp5YjIwb2RtRnNLU3dnYjNSb1pYSk9iMlJsTENCMGFHbHpLVHRjYmlBZ2ZWeHVYRzRnSUdsdWMyVnlkRUZtZEdWeUtIWmhiQ3dnYjNSb1pYSk9iMlJsS1NCN1hHNGdJQ0FnY21WMGRYSnVJR0ZrWkNodmRHaGxjazV2WkdVc0lHNXZaR1ZHY205dEtIWmhiQ2tzSUc5MGFHVnlUbTlrWlM1dVpYaDBMQ0IwYUdsektUdGNiaUFnZlZ4dVhHNGdJR2x1YzJWeWRFNXZaR1ZDWldadmNtVW9ibVYzVG05a1pTd2diM1JvWlhKT2IyUmxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHRmtaQ2h2ZEdobGNrNXZaR1V1Y0hKbGRpd2dibVYzVG05a1pTd2diM1JvWlhKT2IyUmxMQ0IwYUdsektUdGNiaUFnZlZ4dVhHNGdJR2x1YzJWeWRFNXZaR1ZCWm5SbGNpaHVaWGRPYjJSbExDQnZkR2hsY2s1dlpHVXBJSHRjYmlBZ0lDQnlaWFIxY200Z1lXUmtLRzkwYUdWeVRtOWtaU3dnYm1WM1RtOWtaU3dnYjNSb1pYSk9iMlJsTG01bGVIUXNJSFJvYVhNcE8xeHVJQ0I5WEc1Y2JpQWdjSFZ6YUNoMllXd3BJSHRjYmlBZ0lDQnlaWFIxY200Z1lXUmtLSFJvYVhNdWRHRnBiQ3dnYm05a1pVWnliMjBvZG1Gc0tTd2diblZzYkN3Z2RHaHBjeWs3WEc0Z0lIMWNibHh1SUNCMWJuTm9hV1owS0haaGJDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCaFpHUW9iblZzYkN3Z2JtOWtaVVp5YjIwb2RtRnNLU3dnZEdocGN5NW9aV0ZrTENCMGFHbHpLVHRjYmlBZ2ZWeHVYRzRnSUhKbGJXOTJaU2h1YjJSbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhKbGJXOTJaU2h1YjJSbExDQjBhR2x6S1R0Y2JpQWdmVnh1WEc0Z0lIQnZjQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjbVZ0YjNabEtIUm9hWE11ZEdGcGJDd2dkR2hwY3lrdWRtRnNkV1U3WEc0Z0lIMWNibHh1SUNCd2IzQk9iMlJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ5WlcxdmRtVW9kR2hwY3k1MFlXbHNMQ0IwYUdsektUdGNiaUFnZlZ4dVhHNGdJSE5vYVdaMEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCeVpXMXZkbVVvZEdocGN5NW9aV0ZrTENCMGFHbHpLUzUyWVd4MVpUdGNiaUFnZlZ4dVhHNGdJSE5vYVdaMFRtOWtaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjbVZ0YjNabEtIUm9hWE11YUdWaFpDd2dkR2hwY3lrN1hHNGdJSDFjYmx4dUlDQm5aWFJmYjJKcVpXTjBYMkYwS0dsdVpHVjRLU0I3WEc0Z0lDQWdhV1lnS0dsdVpHVjRJRHc5SUhSb2FYTXViR1Z1WjNSb0tDa3BJSHRjYmlBZ0lDQWdJSFpoY2lCcElEMGdNVHRjYmlBZ0lDQWdJSFpoY2lCamRYSnlaVzUwSUQwZ2RHaHBjeTVvWldGa08xeHVJQ0FnSUNBZ2QyaHBiR1VnS0drZ1BDQnBibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXVaWGgwTzF4dUlDQWdJQ0FnSUNCcEt5czdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z1kzVnljbVZ1ZEM1MllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J6WlhSZmIySnFaV04wWDJGMEtHbHVaR1Y0TENCMllXeDFaU2tnZTF4dUlDQWdJR2xtSUNocGJtUmxlQ0E4UFNCMGFHbHpMbXhsYm1kMGFDZ3BLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2FTQTlJREU3WEc0Z0lDQWdJQ0IyWVhJZ1kzVnljbVZ1ZENBOUlIUm9hWE11YUdWaFpEdGNiaUFnSUNBZ0lIZG9hV3hsSUNocElEd2dhVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRDQTlJR04xY25KbGJuUXVibVY0ZER0Y2JpQWdJQ0FnSUNBZ2FTc3JPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdZM1Z5Y21WdWRDNTJZV3gxWlNBOUlIWmhiSFZsTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUV4cGJtdGxaRXhwYzNRN1hHNWNiaThxS2lvdklIMHBMRnh1THlvZ01qQWdLaTljYmk4cUtpb3ZJQ2htZFc1amRHbHZiaWh0YjJSMWJHVXNJR1Y0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwSUh0Y2JseHVkbUZ5SUZCdmFXNTBSQ0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01UWXBPMXh1WEc1bWRXNWpkR2x2YmlCVWNtRnVjMlp2Y20wb2VDd2dlU2tnZTF4dUlDQjBhR2x6TG14M2IzSnNaRTl5WjFnZ1BTQXdMakE3WEc0Z0lIUm9hWE11YkhkdmNteGtUM0puV1NBOUlEQXVNRHRjYmlBZ2RHaHBjeTVzWkdWMmFXTmxUM0puV0NBOUlEQXVNRHRjYmlBZ2RHaHBjeTVzWkdWMmFXTmxUM0puV1NBOUlEQXVNRHRjYmlBZ2RHaHBjeTVzZDI5eWJHUkZlSFJZSUQwZ01TNHdPMXh1SUNCMGFHbHpMbXgzYjNKc1pFVjRkRmtnUFNBeExqQTdYRzRnSUhSb2FYTXViR1JsZG1salpVVjRkRmdnUFNBeExqQTdYRzRnSUhSb2FYTXViR1JsZG1salpVVjRkRmtnUFNBeExqQTdYRzU5WEc1Y2JsUnlZVzV6Wm05eWJTNXdjbTkwYjNSNWNHVXVaMlYwVjI5eWJHUlBjbWRZSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXNkMjl5YkdSUGNtZFlPMXh1ZlR0Y2JseHVWSEpoYm5ObWIzSnRMbkJ5YjNSdmRIbHdaUzV6WlhSWGIzSnNaRTl5WjFnZ1BTQm1kVzVqZEdsdmJpQW9kMjk0S1NCN1hHNGdJSFJvYVhNdWJIZHZjbXhrVDNKbldDQTlJSGR2ZUR0Y2JuMDdYRzVjYmxSeVlXNXpabTl5YlM1d2NtOTBiM1I1Y0dVdVoyVjBWMjl5YkdSUGNtZFpJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1c2QyOXliR1JQY21kWk8xeHVmVHRjYmx4dVZISmhibk5tYjNKdExuQnliM1J2ZEhsd1pTNXpaWFJYYjNKc1pFOXlaMWtnUFNCbWRXNWpkR2x2YmlBb2QyOTVLU0I3WEc0Z0lIUm9hWE11YkhkdmNteGtUM0puV1NBOUlIZHZlVHRjYm4wN1hHNWNibFJ5WVc1elptOXliUzV3Y205MGIzUjVjR1V1WjJWMFYyOXliR1JGZUhSWUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQnlaWFIxY200Z2RHaHBjeTVzZDI5eWJHUkZlSFJZTzF4dWZUdGNibHh1VkhKaGJuTm1iM0p0TG5CeWIzUnZkSGx3WlM1elpYUlhiM0pzWkVWNGRGZ2dQU0JtZFc1amRHbHZiaUFvZDJWNEtTQjdYRzRnSUhSb2FYTXViSGR2Y214a1JYaDBXQ0E5SUhkbGVEdGNibjA3WEc1Y2JsUnlZVzV6Wm05eWJTNXdjbTkwYjNSNWNHVXVaMlYwVjI5eWJHUkZlSFJaSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEdocGN5NXNkMjl5YkdSRmVIUlpPMXh1ZlR0Y2JseHVWSEpoYm5ObWIzSnRMbkJ5YjNSdmRIbHdaUzV6WlhSWGIzSnNaRVY0ZEZrZ1BTQm1kVzVqZEdsdmJpQW9kMlY1S1NCN1hHNGdJSFJvYVhNdWJIZHZjbXhrUlhoMFdTQTlJSGRsZVR0Y2JuMDdYRzVjYmk4cUlFUmxkbWxqWlNCeVpXeGhkR1ZrSUNvdlhHNWNibFJ5WVc1elptOXliUzV3Y205MGIzUjVjR1V1WjJWMFJHVjJhV05sVDNKbldDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11YkdSbGRtbGpaVTl5WjFnN1hHNTlPMXh1WEc1VWNtRnVjMlp2Y20wdWNISnZkRzkwZVhCbExuTmxkRVJsZG1salpVOXlaMWdnUFNCbWRXNWpkR2x2YmlBb1pHOTRLU0I3WEc0Z0lIUm9hWE11YkdSbGRtbGpaVTl5WjFnZ1BTQmtiM2c3WEc1OU8xeHVYRzVVY21GdWMyWnZjbTB1Y0hKdmRHOTBlWEJsTG1kbGRFUmxkbWxqWlU5eVoxa2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSEpsZEhWeWJpQjBhR2x6TG14a1pYWnBZMlZQY21kWk8xeHVmVHRjYmx4dVZISmhibk5tYjNKdExuQnliM1J2ZEhsd1pTNXpaWFJFWlhacFkyVlBjbWRaSUQwZ1puVnVZM1JwYjI0Z0tHUnZlU2tnZTF4dUlDQjBhR2x6TG14a1pYWnBZMlZQY21kWklEMGdaRzk1TzF4dWZUdGNibHh1VkhKaGJuTm1iM0p0TG5CeWIzUnZkSGx3WlM1blpYUkVaWFpwWTJWRmVIUllJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1c1pHVjJhV05sUlhoMFdEdGNibjA3WEc1Y2JsUnlZVzV6Wm05eWJTNXdjbTkwYjNSNWNHVXVjMlYwUkdWMmFXTmxSWGgwV0NBOUlHWjFibU4wYVc5dUlDaGtaWGdwSUh0Y2JpQWdkR2hwY3k1c1pHVjJhV05sUlhoMFdDQTlJR1JsZUR0Y2JuMDdYRzVjYmxSeVlXNXpabTl5YlM1d2NtOTBiM1I1Y0dVdVoyVjBSR1YyYVdObFJYaDBXU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnY21WMGRYSnVJSFJvYVhNdWJHUmxkbWxqWlVWNGRGazdYRzU5TzF4dVhHNVVjbUZ1YzJadmNtMHVjSEp2ZEc5MGVYQmxMbk5sZEVSbGRtbGpaVVY0ZEZrZ1BTQm1kVzVqZEdsdmJpQW9aR1Y1S1NCN1hHNGdJSFJvYVhNdWJHUmxkbWxqWlVWNGRGa2dQU0JrWlhrN1hHNTlPMXh1WEc1VWNtRnVjMlp2Y20wdWNISnZkRzkwZVhCbExuUnlZVzV6Wm05eWJWZ2dQU0JtZFc1amRHbHZiaUFvZUNrZ2UxeHVJQ0IyWVhJZ2VFUmxkbWxqWlNBOUlEQXVNRHRjYmlBZ2RtRnlJSGR2Y214a1JYaDBXQ0E5SUhSb2FYTXViSGR2Y214a1JYaDBXRHRjYmlBZ2FXWWdLSGR2Y214a1JYaDBXQ0FoUFNBd0xqQXBJSHRjYmlBZ0lDQjRSR1YyYVdObElEMGdkR2hwY3k1c1pHVjJhV05sVDNKbldDQXJJQ2g0SUMwZ2RHaHBjeTVzZDI5eWJHUlBjbWRZS1NBcUlIUm9hWE11YkdSbGRtbGpaVVY0ZEZnZ0x5QjNiM0pzWkVWNGRGZzdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdlRVJsZG1salpUdGNibjA3WEc1Y2JsUnlZVzV6Wm05eWJTNXdjbTkwYjNSNWNHVXVkSEpoYm5ObWIzSnRXU0E5SUdaMWJtTjBhVzl1SUNoNUtTQjdYRzRnSUhaaGNpQjVSR1YyYVdObElEMGdNQzR3TzF4dUlDQjJZWElnZDI5eWJHUkZlSFJaSUQwZ2RHaHBjeTVzZDI5eWJHUkZlSFJaTzF4dUlDQnBaaUFvZDI5eWJHUkZlSFJaSUNFOUlEQXVNQ2tnZTF4dUlDQWdJSGxFWlhacFkyVWdQU0IwYUdsekxteGtaWFpwWTJWUGNtZFpJQ3NnS0hrZ0xTQjBhR2x6TG14M2IzSnNaRTl5WjFrcElDb2dkR2hwY3k1c1pHVjJhV05sUlhoMFdTQXZJSGR2Y214a1JYaDBXVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUI1UkdWMmFXTmxPMXh1ZlR0Y2JseHVWSEpoYm5ObWIzSnRMbkJ5YjNSdmRIbHdaUzVwYm5abGNuTmxWSEpoYm5ObWIzSnRXQ0E5SUdaMWJtTjBhVzl1SUNoNEtTQjdYRzRnSUhaaGNpQjRWMjl5YkdRZ1BTQXdMakE3WEc0Z0lIWmhjaUJrWlhacFkyVkZlSFJZSUQwZ2RHaHBjeTVzWkdWMmFXTmxSWGgwV0R0Y2JpQWdhV1lnS0dSbGRtbGpaVVY0ZEZnZ0lUMGdNQzR3S1NCN1hHNGdJQ0FnZUZkdmNteGtJRDBnZEdocGN5NXNkMjl5YkdSUGNtZFlJQ3NnS0hnZ0xTQjBhR2x6TG14a1pYWnBZMlZQY21kWUtTQXFJSFJvYVhNdWJIZHZjbXhrUlhoMFdDQXZJR1JsZG1salpVVjRkRmc3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZUZkdmNteGtPMXh1ZlR0Y2JseHVWSEpoYm5ObWIzSnRMbkJ5YjNSdmRIbHdaUzVwYm5abGNuTmxWSEpoYm5ObWIzSnRXU0E5SUdaMWJtTjBhVzl1SUNoNUtTQjdYRzRnSUhaaGNpQjVWMjl5YkdRZ1BTQXdMakE3WEc0Z0lIWmhjaUJrWlhacFkyVkZlSFJaSUQwZ2RHaHBjeTVzWkdWMmFXTmxSWGgwV1R0Y2JpQWdhV1lnS0dSbGRtbGpaVVY0ZEZrZ0lUMGdNQzR3S1NCN1hHNGdJQ0FnZVZkdmNteGtJRDBnZEdocGN5NXNkMjl5YkdSUGNtZFpJQ3NnS0hrZ0xTQjBhR2x6TG14a1pYWnBZMlZQY21kWktTQXFJSFJvYVhNdWJIZHZjbXhrUlhoMFdTQXZJR1JsZG1salpVVjRkRms3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSGxYYjNKc1pEdGNibjA3WEc1Y2JsUnlZVzV6Wm05eWJTNXdjbTkwYjNSNWNHVXVhVzUyWlhKelpWUnlZVzV6Wm05eWJWQnZhVzUwSUQwZ1puVnVZM1JwYjI0Z0tHbHVVRzlwYm5RcElIdGNiaUFnZG1GeUlHOTFkRkJ2YVc1MElEMGdibVYzSUZCdmFXNTBSQ2gwYUdsekxtbHVkbVZ5YzJWVWNtRnVjMlp2Y20xWUtHbHVVRzlwYm5RdWVDa3NJSFJvYVhNdWFXNTJaWEp6WlZSeVlXNXpabTl5YlZrb2FXNVFiMmx1ZEM1NUtTazdYRzRnSUhKbGRIVnliaUJ2ZFhSUWIybHVkRHRjYm4wN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdWSEpoYm5ObWIzSnRPMXh1WEc0dktpb3FMeUI5S1N4Y2JpOHFJREl4SUNvdlhHNHZLaW9xTHlBb1puVnVZM1JwYjI0b2JXOWtkV3hsTENCbGVIQnZjblJ6S1NCN1hHNWNibVoxYm1OMGFXOXVJRVZ0YVhSMFpYSW9LU0I3WEc0Z0lIUm9hWE11YkdsemRHVnVaWEp6SUQwZ1cxMDdYRzU5WEc1Y2JuWmhjaUJ3SUQwZ1JXMXBkSFJsY2k1d2NtOTBiM1I1Y0dVN1hHNWNibkF1WVdSa1RHbHpkR1Z1WlhJZ1BTQm1kVzVqZEdsdmJpQW9aWFpsYm5Rc0lHTmhiR3hpWVdOcktTQjdYRzRnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbkIxYzJnb2UxeHVJQ0FnSUdWMlpXNTBPaUJsZG1WdWRDeGNiaUFnSUNCallXeHNZbUZqYXpvZ1kyRnNiR0poWTJ0Y2JpQWdmU2s3WEc1OU8xeHVYRzV3TG5KbGJXOTJaVXhwYzNSbGJtVnlJRDBnWm5WdVkzUnBiMjRnS0dWMlpXNTBMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQm1iM0lnS0haaGNpQnBJRDBnZEdocGN5NXNhWE4wWlc1bGNuTXViR1Z1WjNSb095QnBJRDQ5SURBN0lHa3RMU2tnZTF4dUlDQWdJSFpoY2lCc0lEMGdkR2hwY3k1c2FYTjBaVzVsY25OYmFWMDdYRzVjYmlBZ0lDQnBaaUFvYkM1bGRtVnVkQ0E5UFQwZ1pYWmxiblFnSmlZZ2JDNWpZV3hzWW1GamF5QTlQVDBnWTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbk53YkdsalpTaHBMQ0F4S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc1Y2JuQXVaVzFwZENBOUlHWjFibU4wYVc5dUlDaGxkbVZ1ZEN3Z1pHRjBZU2tnZTF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJHbHpkR1Z1WlhKekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdkbUZ5SUd3Z1BTQjBhR2x6TG14cGMzUmxibVZ5YzF0cFhUdGNibHh1SUNBZ0lHbG1JQ2hsZG1WdWRDQTlQVDBnYkM1bGRtVnVkQ2tnZTF4dUlDQWdJQ0FnYkM1allXeHNZbUZqYXloa1lYUmhLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUlcxcGRIUmxjanRjYmx4dUx5b3FLaThnZlNrc1hHNHZLaUF5TWlBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5a2dlMXh1WEc1MllYSWdUR0Y1YjNWMFEyOXVjM1JoYm5SeklEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd6S1R0Y2JseHVablZ1WTNScGIyNGdSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITW9LU0I3ZlZ4dVhHNHZMMFpFVEdGNWIzVjBRMjl1YzNSaGJuUnpJR2x1YUdWeWFYUnpJSE4wWVhScFl5QndjbTl3Y3lCcGJpQk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhOY2JtWnZjaUFvZG1GeUlIQnliM0FnYVc0Z1RHRjViM1YwUTI5dWMzUmhiblJ6S1NCN1hHNGdJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpXM0J5YjNCZElEMGdUR0Y1YjNWMFEyOXVjM1JoYm5SelczQnliM0JkTzF4dWZWeHVYRzVHUkV4aGVXOTFkRU52Ym5OMFlXNTBjeTVOUVZoZlNWUkZVa0ZVU1U5T1V5QTlJREkxTURBN1hHNWNia1pFVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZSVVJIUlY5TVJVNUhWRWdnUFNBMU1EdGNia1pFVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZVMUJTU1U1SFgxTlVVa1ZPUjFSSUlEMGdNQzQwTlR0Y2JrWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrUkZSa0ZWVEZSZlVrVlFWVXhUU1U5T1gxTlVVa1ZPUjFSSUlEMGdORFV3TUM0d08xeHVSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOUhVa0ZXU1ZSWlgxTlVVa1ZPUjFSSUlEMGdNQzQwTzF4dVJrUk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVJFVkdRVlZNVkY5RFQwMVFUMVZPUkY5SFVrRldTVlJaWDFOVVVrVk9SMVJJSUQwZ01TNHdPMXh1UmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlIVWtGV1NWUlpYMUpCVGtkRlgwWkJRMVJQVWlBOUlETXVPRHRjYmtaRVRHRjViM1YwUTI5dWMzUmhiblJ6TGtSRlJrRlZURlJmUTA5TlVFOVZUa1JmUjFKQlZrbFVXVjlTUVU1SFJWOUdRVU5VVDFJZ1BTQXhMalU3WEc1R1JFeGhlVzkxZEVOdmJuTjBZVzUwY3k1RVJVWkJWVXhVWDFWVFJWOVRUVUZTVkY5SlJFVkJURjlGUkVkRlgweEZUa2RVU0Y5RFFVeERWVXhCVkVsUFRpQTlJSFJ5ZFdVN1hHNUdSRXhoZVc5MWRFTnZibk4wWVc1MGN5NUVSVVpCVlV4VVgxVlRSVjlUVFVGU1ZGOVNSVkJWVEZOSlQwNWZVa0ZPUjBWZlEwRk1RMVZNUVZSSlQwNGdQU0IwY25WbE8xeHVSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOURUMDlNU1U1SFgwWkJRMVJQVWw5SlRrTlNSVTFGVGxSQlRDQTlJREF1TlR0Y2JrWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrMUJXRjlPVDBSRlgwUkpVMUJNUVVORlRVVk9WRjlKVGtOU1JVMUZUbFJCVENBOUlERXdNQzR3TzF4dVJrUk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNdVRVRllYMDVQUkVWZlJFbFRVRXhCUTBWTlJVNVVJRDBnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE11VFVGWVgwNVBSRVZmUkVsVFVFeEJRMFZOUlU1VVgwbE9RMUpGVFVWT1ZFRk1JQ29nTXp0Y2JrWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrMUpUbDlTUlZCVlRGTkpUMDVmUkVsVFZDQTlJRVpFVEdGNWIzVjBRMjl1YzNSaGJuUnpMa1JGUmtGVlRGUmZSVVJIUlY5TVJVNUhWRWdnTHlBeE1DNHdPMXh1UmtSTVlYbHZkWFJEYjI1emRHRnVkSE11UTA5T1ZrVlNSMFZPUTBWZlEwaEZRMHRmVUVWU1NVOUVJRDBnTVRBd08xeHVSa1JNWVhsdmRYUkRiMjV6ZEdGdWRITXVVRVZTWDB4RlZrVk1YMGxFUlVGTVgwVkVSMFZmVEVWT1IxUklYMFpCUTFSUFVpQTlJREF1TVR0Y2JrWkVUR0Y1YjNWMFEyOXVjM1JoYm5SekxrMUpUbDlGUkVkRlgweEZUa2RVU0NBOUlERTdYRzVHUkV4aGVXOTFkRU52Ym5OMFlXNTBjeTVIVWtsRVgwTkJURU5WVEVGVVNVOU9YME5JUlVOTFgxQkZVa2xQUkNBOUlERXdPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVaRVRHRjViM1YwUTI5dWMzUmhiblJ6TzF4dVhHNHZLaW9xTHlCOUtTeGNiaThxSURJeklDb3ZYRzR2S2lvcUx5QW9ablZ1WTNScGIyNG9iVzlrZFd4bExDQmxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLU0I3WEc1Y2JuWmhjaUJNUldSblpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvTnlrN1hHNTJZWElnUmtSTVlYbHZkWFJEYjI1emRHRnVkSE1nUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktESXlLVHRjYmx4dVpuVnVZM1JwYjI0Z1JrUk1ZWGx2ZFhSRlpHZGxLSE52ZFhKalpTd2dkR0Z5WjJWMExDQjJSV1JuWlNrZ2UxeHVJQ0JNUldSblpTNWpZV3hzS0hSb2FYTXNJSE52ZFhKalpTd2dkR0Z5WjJWMExDQjJSV1JuWlNrN1hHNGdJSFJvYVhNdWFXUmxZV3hNWlc1bmRHZ2dQU0JHUkV4aGVXOTFkRU52Ym5OMFlXNTBjeTVFUlVaQlZVeFVYMFZFUjBWZlRFVk9SMVJJTzF4dWZWeHVYRzVHUkV4aGVXOTFkRVZrWjJVdWNISnZkRzkwZVhCbElEMGdUMkpxWldOMExtTnlaV0YwWlNoTVJXUm5aUzV3Y205MGIzUjVjR1VwTzF4dVhHNW1iM0lnS0haaGNpQndjbTl3SUdsdUlFeEZaR2RsS1NCN1hHNGdJRVpFVEdGNWIzVjBSV1JuWlZ0d2NtOXdYU0E5SUV4RlpHZGxXM0J5YjNCZE8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVaRVRHRjViM1YwUldSblpUdGNibHh1THlvcUtpOGdmU2tzWEc0dktpQXlOQ0FxTDF4dUx5b3FLaThnS0daMWJtTjBhVzl1S0cxdlpIVnNaU3dnWlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrZ2UxeHVYRzUyWVhJZ1RFNXZaR1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktERXpLVHRjYmx4dVpuVnVZM1JwYjI0Z1JrUk1ZWGx2ZFhST2IyUmxLR2R0TENCc2IyTXNJSE5wZW1Vc0lIWk9iMlJsS1NCN1hHNGdJQzh2SUdGc2RHVnlibUYwYVhabElHTnZibk4wY25WamRHOXlJR2x6SUdoaGJtUnNaV1FnYVc1emFXUmxJRXhPYjJSbFhHNGdJRXhPYjJSbExtTmhiR3dvZEdocGN5d2daMjBzSUd4dll5d2djMmw2WlN3Z2RrNXZaR1VwTzF4dUlDQXZMMU53Y21sdVp5d2djbVZ3ZFd4emFXOXVJR0Z1WkNCbmNtRjJhWFJoZEdsdmJtRnNJR1p2Y21ObGN5QmhZM1JwYm1jZ2IyNGdkR2hwY3lCdWIyUmxYRzRnSUhSb2FYTXVjM0J5YVc1blJtOXlZMlZZSUQwZ01EdGNiaUFnZEdocGN5NXpjSEpwYm1kR2IzSmpaVmtnUFNBd08xeHVJQ0IwYUdsekxuSmxjSFZzYzJsdmJrWnZjbU5sV0NBOUlEQTdYRzRnSUhSb2FYTXVjbVZ3ZFd4emFXOXVSbTl5WTJWWklEMGdNRHRjYmlBZ2RHaHBjeTVuY21GMmFYUmhkR2x2YmtadmNtTmxXQ0E5SURBN1hHNGdJSFJvYVhNdVozSmhkbWwwWVhScGIyNUdiM0pqWlZrZ1BTQXdPMXh1SUNBdkwwRnRiM1Z1ZENCaWVTQjNhR2xqYUNCMGFHbHpJRzV2WkdVZ2FYTWdkRzhnWW1VZ2JXOTJaV1FnYVc0Z2RHaHBjeUJwZEdWeVlYUnBiMjVjYmlBZ2RHaHBjeTVrYVhOd2JHRmpaVzFsYm5SWUlEMGdNRHRjYmlBZ2RHaHBjeTVrYVhOd2JHRmpaVzFsYm5SWklEMGdNRHRjYmx4dUlDQXZMMU4wWVhKMElHRnVaQ0JtYVc1cGMyZ2daM0pwWkNCamIyOXlaR2x1WVhSbGN5QjBhR0YwSUhSb2FYTWdibTlrWlNCcGN5Qm1ZV3hzWlc0Z2FXNTBiMXh1SUNCMGFHbHpMbk4wWVhKMFdDQTlJREE3WEc0Z0lIUm9hWE11Wm1sdWFYTm9XQ0E5SURBN1hHNGdJSFJvYVhNdWMzUmhjblJaSUQwZ01EdGNiaUFnZEdocGN5NW1hVzVwYzJoWklEMGdNRHRjYmx4dUlDQXZMMGRsYjIxbGRISnBZeUJ1WldsbmFHSnZjbk1nYjJZZ2RHaHBjeUJ1YjJSbFhHNGdJSFJvYVhNdWMzVnljbTkxYm1ScGJtY2dQU0JiWFR0Y2JuMWNibHh1UmtSTVlYbHZkWFJPYjJSbExuQnliM1J2ZEhsd1pTQTlJRTlpYW1WamRDNWpjbVZoZEdVb1RFNXZaR1V1Y0hKdmRHOTBlWEJsS1R0Y2JseHVabTl5SUNoMllYSWdjSEp2Y0NCcGJpQk1UbTlrWlNrZ2UxeHVJQ0JHUkV4aGVXOTFkRTV2WkdWYmNISnZjRjBnUFNCTVRtOWtaVnR3Y205d1hUdGNibjFjYmx4dVJrUk1ZWGx2ZFhST2IyUmxMbkJ5YjNSdmRIbHdaUzV6WlhSSGNtbGtRMjl2Y21ScGJtRjBaWE1nUFNCbWRXNWpkR2x2YmlBb1gzTjBZWEowV0N3Z1gyWnBibWx6YUZnc0lGOXpkR0Z5ZEZrc0lGOW1hVzVwYzJoWktTQjdYRzRnSUhSb2FYTXVjM1JoY25SWUlEMGdYM04wWVhKMFdEdGNiaUFnZEdocGN5NW1hVzVwYzJoWUlEMGdYMlpwYm1semFGZzdYRzRnSUhSb2FYTXVjM1JoY25SWklEMGdYM04wWVhKMFdUdGNiaUFnZEdocGN5NW1hVzVwYzJoWklEMGdYMlpwYm1semFGazdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFWkVUR0Y1YjNWMFRtOWtaVHRjYmx4dUx5b3FLaThnZlNrc1hHNHZLaUF5TlNBcUwxeHVMeW9xS2k4Z0tHWjFibU4wYVc5dUtHMXZaSFZzWlN3Z1pYaHdiM0owY3lrZ2UxeHVYRzVtZFc1amRHbHZiaUJFYVcxbGJuTnBiMjVFS0hkcFpIUm9MQ0JvWldsbmFIUXBJSHRjYmlBZ2RHaHBjeTUzYVdSMGFDQTlJREE3WEc0Z0lIUm9hWE11YUdWcFoyaDBJRDBnTUR0Y2JpQWdhV1lnS0hkcFpIUm9JQ0U5UFNCdWRXeHNJQ1ltSUdobGFXZG9kQ0FoUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJSFJvYVhNdWFHVnBaMmgwSUQwZ2FHVnBaMmgwTzF4dUlDQWdJSFJvYVhNdWQybGtkR2dnUFNCM2FXUjBhRHRjYmlBZ2ZWeHVmVnh1WEc1RWFXMWxibk5wYjI1RUxuQnliM1J2ZEhsd1pTNW5aWFJYYVdSMGFDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11ZDJsa2RHZzdYRzU5TzF4dVhHNUVhVzFsYm5OcGIyNUVMbkJ5YjNSdmRIbHdaUzV6WlhSWGFXUjBhQ0E5SUdaMWJtTjBhVzl1SUNoM2FXUjBhQ2tnZTF4dUlDQjBhR2x6TG5kcFpIUm9JRDBnZDJsa2RHZzdYRzU5TzF4dVhHNUVhVzFsYm5OcGIyNUVMbkJ5YjNSdmRIbHdaUzVuWlhSSVpXbG5hSFFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhKbGRIVnliaUIwYUdsekxtaGxhV2RvZER0Y2JuMDdYRzVjYmtScGJXVnVjMmx2YmtRdWNISnZkRzkwZVhCbExuTmxkRWhsYVdkb2RDQTlJR1oxYm1OMGFXOXVJQ2hvWldsbmFIUXBJSHRjYmlBZ2RHaHBjeTVvWldsbmFIUWdQU0JvWldsbmFIUTdYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFUnBiV1Z1YzJsdmJrUTdYRzVjYmk4cUtpb3ZJSDBwTEZ4dUx5b2dNallnS2k5Y2JpOHFLaW92SUNobWRXNWpkR2x2YmlodGIyUjFiR1VzSUdWNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cElIdGNibHh1WTI5dWMzUWdUR2x1YTJWa1RHbHpkQ0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b01Ua3BPMXh1WEc1bWRXNWpkR2x2YmlCUmRXbGphM052Y25Rb0tTQjdmVnh1WEc1UmRXbGphM052Y25RdVoyVjBYMjlpYW1WamRGOWhkQ0E5SUdaMWJtTjBhVzl1SUNoc2FYTjBMQ0JwS1NCN1hHNGdJQ0FnYVdZZ0tHeHBjM1FnYVc1emRHRnVZMlZ2WmlCQmNuSmhlU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdsemRGdHBYVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3hwYzNRZ2FXNXpkR0Z1WTJWdlppQk1hVzVyWldSTWFYTjBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJzYVhOMExtZGxkRjl2WW1wbFkzUmZZWFFvYVNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1VVhWcFkydHpiM0owTG5ObGRGOXZZbXBsWTNSZllYUWdQU0JtZFc1amRHbHZiaUFvYkdsemRDd2dhU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQnBaaUFvYkdsemRDQnBibk4wWVc1alpXOW1JRUZ5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJR3hwYzNSYmFWMGdQU0IyWVd4MVpUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHeHBjM1FnYVc1emRHRnVZMlZ2WmlCTWFXNXJaV1JNYVhOMEtTQjdYRzRnSUNBZ0lDQWdJR3hwYzNRdWMyVjBYMjlpYW1WamRGOWhkQ2hwTENCMllXeDFaU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVVWFZwWTJ0emIzSjBMbkYxYVdOcmMyOXlkQ0E5SUdaMWJtTjBhVzl1SUNoc2FYTjBMQ0JqYjIxd1lYSnBjMjl1WDJadUtTQjdYRzVjYmlBZ0lDQXZMeUJwYm5CMWRDQnRkWE4wSUdKbElHRnVJR2x1YzNSaGJtTmxJRzltSUV4cGJtdGxaRXhwYzNRZ1kyeGhjM01nYjNJZ2JYVnpkQ0JpWlNCaGJpQmhjbkpoZVNCcGJpQnZjbVJsY2lCMGJ5QnpiM0owWEc0Z0lDQWdhV1lnS0NFb2JHbHpkQ0JwYm5OMFlXNWpaVzltSUV4cGJtdGxaRXhwYzNRZ2ZId2diR2x6ZENCcGJuTjBZVzVqWlc5bUlFRnljbUY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlHTnZiWEJoY21semIyNWZablZ1WTNScGIyNGdQU0JqYjIxd1lYSnBjMjl1WDJadU8xeHVYRzRnSUNBZ2FXWWdLR052YlhCaGNtbHpiMjVmWm5WdVkzUnBiMjRnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0JqYjIxd1lYSnBjMjl1WDJaMWJtTjBhVzl1SUQwZ1VYVnBZMnR6YjNKMExtTnZiWEJoY21VN1hHNGdJQ0FnZlZ4dUlDQWdJSFpoY2lCbGJtUmZhVzVrWlhnN1hHNWNiaUFnSUNCcFppQW9iR2x6ZENCcGJuTjBZVzVqWlc5bUlFeHBibXRsWkV4cGMzUXBJSHRjYmlBZ0lDQWdJQ0FnWlc1a1gybHVaR1Y0SUQwZ2JHbHpkQzV6YVhwbEtDazdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHNhWE4wSUdsdWMzUmhibU5sYjJZZ1FYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ1pXNWtYMmx1WkdWNElEMGdiR2x6ZEM1c1pXNW5kR2dnTFNBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGQnlaWFpsYm5RZ1pXMXdkSGtnYkdsemRITWdiM0lnWVhKeVlYbHpMbHh1SUNBZ0lHbG1JQ2hsYm1SZmFXNWtaWGdnUGowZ01Da2dlMXh1SUNBZ0lDQWdJQ0JSZFdsamEzTnZjblF1Y1hWcFkydHpiM0owWDJKbGRIZGxaVzVmYVc1a2FXTmxjeWhzYVhOMExDQXdMQ0JsYm1SZmFXNWtaWGdzSUdOdmJYQmhjbWx6YjI1ZlpuVnVZM1JwYjI0cE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxGMWFXTnJjMjl5ZEM1eGRXbGphM052Y25SZlltVjBkMlZsYmw5cGJtUnBZMlZ6SUQwZ1puVnVZM1JwYjI0Z0tHeHBjM1FzSUd4dmR5d2dhR2xuYUN3Z1kyOXRjR0Z5YVhOdmJsOW1iaWtnZTF4dVhHNGdJQ0FnTHk4Z2FXNXdkWFFnYlhWemRDQmlaU0JoYmlCcGJuTjBZVzVqWlNCdlppQk1hVzVyWldSTWFYTjBJR05zWVhOeklHOXlJRzExYzNRZ1ltVWdZVzRnWVhKeVlYa2dhVzRnYjNKa1pYSWdkRzhnYzI5eWRGeHVJQ0FnSUdsbUlDZ2hLR3hwYzNRZ2FXNXpkR0Z1WTJWdlppQk1hVzVyWldSTWFYTjBJSHg4SUd4cGMzUWdhVzV6ZEdGdVkyVnZaaUJCY25KaGVTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hqYjIxd1lYSnBjMjl1WDJadUlEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXRjR0Z5YVhOdmJsOW1iaUE5SUZGMWFXTnJjMjl5ZEM1amIyMXdZWEpsTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFpoY2lCcElEMGdiRzkzTzF4dUlDQWdJSFpoY2lCcUlEMGdhR2xuYUR0Y2JpQWdJQ0IyWVhJZ2JXbGtaR3hsU1c1a1pYZ2dQU0JOWVhSb0xtWnNiMjl5S0NocElDc2dhaWtnTHlBeUtUdGNiaUFnSUNCMllYSWdiV2xrWkd4bElEMGdVWFZwWTJ0emIzSjBMbWRsZEY5dlltcGxZM1JmWVhRb2JHbHpkQ3dnYldsa1pHeGxTVzVrWlhncE8xeHVYRzRnSUNBZ1pHOGdlMXh1WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2hqYjIxd1lYSnBjMjl1WDJadUtGRjFhV05yYzI5eWRDNW5aWFJmYjJKcVpXTjBYMkYwS0d4cGMzUXNJR2twTENCdGFXUmtiR1VwS1NCN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdrckt6dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2hqYjIxd1lYSnBjMjl1WDJadUtHMXBaR1JzWlN3Z1VYVnBZMnR6YjNKMExtZGxkRjl2WW1wbFkzUmZZWFFvYkdsemRDd2dhaWtwS1NCN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdvdExUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBJRHc5SUdvcElIdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFJsYlhBZ1BTQlJkV2xqYTNOdmNuUXVaMlYwWDI5aWFtVmpkRjloZENoc2FYTjBMQ0JwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRkYxYVdOcmMyOXlkQzV6WlhSZmIySnFaV04wWDJGMEtHeHBjM1FzSUdrc0lGRjFhV05yYzI5eWRDNW5aWFJmYjJKcVpXTjBYMkYwS0d4cGMzUXNJR29wS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRkYxYVdOcmMyOXlkQzV6WlhSZmIySnFaV04wWDJGMEtHeHBjM1FzSUdvc0lIUmxiWEFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhU3NyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhaTB0TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCM2FHbHNaU0FvYVNBOFBTQnFLVHRjYmx4dUlDQWdJR2xtSUNoc2IzY2dQQ0JxS1NCN1hHNWNiaUFnSUNBZ0lDQWdVWFZwWTJ0emIzSjBMbkYxYVdOcmMyOXlkRjlpWlhSM1pXVnVYMmx1WkdsalpYTW9iR2x6ZEN3Z2JHOTNMQ0JxTENCamIyMXdZWEpwYzI5dVgyWnVLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdsbmFDQStJR2twSUh0Y2JseHVJQ0FnSUNBZ0lDQlJkV2xqYTNOdmNuUXVjWFZwWTJ0emIzSjBYMkpsZEhkbFpXNWZhVzVrYVdObGN5aHNhWE4wTENCcExDQm9hV2RvTENCamIyMXdZWEpwYzI5dVgyWnVLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNHZMeUIwYUdseklHWjFibU4wYVc5dUlHMTFjM1FnWW1VZ2IzWmxjbkpwWkdWdUlHWnZjaUJ6YjNKMGFXNW5JR1JwWm1abGNtVnVkQ0JrWVhSaElIUjVjR1Z6S0dVdVp5NGdjM1J5YVc1bkxDQnBiblJsWjJWeUlHVjBZeTRwWEc1UmRXbGphM052Y25RdVkyOXRjR0Z5WlNBOUlHWjFibU4wYVc5dUlDaGhMQ0JpS1NCN1hHNGdJQ0FnY21WMGRYSnVJR0lnUGlCaE8xeHVmVHRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCUmRXbGphM052Y25RN1hHNWNiaThxS2lvdklIMHBYRzR2S2lvcUtpb3FMeUJkS1R0Y2JuMHBPeUlzSW5aaGNpQk1ZWGx2ZFhSRGIyNXpkR0Z1ZEhNZ1BTQnlaWEYxYVhKbEtDZHNZWGx2ZFhRdFltRnpaU2NwTGt4aGVXOTFkRU52Ym5OMFlXNTBjenRjYmx4dVpuVnVZM1JwYjI0Z1FWWlRSRVpEYjI1emRHRnVkSE1vS1h0OVhHNWNiaTh2SUVGV1UwUkdRMjl1YzNSaGJuUnpJR2x1YUdWeWFYUnpJSEJ5YjNCbGNuUnBaWE1nYVc0Z1RHRjViM1YwUTI5dWMzUmhiblJ6WEc1bWIzSW9kbUZ5SUhCeWIzQWdhVzRnVEdGNWIzVjBRMjl1YzNSaGJuUnpLWHRjYmlBZ0lDQkJWbE5FUmtOdmJuTjBZVzUwYzF0d2NtOXdYU0E5SUV4aGVXOTFkRU52Ym5OMFlXNTBjMXR3Y205d1hUdGNibjFjYmx4dVFWWlRSRVpEYjI1emRHRnVkSE11UkVWR1FWVk1WRjlPVDBSRlgxTkZVRUZTUVZSSlQwNGdQU0EyTUR0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkJWbE5FUmtOdmJuTjBZVzUwY3pzaUxDSXZLaXBjYmlBcUlGUm9hWE1nWTJ4aGMzTWdhVzF3YkdWdFpXNTBjeUJrWVhSaElHRnVaQ0JtZFc1amRHbHZibUZzYVhSNUlISmxjWFZwY21Wa0lHWnZjaUJCVmxORVJpQnNZWGx2ZFhRZ2NHVnlYRzRnS2lCbFpHZGxMbHh1SUNwY2JseHVJQ29nUTI5d2VYSnBaMmgwT2lCcExWWnBjeUJTWlhObFlYSmphQ0JIY205MWNDd2dRbWxzYTJWdWRDQlZibWwyWlhKemFYUjVMQ0F5TURBM0lDMGdjSEpsYzJWdWRGeHVJQ292WEc1Y2JteGxkQ0JNUldSblpTQTlJSEpsY1hWcGNtVW9KMnhoZVc5MWRDMWlZWE5sSnlrdVRFVmtaMlU3WEc1Y2JpOHZJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHZMeUJUWldOMGFXOXVPaUJKYm1sMGFXRnNhWHBoZEdsdmJuTmNiaTh2SUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzVjYm1aMWJtTjBhVzl1SUVGV1UwUkdSV1JuWlNoemIzVnlZMlVzSUhSaGNtZGxkQ3dnZGtWa1oyVXBYRzU3WEc0Z0lDQWdURVZrWjJVdVkyRnNiQ2gwYUdsekxDQnpiM1Z5WTJVc2RHRnlaMlYwTENCMlJXUm5aU2s3WEc1OVhHNWNia0ZXVTBSR1JXUm5aUzV3Y205MGIzUjVjR1VnUFNCUFltcGxZM1F1WTNKbFlYUmxLRXhGWkdkbExuQnliM1J2ZEhsd1pTazdYRzVjYm1admNpQW9iR1YwSUhCeWIzQmxjblJwWlhNZ2FXNGdURVZrWjJVcFhHNTdYRzRnSUNBZ1FWWlRSRVpGWkdkbFczQnliM0JsY25ScFpYTmRJRDBnVEVWa1oyVmJjSEp2Y0dWeWRHbGxjMTA3WEc1OVhHNWNiaTh2SUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzR2THlCVFpXTjBhVzl1T2lCQlkyTmxjM052Y2lCR2RXNWpkR2x2Ym5OY2JpOHZJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNWNiaTh2SUZSb1pTQm1kVzVqZEdsdmJpQm5aWFJQZEdobGNrVnVaQ0J5WlhSMWNtNXpJSFJvWlNCdmRHaGxjaUJsYm1RZ2IyWWdkR2hwY3lCbFpHZGxMbHh1UVZaVFJFWkZaR2RsTG5CeWIzUnZkSGx3WlM1blpYUlBkR2hsY2tWdVpDQTlJR1oxYm1OMGFXOXVLRzV2WkdVcFhHNTdYRzRnSUNBZ2NtVjBkWEp1SUV4RlpHZGxMbkJ5YjNSdmRIbHdaUzVuWlhSUGRHaGxja1Z1WkNodWIyUmxLVHRjYm4wN1hHNWNiaTh2SUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzR2THlCVFpXTjBhVzl1T2lCU1pXMWhhVzVwYm1jZ1JuVnVZM1JwYjI1elhHNHZMeUF0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJR05vWldOcmN5QjNhR1YwYUdWeUlIUm9hWE1nWldSblpTQmpjbTl6YzJWeklIZHBkR2dnZEdobElHbHVjSFYwSUdWa1oyVXVJRWwwWEc0dkx5QnlaWFIxY201eklHWmhiSE5sTENCcFppQmhibmtnYjJZZ2RHaGxJSFpsY25ScFkyVnpJSFJvYjNObElHVmtaMlZ6SUdGeVpTQnBibU5wWkdWdWRDQjBieUJoY21VZ2JtOTBYRzR2THlCNVpYUWdjR3hoWTJWa0lHOXVJSFJvWlNCamFYSmpiR1V1WEc1QlZsTkVSa1ZrWjJVdWNISnZkRzkwZVhCbExtTnliM056WlhOWGFYUm9SV1JuWlNBOUlHWjFibU4wYVc5dUtHOTBhR1Z5UldSblpTbGNibnRjYmlBZ0lDQnNaWFFnYzJWc1ppQTlJSFJvYVhNN1hHNGdJQ0FnYkdWMElITnZkWEpqWlZCdmN5QTlJSE5sYkdZdVoyVjBVMjkxY21ObEtDa3VaMlYwU1c1a1pYZ29LVHRjYmlBZ0lDQnNaWFFnZEdGeVoyVjBVRzl6SUQwZ2MyVnNaaTVuWlhSVVlYSm5aWFFvS1M1blpYUkpibVJsZUNncE8xeHVJQ0FnSUd4bGRDQnZkR2hsY2xOdmRYSmpaVkJ2Y3lBOUlHOTBhR1Z5UldSblpTNW5aWFJUYjNWeVkyVW9LUzVuWlhSSmJtUmxlQ2dwTzF4dUlDQWdJR3hsZENCdmRHaGxjbFJoY21kbGRGQnZjeUE5SUc5MGFHVnlSV1JuWlM1blpYUlVZWEpuWlhRb0tTNW5aWFJKYm1SbGVDZ3BPMXh1SUNBZ0lGeHVJQ0FnSUM4dklHbG1JR0Z1ZVNCdlppQjBhR1VnZG1WeWRHbGpaWE1nZEdodmMyVWdkSGR2SUdWa1oyVnpJR0Z5WlNCdWIzUWdlV1YwSUhCc1lXTmxaRnh1SUNBZ0lHbG1LSE52ZFhKalpWQnZjeUE5UFQwZ0xURWdmSHdnZEdGeVoyVjBVRzl6SUQwOVBTQXRNU0I4ZkNCdmRHaGxjbE52ZFhKalpWQnZjeUE5UFQwZ0xURWdmSHdnYjNSb1pYSlVZWEpuWlhSUWIzTWdQVDA5SUMweEtWeHVJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0J2ZEdobGNsTnZkWEpqWlVScGMzUWdQU0J2ZEdobGNrVmtaMlV1WjJWMFUyOTFjbU5sS0NrdVoyVjBRMmx5WTBScGMzUlhhWFJvVkdobFRtOWtaU2h6Wld4bUxtZGxkRk52ZFhKalpTZ3BLVHRjYmlBZ0lDQnNaWFFnYjNSb1pYSlVZWEpuWlhSRWFYTjBJRDBnYjNSb1pYSkZaR2RsTG1kbGRGUmhjbWRsZENncExtZGxkRU5wY21ORWFYTjBWMmwwYUZSb1pVNXZaR1VvYzJWc1ppNW5aWFJUYjNWeVkyVW9LU2s3WEc0Z0lDQWdiR1YwSUhSb2FYTlVZWEpuWlhSRWFYTjBJRDBnYzJWc1ppNW5aWFJVWVhKblpYUW9LUzVuWlhSRGFYSmpSR2x6ZEZkcGRHaFVhR1ZPYjJSbEtITmxiR1l1WjJWMFUyOTFjbU5sS0NrcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhOVVlYSm5aWFJFYVhOMElEd2dUV0YwYUM1dFlYZ29iM1JvWlhKVGIzVnlZMlZFYVhOMExDQnZkR2hsY2xSaGNtZGxkRVJwYzNRcElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpWR0Z5WjJWMFJHbHpkQ0ErSUUxaGRHZ3ViV2x1S0c5MGFHVnlVMjkxY21ObFJHbHpkQ3dnYjNSb1pYSlVZWEpuWlhSRWFYTjBLU0FtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5MGFHVnlWR0Z5WjJWMFJHbHpkQ0FoUFQwZ01DQW1KaUJ2ZEdobGNsTnZkWEpqWlVScGMzUWdJVDA5SURBcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzU5TzF4dVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlISmxkSFZ5Ym5NZ01TQnBaaUIwYUdseklHVmtaMlVnWTNKdmMzTmxjeUIzYVhSb0lIUm9aU0JwYm5CMWRDQmxaR2RsTENBd1hHNHZMeUJ2ZEdobGNuZHBjMlV1WEc1QlZsTkVSa1ZrWjJVdWNISnZkRzkwZVhCbExtTnliM056YVc1blYybDBhRVZrWjJVZ1BTQm1kVzVqZEdsdmJpaHZkR2hsY2tWa1oyVXBYRzU3WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVJQ0FnSUd4bGRDQnlaWE4xYkhRZ1BTQnpaV3htTG1OeWIzTnpaWE5YYVhSb1JXUm5aU2h2ZEdobGNrVmtaMlVwTzF4dVhHNGdJQ0FnY21WMGRYSnVJQ0J5WlhOMWJIUWdQeUF4SURvZ01EdGNibjA3WEc1Y2JpOHZJRlJvYVhNZ1puVnVZM1JwYjI0Z1kyRnNZM1ZzWVhSbGN5QjBhR1VnZEc5MFlXd2diblZ0WW1WeUlHOW1JR055YjNOemFXNW5jeUJ2WmlCMGFHbHpJR1ZrWjJVZ2QybDBhRnh1THk4Z1lXeHNJSFJvWlNCbFpHZGxjeUJuYVhabGJpQnBiaUIwYUdVZ2FXNXdkWFFnYkdsemRDNWNia0ZXVTBSR1JXUm5aUzV3Y205MGIzUjVjR1V1WTJGc1kzVnNZWFJsVkc5MFlXeERjbTl6YzJsdVoxZHBkR2hNYVhOMElEMGdablZ1WTNScGIyNG9aV1JuWlV4cGMzUXBYRzU3WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVJQ0FnSUd4bGRDQjBiM1JoYkVOeWIzTnphVzVuSUQwZ01EdGNibHh1SUNBZ0lHVmtaMlZNYVhOMExtWnZja1ZoWTJnb1hHNGdJQ0FnSUNBZ0lDaGxaR2RsS1NBOVBpQjBiM1JoYkVOeWIzTnphVzVuSUNzOUlITmxiR1l1WTNKdmMzTnBibWRYYVhSb1JXUm5aU2hsWkdkbEtWeHVJQ0FnSUNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEc5MFlXeERjbTl6YzJsdVp6dGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1FWWlRSRVpGWkdkbE95SXNJaThxS2x4dUlDb2dWR2hwY3lCamJHRnpjeUJwYlhCc1pXMWxiblJ6SUdSaGRHRWdZVzVrSUdaMWJtTjBhVzl1WVd4cGRIa2djbVZ4ZFdseVpXUWdabTl5SUVGV1UwUkdJR3hoZVc5MWRDQndaWEpjYmlBcUlHTnBjbU5zWlM1Y2JpQXFYRzRnS2x4dUlDb2dRMjl3ZVhKcFoyaDBPaUJwTFZacGN5QlNaWE5sWVhKamFDQkhjbTkxY0N3Z1FtbHNhMlZ1ZENCVmJtbDJaWEp6YVhSNUxDQXlNREEzSUMwZ2NISmxjMlZ1ZEZ4dUlDb3ZYRzVjYm14bGRDQk1SM0poY0dnZ1BTQnlaWEYxYVhKbEtDZHNZWGx2ZFhRdFltRnpaU2NwTGt4SGNtRndhRHRjYmx4dUx5OGdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpOHZJRk5sWTNScGIyNDZJRWx1YVhScFlXeHBlbUYwYVc5dWMxeHVMeThnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNibHh1Wm5WdVkzUnBiMjRnUVZaVFJFWkRhWEpqYkdVb2NHRnlaVzUwTENCbmNtRndhRTFuY2l3Z2RrOWlhbVZqZENsY2JudGNiaUFnSUNCTVIzSmhjR2d1WTJGc2JDaDBhR2x6TENCd1lYSmxiblFzSUdkeVlYQm9UV2R5TENCMlQySnFaV04wS1R0Y2JpQWdJQ0IwYUdsekxtbHVUM0prWlhJZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBTVzVrWlhnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11Ym05a1pWTmxjR0Z5WVhScGIyNGdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdkR2hwY3k1emRHRmpheUE5SUZ0ZE8xeHVJQ0FnSUhSb2FYTXVjR1Z5YVcxbGRHVnlJRDBnTUR0Y2JpQWdJQ0IwYUdsekxtTmxiblJsY2xnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11WTJWdWRHVnlXU0E5SURBN1hHNGdJQ0FnZEdocGN5NXlZV1JwZFhNZ1BTQXdPMXh1ZlZ4dVhHNUJWbE5FUmtOcGNtTnNaUzV3Y205MGIzUjVjR1VnUFNCUFltcGxZM1F1WTNKbFlYUmxLRXhIY21Gd2FDNXdjbTkwYjNSNWNHVXBPMXh1WEc1bWIzSW9iR1YwSUhCeWIzQmxjblI1SUdsdUlFeEhjbUZ3YUNsY2JudGNiaUFnSUNCQlZsTkVSa05wY21Oc1pWdHdjbTl3WlhKMGVWMGdQU0JNUjNKaGNHaGJjSEp2Y0dWeWRIbGRPMXh1ZlZ4dVhHNUJWbE5FUmtOcGNtTnNaUzV3Y205MGIzUjVjR1V1YVc1cGRFOXlaR1Z5YVc1bklEMGdablZ1WTNScGIyNG9LVnh1ZTF4dUlDQWdJSFJvYVhNdWFXNVBjbVJsY2lBOUlGdGRPMXh1ZlR0Y2JseHVMeThnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaTh2SUZObFkzUnBiMjQ2SUVGalkyVnpjMjl5SUVaMWJtTjBhVzl1YzF4dUx5OGdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQnlaWFIxY201eklIUm9aU0JoY25KaGVTQnBiaUIzYUdsamFDQjBhR1VnYm05a1pYTWdiMllnZEdocGN5QmphWEpqYkdVZ1lYSmxJR3RsY0hRZ2FXNGdiM0prWlhJdVhHNUJWbE5FUmtOcGNtTnNaUzV3Y205MGIzUjVjR1V1WjJWMFQzSmtaWElnUFNCbWRXNWpkR2x2YmlncFhHNTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhVzVQY21SbGNqdGNibjA3WEc1Y2JpOHZJRlJvYVhNZ1puVnVZM1JwYjI0Z2NtVjBkWEp1Y3lCMGFHVWdlQzFqYjI5eVpHbHVZWFJsSUc5bUlIUm9aU0JqWlc1MFpYSWdiMllnZEdocGN5QmphWEpqYkdVdVhHNUJWbE5FUmtOcGNtTnNaUzV3Y205MGIzUjVjR1V1WjJWMFEyVnVkR1Z5V0NBOUlHWjFibU4wYVc5dUtDbGNibnRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqWlc1MFpYSllPMXh1ZlR0Y2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQnlaWFIxY201eklIUm9aU0I1TFdOdmIzSmthVzVoZEdVZ2IyWWdkR2hsSUdObGJuUmxjaUJ2WmlCMGFHbHpJR05wY21Oc1pTNWNia0ZXVTBSR1EybHlZMnhsTG5CeWIzUnZkSGx3WlM1blpYUkRaVzUwWlhKWklEMGdablZ1WTNScGIyNG9LVnh1ZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1ObGJuUmxjbGs3WEc1OU8xeHVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJSEpsZEhWeWJuTWdkR2hsSUhKaFpHbDFjeUJ2WmlCMGFHbHpJR05wY21Oc1pTNWNia0ZXVTBSR1EybHlZMnhsTG5CeWIzUnZkSGx3WlM1blpYUlNZV1JwZFhNZ1BTQm1kVzVqZEdsdmJpZ3BYRzU3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y21Ga2FYVnpPMXh1ZlR0Y2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQnlaWFIxY201eklIUm9aU0IwYjNSaGJDQnVkVzFpWlhJZ2IyWWdkbVZ5ZEdsalpYTWdiMllnZEdocGN5QmphWEpqYkdVdVhHNUJWbE5FUmtOcGNtTnNaUzV3Y205MGIzUjVjR1V1WjJWMFUybDZaU0E5SUdaMWJtTjBhVzl1S0NsY2JudGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NW5aWFJPYjJSbGN5Z3BMbXhsYm1kMGFEdGNibjA3WEc1Y2JpOHZJRlJvYVhNZ1puVnVZM1JwYjI0Z1kyRnNZM1ZzWVhSbGN5QmhibVFnY21WMGRYSnVjeUIwYUdVZ2RHOTBZV3dnYm5WdFltVnlJRzltSUdOeWIzTnphVzVuY3lCcGJpQjBhR2x6WEc0dkx5QmphWEpqYkdVZ1lua2dZV1JrYVc1bklIVndJSFJvWlNCamNtOXpjMmx1WnlCdWRXMWlaWElnYjJZZ2FXNWthWFpwWkhWaGJDQnViMlJsY3lCdmJpQnBkQzVjYmtGV1UwUkdRMmx5WTJ4bExuQnliM1J2ZEhsd1pTNW5aWFJVYjNSaGJFTnliM056YVc1blQyWkRhWEpqYkdVZ1BTQm1kVzVqZEdsdmJpZ3BYRzU3WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVJQ0FnSUd4bGRDQmpjbTl6YzJsdVowNTFiV0psY2lBOUlEQTdYRzRnSUNBZ1hHNGdJQ0FnWm05eUtHeGxkQ0J1YjJSbElHbHVJSE5sYkdZdWFXNVBjbVJsY2lsY2JpQWdJQ0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnViMlJsUTNKdmMzTnBibWNnUFNCdWIyUmxMbWRsZEZSdmRHRnNRM0p2YzNOcGJtZFBaa1ZrWjJWektDazdYRzRnSUNBZ0lDQWdJR2xtS0c1dlpHVkRjbTl6YzJsdVp5QTlQVDBnTFRFcFhHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF0TVR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpjbTl6YzJsdVowNTFiV0psY2lBclBTQnViMlJsUTNKdmMzTnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTnliM056YVc1blRuVnRZbVZ5SUM4Z05EdGNibjA3WEc1Y2JpOHZJRlJvYVhNZ1puVnVZM1JwYjI0Z1kyaGxZMnR6SUhkb1pYUm9aWElnYjNJZ2JtOTBJR0ZzYkNCdlppQjBhR1VnZG1WeWRHbGpaWE1nYjJZZ2RHaHBjeUJqYVhKamJHVWdZWEpsWEc0dkx5QmhjM05wWjI1bFpDQmhiaUJwYm1SbGVDQnZiaUIwYUdVZ1kybHlZMnhsTGx4dVFWWlRSRVpEYVhKamJHVXVjSEp2ZEc5MGVYQmxMbWhoYzBacGJtbHphR1ZrVDNKa1pYSnBibWNnUFNCbWRXNWpkR2x2YmlncFhHNTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZM1Z5Y21WdWRFbHVaR1Y0SUQwOVBTQjBhR2x6TG1kbGRFNXZaR1Z6S0NrdWJHVnVaM1JvTzF4dWZUdGNibHh1THk4Z1ZHaHBjeUJtZFc1amRHbHZiaUJ5WlhSMWNtNXpJSFJvWlNCdWIyUmxJSE5sY0dGeVlYUnBiMjRnYjJZZ2RHaHBjeUJqYVhKamJHVXVYRzVCVmxORVJrTnBjbU5zWlM1d2NtOTBiM1I1Y0dVdVoyVjBUbTlrWlZObGNHRnlZWFJwYjI0Z1BTQm1kVzVqZEdsdmJpZ3BYRzU3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Ym05a1pWTmxjR0Z5WVhScGIyNDdYRzU5TzF4dVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlITmxkSE1nZEdobElHNXZaR1VnYzJWd1lYSmhkR2x2YmlCdlppQjBhR2x6SUdOcGNtTnNaUzVjYmtGV1UwUkdRMmx5WTJ4bExuQnliM1J2ZEhsd1pTNXpaWFJPYjJSbFUyVndZWEpoZEdsdmJpQTlJR1oxYm1OMGFXOXVLRzV2WkdWVFpYQmhjbUYwYVc5dUtWeHVlMXh1SUNBZ0lIUm9hWE11Ym05a1pWTmxjR0Z5WVhScGIyNGdQU0J1YjJSbFUyVndZWEpoZEdsdmJqdGNibjA3WEc1Y2JpOHZJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHZMeUJUWldOMGFXOXVPaUJTWlcxaGFXNXBibWNnUm5WdVkzUnBiMjV6WEc0dkx5QXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlIUnlZWFpsY25ObGN5QjBhR1VnZG1WeWRHbGpaWE1nYjJZZ2RHaHBjeUJqYVhKamJHVWdZVzVrSUdOdmNuSmxZM1J6SUhSb1pTQmhibWRzWlZ4dUx5OGdiMllnZEdobElIWmxjblJwWTJWeklIZHBkR2dnY21WemNHVmpkQ0IwYnlCMGFHVnBjaUJqYVhKamJHVWdhVzVrYVdObGN5NWNia0ZXVTBSR1EybHlZMnhsTG5CeWIzUnZkSGx3WlM1amIzSnlaV04wUVc1bmJHVnpJRDBnWm5WdVkzUnBiMjRvS1Z4dWUxeHVJQ0FnSUd4bGRDQnpaV3htSUQwZ2RHaHBjenRjYmlBZ0lDQnpaV3htTG1OMWNuSmxiblJKYm1SbGVDQTlJREE3WEc1Y2JpQWdJQ0J6Wld4bUxtbHVUM0prWlhJdVptOXlSV0ZqYUNoY2JpQWdJQ0FnSUNBZ0tHNXZaR1VwSUQwK0lDQnpaV3htTG5CMWRFbHVUM0prWlhJb2JtOWtaU2xjYmlBZ0lDQXBPMXh1ZlR0Y2JseHVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJSEIxZEhNZ2RHaGxJR2RwZG1WdUlHNXZaR1VnYjI0Z2RHaGxJR05wY21Oc1pTQnBiaUIwYUdVZ1kzVnljbVZ1ZENCdmNtUmxjaUJoYm1SY2JpOHZJSE5sZEhNZ2FYUnpJR0Z1WjJ4bElHRndjSEp2Y0hKcFlYUmxiSGt1WEc1QlZsTkVSa05wY21Oc1pTNXdjbTkwYjNSNWNHVXVjSFYwU1c1UGNtUmxjaUE5SUdaMWJtTjBhVzl1S0c1dlpHVXBYRzU3WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVYRzRnSUNBZ2JHVjBJRzV2WkdWeklEMGdjMlZzWmk1blpYUk9iMlJsY3lncE8xeHVYRzRnSUNBZ0x5OGdUbTkwWlNCMGFHRjBJR2xrSUdGMGRISnBZblYwWlNCdlppQmhJRzV2WkdVZ2FYTWdZV1JrWldRZ1ltVm1iM0psWEc0Z0lDQWdMeThnUVZaVFJFWk1ZWGx2ZFhRZ2FYTWdZMkZzYkdWa1hHNGdJQ0FnYkdWMElHWnZkVzVrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdabTl5S0d4bGRDQnBJRDBnTURzZ2FTQThJRzV2WkdWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHViMlJsYzF0cFhTNXBaQ0E5UFNCdWIyUmxMbWxrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNWdVpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1LQ0ZtYjNWdVpDbGNiaUFnSUNCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUZ3aVZHaGxJRzV2WkdVZ2JYVnpkQ0JpWlNCaElHMWxiV0psY2lCdlppQk1SM0poY0doY0lqdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpXeG1MbWx1VDNKa1pYSmJjMlZzWmk1amRYSnlaVzUwU1c1a1pYaGRJRDBnYm05a1pUdGNiaUFnSUNCdWIyUmxMbk5sZEVsdVpHVjRLSE5sYkdZdVkzVnljbVZ1ZEVsdVpHVjRLVHRjYmx4dUlDQWdJR2xtS0hObGJHWXVZM1Z5Y21WdWRFbHVaR1Y0SUQwOVBTQXdLVnh1SUNBZ0lIdGNiaUFnSUNBZ0lDQWdibTlrWlM1elpYUkJibWRzWlNnd0xqQXBPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxYRzRnSUNBZ2UxeHVJQ0FnSUNBZ0lDQnViMlJsTG5ObGRFRnVaMnhsS0hObGJHWXVhVzVQY21SbGNsdHpaV3htTG1OMWNuSmxiblJKYm1SbGVDQXRJREZkTG1kbGRFRnVaMnhsS0NrZ0t5QXlJQ29nVFdGMGFDNVFTU0FxWEc0Z0lDQWdJQ0FnSUNBZ0lDQW9ibTlrWlM1blpYUkVhV0ZuYjI1aGJDZ3BJQzhnTWlBcklITmxiR1l1Ym05a1pWTmxjR0Z5WVhScGIyNGdLMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWFXNVBjbVJsY2x0elpXeG1MbU4xY25KbGJuUkpibVJsZUNBdElERmRMbWRsZEVScFlXZHZibUZzS0NrZ0x5QXlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5QnpaV3htTG5CbGNtbHRaWFJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWc1ppNWpkWEp5Wlc1MFNXNWtaWGdyS3p0Y2JuMDdYRzVjYmk4dklGUm9hWE1nWm5WdVkzUnBiMjRnY21WMGRYSnVjeUIwYUdVZ2JtVjRkQ0J1YjJSbElIUnZJR0psSUhCc1lXTmxaQ0J2YmlCMGFHbHpJR05wY21Oc1pTQjNhWFJvWEc0dkx5QnlaWE53WldOMElIUnZJSFJvWlNCQlZsTkVSaUJoYkdkdmNtbDBhRzB1WEc1QlZsTkVSa05wY21Oc1pTNXdjbTkwYjNSNWNHVXVabWx1WkU1dlpHVlViMUJzWVdObElEMGdablZ1WTNScGIyNG9LVnh1ZTF4dUlDQWdJR3hsZENCelpXeG1JRDBnZEdocGN6dGNiaUFnSUNCc1pYUWdjMFJsWjNKbFpVNXZaR1VnUFNCMWJtUmxabWx1WldRN1hHNWNiaUFnSUNBdkx5QkdhVzVrSUhSb1pTQnpiV0ZzYkdWemRDQmtaV2R5WldVZ2RtVnlkR1Y0SUdsbUlIUm9aU0J6ZEdGamF5QnBjeUJsYlhCMGVWeHVJQ0FnSUdsbUtITmxiR1l1YzNSaFkyc3ViR1Z1WjNSb0lEMDlQU0F3S1Z4dUlDQWdJSHRjYmlBZ0lDQWdJQ0FnYzBSbFozSmxaVTV2WkdVZ1BTQnpaV3htTG1acGJtUlZibTl5WkdWeVpXUlRiV0ZzYkdWemRFUmxaM0psWlU1dlpHVW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5OGdSbWx1WkNCMGFHVWdabWx5YzNRZ2RtVnlkR1Y0SUdsdUlIUm9aU0J6ZEdGamF5QnViM1FnZVdWMElIQnNZV05sWkZ4dUlDQWdJR1ZzYzJWY2JpQWdJQ0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQm1iM1Z1WkZWdWIzSmtaWEpPYjJSbElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdkMmhwYkdVZ0tDRm1iM1Z1WkZWdWIzSmtaWEpPYjJSbElDWW1JQ0VvYzJWc1ppNXpkR0ZqYXk1c1pXNW5kR2dnUFQwOUlEQXBLVnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpSR1ZuY21WbFRtOWtaU0E5SUhObGJHWXVjM1JoWTJzdWNHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM1Z1WkZWdWIzSmtaWEpPYjJSbElEMGdJWE5FWldkeVpXVk9iMlJsTG1selQzSmtaWEpsWkNncE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRm1iM1Z1WkZWdWIzSmtaWEpPYjJSbEtWeHVJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCelJHVm5jbVZsVG05a1pTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVsbUlHNXZJSFZ1YjNKa1pYSmxaQ0IyWlhKMFpYZ2dhWE1nWm05MWJtUWdhVzRnZEdobElITjBZV05yTENCbWFXNWtJRzl1WlZ4dUlDQWdJQzh2SUdaeWIyMGdkR2hsSUhKbGJXRnBibWx1WnlCdmJtVnpYRzRnSUNBZ2FXWW9jMFJsWjNKbFpVNXZaR1VnUFQwOUlIVnVaR1ZtYVc1bFpDbGNiaUFnSUNCN1hHNGdJQ0FnSUNBZ0lITkVaV2R5WldWT2IyUmxJRDBnYzJWc1ppNW1hVzVrVlc1dmNtUmxjbVZrVTIxaGJHeGxjM1JFWldkeVpXVk9iMlJsS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FXUmtJSFJvWlNCMWJtOXlaR1Z5WldRZ2JtVnBaMmhpYjNKeklHOW1JSFJvYVhNZ2JtOWtaU0IwYnlCMGFHVWdjM1JoWTJ0Y2JpQWdJQ0JwWmlnZ2MwUmxaM0psWlU1dlpHVWdJVDA5SUhWdVpHVm1hVzVsWkNsY2JpQWdJQ0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQnVaV2xuYUdKdmNuTWdQU0J6UkdWbmNtVmxUbTlrWlM1blpYUk9aV2xuYUdKdmNuTlRiM0owWldSQ2VVUmxaM0psWlNncE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2loc1pYUWdhU0E5SUc1bGFXZG9ZbTl5Y3k1c1pXNW5kR2dnTFNBeE95QnBJRDQ5SURBZ095QnBMUzBwWEc0Z0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdVpXbG5hR0p2Y2lBOUlHNWxhV2RvWW05eWMxdHBYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvSVc1bGFXZG9ZbTl5TG1selQzSmtaWEpsWkNncEtTQXZMeUJEYUdWamF5Qm9aWEpsSUdadmNpQndiM056YVdKc1pTQmxjbkp2Y2x4dUlDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWMzUmhZMnN1Y0hWemFDaHVaV2xuYUdKdmNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYzBSbFozSmxaVTV2WkdVN1hHNTlPMXh1WEc0dkx5QlVhR2x6SUdaMWJtTjBhVzl1SUdOaGJHTjFiR0YwWlhNZ2RHaGxJSEpoWkdsMWN5QnZaaUIwYUdseklHTnBjbU5zWlNCM2FYUm9JSEpsYzNCbFkzUWdkRzhnZEdobElITnBlbVZ6WEc0dkx5QnZaaUIwYUdVZ2RtVnlkR2xqWlhNZ1lXNWtJSFJvWlNCdWIyUmxJSE5sY0dGeVlYUnBiMjRnY0dGeVlXMWxkR1Z5TGx4dVFWWlRSRVpEYVhKamJHVXVjSEp2ZEc5MGVYQmxMbU5oYkdOMWJHRjBaVkpoWkdsMWN5QTlJR1oxYm1OMGFXOXVLQ2xjYm50Y2JpQWdJQ0JzWlhRZ2MyVnNaaUE5SUhSb2FYTTdYRzRnSUNBZ2JHVjBJSFJ2ZEdGc1JHbGhaMjl1WVd3Z1BTQXdPMXh1WEc0Z0lDQWdjMlZzWmk1blpYUk9iMlJsY3lncExtWnZja1ZoWTJnb1hHNGdJQ0FnSUNBZ0lDaHViMlJsS1NBOVBpQjBiM1JoYkVScFlXZHZibUZzSUNzOUlFMWhkR2d1YzNGeWRDaHViMlJsTG1kbGRGZHBaSFJvS0NrZ0tpQnViMlJsTG1kbGRGZHBaSFJvS0NrZ0t5QnViMlJsTG1kbGRFaGxhV2RvZENncElDb2dibTlrWlM1blpYUklaV2xuYUhRb0tTbGNiaUFnSUNBcE8xeHVYRzRnSUNBZ2MyVnNaaTV3WlhKcGJXVjBaWElnUFNCMGIzUmhiRVJwWVdkdmJtRnNJQ3NnYzJWc1ppNW5aWFJPYjJSbGN5Z3BMbXhsYm1kMGFDQXFJSE5sYkdZdWJtOWtaVk5sY0dGeVlYUnBiMjQ3WEc0Z0lDQWdiR1YwSUhKaFpHbDFjeUE5SUhObGJHWXVjR1Z5YVcxbGRHVnlJQzhnS0NBeUlDb2dUV0YwYUM1UVNTazdYRzVjYmlBZ0lDQXZMeUJEYUdWamF5Qm9aWEpsSUdadmNpQndiM056YVdKc1pTQmxjbkp2Y2x4dVhHNGdJQ0FnYzJWc1ppNW5aWFJRWVhKbGJuUW9LUzV6WlhSWGFXUjBhQ2dnTWlBcUlISmhaR2wxY3lBcE8xeHVJQ0FnSUhObGJHWXVaMlYwVUdGeVpXNTBLQ2t1YzJWMFNHVnBaMmgwS0NBeUlDb2djbUZrYVhWeklDazdYRzRnSUNBZ2MyVnNaaTVuWlhSUVlYSmxiblFvS1M1elpYUkRaVzUwWlhJb0lITmxiR1l1WjJWMFVHRnlaVzUwS0NrdVoyVjBWMmxrZEdnb0tTd2djMlZzWmk1blpYUlFZWEpsYm5Rb0tTNW5aWFJJWldsbmFIUW9LU0FwTzF4dVhHNGdJQ0FnYzJWc1ppNWpaVzUwWlhKWUlEMGdjMlZzWmk1blpYUlFZWEpsYm5Rb0tTNW5aWFJEWlc1MFpYSllLQ2s3WEc0Z0lDQWdjMlZzWmk1alpXNTBaWEpaSUQwZ2MyVnNaaTVuWlhSUVlYSmxiblFvS1M1blpYUkRaVzUwWlhKWktDazdYRzRnSUNBZ2MyVnNaaTV5WVdScGRYTWdQU0J6Wld4bUxtZGxkRkJoY21WdWRDZ3BMbWRsZEVobGFXZG9kQ2dwSUM4Z01qdGNibjA3WEc1Y2JpOHZJRlJvYVhNZ1puVnVZM1JwYjI0Z1kyRnNZM1ZzWVhSbGN5QjBhR1VnZEc5MFlXd2diblZ0WW1WeUlHOW1JR055YjNOemFXNW5jeUJ2WmlCaGJHd2dkbVZ5ZEdsalpYTWdiMlpjYmk4dklIUm9hWE1nWTJseVkyeGxMbHh1UVZaVFJFWkRhWEpqYkdVdWNISnZkRzkwZVhCbExtTmhiR04xYkdGMFpVVmtaMlZEY205emMybHVaM05QWms1dlpHVnpJRDBnWm5WdVkzUnBiMjRvS1Z4dWUxeHVJQ0FnSUhSb2FYTXVaMlYwVG05a1pYTW9LUzVtYjNKRllXTm9LQ0FvYm05a1pTa2dQVDRnYm05a1pTNWpZV3hqZFd4aGRHVlViM1JoYkVOeWIzTnphVzVuS0NrcE8xeHVmVHRjYmx4dVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlITmxkSE1nZEdobElHbHVaR1Y0SUc5bUlHVmhZMmdnZG1WeWRHVjRJSFJ2SUdsMGN5QndiM05wZEdsdmJpQnBiaUJwYms5eVpHVnlYRzR2THlCaGNuSmhlUzRnVG05MFpTQjBhR0YwSUdsdVpHVjRJRzltSUdFZ2JtOWtaU0JqWVc0Z1ltVWdaR2xtWm1WeVpXNTBJR1p5YjIwZ2FYUnpJSEJzWVdObElHbHVJSFJvWlZ4dUx5OGdZWEp5WVhrZ1pIVmxJSFJ2SUdOeWIzTnphVzVuSUhKbFpIVmpkR2x2YmlCd2FHRnpaU0J2WmlCMGFHVWdRVlpUUkVZZ1lXeG5iM0pwZEdodExpQkpkQ0JzYjJGa2MxeHVMeThnYjJ4a0lHbHVaR1Y0SUhaaGJIVmxjeUIwYnlCMlpYSjBhV05sY3lCa2RXVWdkRzhnWVc0Z2FXNWpjbVZoYzJVZ2FXNGdkR2hsSUc1MWJXSmxjaUJ2Wmx4dUx5OGdZM0p2YzNOcGJtZHpJSGRwZEdnZ2RHaGxJRzVsZHlCcGJtUnBZMlZ6TGx4dVFWWlRSRVpEYVhKamJHVXVjSEp2ZEc5MGVYQmxMbXh2WVdSUGJHUkpibVJwWTJWelQyWk9iMlJsY3lBOUlHWjFibU4wYVc5dUtDbGNibnRjYmlBZ0lDQXZMM1JvYVhNdWFXNVBjbVJsY2k1bWIzSkZZV05vS0NBb2JtOWtaU3hwYm1SbGVDa2dQVDRnYm05a1pTNXpaWFJKYm1SbGVDaHBibVJsZUNrcE8xeHVJQ0FnSUhaaGNpQnpaV3htSUQwZ2RHaHBjenRjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWFXNVBjbVJsY2k1c1pXNW5kR2c3SUdrckt5bDdYRzRnSUNBZ0lDQWdJSE5sYkdZdWFXNVBjbVJsY2x0cFhTNXpaWFJKYm1SbGVDaHBLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlITmxkSE1nZEdobElIQnZjMmwwYVc5dUlHOW1JR1ZoWTJnZ2JtOWtaU0JwYmlCcGJrOXlaR1Z5SUdGeWNtRjVJSFJ2SUdsMGN5QnBibVJsZUM1Y2JpOHZJRTV2ZEdVZ2RHaGhkQ0JwYm1SbGVDQnZaaUJoSUc1dlpHVWdZMkZ1SUdKbElHUnBabVpsY21WdWRDQm1jbTl0SUdsMGN5QndiR0ZqWlNCcGJpQjBhR1VnYVc1UGNtUmxjbHh1THk4Z1lYSnlZWGtnWkhWbElIUnZJR055YjNOemFXNW5JSEpsWkhWamRHbHZiaUJ3YUdGelpTQnZaaUIwYUdVZ1FWWlRSRVlnWVd4bmIzSnBkR2h0TGlCVWFHbHpJR1oxYm1OMGFXOXVYRzR2THlCd2RYUnpJSFJvWlNCdWIyUmxjeUIwYnlCMGFHVnBjaUJ1WlhjZ2FXNWtaWGdnZG1Gc2RXVnpJR2x1SUdsdVQzSmtaWElnWVhKeVlYa2daSFZsSUhSdklHRmNiaTh2SUdSbFkzSmxZWE5sSUdsdUlIUm9aU0J1ZFcxaVpYSWdiMllnWTNKdmMzTnBibWR6SUhkcGRHZ2dkR2hsSUc1bGR5QnBibVJwWTJWekxseHVRVlpUUkVaRGFYSmpiR1V1Y0hKdmRHOTBlWEJsTG5KbFQzSmtaWEpXWlhKMGFXTmxjeUE5SUdaMWJtTjBhVzl1S0NsY2JudGNiaUFnSUNCMllYSWdjMlZzWmlBOUlIUm9hWE03WEc0Z0lDQWdkR2hwY3k1blpYUk9iMlJsY3lncExtWnZja1ZoWTJnb0lDaHViMlJsS1NBOVBpQnpaV3htTG1sdVQzSmtaWEpiYm05a1pTNW5aWFJKYm1SbGVDZ3BYU0E5SUc1dlpHVWdLVHRjYm4wN1hHNWNibHh1THk4Z1ZHaHBjeUJtZFc1amRHbHZiaUJtYVc1a2N5QmhibVFnY21WMGRYSnVjeUIwYUdVZ2RXNXZjbVJsY21Wa0lITnRZV3hzWlhOMElHUmxaM0psWlNCMlpYSjBaWGdnYjI1Y2JpOHZJSFJvYVhNZ1kybHlZMnhsTGx4dVFWWlRSRVpEYVhKamJHVXVjSEp2ZEc5MGVYQmxMbVpwYm1SVmJtOXlaR1Z5WldSVGJXRnNiR1Z6ZEVSbFozSmxaVTV2WkdVZ1BTQm1kVzVqZEdsdmJpZ3BYRzU3WEc0Z0lDQWdiR1YwSUcxcGJrUmxaM0psWlNBOUlFNTFiV0psY2k1TlFWaGZVMEZHUlY5SlRsUkZSMFZTTzF4dUlDQWdJR3hsZENCelJHVm5jbVZsVG05a1pUdGNiaUFnSUNCY2JpQWdJQ0IwYUdsekxtZGxkRTV2WkdWektDa3VabTl5UldGamFDaGNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNG9ibTlrWlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlodWIyUmxMbWRsZEVSbFozSmxaU2dwSUR3Z2JXbHVSR1ZuY21WbElDWW1JQ0Z1YjJSbExtbHpUM0prWlhKbFpDZ3BLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMXBia1JsWjNKbFpTQTlJRzV2WkdVdVoyVjBSR1ZuY21WbEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMFJsWjNKbFpVNXZaR1VnUFNCdWIyUmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCelJHVm5jbVZsVG05a1pUdGNibjA3WEc1Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkJWbE5FUmtOcGNtTnNaVHNpTENJdktpcGNiaUFxSUZSb2FYTWdZMnhoYzNNZ2FXMXdiR1Z0Wlc1MGN5QjBhR1VnYjNabGNtRnNiQ0JzWVhsdmRYUWdjSEp2WTJWemN5Qm1iM0lnZEdobElFRldVMFJHSUdGc1oyOXlhWFJvYlZ4dUlDb2dLRU5wY21OMWJHRnlJRVJ5WVhkcGJtY2dRV3huYjNKcGRHaHRJR0o1SUVobElHRnVaQ0JUZVd0dmNtRXBMbHh1SUNwY2JpQXFYRzRnS2lCRGIzQjVjbWxuYUhRNklHa3RWbWx6SUZKbGMyVmhjbU5vSUVkeWIzVndMQ0JDYVd4clpXNTBJRlZ1YVhabGNuTnBkSGtzSURJd01EY2dMU0J3Y21WelpXNTBYRzRnS2k5Y2JseHViR1YwSUV4aGVXOTFkQ0E5SUhKbGNYVnBjbVVvSjJ4aGVXOTFkQzFpWVhObEp5a3VUR0Y1YjNWME8xeHViR1YwSUVGV1UwUkdRMjl1YzNSaGJuUnpJRDBnY21WeGRXbHlaU2duTGk5QlZsTkVSa052Ym5OMFlXNTBjeTVxY3ljcE8xeHViR1YwSUVGV1UwUkdRMmx5WTJ4bElEMGdjbVZ4ZFdseVpTZ25MaTlCVmxORVJrTnBjbU5zWlM1cWN5Y3BPMXh1YkdWMElFRldVMFJHVG05a1pTQTlJSEpsY1hWcGNtVW9KeTR2UVZaVFJFWk9iMlJsTG1wekp5azdYRzVzWlhRZ1FWWlRSRVpGWkdkbElEMGdjbVZ4ZFdseVpTZ25MaTlCVmxORVJrVmtaMlV1YW5NbktUdGNibHh1THk4Z0xTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmk4dklGTmxZM1JwYjI0NklFbHVhWFJwWVd4cGVtRjBhVzl1YzF4dUx5OGdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JseHVMeThnUTI5dWMzUnlkV04wYjNKY2JtWjFibU4wYVc5dUlFRldVMFJHVEdGNWIzVjBLQ2xjYm50Y2JpQWdJQ0JNWVhsdmRYUXVZMkZzYkNoMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG01dlpHVlRaWEJoY21GMGFXOXVJRDBnUVZaVFJFWkRiMjV6ZEdGdWRITXVSRVZHUVZWTVZGOU9UMFJGWDFORlVFRlNRVlJKVDA0N1hHNTlYRzVjYmtGV1UwUkdUR0Y1YjNWMExuQnliM1J2ZEhsd1pTQTlJRTlpYW1WamRDNWpjbVZoZEdVb1RHRjViM1YwTG5CeWIzUnZkSGx3WlNrN1hHNWNibVp2Y2lBb2JHVjBJSEJ5YjNCbGNuUjVJR2x1SUV4aGVXOTFkQ2xjYm50Y2JpQWdJQ0JCVmxORVJreGhlVzkxZEZ0d2NtOXdaWEowZVYwZ1BTQk1ZWGx2ZFhSYmNISnZjR1Z5ZEhsZE8xeHVmVnh1WEc1QlZsTkVSa3hoZVc5MWRDNXdjbTkwYjNSNWNHVXVibVYzUjNKaGNHZ2dQU0JtZFc1amRHbHZiaUFvZGs5aWFtVmpkQ2xjYm50Y2JpQWdJQ0IwYUdsekxtRjJjMlJtUTJseVkyeGxJRDBnYm1WM0lFRldVMFJHUTJseVkyeGxLRzUxYkd3c0lIUm9hWE11WjNKaGNHaE5ZVzVoWjJWeUxDQjJUMkpxWldOMEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbUYyYzJSbVEybHlZMnhsTzF4dWZUdGNibHh1UVZaVFJFWk1ZWGx2ZFhRdWNISnZkRzkwZVhCbExtNWxkMDV2WkdVZ1BTQm1kVzVqZEdsdmJpQW9kazV2WkdVcFhHNTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QkJWbE5FUms1dlpHVW9kR2hwY3k1bmNtRndhRTFoYm1GblpYSXNJSFpPYjJSbEtUdGNibjA3WEc1Y2JrRldVMFJHVEdGNWIzVjBMbkJ5YjNSdmRIbHdaUzV1WlhkRlpHZGxJRDBnWm5WdVkzUnBiMjRnS0haRlpHZGxLVnh1ZTF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnUVZaVFJFWkZaR2RsS0c1MWJHd3NJRzUxYkd3c0lIWkZaR2RsS1R0Y2JuMDdYRzVjYmk4dklDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0dkx5QlRaV04wYVc5dU9pQkJZMk5sYzNOdmNpQkdkVzVqZEdsdmJuTmNiaTh2SUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzVjYmk4dklGUm9hWE1nWm5WdVkzUnBiMjRnY21WMGRYSnVjeUIwYUdVZ2NHOXphWFJwYjI0Z1pHRjBZU0JtYjNJZ1lXeHNJRzV2WkdWelhHNUJWbE5FUmt4aGVXOTFkQzV3Y205MGIzUjVjR1V1WjJWMFVHOXphWFJwYjI1elJHRjBZU0E5SUdaMWJtTjBhVzl1S0NsY2JudGNiaUFnSUNCMllYSWdZV3hzVG05a1pYTWdQU0IwYUdsekxtZHlZWEJvVFdGdVlXZGxjaTVuWlhSQmJHeE9iMlJsY3lncE8xeHVJQ0FnSUhaaGNpQndSR0YwWVNBOUlIdDlPMXh1WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JoYkd4T2IyUmxjeTVzWlc1bmRHZzdJR2tyS3lsY2JpQWdJQ0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaV04wSUQwZ1lXeHNUbTlrWlhOYmFWMHVjbVZqZER0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2xrSUQwZ1lXeHNUbTlrWlhOYmFWMHVhV1E3WEc1Y2JpQWdJQ0FnSUNBZ2NFUmhkR0ZiYVdSZElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXUTZJR2xrTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlRG9nY21WamRDNW5aWFJEWlc1MFpYSllLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjVPaUJ5WldOMExtZGxkRU5sYm5SbGNsa29LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIYzZJSEpsWTNRdWQybGtkR2dzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9PaUJ5WldOMExtaGxhV2RvZEZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3UkdGMFlUdGNibjA3WEc1Y2JpOHZJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHZMeUJUWldOMGFXOXVPaUJNWVhsdmRYUWdVbVZzWVhSbFpGeHVMeThnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNibHh1THlvcVhHNGdLaUJVYUdseklHWjFibU4wYVc5dUlIQmxjbVp2Y20xeklHeGhlVzkxZENCdmJpQmpiMjV6ZEhKMVkzUmxaQ0JzTFd4bGRtVnNJR2R5WVhCb0xseHVJQ29nU1hRZ2NtVjBkWEp1Y3lCMGNuVmxJRzl1SUhOMVkyTmxjM01zSUdaaGJITmxJRzkwYUdWeWQybHpaUzVjYmlBcUlFbHRjRzl5ZEdGdWRDRTZJRWxtSUhsdmRTQjNZVzUwSUhSdklITmxaU0IwYUdVZ2NtVnpkV3gwY3lCdlppQjBhR2x6SUdaMWJtTjBhVzl1SUhSb1pXNHNJR0ZtZEdWeUlIUm9hWE1nWm5WdVkzUnBiMjRnYVhNZ1kyRnNiR1ZrTENCNWIzVWdhR0YyWlNCMGJ5QmpZV3hqZFd4aGRHVmNiaUFxSUdGdVpDQnpaWFFnZEdobElIQnZjMmwwYVc5dWN5QnZaaUJsZG1WeWVTQnViMlJsTGlCVWJ5QmtieUIwYUdseklHTmhiR3dnZFhCa1lYUmxUbTlrWlVOdmIzSmthVzVoZEdWekxpQkliM2RsZG1WeUxDQjFjR1JoZEdWT2IyUmxRVzVuYkdWeklHOXVJSFJvWlNCdmRHaGxjbHh1SUNvZ2FHRnVaQ0JwY3lCdWIzUWdibVZsWkdWa0lDaHlaV1IxYm1SaGJuUXBJR1p2Y2lCMGFHbHpJR1oxYm1OMGFXOXVMbHh1SUNvdlhHNUJWbE5FUmt4aGVXOTFkQzV3Y205MGIzUjVjR1V1YkdGNWIzVjBJRDBnWm5WdVkzUnBiMjRnS0NsY2JudGNiaUFnSUNCc1pYUWdjMlZzWmlBOUlIUm9hWE03WEc1Y2JpQWdJQ0F2THlCRGFHVmpheUJwWmlCbmNtRndhQ0JqYjI1MFlXbHVjeUJoYm5rZ1kyOXRjRzkxYm1RZ2MzUnlkV04wZFhKbGMxeHVJQ0FnSUdsbUlDaHpaV3htTG1keVlYQm9UV0Z1WVdkbGNpNW5aWFJIY21Gd2FITW9LUzVzWlc1bmRHZ2dQaUF4S1Z4dUlDQWdJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQmpiSFZ6ZEdWeVIzSmhjR2dnUFNCMGFHbHpMbUYyYzJSbVEybHlZMnhsT3lBdkx5QkdhWGhsWkNCeVpXWmxjbVZ1WTJVc0lHSjFkQ0J1YjNjZ2FYUWdhWE1nWVNCaWFYUWdjbVZrZFc1a1lXNTBYRzVjYmlBZ0lDQmpiSFZ6ZEdWeVIzSmhjR2d1YzJWMFRtOWtaVk5sY0dGeVlYUnBiMjRvZEdocGN5NXViMlJsVTJWd1lYSmhkR2x2YmlrN1hHNGdJQ0FnWTJ4MWMzUmxja2R5WVhCb0xtTmhiR04xYkdGMFpWSmhaR2wxY3lncE8xeHVJQ0FnSUdOc2RYTjBaWEpIY21Gd2FDNXBibWwwVDNKa1pYSnBibWNvS1R0Y2JseHVJQ0FnSUhkb2FXeGxJQ2doWTJ4MWMzUmxja2R5WVhCb0xtaGhjMFpwYm1semFHVmtUM0prWlhKcGJtY29LU2xjYmlBZ0lDQjdYRzRnSUNBZ0lDQWdJR3hsZENCdWIyUmxJRDBnWTJ4MWMzUmxja2R5WVhCb0xtWnBibVJPYjJSbFZHOVFiR0ZqWlNncE8xeHVJQ0FnSUNBZ0lDQmpiSFZ6ZEdWeVIzSmhjR2d1Y0hWMFNXNVBjbVJsY2lodWIyUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RISjFaVHRjYm4wN1hHNWNiaTh2SUZSb2FYTWdablZ1WTNScGIyNGdkWEJrWVhSbGN5QjBhR1VnWVc1bmJHVWdLR2x1SUhKaFpHbGhibk1wSUhCeWIzQmxjblI1SUc5bUlFRldVMFJHVG05a1pTQmxiR1Z0Wlc1MGN5QnBiaUIwYUdVZ1kybHlZMnhsWEc1QlZsTkVSa3hoZVc5MWRDNXdjbTkwYjNSNWNHVXVkWEJrWVhSbFRtOWtaVUZ1WjJ4bGN5QTlJR1oxYm1OMGFXOXVJQ2dwZTF4dUlDQWdJSFJvYVhNdVozSmhjR2hOWVc1aFoyVnlMbWRsZEZKdmIzUW9LUzVqYjNKeVpXTjBRVzVuYkdWektDazdJQzh2UVZaVFJFWkRhWEpqYkdVZ2IySnFaV04wWEc1OU8xeHVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJSFJ5WVhabGNuTmxjeUIwYUdVZ2RtVnlkR2xqWlhNZ2IyWWdkR2hsSUdkeVlYQm9JR0Z1WkNCelpYUnpJSFJvWldseUlHTnZjbkpsWTNRZ1kyOXZjbVJwYm1GMFpYTWdkMmwwYUNCeVpYTndaV04wSUhSdklIUm9aU0J2ZDI1bGNpQmphWEpqYkdVdVhHNUJWbE5FUmt4aGVXOTFkQzV3Y205MGIzUjVjR1V1ZFhCa1lYUmxUbTlrWlVOdmIzSmthVzVoZEdWeklEMGdablZ1WTNScGIyNGdLQ2w3WEc0Z0lDQWdiR1YwSUdOc2RYTjBaWEpIY21Gd2FDQTlJSFJvYVhNdVozSmhjR2hOWVc1aFoyVnlMbWRsZEZKdmIzUW9LVHRjYmx4dUlDQWdJR05zZFhOMFpYSkhjbUZ3YUM1blpYUk9iMlJsY3lncExtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2JtOWtaU2tnZTF4dUlDQWdJQ0FnSUNCdWIyUmxMbk5sZEVObGJuUmxjaWhqYkhWemRHVnlSM0poY0dndVoyVjBRMlZ1ZEdWeVdDZ3BJQ3NnWTJ4MWMzUmxja2R5WVhCb0xtZGxkRkpoWkdsMWN5Z3BJQ29nVFdGMGFDNWpiM01vYm05a1pTNW5aWFJCYm1kc1pTZ3BLU3dnWTJ4MWMzUmxja2R5WVhCb0xtZGxkRU5sYm5SbGNsa29LU0FyWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiSFZ6ZEdWeVIzSmhjR2d1WjJWMFVtRmthWFZ6S0NrZ0tpQk5ZWFJvTG5OcGJpaHViMlJsTG1kbGRFRnVaMnhsS0NrcEtUdGNiaUFnSUNCOUtUdGNibjA3WEc1Y2JpOHZJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdFhHNHZMeUJUWldOMGFXOXVPaUJRYjNOMElGQnliMk5sYzNOcGJtZGNiaTh2SUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzVjYmk4cUtseHVJQ29nVkdocGN5QnRaWFJvYjJRZ2FXMXdiR1Z0Wlc1MGN5QjBhR1VnY0c5emRDQndjbTlqWlhOemFXNW5JSE4wWlhBZ2IyWWdkR2hsSUdGc1oyOXlhWFJvYlN3Z2QyaHBZMmhjYmlBcUlIUnlhV1Z6SUhSdklHMXBibWx0YVhwbElIUm9aU0J1ZFcxaVpYSWdiMllnWldSblpYTWdablZ5ZEdobGNpQjNhWFJvSUhKbGMzQmxZM1FnZEc4Z2RHaGxJR3h2WTJGc1hHNGdLaUJoWkdwMWMzUnBibWNnWVd4bmIzSnBkR2h0SUdSbGMyTnlhV0psWkNCaWVTQklaU0JoYm1RZ1UzbHJiM0poTGx4dUlDb3ZYRzVCVmxORVJreGhlVzkxZEM1d2NtOTBiM1I1Y0dVdWFXNXBkRkJ2YzNSUWNtOWpaWE56SUQwZ1puVnVZM1JwYjI0Z0tDbGNibnRjYmlBZ0lDQjBhR2x6TG1GMmMyUm1RMmx5WTJ4bExtTmhiR04xYkdGMFpVVmtaMlZEY205emMybHVaM05QWms1dlpHVnpLQ2s3WEc1Y2JpQWdJQ0JzWlhRZ2JHbHpkQ0E5SUhSb2FYTXVZWFp6WkdaRGFYSmpiR1V1WjJWMFRtOWtaWE1vS1R0Y2JseHVJQ0FnSUd4cGMzUXVjMjl5ZENobWRXNWpkR2x2YmloaExHSXBlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZaTVuWlhSVWIzUmhiRU55YjNOemFXNW5UMlpGWkdkbGN5Z3BJQzBnWVM1blpYUlViM1JoYkVOeWIzTnphVzVuVDJaRlpHZGxjeWdwTzF4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR3hwYzNRN1hHNTlPMXh1WEc1QlZsTkVSa3hoZVc5MWRDNXdjbTkwYjNSNWNHVXViMjVsVTNSbGNGQnZjM1JRY205alpYTnpJRDBnWm5WdVkzUnBiMjRnS0c1dlpHVXBYRzU3WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVYRzRnSUNBZ2JHVjBJR04xY25KbGJuUkRjbTl6YzJsdVowNTFiV0psY2lBOUlHNXZaR1V1WjJWMFZHOTBZV3hEY205emMybHVaMDltUldSblpYTW9LVHRjYmlBZ0lDQnNaWFFnYm1WM1EzSnZjM05wYm1kT2RXMWlaWEk3WEc1Y2JpQWdJQ0JzWlhRZ2JtVnBaMmhpYjNWeWN5QTlJRnRkTzF4dUlDQWdJRzV2WkdVdVoyVjBUbVZwWjJoaWIzSnpUR2x6ZENncExtRmtaRUZzYkZSdktHNWxhV2RvWW05MWNuTXBPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhaUE5SURBN0lHb2dQQ0J1WldsbmFHSnZkWEp6TG14bGJtZDBhRHNnYWlzcktWeHVJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzVsYVdkb1ltOTFjaUE5SUc1bGFXZG9ZbTkxY25OYmFsMDdYRzVjYmlBZ0lDQWdJQ0FnYkdWMElHOXNaRWx1WkdWNElEMGdibTlrWlM1blpYUkpibVJsZUNncE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYm1WM1NXNWtaWGdnUFNBb2JtVnBaMmhpYjNWeUxtZGxkRWx1WkdWNEtDa2dLeUF4S1NBbElITmxiR1l1WVhaelpHWkRhWEpqYkdVdVoyVjBVMmw2WlNncE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNodmJHUkpibVJsZUNBaFBUMGdibVYzU1c1a1pYZ3BYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1V1YzJWMFNXNWtaWGdvYm1WM1NXNWtaWGdwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2IyeGtTVzVrWlhnZ1BDQnViMlJsTG1kbGRFbHVaR1Y0S0NrcFhHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJ4a1NXNWtaWGdnS3owZ2MyVnNaaTVoZG5Oa1prTnBjbU5zWlM1blpYUlRhWHBsS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcGJtUmxlQ0E5SUc1dlpHVXVaMlYwU1c1a1pYZ29LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkMmhwYkdVZ0tHbHVaR1Y0SUR3Z2IyeGtTVzVrWlhncFhHNGdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIUmxiWEFnUFNCelpXeG1MbUYyYzJSbVEybHlZMnhsTG1kbGRFOXlaR1Z5S0NsYmFXNWtaWGdnSlNCelpXeG1MbUYyYzJSbVEybHlZMnhsTG1kbGRGTnBlbVVvS1YwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHVnRjQzV6WlhSSmJtUmxlQ2dvZEdWdGNDNW5aWFJKYm1SbGVDZ3BJQ3NnTVNrZ0pTQnpaV3htTG1GMmMyUm1RMmx5WTJ4bExtZGxkRk5wZW1Vb0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzVrWlhnZ0t6MGdNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtOWtaUzVqWVd4amRXeGhkR1ZVYjNSaGJFTnliM056YVc1bktDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYZERjbTl6YzJsdVowNTFiV0psY2lBOUlHNXZaR1V1WjJWMFZHOTBZV3hEY205emMybHVaMDltUldSblpYTW9LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGQwTnliM056YVc1blRuVnRZbVZ5SUQ0OUlHTjFjbkpsYm5SRGNtOXpjMmx1WjA1MWJXSmxjaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3htTG1GMmMyUm1RMmx5WTJ4bExteHZZV1JQYkdSSmJtUnBZMlZ6VDJaT2IyUmxjeWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1l1WVhaelpHWkRhWEpqYkdVdWNtVlBjbVJsY2xabGNuUnBZMlZ6S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEVOeWIzTnphVzVuVG5WdFltVnlJRDBnYm1WM1EzSnZjM05wYm1kT2RXMWlaWEk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzU5TzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFRldVMFJHVEdGNWIzVjBPeUlzSWk4cUtseHVJQ29nVkdocGN5QmpiR0Z6Y3lCcGJYQnNaVzFsYm5SeklHUmhkR0VnWVc1a0lHWjFibU4wYVc5dVlXeHBkSGtnY21WeGRXbHlaV1FnWm05eUlFRldVMFJHSUd4aGVXOTFkQ0J3WlhKY2JpQXFJRzV2WkdVdVhHNGdLbHh1SUNwY2JpQXFJRU52Y0hseWFXZG9kRG9nYVMxV2FYTWdVbVZ6WldGeVkyZ2dSM0p2ZFhBc0lFSnBiR3RsYm5RZ1ZXNXBkbVZ5YzJsMGVTd2dNakF3TnlBdElIQnlaWE5sYm5SY2JpQXFMMXh1WEc1c1pYUWdURTV2WkdVZ1BTQnlaWEYxYVhKbEtDZHNZWGx2ZFhRdFltRnpaU2NwTGt4T2IyUmxPMXh1YkdWMElGRjFhV05yYzI5eWRDQTlJSEpsY1hWcGNtVW9KMnhoZVc5MWRDMWlZWE5sSnlrdVVYVnBZMnR6YjNKME8xeHVYRzR2THlBdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1THk4Z1UyVmpkR2x2YmpvZ1NXNXBkR2xoYkdsNllYUnBiMjV6WEc0dkx5QXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dVhHNW1kVzVqZEdsdmJpQkJWbE5FUms1dlpHVW9aMjBzSUhaT2IyUmxMQ0JzYjJNc0lITnBlbVVwWEc1N1hHNGdJQ0FnTHk4Z1EyOXVjM1J5ZFdOMGIzSWdNVG9nUVZaVFJFWk9iMlJsS0dkdExDQjJUbTlrWlN3Z2JHOWpMQ0J6YVhwbEtWeHVJQ0FnSUdsbUtHeHZZeUFoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSE5wZW1VZ0lUMDlJSFZ1WkdWbWFXNWxaQ2xjYmlBZ0lDQjdYRzRnSUNBZ0lDQWdJRXhPYjJSbExtTmhiR3dvZEdocGN5d2daMjBzSUhaT2IyUmxMQ0JzYjJNc0lITnBlbVVwTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJEYjI1emRISjFZM1J2Y2lBeU9pQkJWbE5FUms1dlpHVW9aMjBzSUhaT2IyUmxLVnh1SUNBZ0lHVnNjMlZjYmlBZ0lDQjdYRzRnSUNBZ0lDQWdJRXhPYjJSbExtTmhiR3dvZEdocGN5d2daMjBzSUhaT2IyUmxLVHRjYmlBZ0lDQjlYRzVjYmx4MEx5OGdRVzVuYkdVZ2IyWWdkR2hwY3lCdWIyUmxJRzl1SUhSb1pTQnZkMjVsY2lCamFYSmpiR1VnYVc0Z2NtRmthV0Z1YzF4dUlDQWdJSFJvYVhNdVlXNW5iR1VnUFNBd08xeHVYRzRnSUNBZ0x5OGdTVzVrWlhnZ2IyWWdkR2hwY3lCdWIyUmxJRzl1SUhSb1pTQnZkMjVsY2lCamFYSmpiR1ZjYmlBZ0lDQjBhR2x6TG1OcGNtTnNaVWx1WkdWNElEMGdMVEU3WEc1Y2JpQWdJQ0F2THlCVWIzUmhiQ0J1ZFcxaVpYSWdiMllnWTNKdmMzTnBibWR6SUc5bUlIUm9aU0JsWkdkbGN5QjBhR2x6SUc1dlpHVWdhWE1nYVc1amFXUmxiblFnZEc5Y2JpQWdJQ0IwYUdsekxuUnZkR0ZzUTNKdmMzTnBibWRQWmtWa1oyVnpJRDBnTFRFN1hHNWNiaUFnSUNBdkx5QlhhR1YwYUdWeUlIUm9aU0JqZFhKeVpXNTBJR1ZrWjJVZ1kzSnZjM05wYm1jZ2JuVnRZbVZ5SUdseklIWmhiR2xrSUc5eUlHbDBJRzVsWldSeklIUnZJR0psWEc0Z0lDQWdMeThnY21WallXeGpkV3hoZEdWa1hHNGdJQ0FnZEdocGN5NXBjME55YjNOemFXNW5UblZ0WW1WeVZtRnNhV1FnUFNCbVlXeHpaVHRjYmx4dWZWeHVYRzVCVmxORVJrNXZaR1V1Y0hKdmRHOTBlWEJsSUQwZ1QySnFaV04wTG1OeVpXRjBaU2hNVG05a1pTNXdjbTkwYjNSNWNHVXBPMXh1Wm05eUlDaHNaWFFnY0hKdmNHVnlkR2xsY3lCcGJpQk1UbTlrWlNsY2JudGNiaUFnSUNCQlZsTkVSazV2WkdWYmNISnZjR1Z5ZEdsbGMxMGdQU0JNVG05a1pWdHdjbTl3WlhKMGFXVnpYVHRjYm4xY2JseHVMeThnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaTh2SUZObFkzUnBiMjQ2SUVGalkyVnpjMjl5SUVaMWJtTjBhVzl1YzF4dUx5OGdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQnlaWFIxY201eklIUm9aU0JqYVhKamJHVWdkR2hwY3lCdWIyUmxJR2x6SUc5M2JtVmtJR0o1TGx4dVFWWlRSRVpPYjJSbExuQnliM1J2ZEhsd1pTNW5aWFJEYVhKamJHVWdQU0JtZFc1amRHbHZiaWdwWEc1N1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVoyVjBUM2R1WlhJb0tUdGNibjA3WEc1Y2JpOHZJRlJvYVhNZ1puVnVZM1JwYjI0Z2MyVjBjeUIwYUdVZ2FXNWtaWGdnYjJZZ2RHaHBjeUJ1YjJSbElHOXVJSFJvWlNCamFYSmpiR1VzSUdGdVpDQnpaWFJ6SUhSb1pWeHVMeThnWTNKdmMzTnBibWNnYm5WdFltVnlJR2x1ZG1Gc2FXUXVJRVIxWlNCMGJ5QjBhR1VnYVc1a1pYZ2dZMmhoYm1kbElHOW1JSFJvWlNCdWIyUmxPeUJwZENCdVpXVmtjeUIwYjF4dUx5OGdZbVVnY21WallXeGpkV3hoZEdWa0xseHVRVlpUUkVaT2IyUmxMbkJ5YjNSdmRIbHdaUzV6WlhSSmJtUmxlQ0E5SUdaMWJtTjBhVzl1S0dsdVpHVjRLVnh1ZTF4dUlDQWdJSFJvYVhNdVkybHlZMnhsU1c1a1pYZ2dQU0JwYm1SbGVEdGNiaUFnSUNCMGFHbHpMbWx6UTNKdmMzTnBibWRPZFcxaVpYSldZV3hwWkNBOUlHWmhiSE5sTzF4dWZUdGNibHh1THk4Z1ZHaHBjeUJtZFc1amRHbHZiaUJ5WlhSMWNtNXpJSFJvWlNCcGJtUmxlQ0J2WmlCMGFHbHpJRzV2WkdVZ2FXNGdkR2hsSUc5eVpHVnlhVzVuSUc5bUlHbDBjeUJ2ZDI1bGNseHVMeThnWTJseVkyeGxMaUJJWlhKbElDMHhJRzFsWVc1eklIUm9ZWFFnZEdobElIWmxjblJsZUNCcGN5QnViM1FnZVdWMElIQnNZV05sWkNCdmJpQnBkSE1nYjNkdVpYSmNiaTh2WTJseVkyeGxMbHh1UVZaVFJFWk9iMlJsTG5CeWIzUnZkSGx3WlM1blpYUkpibVJsZUNBOUlHWjFibU4wYVc5dUtDbGNibnRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYVhKamJHVkpibVJsZUR0Y2JuMDdYRzVjYmk4dklGUm9hWE1nWm5WdVkzUnBiMjRnY21WMGRYSnVjeUIwYUdVZ1lYSnlZWGtnYjJZZ2RHaGxJRzVsYVdkaWIzSnpJRzltSUhSb2FYTWdibTlrWlNCemIzSjBaV1FnYVc1Y2JpOHZJR0Z6WTJWdVpHbHVaeUJ2Y21SbGNpNWNia0ZXVTBSR1RtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFRtVnBaMmhpYjNKelUyOXlkR1ZrUW5sRVpXZHlaV1VnUFNCbWRXNWpkR2x2YmlncFhHNTdYRzRnSUNBZ2JHVjBJQ0J6Wld4bUlEMGdkR2hwY3p0Y2JseHVJQ0FnSUd4bGRDQnVaV2xuYUdKdmNuTk1hWE4wSUQwZ1cxMDdYRzRnSUNBZ2MyVnNaaTVuWlhST1pXbG5hR0p2Y25OTWFYTjBLQ2t1WVdSa1FXeHNWRzhvYm1WcFoyaGliM0p6VEdsemRDazdYRzRnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJRzVsYVdkb1ltOXljMHhwYzNRdVptbHNkR1Z5S0NCdWIyUmxJRDArSUNnZ2JtOWtaUzVuWlhSSmJtUmxlQ2dwSUQwOVBTQXRNU0FwSUNrN1hHNWNiaUFnSUNCeVpYTjFiSFF1YzI5eWRDaG1kVzVqZEdsdmJpaGhMR0lwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVM1blpYUkVaV2R5WldVb0tTQXRJR0l1WjJWMFJHVm5jbVZsS0NrN1hHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnY21WemRXeDBPMXh1ZlR0Y2JseHVMeThnVkdocGN5Qm1kVzVqZEdsdmJpQnlaWFIxY201eklIUm9aU0JrWldkeVpXVWdiMllnZEdocGN5QnViMlJsTGx4dVFWWlRSRVpPYjJSbExuQnliM1J2ZEhsd1pTNW5aWFJFWldkeVpXVWdQU0JtZFc1amRHbHZiaWdwWEc1N1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVoyVjBSV1JuWlhNb0tTNXNaVzVuZEdnN1hHNTlPMXh1WEc0dkx5QlVhR2x6SUdaMWJtTjBhVzl1SUhKbGRIVnlibk1nZDJobGRHaGxjaUJ2Y2lCdWIzUWdkR2hwY3lCdWIyUmxJR2x6SUdOMWNuSmxiblJzZVNCd2JHRmpaV1FnYjI0Z2FYUnpYRzR2THlCdmQyNWxjaUJqYVhKamJHVXVYRzVCVmxORVJrNXZaR1V1Y0hKdmRHOTBlWEJsTG1selQzSmtaWEpsWkNBOUlDQm1kVzVqZEdsdmJpZ3BYRzU3WEc0Z0lDQWdjbVYwZFhKdUlDaDBhR2x6TG1kbGRFbHVaR1Y0S0NrZ1BpQXRNU2s3WEc1OU8xeHVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJSE5sZEhNZ2RHaGxJR0Z1WjJ4bElHOW1JSFJvYVhNZ2JtOWtaU0IzTG5JdWRDNGdhWFJ6SUc5M2JtVnlJR05wY21Oc1pTNGdTR1Z5WlZ4dUx5OGdkR2hsSUdGdVoyeGxJSFpoYkhWbElHbHpJR2x1SUhKaFpHbGhiaTVjYmtGV1UwUkdUbTlrWlM1d2NtOTBiM1I1Y0dVdWMyVjBRVzVuYkdVZ1BTQm1kVzVqZEdsdmJpaGhibWRzWlNsY2JudGNiaUFnSUNCMGFHbHpMbUZ1WjJ4bElEMGdZVzVuYkdVN1hHNTlPMXh1WEc0dkx5QlVhR2x6SUdaMWJtTjBhVzl1SUhKbGRIVnlibk1nZEdobElHRnVaMnhsSUc5bUlIUm9hWE1nYm05a1pTQjNMbkl1ZEM0Z2FYUnpJRzkzYm1WeUlHTnBjbU5zWlM0Z1NHVnlaVnh1THk4Z2RHaGxJR0Z1WjJ4bElIWmhiSFZsSUdseklHbHVJSEpoWkdsaGJpNWNia0ZXVTBSR1RtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFFXNW5iR1VnUFNCbWRXNWpkR2x2YmlncFhHNTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZVzVuYkdVN1hHNTlPMXh1WEc0dkx5QlVhR2x6SUdaMWJtTjBhVzl1SUhKbGRIVnlibk1nZEdobElHbHVaR1Y0SUdScFptWmxjbVZ1WTJVZ2IyWWdkR2hwY3lCdWIyUmxJSGRwZEdnZ2RHaGxJR2x1Y0hWMFhHNHZMeUJ1YjJSbExpQk9iM1JsSUhSb1lYUWdkR2hsSUdsdVpHVjRJR1JwWm1abGNtVnVZMlVnWTJGdWJtOTBJR0psSUc1bFoyRjBhWFpsSUdsbUlHSnZkR2dnYm05a1pYTWdZWEpsWEc0dkx5QndiR0ZqWldRZ2IyNGdkR2hsSUdOcGNtTnNaUzRnU0dWeVpTQXRNU0J0WldGdWN5QmhkQ0JzWldGemRDQnZibVVnYjJZZ2RHaGxJRzV2WkdWeklHRnlaU0J1YjNRZ2VXVjBYRzR2THlCd2JHRmpaV1FnYjI0Z2RHaGxJR05wY21Oc1pTNWNia0ZXVTBSR1RtOWtaUzV3Y205MGIzUjVjR1V1WjJWMFEybHlZMFJwYzNSWGFYUm9WR2hsVG05a1pTQTlJQ0JtZFc1amRHbHZiaWh5WldaT2IyUmxLVnh1ZTF4dUlDQWdJR3hsZENCelpXeG1JRDBnZEdocGN6dGNiaUFnSUNCc1pYUWdiM1JvWlhKSmJtUmxlQ0E5SUhKbFprNXZaR1V1WjJWMFNXNWtaWGdvS1R0Y2JpQWdJQ0JjYmlBZ0lDQnBaaWh2ZEdobGNrbHVaR1Y0SUQwOVBTQXRNU0I4ZkNCelpXeG1MbWRsZEVsdVpHVjRLQ2tnUFQwOUlDMHhLVnh1SUNBZ0lIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDMHhPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JrYVdabUlEMGdjMlZzWmk1blpYUkpibVJsZUNncElDMGdiM1JvWlhKSmJtUmxlRHRjYmx4dUlDQWdJR2xtS0dScFptWWdQQ0F3S1Z4dUlDQWdJSHRjYmlBZ0lDQWdJQ0FnWkdsbVppQXJQU0J6Wld4bUxtZGxkRU5wY21Oc1pTZ3BMbWRsZEZOcGVtVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1pHbG1aanRjYm4wN1hHNWNiaTh2SUZSb2FYTWdablZ1WTNScGIyNGdabWx1WkhNZ2RHaGxJRzUxYldKbGNpQnZaaUJsWkdkbElHTnliM056YVc1bmN5QmlaWFIzWldWdUlIUm9aU0JsWkdkbGN5QnZabHh1THk4Z2RHaHBjeUJ1YjJSbElHRnVaQ0IwYUdVZ1pXUm5aWE1nYjJZZ2RHaGxJR2x1Y0hWMElHOXVaUzVjYmtGV1UwUkdUbTlrWlM1d2NtOTBiM1I1Y0dVdVoyVjBRM0p2YzNOcGJtZE9kVzFpWlhKWGFYUm9UbTlrWlNBOUlDQm1kVzVqZEdsdmJpaHZkR2hsY2s1dlpHVXBYRzU3WEc0Z0lDQWdiR1YwSUhObGJHWWdQU0IwYUdsek8xeHVJQ0FnSUd4bGRDQjBiM1JoYkVOeWIzTnphVzVuSUQwZ01EdGNibHh1SUNBZ0lITmxiR1l1WjJWMFJXUm5aWE1vS1M1bWIzSkZZV05vS0Z4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlobFpHZGxLVnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZkR2hsY2s1dlpHVXVaMlYwUldSblpYTW9LUzVtYjNKRllXTm9LRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1oxYm1OMGFXOXVLRzkwYUdWeVJXUm5aU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZkR0ZzUTNKdmMzTnBibWNnS3owZ1pXUm5aUzVqY205emMybHVaMWRwZEdoRlpHZGxLRzkwYUdWeVJXUm5aU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkRzkwWVd4RGNtOXpjMmx1Wnp0Y2JuMDdYRzVjYmk4dklGUm9hWE1nWm5WdVkzUnBiMjRnY21WMGRYSnVjeUIwYUdVZ2RHOTBZV3dnYm5WdFltVnlJRzltSUdWa1oyVWdZM0p2YzNOcGJtZHpMaUJKWmlCMGFHVWdjSEpsZG1sdmRYTnNlVnh1THk4Z1kyRnNZM1ZzWVhSbFpDQjJZV3gxWlNCcGN5QnViM1FnZG1Gc2FXUWdaSFZsSUhSdklHRnVJR2x1WkdWNElHTm9ZVzVuWlNCdmJpQjBhR1VnWTJseVkyeGxMQ0IwYUdWdVhHNHZMeUJoSUhKbFkyRnNZM1ZzWVhScGIyNGdhWE1nY0dWeVptOXliV1ZrTGx4dVFWWlRSRVpPYjJSbExuQnliM1J2ZEhsd1pTNW5aWFJVYjNSaGJFTnliM056YVc1blQyWkZaR2RsY3lBOUlHWjFibU4wYVc5dUtDbGNibnRjYmlBZ0lDQnNaWFFnYzJWc1ppQTlJSFJvYVhNN1hHNGdJQ0FnWEc0Z0lDQWdhV1lvSVhObGJHWXVhWE5EY205emMybHVaMDUxYldKbGNsWmhiR2xrS1Z4dUlDQWdJSHRjYmlBZ0lDQWdJQ0FnYzJWc1ppNWpZV3hqZFd4aGRHVlViM1JoYkVOeWIzTnphVzVuS0NrN1hHNGdJQ0FnSUNBZ0lITmxiR1l1YVhORGNtOXpjMmx1WjA1MWJXSmxjbFpoYkdsa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ6Wld4bUxuUnZkR0ZzUTNKdmMzTnBibWRQWmtWa1oyVnpPMXh1ZlR0Y2JseHVYRzR2THlBdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1THk4Z1UyVmpkR2x2YmpvZ1VtVnRZV2x1YVc1bklFWjFibU4wYVc5dWMxeHVMeThnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNibHh1THk4Z1ZHaHBjeUJtZFc1amRHbHZiaUJqWVd4amRXeGhkR1Z6SUhSb1pTQjBiM1JoYkNCdWRXMWlaWElnYjJZZ1kzSnZjM05wYm1keklIUm9aU0JsWkdkbGN5QnZaaUIwYUdselhHNHZMeUJ1YjJSbElHTmhkWE5sTGx4dVFWWlRSRVpPYjJSbExuQnliM1J2ZEhsd1pTNWpZV3hqZFd4aGRHVlViM1JoYkVOeWIzTnphVzVuSUQwZ1puVnVZM1JwYjI0b0tWeHVlMXh1SUNBZ0lHeGxkQ0J6Wld4bUlEMGdkR2hwY3p0Y2JpQWdJQ0JzWlhRZ2RHVnRjRjlqY205emMybHVaMTlqYjNWdWRDQTlJREE3WEc0Z0lDQWdiR1YwSUhSbGJYQmZaV1JuWlY5c2FYTjBJRDBnVzEwN1hHNGdJQ0FnZEdWdGNGOWxaR2RsWDJ4cGMzUXVjSFZ6YUM1aGNIQnNlU2gwWlcxd1gyVmtaMlZmYkdsemRDd2djMlZzWmk1blpYUkRhWEpqYkdVb0tTNW5aWFJGWkdkbGN5Z3BLVHRjYmlBZ0lDQjBaVzF3WDJWa1oyVmZiR2x6ZENBOUlIUmxiWEJmWldSblpWOXNhWE4wTG1acGJIUmxjaWdnS0dWc1pTa2dQVDRnYzJWc1ppNW5aWFJGWkdkbGN5Z3BMbWx1WkdWNFQyWW9aV3hsS1NBOElEQXBPMXh1WEc0Z0lDQWdjMlZzWmk1blpYUkZaR2RsY3lncExtWnZja1ZoWTJnb1hHNGdJQ0FnSUNBZ0lDaGxaR2RsS1NBOVBpQjBaVzF3WDJOeWIzTnphVzVuWDJOdmRXNTBJQ3M5SUdWa1oyVXVZMkZzWTNWc1lYUmxWRzkwWVd4RGNtOXpjMmx1WjFkcGRHaE1hWE4wS0hSbGJYQmZaV1JuWlY5c2FYTjBLVnh1SUNBZ0lDazdYRzVjYmlBZ0lDQnpaV3htTG5SdmRHRnNRM0p2YzNOcGJtZFBaa1ZrWjJWeklEMGdkR1Z0Y0Y5amNtOXpjMmx1WjE5amIzVnVkRHRjYm4wN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdRVlpUUkVaT2IyUmxPeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F2c2RmLWJhc2UvYXZzZGYtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBTaW1wbGUsIGludGVybmFsIE9iamVjdC5hc3NpZ24oKSBwb2x5ZmlsbCBmb3Igb3B0aW9ucyBvYmplY3RzIGV0Yy5cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuYXNzaWduICE9IG51bGwgPyBPYmplY3QuYXNzaWduLmJpbmQoIE9iamVjdCApIDogZnVuY3Rpb24oIHRndCwgLi4uc3JjcyApe1xuICBzcmNzLmZvckVhY2goIHNyYyA9PiB7XG4gICAgT2JqZWN0LmtleXMoIHNyYyApLmZvckVhY2goIGsgPT4gdGd0W2tdID0gc3JjW2tdICk7XG4gIH0gKTtcblxuICByZXR1cm4gdGd0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NpZ24uanMiLCIvKipcbiAqXG4gKiBDaG9vc2UgdGhlIHR5cGUgb2YgbGF5b3V0IHRoYXQgYmVzdCBzdWl0cyB5b3VyIHVzZWNhc2UgYXMgYSBzdGFydGluZyBwb2ludC5cbiAqXG4gKiBBIGRpc2NyZXRlIGxheW91dCBpcyBvbmUgdGhhdCBhbGdvcml0aG1pY2FsbHkgc2V0cyByZXN1bHRhbnQgcG9zaXRpb25zLiAgSXRcbiAqIGRvZXMgbm90IGhhdmUgaW50ZXJtZWRpYXRlIHBvc2l0aW9ucy5cbiAqXG4gKiBBIGNvbnRpbnVvdXMgbGF5b3V0IGlzIG9uZSB0aGF0IHVwZGF0ZXMgcG9zaXRpb25zIGNvbnRpbnVvdXNseSwgbGlrZSBhIGZvcmNlLVxuICogZGlyZWN0ZWQgLyBwaHlzaWNzIHNpbXVsYXRpb24gbGF5b3V0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9BVlNERicpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC9pbmRleC5qcyIsImNvbnN0IGltcGwgPSByZXF1aXJlKCcuL2xheW91dCcpO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG5sZXQgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG4gIGlmKCAhY3l0b3NjYXBlICl7IHJldHVybjsgfSAvLyBjYW4ndCByZWdpc3RlciBpZiBjeXRvc2NhcGUgdW5zcGVjaWZpZWRcblxuICBjeXRvc2NhcGUoICdsYXlvdXQnLCAnYXZzZGYnLCBpbXBsICk7IC8vIHJlZ2lzdGVyIHdpdGggY3l0b3NjYXBlLmpzXG59O1xuXG5pZiggdHlwZW9mIGN5dG9zY2FwZSAhPT0gJ3VuZGVmaW5lZCcgKXsgLy8gZXhwb3NlIHRvIGdsb2JhbCBjeXRvc2NhcGUgKGkuZS4gd2luZG93LmN5dG9zY2FwZSlcbiAgcmVnaXN0ZXIoIGN5dG9zY2FwZSApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGltcGxlbWVudHMgdGhlIG92ZXJhbGwgbGF5b3V0IHByb2Nlc3MgZm9yIHRoZVxuICogQWRqYWNlbnQgVmVydGV4IHdpdGggU21hbGxlc3QgRGVncmVlIEZpcnN0IChBVlNERikgYWxnb3JpdGhtLlxuICogKENpcmN1bGFyIERyYXdpbmcgQWxnb3JpdGhtIGJ5IEhvbmdtZWkgSGUgJiBPbmRyZWogU8O9a29yYSkuXG4gKlxuICogQGF1dGhvciBEb3J1ayDDh2FrbWFrw6fEsVxuICogQGF1dGhvciBBbGloYW4gT2trYVxuICpcbiAqIENvcHlyaWdodDogaS1WaXMgKEluZm9ybWF0aW9uIFZpc3VhbGl6YXRpb24pIFJlc2VhcmNoIExhYiwgQmlsa2VudCBVbml2ZXJzaXR5LCAyMDE5IC0gcHJlc2VudFxuKi9cblxuLy8gY3l0b3NzY2FwZS5qcy1hdnNkZiBSRVFVSVJFUyBhdnNkZi1iYXNlIGxpYnJhcnkgZWxlbWVudHNcbmNvbnN0IEFWU0RGTGF5b3V0ID0gcmVxdWlyZSgnYXZzZGYtYmFzZScpLkFWU0RGTGF5b3V0O1xuY29uc3QgQVZTREZOb2RlID0gcmVxdWlyZSgnYXZzZGYtYmFzZScpLkFWU0RGTm9kZTtcbmNvbnN0IEFWU0RGQ29uc3RhbnRzID0gcmVxdWlyZSgnYXZzZGYtYmFzZScpLkFWU0RGQ29uc3RhbnRzO1xuY29uc3QgUG9pbnREID0gcmVxdWlyZSgnYXZzZGYtYmFzZScpLmxheW91dEJhc2UuUG9pbnREO1xuY29uc3QgRGltZW5zaW9uRCA9IHJlcXVpcmUoJ2F2c2RmLWJhc2UnKS5sYXlvdXRCYXNlLkRpbWVuc2lvbkQ7XG5cbi8vIEN5dG9zY2FwZS1leHRlbnRpb24gdGVtcGxhdGUgcmVxdWlyZW1lbnRzXG4vLyBNb3JlIGRldGFpbHMgY2FuIGJlIGZvdW5kIGluIE5QTSAnc2x1c2gtY3l0b3NjYXBlLWV4dGVuc2lvbicgcGFja2FnZVxuY29uc3QgYXNzaWduID0gcmVxdWlyZSgnLi4vYXNzaWduJyk7XG5jb25zdCBDb250aW51b3VzTGF5b3V0ID0gcmVxdWlyZSgnLi9jb250aW51b3VzLWJhc2UnKTtcblxuY29uc3QgaXNGbiA9IGZuID0+IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IG9wdEZuID0gKCBvcHQsIGVsZSApID0+IHtcbiAgaWYoIGlzRm4oIG9wdCApICl7XG4gICAgcmV0dXJuIG9wdCggZWxlICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9wdDtcbiAgfVxufTtcblxubGV0IGRlZmF1bHRzID0ge1xuICByZWFkeTogZnVuY3Rpb24gKCkge30sIC8vIENhbGxlZCBvbiBgbGF5b3V0cmVhZHlgXG4gIHN0b3A6IGZ1bmN0aW9uICgpIHt9LCAvLyBDYWxsZWQgb24gYGxheW91dHN0b3BgXG4gIHJlZnJlc2g6IDMwLCAgLy8gbnVtYmVyIG9mIHRpY2tzIHBlciBmcmFtZTsgaGlnaGVyIGlzIGZhc3RlciBidXQgbW9yZSBqZXJreVxuICBmaXQ6IHRydWUsICAgLy8gV2hldGhlciB0byBmaXQgdGhlIG5ldHdvcmsgdmlldyBhZnRlciB3aGVuIGRvbmVcbiAgcGFkZGluZzogMTAsICAgLy8gUGFkZGluZyBvbiBmaXRcbiAgcmFuZG9taXplOiBmYWxzZSwgICAvLyBXaGV0aGVyIHRvIGVuYWJsZSBpbmNyZW1lbnRhbCBtb2RlXG4gIGFuaW1hdGU6ICdlbmQnLCAgIC8vIFR5cGUgb2YgbGF5b3V0IGFuaW1hdGlvbi4gVGhlIG9wdGlvbiBzZXQgaXMgeydkdXJpbmcnLCAnZW5kJywgZmFsc2V9XG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsICAgLy8gRHVyYXRpb24gZm9yIGFuaW1hdGU6ZW5kXG4gIG5vZGVTZXBhcmF0aW9uOiA2MCwgLy8gSG93IGFwYXJ0IHRoZSBub2RlcyBhcmVcbn07XG5cbi8qKlxuICogIFRoaXMgaXMgdGhlIG1haW4gY2xhc3MgdGhhdCBkb2VzIGFsbCB0aGUgZnVuY3Rpb25hbGl0eS5cbiAqICBUaGUgY2xhc3MgaXMgdXRpbGl6ZWQgYnkgZnVuY3Rpb25zIGluIHRoZSBjb250aW51b3VzLWJhc2UgZm9sZGVyLlxuICovXG5jbGFzcyBBVlNERiBleHRlbmRzIENvbnRpbnVvdXNMYXlvdXQge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApe1xuICAgIHN1cGVyKCBhc3NpZ24oIHt9LCBkZWZhdWx0cywgb3B0aW9ucyApICk7XG5cbiAgICAvLyBXaGV0aGVyIG5vZGUgc2VwYXJhdGlvbiB2YWx1ZSBpcyB1c2VkXG4gICAgaWYob3B0aW9ucy5ub2RlU2VwYXJhdGlvbiAhPSBudWxsKVxuICAgICAgQVZTREZDb25zdGFudHMuREVGQVVMVF9OT0RFX1NFUEFSQVRJT04gPSBvcHRpb25zLm5vZGVTZXBhcmF0aW9uO1xuICAgIGVsc2VcbiAgICAgIEFWU0RGQ29uc3RhbnRzLkRFRkFVTFRfTk9ERV9TRVBBUkFUSU9OID0gZGVmYXVsdHMubm9kZVNlcGFyYXRpb247XG4gIH1cblxuICAvKipcbiAgICogIEluaXRpYWxpemluZyBBVlNERiBlbGVtZW50cyBhbmQgYXJyYW5naW5nIHRoZSBub2RlcyBvZiB0aGUgZ3JhcGggYXJvdW5kIHRoZSBjaXJjbGVcbiAgICovXG4gIHByZXJ1bigpe1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7IC8vIG9wdGlvbnMgb2JqZWN0IGNvbWJpbmVkIHdpdGggY3VycmVudCBzdGF0ZVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBBVlNERiBlbGVtZW50cyBhbmQgdGhlaXIgcmVxdWlyZW1lbnRzXG4gICAgbGV0IGF2c2RmTGF5b3V0ID0gdGhpcy5hdnNkZkxheW91dCA9IG5ldyBBVlNERkxheW91dCgpO1xuICAgIGxldCBncmFwaE1hbmFnZXIgPSB0aGlzLmdyYXBoTWFuYWdlciA9IGF2c2RmTGF5b3V0Lm5ld0dyYXBoTWFuYWdlcigpO1xuICAgIGxldCByb290ID0gdGhpcy5yb290ID0gZ3JhcGhNYW5hZ2VyLmFkZFJvb3QoKTtcbiAgICBsZXQgbm9kZXMgPSBzdGF0ZS5ub2RlcztcbiAgICBsZXQgZWRnZXMgPSBzdGF0ZS5lZGdlcztcblxuICAgIC8vIEdldHRpbmcgbm9kZXMgb2YgY3l0b3NjYXBlIGFuZCBjb252ZXJ0aW5nIGl0IHRvIEFWU0RGIHN0cnVjdHVyZVxuICAgIHRoaXMuaWRUb0xOb2RlID0ge307XG4gICAgdGhpcy5wcm9jZXNzQ2hpbGRyZW5MaXN0KHJvb3QsIG5vZGVzLCBhdnNkZkxheW91dCk7XG5cbiAgICAvLyBHZXR0aW5nIGVkZ2VzIG9mIGN5dG9zY2FwZSBhbmQgdHJhbnNmZXJpbmcgaXQgdG8gR3JhcGhNYW5hZ2VyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBsZXQgZWRnZSA9IGVkZ2VzW2ldO1xuICAgICAgbGV0IHNvdXJjZU5vZGUgPSB0aGlzLmlkVG9MTm9kZVtlZGdlLmRhdGEoXCJzb3VyY2VcIildO1xuICAgICAgbGV0IHRhcmdldE5vZGUgPSB0aGlzLmlkVG9MTm9kZVtlZGdlLmRhdGEoXCJ0YXJnZXRcIildO1xuICAgICAgaWYoc291cmNlTm9kZSAhPT0gdGFyZ2V0Tm9kZSAmJiBzb3VyY2VOb2RlLmdldEVkZ2VzQmV0d2Vlbih0YXJnZXROb2RlKS5sZW5ndGggPT09IDApXG4gICAgICB7XG4gICAgICAgIGxldCBlMSA9IGdyYXBoTWFuYWdlci5hZGQoYXZzZGZMYXlvdXQubmV3RWRnZSgpLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgICAgZTEuaWQgPSBlZGdlLmlkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUnVubmluZyB0aGUgQVZTREYgbGF5b3V0LlxuICAgIC8vIE5vdGU6IFRoaXMgZnVuY3Rpb24gZG9lc24ndCBkbyBwb3N0LXByb2Nlc3NpbmcuIFBsdXMsIG5vZGVzIGhhdmUgdG8gYmUgcG9zaXRpb25lZC5cbiAgICAvLyBTZWUgQVZTREZMYXlvdXQgZm9yIGRldGFpbHMuXG4gICAgYXZzZGZMYXlvdXQubGF5b3V0KCk7XG5cbiAgICAvLyBXZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgaW5pdGlhbCBjaXJjbGUgcG9zaXRpb24gaWYgd2Ugd2FudCB0byByZW5kZXIgaXRcbiAgICBhdnNkZkxheW91dC51cGRhdGVOb2RlQ29vcmRpbmF0ZXMoKTtcblxuICAgIC8vIFBvc3QgcHJvY2VzcyBpcyBpdGVyYXRlZCBvdmVyIHRoZSBzb3J0ZWQgbGlzdCBvZiB2ZXJ0ZXggZGVncmVlcyAoZGVzY2VuZGluZylcbiAgICB0aGlzLnNvcnRlZEJ5RGVncmVlTGlzdCA9IGF2c2RmTGF5b3V0LmluaXRQb3N0UHJvY2VzcygpO1xuICB9XG5cblxuICAvKipcbiAgICogIFJ1bnMgdGhpcyBpbiBlYWNoIGl0ZXJhdGlvblxuICAgKi9cbiAgdGljaygpe1xuICAgIGxldCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIGdldHRpbmcgY29vcmRpbmF0ZXMgZnJvbSBBVlNERiBlbGVtZW50cyBhbmQgcGFzc2luZyBpdCB0byBjeXRvc2NhcGVcbiAgICBsZXQgcG9zaXRpb25zID0gdGhpcy5hdnNkZkxheW91dC5nZXRQb3NpdGlvbnNEYXRhKCk7XG4gICAgbGV0IGdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uKGVsZSwgaSl7XG4gICAgICBpZih0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGVsZSA9IGk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsTm9kZSA9IHBvc2l0aW9uc1tlbGUuZGF0YSgnaWQnKV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IGxOb2RlLngsXG4gICAgICAgIHk6IGxOb2RlLnlcbiAgICAgIH07XG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbnMuZWxlcy5ub2RlcygpLmxheW91dFBvc2l0aW9ucyh0aGlzLCB0aGlzLm9wdGlvbnMsIGdldFBvc2l0aW9ucyk7XG5cbiAgICBpZihzdGF0ZS50aWNrSW5kZXggPj0gc3RhdGUubm9kZXMuc2l6ZSgpKVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgIHRoaXMuYXZzZGZMYXlvdXQub25lU3RlcFBvc3RQcm9jZXNzKHRoaXMuc29ydGVkQnlEZWdyZWVMaXN0W3N0YXRlLnRpY2tJbmRleF0pO1xuICAgICAgdGhpcy5hdnNkZkxheW91dC51cGRhdGVOb2RlQW5nbGVzKCk7XG4gICAgICB0aGlzLmF2c2RmTGF5b3V0LnVwZGF0ZU5vZGVDb29yZGluYXRlcygpO1xuXG4gIH1cblxuICAvKipcbiAgICogIFJ1bnMgdGhpcyBmdW5jdGlvbiBhZnRlciB0aGUgbGF5b3V0IGlzIGRvbmUgdGlja2luZ1xuICAgKi9cbiAgcG9zdHJ1bigpe1xuICB9XG5cbiAgLyoqXG4gICAqICBDbGVhbiB1cCBhbnkgb2JqZWN0IHJlZnMgdGhhdCBjb3VsZCBwcmV2ZW50IGdhcmJhZ2UgY29sbGVjdGlvbiwgZXRjLlxuICAgKi9cbiAgZGVzdHJveSgpe1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiAgVHJhbnNpdGlvbiBmcm9tIGN5dG9zY2FwZSBub2RlcyB0byBBVlNERiBlbGVtZW50c1xuICAgKi9cbiAgcHJvY2Vzc0NoaWxkcmVuTGlzdChwYXJlbnQsIGNoaWxkcmVuLCBsYXlvdXQpIHtcbiAgICBsZXQgc2l6ZSA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKylcbiAgICB7XG4gICAgICBsZXQgdGhlQ2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGxldCB0aGVOb2RlO1xuXG4gICAgICAvL0xhYmVsIGRpbWVuc2lvbnMgYXJlIE5PVCBpbmNsdWRlZCB3aGVuIGNhbGN1bGF0aW5nIG5vZGUgZGltZW5zaW9uc1xuICAgICAgbGV0IGRpbWVuc2lvbnMgPSB0aGVDaGlsZC5sYXlvdXREaW1lbnNpb25zKHtcbiAgICAgICAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGVDaGlsZC5vdXRlcldpZHRoKCkgIT0gbnVsbCAmJiB0aGVDaGlsZC5vdXRlckhlaWdodCgpICE9IG51bGwpXG4gICAgICB7XG4gICAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBBVlNERk5vZGUobGF5b3V0LmdyYXBoTWFuYWdlcixcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBuZXcgUG9pbnREKHRoZUNoaWxkLnBvc2l0aW9uKCd4JykgLSBkaW1lbnNpb25zLncgLyAyLFxuICAgICAgICAgICAgICAgIHRoZUNoaWxkLnBvc2l0aW9uKCd5JykgLSBkaW1lbnNpb25zLmggLyAyKSxcbiAgICAgICAgICAgIG5ldyBEaW1lbnNpb25EKHBhcnNlRmxvYXQoZGltZW5zaW9ucy53KSxcbiAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGRpbWVuc2lvbnMuaCkpKSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBBVlNERk5vZGUodGhpcy5ncmFwaE1hbmFnZXIpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIGlkIHRvIHRoZSBsYXlvdXQgbm9kZVxuICAgICAgdGhlTm9kZS5pZCA9IHRoZUNoaWxkLmRhdGEoXCJpZFwiKTtcblxuICAgICAgLy8gQXR0YWNoIHRoZSBwYWRkaW5ncyBvZiBjeSBub2RlIHRvIGxheW91dCBub2RlXG4gICAgICB0aGVOb2RlLnBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgICB0aGVOb2RlLnBhZGRpbmdUb3AgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICAgIHRoZU5vZGUucGFkZGluZ1JpZ2h0ID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgICB0aGVOb2RlLnBhZGRpbmdCb3R0b20gPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcblxuICAgICAgLy8gTWFwIHRoZSBsYXlvdXQgbm9kZVxuICAgICAgdGhpcy5pZFRvTE5vZGVbdGhlQ2hpbGQuZGF0YShcImlkXCIpXSA9IHRoZU5vZGU7XG5cbiAgICAgIGlmIChpc05hTih0aGVOb2RlLnJlY3QueCkpXG4gICAgICB7XG4gICAgICAgIHRoZU5vZGUucmVjdC54ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHRoZU5vZGUucmVjdC55KSlcbiAgICAgIHtcbiAgICAgICAgdGhlTm9kZS5yZWN0LnkgPSAwO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQVZTREY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L0FWU0RGLmpzIiwiLy8gZ2VuZXJhbCBkZWZhdWx0IG9wdGlvbnMgZm9yIGZvcmNlLWRpcmVjdGVkIGxheW91dFxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBhbmltYXRlOiB0cnVlLCAvLyB3aGV0aGVyIHRvIHNob3cgdGhlIGxheW91dCBhcyBpdCdzIHJ1bm5pbmc7IHNwZWNpYWwgJ2VuZCcgdmFsdWUgbWFrZXMgdGhlIGxheW91dCBhbmltYXRlIGxpa2UgYSBkaXNjcmV0ZSBsYXlvdXRcbiAgcmVmcmVzaDogMTAsIC8vIG51bWJlciBvZiB0aWNrcyBwZXIgZnJhbWU7IGhpZ2hlciBpcyBmYXN0ZXIgYnV0IG1vcmUgamVya3lcbiAgdW5ncmFiaWZ5V2hpbGVTaW11bGF0aW5nOiBmYWxzZSwgLy8gc28geW91IGNhbid0IGRyYWcgbm9kZXMgZHVyaW5nIGxheW91dFxuICBmaXQ6IHRydWUsIC8vIG9uIGV2ZXJ5IGxheW91dCByZXBvc2l0aW9uIG9mIG5vZGVzLCBmaXQgdGhlIHZpZXdwb3J0XG4gIHBhZGRpbmc6IDMwLCAvLyBwYWRkaW5nIGFyb3VuZCB0aGUgc2ltdWxhdGlvblxuICBib3VuZGluZ0JveDogdW5kZWZpbmVkLCAvLyBjb25zdHJhaW4gbGF5b3V0IGJvdW5kczsgeyB4MSwgeTEsIHgyLCB5MiB9IG9yIHsgeDEsIHkxLCB3LCBoIH1cblxuICAvLyBsYXlvdXQgZXZlbnQgY2FsbGJhY2tzXG4gIHJlYWR5OiBmdW5jdGlvbigpe30sIC8vIG9uIGxheW91dHJlYWR5XG4gIHN0b3A6IGZ1bmN0aW9uKCl7fSwgLy8gb24gbGF5b3V0c3RvcFxuXG4gIC8vIHBvc2l0aW9uaW5nIG9wdGlvbnNcbiAgcmFuZG9taXplOiBmYWxzZSwgLy8gdXNlIHJhbmRvbSBub2RlIHBvc2l0aW9ucyBhdCBiZWdpbm5pbmcgb2YgbGF5b3V0XG4gIFxuICAvLyBpbmZpbml0ZSBsYXlvdXQgb3B0aW9uc1xuICBpbmZpbml0ZTogZmFsc2UgLy8gb3ZlcnJpZGVzIGFsbCBvdGhlciBvcHRpb25zIGZvciBhIGZvcmNlcy1hbGwtdGhlLXRpbWUgbW9kZVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9kZWZhdWx0cy5qcyIsIi8qKlxuQSBnZW5lcmljIGNvbnRpbnVvdXMgbGF5b3V0IGNsYXNzXG4qL1xuXG5jb25zdCBhc3NpZ24gPSByZXF1aXJlKCcuLi8uLi9hc3NpZ24nKTtcbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuY29uc3QgbWFrZUJvdW5kaW5nQm94ID0gcmVxdWlyZSgnLi9tYWtlLWJiJyk7XG5jb25zdCB7IHNldEluaXRpYWxQb3NpdGlvblN0YXRlLCByZWZyZXNoUG9zaXRpb25zLCBnZXROb2RlUG9zaXRpb25EYXRhIH0gPSByZXF1aXJlKCcuL3Bvc2l0aW9uJyk7XG5jb25zdCB7IG11bHRpdGljayB9ID0gcmVxdWlyZSgnLi90aWNrJyk7XG5cbmNsYXNzIENvbnRpbnVvdXNMYXlvdXQge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApe1xuICAgIGxldCBvID0gdGhpcy5vcHRpb25zID0gYXNzaWduKCB7fSwgZGVmYXVsdHMsIG9wdGlvbnMgKTtcblxuICAgIGxldCBzID0gdGhpcy5zdGF0ZSA9IGFzc2lnbigge30sIG8sIHtcbiAgICAgIGxheW91dDogdGhpcyxcbiAgICAgIG5vZGVzOiBvLmVsZXMubm9kZXMoKSxcbiAgICAgIGVkZ2VzOiBvLmVsZXMuZWRnZXMoKSxcbiAgICAgIHRpY2tJbmRleDogMCxcbiAgICAgIGZpcnN0VXBkYXRlOiB0cnVlXG4gICAgfSApO1xuXG4gICAgcy5hbmltYXRlRW5kID0gby5hbmltYXRlICYmIG8uYW5pbWF0ZSA9PT0gJ2VuZCc7XG4gICAgcy5hbmltYXRlQ29udGludW91c2x5ID0gby5hbmltYXRlICYmICFzLmFuaW1hdGVFbmQ7XG4gIH1cblxuICBnZXRTY3JhdGNoKCBlbCApe1xuICAgIGxldCBuYW1lID0gdGhpcy5zdGF0ZS5uYW1lO1xuICAgIGxldCBzY3JhdGNoID0gZWwuc2NyYXRjaCggbmFtZSApO1xuXG4gICAgaWYoICFzY3JhdGNoICl7XG4gICAgICBzY3JhdGNoID0ge307XG5cbiAgICAgIGVsLnNjcmF0Y2gobmFtZSwgc2NyYXRjaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjcmF0Y2g7XG4gIH1cblxuICBydW4oKXtcbiAgICBsZXQgbCA9IHRoaXM7XG4gICAgbGV0IHMgPSB0aGlzLnN0YXRlO1xuXG4gICAgcy50aWNrSW5kZXggPSAwO1xuICAgIHMuZmlyc3RVcGRhdGUgPSB0cnVlO1xuXG4gICAgcy5ydW5uaW5nID0gdHJ1ZTtcblxuICAgIHMuY3VycmVudEJvdW5kaW5nQm94ID0gbWFrZUJvdW5kaW5nQm94KCBzLmJvdW5kaW5nQm94LCBzLmN5ICk7XG5cbiAgICBpZiggcy5yZWFkeSApeyBsLm9uZSggJ3JlYWR5Jywgcy5yZWFkeSApOyB9XG4gICAgaWYoIHMuc3RvcCApeyBsLm9uZSggJ3N0b3AnLCBzLnN0b3AgKTsgfVxuXG4gICAgcy5ub2Rlcy5mb3JFYWNoKCBuID0+IHNldEluaXRpYWxQb3NpdGlvblN0YXRlKCBuLCBzICkgKTtcblxuICAgIGwucHJlcnVuKCBzICk7XG5cbiAgICBpZiggcy5hbmltYXRlQ29udGludW91c2x5ICl7XG4gICAgICBsZXQgdW5ncmFiaWZ5ID0gbm9kZSA9PiB7XG4gICAgICAgIGlmKCAhcy51bmdyYWJpZnlXaGlsZVNpbXVsYXRpbmcgKXsgcmV0dXJuOyB9XG5cbiAgICAgICAgbGV0IGdyYWJiYWJsZSA9IGdldE5vZGVQb3NpdGlvbkRhdGEoIG5vZGUsIHMgKS5ncmFiYmFibGUgPSBub2RlLmdyYWJiYWJsZSgpO1xuXG4gICAgICAgIGlmKCBncmFiYmFibGUgKXtcbiAgICAgICAgICBub2RlLnVuZ3JhYmlmeSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgcmVncmFiaWZ5ID0gbm9kZSA9PiB7XG4gICAgICAgIGlmKCAhcy51bmdyYWJpZnlXaGlsZVNpbXVsYXRpbmcgKXsgcmV0dXJuOyB9XG5cbiAgICAgICAgbGV0IGdyYWJiYWJsZSA9IGdldE5vZGVQb3NpdGlvbkRhdGEoIG5vZGUsIHMgKS5ncmFiYmFibGU7XG5cbiAgICAgICAgaWYoIGdyYWJiYWJsZSApe1xuICAgICAgICAgIG5vZGUuZ3JhYmlmeSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsZXQgdXBkYXRlR3JhYlN0YXRlID0gbm9kZSA9PiBnZXROb2RlUG9zaXRpb25EYXRhKCBub2RlLCBzICkuZ3JhYmJlZCA9IG5vZGUuZ3JhYmJlZCgpO1xuXG4gICAgICBsZXQgb25HcmFiID0gZnVuY3Rpb24oeyB0YXJnZXQgfSl7XG4gICAgICAgIHVwZGF0ZUdyYWJTdGF0ZSggdGFyZ2V0ICk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgb25GcmVlID0gb25HcmFiO1xuXG4gICAgICBsZXQgb25EcmFnID0gZnVuY3Rpb24oeyB0YXJnZXQgfSl7XG4gICAgICAgIGxldCBwID0gZ2V0Tm9kZVBvc2l0aW9uRGF0YSggdGFyZ2V0LCBzICk7XG4gICAgICAgIGxldCB0cCA9IHRhcmdldC5wb3NpdGlvbigpO1xuXG4gICAgICAgIHAueCA9IHRwLng7XG4gICAgICAgIHAueSA9IHRwLnk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgbGlzdGVuVG9HcmFiID0gbm9kZSA9PiB7XG4gICAgICAgIG5vZGUub24oJ2dyYWInLCBvbkdyYWIpO1xuICAgICAgICBub2RlLm9uKCdmcmVlJywgb25GcmVlKTtcbiAgICAgICAgbm9kZS5vbignZHJhZycsIG9uRHJhZyk7XG4gICAgICB9O1xuXG4gICAgICBsZXQgdW5saXN0ZW5Ub0dyYWIgPSBub2RlID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVMaXN0ZW5lcignZ3JhYicsIG9uR3JhYik7XG4gICAgICAgIG5vZGUucmVtb3ZlTGlzdGVuZXIoJ2ZyZWUnLCBvbkZyZWUpO1xuICAgICAgICBub2RlLnJlbW92ZUxpc3RlbmVyKCdkcmFnJywgb25EcmFnKTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBmaXQgPSAoKSA9PiB7XG4gICAgICAgIGlmKCBzLmZpdCAmJiBzLmFuaW1hdGVDb250aW51b3VzbHkgKXtcbiAgICAgICAgICBzLmN5LmZpdCggcy5wYWRkaW5nICk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGxldCBvbk5vdERvbmUgPSAoKSA9PiB7XG4gICAgICAgIHJlZnJlc2hQb3NpdGlvbnMoIHMubm9kZXMsIHMgKTtcbiAgICAgICAgZml0KCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBmcmFtZSApO1xuICAgICAgfTtcblxuICAgICAgbGV0IGZyYW1lID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbXVsdGl0aWNrKCBzLCBvbk5vdERvbmUsIG9uRG9uZSApO1xuICAgICAgfTtcblxuICAgICAgbGV0IG9uRG9uZSA9ICgpID0+IHtcbiAgICAgICAgcmVmcmVzaFBvc2l0aW9ucyggcy5ub2RlcywgcyApO1xuICAgICAgICBmaXQoKTtcblxuICAgICAgICBzLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuICAgICAgICAgIHJlZ3JhYmlmeSggbiApO1xuICAgICAgICAgIHVubGlzdGVuVG9HcmFiKCBuICk7XG4gICAgICAgIH0gKTtcblxuICAgICAgICBzLnJ1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICBsLmVtaXQoJ2xheW91dHN0b3AnKTtcbiAgICAgIH07XG5cbiAgICAgIHMuc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgbC5lbWl0KCdsYXlvdXRzdGFydCcpO1xuXG4gICAgICBzLm5vZGVzLmZvckVhY2goIG4gPT4ge1xuICAgICAgICB1bmdyYWJpZnkoIG4gKTtcbiAgICAgICAgbGlzdGVuVG9HcmFiKCBuICk7XG4gICAgICB9ICk7XG5cbiAgICAgIGZyYW1lKCk7IC8vIGtpY2sgb2ZmXG4gICAgfSBlbHNlIHtcbiAgICAgIG11bHRpdGljayggcyApO1xuXG4gICAgICBzLmVsZXMubGF5b3V0UG9zaXRpb25zKCB0aGlzLCBzLCBub2RlID0+IGdldE5vZGVQb3NpdGlvbkRhdGEoIG5vZGUsIHMgKSApO1xuICAgIH1cblxuICAgIGwucG9zdHJ1biggcyApO1xuXG4gICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG4gIH1cblxuICBwcmVydW4oKXt9XG4gIHBvc3RydW4oKXt9XG4gIHRpY2soKXt9XG5cbiAgc3RvcCgpe1xuICAgIHRoaXMuc3RhdGUucnVubmluZyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG4gIH1cblxuICBkZXN0cm95KCl7XG4gICAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250aW51b3VzTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC9jb250aW51b3VzLWJhc2UvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCBiYiwgY3kgKXtcbiAgaWYoIGJiID09IG51bGwgKXtcbiAgICBiYiA9IHsgeDE6IDAsIHkxOiAwLCB3OiBjeS53aWR0aCgpLCBoOiBjeS5oZWlnaHQoKSB9O1xuICB9IGVsc2UgeyAvLyBjb3B5XG4gICAgYmIgPSB7IHgxOiBiYi54MSwgeDI6IGJiLngyLCB5MTogYmIueTEsIHkyOiBiYi55MiwgdzogYmIudywgaDogYmIuaCB9O1xuICB9XG5cbiAgaWYoIGJiLngyID09IG51bGwgKXsgYmIueDIgPSBiYi54MSArIGJiLnc7IH1cbiAgaWYoIGJiLncgPT0gbnVsbCApeyBiYi53ID0gYmIueDIgLSBiYi54MTsgfVxuICBpZiggYmIueTIgPT0gbnVsbCApeyBiYi55MiA9IGJiLnkxICsgYmIuaDsgfVxuICBpZiggYmIuaCA9PSBudWxsICl7IGJiLmggPSBiYi55MiAtIGJiLnkxOyB9XG5cbiAgcmV0dXJuIGJiO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQvY29udGludW91cy1iYXNlL21ha2UtYmIuanMiLCJjb25zdCBhc3NpZ24gPSByZXF1aXJlKCcuLi8uLi9hc3NpZ24nKTtcblxubGV0IHNldEluaXRpYWxQb3NpdGlvblN0YXRlID0gZnVuY3Rpb24oIG5vZGUsIHN0YXRlICl7XG4gIGxldCBwID0gbm9kZS5wb3NpdGlvbigpO1xuICBsZXQgYmIgPSBzdGF0ZS5jdXJyZW50Qm91bmRpbmdCb3g7XG4gIGxldCBzY3JhdGNoID0gbm9kZS5zY3JhdGNoKCBzdGF0ZS5uYW1lICk7XG5cbiAgaWYoIHNjcmF0Y2ggPT0gbnVsbCApe1xuICAgIHNjcmF0Y2ggPSB7fTtcblxuICAgIG5vZGUuc2NyYXRjaCggc3RhdGUubmFtZSwgc2NyYXRjaCApO1xuICB9XG5cbiAgYXNzaWduKCBzY3JhdGNoLCBzdGF0ZS5yYW5kb21pemUgPyB7XG4gICAgeDogYmIueDEgKyBNYXRoLnJvdW5kKCBNYXRoLnJhbmRvbSgpICogYmIudyApLFxuICAgIHk6IGJiLnkxICsgTWF0aC5yb3VuZCggTWF0aC5yYW5kb20oKSAqIGJiLmggKVxuICB9IDoge1xuICAgIHg6IHAueCxcbiAgICB5OiBwLnlcbiAgfSApO1xuXG4gIHNjcmF0Y2gubG9ja2VkID0gbm9kZS5sb2NrZWQoKTtcbn07XG5cbmxldCBnZXROb2RlUG9zaXRpb25EYXRhID0gZnVuY3Rpb24oIG5vZGUsIHN0YXRlICl7XG4gIHJldHVybiBub2RlLnNjcmF0Y2goIHN0YXRlLm5hbWUgKTtcbn07XG5cbmxldCByZWZyZXNoUG9zaXRpb25zID0gZnVuY3Rpb24oIG5vZGVzLCBzdGF0ZSApe1xuICBub2Rlcy5wb3NpdGlvbnMoZnVuY3Rpb24oIG5vZGUgKXtcbiAgICBsZXQgc2NyYXRjaCA9IG5vZGUuc2NyYXRjaCggc3RhdGUubmFtZSApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHNjcmF0Y2gueCxcbiAgICAgIHk6IHNjcmF0Y2gueVxuICAgIH07XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHNldEluaXRpYWxQb3NpdGlvblN0YXRlLCBnZXROb2RlUG9zaXRpb25EYXRhLCByZWZyZXNoUG9zaXRpb25zIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS9wb3NpdGlvbi5qcyIsImNvbnN0IG5vcCA9IGZ1bmN0aW9uKCl7fTtcblxubGV0IHRpY2sgPSBmdW5jdGlvbiggc3RhdGUgKXtcbiAgbGV0IHMgPSBzdGF0ZTtcbiAgbGV0IGwgPSBzdGF0ZS5sYXlvdXQ7XG5cbiAgbGV0IHRpY2tJbmRpY2F0ZXNEb25lID0gbC50aWNrKCBzICk7XG5cbiAgaWYoIHMuZmlyc3RVcGRhdGUgKXtcbiAgICBpZiggcy5hbmltYXRlQ29udGludW91c2x5ICl7IC8vIGluZGljYXRlIHRoZSBpbml0aWFsIHBvc2l0aW9ucyBoYXZlIGJlZW4gc2V0XG4gICAgICBzLmxheW91dC5lbWl0KCdsYXlvdXRyZWFkeScpO1xuICAgIH1cbiAgICBzLmZpcnN0VXBkYXRlID0gZmFsc2U7XG4gIH1cblxuICBzLnRpY2tJbmRleCsrO1xuXG4gIGxldCBkdXJhdGlvbiA9IHMuc3RhcnRUaW1lIC0gRGF0ZS5ub3coKTtcblxuICByZXR1cm4gIXMuaW5maW5pdGUgJiYgKCB0aWNrSW5kaWNhdGVzRG9uZSApO1xufTtcblxubGV0IG11bHRpdGljayA9IGZ1bmN0aW9uKCBzdGF0ZSwgb25Ob3REb25lID0gbm9wLCBvbkRvbmUgPSBub3AgKXtcbiAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgbGV0IHMgPSBzdGF0ZTtcblxuICBmb3IoIGxldCBpID0gMDsgaSA8IHMucmVmcmVzaDsgaSsrICl7XG4gICAgZG9uZSA9ICFzLnJ1bm5pbmcgfHwgdGljayggcyApO1xuXG4gICAgaWYoIGRvbmUgKXsgYnJlYWs7IH1cbiAgfVxuXG4gIGlmKCAhZG9uZSApe1xuICAgIG9uTm90RG9uZSgpO1xuICB9IGVsc2Uge1xuICAgIG9uRG9uZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgdGljaywgbXVsdGl0aWNrIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L2NvbnRpbnVvdXMtYmFzZS90aWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==