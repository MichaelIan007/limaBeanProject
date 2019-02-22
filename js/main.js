const nav = document.getElementById('nav');
const header = document.getElementById('header');
const burgBtn = document.getElementById('burger-btn-alt');
const burgBtnAlt = document.getElementById('burger-btn');

burgBtn.addEventListener("click", function(){
  document.getElementById('burger-items').style.display = "block";
  setTimeout(function() {
    document.getElementById('burger-items').classList.add("shown");
  }, 5)
  burgBtn.style.opacity = "0";
  burgBtnAlt.style.display = "flex";
  burgBtnAlt.style.opacity = "2";
  burgBtnAlt.style.zIndex = "1";
  setTimeout(function(){
    burgBtn.style.display = "none";
    burgBtnAlt.style.zIndex = "2";
  }, 300);
})
burgBtnAlt.addEventListener("click", function(){
  document.getElementById('burger-items').classList.remove("shown")
  burgBtnAlt.style.opacity = "0";
  burgBtn.style.display = "flex";
  burgBtn.style.opacity = "2";
  burgBtn.style.zIndex = "1";
  setTimeout(function(){
    burgBtnAlt.style.display = "none";
    burgBtn.style.zIndex = "2";
  }, 310);
  setTimeout(function() {
    // document.getElementById('burger-items').style.display = "none";
  }, 160);
})

window.addEventListener("scroll", function(){
  var offset = window.pageYOffset; 

  // Animate navbar when scrolled down
  if(offset > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // parallax background for header
  if (window.innerWidth > 780) {
    header.style.backgroundPositionY = Math.floor(offset * .3) + "px";
  } else {
    header.style.backgroundPositionY = "0px";
  }

})