class MyCar{

    constructor(image,left, top){
        /**
         * Initialization
         */
        this.left = left
        this.top = top

        /**
         * Create car and append to body
         */
        this.car = document.createElement('div')
        this.car.setAttribute('class','my-car')
        this.car.style.backgroundImage = `url(${image})`
        this.car.style.left = this.left
        this.car.style.top = this.top
        document.body.appendChild(this.car)

        /**
         * Event listener for change
         */
        this.car.addEventListener('click',(event)=>{
            this.changeCar()
        })
    }

    goRight(){
        this.left = this.left + 10
        if(this.left < window.innerWidth -90){
            this.car.style.left = this.left
            this.car.style.transform = 'rotate(180deg)'
        }
    }

    goLeft(){
        this.left = this.left - 10
        if(this.left >= 0){
            this.car.style.left = this.left
            this.car.style.transform = 'rotate(0deg)'
        }
    }

    goUp(){
        this.top = this.top - 10

        if(this.top >= 0){
            this.car.style.top = this.top
            this.car.style.transform = 'rotate(90deg)'
        }
    }

    goDown(){
        this.top = this.top + 10
        if(this.top < window.innerHeight -90){
            this.car.style.top = this.top
            this.car.style.transform = 'rotate(270deg)'
        }
    }

    changeCar(){
        this.car.style.backgroundImage = 'url(car2.jpg)'
    }

}

let car = new MyCar('car.png',0,0)
// let carTwo = new MyCar('car2.jpg', 100, 100)


/**
 * Event listener
 */
document.addEventListener('keydown', (event)=>{
    let keyName = event.key
    if(keyName === 'ArrowRight'){
        car.goRight()
    }
    if(keyName === 'ArrowLeft'){
        car.goLeft()
    }
    if(keyName === 'ArrowUp'){
        car.goUp()
    }
    if(keyName === 'ArrowDown'){
        car.goDown()
    }
})

