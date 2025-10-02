# Clearing the input box
**todoInputValue** = What is currently typed in the input box

**outputListItem** = The name of **todoInputValue** when it is inserted as `<li>` in the HTML


**todoResetPlaceholder** = The name of what is currently in the `placeholder="Text"` of the input box


Initial thought - remove **todoInputValue** and replace it with **todoResetPlaceholder**

HOWEVER

Simply removing any text from the input box causes the placeholder to display, so there is no need to replace or otherwise insert it. It is not necessary to grab or define the placeholder in the script.

So then how do you remove **todoInputValue**?

- <https://www.w3schools.com/jsref/met_element_remove.asp>
    > The remove() method removes an element (or node) from the document.

    ```javascript
    const element = document.getElementById("demo");
    element.remove();
    ```

  - ^ remove() is for removing ELEMENTS not STRINGS
  - A value is a string


- <https://chatgpt.com/s/t_68dd3c3133fc8191a2b311de52109110>
    > If your goal is to clear the input after adding a todo, you should set the value to an empty string:

    ```javascript
    const todoInput = document.getElementById('todo');
    todoInput.value = ''; // ✅ clears the input
    ```
---
<br>

# Checkboxes

```html
<input type="checkbox">
```

Adding an checkbox element makes one appear on the page that can be checked and unchecked.

How to take the checkbox and make it appear next to **outputListItem**?

Can the bullet point of an `<li>` be replaced with a checkbox?

First in CSS remove the default bullet
`list-style-type: none;`

Can I somehow smash input type=checkbox to be a part of `const todoInputValue = todoInput.value;`?

Maybe not because a checkbox is an element, which would need to be created via `.createElement` ?

~~can it be mashed into `const outputListItem = document.createElement("li");`?~~

use multiple `.createElement`, but then how to make both created elements appear inside of `<ul>`?



The document.createElement() function only takes the tag name, not attributes.



## ~~Currently Functioning:~~ Fixed this issue
```javascript
  // Define the name of and what kind of HTML element is to be created
  const outputListItem = document.createElement("li");
  const outputCheckbox = document.createElement("input"); // Element type is an input
  outputCheckbox.type = "checkbox"; // input type is a checkbox

  // Definte where the new HTML element will be displayed
  const todoList = document.querySelector('#todoList');

  // Name the data to be displayed and where it is taken from ( GET is from line 20  )
  
  outputListItem.textContent = todoInputValue;

  // Add the new element to the HTML
  todoList.appendChild(outputListItem);
  todoList.appendChild(outputCheckbox);
  todoInput.value = ''; // replaced todo VALUE with an empty STRING
  ```

  This works in the sense that the checkbox appears, but it is not inside the `<li>` element. It appears before or after it depeneding on its positioning in the code.

  How to get the checkbox inside of a `<li>` that is being created by javascript?

  use js to assign a class to the `<li>` and then select that class with a queryselector?

  ```javascript
    const outputListItem = document.createElement("li");
    // and then ?
    outputListItem.class = "listItem";
```

then make a new thing like todoCheckbox to tell it where to put the checkbox, and tell that to use listItem?


This so far has worked but it keeps putting the checkbox only on the first li with the class listItem, i think because DOM? Maybe i need to use getelement?

>script.js:47 Uncaught TypeError: todoCheckbox.appendChild is not a function
    at HTMLButtonElement.getInput

???
