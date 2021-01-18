const { paginateMd } = require("../../lib");

module.exports = async () => {
  return paginateMd("_includes/about.md");
};
