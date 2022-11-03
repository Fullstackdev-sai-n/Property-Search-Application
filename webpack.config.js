const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
      },
      devServer: {
        static: {
          directory: path.join(__dirname, "src"),
        },
        compress: true,
        port: 8080,
      },
      mode: 'development',
      target: "web",
      module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ["@babel/preset-env"],
                  },
                },
              },
              {
                test: /\.html$/i,
                use: ["raw-loader"],
              },
              {
                test: /\.css$/i,
                use: ["raw-loader"],
              },
        ]
      },
      plugins: [
        new HtmlWebpackPlugin(
        {
            template: "./src/index.html", // template file
            filename: "index.html" // output
        }
      )
    ]

}