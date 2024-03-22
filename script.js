let loginForm = document.querySelector(".my-form");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("username-error");
let passwordError = document.getElementById("password-error");

const userCredentials = { uname: "Pratik", password: "Thakur@2003" };

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  if (usernameInput.value !== userCredentials.uname) {
    usernameError.textContent = "Invalid username";
    usernameInput.classList.add("error");
    isValid = false;
  } else {
    usernameError.textContent = "";
    usernameInput.classList.remove("error");
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must contain one uppercase letter, one lowercase letter, one number, one symbol, and be at least 6 characters long";
    passwordInput.classList.add("error");
    isValid = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
  }

  if (isValid) {
    window.location.href = "./welcome_page.html";
  }
});

// Add input event listeners for real-time validation
usernameInput.addEventListener("input", () => {
  if (usernameInput.value === userCredentials.uname) {
    usernameError.textContent = "";
    usernameInput.classList.remove("error");
  } else {
    usernameError.textContent = "Invalid username";
    usernameInput.classList.add("error");
  }
});

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;

  const passwordStrengthRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (
    !passwordStrengthRegex.test(password) &&
    passwordInput.value != userCredentials.password
  ) {
    passwordError.textContent =
      "Invalid Password (Password must contain one uppercase letter, one lowercase letter, one number, one symbol, and be at least 6 characters long)";
    passwordInput.classList.add("error");
  } else if (
    passwordStrengthRegex.test(password) &&
    passwordInput.value != userCredentials.password
  ) {
    passwordError.textContent =
      "Invalid Input";
    passwordInput.classList.add("error");
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
  }
});
