let hamburgerButton = document.querySelector(".hamburger");
let mobileNav = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
  console.log("hello world");
  if (mobileNav.className === "") {
    return (mobileNav.className = "resp");
  } else {
    return (mobileNav.className = "");
  }
});
