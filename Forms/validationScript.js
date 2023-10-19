    // JavaScript code for form validation
	// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function() {
      // Retrieve the input field value
  const inputField = document.getElementById("inputField");

  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    function isAlphanumeric(input) {
      return /^[a-zA-Z0-9]+$/.test(input);
    }

    const inputValue = inputField.value;

    if (isAlphanumeric(inputValue)) {

      alert("Input is valid. Form Submitted");
      
    } else {
      alert("Input must be alphanumeric.")
    }
  });
});
  
      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message
