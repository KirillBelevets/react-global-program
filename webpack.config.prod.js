const baseConfig = require('./webpack.config.base');

module.exports = {
    ...baseConfig,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'async',
                    minSize: 0,
                    minChunks: 2,
                }
            }
        }
    }
}