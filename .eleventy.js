module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("stringify", (obj={}) => JSON.stringify(obj, null, 2));
  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
