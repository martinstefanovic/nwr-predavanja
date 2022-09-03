
const star = document.getElementById('star')

const svg = star.getElementsByTagName('svg')

console.log(svg[0])

svg[0].setAttribute('stroke','red')



function createRating(options){
    // ...
}



// * VARIJANTA BR. 1

createRating({
    holder: 'primer-1',
    ratingNumber: 5
})


// * VARIJANTA BR. 2

createRating({
    holder: 'primer-2',
    ratingNumber: 5,
    icon: 'hearts',
    color: '#e26d75'
})


// * VARIJANTA BR. 3

createRating({
    holder: 'primer-3',
    ratingNumber: 10,
    color: '#4d7be9'
})


// * VARIJANTA BR. 4

createRating({
    holder: 'primer-4',
    ratingNumber: 5,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'
})











// ! DOMACI:
// * Kreirati komponentu po dizajnu sa slike.
// * Cela komponente se kreira iz JavaScript-a kroz konfiguraciju
// * DIZAJN: https://allma.si/blog/wp-content/uploads/2021/09/faq-component-design.png

// * Primer funkcije:

createFaq({
    holder: 'faq-section',
    questions: [
        {
            question: 'How does it work?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            open: true
        },
        {
            question: 'What are other pricing options?',
            answer: 'Lorem ipsum dolor sit amet consectetur elit.',
            open: false
        },
        {
            question: 'What are other pricing options?',
            answer: 'Lorem ipsum dolor sit amet consectetur elit.',
            open: false
        },
    ]
})