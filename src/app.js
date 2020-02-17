const argv = require('yargs').argv;
const colors = require('colors');
const command = argv._[0];

switch (command) {
    case 'stats':
        console.log('soy console de stats'.green);
        break;
    case 'validate':
        console.log('soy console de validate'.red);
        break;
    case 'validate--stats':
        console.log('soy console de validate stats'.bgBlue);
        break;
    default:
        console.log('command unrecognized'.yellow);

        break;
};