function toggleDropdown() {
    let dropdown = document.getElementById("cityDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function selectCity(element) {
    let selectedCity = element.innerText;
    document.getElementById("citySelect").innerHTML = `<option value="${selectedCity}">${selectedCity}</option>`;
    document.getElementById("cityDropdown").style.display = "none";
}

function filterCities() {
    let input = document.getElementById("searchCity").value.toLowerCase();
    let cities = document.querySelectorAll(".city-group span");
    cities.forEach(city => {
        if (city.innerText.toLowerCase().includes(input)) {
            city.style.display = "inline";
        } else {
            city.style.display = "none";
        }
    });
}

document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("cityDropdown");
    let selectBox = document.querySelector(".dropdown-container select");
    if (!selectBox.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

// ------------------------



document.addEventListener("DOMContentLoaded", function () {
    const citySelect = document.getElementById("citySelect");
    const cityDropdown = document.getElementById("cityDropdown");
    const cityInput = document.getElementById("cityInput");
    const searchCity = document.getElementById("searchCity");
    const form = document.getElementById("form");
    let selectedRole = "";

    citySelect.addEventListener("click", function (event) {
        event.stopPropagation();
        cityDropdown.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!cityDropdown.contains(event.target) && event.target !== citySelect) {
            cityDropdown.classList.remove("show");
        }
    });

    window.selectCity = function (element) {
        cityInput.value = element.innerText;
        cityDropdown.classList.remove("show");
    };

    window.filterCities = function () {
        let filter = searchCity.value.toLowerCase();
        let cityGroups = cityDropdown.querySelectorAll(".city-group span");

        cityGroups.forEach(function (city) {
            city.style.display = city.innerText.toLowerCase().includes(filter) ? "block" : "none";
        });
    };

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidMobile(mobile) {
        const mobilePattern = /^[0-9]{10}$/;
        return mobilePattern.test(mobile);
    }
 document.querySelectorAll(".radio-group button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); 
            document.querySelectorAll(".radio-group button").forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");
            selectedRole = this.innerText;
        });
    });


    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.querySelector("input[placeholder='Your Name']").value.trim();
        const mobile = document.querySelector("input[placeholder='Mobile Number']").value.trim();
        const email = document.querySelector("input[placeholder='Email Id']").value.trim();
        const city = cityInput.value.trim();

        if (!name || !mobile || !email || !city || !selectedRole) {
            alert("Please fill in all fields and select a role.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidMobile(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
       alert("Submitted successfully!");
        form.reset();
        selectedRole = ""; 
        document.querySelectorAll(".radio-group button").forEach(btn => btn.classList.remove("selected"));
    });
});


// --------------------------


// toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ----------------
function redirectToPage() {
    window.location.href = "../Pages/post.html";
}