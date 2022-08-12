const resultList = document.getElementById('result-list')
const searchField = document.getElementById('search-field')
const filterRegion = document.getElementById('filter-region')
const searchBtn = document.getElementById('search-btn')
const resetSearchBtn = document.getElementById('reset-search')
const API_URL = 'https://restcountries.com/v3.1';




searchField.addEventListener('keypress', (event)=>{
    console.log(event)
    if(event.keyCode === 13){
        searchCountries()
    }
})












getAllCountries()

filterRegion.addEventListener('change', ()=>{
    if(filterRegion.value === 'all'){
        getAllCountries()
    }else{
        filterByRegion()
    }
})

searchBtn.addEventListener('click', ()=>{
    searchCountries()
})

resetSearchBtn.addEventListener('click',()=>{
    getAllCountries()
})

function searchCountries(){
    fetch(`${API_URL}/name/${searchField.value}`)
        .then(res => res.json())
        .then(countries => {
            resultList.innerHTML = ''

            if(countries.status === 404){
                resultList.innerText = 'Not found!'
            }else{
                countries.forEach(country=>{
                    createCountryCard(country)
                })
            }

        })
}

function getAllCountries(){
    fetch(`${API_URL}/all`)
        .then(res => res.json())
        .then(countries =>{
            resultList.innerHTML = ''
            searchField.value = ''
            countries.forEach(country => {
                createCountryCard(country)
            });
        })
}

function filterByRegion(){
    fetch(`${API_URL}/region/${filterRegion.value}`)
        .then(res => res.json())
        .then(countries =>{
            console.log('FILTIRANI PRIKAZ',countries)
            resultList.innerHTML = ''
            countries.forEach(country=>{
                createCountryCard(country)
            })
        })
}

function createCountryCard(country){
    // Card
    const card = document.createElement('section')
    card.classList = 'bg-white border min-h-[400px]'

    // Flag
    const flag = document.createElement('img')
    flag.setAttribute('src', country.flags.png)
    flag.classList = 'w-full'
    // Name
    const name = document.createElement('h2')
    name.innerText = country.name.official;
    name.classList = 'text-lg font-bold px-5 mt-4 mb-2'
    // Population
    const population = document.createElement('span')
    population.innerText = `Population: ${country.population}`
    population.classList = 'block px-5 text-sm'
    // Region
    const region = document.createElement('span')
    region.innerText = `Region: ${country.region}`
    region.classList = 'block px-5 text-sm'
    // Capital
    const capital = document.createElement('span')
    // if(country.capital){
    //     capital.innerText = `Capital: ${country.capital[0]}`
    // }
    capital.innerText = `Capital: ${country.capital ? country.capital[0] : '' }`
    capital.classList = 'block px-5 text-sm'

    // Append to card
    card.appendChild(flag)
    card.appendChild(name)
    card.appendChild(population)
    card.appendChild(region)
    card.appendChild(capital)

    // Append card to results
    resultList.appendChild(card)
}

