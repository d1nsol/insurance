const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            //target: 'http://localhost:5000',
            target: 'https://vast-cliffs-99081.herokuapp.com' || 'https://stark-island-15004.herokuapp.com/',
            changeOrigin: true,
        })
    );
};