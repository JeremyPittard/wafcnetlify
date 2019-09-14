const path = require("path");

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "dist/scripts"),
        filename: "app-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        jquery: "jQuery"
    }
};
