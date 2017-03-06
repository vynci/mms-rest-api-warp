// References
var WarpServer = require('warp-server');

module.exports = WarpServer.Model.create({
    className: 'user',
    keys: {
        // REQUIRED: Fields viewable in queries
        viewable: ['username', 'email'],
        // REQUIRED: Fields editable in queries
        actionable: ['username', 'password', 'email']
    },
    validate: {
        'username': WarpServer.Model.Validation.FixedString(8, 16),
        'password': WarpServer.Model.Validation.Password(8),
        'email': WarpServer.Model.Validation.Email
    },
    parse: {
        // Removes the whitespaces in usernames
        // Encrypts the passwords provided
        'username': WarpServer.Model.Parser.NoSpaces,
        'password': WarpServer.Model.Parser.Password
    }
});