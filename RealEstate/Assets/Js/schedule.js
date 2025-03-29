document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("visitForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const scheduleBtn = document.getElementById("scheduleBtn");

    const dateOptions = document.querySelectorAll(".date-options .option");
    const timeOptions = document.querySelectorAll(".time-options .option");

    let selectedDate = null;
    let selectedTime = null;

    if (localStorage.getItem("visitData")) {
        const savedData = JSON.parse(localStorage.getItem("visitData"));
        nameInput.value = savedData.name || "";
        emailInput.value = savedData.email || "";
        phoneInput.value = savedData.phone || "";
        selectedDate = savedData.selectedDate || null;
        selectedTime = savedData.selectedTime || null;

       
        if (selectedDate) {
            dateOptions.forEach(option => {
                if (option.getAttribute("data-value") === selectedDate) {
                    option.classList.add("selected");
                }
            });
        }

        //  time
        if (selectedTime) {
            timeOptions.forEach(option => {
                if (option.getAttribute("data-value") === selectedTime) {
                    option.classList.add("selected");
                }
            });
        }
    }

    //selection
    dateOptions.forEach(option => {
        option.addEventListener("click", function() {
            dateOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedDate = this.getAttribute("data-value");
        });
    });

    timeOptions.forEach(option => {
        option.addEventListener("click", function() {
            timeOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedTime = this.getAttribute("data-value");
        });
    });

    function validateForm() {
        let isValid = true;
        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        }

        if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
            emailError.textContent = "Enter a valid email";
            isValid = false;
        }

        if (!phoneInput.value.match(/^\d{10}$/)) {
            phoneError.textContent = "Enter a valid 10-digit phone number";
            isValid = false;
        }

        if (!selectedDate) {
            alert("Please select a date");
            isValid = false;
        }

        if (!selectedTime) {
            alert("Please select a time slot");
            isValid = false;
        }

        return isValid;
    }

    scheduleBtn.addEventListener("click", function(event) {
        event.preventDefault();

        if (validateForm()) {
            const visitData = {
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                selectedDate: selectedDate,
                selectedTime: selectedTime
            };
            localStorage.setItem("visitData", JSON.stringify(visitData));

            alert("Your site visit has been scheduled!");

            localStorage.removeItem("visitData");
            form.reset();
            selectedDate = null;
            selectedTime = null;

            dateOptions.forEach(opt => opt.classList.remove("selected"));
            timeOptions.forEach(opt => opt.classList.remove("selected"));
        }
    });
});


// -------------Start Dragging------
document.addEventListener("DOMContentLoaded", function () {
    const dateOptionsContainer = document.querySelector(".date-options");
    let isDragging = false;
    let startX, scrollLeft;

    dateOptionsContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - dateOptionsContainer.offsetLeft;
        scrollLeft = dateOptionsContainer.scrollLeft;
        dateOptionsContainer.style.cursor = "grabbing";
    });

    dateOptionsContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - dateOptionsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        dateOptionsContainer.scrollLeft = scrollLeft - walk;
    });

    dateOptionsContainer.addEventListener("mouseup", () => {
        isDragging = false;
        dateOptionsContainer.style.cursor = "grab";
    });

    dateOptionsContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });
});

// ---------------------------

document.addEventListener("DOMContentLoaded", function () {
    const similarProjectContainer = document.querySelector(".similar_project");

    let isDragging = false;
    let startY, scrollTop;

    similarProjectContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startY = e.pageY - similarProjectContainer.offsetTop;
        scrollTop = similarProjectContainer.scrollTop;
        similarProjectContainer.style.cursor = "grabbing";
    });

    similarProjectContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const y = e.pageY - similarProjectContainer.offsetTop;
        const walk = (y - startY) * 2;
        similarProjectContainer.scrollTop = scrollTop - walk;
    });

    similarProjectContainer.addEventListener("mouseup", () => {
        isDragging = false;
        similarProjectContainer.style.cursor = "grab";
    });

    similarProjectContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });
});



// ---toggle---

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});