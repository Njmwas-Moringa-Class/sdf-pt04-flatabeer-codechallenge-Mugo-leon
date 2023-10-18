document.addEventListener('DOMContentLoaded', function () {
    const beerNameInput = document.getElementById('beer-name');
    const newBeerNameInput = document.getElementById('new-beer-name');
    const addBeerNameButton = document.getElementById('add-beer-name');
  
    addBeerNameButton.addEventListener('click', function () {
      const newBeerName = newBeerNameInput.value;
      if (newBeerName) {
        beerNameInput.textContent = newBeerName;
        newBeerNameInput.value = ''; 
      }
    });
  });
 
  document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const beerImage = document.getElementById('beer-image');
  
    fileInput.addEventListener('change', function () {
      const selectedFile = fileInput.files[0];
  
      if (selectedFile) {
        const reader = new FileReader();
        
        reader.onload = function () {
          beerImage.src = reader.result;
        };
        
        reader.readAsDataURL(selectedFile);
      } else {
        
        beerImage.src = 'assets/image-placeholder.jpg';
      }
    });
  });
  

