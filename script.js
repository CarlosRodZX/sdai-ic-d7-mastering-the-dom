// Write your JavaScript code below this line. 
const mainTitle = document.querySelector("#main-title") //selected element in line 13
mainTitle.textContent = "Welcome to Our Cat Adoption Center"

const description = document.querySelector("#description")
description.textContent = "Find your purrfect companion!"



const cat1Button = document.getElementById("cat-1-button")
cat1Button.addEventListener("click", () => {
    console.log('clicked the first cat')
    const cat = document.getElementById("cat-1")
    alert('Congrats on adopting your new friend!')
    cat.remove()
})


const cat2Button = document.getElementById("cat-2-button")
cat2Button.addEventListener("click" , () => {
    console.log('Clicked the second cat')
})


const cat3Button = document.getElementById("cat-3-button")
cat3Button.addEventListener("click" , () => {
    console.log('Clicked the third Cat')
})

