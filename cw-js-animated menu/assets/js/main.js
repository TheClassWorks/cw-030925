let tagA = document.querySelectorAll("nav a");
let hoverBox = document.querySelector(".hoverBox");

// tagA[0].addEventListener("mouseenter", () => {
//   hoverBox.style.width = "40px";
// });

tagA.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    console.log(event.target.offsetWidth + "-" + event.target.offsetLeft);
    console.log(event);

    hoverBox.style.width = event.target.offsetWidth + "px";
    hoverBox.style.left = event.target.offsetLeft + "px";
  });
});
