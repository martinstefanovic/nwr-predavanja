

function modal(options){
    const modal = document.createElement('div')
    modal.setAttribute('id', options.modalId)
    modal.classList = 'hidden p-4 bg-white min-w-[300px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
    modal.innerText = options.title;

    // Open modal
    const openBtn = document.getElementById(options.selector)
    openBtn.addEventListener('click', ()=>{
        modal.classList.toggle('hidden')
    })

    // Append modal to body
    document.body.appendChild(modal)

}

modal({
    modalId: 'my-modal',
    selector: 'open-modal',
    title: 'Are you sure?',
    text: 'All your data will be deleted...',
    buttons: [
        {
            title: 'Cancel',
            classes: 'text-black border p-2',
            callback: () => { 
                // ZATVARANJE MODALA
            }
        },
        {
            title: 'Yes, I\'m sure',
            classes: 'text-black border p-2',
            callback: () => { console.log('delete system32'); }
        }
    ]
})









/**
 * * ==================================
 * *              DOMAĆI
 * * ==================================
 */

// * ZADATAK: Kreirati preko JavaScript-a komponentu koja izgleda kao na slici
// * Sva konfiguracija prosledjuje se kroz objekat kao parametar funkcije
// ? Link do dizajna: https://allma.si/blog/wp-content/uploads/2021/09/timeline-component-design.png

// * Primer poziva funkcije:
timeline([
    {
        title: 'Eat',
        color: '#FFFFFF'
    },
    {
        title: 'Code',
        color: '#037ffc'
    },
    {
        title: 'Sleep',
        color: '#9d03fc'
    },
    {
        title: 'Repeat',
        color: '#fcca03'
    },
])


