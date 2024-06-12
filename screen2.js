const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("show"); // Toggle show/hide class
});
const imgElement = document.querySelector(".icon-image img");
imgElement
function switchImage() {
 

  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = "/assets/Done.png";

    imgElement.style.opacity = 1;
  }, 300);
}
