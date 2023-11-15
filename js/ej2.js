
let ciudades = [];
while(confirm('desea agregar otra ciudad')){
  let ciudad = prompt('Ingrese el nombre de la ciudad y el pais');
  ciudades.push(ciudad);

};

document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`);
document.write('<ul>');
  document.write(`<li>Elemento 1er posicion: ${ciudades[0]}</li>`);
  let result = ciudades[2]?`Elemento 3er posicion: ${ciudades[2]}`:'no existe tercer elemento';
  document.write(`<li>${result}</li>`);
  document.write(`<li>Elemento ultima posicion: ${ciudades[ciudades.length-1]}</li>`);
  ciudades.push('Paris');
  document.write(`<li>Elemento ultima posicion: ${ciudades[ciudades.length-1]}</li>`);
document.write('</ul>');
console.log(ciudades);
document.write('<h2>Arreglo de ciudades</h2>');

document.write('<ul>');
  ciudades.forEach((ciudad)=> document.write(`<li>Elemento: ${ciudad}</li>`));
document.write('</ul>');