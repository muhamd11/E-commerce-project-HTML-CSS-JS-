// go up arrow
let up = document.querySelector(".go-up");

// Go Up Arrow
window.onscroll = () => {
  window.scrollY >= 1000
    ? up.classList.add("show")
    : up.classList.remove("show");
};

// Side Bar for Navigation
let bar = document.querySelector("#bar");
let links = document.querySelector("header .links");
let closing = document.querySelector("#close");

if (bar) {
  bar.addEventListener("click", () => {
    links.classList.add("active");
  });
}
if (closing) {
  closing.addEventListener("click", () => {
    links.classList.remove("active");
  });
}

// Image Slider

let mainImg = document.querySelector(".product-details .img-gallery .main-img");
let subImg = document.querySelectorAll(
  ".product-details .sub-img .img-col .sub-img"
);

subImg.forEach((img) => {
  img.onclick = () => {
    mainImg.style.opacity = 0; // Fade out the main image
    setTimeout(() => {
      mainImg.src = img.src; // Change the image source after fade-out
      mainImg.style.opacity = 1; // Fade in the new image
    }, 500); // Wait for the transition duration (0.5 seconds) before changing the image
  };
});

document.addEventListener("DOMContentLoaded", () => {
  Array.from(document.body.children).forEach((section) => {
    if (section.classList.contains("products")) {
      const products = Array.from(section.querySelector("#products").children);
      products.forEach((product) => {
        product.onclick = () => {
          // Get the selected product image URL
          const selectedProductImage = product.querySelector("img").src;

          // Construct the URL for the single product page with the selected product image as a query parameter
          const singleProductUrl = `single_product.html?productImage=${selectedProductImage}`;

          // Navigate to the single product page with the selected product image URL in the query parameter
          window.location.href = singleProductUrl;
        };
      });
    }
  });

  // Parse the query parameter to get the selected product image URL
  const urlParams = new URLSearchParams(window.location.search);
  const productImage = urlParams.get("productImage");

  // Get the main image element on the single product page
  const mainImg = document.querySelector(
    ".product-details .img-gallery .main-img"
  );

  // Set the main image source to the selected product image URL
  if (productImage) {
    mainImg.src = productImage;
    subImg[0].src = productImage;
  }

  setupCart();
});

function setupCart() {
  const items = Array.from(document.querySelectorAll(".cart table tbody tr"));

  items.forEach((item) => {
    const removeLink = item.querySelector("td:first-child a");
    
    removeLink.addEventListener("click", (event) => {
      event.preventDefault()
      item.remove(); // Remove the row
    });
  });
}

