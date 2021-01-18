const fs = require("fs").promises;
const path = require("path");

module.exports = {
  paginateMd,
};

/**
 * Load a markdown file and convert it into an array of "pages" using a `<!--pagebreak-->` marker.
 * @param {string} p Path to a markdown file to load.
 * @param {string} inputDir Base input directory for the site.
 * @param {string|RegExp} marker String/RegExp to split the markdown file contents on.
 * @returns {array<string>} Array of strings, split by specified (ie: `<!--pagebreak-->`) marker.
 */
async function paginateMd(p, inputDir = "src", marker = /<!--\s?pagebreak\s?-->/g) {
  const mdPath = path.join(__dirname, inputDir, p);
  const md = await fs.readFile(mdPath, "utf-8");
  return md.split(marker)
    .map((section) => section.trim());
}
