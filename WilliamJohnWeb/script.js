// Get elements from the DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitBtn = document.querySelector('button');

// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form from submitting

  // Get form values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate form inputs
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Send form data to server
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  fetch('/send-message', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert('Message sent successfully.');
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again later.');
    });
});