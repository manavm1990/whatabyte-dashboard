const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["webpack/hot/poll?100", "./src/index.ts"],
  target: "node",
  externalsPresets: {
    node: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: { loader: "ts-loader" },
      },
    ],
  },

  // TODO: Update settings for "production"
  mode: "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"],
  },
  plugins: [
    new // ❗HMR should never be used in production.
    webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
};
