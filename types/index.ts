export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
}

export interface BuildType {
  path?: BuildPaths;
  mode?: BuildMode;
  port?: number;
}

export interface Env {
  mode?: BuildMode;
  port: number;
}
