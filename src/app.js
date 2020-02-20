const argv = require('./yargs.js').argv;
const colors = require('colors');
const validationPath = require('./validation.js').validationPath;
const readLinks = require('./readLinks.js').checkLinks;
const statsLinks = require('./stats.js').statsLinks;
const fs = require('fs');


const controller = async(val, ) => {
    let pathFile = '';
    let mdText = '';
    let cases = '';
    const command = argv._[0];

    try {
        pathFile = await validationPath(val);
        mdText = await readLinks(pathFile);
        cases = await switchCommands(command);
    } catch (e) {
        console.log(e);
    }
    async function switchCommands(command) {
        switch (command) {
            case 'stats':
                return
                break;
            case 'validate':
                return console.log(mdText);


                break;
            case 'validate--stats':
                return console.log('validate-stats');
                break;
            default:
                return console.log('command unrecognized'.yellow);

                break;
        };
    }
}

controller(argv.path).then().catch(e => console.log(e));