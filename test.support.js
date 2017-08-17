"use strict";

/*;
              	@test-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "firs",
              			"path": "firs/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/firs.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"firs": "firs"
              		}
              	@end-include
              */var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("assert");



//: @client:
var firs = require("./firs.support.js");
//: @end-client






//: @client: 


describe("firs", function () {

	describe("`firs( [ 1, 2, 3 ] )`", function () {
		it("should return 1", function () {

			assert.equal(firs([1, 2, 3]), 1);

		});
	});

	describe("`firs( [ false, true ] )`", function () {
		it("should return false", function () {

			assert.equal(firs([false, true]), false);

		});
	});

	describe("\"firs( [ \"\", \"yeah\", { } ] )\"", function () {
		it("should return 'yeah'", function () {

			assert.equal(firs(["", "yeah", {}]), "yeah");

		});
	});

	describe("\"firs( [ null, undefined, 2 ] )\"", function () {
		it("should return 2", function () {

			assert.equal(firs([null, undefined, 2]), 2);

		});
	});

	describe("\"firs( [ null, Symbol.for( \"hello\" ), true ] )\"", function () {
		it("should be equal", function () {

			assert.equal(firs([null, (0, _for2.default)("hello"), true]), (0, _for2.default)("hello"));

		});
	});

	describe("\"firs( [ null, undefined, testA, test ] )\"", function () {
		it("should be equal", function () {
			var test = function test() {return "test";};var
			ClassA = function () {
				function ClassA() {(0, _classCallCheck3.default)(this, ClassA);}(0, _createClass3.default)(ClassA, [{ key: "method", value: function method()
					{return "hello";} }]);return ClassA;}();


			var testA = new ClassA();
			assert.deepEqual(firs([null, undefined, testA, test]), testA);

		});
	});

});


//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmlycyIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsInRlc3QiLCJDbGFzc0EiLCJ0ZXN0QSIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7OztBQUdBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0MsS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU3QkosVUFBT0ssS0FBUCxDQUFjSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQU4sQ0FBZCxFQUFtQyxDQUFuQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWpDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sQ0FBRSxLQUFGLEVBQVMsSUFBVCxDQUFOLENBQWQsRUFBdUMsS0FBdkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLGlEQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLHNCQUFKLEVBQTZCLFlBQU87O0FBRW5DSixVQUFPSyxLQUFQLENBQWNILEtBQU0sQ0FBRSxFQUFGLEVBQU0sTUFBTixFQUFjLEVBQWQsQ0FBTixDQUFkLEVBQTJDLE1BQTNDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxnREFBOEMsWUFBTztBQUNwREMsS0FBSSxpQkFBSixFQUF3QixZQUFPOztBQUU5QkosVUFBT0ssS0FBUCxDQUFjSCxLQUFNLENBQUUsSUFBRixFQUFRSSxTQUFSLEVBQW1CLENBQW5CLENBQU4sQ0FBZCxFQUE4QyxDQUE5Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUgsaUVBQTZELFlBQU87QUFDbkVDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFN0JKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxDQUFFLElBQUYsRUFBUSxtQkFBWSxPQUFaLENBQVIsRUFBK0IsSUFBL0IsQ0FBTixDQUFkLEVBQTZELG1CQUFZLE9BQVosQ0FBN0Q7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLDBEQUF3RCxZQUFPO0FBQzlEQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87QUFDN0IsT0FBSUcsT0FBTyxTQUFTQSxJQUFULEdBQWdCLENBQUUsT0FBTyxNQUFQLENBQWUsQ0FBNUMsQ0FENkI7QUFFdkJDLFNBRnVCO0FBRzVCLHNCQUFjLDZDQUFHLENBSFc7QUFJbkIsTUFBRSxPQUFPLE9BQVAsQ0FBaUIsQ0FKQTs7O0FBTzdCLE9BQUlDLFFBQVEsSUFBSUQsTUFBSixFQUFaO0FBQ0FSLFVBQU9VLFNBQVAsQ0FBa0JSLEtBQU0sQ0FBRSxJQUFGLEVBQVFJLFNBQVIsRUFBbUJHLEtBQW5CLEVBQTBCRixJQUExQixDQUFOLENBQWxCLEVBQTRERSxLQUE1RDs7QUFFQSxHQVZEO0FBV0EsRUFaRDs7QUFjQSxDQXhERDs7O0FBMkRBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJmaXJzXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImZpcnMvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2ZpcnMuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJmaXJzXCI6IFwiZmlyc1wiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBmaXJzID0gcmVxdWlyZSggXCIuL2ZpcnMuc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDogXHJcblxyXG5cclxuZGVzY3JpYmUoIFwiZmlyc1wiLCAoICkgPT4ge1xyXG5cdFxyXG5cdGRlc2NyaWJlKCBcImBmaXJzKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAxXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgMSwgMiwgMyBdICksIDEgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggXCJgZmlycyggWyBmYWxzZSwgdHJ1ZSBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgZmFsc2UsIHRydWUgXSApLCBmYWxzZSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJmaXJzKCBbIFwiXCIsIFwieWVhaFwiLCB7IH0gXSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiAneWVhaCdcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgXCJcIiwgXCJ5ZWFoXCIsIHsgfSBdICksIFwieWVhaFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCAyIF0gKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gMlwiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggZmlycyggWyBudWxsLCB1bmRlZmluZWQsIDIgXSApLCAyICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImZpcnMoIFsgbnVsbCwgU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHRydWUgXSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgbnVsbCwgU3ltYm9sLmZvciggXCJoZWxsb1wiICksIHRydWUgXSApLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIpICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCB0ZXN0QSwgdGVzdCBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWxcIiwgKCApID0+IHtcclxuXHRcdFx0bGV0IHRlc3QgPSBmdW5jdGlvbiB0ZXN0KCApeyByZXR1cm4gXCJ0ZXN0XCIgfTtcclxuXHRcdFx0Y2xhc3MgQ2xhc3NBe1xyXG5cdFx0XHRcdGNvbnN0cnVjdG9yKCApeyB9XHJcblx0XHRcdFx0bWV0aG9kKCApeyByZXR1cm4gXCJoZWxsb1wiOyB9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCB0ZXN0QSA9IG5ldyBDbGFzc0EoICk7XHJcblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIGZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCB0ZXN0QSwgdGVzdCBdICksIHRlc3RBICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHRcclxufSApO1xyXG5cclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
