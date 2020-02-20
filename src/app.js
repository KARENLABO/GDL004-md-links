const argv = require('./yargs.js').argv;
const colors = require('colors');
const validationPath = require('./validation.js').validationPath;
const readLinks = require('./readLinks.js').checkLinks;
const statsFunction = require('./stats').statsLinks;
const validateFunction = require('./validate').validateLinks;
const fs = require('fs');


const controller = async(val) => {
    let pathFile = '';
    let mdText = '';
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
                const stats = await statsFunction(mdText)
                return stats
                break;
            case 'validate':
                const validate = await validateFunction(mdText)
                return validate
                break;
            case 'validate--stats':
                // const statsvalidate = await statsFunction(mdText)
                // const validatestats = await validateFunction(mdText)

                // return statsvalidate + validatestats;
                break;
            default:
                throw new Error(console.log('command unrecognized'.yellow));

                break;
        }
    }

}

controller(argv.path).then().catch(e => console.log(e));