import { Configuration } from "webpack";
import { buildDevServer } from "./devServer";
import { BuildType } from "../types";
import { buildResolvers } from "./resolver";
import { buildLoaders } from "./loaders";
import { buildPlugins } from "./plugins";

export function buildConfig(options: BuildType): Configuration {
  return {
    mode: options.mode,
    entry: options.path.entry,

    output: {
      path: options.path.output,
      filename: "[name].[contenthash].bundle.js",
      chunkFilename: "[name].[contenthash].chunk.js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders({ mode: options.mode }),
    },
    resolve: buildResolvers(options),
    devServer: buildDevServer({ mode: options.mode }),
    devtool: options.mode === "development" ? "source-map" : false,
  };
}
