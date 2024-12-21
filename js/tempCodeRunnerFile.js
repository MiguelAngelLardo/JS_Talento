document.addEventListener("DOMContentLoaded", ()=> {
  var sGrid = document.getElementById('s-grid');
  
  fetch('https://dummyjson.com/comments?limit=20')
  .then(response => response.json()) // tiene encabezado y el dato bruto, pero el data tiene solo dato bruto
  .then((data) =>{
    console.log(data); // Esto te mostrará la estructura del objeto JSON devuelto
    
    
  });//cierra .then(data)

});///cierro DOMContentLoaded