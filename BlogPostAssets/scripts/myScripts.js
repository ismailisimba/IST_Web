// JavaScript source code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("hidemebydefault").length;
    var dots = document.getElementsByClassName("trackdotsbottom").length;

    if (n > slides) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides }

    for (i = 0; i < slides; i++) {

        slides[i].style.display = "none";
    }
    for (i = 0; i < dots; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function ForcedFunction() {

    document.getElementsByClassName("hidemebydefault")[1].setAttribute("class", "showmebydefault");
  
}
