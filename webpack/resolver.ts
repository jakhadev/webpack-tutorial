import { BuildType } from "types";
import { ResolveOptions } from "webpack";

export function buildResolvers(options: BuildType): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": options.path.src,
    },
  };
}
