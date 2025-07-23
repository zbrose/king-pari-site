document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thanks for signing up!");
    });
});
