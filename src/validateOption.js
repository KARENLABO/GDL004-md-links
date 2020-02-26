const fetch = require('node-fetch');
const links = ['https://www.npmjs.com/package/noe-fetch', 'https://github.com/JossAcosta/GDL004-md-links/blob/develop/index.js', 'https://www.google.com/search?newwindow=1&rlz=1C1CHBF_esMX872MX872&sxsrf=ALeKk01w8zyGH-Cp8cDatTHZrts9eTFIlg%3A1582578829577&ei=jTxUXqW5IpXB7gL_17zgCQ&q=array+de+links&oq=array+de+links&gs_l=psy-ab.3..0i71l8.1991.1991..2467...0.2..0.0.0.......0....1..gws-wiz.404KbErPTpA&ved=0ahUKEwjls9zHjevnAhWVoFsKHf8rD5wQ4dUDCAs&uact=5']


const validateLinks = async(arrayLinks) => {
    try {
        const fetchTry = fetchValidate(arrayLinks);
    } catch (error) {
        console.log(error);
    }
};

async function fetchValidate(arrayLinks) {
    let linksOK = [];
    let linksErr = [];

    for (i = 0; i < arrayLinks.length; i++) {
        let res = await fetch(arrayLinks[i])
        if (res.statusText == 'OK') {
            linksOK.push(arrayLinks[i])
        } else {
            linksErr.push(arrayLinks[i])
        }


    }
    console.log(linksOK);
    console.log(linksErr);
}


validateLinks(links)







module.exports = {
    validateLinks
};