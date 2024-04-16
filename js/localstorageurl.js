// Objeto que deseas agregar al historial
let sUrl=location.href;
const d = new Date();
let nuevoObjeto = { 'visita': sUrl, 'timestamp': d.getTime() };
// Recuperar el historial existente del localStorage
let historialExistente = localStorage.getItem('historial');

// Si hay historial existente, conviértelo de cadena JSON a un array de objetos;
// de lo contrario, inicializa un array vacío.
let historialArray = historialExistente ? JSON.parse(historialExistente) : [];

// Agregar el nuevo objeto al array de historial
historialArray.push(nuevoObjeto);

// Convertir el array de objetos a una cadena JSON actualizada
let historialActualizado = JSON.stringify(historialArray);

// Guardar el historial actualizado en el localStorage
localStorage.setItem('historial', historialActualizado);

console.log("Historial actualizado:", historialActualizado);

document.write('<p>Texto añadido a localStorage.setItem("paginas",vPaginas);');
document.write(`{ "pagina": ${sUrl} , "timestamp": ${d.getTime()}}<p>`);
