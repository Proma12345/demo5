document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorDiv = document.getElementById("error");

    if (password !== confirmPassword) {
        errorDiv.textContent = "Passwords do not match.";
        event.preventDefault(); // Prevent form submission
    } else {
        errorDiv.textContent = "";
    }
});