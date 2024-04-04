titulo.innerHTML='03 removeItem';
/*   
localstorage.removeItem('atributo',valor) */

//string
localStorage.setItem('nombre','te voy a borrar');
console.log('antes remove : ' + localStorage.getItem('nombre'));
localStorage.removeItem('nombre');
console.log('despues remove : ' + localStorage.getItem('nombre'));


/* Si quiero modificar un valor del localSorage tengo que hacerlo manualmente.
1. recuperar el valor (get) 
2. modificarlo en el script
3. volver a guardarlo (set) */

const  dias = localStorage.getItem('dias');
console.log (`dias ante : ${dias}`);
let diasArray  = JSON.parse(dias);
console.log (`dias Array : ${diasArray}`);
if (diasArray == null) { diasArray = new Array;}  // por si esta vacio
diasArray.push('nuevo dia');

localStorage.setItem('dias',JSON.stringify(diasArray));








/* limpia todoel localstorage */

//localStorage.clear();