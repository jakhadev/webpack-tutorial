import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildType } from "../types";

export function buildDevServer({ mode }: BuildType): DevServerConfiguration {
  if (mode === "production") return undefined;

  return {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  };
}
