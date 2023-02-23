// localStorage bolum sonu egzersizi

let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click" ,toCLick)

decreaseDOM.addEventListener("click", toCLick)


function toCLick(){
    counter = new Number(counter)
    console.log(this.id)
    this.id == "increase" ? counter +=1 : counter -= 1
    localStorage.setItem('counter',counter)
    counterDOM.innerHTML = counter
    
    
}