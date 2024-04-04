titulo.innerHTML='01 setItem';
/* el localstorage almacena los datos en foemato string mediante 
localstorage.setItem('atributo',valor) */

//string
localStorage.setItem ('nombre','Alberto');

//numeros 
localStorage.setItem('cantidad',7);

// objetos
const persona = { 
    nombre : "Aitor",
    edad : 23
}

const personaString = JSON.stringify(persona);
localStorage.setItem('persona',personaString);

// arrays 
const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
localStorage.setItem('dias',JSON.stringify(dias));
 console.log('Consulta la opcion aplicacion -> localstorage ')

/* sessionStorage funciona igual pero lso datos de borran al salir de sesion */
