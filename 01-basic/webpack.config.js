const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
         extensions: ['.js', '.ts'],
       },
  entry: {
    app: ["./index.ts"],
    appStyles: ["./styles.scss"],
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    port: 8081,
    stats: "errors-only",
  },
  plugins: [
    //Generate index.html in /dist
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
