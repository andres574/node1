const fs = require('fs')
const colors = require('colors')

const crearArchvo = async(base = 5, lista = false, hasta = 2) => {

    try {




        let salida, consola = ''
        for (let i = 1; i <= hasta; i++) {

            salida += (` ${base} X  ${i} = ${base * i}\n`);
            consola += (`${base} ${'X'.green}  ${i} ${'='.green} ${base * i}\n`);


        }
        if (lista) {

            console.log(`==================`.green)
            console.log(`LA TABLA DEL: ${base}. FUE CREADA`.blue)
            console.log(`==================`.green)

            console.log(consola)

        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`

    } catch (error) {

        throw error;
    }


}

module.exports = {
    crearArchvo
}