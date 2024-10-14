// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const message = document.getElementById("message");
  const loading = document.getElementById("loading");

  // Function to send AJAX request
  const sendData = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Simple validation
    if (name === "" || email === "") {
      message.textContent = "Please fill in both fields.";
      message.style.color = "red";
      return;
    }

    // Show loading indicator
    loading.style.display = "block";
    message.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "main.php", true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        loading.style.display = "none";
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            if (response.success) {
              message.style.color = "green";
              message.innerHTML = response.message;
              console.log("response", response);
              console.log("xhr", xhr);
            } else {
              message.style.color = "red";
              message.textContent = response.message;
            }
          } catch (e) {
            message.style.color = "red";
            message.textContent = "Invalid server response.";
            console.error("Error parsing JSON:", e);
          }
        } else {
          message.style.color = "red";
          message.textContent =
            "An error occurred while processing your request.";
          console.error("Server Error:", xhr.statusText);
        }
      }
    };

    const params = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(
      email
    )}`;

    xhr.send(params);
  };

  document.getElementById("name").addEventListener("blur", sendData);
  document.getElementById("email").addEventListener("blur", sendData);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendData();
  });
});
