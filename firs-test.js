
const assert = require( "assert" );
const firs = require( "./firs.js" );

assert.equal( firs( [ 1, 2, 3 ] ), 1, "should return 1" );

assert.equal( firs( "hello world" ), "hello world", "should return 'hello world'" );

console.log( "ok" );
