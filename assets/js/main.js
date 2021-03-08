console.log("global js");
window.onload = function(){
    console.log("onload js");

    //slider - header
    let slideNumber = 1;
    showSlide(slideNumber);

    const s = selektor => document.querySelector(selektor);
    EventTarget.prototype.on = EventTarget.prototype.addEventListener;
    function giveClickEventToArrows(id, value){
        s(`#${id}`).addEventListener("click", ()=>{
            showSlide(slideNumber += value);
        })
    }
    giveClickEventToArrows("left", -1);
    giveClickEventToArrows("right", 1);

    function giveClickEventToCircles(id, value){
        s(`#${id}`).addEventListener("click", ()=>{
            showSlide(slideNumber = `${value}`);
        })
    }
    giveClickEventToCircles("dot1", 1);
    giveClickEventToCircles("dot2", 2);
    giveClickEventToCircles("dot3", 3);
    giveClickEventToCircles("dot4", 4);
    giveClickEventToCircles("dot5", 5);

   

    function showSlide(n){
        let i;
        let slides = document.getElementsByClassName("show");
        let circles = document.getElementsByClassName("circle");

        if(n > slides.length){
            slideNumber = 1;
        }
        if(n < 1){
            slideNumber = slides.length ;
        }
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        for (i = 0; i < circles.length; i++) { 
            circles[i].className = circles[i].className. 
                                replace(" active", ""); 
        } 
        slides[slideNumber - 1].style.display = "block";
        circles[slideNumber - 1].className += " active"; 
    }

    //nav menu - hamburger menu
    let menuIcon = document.querySelector('#menu-icon');
    let closeMenuIcon = document.querySelector('#close-icon');
    let menuMob = document.querySelector('#headerUpMobile');
    let isVisible = false;

    menuIcon.addEventListener('click', toggleMenu);
    closeMenuIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!isVisible) {
            menuMob.style.display = 'block';
            closeMenuIcon.style.display = 'block';
            menuIcon.style.display = 'none';
        }else {
            menuMob.style.display = 'none';
            closeMenuIcon.style.display = 'none';
            menuIcon.style.display = 'block';
        }
        isVisible = !isVisible;
    }
   
}