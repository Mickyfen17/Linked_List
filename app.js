var inputTitle = document.getElementById("website-title");
var inputURL = document.getElementById("website-url");
var enterButton = document.getElementById("enter-button");
var userBookmarkData = [];

function grabUserData() {
  var inputTitleValue = inputTitle.value;
  var inputURLValue = inputURL.value;
  userBookmarkData = [inputTitleValue, inputURLValue];
}

enterButton.addEventListener("click", function() {
  grabUserData();
  createStuff();
  console.log(userBookmarkData[0], userBookmarkData[1]);
});

var bookmarkSection = document.querySelector(".bookmark-section");
var newDiv;
var newH3;
var newH4;
var newATag;
var newBtnDiv;
var newReadBtn;
var newDeleteBtn;

function createStuff() {
  // create div with classname bookmarks
  newDiv = document.createElement("div");
  newDiv.className += "bookmarks";

  // newDiv.appendChild(newH3);

  // create h3 with class bookmark-title
  newH3 = document.createElement("h3");
  newH3.className += "bookmark-title";
  var inputTitleTextNode = document.createTextNode(userBookmarkData[0]);
  newH3.appendChild(inputTitleTextNode);

  // create h4 with class bookmark-url
  newH4 = document.createElement("h4");
  newH4.className += "bookmark-url";
  // create a tag for h4
  newATag = document.createElement("a");
  var inputURLTextNOde = document.createTextNode(userBookmarkData[1]);
  newATag.href = userBookmarkData[1];
  newATag.appendChild(inputURLTextNOde);
  newH4.appendChild(newATag);

  // create div for buttons with class read-delete-btns-cont
  newBtnDiv = document.createElement("div");
  newBtnDiv.className += "read-delete-btns-cont";

  // newBtnDiv.appendChild(newReadBtn);
  // newBtnDiv.appendChild(newDeleteBtn);

  // create div for buttons with class read-button
  newReadBtn = document.createElement("button");
  newReadBtn.className += "read-button";
  var readButtonText = document.createTextNode("Read");
  newReadBtn.appendChild(readButtonText);

  // create div for buttons with class delete-button
  newDeleteBtn = document.createElement("button");
  newDeleteBtn.className += "delete-button";
  var deleteButtonText = document.createTextNode("Delete");
  newDeleteBtn.appendChild(deleteButtonText);

  newDiv.appendChild(newH3);
  newDiv.appendChild(newH4);
  newBtnDiv.appendChild(newReadBtn);
  newBtnDiv.appendChild(newDeleteBtn);
  newDiv.appendChild(newBtnDiv);

  bookmarkSection.appendChild(newDiv);

}
