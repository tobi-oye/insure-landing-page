let hamburgerButton = document.querySelector(".hamburger");
let mobileNav = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
  console.log("hello world");
  if (mobileNav.style.display === "none") {
    return (mobileNav.style.display = "block");
  } else {
    return (mobileNav.style.display = "none");
  }
});
