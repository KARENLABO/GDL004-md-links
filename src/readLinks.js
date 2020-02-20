  const fs = require('fs');
  const markdownLinkExtractor = require('markdown-link-extractor');
  const colors = require('colors');
  const arrayLinks = require('./app').valLinks;


  const checkLinks = (value) => {
      return new Promise((resolve, reject) => {
          // en esta variable se obtiene todo el texto del documento  
          const markdown = fs.readFileSync(value).toString();
          // esta variable extrae mediante la libreria los links
          const links = markdownLinkExtractor(markdown);
          const filterLinks = links.filter(data => data.indexOf('http') !== -1)
          if (filterLinks.length < 1) {
              reject(`there is not links at ${value}`.bgBlue)
          } else {
              resolve(valueLinks(filterLinks));
          }
      })
  };

  const valueLinks = (value) => {
      return value;
  }

  module.exports = {
      checkLinks
  };