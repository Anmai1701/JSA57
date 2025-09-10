document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const verifyPassword = document.getElementById("verifyPassword").value.trim();
  
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const verifyPasswordError = document.getElementById("verifyPasswordError");
  
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    verifyPasswordError.textContent = "";
  
    let valid = true;
  
    if (username.length < 6 || username.length > 18) {
      usernameError.textContent = "Username phải từ 6 đến 18 ký tự";
      valid = false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Email không đúng định dạng";
      valid = false;
    }
  
    if (password.length < 8 || password.length > 20) {
      passwordError.textContent = "Password phải từ 8 đến 20 ký tự";
      valid = false;
    }
  
    if (verifyPassword !== password) {
      verifyPasswordError.textContent = "Verify Password phải trùng với Password";
      valid = false;
    }
  
    if (valid) {
      alert("Đăng ký thành công với username: " + username);
    }
  });