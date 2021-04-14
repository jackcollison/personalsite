// Fade out for introduction page
var fade_out = function() {
    $("#particles-js").fadeOut(500).empty();
}
setTimeout(fade_out, 3500); 

// Functionality for tab bar
function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = '#820000';
  elmnt.style.color = 'white'
}

// Default to "about" tab
document.getElementById("about").click();

// Get collapsible items
var coll = document.getElementsByClassName("collapsible");
var i;

// OLD: slide down descriptions
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

// Activate modal box
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    content.classList.toggle("active");
  });
}

// Use "x" to close modal box
var closers = document.getElementsByClassName("close");
var i;
for (i = 0; i < closers.length; i++){
  closers[i].addEventListener("click", function() {
    var content = this.parentElement.parentElement
    content.classList.toggle("active")
  })
}

// Click anywhere but inside box to close
window.onclick = function(event) {
  for(i = 0; i < coll.length; i++){
    if(event.target == coll[i].nextElementSibling){
      coll[i].nextElementSibling.classList.toggle("active")
    }
  }
}

// Drag and drop
$(function() {
    $(".collapsible-description").draggable();
});
