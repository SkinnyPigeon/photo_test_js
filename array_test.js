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
    // assert.equal( 1, a.pickPhoto() );
  });

  it( "Should know the length of the array", function() {
    a.addPhoto( 1 );
    a.addPhoto( 1 );
    assert.equal( 2, a.noOfPhotos() );
  });

  it( "Should not be able to go beyond the length of the array", function() {
    a.addPhoto( 1 );
    a.addPhoto( 2 );
    a.addPhoto( 3 );
    a.addPhoto( 4 );
    a.pickPhoto();
    a.pickPhoto();
    a.pickPhoto();
    a.pickPhoto();
    assert.equal( 1, a.pickPhoto() );
  });

});






