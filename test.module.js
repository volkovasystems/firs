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
*/

const assert = require( "should" );

//: @server:
const firs = require( "./firs.js" );
//: @end-server

//: @client:
const firs = require( "./firs.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "firs", ( ) => {

	describe( "`firs( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			assert.equal( firs( [ 1, 2, 3 ] ), 1 );

		} );
	} );

	describe( "`firs( [ false, true ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( firs( [ false, true ] ), false );

		} );
	} );

	describe( "`firs( [ '', 'yeah', { } ] )`", ( ) => {
		it( "should be equal to 'yeah'" , ( ) => {

			assert.equal( firs( [ "", "yeah", { } ] ), "yeah" );

		} );
	} );

	describe( "`firs( [ null, undefined, 2 ] )`", ( ) => {
		it( "should be equal to 2" , ( ) => {

			assert.equal( firs( [ null, undefined, 2 ] ), 2 );

		} );
	} );

	describe( "`firs( [ null, Symbol.for( 'hello' ), true ] )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {

			assert.equal( firs( [ null, Symbol.for( "hello" ), true ] ), Symbol.for( "hello" ) );

		} );
	} );

	describe( "`firs with array containing null, undefined, instance of class and function`", ( ) => {
		it( "should be equal to instance of classA", ( ) => {

			let test = function test( ){ return "test" };
			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( firs( [ null, undefined, testA, test ] ), testA );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "firs", ( ) => {

	describe( "`firs( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			assert.equal( firs( [ 1, 2, 3 ] ), 1 );

		} );
	} );

	describe( "`firs( [ false, true ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			assert.equal( firs( [ false, true ] ), false );

		} );
	} );

	describe( "`firs( [ '', 'yeah', { } ] )`", ( ) => {
		it( "should be equal to 'yeah'" , ( ) => {

			assert.equal( firs( [ "", "yeah", { } ] ), "yeah" );

		} );
	} );

	describe( "`firs( [ null, undefined, 2 ] )`", ( ) => {
		it( "should be equal to 2" , ( ) => {

			assert.equal( firs( [ null, undefined, 2 ] ), 2 );

		} );
	} );

	describe( "`firs( [ null, Symbol.for( 'hello' ), true ] )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {

			assert.equal( firs( [ null, Symbol.for( "hello" ), true ] ), Symbol.for( "hello" ) );

		} );
	} );

	describe( "`firs with array containing null, undefined, instance of class and function`", ( ) => {
		it( "should be equal to instance of classA", ( ) => {

			let test = function test( ){ return "test" };
			class ClassA{
				constructor( ){ }
				method( ){ return "hello"; }
			}

			let testA = new ClassA( );

			assert.deepEqual( firs( [ null, undefined, testA, test ] ), testA );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "firs", ( ) => {

	describe( "`firs( [ 1, 2, 3 ] )`", ( ) => {
		it( "should be equal to 1", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return firs( [ 1, 2, 3 ] );
				}

			).value;

			assert.equal( result, 1 );

		} );
	} );

	describe( "`firs( [ false, true ] )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return firs( [ false, true ] );
				}

			).value;

			assert.equal( result, false );

		} );
	} );

	describe( "`firs( [ '', 'yeah', { } ] )`", ( ) => {
		it( "should be equal to 'yeah'" , ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return firs( [ "", "yeah", { } ] );
				}

			).value;

			assert.equal( result, "yeah" );

		} );
	} );

	describe( "`firs( [ null, undefined, 2 ] )`", ( ) => {
		it( "should be equal to 2" , ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return firs( [ null, undefined, 2 ] );
				}

			).value;

			assert.equal( result, 2 );

		} );
	} );

	describe( "`firs( [ null, Symbol.for( 'hello' ), true ] )`", ( ) => {
		it( "should be equal to Symbol.for( 'hello' )", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return firs( [ null, Symbol.for( "hello" ), true ] );
				}

			).value;

			assert.equal( result, Symbol.for( "hello" ) );

		} );
	} );

	describe( "`firs with array containing null, undefined, instance of class and function`", ( ) => {
		it( "should be equal to instance of classA", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){

					let test = function test( ){ return "test" };

					class ClassA{
						constructor( ){ }
						method( ){ return "hello"; }
					}

					let testA = new ClassA( );

					return firs( [ null, undefined, testA, test ] );

				}

			).value;

			assert.equal( result, testA );

		} );
	} );

} );

//: @end-bridge
