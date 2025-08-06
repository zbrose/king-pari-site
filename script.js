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

    fetch("https://formspree.io/f/xwpqrgjy", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          showThankYouMessage();
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error submitting your email. Please try again.");
      });
  });

  function showThankYouMessage() {
    emailForm.style.display = "none";

    thankYouMessage.innerHTML = `
      <div class="thank-you-message">
        <h2>Thank you for signing up!</h2>
        <p>We'll keep you updated with the latest news and releases.</p>
      </div>
    `;

    emailForm.parentNode.insertBefore(thankYouMessage, emailForm.nextSibling);
  }
});
