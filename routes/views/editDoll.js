var keystone = require('keystone'),
    config = require('../../config'),
    Doll = keystone.list('Doll');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // Set locals
  locals.section = 'dolls';
  locals.filters = {
    doll: req.params.doll
  };
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.dolls = config.dolls;
  locals.dollUpdated = false;
  locals.data = {
  };

  // Load the current doll
  view.on('init', function(next) {

    var q = Doll
      .model.findOne({
        // any other conditions that need to be met
        slug: locals.filters.doll
      });
      // Use this if you need to populate any related Fields
      // }).populate('...');

    q.exec(function(err, result) {
      locals.data.doll = result;
      next(err);
    });

  });

  view.on('post', function(next) {
      // var newProfile = new Doll.model({ owner: req.user });
      locals.data.doll
        .getUpdateHandler(req, res)
        .process(req.body, {
          flashErrors: true,
          // fields: "",
          // fields: "name, maker, sculpt, image, image_url, info_description, info.biography",
          fields: "name, maker, sculpt, image, info.description, info.biography",
          errorMessage: 'Hmmmm: There was a problem updating your doll...'
        }, function(err) {
          if (err) {
            locals.validationErrors = err.errors;
          } else {
            locals.dollUpdated = true;
          }
          next();
        });

    });

  view.render(function (err, req, res) {
    if (req.method === 'POST' && res.locals.dollUpdated) {
      // res.redirect("/dolls/doll/{{data.doll.slug}}/edit");
      res.redirect("/community/#/dolls/doll/" + locals.data.doll.slug);
    }
    else
      res.render('dolls/edit');
  });

};
