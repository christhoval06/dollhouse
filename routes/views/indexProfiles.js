var keystone = require('keystone'),
    async = require('async');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // Init locals
  locals.section = 'profiles';
  locals.data = {
    profiles: []
  };

  // Load the profiles
  view.on('init', function(next) {

    var q = keystone.list('Profile').paginate({
        page: req.query.page || 1,
        perPage: 10,
        maxPages: 10
      });
      // Add any desired query restrictions, sorting and
      // populating of related models

    q.exec(function(err, results) {
      locals.data.profiles = results;
      next(err);
    });

  });

  // Render the view
  view.render('profiles');
};
