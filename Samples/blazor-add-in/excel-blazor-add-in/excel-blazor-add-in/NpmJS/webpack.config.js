
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                include: /node_modules\/@saffron\/core-components.*/,
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false, // fix:issue: https://github.com/webpack/webpack/issues/11467
                },
            },
            {
                test: /\.js$/,
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",],
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: "index.bundle.js"
    }
};