document.addEventListener("DOMContentLoaded", function () {
  // Email form alert
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thanks for signing up!");
    });
});
