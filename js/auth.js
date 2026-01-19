const DEFAULT_USER = {
  username: "admin",
  password: "12345"
};

if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify(DEFAULT_USER));
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (
    username === savedUser.username &&
    password === savedUser.password
  ) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    errorMsg.innerText = "Invalid username or password";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
