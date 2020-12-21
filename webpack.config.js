const path = require("path");

module.exports = {
  entry: ["./src/index.ts"],
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
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ["src", "node_modules"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
};
