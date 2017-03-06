// References
var Warp = require('warp-sdk-js');

// Sample query
var query = new Warp.Query(Warp.User);

query.find().then(function(users) {
    var usernames = users.map(user => user.get('username'));
    console.log('Existing users:', usernames);
});