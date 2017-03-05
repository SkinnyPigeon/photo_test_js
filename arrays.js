var Arrays = function() {
  this.photos = [];
  this.position = 0;
  this.numberOfPhotos = 0;
  this.lastPhoto = 1;
  this.loopCheck = false;
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
      if( this.position >= this.numberOfPhotos ) {
        this.lastPhoto = this.position;
        this.position = 0;
        this.loopCheck = true;
      };
    },

    newPhotoCheck: function() {
      if( this.numberOfPhotos > this.lastPhoto && this.loopCheck ) {
        this.position = this.lastPhoto;
        this.loopCheck = false;
      }
    }
}

module.exports = Arrays;