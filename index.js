document.addEventListener('DOMContentLoaded', function () {
    const beerNameInput = document.getElementById('beer-name');
    const newBeerNameInput = document.getElementById('new-beer-name');
    const addBeerNameButton = document.getElementById('add-beer-name');
  
    addBeerNameButton.addEventListener('click', function () {
      const newBeerName = newBeerNameInput.value;
      if (newBeerName) {
        beerNameInput.textContent = newBeerName;
        newBeerNameInput.value = ''; // Clear the input field
      }
    });
  });
  
