/* localstorage */
let sUrl=location.href;
const d = new Date();
d.getTime();
// obtengo el valor de la clave paginas del localstorage
//let vPaginas = localStorage.getItem('paginas');
//document.write("Valor de paginas : "  + vPaginas);
let visita;
visita = {
    "pagina" : sUrl,
    "timestamp" : d.getTime()
}
/*
console.log('Vpaginas ' + vPaginas);
if (vPaginas == null){
    vPaginas = new Array;
} */
//////////////////////////

// Obtengo el string previamente salvado y luego
let guardado = localStorage.getItem('historial');
if (guardado){
    //console.log('objetoObtenido: '+ JSON.parse(guardado));
} else {
        guardado = '';
}



//////////////////////////////////////////
let miObjeto = { 'visita': sUrl  , 'timestamp':  d.getTime()  };

guardado += JSON.stringify(miObjeto) ;
console.log("guardado " + guardado);
// Guardo el objeto como un string
localStorage.setItem('historial', guardado);

//////////////////////////////////////////////

/*
console.log('visita ' + visita);
vPaginas = new Array;
vPaginas.push(visita);
console.log('visita ' + vPaginas);
localStorage.setItem("paginas",vPaginas);

/* para visualizar efecto en la pagina */
document.write('<p>Texto añadido a localStorage.setItem("paginas",vPaginas);');
document.write(`{ "pagina": ${sUrl} , "timestamp": ${d.getTime()}}<p>`);
