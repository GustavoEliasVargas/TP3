let identificarTexto = (texto) => {
  if (/^[A-Z]+$/.test(texto)){
    return 'Solo Mayusculas';
  }else if (/^[a-z]+$/.test(texto)){
    return 'Solo Minusculas';
  }else if (/^[a-zA-Z]+$/.test(texto)){
    return 'Combinacion de Mayusculas y Minusculas';
  }else if (/[^a-zA-Z0-9]/.test(texto)){
    return 'Combinacion de Mayusculas, Minuscula, Numeros y/o caracteres especiales';
  }else{
    return 'No identificable';
  }
};
let ingreso = prompt('ingrese una cadena de texto a ser validada');
document.write(`El texto ingresado contiene ${identificarTexto(ingreso)}`);