document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const skill = document.getElementById('skill').value.trim();
    const portfolio = document.getElementById('portfolio').value.trim();
    const message = document.getElementById('message');

    if (!name || !email || !skill || !portfolio) {
        message.style.color = "red";
        message.textContent = "All fields are required!";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
    if (!portfolio.match(urlPattern)) {
        message.style.color = "red";
        message.textContent = "Enter a valid portfolio URL.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Sign-Up Successful! Redirecting...";

    // Simulate redirect
    setTimeout(() => {
        window.location.href = "https://gigfloww.com";  
    }, 1500);
});
