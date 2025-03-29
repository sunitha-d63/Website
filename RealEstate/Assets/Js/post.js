// ---toggle---

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ----------------------
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const submitBtn = document.querySelector(".submit-btn");
  const postAdBtn = document.querySelector(".post");
  const previewContainer = document.getElementById("imagePreviewContainer");

  let formData = {
    images: [],
  };

  function handleSelection(event) {
    const field = event.target.dataset.field;
    if (!field) return;

    document.querySelectorAll(`[data-field="${field}"]`).forEach((btn) => {
      btn.classList.remove("selected");
    });
    event.target.classList.add("selected");

    formData[field] = event.target.innerText;
    console.log("Selected:", formData);
  }
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", handleSelection);
  });

 
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  submitBtn.addEventListener("click", function () {
    const city = document
      .querySelector(".input-group input:nth-child(1)")
      .value.trim();
    const state = document
      .querySelector(".input-group input:nth-child(2)")
      .value.trim();
    const propertyName = document.querySelector(".full-width").value.trim();
    const availableDate = document.getElementById("availableDate").value;

    if (
      !formData.category ||
      !formData.propertyType ||
      !city ||
      !state ||
      !propertyName ||
      !availableDate
    ) {
      alert("All fields are required!");
      return;
    }

    formData.city = city;
    formData.state = state;
    formData.propertyName = propertyName;
    formData.availableDate = availableDate;

    alert("Submitted successfully");
    modal.style.display = "none";
  });

  document
    .getElementById("photoInput")
    .addEventListener("change", function (event) {
      const files = event.target.files;
      const defaultImage = document.getElementById("defaultImage");

      previewContainer.innerHTML = "";
      formData.images = [];

      if (files.length > 0) {
        if (defaultImage) defaultImage.style.display = "none";
      } else {
        if (defaultImage) defaultImage.style.display = "block";
      }

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.classList.add("preview-image");
          previewContainer.appendChild(img);
          formData.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });

      console.log(`${files.length} images selected.`);
    });

  if (postAdBtn) {
    postAdBtn.addEventListener("click", function () {
      if (
        !formData.category ||
        !formData.propertyType ||
        !formData.city ||
        !formData.state ||
        !formData.propertyName ||
        !formData.availableDate
      ) {
        alert("Please complete all details before posting!");
        return;
      }

      let savedAds = JSON.parse(localStorage.getItem("postedAds")) || [];
      savedAds.push(formData);
      localStorage.setItem("postedAds", JSON.stringify(savedAds));

      const popupModal = document.getElementById("popupModal");
      const popupDetails = document.getElementById("popupDetails");

      popupDetails.innerHTML = `
          <p><strong>Category:</strong> ${formData.category}</p>
          <p><strong>Property Type:</strong> ${formData.propertyType}</p>
          <p><strong>Available From:</strong> ${formData.availableDate}</p>
          <p><strong>City:</strong> ${formData.city}</p>
          <p><strong>State:</strong> ${formData.state}</p>
          <p><strong>Property Name:</strong> ${formData.propertyName}</p>
          <h4>Uploaded Images:</h4>
          <div class="popup-images">
              ${
                formData.images
                  ? formData.images
                      .map((img) => `<img src="${img}" class="preview-image">`)
                      .join("")
                  : ""
              }
          </div>
      `;

      popupModal.style.display = "flex";
      document
        .getElementById("closePopup")
        .addEventListener("click", function () {
          popupModal.style.display = "none";
        });

      alert("Your AD has been posted successfully!");
    });
  } else {
    console.error("Element with class .post not found!");
  }
});