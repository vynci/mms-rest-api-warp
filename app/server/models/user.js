// References
var WarpServer = require('warp-server');

module.exports = WarpServer.Model.create({
    className: 'user',
    keys: {
        // REQUIRED: Fields viewable in queries
        viewable: ['username', 'email'],
        // REQUIRED: Fields editable in queries
        actionable: ['username', 'password', 'email']
    }
});