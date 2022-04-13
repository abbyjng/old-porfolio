document.querySelectorAll(".expand-imgs img").forEach((elt) => {
  elt.addEventListener("click", function () {
    if (this.style.position == "" || this.style.position == "static") {
      this.style.position = "fixed";
      this.style.left = "50%";
      this.style.top = "50%";
      this.style.transform = "translate(-50%, -50%)";
      this.style.padding = "1000px";
      this.style.maxWidth = "90%";
      this.style.maxHeight = "90%";
      this.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      this.style.position = "static";
      this.style.transform = "none";
      this.style.padding = "5px";
      this.style.backgroundColor = "transparent";
      this.style.maxHeight = "100%";
      this.style.width = "90%";
    }
  });
});
