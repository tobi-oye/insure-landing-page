let hamburgerButton = document.querySelector(".hamburger");
let mobileNav = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
  console.log("hello world");
  if (mobileNav.style.display === "block" && screen.width <= 700) {
    return (mobileNav.style.display = "none");
  } else {
    return (mobileNav.style.display = "block");
  }
});
