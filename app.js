
/*

for (i=1; i<=10; i++){
    salida +=`${base} X ${i} = ${base*i} \n`;
}


console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err) throw err;
    console.log(`Tabla ${base} creada, archivo: tabla-${base}.txt `)

})

*/
const argv = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicar');





let base= 10;
console.clear();
console.log(argv);

crearArchivo(argv.b,argv.l,argv.h);

