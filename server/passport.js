const passport = require('passport');
const db = require('./models/postgres');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5500/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      const checkUserExistQuery =
        'SELECT display_name FROM users WHERE google_id=$1;';
      const createUserQuery =
        'INSERT INTO users (google_id, display_name, email) VALUES($1, $2, $3);';
      console.log(profile);
      db.query(checkUserExistQuery, [profile.id]).then((res) => {
        console.log(res.rows);
        if (res.rows.length === 0) {
          db.query(createUserQuery, [
            profile.id,
            profile.displayName,
            profile.emails[0].value,
          ])
            .then((res) => {
              console.log(res);
            })
            .catch((e) => {
              throw new Error('Something went wrong while creating a new user');
            });
        } else {
          console.log('User already exists in database');
        }
      });

      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
