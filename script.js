document.addEventListener('DOMContentLoaded', function() {
  const welcomeButton = document.querySelector('.welcome-button button');
  if (welcomeButton) {
    welcomeButton.addEventListener('click', function() {
      const welcomeScreen = document.querySelector('.welcome');
      welcomeScreen.style.transition = 'opacity 0.3s ease-out';
      welcomeScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'login'}, 'Login', 'login.html');
        window.location.href = 'login.html';
      }, 300);
    });
  }

  const loginButton = document.querySelector('.options button:first-child');
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      const loginScreen = document.querySelector('.login');
      loginScreen.style.transition = 'opacity 0.3s ease-out';
      loginScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'loginpage'}, 'Register', 'loginpage.html');
        window.location.href = 'loginpage.html';
      }, 300);
    });
  }

  const registerButton = document.querySelector('.options button:nth-child(2)');
    if (registerButton) {
    registerButton.addEventListener('click', function() {
      const loginScreen = document.querySelector('.login');
      loginScreen.style.transition = 'opacity 0.3s ease-out';
      loginScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'registerpage'}, 'Register', 'registerpage.html');
        window.location.href = 'registerpage.html';
      }, 300);
    });
  }

  window.addEventListener('popstate', function(event) {
    event;
    window.location.reload();
  });
});
