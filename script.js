// Sample product data
const products = [
    {
        name: "Pintola Fitness Combo: High Protein Chocolate Flavour Creamy Peanut Butter, Added WHEY Protein, 6.2g Fiber, Gluten & Trans Fat Free & 22g High Protein Dark Chocolate Oats, No refined sugar, 910 gram",
        description: "HIGH IN PROTEIN & FIBER - Pintola Dark Chocolate High Protein Peanut Butter contains 30g of protein and 6.2g of dietary fiber per 100g. This makes it an excellent source of protein and dietary fiber without compromising on taste.",
        image: "pintola.png",
        link: "https://amzn.to/41gziYt"
    },
    {
        name: "Vendoz Women & Girls White Casual Sports Shoes Sneakers - 36 EU",
        description: "Exclusive design and durable materials makes every step feel light and breezy. Great engineering strikes a balance in style, made in potent design and as per latest fashion trends.",
        image: "shoe.png",
        link: "https://amzn.to/3DjbTO9"
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
