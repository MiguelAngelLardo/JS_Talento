document.addEventListener("DOMContentLoaded", () => {
  const sGrid = document.getElementById('m-resenias__s-grid');
  const cantidadResenias = document.getElementById('m-resenias__s-pedirCantidad__cantidad');
  const clickBoton = document.getElementById('m-resenias__s-pedirCantidad__clickBoton');
  
  function cargarResenias(cantidad) {
    // Usar la cantidad dinámica en la URL
    fetch(`https://dummyjson.com/comments?limit=${cantidad}`)
      .then(response => response.json()) // Convertir respuesta a JSON
      .then((data) => {
        sGrid.innerHTML = ''; // Limpiar las reseñas anteriores

        // Iterar sobre los comentarios
        data.comments.forEach(comment => {
          const fullName = comment.user.fullName; // Nombre completo del usuario
          const body = comment.body; // Comentario
          
          // Crear dinámicamente un div para cada comentario
          const reseniaDiv = document.createElement('div');
          reseniaDiv.className = "m-resenias__s-grid__d-resenia";
          
          // Crear el elemento h3 para el nombre
          const nameElement = document.createElement('h3');
          nameElement.textContent = fullName;
          
          // Crear el elemento p para el comentario
          const commentElement = document.createElement('p');
          commentElement.textContent = body;
          
          // Agregar h3 y p al div
          reseniaDiv.appendChild(nameElement);
          reseniaDiv.appendChild(commentElement);
          
          // Agregar el div al section
          sGrid.appendChild(reseniaDiv);
        });
      })
      .catch(error => console.error('Error al obtener los datos:', error)); // Manejo de errores
  }
  // Cargar 15 reseñas por defecto al inicio
  cargarResenias(15);

  clickBoton.addEventListener('click', () => {
    const cantidadReseniasInt = parseInt(cantidadResenias.value, 10);
    
    if (cantidadReseniasInt > 0 && cantidadReseniasInt <= 340) {
      cargarResenias(cantidadReseniasInt);
    } else {
      alert('Por favor, ingresa un número válido entre 1 y 340.');
    }
  }); // Cierra el evento clickBoton
}); // Cierra DOMContentLoaded
