let API = 'https://fakestoreapi.com/products';

let elProductTemplate = document.querySelector('.product-template').content;
let elProductResult = document.querySelector('.product-result')

let renderProduct = (product) =>{

    let cloneProductTemplate = elProductTemplate.cloneNode(true);
    
    cloneProductTemplate.querySelector('.product-img').src = product.image
    cloneProductTemplate.querySelector('.product-title').textContent = `${product.title.slice(0,15)}`
    cloneProductTemplate.querySelector('.info-btn').dataset.productId = product.id;
    
    elProductResult.appendChild(cloneProductTemplate)
}

fetch(API)
.then((res)  => res.json())
.then((data) => data.forEach((product) => {

    renderProduct(product)
    
}))

elProductResult.addEventListener('click', (evt) => {

    evt.preventDefault();
    
    // console.log(evt.target.dataset.productId);
    
    const url = "http://127.0.0.1:5500/product.html?";
    let id;
    
    if(evt.target.matches('.info-btn')){
        id = evt.target.dataset.productId
        
    }
    
    const params = new URLSearchParams({ id });
    
    console.log(url + params);
    
    window.location.href = url + params;
    
})

let elProductSelect = document.querySelector('.product-select')

elProductSelect.addEventListener('click', (evt) => {

    elProductResult.innerHTML = null;
    
    evt.preventDefault();
    
    let productType =  evt.target.value;
    
    fetch(`https://fakestoreapi.com/products/category/${productType}`)
    .then((res) => res.json())
    .then((data) => data.forEach((product) => {
        renderProduct(product)
    }))
})