const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const pluginRss = require('@11ty/eleventy-plugin-rss');
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('favicon-32x32.png');
  eleventyConfig.addPassthroughCopy('favicon-16x16.png');
  eleventyConfig.addPassthroughCopy('site.webmanifest');

  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/images');
  eleventyConfig.addPassthroughCopy('assets/demos');
  
  const options = {
    html: true,
    breaks: true,
    linkify: false
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  return {
    // Use liquid in html templates
    htmlTemplateEngine: 'liquid',
    passthroughFileCopy: true
  };
};
