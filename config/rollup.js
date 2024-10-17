var pkg = require("../package.json");

var name = pkg.name;
var version = pkg.version;
var license = pkg.license;

var banner = `/*!
* ${name} ${version}
* License under ${license}
*/
`;

exports.banner = banner;
