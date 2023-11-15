let tirarDado = () => {
  return Math.floor(Math.random() * 6) + 1;
}

let resultados =[];

for (let i = 0; i < 50; i++) {
  let sumaDados=tirarDado()+tirarDado();
  console.log(sumaDados);
  let encontrado=false;
  for (let j = 0; j < resultados.length; j++){ 
    if (resultados[j][0]===sumaDados){
      resultados[j][1]++;
      encontrado=true;
      break;
    }
  }
  if (!encontrado){ resultados.push( [sumaDados,1]);};  
}
document.write('<table>');
document.write('<tr><th>Suma</th><th>Apariciones</th></tr>');
resultados.forEach(fila => {
  document.write(`<tr><td>${fila[0]}</td><td>${fila[1]}</td></tr>`);
});
document.write('</table>');