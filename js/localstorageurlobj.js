/* localstorage */
let sUrl=location.href;
const d = new Date();
d.getTime();

let paginas = new Object();
paginas.url = sUrl
paginas.timestamp = d.getTime();

let vPaginas = localStorage.getItem('paginas');
vPaginas += `{ "pagina": ${sUrl} , "timestamp": ${d.getTime()}}`;
localStorage.setItem("paginas",vPaginas);

/* para visualizar efecto en la pagina
document.write('<p>Texto añadido a localStorage.setItem("paginas",vPaginas);');
document.write(`{ "pagina": ${sUrl} , "timestamp": ${d.getTime()}}<p>`); */
