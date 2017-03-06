// References
var WarpServer = require('warp-server');

module.exports = WarpServer.Model.create({
    className: 'session',
    keys: {
        // REQUIRED: Fields viewable in queries
        viewable: ['user', 'origin', 'session_token'],
        // REQUIRED: Fields editable in queries
        actionable: ['user', 'origin'],
        // OPTIONAL: Pointers to different models
        pointers: {
            'user': {
                className: 'user',
                via: 'user_id'
            }
        }
    },
    // Auto-generates tokens for each session; Lasts 30 days
    beforeSave: WarpServer.Model.PreSave.Session(30)
});