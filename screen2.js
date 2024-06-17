const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("show"); // Toggle show/hide class
});

// const imgElement = document.querySelector(".done-image");
// imgElement.addEventListener("click", ()=>{
//   imgElement.style.opacity = 0;
//   setTimeout(() => {
//     imgElement.src = "/assets/Done.png";

//     imgElement.style.opacity = 1;
//   }, 300);
// });

  // Ensure the script runs after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("add-friend");

    const doneImage = document.querySelector(".done-image");

    doneImage.addEventListener("click", function() {
      doneImage.style.transition = "opacity 0.3s ease-in-out";
      doneImage.style.opacity = 0;
    
      setTimeout(() => {
        doneImage.src = "/assets/Done.png";
      }, 100);
    
      setTimeout(() => {
        doneImage.style.opacity = 1;
      }, 400);
    });
  });    



