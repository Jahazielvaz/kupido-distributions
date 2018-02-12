// var scheme = document.getElementById("scheme");
// var colSection = document.getElementById("colors");
// var col1 = document.getElementById("div1");
// var col2 = document.getElementById("div2");
// var col3 = document.getElementById("div3");
// var col4 = document.getElementById("div4");
// var col5 = document.getElementById("div5");
// var col6 = document.getElementById("div6");
// var col7 = document.getElementById("div7");
// var cols = [col1, col2, col3, col4, col5, col6, col7];
// var colorCont = document.getElementById("colCont")

// var headerNavList = document.querySelector("#header-nav li");
//
// headerNavList.addEventListener("mouseover", function(){
//   headerNavList.style.background = "#314770";
// });

var pageSelector = document.getElementById("page-selector");

var about = document.getElementById("yolo");
var aboutBtn = document.getElementById("about");

var contact = document.getElementById("yomo");
var contactBtn = document.getElementById("contact");

var home = document.getElementById("yoto");
var homeBtn = document.getElementById("home");

var nav = [about, contact];


function pageSwitch(){
  pageSelector.appendChild(about);
}
aboutBtn.addEventListener("click", pageSwitch);


// aboutBtn.addEventListener("click", function(){
//   pageSelector.appendChild(about);
// });



// contactBtn.addEventListener("click", function(){
//   pageSelector.appendChild(contact);
//   aboutBtn.removeEventListener()
// });
