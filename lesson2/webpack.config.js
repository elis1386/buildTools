
const { resolve } = require('path'); 

module.exports = {
    entry: "./js/switch.js",
    output: {
        path: resolve(__dirname, 'build'), 
        filename: "switch.js"  
    }
};

