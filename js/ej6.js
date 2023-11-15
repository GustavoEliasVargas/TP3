let a =  parseFloat(prompt('ingrese el lado a del rectangulo a calcular'));
let b =  parseFloat(prompt('ingrese el lado b del rectangulo a calcular'));


if (typeof(a)==='number'){
  if (typeof(b)==='number'){
    document.write(`<h3>lado a = ${a}</h3>`);
    document.write(`<h3>lado a = ${b}</h3>`);
    let perimetro = 2 * (a+b);
    document.write(`<h3>el perimetro es  = ${perimetro}</h3>`);

  }else{
    document.write('el lado b no es un numero valido');
  }
}else{
  document.write('el lado a no es un numero valido');
}