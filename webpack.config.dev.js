const baseConfig = require('./webpack.config.base');
const path = require('path');

module.exports = {
    ...baseConfig,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
}