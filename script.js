// Get Submit Button -------------------------------------
const XaddButton = document.querySelector("#XaddButton");
console.log(`[FOUND] ${XaddButton}`);

// Define Function ---------------------------------------
function XaddListItem(event){
  event.preventDefault();
  console.log("[BUTTON CLICKED]");

// Get the value inside the input box
  const XtodoInputVALUE = document.querySelector("#XtodoInputBox").value;
  console.log(`[DATA FOUND] ${XtodoInputVALUE}`);

// Create a new input element and make it a checkbox
  const XtodoCheckbox = document.createElement("input");
  XtodoCheckbox.type = "checkbox";

// Create a new <div> to hold the input text
  const XtodoTextLI = document.createElement("div");
  XtodoTextLI.textContent = XtodoInputVALUE;

// Create a new <li> and give it a class name
  const XtodoDisplayLI = document.createElement("li");
  XtodoDisplayLI.className = "XtodoDisplayLI";

// Define the <li> text content as the content of the input box
  XtodoDisplayLI.appendChild(XtodoCheckbox);
  XtodoDisplayLI.appendChild(XtodoTextLI);

// Create a reference point to the <ul>
  const XtodoDisplayUL = document.querySelector("#XtodoDisplayUL");

// Add the newly created <li> into the <ul>
  XtodoDisplayUL.appendChild(XtodoDisplayLI);

}

// Set up trigger that makes the button work -------------
XaddButton.addEventListener("click", XaddListItem);