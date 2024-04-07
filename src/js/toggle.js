const toggle = document.getElementById("toggle");
const navMenu = document.getElementById("nav-menu");
const nav = document.querySelector('.navbar');
const fixedNav = nav.offsetTop;

console.log(fixedNav)
window.onscroll = () => {
  
  
  

  if (window.pageYOffset > fixedNav) {
    // ini untuk cek pageYoffsetnya math.round itu angka yang mendekati pembulatan
    // console.log(Math.round(window.pageYOffset));

    nav.classList.add("mobile");
    
  } else {
    nav.classList.remove("mobile");
    
  }
};

toggle.addEventListener("click", function (e) {
  if (navMenu.classList.contains("d-none")) {
    navMenu.classList.remove("d-none");
    nav.classList.add('mobile');
    navMenu.classList.add("d-block");


  } else {
    navMenu.classList.remove("d-block");
    nav.classList.remove("mobile");
    navMenu.classList.add("d-none");
  }
});
