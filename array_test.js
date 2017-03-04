var assert = require('chai' ).assert;
var Arrays = require('./arrays' );

describe( "The Arrays:" ,
function() {

  beforeEach( function() {
    a = new Arrays();

  });

  it( "Should start empty", function() {
    assert.equal( 0, a.noOfPhotos() );
  });

  it( "Should be able to add a photo", function() {
    a.addPhoto( 1 );
    assert.equal( 1, a.noOfPhotos() );
  });

  it( "Should be able to pick a photo", function() {
    a.addPhoto( 1 );
    assert.equal( 1, a.pickPhoto() );
  });

  // it( "Should be able to return the contents of the array", function() {
  //   assert.equal( 1, )
  // });

});