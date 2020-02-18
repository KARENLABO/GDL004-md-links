const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const colors = require('colors');


const checkLinks = (value) => {
    return new Promise((resolve, reject) => {
        let arrayLinks;
        // en esta variable se obtiene todo el texto del documento  
        const markdown = fs.readFileSync(value).toString();
        // esta variable extrae mediante la libreria los links
        const links = markdownLinkExtractor(markdown);
        if (links.length < 1) {
            reject(`there is not links at ${value}`.bgBlue)
        } else {
            links.forEach((link) => {
                resolve(arrayLinks = link)
            })
        }
    })
};

module.exports = {
    checkLinks
};