document.addEventListener("DOMContentLoaded", function() {
    const doneImages = document.querySelectorAll(".done-image");
  
    doneImages.forEach(image => {
      image.addEventListener("click", function() {
        if (this.src.includes("add")) {
          this.classList.add("hidden");
          setTimeout(() => {
            this.src = "/assets/Done.png";
            this.classList.remove("hidden");
          }, 200);
        }
      });
    });
  });
  