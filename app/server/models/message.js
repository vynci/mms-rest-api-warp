// References
var WarpServer = require('warp-server');

module.exports = WarpServer.Model.create({
    className: 'message',
    keys: {
        // REQUIRED: Fields viewable in queries
        viewable: ['content', 'author'],
        // REQUIRED: Fields editable in queries
        actionable: ['content', 'author']
    },
    validate: {
    },
    parse: {
    }
});