// var about = document.getElementById("about");
// var education = document.getElementById("education");
// var experience = document.getElementById("experience");
// var volunteering = document.getElementById("volunteering");
// var research = document.getElementById("research");
// var projects = document.getElementById("projects");

// var to_shift = [education, experience, volunteering, research, projects];

var fade_out = function() {
  	$("#particles-js").fadeOut(800).empty();
}

setTimeout(fade_out, 5000); 

// window.onscroll = function() {stick(); spread(); update_tabs();};

// var navbar = document.getElementById("navbar");

// var sticky = navbar.offsetTop;

function getStyle(oElm, strCssRule){
    var strValue = "";
    if(document.defaultView && document.defaultView.getComputedStyle){
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    else if(oElm.currentStyle){
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    return strValue;
}

// var about_tab = document.getElementById("about")
// var education_tab = document.getElementById("education")
// var experience_tab = document.getElementById("experience")
// var volunteering_tab = document.getElementById("volunteering")
// var research_tab = document.getElementById("research")
// var projects_tab = document.getElementById("projects")

// var all_tabs = [about_tab, education_tab, experience_tab, volunteering_tab, research_tab, projects_tab];

// var about_dist = parseInt(getStyle(document.getElementsByClassName("about")[0], "padding-top").substring(0, getStyle(document.getElementsByClassName("about")[0], "padding-top").length-2)) + 500;
// var education_dist = parseInt(getStyle(document.getElementsByClassName("education")[0], "height").substring(0, getStyle(document.getElementsByClassName("education")[0], "height").length-2));
// var experience_dist = parseInt(getStyle(document.getElementsByClassName("experience")[0], "height").substring(0, getStyle(document.getElementsByClassName("experience")[0], "height").length-2));
// var volunteering_dist = parseInt(getStyle(document.getElementsByClassName("volunteering")[0], "height").substring(0, getStyle(document.getElementsByClassName("volunteering")[0], "height").length-2));
// var research_dist = parseInt(getStyle(document.getElementsByClassName("research")[0], "height").substring(0, getStyle(document.getElementsByClassName("research")[0], "height").length-2));
// var projects_dist = parseInt(getStyle(document.getElementsByClassName("projects")[0], "height").substring(0, getStyle(document.getElementsByClassName("projects")[0], "height").length-2));

// function update_tabs(){
// 	var current_distance = window.pageYOffset;
// 	if(current_distance <= about_dist){
// 		for(var i = 0; i < all_tabs.length; i++){
// 			all_tabs[i].classList.remove('active');
// 			all_tabs[i].classList.remove('past-active');
// 		}
// 		about_tab.classList.add('active');
// 	}
// 	else if(current_distance > about_dist && current_distance <= education_dist + about_dist){
// 		for(var i = 0; i < all_tabs.length; i++){
// 			all_tabs[i].classList.remove('active');
// 			all_tabs[i].classList.remove('past-active');
// 		}
// 		education_tab.classList.add('past-active');
// 	}
// 	else if(current_distance > education_dist + about_dist && current_distance <= experience_dist + education_dist + about_dist){
// 		for(var i = 0; i < all_tabs.length; i++){
// 			all_tabs[i].classList.remove('active');
// 			all_tabs[i].classList.remove('past-active');
// 		}
// 		experience_tab.classList.add('past-active');
// 	}
// 	else if(current_distance > education_dist + about_dist + experience_dist && current_distance <= experience_dist + education_dist + about_dist + volunteering_dist){
// 		for(var i = 0; i < all_tabs.length; i++){
// 			all_tabs[i].classList.remove('active');
// 			all_tabs[i].classList.remove('past-active');
// 		}
// 		volunteering_tab.classList.add('past-active');
// 	}
// 	else if(current_distance > experience_dist + education_dist + about_dist + volunteering_dist && current_distance <= research_dist + experience_dist + education_dist + about_dist + volunteering_dist){
// 		for(var i = 0; i < all_tabs.length; i++){
// 			all_tabs[i].classList.remove('active');
// 			all_tabs[i].classList.remove('past-active');
// 		}
// 		research_tab.classList.add('past-active');
// 	}
// 	else{
// 		for(var i = 0; i < all_tabs.length; i++){
// 			all_tabs[i].classList.remove('active');
// 			all_tabs[i].classList.remove('past-active');
// 		}
// 		projects_tab.classList.add('past-active');
// 	}
// }

// function stick() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//     navbar.style.paddingLeft = 0;
//   } else {
//     navbar.classList.remove("sticky");
//     for(var i = 0; i < 5; i++){
//     	to_shift[i].style.marginLeft = -70;
//     }
//     about.style.marginLeft = 80;
//     navbar.style.paddingLeft = '22%';
//   }
// }

// function spread() {	
// 	if(window.pageYOffset >= sticky){
// 		for(var i = 0; i < 5; i++){
// 				to_shift[i].style.marginLeft = -70;
// 			}
// 		about.style.marginLeft = 0;
// 		navbar.onmouseover = function(){
// 			for(var i = 0; i < 5; i++){
// 				to_shift[i].style.marginLeft = 0;
// 			}
// 		}
// 		navbar.onmouseout = function(){
// 			for(var i = 0; i < 5; i++){
// 				to_shift[i].style.marginLeft = -70;
// 			}
// 		}
// 	}
// 	else{
// 		for(var i = 0; i < 5; i++){
// 			to_shift[i].style.marginLeft = 0;
// 		}
// 		about.style.marginLeft = 0;
// 		navbar.onmouseover = function(){}
// 		navbar.onmouseout = function(){}
// 	}
// }

// spread();

// var tabs = navbar.getElementsByClassName("tab");

// for (var i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }








// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.hideme').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object + 50){
                
//                 $(this).animate({'opacity':'1'},1500);
                    
//             }
            
//         }); 
    
//     });
    
// });





$(function() {      
    $("div#exp_header .desc-job").css("opacity","1.0");       
    $("div#exp_header .desc-job").hover(function () {
            var myID = $(this).attr("id");       
            $("div#exp_header .desc-job:not(#"+myID+")").stop().animate({opacity: 0.5}, "slow");   
    },          
    function () {      
            $("div#exp_header .desc-job").stop().animate({opacity: 1.0}, "slow");       
    });   
});

$(function() {      
    $("div#vol_header .desc-vol").css("opacity","1.0");       
    $("div#vol_header .desc-vol").hover(function () {
            var myID = $(this).attr("id");       
            $("div#vol_header .desc-vol:not(#"+myID+")").stop().animate({opacity: 0.5}, "slow");   
    },          
    function () {      
            $("div#vol_header .desc-vol").stop().animate({opacity: 1.0}, "slow");       
    });   
});








$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash == "#about_content"){
    	event.preventDefault();

    	var hash = this.hash;

		$('html, body').animate({
	     scrollTop: 0
	  	}, 1000, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	    	window.location.hash = hash;
	  	});    	
    }
    else if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
	     scrollTop: $(hash).offset().top
	  }, 1000, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	  });
    } // End if
  });
});


