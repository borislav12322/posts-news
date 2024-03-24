const path = require("node:path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    open: true,
    port: 8000,
    historyApiFallback: true,
    allowedHosts: "all",
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-modules-typescript-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ], "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Посты",
    }),
    new Dotenv({path: './.env',}),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contenthash].js",
    clean: true,
  },
};