/**
  [bar description] `renderiza lo que busques `
    @param {[color:string]} nombre

*/

const obtenerColor=(color)=>{
    const colores= {
        verde:"green",
        azul:"blue",
        rojo:"red",
        blanco:"white"
    }

    return colores[color]??colores.blanco;
}

console.log(obtenerColor("verde"));
/* 
const colores= {
    verde:"green",
    azul:"blue",
    rojo:"red",
    blanco:"white"
}

console.log(colores["verde"]) */