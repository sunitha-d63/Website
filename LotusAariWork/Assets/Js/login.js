// ---------------Toggle---------
document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.getElementById("menu-toggle");
  let menu = document.getElementById("menu");

  function toggleMenu() {
    menu.classList.toggle("active");
  }

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", toggleMenu);
  }
});

// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".loginForm");
  const emailInput = document.querySelector("#loginEmail");
  const passwordInput = document.querySelector("#loginPassword");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // check user
    const checkuser = JSON.parse(localStorage.getItem("users")) || [];
    console.log(checkuser);
    
    if (checkuser.length === 0) {
      alert("No registered user found. Please sign up first.");
      return;
    }

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    if (enteredEmail === "" || enteredPassword === "") {
      alert("Please enter both email and password.");
      return;
    }

    // Find user
    const finduser = checkuser.find(
      (user) => user.email === enteredEmail && user.password === enteredPassword
    );

    if (finduser) {
      alert("Login successful!");
      window.location.href = "../index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
});
