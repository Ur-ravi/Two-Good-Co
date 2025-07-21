const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function videoconanimation(){
    var videocon = document.querySelector(".video-conainer")
var playbtn=document.querySelector(".play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-50
    })
})
}
videoconanimation()

function elementAnimation(){
    gsap.from(".elem h1 ",{
        y:200,
        opacity:0,
        delay:.5,
        duration:.8,
        stagger:.2
    })
}
elementAnimation();

function navAnime(){
    gsap.from(".navbar a ",{
        y:30,
        opacity:0,
        delay:.5,
        stagger:.2,
    })
}
navAnime();
gsap.from(".logo h3 ",{
    y:30,
    opacity:0,
    delay:.5,
    stagger:.2,
})
document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y,
    })
})


document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
                   transform:" translate(-50%,-50%) scale(1)",
                })
    })

    elem.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
                   transform:" translate(-50%,-50%) scale(0)",
                })
    })
})