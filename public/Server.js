const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Load existing cart data
let cartData = [];
const loadCartData = () => {
    try {
        const data = fs.readFileSync('cart.json', 'utf8');
        cartData = JSON.parse(data);
    } catch (err) {
        console.log('No existing cart data found.');
    }
};

// Save cart data to JSON file
const saveCartData = () => {
    fs.writeFileSync('cart.json', JSON.stringify(cartData, null, 2));
};

// Load cart data initially
loadCartData();

// POST endpoint to add item to cart
app.post('/add-to-cart', (req, res) => {
    const { product, quantity } = req.body;

    // Add the new item to the cart array
    cartData.push({ ...product, quantity });

    // Save the updated cart data
    saveCartData();

    res.status(200).send({ message: 'Product added to cart', cart: cartData });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
