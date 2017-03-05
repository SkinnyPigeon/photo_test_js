var Arrays = function() {
  this.photos = [];
  this.position = 0;
  this.length = 0;
};

Arrays.prototype = {

    noOfPhotos: function() {
      return this.photos.length;
    },

    addPhoto: function( photo ) {
      this.photos.push( photo );
      this.length += 1;
    },

    pickPhoto: function() {
      this.lengthCheck();
      var link = this.photos[ this.position ];
      this.position += 1;
      return link;
    },

    lengthCheck: function() {
      if( this.position >= this.length ) {
        this.position = 0;
      };
    }
}

module.exports = Arrays;