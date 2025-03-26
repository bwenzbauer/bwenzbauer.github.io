function sanitizeInput(input) {
    const element = document.createElement('div');
    if (input) {
      element.innerText = input;
      element.textContent = input;
    }
    return element.innerHTML;
  }

  document.getElementById('signupForm').addEventListener("submit", function(event) {
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    if (password.includes(username)) {
      event.preventDefault();
      alert("Your password cannot contain your username.");
    }

    const sanitizedEmail = sanitizeInput(document.getElementById('email').value);
    const sanitizedYear = sanitizeInput(document.getElementById('year').value);
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedPassword = sanitizeInput(password);

    console.log({
      email: sanitizedEmail,
      yearOfBirth: sanitizedYear,
      username: sanitizedUsername,
      password: sanitizedPassword
    });
  });

  document.getElementById('password').addEventListener("input", function() {
    let password = this.value;
    const missing = [];

    if (password.length < 8) missing.push("8-character minimum");
    if (!/[a-z]/.test(password)) missing.push("Lower-case letter");
    if (!/[A-Z]/.test(password)) missing.push("Upper-case letter");
    if (!/[0-9]/.test(password)) missing.push("Number");
    if (!/[!@#$%]/.test(password)) missing.push("Special Character (!, @, #, $, %)");

    const username = document.getElementById('username').value;
    if (password.includes(username)) {
      missing.push("Your password cannot contain your username");
    }

    let output = "";
    if (missing.length > 0) {
      output = "<strong>Missing: </strong>" + missing.join(", ");
    }

    let strength = "weak", color = "red";
    if (missing.length === 0) {
      strength = "strong";
      color = "green";
    } else if (missing.length < 3) {
      strength = "medium";
      color = "orange";
    }

    output = "Password strength: <span style='color: " + color + "'>" + strength + "</span><br>" + output;
    document.getElementById('passwordMessage').innerHTML = output;
  });

  // Real-time username validation
  document.getElementById('username').addEventListener("input", function() {
    let username = this.value;
    const usernamePattern = /^[a-zA-Z0-9_]{4,14}$/;
    if (!usernamePattern.test(username)) {
      this.setCustomValidity("Username must be 4-14 characters and can only contain letters, numbers, and underscores.");
    } else {
      this.setCustomValidity("");
    }
  });