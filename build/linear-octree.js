/**
 * linear-octree v0.0.0 build Sat Jan 18 2020
 * https://github.com/vanruesc/linear-octree
 * Copyright 2020 Raoul van Rüschen
 * @license Zlib
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('math-ds'), require('iterator-result')) :
  typeof define === 'function' && define.amd ? define(['exports', 'math-ds', 'iterator-result'], factory) :
  (global = global || self, factory(global.LINEAROCTREE = {}, global.MATHDS, global.ITERATORRESULT));
}(this, (function (exports, mathDs, IteratorResult) { 'use strict';

  IteratorResult = IteratorResult && IteratorResult.hasOwnProperty('default') ? IteratorResult['default'] : IteratorResult;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var Octant = function Octant() {
    _classCallCheck(this, Octant);

    this.data = null;
  };

  var IntermediateOctant = function (_Octant) {
    _inherits(IntermediateOctant, _Octant);

    function IntermediateOctant() {
      var _this;

      _classCallCheck(this, IntermediateOctant);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(IntermediateOctant).call(this));
      _this.children = 0;
      return _this;
    }

    return IntermediateOctant;
  }(Octant);

  var BinaryUtils = function () {
    function BinaryUtils() {
      _classCallCheck(this, BinaryUtils);
    }

    _createClass(BinaryUtils, null, [{
      key: "parseBin",
      value: function parseBin(s) {
        return parseInt(s, 2);
      }
    }, {
      key: "createBinaryString",
      value: function createBinaryString(n) {
        var minBits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
        var sign = n < 0 ? "-" : "";
        var result = Math.abs(n).toString(2);

        while (result.length < minBits) {
          result = "0" + result;
        }

        return sign + result;
      }
    }]);

    return BinaryUtils;
  }();

  var KeyIterator = function () {
    function KeyIterator(keyDesign, min, max) {
      _classCallCheck(this, KeyIterator);

      this.keyDesign = keyDesign;
      this.min = min;
      this.max = max;
      this.keyBase = new mathDs.Vector3();
      this.key = new mathDs.Vector3();
      this.limit = new mathDs.Vector3();
      this.result = new IteratorResult();
      this.reset();
    }

    _createClass(KeyIterator, [{
      key: "reset",
      value: function reset() {
        var keyDesign = this.keyDesign;
        var min = this.min,
            max = this.max;

        if (min.x <= max.x && min.y <= max.y && min.z <= max.z) {
          this.keyBase.set(min.x, min.y * keyDesign.rangeX, min.z * keyDesign.rangeXY);
          this.limit.set(max.x, max.y * keyDesign.rangeX, max.z * keyDesign.rangeXY);
          this.key.copy(this.keyBase);
        } else {
          this.keyBase.set(1, 1, 1);
          this.limit.set(0, 0, 0);
          this.key.copy(this.keyBase);
          console.error("Invalid key range", min, max);
        }

        this.result.reset();
        return this;
      }
    }, {
      key: "next",
      value: function next() {
        var result = this.result;
        var keyDesign = this.keyDesign;
        var keyBase = this.keyBase;
        var limit = this.limit;
        var key = this.key;

        if (key.z <= limit.z) {
          result.value = key.z + key.y + key.x;
          ++key.x;

          if (key.x > limit.x) {
            key.x = keyBase.x;
            key.y += keyDesign.rangeX;

            if (key.y > limit.y) {
              key.y = keyBase.y;
              key.z += keyDesign.rangeXY;
            }
          }
        } else {
          result.value = null;
          result.done = true;
        }

        return result;
      }
    }, {
      key: "return",
      value: function _return(value) {
        this.result.value = value;
        this.result.done = true;
        return this.result;
      }
    }, {
      key: Symbol.iterator,
      value: function value() {
        return this;
      }
    }]);

    return KeyIterator;
  }();

  var DWORD_BITS = 32;
  var RANGE_DWORD = Math.pow(2, DWORD_BITS);
  var BITS = 53;
  var HI_BITS = 21;
  var LO_BITS = 32;

  var KeyDesign = function () {
    function KeyDesign() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.round(BITS * 0.4);
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.round(BITS * 0.2);
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;

      _classCallCheck(this, KeyDesign);

      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.rangeX = 0;
      this.rangeY = 0;
      this.rangeZ = 0;
      this.rangeXY = 0;
      this.halfRange = null;
      this.maskX = [0, 0];
      this.maskY = [0, 0];
      this.maskZ = [0, 0];
      this.set(x, y, z);
    }

    _createClass(KeyDesign, [{
      key: "set",
      value: function set(x, y, z) {
        if (x + y + z > BITS || x > DWORD_BITS || y > DWORD_BITS || z > DWORD_BITS) {
          console.warn("Invalid bit allotment");
          x = Math.round(BITS * 0.4);
          y = Math.round(BITS * 0.2);
          z = x;
        }

        this.x = x;
        this.y = y;
        this.z = z;
        this.rangeX = Math.pow(2, x);
        this.rangeY = Math.pow(2, y);
        this.rangeZ = Math.pow(2, z);
        this.rangeXY = Math.pow(2, x + y);
        this.halfRange = new mathDs.Vector3(this.rangeX / 2, this.rangeY / 2, this.rangeZ / 2);
        this.updateBitMasks();
      }
    }, {
      key: "updateBitMasks",
      value: function updateBitMasks() {
        var xBits = this.x;
        var yBits = this.y;
        var zBits = this.z;
        var maskX = this.maskX;
        var maskY = this.maskY;
        var maskZ = this.maskZ;
        var hiShiftX = DWORD_BITS - Math.max(0, xBits - LO_BITS);
        var hiShiftY = DWORD_BITS - Math.max(0, yBits + xBits - LO_BITS);
        var hiShiftZ = DWORD_BITS - Math.max(0, zBits + yBits + xBits - LO_BITS);
        maskX[1] = hiShiftX < DWORD_BITS ? ~0 >>> hiShiftX : 0;
        maskX[0] = ~0 >>> Math.max(0, LO_BITS - xBits);
        maskY[1] = ((hiShiftY < DWORD_BITS ? ~0 >>> hiShiftY : 0) & ~maskX[1]) >>> 0;
        maskY[0] = (~0 >>> Math.max(0, LO_BITS - (xBits + yBits)) & ~maskX[0]) >>> 0;
        maskZ[1] = ((hiShiftZ < DWORD_BITS ? ~0 >>> hiShiftZ : 0) & ~maskY[1] & ~maskX[1]) >>> 0;
        maskZ[0] = (~0 >>> Math.max(0, LO_BITS - (xBits + yBits + zBits)) & ~maskY[0] & ~maskX[0]) >>> 0;
      }
    }, {
      key: "unpackKey",
      value: function unpackKey(key) {
        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new mathDs.Vector3();
        var maskX = this.maskX;
        var maskY = this.maskY;
        var maskZ = this.maskZ;
        var hi = Math.trunc(key / RANGE_DWORD);
        var lo = key % RANGE_DWORD;
        return target.set((hi & maskX[1]) * RANGE_DWORD + ((lo & maskX[0]) >>> 0), ((hi & maskY[1]) * RANGE_DWORD + ((lo & maskY[0]) >>> 0)) / this.rangeX, ((hi & maskZ[1]) * RANGE_DWORD + ((lo & maskZ[0]) >>> 0)) / this.rangeXY);
      }
    }, {
      key: "packKey",
      value: function packKey(position) {
        return position.z * this.rangeXY + position.y * this.rangeX + position.x;
      }
    }, {
      key: "keyRange",
      value: function keyRange(min, max) {
        return new KeyIterator(this, min, max);
      }
    }, {
      key: "toString",
      value: function toString() {
        var maskX = this.maskX;
        var maskY = this.maskY;
        var maskZ = this.maskZ;
        return "Key Design\n\n" + "X-Bits: " + this.x + "\n" + "Y-Bits: " + this.y + "\n" + "Z-Bits: " + this.z + "\n\n" + BinaryUtils.createBinaryString(maskX[1], DWORD_BITS) + " " + maskX[1] + " (HI-Mask X)\n" + BinaryUtils.createBinaryString(maskX[0], DWORD_BITS) + " " + maskX[0] + " (LO-Mask X)\n\n" + BinaryUtils.createBinaryString(maskY[1], DWORD_BITS) + " " + maskY[1] + " (HI-Mask Y)\n" + BinaryUtils.createBinaryString(maskY[0], DWORD_BITS) + " " + maskY[0] + " (LO-Mask Y)\n\n" + BinaryUtils.createBinaryString(maskZ[1], DWORD_BITS) + " " + maskZ[1] + " (HI-Mask Z)\n" + BinaryUtils.createBinaryString(maskZ[0], DWORD_BITS) + " " + maskZ[0] + " (LO-Mask Z)\n";
      }
    }], [{
      key: "BITS",
      get: function get() {
        return BITS;
      }
    }, {
      key: "HI_BITS",
      get: function get() {
        return HI_BITS;
      }
    }, {
      key: "LO_BITS",
      get: function get() {
        return LO_BITS;
      }
    }]);

    return KeyDesign;
  }();

  var OctantId = function () {
    function OctantId() {
      var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, OctantId);

      this.level = level;
      this.key = key;
    }

    _createClass(OctantId, [{
      key: "set",
      value: function set(level, key) {
        this.level = level;
        this.key = key;
      }
    }, {
      key: "copy",
      value: function copy(id) {
        this.level = id.level;
        this.key = id.key;
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }]);

    return OctantId;
  }();

  var OctantWrapper = function () {
    function OctantWrapper() {
      var octant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new OctantId();

      _classCallCheck(this, OctantWrapper);

      this.octant = octant;
      this.id = id;
      this.min = new mathDs.Vector3();
      this.max = new mathDs.Vector3();
    }

    _createClass(OctantWrapper, [{
      key: "copy",
      value: function copy(octantWrapper) {
        this.octant = octantWrapper.octant;
        this.id.copy(octantWrapper.id);
        this.min.copy(octantWrapper.min);
        this.max.copy(octantWrapper.max);
        return this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new this.constructor().copy(this);
      }
    }, {
      key: "getCenter",
      value: function getCenter(target) {
        return target.addVectors(this.min, this.max).multiplyScalar(0.5);
      }
    }, {
      key: "getDimensions",
      value: function getDimensions(target) {
        return target.subVectors(this.max, this.min);
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(point) {
        var min = this.min;
        var max = this.max;
        return point.x >= min.x && point.y >= min.y && point.z >= min.z && point.x <= max.x && point.y <= max.y && point.z <= max.z;
      }
    }]);

    return OctantWrapper;
  }();
  /**
   * sparse-octree v6.0.2 build Sat Jan 18 2020
   * https://github.com/vanruesc/sparse-octree
   * Copyright 2020 Raoul van Rüschen
   * @license Zlib
   */


  var layout = [new Uint8Array([0, 0, 0]), new Uint8Array([0, 0, 1]), new Uint8Array([0, 1, 0]), new Uint8Array([0, 1, 1]), new Uint8Array([1, 0, 0]), new Uint8Array([1, 0, 1]), new Uint8Array([1, 1, 0]), new Uint8Array([1, 1, 1])];
  var c = new mathDs.Vector3();
  var c$1 = new mathDs.Vector3();

  var Flags = function Flags() {
    _classCallCheck(this, Flags);

    this.value = 0;
  };

  function findEntryOctant(tx0, ty0, tz0, txm, tym, tzm) {
    var entry = 0;

    if (tx0 > ty0 && tx0 > tz0) {
      if (tym < tx0) {
        entry |= 2;
      }

      if (tzm < tx0) {
        entry |= 1;
      }
    } else if (ty0 > tz0) {
      if (txm < ty0) {
        entry |= 4;
      }

      if (tzm < ty0) {
        entry |= 1;
      }
    } else {
      if (txm < tz0) {
        entry |= 4;
      }

      if (tym < tz0) {
        entry |= 2;
      }
    }

    return entry;
  }

  var octantTable = [new Uint8Array([4, 2, 1]), new Uint8Array([5, 3, 8]), new Uint8Array([6, 8, 3]), new Uint8Array([7, 8, 8]), new Uint8Array([8, 6, 5]), new Uint8Array([8, 7, 8]), new Uint8Array([8, 8, 7]), new Uint8Array([8, 8, 8])];

  function findNextOctant(currentOctant, tx1, ty1, tz1) {
    var min;
    var exit = 0;

    if (tx1 < ty1) {
      min = tx1;
      exit = 0;
    } else {
      min = ty1;
      exit = 1;
    }

    if (tz1 < min) {
      exit = 2;
    }

    return octantTable[currentOctant][exit];
  }

  var v = new mathDs.Vector3();
  var b = new mathDs.Box3();
  var d = new mathDs.Box3();
  var r = new mathDs.Ray();

  function _intersectOctree(octree, ray, flags) {
    var min = b.min.set(0, 0, 0);
    var max = b.max.subVectors(octree.max, octree.min);
    var dimensions = octree.getDimensions(d.min);
    var halfDimensions = d.max.copy(dimensions).multiplyScalar(0.5);
    var origin = r.origin.copy(ray.origin);
    var direction = r.direction.copy(ray.direction);
    var invDirX, invDirY, invDirZ;
    var tx0, tx1, ty0, ty1, tz0, tz1;
    origin.sub(octree.getCenter(v)).add(halfDimensions);
    flags.value = 0;

    if (direction.x < 0.0) {
      origin.x = dimensions.x - origin.x;
      direction.x = -direction.x;
      flags.value |= 4;
    }

    if (direction.y < 0.0) {
      origin.y = dimensions.y - origin.y;
      direction.y = -direction.y;
      flags.value |= 2;
    }

    if (direction.z < 0.0) {
      origin.z = dimensions.z - origin.z;
      direction.z = -direction.z;
      flags.value |= 1;
    }

    invDirX = 1.0 / direction.x;
    invDirY = 1.0 / direction.y;
    invDirZ = 1.0 / direction.z;
    tx0 = (min.x - origin.x) * invDirX;
    tx1 = (max.x - origin.x) * invDirX;
    ty0 = (min.y - origin.y) * invDirY;
    ty1 = (max.y - origin.y) * invDirY;
    tz0 = (min.z - origin.z) * invDirZ;
    tz1 = (max.z - origin.z) * invDirZ;
    return Math.max(Math.max(tx0, ty0), tz0) < Math.min(Math.min(tx1, ty1), tz1) ? [tx0, ty0, tz0, tx1, ty1, tz1] : null;
  }

  var b$1 = new mathDs.Box3();
  var b$2 = new mathDs.Box3();
  var p = new mathDs.Vector3();

  var OctreeIterator = function () {
    function OctreeIterator(octree) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _classCallCheck(this, OctreeIterator);

      this.octree = octree;
      this.cellSize = 0;
      this.iterator = null;
      this.octantWrapper = new OctantWrapper();
      this.octantWrapper.id.level = level;
      this.result = new IteratorResult();
      this.reset();
    }

    _createClass(OctreeIterator, [{
      key: "reset",
      value: function reset() {
        var level = this.octantWrapper.id.level;
        var octree = this.octree;
        var grid = octree.getGrid(level);

        if (grid !== undefined) {
          this.cellSize = octree.getCellSize(level);
          this.iterator = grid.entries();
          this.result.reset();
        } else {
          console.error("Invalid level", level);
        }

        return this;
      }
    }, {
      key: "next",
      value: function next() {
        var result = this.result;
        var octantWrapper = this.octantWrapper;
        var internalResult = this.iterator.next();
        var value = internalResult.value;

        if (!internalResult.done) {
          this.keyDesign.unpackKey(value[0], octantWrapper.min);
          octantWrapper.min.multiplyScalar(this.cellSize).add(this.octree.min);
          octantWrapper.max.copy(octantWrapper.min).addScalar(this.cellSize);
          octantWrapper.id.key = value[0];
          octantWrapper.octant = value[1];
          result.value = octantWrapper;
        } else {
          result.value = null;
          result.done = true;
        }

        return result;
      }
    }, {
      key: "return",
      value: function _return(value) {
        this.result.value = value;
        this.result.done = true;
        return this.result;
      }
    }, {
      key: Symbol.iterator,
      value: function value() {
        return this;
      }
    }]);

    return OctreeIterator;
  }();

  var flags = new Flags();
  var v$1 = new mathDs.Vector3();
  var l = new mathDs.Line3();
  var r$1 = new mathDs.Ray();

  function raycastOctant(octree, octant, keyX, keyY, keyZ, level, tx0, ty0, tz0, tx1, ty1, tz1, intersects) {
    if (tx1 >= 0.0 && ty1 >= 0.0 && tz1 >= 0.0) {
      var keyDesign = octree.getKeyDesign();

      if (level === 0 || octant.data !== null) {
        var cellSize = octree.getCellSize(level);
        var octantWrapper = new OctantWrapper(octant);
        octantWrapper.id.set(level, keyDesign.packKey(v$1.set(keyX, keyY, keyZ)));
        octantWrapper.min.copy(v$1).multiplyScalar(cellSize).add(octree.min);
        octantWrapper.max.copy(octantWrapper.min).addScalar(cellSize);
        intersects.push(octantWrapper);
      } else if (octant.children > 0) {
        var grid = octree.getGrid(--level);
        var children = octant.children;
        var txm = 0.5 * (tx0 + tx1);
        var tym = 0.5 * (ty0 + ty1);
        var tzm = 0.5 * (tz0 + tz1);
        var currentOctant = findEntryOctant(tx0, ty0, tz0, txm, tym, tzm);
        var offset, childExists, i;
        keyX <<= 1;
        keyY <<= 1;
        keyZ <<= 1;

        do {
          i = flags.value ^ currentOctant;
          childExists = (children & 1 << i) !== 0;
          offset = layout[i];

          switch (currentOctant) {
            case 0:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, ty0, tz0, txm, tym, tzm, intersects);
                }

                currentOctant = findNextOctant(currentOctant, txm, tym, tzm);
                break;
              }

            case 1:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, ty0, tzm, txm, tym, tz1, intersects);
                }

                currentOctant = findNextOctant(currentOctant, txm, tym, tz1);
                break;
              }

            case 2:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, tym, tz0, txm, ty1, tzm, intersects);
                }

                currentOctant = findNextOctant(currentOctant, txm, ty1, tzm);
                break;
              }

            case 3:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, tym, tzm, txm, ty1, tz1, intersects);
                }

                currentOctant = findNextOctant(currentOctant, txm, ty1, tz1);
                break;
              }

            case 4:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, ty0, tz0, tx1, tym, tzm, intersects);
                }

                currentOctant = findNextOctant(currentOctant, tx1, tym, tzm);
                break;
              }

            case 5:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, ty0, tzm, tx1, tym, tz1, intersects);
                }

                currentOctant = findNextOctant(currentOctant, tx1, tym, tz1);
                break;
              }

            case 6:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, tym, tz0, tx1, ty1, tzm, intersects);
                }

                currentOctant = findNextOctant(currentOctant, tx1, ty1, tzm);
                break;
              }

            case 7:
              {
                if (childExists) {
                  v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
                  raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, tym, tzm, tx1, ty1, tz1, intersects);
                }

                currentOctant = 8;
                break;
              }
          }
        } while (currentOctant < 8);
      }
    }
  }

  var OctreeRaycaster = function () {
    function OctreeRaycaster() {
      _classCallCheck(this, OctreeRaycaster);
    }

    _createClass(OctreeRaycaster, null, [{
      key: "intersectOctree",
      value: function intersectOctree(octree, ray) {
        var intersects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var level = octree.getDepth();
        var grid = octree.getGrid(level);
        var cellSize = octree.getCellSize(level);
        var keyDesign = octree.getKeyDesign();
        var subtree = new OctantWrapper();
        var keyCoordinates0 = l.start;
        var keyCoordinates1 = l.end;
        var a = !octree.containsPoint(r$1.copy(ray).origin) ? r$1.intersectBox(octree, r$1.origin) : r$1.origin;
        var parameters;
        var key, octant;
        var t, b, n;
        var dx, dy, dz;
        var ax, ay, az, bx, by, bz;
        var sx, sy, sz, exy, exz, ezy;
        subtree.id.level = level;

        if (a !== null) {
          t = cellSize << 1;
          b = r$1.at(t, v$1);
          octree.calculateKeyCoordinates(a, level, keyCoordinates0);
          octree.calculateKeyCoordinates(b, level, keyCoordinates1);
          dx = keyCoordinates1.x - keyCoordinates0.x;
          dy = keyCoordinates1.y - keyCoordinates0.y;
          dz = keyCoordinates1.z - keyCoordinates0.z;
          sx = Math.sign(dx);
          sy = Math.sign(dy);
          sz = Math.sign(dz);
          ax = Math.abs(dx);
          ay = Math.abs(dy);
          az = Math.abs(dz);
          bx = 2 * ax;
          by = 2 * ay;
          bz = 2 * az;
          exy = ay - ax;
          exz = az - ax;
          ezy = ay - az;

          for (n = ax + ay + az; n > 0; --n) {
            key = keyDesign.packKey(keyCoordinates0);

            if (grid.has(key)) {
              octant = grid.get(key);
              subtree.id.key = key;
              subtree.octant = octant;
              subtree.min.copy(keyCoordinates0);
              subtree.min.multiplyScalar(cellSize);
              subtree.min.add(octree.min);
              subtree.max.copy(subtree.min).addScalar(cellSize);

              if (octant.data === null) {
                parameters = _intersectOctree(subtree, ray, flags);
                raycastOctant.apply(void 0, [octree, subtree.octant, keyCoordinates0.x, keyCoordinates0.y, keyCoordinates0.z, octree.getDepth()].concat(_toConsumableArray(parameters), [intersects]));
              } else {
                intersects.push(subtree.clone());
              }
            }

            if (exy < 0) {
              if (exz < 0) {
                keyCoordinates0.x += sx;
                exy += by;
                exz += bz;
              } else {
                keyCoordinates0.z += sz;
                exz -= bx;
                ezy += by;
              }
            } else if (ezy < 0) {
              keyCoordinates0.z += sz;
              exz -= bx;
              ezy += by;
            } else {
              keyCoordinates0.y += sy;
              exy -= bx;
              ezy -= bz;
            }
          }
        }

        return intersects;
      }
    }]);

    return OctreeRaycaster;
  }();

  var v$2 = new mathDs.Vector3();

  function removeChildren(octree, octant, keyX, keyY, keyZ, level) {
    var grid, keyDesign;
    var children, child;
    var offset, key, i;

    if (level > 0) {
      --level;
      grid = octree.getGrid(level);
      keyDesign = octree.getKeyDesign();
      children = octant.children;
      keyX <<= 1;
      keyY <<= 1;
      keyZ <<= 1;

      for (i = 0; i < 8; ++i) {
        if ((children & 1 << i) !== 0) {
          offset = layout[i];
          v$2.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
          key = keyDesign.packKey(v$2);
          child = grid.get(key);
          grid["delete"](key);
          removeChildren(octree, child, v$2.x, v$2.y, v$2.z, level);
        }
      }

      octant.children = 0;
    }
  }

  function prune(octree, keyX, keyY, keyZ, level) {
    var grid, i, key, parent;

    if (++level < octree.levels) {
      grid = octree.getGrid(level);
      i = Octree.calculateOffsetIndex(keyX, keyY, keyZ);
      v$2.set(keyX >>> 1, keyY >>> 1, keyZ >>> 1);
      key = octree.getKeyDesign().packKey(v$2);
      parent = grid.get(key);
      parent.children &= ~(1 << i);

      if (parent.children === 0) {
        grid["delete"](key);
        prune(octree, v$2.x, v$2.y, v$2.z, level);
      }
    }
  }

  var Octree = function () {
    function Octree() {
      var cellSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var levels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
      var keyDesign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new KeyDesign();

      _classCallCheck(this, Octree);

      levels = Math.max(Math.min(Math.trunc(levels), 32), 1);
      this.cellSize = Math.max(Math.min(Math.trunc(cellSize), Math.pow(2, 33 - levels) - 1), 1);
      this.keyDesign = keyDesign;
      this.grids = [];

      while (this.grids.length < levels) {
        this.grids.push(new Map());
      }

      this.bounds = new OctantWrapper();
      this.bounds.min.copy(this.keyDesign.halfRange).multiplyScalar(-this.cellSize);
      this.bounds.max.copy(this.keyDesign.halfRange).multiplyScalar(this.cellSize);
    }

    _createClass(Octree, [{
      key: "getKeyDesign",
      value: function getKeyDesign() {
        return this.keyDesign;
      }
    }, {
      key: "getCellSize",
      value: function getCellSize() {
        var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return this.cellSize << level >>> 0;
      }
    }, {
      key: "getCenter",
      value: function getCenter(target) {
        return this.bounds.getCenter(target);
      }
    }, {
      key: "setCenter",
      value: function setCenter(center) {
        this.min.copy(this.keyDesign.halfRange).multiplyScalar(-this.cellSize).add(center);
        this.max.copy(this.keyDesign.halfRange).multiplyScalar(this.cellSize).add(center);
      }
    }, {
      key: "getDimensions",
      value: function getDimensions(target) {
        return this.bounds.getDimensions(target);
      }
    }, {
      key: "getGrid",
      value: function getGrid(level) {
        return level >= 0 && level < this.grids.length ? this.grids[level] : undefined;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.grids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var grid = _step.value;
            grid.clear();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: "containsPoint",
      value: function containsPoint(point) {
        return this.bounds.containsPoint(point);
      }
    }, {
      key: "getDepth",
      value: function getDepth() {
        return this.grids.length - 1;
      }
    }, {
      key: "findNodesByLevel",
      value: function findNodesByLevel(level) {
        return this.octants(level);
      }
    }, {
      key: "calculateKeyCoordinates",
      value: function calculateKeyCoordinates(position, level) {
        var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new mathDs.Vector3();
        var cellSize = this.cellSize << level;
        v$2.subVectors(position, this.min);
        target.set(Math.trunc(v$2.x / cellSize), Math.trunc(v$2.y / cellSize), Math.trunc(v$2.z / cellSize));
        return target;
      }
    }, {
      key: "getNodeByPoint",
      value: function getNodeByPoint(point) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var keyDesign = this.keyDesign;
        var grid = this.getGrid(level);
        var result;

        if (grid !== undefined) {
          if (this.containsPoint(point)) {
            this.calculateKeyCoordinates(point, level, v$2);
            result = grid.get(keyDesign.packKey(v$2));
          } else {
            console.error("Position out of range", point);
          }
        } else {
          console.error("Invalid level", level);
        }

        return result;
      }
    }, {
      key: "remove",
      value: function remove(key) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var keyDesign = this.keyDesign;
        var grid = this.getGrid(level);
        var keyX, keyY, keyZ;

        if (grid !== undefined) {
          if (grid.has(key)) {
            keyDesign.unpackKey(key, v$2);
            keyX = v$2.x;
            keyY = v$2.y;
            keyZ = v$2.z;
            removeChildren(this, grid.get(key), keyX, keyY, keyZ, level);
            grid["delete"](key);
            prune(this, keyX, keyY, keyZ, level);
          } else {
            console.error("No octant found", key);
          }
        } else {
          console.error("Invalid level", level);
        }
      }
    }, {
      key: "raycast",
      value: function raycast(raycaster) {
        var intersects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        return OctreeRaycaster.intersectOctree(this, raycaster.ray, intersects);
      }
    }, {
      key: "octants",
      value: function octants() {
        var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return new OctreeIterator(this, level);
      }
    }, {
      key: "min",
      get: function get() {
        return this.bounds.min;
      }
    }, {
      key: "max",
      get: function get() {
        return this.bounds.max;
      }
    }, {
      key: "levels",
      get: function get() {
        return this.grids.length;
      }
    }, {
      key: "levelZero",
      get: function get() {
        return this.grids[0];
      }
    }], [{
      key: "calculateOffsetIndex",
      value: function calculateOffsetIndex(x, y, z) {
        var offsetX = x & 1;
        var offsetY = y & 1;
        var offsetZ = z & 1;
        return (offsetX << 2) + (offsetY << 1) + offsetZ;
      }
    }]);

    return Octree;
  }();

  exports.BinaryUtils = BinaryUtils;
  exports.IntermediateOctant = IntermediateOctant;
  exports.KeyDesign = KeyDesign;
  exports.KeyIterator = KeyIterator;
  exports.Octant = Octant;
  exports.OctantId = OctantId;
  exports.OctantWrapper = OctantWrapper;
  exports.Octree = Octree;
  exports.OctreeIterator = OctreeIterator;
  exports.OctreeRaycaster = OctreeRaycaster;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
