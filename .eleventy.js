module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('icons');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('scripts');

  return {
    dir: {
      layouts: 'layouts',
      includes: 'includes',
    },
    templateFormates: [
      'js',
      'map',
      'liquid',
      'html',
      'xml',
      'svg',
      'webmanifest',
    ],
    passthroughFileCopy: true,
  };
};
