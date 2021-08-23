//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Neon Color in main intro section.
var neonbtn = document.getElementById("neonbtn");
neonbtn.onclick = function() {
  if(neonbtn.classList.contains("neon")){
    neonbtn.classList.remove("neon");
    
    
  }
  else{
    neonbtn.classList.add("neon");
    
  }
}




// Sticky Top navbar
let navbarjs = $(".navbar");

$(window).scroll(function(){
  let oTop = $(".navbarscrolltime").offset().top-window.innerHeight;
  if($(window).scrollTop()> oTop){
    navbarjs.addClass("sticky-top");
  }else{
    navbarjs.removeClass("sticky-top");
  }
});


// Counter.

let nCount = function(selector){
  $selector.each(function(){

        $(this).animate({
      Counter : $(this).text()
  },{
    duration: 4000,
    easing: "swing",
    step: function(value){
    $(this).text(Math.ceil(value));
    }
  }
  );

  });
};

let a = 0;
$(window).scroll(function(selector){
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if(a==0 && $(window).scrollTop() >= oTop){
    a++;
    nCount(".rect>h1");
  }
})