document.addEventListener("DOMContentLoaded", function(event) { 
	var acc = document.getElementsByClassName("dropdown-r");
	var panel = document.getElementsByClassName('content_research');

	for (var i = 0; i < acc.length; i++) {
	    acc[i].onclick = function() {
	        var setClasses = !this.classList.contains('enabled');
	        setClass(acc, 'enabled', 'remove');
	        setClass(panel, 'show', 'remove');

	        if (setClasses) {
	            this.classList.toggle("enabled");
	            this.nextElementSibling.classList.toggle("show");
	            this.children[0].classList.toggle("enabled");
	        }
	    }
	}

	function setClass(els, className, fnName) {
	    for (var i = 0; i < els.length; i++) {
	        els[i].classList[fnName](className);
	        if(className == "enabled"){
	        	els[i].children[0].classList[fnName](className);
	        }
	    }
	}

});

document.addEventListener("DOMContentLoaded", function(event) { 

	var acc = document.getElementsByClassName("dropdown-e");
	var panel = document.getElementsByClassName('content_exp');

	for (var i = 0; i < acc.length; i++) {
	    acc[i].onclick = function() {
	        var setClasses = !this.classList.contains('enabled');
	        setClass(acc, 'enabled', 'remove');
	        setClass(panel, 'show', 'remove');

	        if (setClasses) {
	            this.classList.toggle("enabled");
	            this.nextElementSibling.classList.toggle("show");
	            this.children[0].classList.toggle("enabled");
	        }
	    }
	}

	function setClass(els, className, fnName) {
	    for (var i = 0; i < els.length; i++) {
	        els[i].classList[fnName](className);
	        if(className == "enabled"){
	        	els[i].children[0].classList[fnName](className);
	        }
	    }
	}

});







