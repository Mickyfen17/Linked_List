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
  console.log(userBookmarkData[0], userBookmarkData[1]);
});
