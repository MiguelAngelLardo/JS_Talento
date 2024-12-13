
/*validar mail con funcion a lo c++, le paso una fx  declarada a otra fx*/
const regularExpresionMail = /^[a-zA-Z0-9_.+%\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,4}){1,2}$/;
var emailInput = document.getElementById('email');
var nuevoelementoP = document.createElement('p');
nuevoelementoP.style.margin = "5px";

emailInput.insertAdjacentElement("afterend", nuevoelementoP);


function validarEmailRegex(event){/*event es palabra reservada*/ 
 var vectorDinamicoChar = event.target.value;/*cada tecla que aprieto es recepcionada por event.target.value*/
 
 if(regularExpresionMail.test(vectorDinamicoChar)){
    nuevoelementoP.textContent = "Email válido";
    nuevoelementoP.style.color = "greenyellow"; 
    nuevoelementoP.style.textShadow = "0 0 20px greenyellow";
  }else{
    nuevoelementoP.textContent = "Email no válido";
    nuevoelementoP.style.color = "hotpink"; 
    nuevoelementoP.style.textShadow = "0 0 20px red"; 

  }
}

emailInput.addEventListener('input', validarEmailRegex);


/*validar mail con funcion anonima (la creo dentro de la fx)
const regularExpresionMail2 = /^[a-zA-Z0-9_.+%\-]+@[a-za-Z0-9\-]+(\.[a-zA-Z]{2,4}){1,2}$/;
var emailImput2 = documet.getElementById('email');*/


/*tomar formulario para mostrar los datos en otro imprimir.HTML*/
var formularioId = document.getElementById("formulario");

formularioId.addEventListener("submit", function(event){/*event es un objeto que representa el evento click, submit, etc*/

  event.preventDefault();/*para que no se haga el comportamiento pór defecto*/
  var nombre = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  
  /*guardo datos en local storage para usarlos en otra pagina*/
  localStorage.setItem("nombre", nombre); /*clave valor, cuardo en "nombre lo que hay en var nombre*/
  localStorage.setItem("email", email);

  window.location.href = "imprimir.html";//redirigir a otra pagina


});



/*codigo para imprimir.html*/
var datosP = document.getElementById("datosform");

//recupero la info del local Storage
var nombre = localStorage.getItem("nombre");
var email = localStorage.getItem("email");
console.log("nombre: " + nombre + " email: " + email);

datosP.textContent = `Gracias ${nombre}, enviamos tu mensaje al mail: ${email}`;

