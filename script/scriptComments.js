function validateForm() {
  
    var username = document.getElementById("username").value;
    if (username.length < 4 || username.length > 14 || !/^[a-zA-Z0-9_]+$/.test(username)) {
        alert("Username must be 4-14 characters long, and can only contain letters, numbers, and underscores.");
        return false;
    }

   
    var password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    return true;
}

document.getElementById("password").addEventListener("input", function () {
    var password = document.getElementById("password").value;
    var message = document.getElementById("passwordMessage");

    if (password.length >= 8) {
        message.style.color = "green";
        message.innerHTML = "Password is strong.";
    } else {
        message.style.color = "red";
        message.innerHTML = "Password should be at least 8 characters long.";
    }
});