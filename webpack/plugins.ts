import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildType } from "../types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildType): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({ template: options.path.html }),
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
        openAnalyzer: true,
        reportFilename: "report.html",
      })
    );
  }
  return plugins;
}
