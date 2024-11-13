document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    loginBtn.addEventListener("click", () => {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        if (username === '' || password === '') {
            displayError('Please fill in both fields.');
            return;
        }
    
        // Perform login action (this is a placeholder, implement actual login logic here)
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect or perform other actions after successful login
        } else {
            displayError('Invalid username or password.');
        }
    
    });

    registerBtn.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });
});
