// remote/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const { dependencies } = require("./package.json");
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
  excludeChunks: ['Copilot']
});
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    host: 'localhost',
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ModuleFederationPlugin({
      name: "Remote",
      filename: "remoteEntry.js",
      remotes: {
        Copilot: "Copilot@http://copilot-local.condenast.io:1234/copilotEntry.js",
      },
      exposes: {
        "./Button": "./src/Button",
        "./TeamPage": "./src/TeamPage"
      },
      shared: {
        "react": {
          singleton: true,
          requiredVersion: "17.0.2",
          version: '17.0.2',
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "17.0.2",
          version: '17.0.2',
        },
      },

    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};