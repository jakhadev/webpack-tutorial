import DotenvWebpackPlugin from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildPaths, Env } from "./types";
import { buildConfig } from "./webpack/buildConfig";

export default (env: Env) => {
  const buildPath: BuildPaths = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  return buildConfig({
    mode: env.mode || "development",
    port: env.port || 3000,
    path: buildPath,
  });
};
