const fs = require("fs").promises;
const path = require("path");

module.exports = async () => {
  const mdPath = path.join(__dirname, "..", "_includes", "about.md");
  const md = await fs.readFile(mdPath, "utf-8");
  return md.split(/<!--\s?pagebreak\s?-->/g).map(section => section.trim());
};
