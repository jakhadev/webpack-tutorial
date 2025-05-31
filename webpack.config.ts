import DotenvWebpackPlugin from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface Env {
  mode: "development" | "production";
}

export default (env: Env) => {
  const devServer: DevServerConfiguration = {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  };
  const config: Configuration = {
    mode: env.mode || "development",
    entry: path.resolve(__dirname, "src", "main.tsx"),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/i,
          use: [
            env.mode === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: env.mode === "development" ? devServer : undefined,
    devtool: env.mode === "development" ? "source-map" : false,
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].bundle.js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
        filename: "index.html",
      }),
      new DotenvWebpackPlugin(),
      env.mode === "production" &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash].css",
          chunkFilename: "css/[id].[contenthash].css",
        }),
    ],
  };
  return config;
};
