// app.js


// Get the sign-up form and submit button
const signupForm = document.getElementById('signup-form');
const signupSubmitBtn = document.getElementById('signup-submit-btn');

// Add an event listener to the sign-up form on form submission
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behaviour

  // Get the form data
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // TODO: add code to validate the form data

  // Redirect the user to the dashboard page upon successful sign-up
  window.location.href = 'puzzle_starts_here.html';
});
