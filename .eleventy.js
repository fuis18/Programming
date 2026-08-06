export default function (eleventyConfig) {
  // Copia tal cual los assets estáticos (css, imágenes, etc.)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Que Eleventy vuelva a construir si cambia el css
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
