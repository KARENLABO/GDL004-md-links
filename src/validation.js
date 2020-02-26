const argv = require('./yargs.js').argv;
const path = require('path');
const colors = require('colors');
const fs = require('fs');

const validationPath = (value) => {
    return new Promise((resolve, reject) => {
        if (typeof value == 'number') {
            reject(`Numbers like '${value}' are not supported, please replace with a file type.md`.red);
        } else {
            const pathUser = path.extname(value);
            if (pathUser != '.md') {
                reject(`--Please verify your file '${value}' it is not supported,  you have to remplaced it to a file type.md--`.red);
            } else {
                fs.stat(value, (err) => {
                    if (!err) {
                        resolve(value);
                    } else if (err.code === 'ENOENT') {
                        console.log(`File or directory '${(value)}' does not exist, please check it`.red);
                    }
                });
            }
        }
    });
};



module.exports = {
    validationPath
};