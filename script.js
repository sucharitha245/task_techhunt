function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // You can replace the condition with your actual validation logic
    if (username === 'example' && password === 'password') {
      alert('Login successful!');
    } else {
      errorMessage.textContent = 'Incorrect username or password. Please try again.';
    }
  }