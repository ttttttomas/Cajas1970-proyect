const dom = (element)=>{
return document.getElementById(element)
}
const divProducts = dom("box-products-wrapper")
const title = dom("title")
const aside = dom("aside-filters")
const btns = document.querySelectorAll(".filters")

let products = [
  {
      "img": "./img/fotoscajas/BOX/box.jpg",
      "title": "BOX",
      "medida": "",
      "categoria": "box",
      "id" : "desayuno"
    },
    {
      "img": "./img/fotoscajas/BOX/box 20x20x10.jpg",
      "title": "BOX",
      "medida": "20x20x10",
      "categoria": "box",
      "id" : "desayuno"
    },
    {
      "img": "./img/fotoscajas/BOX/box 25x12x7.jpg",
      "title": "BOX",
      "medida": "25x12x7",
      "categoria": "box",
      "id" : "desayuno"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "macarron"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "torta"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "torta"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "maletines"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "maletines"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "cupcake"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "cupcake"
    }
]
const uploadProducts = (productosElegidos) => {

    divProducts.innerHTML = ""

    productosElegidos.map(product=>{

        const div = document.createElement("div");
        div.classList.add("box-product")
        div.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <p class="title">${product.title}</p>
        <p class="medida">${product.medida}</p>
        `
        divProducts.append(div);
})
}
uploadProducts(products)

btns.forEach(btn =>{
  btn.addEventListener("click", (e) => {

    btns.forEach(btn => btn.classList.remove("active"))
    e.currentTarget.classList.add("active")

    if (e.currentTarget.id != "todos") {
      const titleCategory = products.find(producto =>
        producto.id === e.currentTarget.id)
        console.log(titleCategory.id)
      title.innerText = titleCategory.id;
      const productosFiltrados = products.filter(producto =>
        producto.id === e.currentTarget.id)
        uploadProducts(productosFiltrados)
    }
    else{
      uploadProducts(products)
    }
  })
})
