const { crearArchvo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear();



crearArchvo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))