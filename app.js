var inputTitle = document.getElementById("website-title");
var inputURL = document.getElementById("website-url");
var enterButton = document.getElementById("enter-button");
var bookmarkSection = document.querySelector(".bookmark-section");
var errorText = document.querySelector(".error-text");
var newDiv;
var newH3;
var newH4;
var newATag;
var newBtnDiv;
var newReadBtn;
var newDeleteBtn;
var userBookmarkData = [];
var inputs = document.querySelectorAll("input");

// Grab all user data from input fields
function grabUserData() {
  var inputTitleValue = inputTitle.value;
  var inputURLValue = inputURL.value;
  userBookmarkData = [inputTitleValue, inputURLValue];
}
// Clear input fields and disable Enter button
function clearInputs() {
  inputTitle.value = "";
  inputURL.value = "";
  enterButton.disabled = true;
  errorText.innerText = "";
}
// Check if input fields have data before enabling Enter button
function testForEmptyInputs() {
  if(inputTitle.value.length > 2 || inputURL.value.length > 2) {
    enterButton.disabled = false;
  } else {
    enterButton.disabled = true;
  }
}
// Throw alert if one box has content and the other is empty upon Enter click
function alertError() {
  if(inputTitle.value.length > 2 && inputURL.value.length === 0) {
    errorText.innerText = "Please Enter A Valid URL";
    throw new Error("Please enter a valid URL");
  } else if (inputURL.value.length > 2 && inputTitle.value.length === 0) {
    errorText.innerText = "Please Enter A Valid Website Title";
    throw new Error("Please enter a valid Website Title");
  }
}

// Event listeners for typing in input fields
// inputs.addEventListener("keyup", function() {
//   testForEmptyInputs();
// });
// inputURL.addEventListener("keyup", function() {
//   testForEmptyInputs();
// });

// For each loop to add Event listeners for typing in input fields
inputs.forEach(function(button) {
  button.addEventListener("keyup", function() {
    testForEmptyInputs();
  });
});

// Event listener for Enter button
enterButton.addEventListener("click", function() {
  alertError();
  grabUserData();
  createBookmarkDiv();
  clearInputs();
});

// Create main outer div bookmark
function createBookmarkDiv() {
  newDiv = document.createElement("div");
  newDiv.classList.add("bookmarks");
  createBookmarkTitle();
}
// Create bookmark title and append user input data
function createBookmarkTitle() {
  newH3 = document.createElement("h3");
  newH3.classList.add("bookmark-title");
  newH3.innerText = userBookmarkData[0];
  createBookmarkURL();
}
// Create h4 to store a tag and website link
function createBookmarkURL() {
  newH4 = document.createElement("h4");
  newH4.classList.add("bookmark-url");
  createHREF();
}
// Create a tag and website link with user data and append to h4
function createHREF() {
  newATag = document.createElement("a");
  newATag.href = "http://" + userBookmarkData[1];
  newATag.innerText = userBookmarkData[1];
  newH4.appendChild(newATag);
  createButtonDiv();
}
// Create div to house Read and Delete buttons
function createButtonDiv() {
  newBtnDiv = document.createElement("div");
  newBtnDiv.classList.add("read-delete-btns-cont");
  createReadButton();
}
// Create Read button and add Eventlistener
function createReadButton() {
  newReadBtn = document.createElement("button");
  newReadBtn.classList.add("read-button");
  newReadBtn.innerText = "Read";
  newReadBtn.addEventListener("click", function() {
    bookmarkClassToggle(this);
  });
  createDeleteButton();
}
// Function to add or remove read class
function bookmarkClassToggle(btn) {
  var bookmarkCard = btn.parentNode.parentNode;
  if(btn.classList.contains("read")) {
    btn.classList.remove("read");
    bookmarkCard.classList.remove("bookmarkRead");
  } else {
    btn.classList.add("read");
    bookmarkCard.classList.add("bookmarkRead");
  }
}
// Create Delete button and add eventlistener
function createDeleteButton() {
  newDeleteBtn = document.createElement("button");
  newDeleteBtn.classList.add("delete-button");
  newDeleteBtn.innerText = "Delete";
  newDeleteBtn.addEventListener("click", function() {
    var bookmarkCard = this.parentNode.parentNode;
    bookmarkCard.remove();
  });
  appendData();
}
// Append all data to outer Div bookmark and append to bookamrk section in DOM
function appendData() {
  newDiv.appendChild(newH3);
  newDiv.appendChild(newH4);
  newBtnDiv.appendChild(newReadBtn);
  newBtnDiv.appendChild(newDeleteBtn);
  newDiv.appendChild(newBtnDiv);
  bookmarkSection.appendChild(newDiv);
}
