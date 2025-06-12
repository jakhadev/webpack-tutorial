import { PluginObj, NodePath } from "@babel/core";
import * as t from "@babel/types";

export default function removeConsoleLog(): PluginObj {
  return {
    name: "remove-console-log",
    visitor: {
      CallExpression(path: NodePath<t.CallExpression>) {
        const calle = path.get("callee");

        if (
          calle.isMemberExpression() &&
          calle.get("object").isIdentifier({
            name: "console",
          }) &&
          calle.get("property").isIdentifier({
            name: "log",
          })
        ) {
          path.remove();
        }
      },
    },
  };
}
