window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > header.offsetHeight) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// ------------button----------
function redirectToPage() {
  window.location.href = "./Pages/login.html";
}

function changeToPage() {
  window.location.href = "./Pages/Contact.html";
}

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

// ------------------Register Form-----------------

const registerForm = document.querySelector(".registerForm");
const username = document.querySelector("#name");
const mobile = document.querySelector("#mobile");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nameSuggestions = document.querySelector("#nameSuggestions");


   // names
   username.addEventListener("input", function () {
    const inputVal = username.value.toLowerCase();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let viewlist = users.filter(viewuser => viewuser.name.toLowerCase().includes(inputVal));

    nameSuggestions.innerHTML = "";
    if (viewlist.length > 0 && inputVal !== "") {
        nameSuggestions.style.display = "block";
        viewlist.forEach(user => {
            let div = document.createElement("div");
            div.textContent = user.name;
            div.addEventListener("click", () => {
                username.value = user.name;
                nameSuggestions.style.display = "none";
            });
            nameSuggestions.appendChild(div);
        });
    } else {
        nameSuggestions.style.display = "none";
    }
});

// Hide
document.addEventListener("click", (e) => {
    if (!username.contains(e.target) && !nameSuggestions.contains(e.target)) {
        nameSuggestions.style.display = "none";
    }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    const user = {
      name: username.value.trim(),
      mobile: mobile.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const old_users = users.some(
      (olduser) => olduser.email === user.email || olduser.mobile === user.mobile
    );

    if (old_users) {
      alert("User already registered with this email or mobile number!");
    } else {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registration successful!");
      window.location.href = "login.html";
    }
  }
});

function validateInputs() {
  const nameVal = username.value.trim();
  const mobileVal = mobile.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  let success = true;
  if (nameVal === "") {
    success = false;
    setError(username, "Name is required");
  } 
  else if (nameVal.length > 20) {
    success = false;
    setError(username, "Name must be at least 20 characters less");
  }
  else {
    setSuccess(username);
  }
  if (mobileVal === "") {
    success = false;
    setError(mobile, "Mobile number is required");
  } else if (!validateMobile(mobileVal)) {
    success = false;
    setError(mobile, "Please enter a valid 10-digit mobile number");
  } else {
    setSuccess(mobile);
  }
  if (emailVal === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordVal === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordVal.length < 8) {
    success = false;
    setError(password, "Password must be at least 8 characters long");
  } else {
    setSuccess(password);
  }
 return success;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
}
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = "";
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", () => {
    setSuccess(input);
  });
});

function validateMobile(mobile) {
  const regex=/^\d{10}$/;
return regex.test(mobile);
}
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}

