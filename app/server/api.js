var WarpServer = require('warp-server');
var path = require('path');

module.exports = new WarpServer({
    security: {
        apiKey: process.env.API_KEY || 'laser',
        masterKey: process.env.MASTER_KEY || 'laserMaster'
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        default: process.env.DB_DEFAULT || 'mms'
    },
    models: {
        source: path.join(__dirname, 'models'),
        user: 'user',
        session: 'session'
    },
    migrations: {
        activated: true
    },
    storage: {
        path: path.join(__dirname, '../../public/storage')
        // options: -- you can opt to use a different storage service --
        // adapter: -- you can opt to use a different storage service --
    },
    functions: {
        source: path.join(__dirname, 'functions')
    },
    queues: {
        activated: true,
        source: path.join(__dirname, 'queues')
    }
});