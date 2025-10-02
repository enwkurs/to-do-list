# Structure Planning

Making a to-do list with the following features:
1. Input box for typing in list items
2. Submit button that adds list items from the input box to a display
3. Display area that shows added list items with a checkbox next to each item

## HTML Elements

HTML elements needed:
- Form - Wraps the entire form and defines it as a form
    - Labels - Each input element needs a label defining which part of the form it is
        - Input Box
    - Submit Button
        - `Does Submit Button need a label?`
            - No because the Submit Button text is its own label. For code reference it has an `id="name"`
        - `Does Submit Button need a name="">`
    - Container for displaying List Items
        - `<li>` - Each new item comes in as `<li>`
        - `<div>`- Each new item comes in as `<p>`
        - What makes the most sense semantically?
        - What makes the most sense for styling? `<li>`

## Javascript Structure

Decide what functionality you want and build the script starting with the trigger.

**Desired Functionality:** When the Submit Button is clicked, add the content from the input box to a list of items.
1.  Get the submit button with a `querySelector`
2. Set a skeleton function up
3. Define how the function will be triggered with `addEventListener` applied to the Submit Button, listening for `"click"`

**What is needed to function:** What needs to be included in the function in order for things to work as planned?
- Bring in the input box
    - Specify that it is the VALUE inside the input box that is needed
- The VALUE from the input box needs to be added as a new `<li>` element.
    - A NEW `<input type="checkbox">` element needs to be added inside of that `<li>` BEFORE the input box VALUE.

# ID Names
Quick identifier for my own naming: X

- XtodoForm - Name of the whole form
- XtodoInputBox - Label and ID for the text input box
- XtodoInputBoxV - JAVASCRIPT representation of the content inside XtodoInputBox
- XaddButton - ID for the Submit Button
- XtodoDisplay - ID for the `<ul>` that will hold each of the list items
- XaddListItem - The function that happens when the button is pressed
- XlistItemMake - JAVASCRIPT name for the creation of a new `<li>`
- XlistItem - The class name assigned to `<li class="XlistItem">`
- XlistCheck - JAVASCRIPT name for the creation of a new checkbox
- XlistItemLi - JAVASCRIPT name referring to the `<li>` that gets created by the script

# Javascript Syntax
```javascript
const XaddButton = document.querySelector("#XaddButton");
```
- ***const XaddButton*** : In this script there will be a constant called XaddButton
- **=** : This constant will be / will contain / is equal to
- **document** : From the HTML document
- **.querySelector** : Select an element
- **("#XaddButton");** : With `id="XaddButton"`
- Every time this constant (XaddButton) is used in this script, it will point to the element with `id="XaddButton"` in the HTML

```javascript
XaddButton.addEventListener("click", XaddListItem);
```
- **XaddButton** : On the const XaddButton
- **.addEventListener** : add an event listener
- **("click",** : The event type is a click
- **XaddListItem);** : The function `XaddListItem` happens on this event

```javascript
XlistItem.textContent = XtodoInputBoxV;
```
- **XlistItemMake** : When the element `<li>` is made,
- **.textContent** : the text content inside the element
- **=** : is
- **XtodoInputBoxV** : the content defined by the constant `XtodoInputBoxV`
    - `XtodoinputBox.value` - The value inside of the input box