document.addEventListener("DOMContentLoaded", function(event) { 

	var acc = document.getElementsByClassName("collapsible_educ");
	var panel = document.getElementsByClassName('content_educ');

	for (var i = 0; i < acc.length; i++) {
	    acc[i].onclick = function() {
	        var setClasses = !this.classList.contains('enabled');
	        setClass(acc, 'enabled', 'remove');
	        setClass(panel, 'show', 'remove');

	        if (setClasses) {
	            this.classList.toggle("enabled");
	            this.nextElementSibling.classList.toggle("show");
	        }
	    }
	}

	function setClass(els, className, fnName) {
	    for (var i = 0; i < els.length; i++) {
	        els[i].classList[fnName](className);
	    }
	}

});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}




$(function(){
	var $allItems =  $(".content-wrapper-exp > div");
	var $allHeader = $(".exp_header > div");
	$(document.body).on("click", "img.logo-exp", function () {
	    var id = this.id;
	    var itemId = "#exp-" + id;
	    var logoId = "#" + id + "_logo";
	    $allItems.not($(itemId).toggle()).hide();
	    $allHeader.not($(logoId)).toggle();
	    if($(logoId)[0].style.paddingLeft == ""){
	    	$(logoId)[0].style.paddingLeft = "37.5%";
	    }
	    else{
	    	$(logoId)[0].style.paddingLeft = "";
	    }
	});
});

$(function(){
	var $allItems =  $(".content-wrapper-vol > div");
	var $allHeader = $(".vol_header > div");
	$(document.body).on("click", "img.logo-vol", function () {
	    var id = this.id;
	    var itemId = "#vol-" + id;
	    var logoId = "#" + id + "_logo";
	    $allItems.not($(itemId).toggle()).hide();
	    $allHeader.not($(logoId)).toggle();
	    if($(logoId)[0].style.paddingLeft == ""){
	    	$(logoId)[0].style.paddingLeft = "33.33%";
	    }
	    else{
	    	$(logoId)[0].style.paddingLeft = "";
	    }
	});
});



$(function(){
	var $allNames =  $(".research-name");
	$(document.body).on("click", ".research-name", function(){
		$allNames.not($(this)).toggle();
		var id = $(this)[0].id
		var contentId = id.substring(id.length-1, id.length)
		relContent = "#research-content-" +  contentId
		$(relContent).toggle();
	});
});

$(function(){
	var $allNames =  $(".project-name");
	$(document.body).on("click", ".project-name", function(){
		$allNames.not($(this)).toggle();
		var id = $(this)[0].id
		var contentId = id.substring(id.length-1, id.length)
		relContent = "#project-content-" +  contentId
		$(relContent).toggle();
	});
});


$(function(){
	var $allItems =  $("#education_zip > button");
	$(document.body).on("click", ".collapsible_educ", function () {
		//console.log($allItems);
	    //console.log("clicked");
	    console.log($(this)[0].id);
	    console.log($allItems.not($(this)[0]));
	    $allItems.not($(this)[0]).toggle();
	});
});


// console.log($(".collapsible_educ"));







// $('.desc-job .tofadein').hide();

// $('.desc-job img').click(function(e){
    
//     e.preventDefault();
//     // hide all span
//     var $this = $(this).parent().find('.tofadein');
//     console.log($(this).parent());
//     $(".desc-job .tofadein").not($this).fadeOut("slow");
    
//     // here is what I want to do
//     $this.toggle("slow");
    
// });








