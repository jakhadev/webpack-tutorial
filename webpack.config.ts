import path from "path";
import { BuildPaths, Env } from "./types";
import { buildConfig } from "./webpack/buildConfig";

export default (env: Env) => {
  const buildPath: BuildPaths = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };

  return buildConfig({
    mode: env.mode || "development",
    port: env.port || 3000,
    paths: buildPath,
  });
};
