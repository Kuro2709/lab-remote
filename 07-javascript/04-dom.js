// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
document.addEventListener("DOMContentLoaded", function () {
  // Fetch DOM elements
  const userInput1 = document.getElementById("userInput1");
  const copyButton = document.getElementById("copy");
  const output1 = document.getElementById("output");

  // Add click event listener to the 'Copy Text' button
  copyButton.addEventListener("click", function () {
    // Copy user input to the output area
    output1.textContent = userInput1.value;
  });
});
// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
document.addEventListener("DOMContentLoaded", function () {
  // Fetch DOM elements for the second section
  const userInput2 = document.getElementById("userInput2");
  const output2 = document.getElementById("output");

  // Add input event listener to the second input field
  userInput2.addEventListener("input", function () {
    // Copy user input to the output area
    output2.textContent = userInput2.value;
  });
});
