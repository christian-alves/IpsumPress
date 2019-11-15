var looped = false;
$("#sliderIndex").backstretch([
  [
    { width: 1440, url: "./images/modelo2.jpg", pixelRatio: "auto"},
    { width: 720, url: "./images/modelo2.jpg", pixelRatio: "auto"},
    { width: 320, url: "./images/modelo2.jpg", pixelRatio: "auto"}
  ],
  [
    { width: 1440, url: "./images/modelo2.jpg", pixelRatio: "auto"},
    { width: 720, url: "./images/modelo2.jpg", pixelRatio: "auto"},
    { width: 320, url: "./images/modelo2.jpg", pixelRatio: "auto"}
  ]
], {duration: 4000, transition: 'fade', transitionDuration: 'slow'});

$(".nav-servicos-geral").click(function() {
  if (!looped) {
    $(".banner-height-3").animate({
      height: "96px"
    }, 500);
    looped = true;
  }
});

window.onscroll = function() {
  if (document.documentElement.scrollTop <= 150) {
    document.getElementById("navbar").style.height = "100px";
  } else {
    document.getElementById("navbar").style.height = "70px";
  }
}
