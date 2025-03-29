function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-bg").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-bg").style.display = "none";
}

document.getElementById("popup-bg").addEventListener("click", closePopup);


// form
function validateForm() {
    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let message = document.getElementById("message").value.trim();
    let agree = document.getElementById("agree").checked;

    if (name.length < 3) {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("mobileError").style.display = "none";
    }

    if (message.length < 10) {
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    if (!agree) {
        document.getElementById("agreeError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("agreeError").style.display = "none";
    }

    return isValid;
}

// discussion-form
document.getElementById("discussion-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const topic = document.getElementById("topic").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const messages = document.getElementById("messages").value.trim();

    let isValid = true;

    const topicError = document.getElementById("topic-error");
    const subjectError = document.getElementById("subject-error");
    const messagesError = document.getElementById("messages-error");

    topicError.textContent = "";
    subjectError.textContent = "";
    messagesError.textContent = "";

    if (!topic) {
        topicError.textContent = "Please select a topic.";
        isValid = false;
    }
    if (!subject) {
        subjectError.textContent = "Subject cannot be empty.";
        isValid = false;
    }
    if (!messages) {
        messagesError.textContent = "Message cannot be empty.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    alert("Your discussion has been submitted successfully!");
    document.getElementById("discussion-form").reset();
});

document.getElementById("topic").addEventListener("change", function() {
    document.getElementById("topic-error").textContent = "";
});
document.getElementById("subject").addEventListener("input", function() {
    document.getElementById("subject-error").textContent = "";
});
document.getElementById("messages").addEventListener("input", function() {
    document.getElementById("messages-error").textContent = "";
});

// toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});