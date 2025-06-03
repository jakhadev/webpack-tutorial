import { RuleSetRule } from "webpack";
import { BuildType } from "../types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({ mode }: BuildType): RuleSetRule[] {
  const tsLoader = {
    test: /\.(ts|tsx)?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const cssLoader = {
    test: /\.scss$/i,
    use: [
      mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
}
