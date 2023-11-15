let numero = parseInt(prompt('N° de la tabla que desea generar'));
if (typeof(numero)==='number'){
  document.write(`<h2>Tabla de Multiplicar del ${numero}</h2>`);
  for (i=1;i<=10;i++){
    document.write(`<h3>${numero}   x  ${i}  = ${i*numero}</h3>`);
  }
}else{
  document.write('numero no valido')
}