const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Remove the loading spinner
      const loadingSpinner = document.getElementById("loading");
      loadingSpinner.style.display = "none";

      // Iterate through the books and create elements for each
      data.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("text-center", "my-3");

        const titleElement = document.createElement("h2");
        titleElement.textContent = book.name;

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.authors.join(", ")}`;

        const publicationYearElement = document.createElement("p");
        publicationYearElement.textContent = `Publication Year: ${book.released}`;

        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Number of Pages: ${book.numberOfPages}`;

        // Append elements to the book container
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(publicationYearElement);
        bookElement.appendChild(pagesElement);

        // Append the book container to the main container
        app.appendChild(bookElement);
      });

      // Update styles to center all the books in the container
      app.style.display = "flex";
      app.style.flexDirection = "column";
      app.style.alignItems = "center";
    })
    .catch((error) => console.error("Error fetching data:", error));
};

fetchData(url);
