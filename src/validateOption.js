const fetch = require('node-fetch');
const validateLinks = (data) => {

    fetch(data)
        .then(res => console.log(res));



};

validateLinks('https://github.com/KARENLABO/GDL004-md-links/blob/developer/src/validation.js')


module.exports = {
    validateLinks
};