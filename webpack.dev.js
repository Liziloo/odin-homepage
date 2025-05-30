import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.js";

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});

export default devConfig;
