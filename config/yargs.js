const argv=require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    describe: 'Multiplica la tabla',
 }) 
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe: 'Lista la tabla multiplicada',
}) 

.option('h',{
    alias:'hasta',
    type:'number',
    describe: 'Limite del arreglo',
}) 

.check((argv,options)=>{
    if (isNaN (argv.b)){
        throw 'La base tiene que ser un número!'
    }
    return true;
})

.argv;

module.exports=argv;