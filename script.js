const accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "none" ? "block" : "none";
    const toggle = document.querySelectorAll(".plus");
    toggle[i].transform = "rotate(-225deg)";
    toggle[i].transition = "";
    toggle[i].src =
      panel.style.display === "none"
        ? "./assets/images/icon-plus.svg"
        : "./assets/images/icon-minus.svg";
  });
}
