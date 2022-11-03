document.addEventListener("DOMContentLoaded", () => {

// grab element 
const form = document.querySelector("#create-task-form");
const userInput = document.querySelector("#new-task-description");
const ul = document.querySelector("#tasks");
// create elements to add to our ul
// get elements 
// get input values 
document.addEventListener("submit", (event) => {
    // getting user input
    event.preventDefault();
    const myLi = document.createElement("li");
    const deleteMe = document.createElement("button");
    myLi.textContent = userInput.value; 
    deleteMe.textContent = "X";
    ul.appendChild(myLi);
    myLi.append(deleteMe);
    userInput.value = ""
    deleteMe.addEventListener("click", (event) => myLi.remove())
    
})

});




