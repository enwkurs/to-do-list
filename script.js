// Get / Hent
// Get the Submit button

const addItemButton = document.querySelector("#addItemButton");
console.log(addItemButton + "[FOUND]");


// Modify 
// Make functions that modify the data

function getInput(){
  // Log when the function is triggered
  console.log("[BUTTON CLICKED]")

  // Start defining what happens on trigger:

  // Define where to Get data from
  const todoInput = document.querySelector("#todoInput");
  // Define what name to call the data, and where that data is found
  const todoInputValue = todoInput.value;
  console.log(`[DATA ACQUIRED] ${todoInputValue}`);

  // Display the collected data on the webpage: -------------------------

  // Define the name of and what kind of HTML element is to be created
  const outputListItem = document.createElement("li");

  // Definte where the data ( new HTML element ) will be displayed
  const todoList = document.querySelector('#todoList');

  // Name the data to be displayed and where it is taken from
  outputListItem.textContent = todoInputValue;

  // Define where the data is displayed and what data is displayed
  todoList.appendChild(outputListItem);

}

// Send / Execute functionality

addItemButton.addEventListener("click", getInput);