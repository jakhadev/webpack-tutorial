import { RuleSetRule } from "webpack";
import { BuildType } from "../types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders({ mode }: BuildType): RuleSetRule[] {
  const tsLoader = {
    test: /\.(ts|tsx)?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoaderWithModule = {
    loader: "css-loader",
    options: {
      modules: {
        namedExport: false,
        localIdentName:
          mode === "production"
            ? "[hash:base64]"
            : "[name]__[local]--[hash:base64:5]",
      },
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
      cssLoaderWithModule,
      "sass-loader",
    ],
  };

  const assetsLoader = {
    test: /\.(png|jpe?g)$/i,
    type: "asset/resource",
    generator: {
      filename: "assets/[name].[hash][ext]",
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
    ],
  };

  return [tsLoader, cssLoader, assetsLoader, svgLoader];
}
