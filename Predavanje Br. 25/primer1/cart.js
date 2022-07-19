const cartListElement = document.getElementById('cart-list')
const API_URL = 'https://dummyjson.com';
let cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) 


cartItemsFromLocalStorage?.forEach(productId=>{
    getOneProduct(productId)
})

function getOneProduct(productId){
    fetch(`${API_URL}/products/${productId}`)
        .then(response => response.json())
        .then(singleProduct=>{
            // console.log('OVO JE PROIZVOD',singleProduct)
            createCartItem(singleProduct)
        })
}

function createCartItem(product){
    // Cart item card
    const cartItemCard = document.createElement('div')
    cartItemCard.classList = 'flex items-center p-2 relative'
    // Item img
    const itemImg = document.createElement('img')
    itemImg.classList = 'w-[90px] h-auto'
    itemImg.setAttribute('src',product.thumbnail )
    // Item title
    const itemTitle = document.createElement('h2')
    itemTitle.innerText = product.title
    itemTitle.classList = 'font-medium ml-2'
    // Item price
    const itemPrice = document.createElement('span')
    itemPrice.innerText = product.price;
    itemPrice.classList = 'bg-slate-700 text-white font-medium block p-1 ml-5'
    // Delete item btn
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Remove';
    deleteBtn.classList = 'bg-rose-500 hover:bg-rose-600 text-white p-1 absolute right-0'
    deleteBtn.setAttribute('data-productid', product.id)
    deleteBtn.addEventListener('click', (event)=>{
        const productId = +event.target.getAttribute('data-productid')
        // Remove from array
        cartItemsFromLocalStorage = cartItemsFromLocalStorage
            .filter(product=>  product !== productId);
        // Set new value to local storage
        localStorage.setItem('cart', JSON.stringify(cartItemsFromLocalStorage))
        // Remove from HTML page
        event.target.parentElement.remove()
    })

    // Append to item card
    cartItemCard.appendChild(itemImg)
    cartItemCard.appendChild(itemTitle)
    cartItemCard.appendChild(itemPrice)
    cartItemCard.appendChild(deleteBtn)

    // Append card to cart list
    cartListElement.appendChild(cartItemCard)
}
