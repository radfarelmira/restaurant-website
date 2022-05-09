// -------------------loading page-------------------------
window.addEventListener("load", function(){
    // ---------------page loader--------------------------
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector(".page-loader").style.display="none";
    }, 600);
    // ----------------animation on scroll-----------------
    AOS.init();
})

// ------------toggle navbar----------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking on nav item
document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    };
})

// ---------------sticky header------------------
window.addEventListener("scroll", function(){
    if(this.scrollY > 60){
       document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    };
})

// -------------menu tabs------------------
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        // animation on scroll
        AOS.init();
    }
})

// ---------------Slider----------------
const slides = document.querySelector(".slider-items").children;
const nextSlide = document.querySelector(".next-slide");
const prevSlide = document.querySelector(".prev-slide");
const sliderBg = document.getElementsByClassName("slider-bg");
const totalSlides = slides.length;
let index = 0;

nextSlide.addEventListener("click", function(){
    next("next");
});

prevSlide.addEventListener("click", function(){
    next("prev");
});

function next(direction){
    if(direction == "next"){
        index++;
        if(index == totalSlides){
            index = 0;
        }
    }
    else{
        if(index == 0){
            index = totalSlides-1;
        }
        else{
            index--;
        }
    }

    for(let i=0; i<totalSlides; i++){
        slides[i].classList.remove("active");
        sliderBg[i].classList.remove("active");
    }

    slides[index].classList.add("active");
    sliderBg[index].classList.add("active");

    
}
