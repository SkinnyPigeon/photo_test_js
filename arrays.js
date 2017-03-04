var Arrays = function() {
  this.photos = [];
};

Arrays.prototype = {

    noOfPhotos: function() {
      return this.photos.length;
    },

    addPhoto: function( photo ) {
      this.photos.push( photo );
    },
}

module.exports = Arrays;