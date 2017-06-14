"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "firs",
              			"path": "firs/firs.js",
              			"file": "firs.js",
              			"module": "firs",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon"
              			],
              			"repository": "https://github.com/volkovasystems/firs.git",
              			"test": "firs-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Get the first non-falsy element of array.
              
              		This should always return non-falsy element.
              		If the array is empty or is likely to return a falsy element
              			then this will throw an error.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"doubt": "doubt",
              			"falzy": "falzy","
              			"protype": "protype",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var arid = require("arid");
var doubt = require("doubt");
var falzy = require("falzy");
var protype = require("protype");
var raze = require("raze");
var truly = require("truly");

var firs = function firs(array) {
	/*;
                                 	@meta-configuration:
                                 		{
                                 			"array:required": "[*]"
                                 		}
                                 	@end-meta-configuration
                                 */

	if (falzy(array)) {
		throw new Error("invalid array");
	}

	if (!doubt(array, AS_ARRAY)) {
		return array;
	}

	if (arid(array)) {
		throw new Error("empty array");
	}

	return raze(array).filter(truly)[0];
};

module.exports = firs;

//# sourceMappingURL=firs.support.js.map