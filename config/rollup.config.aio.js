var common = require("./rollup.js");
var nodeResolve = require("rollup-plugin-node-resolve");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.aio.js",
    format: "umd",
    name: "clone",
    banner: common.banner,
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: [".js"],
    }),
  ],
};
