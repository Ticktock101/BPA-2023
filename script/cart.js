 // Function to update the cart display
 function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');

    while (cartList.firstChild)
    {
        cartList.removeChild(cartList.firstChild);
    }

    let totalAmountNum = 0;

    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((item, index) => {
      const listItemDiv = document.createElement('div');

      listItemDiv.classList.add('col-12', 'd-flex', 'align-items-center', 'justify-content-center', 'p-6');

      const listItem = document.createElement("p");
      listItem.textContent = `${item.product} - $${item.price}`;

      const listItemButton = document.createElement("button");
      listItemButton.innerHTML = "remove";

      listItemButton.classList.add("remove-button")

      listItemButton.onclick = () => removeFromCart(index);

      listItemDiv.appendChild(listItem);
      listItemDiv.appendChild(listItemButton);
      cartList.appendChild(listItemDiv);

      totalAmountNum += Number(item.price);
      
    });

    const totalAmountDiv = document.getElementById("total-amount");

    const totalAmount = document.createElement('p');

    // totalAmount.style.marginLeft = 'auto';

    while (totalAmountDiv.firstChild)
    {
        totalAmountDiv.removeChild(totalAmountDiv.firstChild);
    }

    // Display the total amount
    totalAmount.textContent = `Total Amount: $${totalAmountNum.toFixed(2)}`;

    totalAmountDiv.appendChild(totalAmount);


    
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