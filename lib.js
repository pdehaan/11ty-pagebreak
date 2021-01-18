const fs = require("fs").promises;
const path = require("path");

module.exports = {
  paginateMd,
};

/**
 * Load a markdown file from the file system and return it as a string.
 * @param {string} p Path to a markdown file to load.
 * @returns {string} Contents of the specified markdown file.
 */
async function loadMd(p, inputDir = "src") {
  const mdPath = path.join(__dirname, inputDir, p);
  return fs.readFile(mdPath, "utf-8");
}

/**
 * Convert the contents of a markdown file into an array of "pages" using a `<!--pagebreak-->` marker.
 * @param {string} md Contents of markdown file to paginate.
 * @returns {array<string>} Array of strings, split by `<!--pagebreak-->` marker.
 */
function paginate(md, re) {
  // const re = /<!--\s?pagebreak\s?-->/g;
  return md.split(re).map((section) => section.trim());
}

/**
 * Load a markdown file and convert it into an array of "pages" using a `<!--pagebreak-->` marker.
 * @param {string} p Path to a markdown file to load.
 * @returns {array<string>} Array of strings, split by `<!--pagebreak-->` marker.
 */
async function paginateMd(p, inputDir = "src", marker = /<!--\s?pagebreak\s?-->/g) {
  const md = await loadMd(p, inputDir);
  return paginate(md, marker);
}
