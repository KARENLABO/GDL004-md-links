  const fs = require('fs');
  const markdownLinkExtractor = require('markdown-link-extractor');
  const colors = require('colors');



  const checkLinks = (value) => {
      return new Promise((resolve, reject) => {
          // en esta variable se obtiene todo el texto del documento  
          const markdown = fs.readFileSync(value).toString();
          // esta variable extrae mediante la libreria los links
          const links = markdownLinkExtractor(markdown);
          const filterLinks = links.filter(data => data.indexOf('http') !== -1)
          if (filterLinks.length < 1) {
              reject(`There are not links at ${value}`.bgRed)
          } else {
              resolve(filterLinks);;
          }
      })
  };



  module.exports = {
      checkLinks
  };