Meteor.methods({
  getMeme: function (id) {
    return Memes.findOne(id);
  }
});