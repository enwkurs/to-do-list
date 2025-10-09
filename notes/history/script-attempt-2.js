// Get Submit Button -------------------------------------
const XaddButton = document.querySelector("#XaddButton");
console.log(`[FOUND] ${XaddButton}`);

// Define Function ---------------------------------------
function XaddListItem(event){
  event.preventDefault();
  console.log("[BUTTON CLICKED]");

// Get the value inside the input box
  const XtodoInputBoxV = document.querySelector("#XtodoInputBox").value;



// Create a new <li> 
  const XlistItemMake = document.createElement("li");
  XlistItemMake.className = "XlistItem";

// Define the li content as the content of the input box
  XlistItemMake.textContent = XtodoInputBoxV;



// Create a new checkbox element
  const XlistCheck = document.createElement("input");
  XlistCheck.type = "checkbox";



// Create a reference point to the <ul> and <li> elements
  const XtodoDisplay = document.querySelector("#XtodoDisplay");
  const XlistItemLi = document.querySelector(".XlistItem");



// Add the newly created checkbox into the <li>
  XlistItemLi.appendChild(XlistCheck);



// Add the newly created <li> into the <ul>
  XtodoDisplay.appendChild(XlistItemMake);

}

// Set up trigger that makes the button work -------------
XaddButton.addEventListener("click", XaddListItem);