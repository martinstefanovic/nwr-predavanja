// API
const API_URL = 'https://dummyjson.com'
// HTML Elements
const allProductsElement = document.getElementById('all-products')
const productPopupElement = document.getElementById('product-popup')
// Buttons
const closePopupButton = document.getElementById('close-popup')

getAllProducts()

// Get all products from API
function getAllProducts(){
    fetch(`${API_URL}/products`)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            data.products.forEach(singleProduct => {
                createProductCard(singleProduct)
            });
        })
}

function createProductCard(product){
    // Product card 
    const productCard = document.createElement('div')
    productCard.classList = 'm-4 p-4 border w-[270px] flex flex-col items-center h-[250px]'
    productCard.setAttribute('data-productid', product.id)
    productCard.addEventListener('click', (event)=>{
        console.log(event.target.getAttribute('data-productid'))
        togglePopup()
    })
    // Product image
    const img = document.createElement('img')
    img.setAttribute('src', product.thumbnail)
    img.classList = 'h-[120px]'
    // Product title
    const title = document.createElement('h2')
    title.innerText = product.title
    title.classList = ' mt-6 font-medium text-center'
    // Product price
    const price = document.createElement('h3')
    price.innerText = product.price
    price.classList = 'bg-rose-500 text-white px-2 mt-1 font-medium'

    // Append info to product card
    productCard.appendChild(img)
    productCard.appendChild(title)
    productCard.appendChild(price)

    // Append product card to all products container
    allProductsElement.appendChild(productCard)

}

function togglePopup(){
    productPopupElement.classList.toggle('hidden')
}

/**
 * ==============================
 * *      Event listeners
 * ==============================
 */

closePopupButton.addEventListener('click', ()=>{
    togglePopup()
})