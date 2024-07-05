const dom = (element)=>{return document.getElementById(element)}

const divProducts = dom("box-products-wrapper")
const title = dom("title")
const aside = dom("aside-filters")
const btns = document.querySelectorAll(".filters")

let products = [
  {
    "img": "./img/fotoscajas/maletin/maletin 5.png",
    "title": "Budinera",
    "medida": "23x8.5x8.5 | 24x10x10",
    "categoria": "box",
    "id" : "BOX"
  },
  {
      "img": "./img/fotoscajas/BOX/box.png",
      "title": "Box",
      "medida": "19x12x9 | 24x16x10 | 24x14x12",
      "categoria": "box",
      "id" : "BOX"
    },
    {
      "img": "./img/fotoscajas/BOX/box 20x20x10.png",
      "title": "Box",
      "medida": "20x20x10",
      "categoria": "box",
      "id" : "BOX"
    },
    {
      "img": "./img/fotoscajas/BOX/box 25x12x7.png",
      "title": "Box",
      "medida": "25x20x7",
      "categoria": "box",
      "id" : "BOX"
    },
    {
      "img": "./img/fotoscajas/tapa y caja/Cajatapa1.png",
      "title": "Tapa y caja",
      "medida": "25x25x10 | 25x25x15 | 32x25x10",
      "categoria": "box",
      "id" : "TAPA Y CAJA"
    },
    {
      "img": "./img/fotoscajas/tapa y caja/tapacaja2.png",
      "title": "Tapa y caja",
      "medida": "25x25x10 | 25x25x15 | 32x25x10",
      "categoria": "box",
      "id" : "TAPA Y CAJA"
    },
    {
      "img": "./img/fotoscajas/tapa y caja/tapacaja3.png",
      "title": "Tapa y caja",
      "medida": "25x25x10 | 25x25x15 | 32x25x10",
      "categoria": "box",
      "id" : "TAPA Y CAJA"
    },
    {
      "img": "./img/fotoscajas/desayuno/desayuno2.png",
      "title": "Tapa y caja",
      "medida": "25x25x10 | 25x25x15 | 32x25x10",
      "categoria": "box",
      "id" : "DESAYUNO"
    },
    {
      "img": "./img/fotoscajas/desayuno/desayuno1.png",
      "title": "Desayuno",
      "medida": "25x25x12 | 30x30x12 | 36x26x12 | 42x32x12 | HEXAGONAL Ø 8",
      "categoria": "box",
      "id" : "DESAYUNO"
    },
    {
      "img": "./img/fotoscajas/desayuno/desayuno4.png",
      "title": "Desayuno",
      "medida": "25x25x12 | 30x30x12 | 36x26x12 | 42x32x12 | HEXAGONAL Ø 8",
      "categoria": "box",
      "id" : "DESAYUNO"
    },
    {
      "img": "./img/fotoscajas/deslizable/deslizable.png",
      "title": "Deslizables",
      "medida": "16x16x4 | 20x20x4 | 25x25x7 | 30x30x7",
      "categoria": "box",
      "id" : "DESLIZABLES"
    },
    {
      "img": "./img/fotoscajas/deslizable/Deslizables 1.png",
      "title": "Deslizables",
      "medida": "16x16x4 | 20x20x4 | 25x25x7 | 30x30x7",
      "categoria": "box",
      "id" : "DESLIZABLES"
    },
    {
      "img": "./img/fotoscajas/deslizable/deslizables2.png",
      "title": "Deslizables",
      "medida": "16x16x4 | 20x20x4 | 25x25x7 | 30x30x7",
      "categoria": "box",
      "id" : "DESLIZABLES"
    },
    {
      "img": "./img/fotoscajas/torta/torta1.png",
      "title": "Torta maletin",
      "medida": "16x16x4 | 20x20x4 | 25x25x7 | 30x30x7",
      "categoria": "box",
      "id" : "TORTA"
    },
    {
      "img": "./img/fotoscajas/torta/torta2.png",
      "title": "Torta maletin",
      "medida": "16x16x4 | 20x20x4 | 25x25x7 | 30x30x7",
      "categoria": "box",
      "id" : "TORTA"
    },
    {
      "img": "./img/TRANSPARENTE BG.png",
      "title": "",
      "medida": "16x16x15 | 16x16x20 | 20x20x15 | 20x20x20 | 25x25x15 </br> 25x25x25 | 25x25x40 | 30x30x15 | 30x30x25 | 30x30x40",
      "categoria": "box",
      "id" : "DRIPS"
    },
    {
      "img": "./img/fotoscajas/DRIP/Drip 3.png",
      "title": "Drips tapa transparente",
      "medida": "",
      "categoria": "DRIPS",
      "id" : "DRIPS"
    },
    {
      "img": "./img/fotoscajas/DRIP/Drip 2.png",
      "title": "Drips Exagonales",
      "medida": "28X25 | 28X40",
      "categoria": "DRIPS",
      "id" : "DRIPS"
    },
    {
      "img": "./img/fotoscajas/DRIP/Drips.png",
      "title": "DRIPS",
      "medida": "",
      "categoria": "box",
      "id" : "DRIPS"
    },
    {
      "img": "./img/fotoscajas/maletin/maletin1.png",
      "title": "Maletin",
      "medida": "16x16x18 | 14x14x17 | 17x10x15 | 25x14x13",
      "categoria": "MALETINES",
      "id" : "MALETINES"
    },
    {
      "img": "./img/fotoscajas/maletin/maletin2.png",
      "title": "Maletin",
      "medida": "16x16x18 | 14x14x17 | 17x10x15 | 25x14x13",
      "categoria": "MALETINES",
      "id" : "MALETINES"
    },
    {
      "img": "./img/fotoscajas/maletin/maletin3.png",
      "title": "Maletin",
      "medida": "16x16x18 | 14x14x17 | 17x10x15 | 25x14x13",
      "categoria": "MALETINES",
      "id" : "MALETINES"
    },
    {
      "img": "./img/fotoscajas/maletin/maletin4.png",
      "title": "Maletin",
      "medida": "16x16x18 | 14x14x17 | 17x10x15 | 25x14x13",
      "categoria": "MALETINES",
      "id" : "MALETINES"
    },
    {
      "img": "./img/fotoscajas/canasta/canasta1.png",
      "title": "Canasta",
      "medida": "12,5x12x5x4 | 15x15x5 | 22x12x5 | 27x27x10",
      "categoria": "Canasta",
      "id" : "CANASTA"
    },
    {
      "img": "./img/fotoscajas/canasta/canasta2.png",
      "title": "Canasta",
      "medida": "12,5x12x5x4 | 15x15x5 | 22x12x5 | 27x27x10",
      "categoria": "Canasta",
      "id" : "CANASTA"
    },
    {
      "img": "./img/fotoscajas/alfajores/alfajores1.png",
      "title": "Alfajores",
      "medida": "6 UNIDADES: 20x13,5x2,5 | 12 UNIDADES: 22x14x5",
      "categoria": "Alfajores",
      "id" : "ALFAJORES"
    }
    // ,
    // {
    //   "img": "./img/fotoscajas/bombones/bombones1.png",
    //   "title": "Bombones",
    //   "medida": "12,5x12x5x4 | 15x15x5 | 22x12x5 | 27x27x10",
    //   "categoria": "Bombones",
    //   "id" : "BOMBONES"
    // },
]

const productosFiltradosEnTodos = products.filter(product =>
  product.medida.length <= 57) 

const uploadProducts = (productosElegidos) => {

    divProducts.innerHTML = ""

    productosElegidos.map(product=>{
      
        let div = document.createElement("div");
        div.classList.add(`box-product`)
        div.classList.add()
        div.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <p class="title">${product.title}</p>
        <p class="medida">${product.medida}</p>
        `
        divProducts.append(div);

        if (product.medida.length > 57){

          div.classList.add("box-product-drip")
          div.innerHTML = `
          <p class="title">MEDIDAS DE DRIP</p>
            ${product.title} </br>
            ${product.medida}`
          divProducts.append(div);

        }
})

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
        uploadProducts(productosFiltradosEnTodos)
        title.innerText = "TODOS NUESTROS PRODUCTOS"
    }
  })
}
)
}
uploadProducts(productosFiltradosEnTodos)
