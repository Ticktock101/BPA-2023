  // Function to update the cart display
  function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');

    while (cartList.firstChild)
    {
        cartList.removeChild(cartList.firstChild);
    }

    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
      const listItemDiv = document.createElement('div');

      listItemDiv.classList.add('col-12', 'd-flex', 'align-items-center', 'justify-content-center');

      const listItem = document.createElement("p");
      listItem.textContent = `${item.product} - $${item.price}`;

      listItemDiv.appendChild(listItem);
      cartList.appendChild(listItemDiv);
    });
  }

  // Function to remove an item from the cart
  function removeFromCart(index) {
    // Get existing cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    updateCartDisplay();
  }

  // Call the function to display cart items on page load
  updateCartDisplay();