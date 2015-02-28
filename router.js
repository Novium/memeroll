Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  id = Memes.findOne()._id;
  Router.go('show', {_id: id});
});

Router.route('/show/:_id', function () {
  this.render('show', {
  });
}, { name: 'show' });

Router.route('/upload', function () {
  this.render('upload');
});

Router.route('/end', function () {
  this.render('end');
}, {name: 'end'});