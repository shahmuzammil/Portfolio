// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById('contactForm').reset(); // Clear form after submission
    } else {
      document.getElementById('formMessage').textContent = 'Please fill in all fields.';
    }
  });
  