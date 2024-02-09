let url = new URLSearchParams(document.location.search);
const params = url.get("id");

//  ***************************

let elCheckProductImage = document.querySelector('.check-product-img')
let elCheckProductTitle = document.querySelector('.check-product-title')
let elCheckProductDesc = document.querySelector('.check-product-desc')
let elCheckProductRating = document.querySelector('.check-product-rating')
let elCheckProductCount = document.querySelector('.check-product-count')
console.log(elCheckProductImage);

fetch(`https://fakestoreapi.com/products/${params}`)
.then(response => response.json())
.then((data) => {
    elCheckProductImage.src = data.image
    elCheckProductTitle.textContent = data.title
    elCheckProductDesc.textContent = data.description
    elCheckProductRating.textContent = data.rating.rate
    elCheckProductCount.textContent = data.rating.count
})



