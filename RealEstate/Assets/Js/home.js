const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// -----------------------------------
document
.querySelector(".dropdown_toggle")
.addEventListener("click", function () {
  let dropdownMenu = document.querySelector(".dropdown_menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
let dropdown = document.querySelector(".dropdown_menu");
if (!event.target.closest(".search_container")) {
  dropdown.style.display = "none";
}
});

document.querySelectorAll(".city").forEach((city) => {
city.addEventListener("click", function () {
  document.querySelector(".dropdown_toggle").innerText = this.innerText;
  document.querySelector(".dropdown_menu").style.display = "none";
});
});

// -----------------------------

function startAnimation() {
  let slider = document.querySelector(".slider-container");

  // Toggle animation class
  if (slider.classList.contains("animate")) {
    slider.classList.remove("animate")
  } else {
    slider.classList.add("animate");
  }
}

// --------------------------------
function redirectToPage() {
  window.location.href = "./Pages/About.html"; 
}
