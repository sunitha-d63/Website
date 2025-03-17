function redirectToPage() {
  window.location.href = "/Pages/login.html";
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

// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("form");
  const nameInput = document.querySelector("#name");
  const mobileInput = document.querySelector("#mobile");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const messageData = {
        name: nameInput.value.trim(),
        mobile: mobileInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };

      let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
      const alreadyExists = messages.some(
        (msg) =>
          msg.email === emailInput.value.trim() ||
          msg.mobile === mobileInput.value.trim()
      );
      
      if (alreadyExists) {
        alert("You have already submitted a message!");
        contactForm.reset();
      } else {
        messages.push(messageData);
        localStorage.setItem("contactMessages", JSON.stringify(messages));
        alert("Message sent successfully!");
        contactForm.reset();
          }
    }
  });

  function validateInputs() {
    const nameVal = nameInput.value.trim();
    const mobileVal = mobileInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();
    let success = true;

    if (nameVal === "") {
      success = false;
      setError(nameInput, "Name is required");
    } else if (!validateName(nameVal)) {
      success = false;
      setError(nameInput, "Name must be 2-20 characters and contain only letters");
    } else {
      setSuccess(nameInput);
    }

    if (mobileVal === "") {
      success = false;
      setError(mobileInput, "Mobile number is required");
    } else if (!validateMobile(mobileVal)) {
      success = false;
      setError(mobileInput, "Please enter a valid 10-digit mobile number");
    } else {
      setSuccess(mobileInput);
    }

    if (emailVal === "") {
      success = false;
      setError(emailInput, "Email is required");
    } else if (!validateEmail(emailVal)) {
      success = false;
      setError(emailInput, "Please enter a valid email address");
    } else {
      setSuccess(emailInput);
    }

    if (messageVal === "") {
      success = false;
      setError(messageInput, "Message is required");
    } else if (messageVal.length < 10) {
      success = false;
      setError(messageInput, "Message must be at least 10 characters");
    } else {
      setSuccess(messageInput);
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

  document.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => setSuccess(input));
  });


  function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
  }


  function validateEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  }

  function validateName(name) {
    const regex = /^[A-Za-z\s]{2,20}$/;
    return regex.test(name);
  }
});