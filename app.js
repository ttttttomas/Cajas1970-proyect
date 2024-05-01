const dom = (element)=>{
return document.getElementById(element)
}

let products = [];

fetch("./products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        cargarProductos(products);
    })
