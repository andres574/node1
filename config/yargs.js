const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Es la base de la tabla de muiltiplicar"
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'muestra  asta donde multiplica la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser numero'
        }
        return true

    })
    .argv;


module.exports = argv;