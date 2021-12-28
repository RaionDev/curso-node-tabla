 
const fs = require("fs");
const colors =require("colors");
const crearArchivo = async (base =5,l=false,h=10) =>{


    try{
        let salida= "";
        let consola="";
        console.log( "Tabla del: ",base)
        for (let i=1;i<=h;i++){
        salida+=` ${base} ${"x"} ${i} ${"="} ${base*i}\n`;
        consola+=` ${base} ${"x".green} ${i} ${"=".green} ${base*i}\n`;
        }
        if (l){       
            console.log(consola);
        }
        const nombreArchivo= `Tabla-${base}.txt`
        fs.writeFileSync(`./salida/${nombreArchivo}`,salida);

        return nombreArchivo;
    } catch(err){
        throw err;
    }
    


}


module.exports={
    crearArchivo
}