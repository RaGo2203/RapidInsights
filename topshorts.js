/*
let startX = 0;
let endX = 0;

let slidesContainer = document.querySelector(".carousel_container");
slidesContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slidesContainer.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slidesContainer.addEventListener('touchend', () => {
  // Compare the start and end positions to determine the swipe direction
  if (startX > endX) {
    plusSlides(1);  // Swipe left
  } else {
    plusSlides(-1);  // Swipe right
  }
});
*/

//------------------------------------------------------
// Slide Carousel with Mouse Clicks
//-------------------------------------------------------
let slideIndex = 0;
let startTouch = 0;
let startMouse = 0;

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let slides = document.querySelector(".slides");
  let slide = document.querySelectorAll(".slide");
  if (slideIndex >= slide.length) {
    slideIndex = slide.length - 1
  }    
  if (slideIndex < 0) {
    slideIndex = 0
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

//-------------------------------------------------------
// Slide Carousel with Touch events
//-------------------------------------------------------
document.querySelector(".slides").addEventListener('touchstart', function(e) {
  startTouch = e.touches[0].clientX;
});

document.querySelector(".slides").addEventListener('touchmove', function(e) {
  let moveTouch = e.touches[0].clientX;
  let diff = startTouch - moveTouch;

  if (diff > 70) { // swipe left
    plusSlides(1);
    startTouch = moveTouch;
  } else if (diff < -70) { // swipe right
    plusSlides(-1);
    startTouch = moveTouch;
  }
});


//------------------------------------------------------
// Open and Slide Modal
//-------------------------------------------------------
var modalIndex;

document.querySelectorAll(".short").forEach((short, index) => {
  short.onclick = function () {
    modalIndex = index;
    showModals(modalIndex);
  };
});

function showModals(n) {
  var i;
  // let modals = document.querySelector(".modal_list");
  let modal = document.querySelectorAll(".modal");
  if (n >= modal.length) {
    modalIndex = 0
    
  }
  if (n < 0) {
    modalIndex = modal.length -1
  }

  for (i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  } 

  document.getElementById("modal_container").style.display = "flex";
  modal[modalIndex].style.display = "block";
}

function plusModals(n) {
  showModals(modalIndex += n);
}

//-------------------------------------------------------
// Slide Modal with Touch events
//-------------------------------------------------------



//-------------------------------------------------------
// Close Modal
//-------------------------------------------------------

document.querySelector(".close").onclick = function () {
  document.getElementById("modal_container").style.display = "none";
}

window.onclick = function (event) {
 if (event.target == (document.getElementById("modal_container"))){
    document.getElementById("modal_container").style.display = "none";
  }

  if (event.target == (document.getElementById("modal_list"))){
    document.getElementById("modal_container").style.display = "none";
  }
};