var inputTitle = document.getElementById("website-title");
var inputURL = document.getElementById("website-url");
var enterButton = document.getElementById("enter-button");
var bookmarkSection = document.querySelector(".bookmark-section");
var readButton = document.querySelector(".read-button");
var newDiv;
var newH3;
var newH4;
var newATag;
var newBtnDiv;
var newReadBtn;
var newDeleteBtn;
var userBookmarkData = [];

function grabUserData() {
  var inputTitleValue = inputTitle.value;
  var inputURLValue = inputURL.value;
  userBookmarkData = [inputTitleValue, inputURLValue];
}

enterButton.addEventListener("click", function() {
  grabUserData();
  createBookmarkDiv();
  console.log(userBookmarkData[0], userBookmarkData[1]);
});

// readButton.addEventListener("click", function() {
//   readButton.addclass("read");
// });

function createBookmarkDiv() {
  // create div with classname bookmarks
  newDiv = document.createElement("div");
  newDiv.className += "bookmarks";
  createBookmarkTitle();
}
function createBookmarkTitle() {
  newH3 = document.createElement("h3");
  newH3.className += "bookmark-title";
  var inputTitleTextNode = document.createTextNode(userBookmarkData[0]);
  newH3.appendChild(inputTitleTextNode);
  createBookmarkURL();
}

function createBookmarkURL() {
  newH4 = document.createElement("h4");
  newH4.className += "bookmark-url";
  createHREF();
}
function createHREF() {
  newATag = document.createElement("a");
  var inputURLTextNOde = document.createTextNode(userBookmarkData[1]);
  newATag.href = "http://" + userBookmarkData[1];
  newATag.appendChild(inputURLTextNOde);
  newH4.appendChild(newATag);
  createButtonDiv();
}
function createButtonDiv() {
  newBtnDiv = document.createElement("div");
  newBtnDiv.className += "read-delete-btns-cont";
  createReadButton();
}
function createReadButton() {
  newReadBtn = document.createElement("button");
  newReadBtn.className += "read-button";
  var readButtonText = document.createTextNode("Read");
  newReadBtn.appendChild(readButtonText);
  createDeleteButton();
}
function createDeleteButton() {
  newDeleteBtn = document.createElement("button");
  newDeleteBtn.className += "delete-button";
  var deleteButtonText = document.createTextNode("Delete");
  newDeleteBtn.appendChild(deleteButtonText);
  appendData();
}
function appendData() {
  newDiv.appendChild(newH3);
  newDiv.appendChild(newH4);
  newBtnDiv.appendChild(newReadBtn);
  newBtnDiv.appendChild(newDeleteBtn);
  newDiv.appendChild(newBtnDiv);
  bookmarkSection.appendChild(newDiv);
}
