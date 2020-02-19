const argv = require('./yargs.js').argv;
const colors = require('colors');
const validatePath = require('./validation.js').runValidate;
const links = require('./readLinks').checkLinks;
const fs = require('fs');



validatePath(argv.path).then()
    .catch((err) => console.log(err));



const command = argv._[0];

switch (command) {
    case 'stats':


        break;
    case 'validate':
        console.log('validate');

        break;
    case 'validate--stats':
        console.log('validate-stats');
        break;
    default:
        console.log('command unrecognized'.yellow);

        break;
};