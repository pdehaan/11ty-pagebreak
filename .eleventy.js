const del = require("del").sync;

module.exports = (eleventyConfig) => {
  del("./www");

  eleventyConfig.addFilter("stringify", (obj={}) => JSON.stringify(obj, null, 2));
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
