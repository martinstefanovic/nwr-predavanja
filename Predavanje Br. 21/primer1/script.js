
/**
 * =================================
 * *           VARIABLES
 * =================================
 */

const API_URL = 'https://dummyjson.com'
const allProductsElement = document.getElementById('all-products')
const productPopupElement = document.getElementById('product-popup')
const closePopupButton = document.getElementById('close-popup')

/**
 * =================================
 * *      MAIN FUNCTIONALITY
 * =================================
 */

/**
 * * PAGINATION 
 */

const prev = document.getElementById('prev')
const next = document.getElementById('next')
let skip = 0
const perPage = 8
let totalProducts;

next.addEventListener('click', ()=>{
    skip += perPage
    skip = skip >= totalProducts ? totalProducts - perPage : skip
    
    allProductsElement.innerHTML = ''
    getAllProducts()
})
prev.addEventListener('click', ()=>{
    skip -= perPage
    skip = skip < 0 ? 0 : skip
    
    allProductsElement.innerHTML = ''
    getAllProducts()
})

/**
 *  END PAGINATION 
 */

getAllProducts()

/**
 * =================================
 * *        HELPER FUNCTIONS
 * =================================
 */

// Get all products from API
function getAllProducts(){
    fetch(`${API_URL}/products?limit=8&skip=${skip}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            totalProducts = data.total
            data.products.forEach(singleProduct => {
                createProductCard(singleProduct)
            });
        })
}

function createProductCard(product){
    // Product card 
    const productCard = document.createElement('div')
    productCard.classList = 'p-4 border flex flex-col items-center h-[270px] bg-white relative'
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
    title.classList = 'mt-3 font-medium text-center'
    // Product price
    const price = document.createElement('h3')
    price.innerText = `$${product.price}`
    price.classList = 'bg-slate-700 text-lg text-white px-2 font-medium absolute top-0'
    // Product price
    const btn = document.createElement('button')
    btn.innerText = `View more`
    btn.classList = 'bg-sky-100 hover:bg-sky-500 transition-all text-sky-500 hover:text-white px-2 py-2 w-full text-center absolute bottom-0 cursor-pointer'

    // Append info to product card
    productCard.appendChild(img)
    productCard.appendChild(title)
    productCard.appendChild(price)
    productCard.appendChild(btn)

    // Append product card to all products container
    allProductsElement.appendChild(productCard)
}

function togglePopup(){
    productPopupElement.classList.toggle('hidden')
}

/**
 * =================================
 * *        EVENT LISTENERS
 * =================================
 */

closePopupButton.addEventListener('click', ()=>{
    togglePopup()
})