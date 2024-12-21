document.addEventListener("DOMContentLoaded", () => {
  var productosContainer = document.getElementById('grilla');
  var prevBtn = document.getElementById('paginator__btn-previous');
  var nextBtn = document.getElementById('paginator__btn-next');
  var pageInfo = document.getElementById('paginator__page-info');
 
  //estas variables se utilizan para ver la pagina actual, la cantidad de elementos a mostrar y el total de elementos.
 let currentPage = 1;
 const limit = 15;
 let totalProductos = 0;
  
  function fetchProductos() {
    const skip/*omitir*/ = (currentPage - 1) * limit;//(1-1)*15=0-> mostrar desde el elemento 0 sin saltar ninguno / pagina (2-1)*15 = da 15, osea que salta los primeros 15 y muestra luego del 16
    
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(response => response.json()) // response trae toda la API, datos y cabecera
    .then((data) => { //quito el encabezado
      totalProductos = data.total;
      var productos = data.products; // Array de productos de la API, como vien een JSON lo paso a variable js
      productosContainer.innerHTML = ""; // Limpio el contenido del div

      productos.forEach((product) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "grilla__card"; //HTML tiene el bloque "grilla", este es el elemento

        cardDiv.innerHTML = 
        `
          <img src="${product.thumbnail}" class="grilla__card__thumbnail" alt="${product.title}">
          <h3 class="grilla__card__title">${product.title}</h3>
          <p class="grilla__card__description">${product.description}</p>
          <p class="grilla__card__price">Precio: $${product.price}</p>
          <button class="grilla__card__button">Añadir al carrito</button>
        `;
      
        //agregar evento al boton añadir al carrito
        var botonAgregar = cardDiv.querySelector(".grilla__card__button");
        botonAgregar.addEventListener("click", () => {
          agregarAlCarrito(product);
        });//cierro botonAgregar

        productosContainer.appendChild(cardDiv); // Añadir la card al contenedor
      });//cierro forEach
      
      prevBtn.disabled = currentPage === 1; //si el currentPage es 1, prevBtn se desactiva
      pageInfo.textContent = `Page ${currentPage}`;          
      nextBtn.disabled = (currentPage * limit) >= totalProductos;//pagina actual 2 * 15 da 30, si tengo un totalPrductos de 20, el boton se desactiva

    });//cierro then  
  }//cierro fetchProductos( )  
  

  function agregarAlCarrito(producto){
    let cart = JSON.parse(localStorage.getItem("cart")) || []; //el localStorage guarda texto, por eso si encuentra elemento cart lo guara y sino lo arma vacio
    cart.push(producto); //si tengo el array con indice 0, 1 y 2, el push agrega un indice 3, luego 4....
    localStorage.setItem("cart", JSON.stringify(cart));//en el array cart tengo productos como json y con stringify lo convierto a texto para guardar en localStorage
    alert(`${producto.title} agregado al carrito`);
  }

  prevBtn.addEventListener("click", () => 
    {
    if (currentPage > 1) {
        currentPage--;
        fetchProductos(currentPage);
    }
    });
  
    nextBtn.addEventListener("click", () => 
      {
      if ((currentPage * limit) < totalProductos) 
        {
          currentPage++;
          fetchProductos(currentPage);
      }
      });
  
  fetchProductos();

});//cierro DOMContentLoaded

  /*
  JSON:  "id":1,"title":"Essence Mascara Lash Princess".
  texto: "id":1,"title":"Essence Mascara Lash Princess"
  
  */