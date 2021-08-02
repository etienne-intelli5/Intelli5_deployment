function navBarOpen(){
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

    hamburger.classList.toggle("x");
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fading");
    });
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navigation");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});