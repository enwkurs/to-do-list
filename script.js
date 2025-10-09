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

// Create a new <li> and give it a class name
  const XtodoDisplayLI = document.createElement("li");
  XtodoDisplayLI.className = "XtodoDisplayLI";

// Create a new <div> to hold the input text
  const XtodoTextDIV = document.createElement("div");
// Define the <div> text content as the content of the input box
  XtodoTextDIV.textContent = XtodoInputVALUE;
  XtodoTextDIV.className = "XtodoTextDIV";
// XtodoTextDIV.addEventListener("change", XtodoStrike); REMOVE FOR NOW

// Create a new input element and make it a checkbox
  const XtodoCheckbox = document.createElement("input");
  XtodoCheckbox.type = "checkbox";
  XtodoCheckbox.id = "XtodoCheckboxElement";
// Add event listener to detect change in checkbox state
// Define a function to happen when the state of the checkbox changes
  XtodoCheckbox.addEventListener("change", function (event) {
    console.log("[CHECKBOX] Changed state");

    if (event.target.checked) {
      XtodoTextDIV.classList.add("strike")
    } else {
      XtodoTextDIV.classList.remove("strike")
    }
  });

// Create a reference point to the <ul>
  const XtodoDisplayUL = document.querySelector("#XtodoDisplayUL");

// Add the newly created <li> into the <ul>
  XtodoDisplayUL.appendChild(XtodoDisplayLI);

// Append Elements
  XtodoDisplayLI.appendChild(XtodoCheckbox);
  XtodoDisplayLI.appendChild(XtodoTextDIV);
}

// Set up trigger that makes the button work -------------
XaddButton.addEventListener("click", XaddListItem);