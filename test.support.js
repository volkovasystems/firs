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











// const assert = require( "assert" );
// const firs = require( "./firs.js" );

// assert.equal( firs( [ 1, 2, 3 ] ), 1, "should return 1" );

// assert.equal( firs( [ false, true ] ), false, "should return false" );

// assert.equal( firs( [ "", "yeah", { } ] ), "yeah", "should return 'yeah'" );

// assert.equal( firs( [ null, undefined, 2 ] ), 2, "should return 2" );

// assert.equal( firs( [ null, Symbol.for( "hello" ), true ] ), Symbol.for( "hello" ), "should be equal" );

// let test = function test( ){ return "test" };
// class ClassA{
// 	constructor( ){ }
// 	method( ){ return "hello"; }
// }

// let testA = new ClassA( );
// assert.deepEqual( firs( [ null, undefined, testA, test ] ), testA, "should be equal" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmlycyIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCIsInRlc3QiLCJDbGFzc0EiLCJ0ZXN0QSIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7OztBQUdBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsdUJBQVYsRUFBbUMsWUFBTztBQUN6Q0MsS0FBSSxpQkFBSixFQUF1QixZQUFPOztBQUU3QkosVUFBT0ssS0FBUCxDQUFjSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQU4sQ0FBZCxFQUFtQyxDQUFuQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWpDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sQ0FBRSxLQUFGLEVBQVMsSUFBVCxDQUFOLENBQWQsRUFBdUMsS0FBdkM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLGlEQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLHNCQUFKLEVBQTZCLFlBQU87O0FBRW5DSixVQUFPSyxLQUFQLENBQWNILEtBQU0sQ0FBRSxFQUFGLEVBQU0sTUFBTixFQUFjLEVBQWQsQ0FBTixDQUFkLEVBQTJDLE1BQTNDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxnREFBOEMsWUFBTztBQUNwREMsS0FBSSxpQkFBSixFQUF3QixZQUFPOztBQUU5QkosVUFBT0ssS0FBUCxDQUFjSCxLQUFNLENBQUUsSUFBRixFQUFRSSxTQUFSLEVBQW1CLENBQW5CLENBQU4sQ0FBZCxFQUE4QyxDQUE5Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUgsaUVBQTZELFlBQU87QUFDbkVDLEtBQUksaUJBQUosRUFBdUIsWUFBTzs7QUFFN0JKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxDQUFFLElBQUYsRUFBUSxtQkFBWSxPQUFaLENBQVIsRUFBK0IsSUFBL0IsQ0FBTixDQUFkLEVBQTZELG1CQUFZLE9BQVosQ0FBN0Q7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLDBEQUF3RCxZQUFPO0FBQzlEQyxLQUFJLGlCQUFKLEVBQXVCLFlBQU87QUFDN0IsT0FBSUcsT0FBTyxTQUFTQSxJQUFULEdBQWdCLENBQUUsT0FBTyxNQUFQLENBQWUsQ0FBNUMsQ0FENkI7QUFFdkJDLFNBRnVCO0FBRzVCLHNCQUFjLDZDQUFHLENBSFc7QUFJbkIsTUFBRSxPQUFPLE9BQVAsQ0FBaUIsQ0FKQTs7O0FBTzdCLE9BQUlDLFFBQVEsSUFBSUQsTUFBSixFQUFaO0FBQ0FSLFVBQU9VLFNBQVAsQ0FBa0JSLEtBQU0sQ0FBRSxJQUFGLEVBQVFJLFNBQVIsRUFBbUJHLEtBQW5CLEVBQTBCRixJQUExQixDQUFOLENBQWxCLEVBQTRERSxLQUE1RDs7QUFFQSxHQVZEO0FBV0EsRUFaRDs7QUFjQSxDQXhERDs7O0FBMkRBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZmlyc1wiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJmaXJzL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9maXJzLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiZmlyc1wiOiBcImZpcnNcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3QgZmlycyA9IHJlcXVpcmUoIFwiLi9maXJzLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5cclxuXHJcbmRlc2NyaWJlKCBcImZpcnNcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggXCJgZmlycyggWyAxLCAyLCAzIF0gKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gMVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmaXJzKCBbIDEsIDIsIDMgXSApLCAxICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGZpcnMoIFsgZmFsc2UsIHRydWUgXSApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmaXJzKCBbIGZhbHNlLCB0cnVlIF0gKSwgZmFsc2UgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwiZmlycyggWyBcIlwiLCBcInllYWhcIiwgeyB9IF0gKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gJ3llYWgnXCIgLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmaXJzKCBbIFwiXCIsIFwieWVhaFwiLCB7IH0gXSApLCBcInllYWhcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJmaXJzKCBbIG51bGwsIHVuZGVmaW5lZCwgMiBdIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIDJcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCAyIF0gKSwgMiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJmaXJzKCBbIG51bGwsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCB0cnVlIF0gKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBmaXJzKCBbIG51bGwsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCB0cnVlIF0gKSwgU3ltYm9sLmZvciggXCJoZWxsb1wiKSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJmaXJzKCBbIG51bGwsIHVuZGVmaW5lZCwgdGVzdEEsIHRlc3QgXSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsXCIsICggKSA9PiB7XHJcblx0XHRcdGxldCB0ZXN0ID0gZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuIFwidGVzdFwiIH07XHJcblx0XHRcdGNsYXNzIENsYXNzQXtcclxuXHRcdFx0XHRjb25zdHJ1Y3RvciggKXsgfVxyXG5cdFx0XHRcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgdGVzdEEgPSBuZXcgQ2xhc3NBKCApO1xyXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBmaXJzKCBbIG51bGwsIHVuZGVmaW5lZCwgdGVzdEEsIHRlc3QgXSApLCB0ZXN0QSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblx0XHJcbn0gKTtcclxuXHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcbi8vIGNvbnN0IGZpcnMgPSByZXF1aXJlKCBcIi4vZmlycy5qc1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGZpcnMoIFsgMSwgMiwgMyBdICksIDEsIFwic2hvdWxkIHJldHVybiAxXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCggZmlycyggWyBmYWxzZSwgdHJ1ZSBdICksIGZhbHNlLCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBmaXJzKCBbIFwiXCIsIFwieWVhaFwiLCB7IH0gXSApLCBcInllYWhcIiwgXCJzaG91bGQgcmV0dXJuICd5ZWFoJ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCAyIF0gKSwgMiwgXCJzaG91bGQgcmV0dXJuIDJcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBmaXJzKCBbIG51bGwsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApLCB0cnVlIF0gKSwgU3ltYm9sLmZvciggXCJoZWxsb1wiICksIFwic2hvdWxkIGJlIGVxdWFsXCIgKTtcclxuXHJcbi8vIGxldCB0ZXN0ID0gZnVuY3Rpb24gdGVzdCggKXsgcmV0dXJuIFwidGVzdFwiIH07XHJcbi8vIGNsYXNzIENsYXNzQXtcclxuLy8gXHRjb25zdHJ1Y3RvciggKXsgfVxyXG4vLyBcdG1ldGhvZCggKXsgcmV0dXJuIFwiaGVsbG9cIjsgfVxyXG4vLyB9XHJcblxyXG4vLyBsZXQgdGVzdEEgPSBuZXcgQ2xhc3NBKCApO1xyXG4vLyBhc3NlcnQuZGVlcEVxdWFsKCBmaXJzKCBbIG51bGwsIHVuZGVmaW5lZCwgdGVzdEEsIHRlc3QgXSApLCB0ZXN0QSwgXCJzaG91bGQgYmUgZXF1YWxcIiApO1xyXG5cclxuLy8gY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.support.js.map
