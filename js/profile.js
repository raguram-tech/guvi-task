const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

const usernameElement = document.getElementById("username");
usernameElement.textContent = username;
