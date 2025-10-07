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
  XtodoCheckbox.id = "XtodoCheckboxElement";
// Add event listening to detect change in checkbox state
  XtodoCheckbox.addEventListener("change", XtodoStrike);

// Create a new <div> to hold the input text
  const XtodoTextLI = document.createElement("div");
  XtodoTextLI.textContent = XtodoInputVALUE;
  XtodoTextLI.className = "XtodoTextLI";
  XtodoTextLI.addEventListener("change", XtodoStrike);

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


// LIST TOGGLE FUNCTION
// Working with XtodoCheckbox JS , XtodoCheckboxElement element class, .strike CSS

// Create a reference point to a checkbox
const XtodoCheckboxElement = document.querySelector(".XtodoCheckboxElement");
const XtodoTextLI = document.querySelector(".XtodoTextLI");

// Define a function to happen when the state of the checkbox changes
  function XtodoStrike(event) {
    event.preventDefault();

    if (event.target.checked) {
      console.log("Checkbox is checked.")

      XtodoTextLI.classList.add("strike")
    } else {
      console.log("Checkbox is unchecked")
    };
  }

