function showNotification(button) {
    let listing = button.closest('.listing');
    let notification = listing.querySelector('.notification');
    if (notification.style.display === 'block') {
        notification.style.display = 'none';
    } else {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
}

// toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// -------------
function redirectToPage() {
    window.location.href = "../Pages/schedule.html"; 
}