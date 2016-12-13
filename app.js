var inputTitle = document.getElementById("website-title");
var inputURL = document.getElementById("website-url");
var enterButton = document.getElementById("enter-button");
var bookmarkSection = document.querySelector(".bookmark-section");
var readButton = document.querySelector(".read-button");
var errorText = document.querySelector(".error-text");
var newDiv;
var newH3;
var newH4;
var newATag;
var newBtnDiv;
var newReadBtn;
var newDeleteBtn;
var userBookmarkData = [];

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
    // alert("Please enter a valid URL");
    errorText.innerText = "Please Enter A Valid URL";
    throw new Error("Please enter a valid URL");
  } else if (inputURL.value.length > 2 && inputTitle.value.length === 0) {
    // alert("Please enter a valid Website Title");
    errorText.innerText = "Please Enter A Valid Website Title";
    throw new Error("Please enter a valid Website Title");
  }
}
// Event listeners for typing in input fields
inputTitle.addEventListener("keyup", function() {
  testForEmptyInputs();
});
inputURL.addEventListener("keyup", function() {
  testForEmptyInputs();
});
// Event listener for Enter button
enterButton.addEventListener("click", function() {
  alertError();
  grabUserData();
  createBookmarkDiv();
  clearInputs();
  console.log(userBookmarkData[0], userBookmarkData[1]);
});

// Create main outer div bookmark
function createBookmarkDiv() {
  newDiv = document.createElement("div");
  newDiv.className += "bookmarks";
  createBookmarkTitle();
}
// Create bookmark title and append user input data
function createBookmarkTitle() {
  newH3 = document.createElement("h3");
  newH3.className += "bookmark-title";
  var inputTitleTextNode = document.createTextNode(userBookmarkData[0]);
  newH3.appendChild(inputTitleTextNode);
  createBookmarkURL();
}
// Create h4 to store a tag and website link
function createBookmarkURL() {
  newH4 = document.createElement("h4");
  newH4.className += "bookmark-url";
  createHREF();
}
// Create a tag and website link with user data and append to h4
function createHREF() {
  newATag = document.createElement("a");
  var inputURLTextNode = document.createTextNode(userBookmarkData[1]);
  newATag.href = "http://" + userBookmarkData[1];
  newATag.appendChild(inputURLTextNode);
  newH4.appendChild(newATag);
  createButtonDiv();
}
// Create div to house Read and Delete buttons
function createButtonDiv() {
  newBtnDiv = document.createElement("div");
  newBtnDiv.className += "read-delete-btns-cont";
  createReadButton();
}
// Create Read button and add Eventlistener
function createReadButton() {
  newReadBtn = document.createElement("button");
  newReadBtn.className += "read-button";
  var readButtonText = document.createTextNode("Read");
  newReadBtn.appendChild(readButtonText);
  newReadBtn.addEventListener("click", function() {
    readBtnClassToggle(this);
  });
  createDeleteButton();
}
// Function to add or remove read class
function readBtnClassToggle(btn) {
  if(btn.classList.contains("read")) {
    btn.classList.remove("read");
  } else {
    btn.classList.add("read");
  }
}
// Create Delete button and add eventlistener
function createDeleteButton() {
  newDeleteBtn = document.createElement("button");
  newDeleteBtn.className += "delete-button";
  var deleteButtonText = document.createTextNode("Delete");
  newDeleteBtn.appendChild(deleteButtonText);
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
