gsap.to("nav",{
    backgroundColor: "#252637",
    // height: "100px",
    duration: 0.5,
    scrollTrigger:{
    trigger:"nav",
    scroller:"body",
    // markers:true,
    start:"top -5%",
    end:"top 0",
    scrub:1
    }
})






const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());