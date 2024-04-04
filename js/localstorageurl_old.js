/* localstorage */
let sUrl=location.href;
const d = new Date();
d.getTime();
// obtengo el valor de la clave paginas del localstorage
let vPaginas = localStorage.getItem('paginas');
document.write("Valor de paginas : "  + vPaginas);
vPaginas += `{ "pagina": ${sUrl} , "timestamp": ${d.getTime()}}`;
localStorage.setItem("paginas",vPaginas);

/* para visualizar efecto en la pagina */
document.write('<p>Texto añadido a localStorage.setItem("paginas",vPaginas);');
document.write(`{ "pagina": ${sUrl} , "timestamp": ${d.getTime()}}<p>`);
