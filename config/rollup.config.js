var common = require("./rollup.js");

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    banner: common.banner,
  },
};
