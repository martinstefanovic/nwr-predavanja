const inputName = document.getElementById('item-name')
const inputPrice = document.getElementById('item-price')
const inputDescription = document.getElementById('item-description')
const addProductBtn = document.getElementById('add-product-btn')
const API_URL = 'https://dummyjson.com'
const toastMessage = document.getElementById('toast-succes')


addProductBtn.addEventListener('click', ()=>{
    const product = {
        title: inputName.value,
        price: inputPrice.value,
        description: inputDescription.value
    }

    addProduct(product)

})


function addProduct(product){
    fetch(`${API_URL}/products/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(product=>{
        console.log(product)
        if(product.id){
            toastMessage.classList.toggle('hidden')
            clearForm()
        }
    });
}

function clearForm(){
    inputName.value = ''
    inputPrice.value = ''
    inputDescription.value = ''
}