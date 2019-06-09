const LocalStrategy = require('passport-local').Strategy;
const jwtSecret = require('./jwtConfig')
const JWTStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

module.exports = function (passport) {
  // configure passport.js to use the local strategy
  passport.use(new LocalStrategy(
    function (username, password, done) {
      User.findOne({
        username: username
      }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: 'Incorrect username.'
          });
        }
        // if (!user.validPassword(password)) {
        //   return done(null, false, { message: 'Incorrect password.' });
        // }
        return done(null, user);
      });
    }
  ));

  // // tell passport how to serialize the user
  // passport.serializeUser((user, done) => {
  //   console.log('Inside serializeUser callback. User id is save to the session file store here')
  //   done(null, user.id);
  // });

  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: jwtSecret.secret
  }

  passport.use(
    'jwt',
    new JWTStrategy(opts, (jwt_payload, done) => {
      try {
        User.findOne({
          where: {
            username: jwt_payload.id
          },
        }).then(user => {
          if (user) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
      } catch (e) {
        done(e)
      }
    })
  )
}
// /module.exports = passport;