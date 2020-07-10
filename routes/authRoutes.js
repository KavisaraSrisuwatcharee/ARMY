const passport = require('passport');

module.exports = (app) => {
    app.get('/api/test', (req, res) => {
        res.send({ msg: 'hello server' });
    });

    app.get('/auth/google', async (req, res) => {
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        });
    });

    app.get('/auth/google/callback', (req, res) => {
        passport.authenticate('google', (req, res) => {
            res.redirect('/');
        });
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
