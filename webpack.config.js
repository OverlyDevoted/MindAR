const path = require('path');
module.exports = {
    mode: 'development',
    entry: './public/src/gestures.js',
    output:{
        path: path.resolve(__dirname, 'public/src')
    }
}