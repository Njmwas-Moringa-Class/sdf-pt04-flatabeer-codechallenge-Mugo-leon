document.addEventListener("DOMContentLoaded", () => { //This code runs once the DOM content is completely loaded and ready for modification.

  const baseUrl = "http://localhost:3000";   // This code defines the base URL for the API.
  console.log("API base URL:", baseUrl);

  const DisplayBeerDetails = (beerId) => {  //This code creates a function to fetch and display beer details.
    fetch(`${baseUrl}/beers/${beerId}`)   // This code makes a GET request to the API to fetch beer details using the baseUrl and beerId.
      .then(response => response.json()) // Parses the response as JSON.
      .then(beerInfo => {
        // Codes to retrieve elements by their IDs as stated in the HTML.
        const beerName = document.getElementById("beer-name");
        const beerDescription = document.getElementById("beer-description");
        const beerImage = document.getElementById("beer-image");
        const reviewList = document.getElementById("review-list");

        // Updates the content of HTML elements with beer Information.
        beerName.textContent = beerInfo.name;
        beerDescription.textContent = beerInfo.description;
        beerImage.src = beerInfo.image_url;

        // Clears the review list and add each review as a list item.
        reviewList.innerHTML = "";
        beerInfo.reviews.forEach((review) => {
          const clientrev = document.createElement("li");
          clientrev.textContent = review;
          reviewList.appendChild(clientrev);
        });
      });
  };

  const DisplayAllBeers = () => { // This code creates a function to fetch and display the 10 beers in the menu from db.json.
    fetch(`${baseUrl}/beers`)   // This code makes a GET request to the API to fetch the list of beers using the baseUrl.
      .then(response => response.json()) // Parses the response as JSON.
      // Retrieves the beer list element and clear its contents in the next 3 lines below.
      .then(beers => {
        const beerList = document.getElementById("beer-list");
        beerList.innerHTML = "";

        beers.forEach((beer) => {         // This code iterates through the list of beers and create list items for each beer.
          const clientrev = document.createElement("li");
          clientrev.textContent = beer.name;
          clientrev.addEventListener("click", () => { // This code adds a click event listener to each list item to fetch and display beer details when clicked.
            DisplayBeerDetails(beer.id);
          });
          beerList.appendChild(clientrev);
        });

        if (beers.length > 0) {
          DisplayBeerDetails(beers[0].id);
        }
      });
  };

  // Gets the review form element and add a submit event listener.
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Gets the value of the review input field and add it to the review list as a new list item.
    const newReview = document.getElementById("review").value;
    const reviewList = document.getElementById("review-list");
    const clientrev = document.createElement("li");
    clientrev.textContent = newReview;
    reviewList.appendChild(clientrev);

    document.getElementById("review").value = ""; // This code clears the review input field after adding the review.
  });

  DisplayAllBeers();   // Initial setup: Fetch and display the beer menu when the page loads.
});
