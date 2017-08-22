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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var firs = require("./firs.support.js");
//: @end-client






//: @client:

describe("firs", function () {

	describe("`firs( [ 1, 2, 3 ] )`", function () {
		it("should be equal to 1", function () {

			assert.equal(firs([1, 2, 3]), 1);

		});
	});

	describe("`firs( [ false, true ] )`", function () {
		it("should be equal to false", function () {

			assert.equal(firs([false, true]), false);

		});
	});

	describe("`firs( [ '', 'yeah', { } ] )`", function () {
		it("should be equal to 'yeah'", function () {

			assert.equal(firs(["", "yeah", {}]), "yeah");

		});
	});

	describe("`firs( [ null, undefined, 2 ] )`", function () {
		it("should be equal to 2", function () {

			assert.equal(firs([null, undefined, 2]), 2);

		});
	});

	describe("`firs( [ null, Symbol.for( 'hello' ), true ] )`", function () {
		it("should be equal to Symbol.for( 'hello' )", function () {

			assert.equal(firs([null, (0, _for2.default)("hello"), true]), (0, _for2.default)("hello"));

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZmlycyIsImRlc2NyaWJlIiwiaXQiLCJlcXVhbCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDQyxLQUFJLHNCQUFKLEVBQTRCLFlBQU87O0FBRWxDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTixDQUFkLEVBQW1DLENBQW5DOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdENKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxDQUFFLEtBQUYsRUFBUyxJQUFULENBQU4sQ0FBZCxFQUF1QyxLQUF2Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSwrQkFBVixFQUEyQyxZQUFPO0FBQ2pEQyxLQUFJLDJCQUFKLEVBQWtDLFlBQU87O0FBRXhDSixVQUFPSyxLQUFQLENBQWNILEtBQU0sQ0FBRSxFQUFGLEVBQU0sTUFBTixFQUFjLEVBQWQsQ0FBTixDQUFkLEVBQTJDLE1BQTNDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLGtDQUFWLEVBQThDLFlBQU87QUFDcERDLEtBQUksc0JBQUosRUFBNkIsWUFBTzs7QUFFbkNKLFVBQU9LLEtBQVAsQ0FBY0gsS0FBTSxDQUFFLElBQUYsRUFBUUksU0FBUixFQUFtQixDQUFuQixDQUFOLENBQWQsRUFBOEMsQ0FBOUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFILFVBQVUsaURBQVYsRUFBNkQsWUFBTztBQUNuRUMsS0FBSSwwQ0FBSixFQUFnRCxZQUFPOztBQUV0REosVUFBT0ssS0FBUCxDQUFjSCxLQUFNLENBQUUsSUFBRixFQUFRLG1CQUFZLE9BQVosQ0FBUixFQUErQixJQUEvQixDQUFOLENBQWQsRUFBNkQsbUJBQVksT0FBWixDQUE3RDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQSxDQTFDRDs7QUE0Q0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJmaXJzXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmaXJzL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9maXJzLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJmaXJzXCI6IFwiZmlyc1wiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgZmlycyA9IHJlcXVpcmUoIFwiLi9maXJzLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiZmlyc1wiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBmaXJzKCBbIDEsIDIsIDMgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZmlycyggWyAxLCAyLCAzIF0gKSwgMSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZpcnMoIFsgZmFsc2UsIHRydWUgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgZmFsc2UsIHRydWUgXSApLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZpcnMoIFsgJycsICd5ZWFoJywgeyB9IF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ3llYWgnXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgXCJcIiwgXCJ5ZWFoXCIsIHsgfSBdICksIFwieWVhaFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZmlycyggWyBudWxsLCB1bmRlZmluZWQsIDIgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAyXCIgLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGZpcnMoIFsgbnVsbCwgdW5kZWZpbmVkLCAyIF0gKSwgMiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGZpcnMoIFsgbnVsbCwgU3ltYm9sLmZvciggJ2hlbGxvJyApLCB0cnVlIF0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sLmZvciggJ2hlbGxvJyApXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZmlycyggWyBudWxsLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSwgdHJ1ZSBdICksIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
