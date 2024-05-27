function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function mousemoveAnimation() {
    var rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            })

        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })


        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x,
                y: dets.y - elem.getBoundingClientRect().y - 50 + "px"

            })
        })
    })

}


function playPauseAnimation() {
    var video = document.querySelector("#page3 video");
    var playbtn = document.querySelector("#page3 .circle");
    playbtn.addEventListener("click", function () {
        video.play(),
            gsap.to("#page3 video", {
                opacity: 1,
                transform: "scaleX(1) scaleY(1) ",
                borderRadius: 0,
            })

    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to("#page3 video", {
            opacity: 0,
            transform: "scaleX(0) scaleY(0) ",
            borderRadius: 10,
        })
    })
}


function page6Animation() {

    var vidDiv = document.querySelectorAll(".page6-right")


    vidDiv.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {

            elem.childNodes[5].style.opacity = 1;
            elem.childNodes[5].play();

        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1,
                x: dets.x - elem.childNodes[1].getBoundingClientRect().x + 300,
                y: dets.y - elem.childNodes[1].getBoundingClientRect().y,

            })
        })

        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0,


            })
            elem.childNodes[5].style.opacity = 0;
            elem.childNodes[5].load();


        })

    })

}


function page6_ka_bacha_hua_animation() {
    vidDiv = document.querySelectorAll(".p6-part2-inner .inner")
    vidDiv.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[7].play()
            gsap.to(elem.childNodes[7], {
                opacity: 1,
                height: "80%",
                duration: .4
            })

            gsap.to(elem.childNodes[3], {
                opacity: 0,
                duration: .4

            })
        })
        elem.addEventListener("mouseleave", function () {

            gsap.to(elem.childNodes[7], {
                opacity: 0,
                height: "50%",

            })

            gsap.to(elem.childNodes[3], {
                opacity: 1,


            })

        })
    })
}

function scroll_animation() {
    gsap.from("#btm-p2 h4,#btm-p3 h4 ,#btm-p4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm-p2",
            start: "top 80%",
           
            // markers: true,
            scroller: "#main",
            stagger: 0.6,
            scrub: true,
        }
    })
}

var tl = gsap.timeline()
tl.from("#page1",{
    opacity:0,
    borderRadius:"100px",
    duration:2,
    ease:"expo.out"
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0) translateY(-10%)",
    
})
tl.from("nav",{
    opacity:0

})
tl.from("#page1 h1 , #page1 p ,#page1 div " ,{
    
    opacity:0,
    stagger:0.3
})



locomotiveAnimation()
mousemoveAnimation();
navAnimation();
playPauseAnimation();
page6Animation();
page6_ka_bacha_hua_animation();
scroll_animation();