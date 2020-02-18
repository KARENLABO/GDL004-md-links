const argv = require('./yargs.js').argv;
const colors = require('colors');
const validatePath = require('./validation.js').runValidate;
const links = require('./readLinks').checkLinks;

validatePath(argv.path).then()
    .catch((err) => console.log(err));



const command = argv._[0];

switch (command) {
    case 'stats':




        break;
    case 'validate':

        break;
    case 'validate--stats':

        break;
    default:
        console.log('command unrecognized'.yellow);

        break;
};