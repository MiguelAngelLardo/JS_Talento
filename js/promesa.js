fetch('https://dummyjson.com/products')
.then(response=>response.json())/*response trae toda la API pero trae dato bruto y el encabezado*/
.then(data=>console.log(data));//solo muestra el dato en bruto sin el encabezado que no intereza