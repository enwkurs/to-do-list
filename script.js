// Get Submit Button -------------------------------------
const XaddButton = document.querySelector("#XaddButton");
console.log(`[FOUND] ${XaddButton}`);

// Define Function ---------------------------------------
function XaddListItem(event){
  event.preventDefault();
  console.log("[BUTTON CLICKED]");

// Get the value inside the input box
  const XtodoInputBOX = document.querySelector("#XtodoInputBox");
  const XtodoInputVALUE = XtodoInputBOX.value;
  console.log(`[DATA FOUND] ${XtodoInputVALUE}`);

// Create a new <li> and give it a class name
  const XtodoDisplayLI = document.createElement("li");
  XtodoDisplayLI.className = "XtodoDisplayLI";

// Create a new <div> to hold the input text
  const XtodoTextDIV = document.createElement("div");
// Define the <div> text content as the content of the input box
  XtodoTextDIV.textContent = XtodoInputVALUE;
  XtodoTextDIV.className = "XtodoTextDIV";

// Create a new input element and make it a checkbox
  const XtodoCheckbox = document.createElement("input");
  XtodoCheckbox.type = "checkbox";
  XtodoCheckbox.id = "XtodoCheckboxElement";

// Create a new <span> to become the custom checkbox
  const customBox = document.createElement("span");
  customBox.className = "customBox";

// Add event listener to detect change in checkbox state
// Define a function to happen when the state of the checkbox changes
  XtodoCheckbox.addEventListener("change", function (event) {
    console.log("[CHECKBOX] Changed state");

    if (event.target.checked) {
      XtodoTextDIV.classList.add("strike")
      XtodoDisplayLI.classList.add("fade")
      customBox.classList.add("customBoxChecked")
      customBox.textContent = "✓"

    } else {
      XtodoTextDIV.classList.remove("strike")
      XtodoDisplayLI.classList.remove("fade")
      customBox.classList.remove("customBoxChecked")
      customBox.textContent = ""
    }
  });

// Create a new input element and make it a button
  const XremoveButton = document.createElement("button");
  XremoveButton.textContent = "X";
  XremoveButton.className = "formButton";
  XremoveButton.id = "XremoveButton";
  // Add event listening to detect when the button is clicked
  // Define a function to happen when the button is clicked
  XremoveButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("[REMOVE BUTTON] Button Clicked.");

  XtodoDisplayLI.remove();

  });

// Create a reference point to the <ul>
  const XtodoDisplayUL = document.querySelector("#XtodoDisplayUL");

// Add the newly created <li> into the <ul>
  XtodoDisplayUL.appendChild(XtodoDisplayLI);

// Append Elements
  XtodoDisplayLI.appendChild(XtodoCheckbox);
  XtodoDisplayLI.appendChild(customBox);
  XtodoDisplayLI.appendChild(XtodoTextDIV);
  XtodoDisplayLI.appendChild(XremoveButton);

// Reset the input box
XtodoInputBOX.value = "";
}

// Set up trigger that makes the button work -------------
XaddButton.addEventListener("click", XaddListItem);