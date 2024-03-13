// 02-ajax-jquery.js
const url = "https://anapioficeandfire.com/api/books/";

const app = $("#books");
const loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);
  let element = $("<div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  $("<h4>").text(item.name).appendTo(element);
  $("<p>").text(`by ${item.authors[0]}`).appendTo(element);
  $("<p>").text(item.released.substr(0, 4)).appendTo(element);
  $("<p>").text(`${item.numberOfPages} pages`).appendTo(element);

  app.append(element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    success: (data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    },
    error: (error) => {
      console.log(error);
      let li = $("<li>").text("An error occurred. Please try again.");
      app.append(li);
    },
    complete: () => {
      loading.remove();
    },
  });
};

fetchData(url);
