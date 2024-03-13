// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Option #1
// Add an event listener using jQuery
$("#copy").on("click", function () {
  // Fetch jQuery objects representing specific elements in the DOM
  let $userInput1 = $("#userInput1");
  let $output1 = $("#output1");

  // Set the content of the output element
  $output1.text($userInput1.val());
});

// Exercise #2:
// When the user enters input text, copy the user input to the output area

// Option #2
// Add an event listener using jQuery
$("#userInput2").on("input", function () {
  // Fetch jQuery objects representing specific elements in the DOM
  let $userInput2 = $("#userInput2");
  let $output2 = $("#output2");

  // Set the content of the output element
  $output2.text($userInput2.val());
});
