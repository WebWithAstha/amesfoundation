  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  locoScroll.stop()




function cursor(){
  var c = document.querySelector("#cursor")
  window.addEventListener("mousemove",function(dets){
    gsap.to(c,{
      x:dets.x - c.clientWidth/2,
      y:dets.y - c.clientHeight/2,
  
    })
  })
  document.querySelector("#p7-part1").addEventListener("mouseenter",function(){
    gsap.to(c,{
      scale:1
    })
  })
  document.querySelector("#p7-part1").addEventListener("mouseleave",function(){
    gsap.to(c,{
      scale:0
    })
  })
}
cursor();








var tout;
var grow = 0
function buttonTimer(){
  tout = setInterval(() => {
    if (grow <= 99) {
  
      grow += Math.floor(Math.random() * 20)
      document.querySelector("#btn-div h2").textContent = grow + "%"
    }
    else {
      grow = 100
      clearInterval(tout)
      document.querySelector("#btn-div h2").textContent = grow + "%"
      gsap.to("#btn-div button,#btn-div h2", {
        y: "-100%",
      })
  
    }
  }, 100);
}
buttonTimer()

var musicTimer
var audio = new Audio("./african-savanna.mp3")
document.querySelector("#btn-div button").addEventListener("click", function () {
  
  locoScroll.start()
  audio.play();

  var tl1 = gsap.timeline()
  tl1
    .to("#page1", {
      scale: 1
    }, "w")
    .to("#page1 #btn-div", {
      opacity: 0,
      scale: 0
    }, "w")
    .to("#page1 #stamp-div", {
      rotate: 3,
      opacity: 1,
      height: "55%",
    }, "q")
    .to("#page1 #leaf", {
      rotate: -5,
    }, "q")
    .to("#page1 #scroll-cir", {
      rotate: -3,
      scale: 1
    })
    .from("#text", {
      rotate: -5,
    }, "f")
    .to("#text", {
      height: "12vh",
      opacity:1
    }, "f")
    .to("#navbar", {
      opacity:1,
      y: "0%"
    })

  function musicPlayer() {
    musicTimer = setInterval(() => {
      document.querySelectorAll(".line").forEach(function (e) {
        gsap.to(e, {
          height: Math.floor(Math.random() * 120) + 5 + "%"
        })
      }, 70);
    })
  }
  musicPlayer();

  function musicPlayerControl(){
    var flag = 0;
    document.querySelector(".player-div").addEventListener("click", function () {
      if (flag == 0) {
        clearInterval(musicTimer);
        flag = 1
        gsap.to(".player-div .line", {
          height: "10%"
        })
        audio.pause();
      }
      else {
        flag = 0
        musicPlayer();
        audio.play();
      }
    })
  }
  musicPlayerControl();



})


var clutter =``
document.querySelector("#prt1 h1").textContent.split("").forEach(function(elem){
  clutter+=`<span>${elem}</span>`
})
document.querySelector("#prt1 h1").innerHTML=clutter

function page3Animation(){
var t3 = gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3",
    start:"top 0%",
    pin:true,
    scrub:1,
  }
})
t3
.to("#prt1 h1 span",{
  color:"black",
  stagger:.3,

})
.to("#prt1",{
  x:"-100vw",
  duration:150
},"e")

.to("#prt2",{
  x:"-100vw",
  duration:150
},"e")
.to("#prt2",{
  x:"-600vw",
  duration:350
})
gsap.from(".img1",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"28% 0%",
    // markers:true
  }
})
gsap.from(".img2",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"34% 0%",
    // markers:true
  }
})
gsap.from(".img3",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"40% 0%",
    // markers:true,
    // scrub:1,

  }
})
gsap.from(".img4",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"45% 0%",
    // markers:true,
  }
})
gsap.from(".content1 h1",{
  y:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"52% 0%",

  }
})
gsap.from(".content1 p",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"55% 0%",
  }
})
gsap.from(".img5",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"56% 0%",
    // markers:true
  }
})
gsap.from(".img6",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"60% 0%",
    // markers:true,
  }
})
gsap.from(".img7",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"62% 0%",
    // markers:true,
  }
})
gsap.from(".content2 h1",{
  y:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"67% 0%",

  }
})
gsap.from(".content2 p",{
  opacity:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"70% 0%",
  }
})
gsap.from(".imgd",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"72% 0%",
    // markers:true,
  }
})
gsap.from(".img8",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"85% 0%",
    // markers:true,
  }
})
gsap.from(".img9",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"90% 0%",
    // markers:true,
  }
})
gsap.from(".img10",{
  height:0,
  duration:1,
  rotate:0,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#prt2",
    start:"94% 0%",
    // markers:true,
  }
})
}

var a = document.querySelector("body").getBoundingClientRect().width
console.log(a)
if (a>1000){
  page3Animation();
}

var tl4 = gsap.timeline(
  {
    scrollTrigger:{
      scroller:"#main",
      trigger:"#page5",
      start:"top 0%",
      scrub:2,
      pin:true,
      // markers:true,
    }
  }
)
tl4
.to("#pointer",{
  y:"90%"
})
.to("#p5text1 h1",{
  opacity:.6,
},"a")
.to("#p5text1 .para",{
  height:"0%"
},"a")
.to("#pointer",{  
  y:"130%"
},"a")
.to("#p5text2 .para",{
  height:"100%"
},"a")
.to("#p5text2 h1",{
  opacity:1,
},"a")
.to("#pointer",{
  y:"210%"
})
.to("#p5text2 .para",{
  height:"0%"
},"b")
.to("#p5text2 h1",{
  opacity:.6,
},"b")
.to("#pointer",{
  y:"270%"
},"b")
.to("#p5text3 .para",{
  height:"100%"
},"b")
.to("#p5text3 h1",{
  opacity:1,
},"b")



var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  grabCursor:true,
});


gsap.from("#page4 h1",{
  y:"100%",
  stagger:.1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    start:"top 60%",
    end:"top -100%",
    // markers:true
  }
})
gsap.from("#page6 h1",{
  y:"100%",
  stagger:.1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page6",
    start:"top 60%",
    end:"top -100%",
    // markers:true
  }
})
gsap.from("#page10 h1",{
  y:"100%",
  stagger:.1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page10",
    start:"top 45%",
    end:"top -100%",
    // markers:true
  }
})
gsap.from("#footer h1",{
  y:"100%",
  stagger:.1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#footer",
    start:"top 45%",
    end:"top -100%",
    // markers:truhhbbhe
  }
})