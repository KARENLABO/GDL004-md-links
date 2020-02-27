const fetch = require('node-fetch');

const validateLinks = async(arrayLinks) => {
    try {
        const fetchTry = await fetchValidate(arrayLinks);
        console.log(fetchTry);

    } catch (error) {
        console(error);
    }
    async function fetchValidate(arrayLinks) {
        let results = {
            LinksOk: [],
            LinksWrong: []
        };
        let linksOK = [];
        let linksErr = [];

        for (i = 0; i < arrayLinks.length; i++) {
            try {
                let res = await fetch(arrayLinks[i])
                if (res.statusText == 'OK') {
                    linksOK.push(arrayLinks[i])
                    results.LinksOk = linksOK;
                } else {
                    linksErr.push(arrayLinks[i])
                    results.LinksWrong = linksErr;
                }
            } catch (err) {
                linksErr.push(arrayLinks[i])
                results.LinksWrong = linksErr;
            }
        }

        return await results
    }
}


module.exports = {
    validateLinks
};