const options = {
    path: {
        demand: true,
        alias: 'p'
    }
}

const argv = require('yargs')
    .command('validate', 'If we pass the --validate option, the module must make an HTTP request to find out if the link works or not. If the link results in a redirect to a URL that responds well, then we will consider the link as correct.', options)
    .command('stats', 'If we pass the --stats option, the output will be a text with basic statistics about the links.', options)
    .command('validate--stats', 'We can also combine --stats and --validate to obtain statistics that need validation results.', options)
    .help()
    .argv;

module.exports = {
    argv
};