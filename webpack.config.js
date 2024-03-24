const path = require("node:path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: false,
  mode: "development",
  entry: "./src/index.tsx",
  target: "web",
  devServer: {
    open: true,
    port: 8000,
    historyApiFallback: true,
    allowedHosts: "all",
    hot: true,
    static: {
      directory: path.join(__dirname, 'build')
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".css"],
    alias: {
      App: path.resolve(__dirname, "src/app/"),
      Entities: path.resolve(__dirname, "src/entities/"),
      Pages: path.resolve(__dirname, "src/pages/"),
      Shared: path.resolve(__dirname, "src/shared/"),
      Widgets: path.resolve(__dirname, "src/widgets/"),
    },
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
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      inject: true,
    }),
    new Dotenv({ path: "./.env" }),
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
    clean: true,
    publicPath: "/",
  },
};