titulo.innerHTML='02 getItem';
/* el localstorage almacena los datos en formato string mediante 
localstorage.getItem('atributo',valor) */

//string
const nombre = localStorage.getItem ('nombre');
console.log(nombre);




const persona = localStorage.getItem('persona');
console.log(persona);

console.log(JSON.parse(persona));


const dias = localStorage.getItem('dias');

console.log(dias);
console.log(JSON.parse(dias));
 console.log('Consulta la opcion aplicacion -> localstorage ')

/* sessionStorage funciona igual pero lso datos de borran al salir de sesion */
