const dom = (element)=>{
return document.getElementById(element)
}

let products = []

fetch('./products.json')
  .then(response => response.json())
  .then(data => {
    products = data;
    (uploadProducts(products))
  });

const divProducts = dom("box-products-wrapper")
console.log(divProducts)


const uploadProducts = () => {

    products.map(product=>{

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
uploadProducts()
