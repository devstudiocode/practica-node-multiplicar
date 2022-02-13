const fs=require('fs');
const colors = require('colors');

const crearArchivo = async(base=5,l=false,h=5)=>{

try {
    let salida= "";






for (i=1; i<=h; i++){
    salida +=`${base} X ${i} = ${base*i} \n`;
}

if (l){
console.log('======================'.green)
console.log('======='.green,`BASE ${base}`.yellow,'======='.green)
console.log('======================'.green)
console.log(salida.rainbow);

}

fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

console.log(`Archivo: tabla-${base}.txt creado!`.rainbow)




    
} catch (err) {
    throw err
    
}
}

module.exports = {
    crearArchivo:crearArchivo
}