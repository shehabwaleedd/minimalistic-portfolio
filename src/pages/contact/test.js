const body = document.body,
scorllWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scorllWrap.getBoundingClientRect().height - 1,
speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
offset += (window.pageYOffset - offset) * speed;

var scroll = "translateY(-" + offset + "px) translateZ(0)";

scorllWrap.style.transform = scroll;
var callScroll = requestAnimationFrame(smoothScroll);
}


smoothScroll();
