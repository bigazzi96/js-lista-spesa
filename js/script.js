// Array
const listaSpesa = [
    'pane', 'frutta', 'cipolla', 'verdura', 'acqua'];
 
  i=0

//ciclo while
  while (index=0 < listaSpesa.length){
    alimenti = i;
    document.getElementById('listaSpesa').innerHTML +=`<li> ${alimenti} </li>`;
    console.log(listaSpesa);
    i++;
  }