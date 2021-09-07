const { resolve } = require('path');

module.exports = {
    mode: "development",
    entry: "./js/switch.js",
    output: {
        path: resolve(__dirname,'build'),
        filename: "switch.js"
    }
}