// Dom Manipulation (5 tasks)
//Task 1: Change paragraph text
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("myParagraph").textContent = "DOM manipulation is fun!"
})

//Task 2: Add image to DOM
const img = document.createElement("img")
img.src = "data:image/jpeg;base64,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"
document.getElementById("imageContainer").appendChild(img)

//Task 3: Create a List of Items
let newItem = 0
document.getElementById("addItemButton").addEventListener("click", () => {
    newItem++
    const li = document.createElement("li")
    li.textContent = `Item ${newItem}`
    document.getElementById("itemList").appendChild(li)
})

//Task 4 Style Elements using Java
document.getElementById("styleDiv").style.backgroundColor = "black"
document.getElementById("styleDiv").style.color =  "red"

//Task 5: Remove Element from Dom
document.getElementById("removeButton").addEventListener("click", () =>{
    const paragraph = document.getElementById("removePara")
    paragraph.remove()
})


//Event Handlers (2 Tasks)

//Task 6: Button Click
document.getElementById("clickMe").addEventListener("click", function(){
    this.textContent = "Button Clicked!"
})

//Task 7: Change Input Value
document.getElementById("newButton").addEventListener("click", () =>{
    document.getElementById("myInput").value = "New Value!"
})


//Switch Statements(2 Tasks)

//Task 8: Day of the Week
document.getElementById("checkDayButton").addEventListener("click", () =>{
    const dayNumber = parseInt(document.getElementById("dayInput").value)
    let dayName;

    switch (dayNumber) {
        case 1: dayName = "Monday"; break
        case 2: dayName = "Tuesday"; break
        case 3: dayName = "Wednesday"; break
        case 4: dayName = "Thursday"; break
        case 5: dayName = "Friday"; break
        case 6: dayName = "Saturday"; break
        case 7: dayName = "Sunday"; break
        default: dayName = "Invalid input"; break
    }
    document.getElementById("dayOutput").textContent = dayName
})
//Task 9: Fruit Switch Statement
document.getElementById("checkFruit").addEventListener("click", () => {
    const fruit = document.getElementById("fruitInput").value.toLowerCase();
    let message; 

    switch (fruit) {
        case "apple": message = "Apple is red"; break
        case "banana": message = "Banana is yellow"; break
        case "Pumpkin": message = "Pumpkin is orange"; break
        default: message = "Invalid Input"; break
    }
document.getElementById("fruitOutput").textContent = message
})

//If-Else statements (2 tasks)

//Task 10: Number Comparison
document.getElementById("compareButton").addEventListener("click", () => {
    const num1 = parseInt(document.getElementById("firstNumber").value)
    const num2 = parseInt(document.getElementById("secondNumber").value)
    let result;
        if (num1 > num2) {
            result = "First number is greater"
        } else if (num1 < num2) {
            result = "Second number is greater"
        } else {
            result = "Numbers are equal"
        }
    document.getElementById("compareOutput").textContent = result
})

//Task 11: Even or Odd
document.getElementById("checkOddEvenButton").addEventListener("click", () => {
    const number = parseInt(document.getElementById("numberInput").value)
    let outcome;
        if (number % 2 == 0) {
            outcome = "Even"
        } else {
            outcome = "Odd"
        }
    document.getElementById("oddOrEven").textContent = outcome
})


