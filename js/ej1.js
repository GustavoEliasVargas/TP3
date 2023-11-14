document.write('<h2>Lista de Meses</h2>');

const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
document.write('<ul>');
meses.forEach ((mes)=>{
  document.write(`<li>${mes}</li>`);
});
document.write('</ul>');