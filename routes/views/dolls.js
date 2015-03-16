var keystone = require('keystone'),
    async = require('async');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // Init locals
  locals.section = 'dolls';
  locals.filters = {
    category: req.params.category
  };
  locals.data = {
    dolls: [],
    categories: []
  };

  // Load the dolls
  view.on('init', function(next) {

    var q = keystone.list('Doll').paginate({
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
      })
      .or([{'state': 'public'}, {'owner': locals.user.id}])
      // .sort('-publishedDate')
      .populate('owner');

    q.exec(function(err, results) {
      locals.data.dolls = results;
      next(err);
    });

  });

  // Render the view
  view.render('dolls');
};