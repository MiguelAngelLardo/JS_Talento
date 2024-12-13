document.addEventListener("DOMContentLoaded", () => {
  var productosContainer = document.getElementById('grilla');
  
  fetch('https://dummyjson.com/products?limit=12')
  .then(response => response.json()) // response trae toda la API
  .then((data) => {
    var productos = data.products; // Array de productos de la API
    productosContainer.innerHTML = ""; // Limpio el contenido del div
    productos.forEach((product) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "grilla__card"; //HTML tiene el bloque "grilla", este es el elemento

      cardDiv.innerHTML = `
            <img src="${product.thumbnail}" class="grilla__card__thumbnail" alt="${product.title}">
            <h3 class="grilla__card__title">${product.title}</h3>
            <p class="grilla__card__description">${product.description}</p>
            <p class="grilla__card__price">Precio: $${product.price}</p>
            <button class="grilla__card__button">Añadir al carrito</button>
      `;
      productosContainer.appendChild(cardDiv);
    });
  });    
});