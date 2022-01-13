const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Designer = require('../models/designer');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Designer.findOne({ 'googleId': profile.id }, function(err, designer) {
        if (err) return cb(err);
        if (designer) {
          return cb(null, designer);
        } else {
          var newDesigner = new Designer({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newDesigner.save(function(err) {
            if (err) return cb(err);
            return cb(null, newDesigner);
          });
        }
      });
  }
));

passport.serializeUser(function(designer, done) {
    done(null, designer.id);
});

passport.deserializeUser(function(id, done) {
    Designer.findById(id, function(err, designer) {
      done(err, designer);
    });
  });