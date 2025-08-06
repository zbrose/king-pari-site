document.addEventListener("DOMContentLoaded", function () {
  const emailForm = document.getElementById("emailForm");
  const thankYouMessage = document.createElement("div");
  
  // Check if user has already signed up
  if (localStorage.getItem("hasSignedUp") === "true") {
    showThankYouMessage();
  }
  
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const formData = new FormData(emailForm);
    const email = formData.get('email');
    
    // Submit to Formspree using fetch
    fetch('https://formspree.io/f/xwpqrgjy', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Store signup state
        localStorage.setItem("hasSignedUp", "true");
        
        // Show thank you message
        showThankYouMessage();
      } else {
        throw new Error('Submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error submitting your email. Please try again.');
    });
  });
  
  function showThankYouMessage() {
    // Hide the form
    emailForm.style.display = "none";
    
    // Create and show thank you message
    thankYouMessage.innerHTML = `
      <div class="thank-you-message">
        <h2>Thank you for signing up!</h2>
        <p>We'll keep you updated with the latest news and releases.</p>
      </div>
    `;
    
    // Insert the thank you message where the form was
    emailForm.parentNode.insertBefore(thankYouMessage, emailForm.nextSibling);
  }
});
