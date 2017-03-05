var Arrays = function() {
  this.photos = [];
  this.position = 0;
  this.numberOfPhotos = 0;
  this.lastPhoto = 1;
};

Arrays.prototype = {

    noOfPhotos: function() {
      return this.photos.length;
    },

    addPhoto: function( photo ) {
      this.photos.push( photo );
      this.numberOfPhotos += 1;
    },

    pickPhoto: function() {
      this.lengthCheck();
      this.newPhotoCheck();
      var link = this.photos[ this.position ];
      this.position += 1;
      return link;
    },

    lengthCheck: function() {
      console.log( "Photos: ", this.numberOfPhotos );
      if( this.position >= this.numberOfPhotos ) {
        this.lastPhoto = this.position;
        this.position = 0;
      };
      console.log( "Position: ", this.position );
    },

    newPhotoCheck: function() {
      if( this.numberOfPhotos > this.lastPhoto ) {
        console.log( "Hello" );
        // this.position = this.lastPhoto + 1;
      }
    }
}

module.exports = Arrays;