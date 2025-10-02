// ====================== Get / Hent ======================
// GET the submit button, and bring it into the code

const addItemButton = document.querySelector("#addItemButton");
console.log(addItemButton + "[FOUND]");


// ====================== Modify ======================
// Make functions that modify the data

function getInput(){
  // Log when the function is triggered
  console.log("[BUTTON CLICKED]")

  // =========== Start defining what happens on trigger:

  // Define which element to GET data from
  const todoInput = document.querySelector("#todoInput");
  // Define what name to call the data, and that you want the VALUE in that element
  const todoInputValue = todoInput.value;
  console.log(`[DATA ACQUIRED] ${todoInputValue}`);

  // =========== Display the collected data on the webpage: 

  // Define the name of and what kind of HTML element is to be created
  const outputListItem = document.createElement("li");
  outputListItem.className = "listItem";

  const outputCheckbox = document.createElement("input"); // Element type is an input
  outputCheckbox.type = "checkbox"; // input type is a checkbox

  // Name the data to be displayed and where it is taken from ( GET is from line 20  )
  // outputListItem.textContent = todoInputValue;
  const outputListItemText = document.createTextNode(todoInputValue);


  // Add the new elements to the HTML - THIS ALL ADDS IT TO THE LI, but still need to add the created LI to the UL
  outputListItem.appendChild(outputCheckbox);
  outputListItem.appendChild(outputListItemText);

  // Definte where the new HTML element will be displayed
  const todoList = document.querySelector('#todoList');

  todoList.appendChild(outputListItem);

  todoInput.value = ''; // replaced todo VALUE with an empty STRING


}


// =========== Send / Execute functionality ===========

addItemButton.addEventListener("click", getInput);
