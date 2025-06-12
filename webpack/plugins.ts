import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildType } from "../types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(options: BuildType): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, "favicon.ico"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(options.paths.public, "data"),
          to: path.resolve(options.paths.output, "data"),
        },
      ],
    }),
  ];

  if (options.mode === "development") {
    plugins.push(new ProgressPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (options.mode === "production") {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",
      })
    );
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "report.html",
      })
    );
  }
  return plugins;
}
