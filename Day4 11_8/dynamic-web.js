// 1. mouseover event
// 2. click event

document.getElementById("loremImg").addEventListener("mouseover", (event) => {
  event.target.style.filter = "grayscale(100%)";
  console.log("mouseOver Event!");
});
document.getElementById("loremImg").addEventListener("mouseout", (event) => {
  event.target.style.filter = "none";
  console.log("mouseOut Event!");
});

const toggleButton = document.getElementById("contentToggleButton");
const content = document.getElementById("content");

toggleButton.addEventListener("click", () => {
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    console.log("click Event!");
  } else {
    content.style.display = "none";
    console.log("click Event!");
  }
});
