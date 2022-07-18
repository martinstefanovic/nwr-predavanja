const cartListElement = document.getElementById('cart-list')
const API_URL = 'https://dummyjson.com';
const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) 

console.log(cartItemsFromLocalStorage)

cartItemsFromLocalStorage?.forEach(productId=>{
    getOneProduct(productId)
})

function getOneProduct(productId){
    fetch(`${API_URL}/products/${productId}`)
        .then(response => response.json())
        .then(singleProduct=>{
            console.log('OVO JE PROIZVOD',singleProduct)
            createCartItem(singleProduct)
        })
}

function createCartItem(product){
    // Cart item card
    const cartItemCard = document.createElement('div')
    // Item img
    const itemImg = document.createElement('img')
    itemImg.setAttribute('src',product.thumbnail )
    // Item title
    const itemTitle = document.createElement('h2')
    itemTitle.innerText = product.title


    // Append to item card
    cartItemCard.appendChild(itemImg)
    cartItemCard.appendChild(itemTitle)

    // Append card to cart list
    cartListElement.appendChild(cartItemCard)

}