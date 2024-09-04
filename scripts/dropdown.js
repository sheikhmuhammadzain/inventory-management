document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.addEventListener("click", function () {
      this.classList.toggle("active");
      this.querySelector(".ri-arrow-down-s-line").classList.toggle(
        "rotate"
      );
    });
  });