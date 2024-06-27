const dom = (element)=>{return document.getElementById(element)}

const divProducts = dom("box-products-wrapper")
const title = dom("title")
const aside = dom("aside-filters")
const btns = document.querySelectorAll(".filters")

let products = [
  {
      "img": "./img/fotoscajas/BOX/box.png",
      "title": "BOX",
      "medida": "19x12x9 | 24x16x10 | 24x14x12",
      "categoria": "box",
      "id" : "BOX"
    },
    {
      "img": "./img/fotoscajas/BOX/box 20x20x10.png",
      "title": "BOX",
      "medida": "20x20x10",
      "categoria": "box",
      "id" : "BOX"
    },
    {
      "img": "./img/fotoscajas/BOX/box 25x12x7.png",
      "title": "BOX",
      "medida": "25x20x7 | 25x12x7",
      "categoria": "box",
      "id" : "BOX"
    },
    {
      "img": "./img/fotoscajas/BOX/Box ",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "MACARRON"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "TORTA"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "TORTA"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "MALETINES"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "MALETINES"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "DRIPS"
    },
    {
      "img": "D",
      "title": "Frank Herbert",
      "medida": "1965",
      "categoria": "box",
      "id" : "CUPCAKE"
    },
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
      const titleCategory = products.find(product =>
         e.currentTarget.id === product.id);
      title.innerText = titleCategory.id;

      const productosFiltrados = products.filter(product =>
         product.id === e.currentTarget.id);
      uploadProducts(productosFiltrados)
    }
    else{
      uploadProducts(products)
      title.innerText = "TODOS NUESTROS PRODUCTOS"
    }
  })
})
