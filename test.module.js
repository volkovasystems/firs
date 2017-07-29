
const assert = require( "assert" );
const firs = require( "./firs.js" );

assert.equal( firs( [ 1, 2, 3 ] ), 1, "should return 1" );

assert.equal( firs( [ false, true ] ), false, "should return false" );

assert.equal( firs( [ "", "yeah", { } ] ), "yeah", "should return 'yeah'" );

assert.equal( firs( [ null, undefined, 2 ] ), 2, "should return 2" );

assert.equal( firs( [ null, Symbol.for( "hello" ), true ] ), Symbol.for( "hello" ), "should be equal" );

let test = function test( ){ return "test" };
class ClassA{
	constructor( ){ }
	method( ){ return "hello"; }
}

let testA = new ClassA( );
assert.deepEqual( firs( [ null, undefined, testA, test ] ), testA, "should be equal" );

console.log( "ok" );
