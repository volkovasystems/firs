"use strict";var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var assert = require("assert");
var firs = require("./firs.js");

assert.equal(firs([1, 2, 3]), 1, "should return 1");

assert.equal(firs([false, true]), false, "should return false");

assert.equal(firs(["", "yeah", {}]), "yeah", "should return 'yeah'");

assert.equal(firs([null, undefined, 2]), 2, "should return 2");

assert.equal(firs([null, (0, _for2.default)("hello"), true]), (0, _for2.default)("hello"), "should be equal");

var test = function test() {return "test";};var
ClassA = function () {
	function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
		{return "hello";} }]);return ClassA;}();


var testA = new ClassA();
assert.deepEqual(firs([null, undefined, testA, test]), testA, "should be equal");

console.log("ok");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmlycyIsImVxdWFsIiwidW5kZWZpbmVkIiwidGVzdCIsIkNsYXNzQSIsInRlc3RBIiwiZGVlcEVxdWFsIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxXQUFULENBQWI7O0FBRUFELE9BQU9HLEtBQVAsQ0FBY0QsS0FBTSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFOLENBQWQsRUFBbUMsQ0FBbkMsRUFBc0MsaUJBQXRDOztBQUVBRixPQUFPRyxLQUFQLENBQWNELEtBQU0sQ0FBRSxLQUFGLEVBQVMsSUFBVCxDQUFOLENBQWQsRUFBdUMsS0FBdkMsRUFBOEMscUJBQTlDOztBQUVBRixPQUFPRyxLQUFQLENBQWNELEtBQU0sQ0FBRSxFQUFGLEVBQU0sTUFBTixFQUFjLEVBQWQsQ0FBTixDQUFkLEVBQTJDLE1BQTNDLEVBQW1ELHNCQUFuRDs7QUFFQUYsT0FBT0csS0FBUCxDQUFjRCxLQUFNLENBQUUsSUFBRixFQUFRRSxTQUFSLEVBQW1CLENBQW5CLENBQU4sQ0FBZCxFQUE4QyxDQUE5QyxFQUFpRCxpQkFBakQ7O0FBRUFKLE9BQU9HLEtBQVAsQ0FBY0QsS0FBTSxDQUFFLElBQUYsRUFBUSxtQkFBWSxPQUFaLENBQVIsRUFBK0IsSUFBL0IsQ0FBTixDQUFkLEVBQTZELG1CQUFZLE9BQVosQ0FBN0QsRUFBb0YsaUJBQXBGOztBQUVBLElBQUlHLE9BQU8sU0FBU0EsSUFBVCxHQUFnQixDQUFFLE9BQU8sTUFBUCxDQUFlLENBQTVDLEM7QUFDTUMsTTtBQUNMLG1CQUFjLDZDQUFHLEM7QUFDUixHQUFFLE9BQU8sT0FBUCxDQUFpQixDOzs7QUFHN0IsSUFBSUMsUUFBUSxJQUFJRCxNQUFKLEVBQVo7QUFDQU4sT0FBT1EsU0FBUCxDQUFrQk4sS0FBTSxDQUFFLElBQUYsRUFBUUUsU0FBUixFQUFtQkcsS0FBbkIsRUFBMEJGLElBQTFCLENBQU4sQ0FBbEIsRUFBNERFLEtBQTVELEVBQW1FLGlCQUFuRTs7QUFFQUUsUUFBUUMsR0FBUixDQUFhLElBQWIiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuY29uc3QgZmlycyA9IHJlcXVpcmUoIFwiLi9maXJzLmpzXCIgKTtcclxuXHJcbmFzc2VydC5lcXVhbCggZmlycyggWyAxLCAyLCAzIF0gKSwgMSwgXCJzaG91bGQgcmV0dXJuIDFcIiApO1xyXG5cclxuYXNzZXJ0LmVxdWFsKCBmaXJzKCBbIGZhbHNlLCB0cnVlIF0gKSwgZmFsc2UsIFwic2hvdWxkIHJldHVybiBmYWxzZVwiICk7XHJcblxyXG5hc3NlcnQuZXF1YWwoIGZpcnMoIFsgXCJcIiwgXCJ5ZWFoXCIsIHsgfSBdICksIFwieWVhaFwiLCBcInNob3VsZCByZXR1cm4gJ3llYWgnXCIgKTtcclxuXHJcbmFzc2VydC5lcXVhbCggZmlycyggWyBudWxsLCB1bmRlZmluZWQsIDIgXSApLCAyLCBcInNob3VsZCByZXR1cm4gMlwiICk7XHJcblxyXG5hc3NlcnQuZXF1YWwoIGZpcnMoIFsgbnVsbCwgU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHRydWUgXSApLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxubGV0IHRlc3QgPSBmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gXCJ0ZXN0XCIgfTtcclxuY2xhc3MgQ2xhc3NBe1xyXG5cdGNvbnN0cnVjdG9yKCApeyB9XHJcblx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XHJcbn1cclxuXHJcbmxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XHJcbmFzc2VydC5kZWVwRXF1YWwoIGZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCB0ZXN0QSwgdGVzdCBdICksIHRlc3RBLCBcInNob3VsZCBiZSBlcXVhbFwiICk7XHJcblxyXG5jb25zb2xlLmxvZyggXCJva1wiICk7XHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
