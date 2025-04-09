document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (username === 'admin' && password === '1234') {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "profile.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  });
  