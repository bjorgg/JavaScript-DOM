// Getting elements from the DOM
const containerEl = document.querySelector(".container");
const listEl = document.getElementsByTagName("LI");

// My array of items
const items = ["Milk", "Cheese", "Cheerios"];

// Creating a clock and displaying it in the DOM
const timer = setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    const t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;
}

// Display the list items in the DOM
function displayListItemsInContainer() {
    // Clear container's content
    containerEl.innerHTML = "";
    // Populate container with items
    for (item of items) {
        // Create a new div containing the new item
        const newItem = document.createElement("li");
        newItem.innerHTML = item;
        // Add this item to container
        containerEl.appendChild(newItem);
    }
}
displayListItemsInContainer(); // Calling the function

// Create a close button and append it to each list item
for (let i = 0; i < items.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listEl[i].appendChild(span);
}

// Click on a close button to hide the current list item
function hideListItemOnCloseBtnClick() {
    const closeBtn = document.getElementsByClassName("close");
    for (let i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = () => {
            const liTag = closeBtn[i].parentElement;
            liTag.style.display = "none";
            console.log(liTag);
        };
    }
}
hideListItemOnCloseBtnClick(); // Calling the function

// Add a checked symbol when clicking on a list item and removing it when clicked again.
containerEl.addEventListener(
    "click",
    (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        }
    },
    false
);

// Adding a new item to the list from the input field and with the add button
function newElement() {
    const newLi = document.createElement("li");
    const inputValue = document.querySelector(".myInput").value;
    const txtNode = document.createTextNode(inputValue);
    newLi.appendChild(txtNode);
    if (inputValue === "") {
        alert("Write something!");
    } else {
        document.querySelector(".container").appendChild(newLi);
    }
    document.querySelector(".myInput").value = "";

    // Create a close button and append it to each new list item
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newLi.appendChild(span);

    // Calling the function above to click the close button and hide the current list item
    hideListItemOnCloseBtnClick();
}

// Clear the list by clicking on the "Clear list" button
// Also displaying a loading bar using setTimeout and jquery .show and .hide method.
function clearAll() {
    $('#loading-screen').show();
    setTimeout(function () {
        $('#loading-screen').hide();
        items.length = 0;
        // Calling the function above to display list items in DOM.
        displayListItemsInContainer();
    }, 2500);
}