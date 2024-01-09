 // Function to update the cart display
 function updateCartDisplay() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // Clear previous items

    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.product} - $${item.price}`;
      cartList.appendChild(listItem);
    });
  }

  // Call the function to display cart items on page load
  updateCartDisplay();