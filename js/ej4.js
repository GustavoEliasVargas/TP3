/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

let determinarParidad = (numero) => {
  return numero % 2 === 0?'Par':'Impar';
}


let res = parseInt(prompt('ingrese un numero para determinar su paridad'));

if (typeof(res)==='number'){
  document.write(`<h2>El numero ingresado es : ${determinarParidad(res)}</h2>`);
}else{
  document.write('<h2>No es un numero valido</h2>'); 
}