// $('.carousel').carousel({
//     interval: 2000
//   })


function addToCart(product, price) {
  // Get existing cart items from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add new item to the cart
  cart.push({ product, price });

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}