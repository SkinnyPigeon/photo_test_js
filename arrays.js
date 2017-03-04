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
    },

    pickPhoto: function() {
      var link = this.photos[ this.position ];
      this.position += 1;
      return link;
    },
}

module.exports = Arrays;