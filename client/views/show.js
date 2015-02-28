Template.show.helpers({
  meme: function () {
    return Memes.findOne(Router.current().params._id);
  }
});

Template.show.events({

});

Template.show.rendered = function() { 
  function next () {
    if(Memes.findOne({uploadedAt: {$gt: Memes.findOne(Router.current().params._id).uploadedAt}})) {
      id = Memes.findOne({uploadedAt: {$gt: Memes.findOne(Router.current().params._id).uploadedAt}})._id;
      Router.go("show", {_id: id});
    } else {
      Router.go("end");
    }
  }
  
  $("body").keydown(function(e) {
    if(e.keyCode == 37) { // left
      console.log("dislike");
      next()
    }
    else if(e.keyCode == 39) { // right
      console.log("like");
      next()
    }
  });
};