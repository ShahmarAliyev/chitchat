const passport = require('passport');
const db = require('./models/postgres');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.BACKEND_URL + 'auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      const checkUserExistQuery = 'SELECT * FROM users WHERE google_id=$1;';
      const createUserQuery =
        'INSERT INTO users (google_id, display_name, email) VALUES($1, $2, $3) RETURNING *;';
      db.query(checkUserExistQuery, [profile.id]).then((res) => {
        if (res.rows.length === 0) {
          db.query(createUserQuery, [
            profile.id,
            profile.displayName,
            profile.emails[0].value,
          ])
            .then((res) => {
              const newUser = res.rows[0];
              done(null, newUser);
            })
            .catch((e) => {
              throw new Error('Something went wrong while creating a new user');
            });
        } else {
          const currentUser = res.rows[0];
          done(null, currentUser);
        }
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.google_id);
});
passport.deserializeUser((id, done) => {
  const checkUserExistQuery = 'SELECT * FROM users WHERE google_id=$1;';

  db.query(checkUserExistQuery, [id]).then((res) => {
    done(null, res.rows[0]);
  });
});
