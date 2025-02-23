// Sample product data
const products = [
    {
        name: "Wireless Earbuds - Boat Immortal 111",
        description: "This is a sample product description.",
        image: "111.png",
        link: "https://www.amazon.com/dp/B08N5WRWNW"
    },
    {
        name: "Wireless keyboard - Zebronics",
        description: "This is another sample product description.",
        image: "zeb.png",
        link: "https://www.flipkart.com/some-product"
    },
    {
        name: "Noice Voetex Plus Smart Watch",
        description: "Yet another sample product description.",
        image: "noi.png",
        link: "https://www.amazon.com/dp/B08N5WRWNW"
    }
    
];

// Function to create product cards
function createProductCard(product) {
    return `
        <div class="col-md-4">
            <div class="product-card">
                <a href="${product.link}" target="_blank">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </a>
            </div>
        </div>
    `;
}

// Function to render product cards
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = products.map(createProductCard).join('');
}

// Render products on page load
document.addEventListener('DOMContentLoaded', renderProducts);
