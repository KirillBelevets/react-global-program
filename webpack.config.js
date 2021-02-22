module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack.config.dev')
    : require('./webpack.config.prod')

// const path = require('path');
//
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'webpack.bundle.js'
//     },
// };