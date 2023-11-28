document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    const quantityInput = document.querySelector('.quantity-input');
  
    minusBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    plusBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue < 1000) {
        quantityInput.value = currentValue + 1;
      }
    });
  });