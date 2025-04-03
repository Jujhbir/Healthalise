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

  const loginButton2 = document.querySelector('.loginppage-button button');
  if (loginButton2) {
    loginButton2.addEventListener('click', function() {
      const loginpageScreen = document.querySelector('.container');
      loginpageScreen.style.transition = 'opacity 0.3s ease-out';
      loginpageScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'tandc'}, 'T&C', 'tandc.html');
        window.location.href = 'tandc.html';
      }, 300);
    });
  }

  const registerButton2 = document.querySelector('.registerrpage-button button');
  if (registerButton2) {
    registerButton2.addEventListener('click', function() {
      const registerpageScreen = document.querySelector('.container');
      registerpageScreen.style.transition = 'opacity 0.3s ease-out';
      registerpageScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'tandc'}, 'T&C', 'tandc.html');
        window.location.href = 'tandc.html';
      }, 300);
    });
  }

  const tandcButton = document.querySelector('.tandc-conditions-items-button button');
  if (tandcButton) {
    tandcButton.addEventListener('click', function() {
      const tandcScreen = document.querySelector('.container');
      tandcScreen.style.transition = 'opacity 0.3s ease-out';
      tandcScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'personal'}, 'Personal Details', 'personal.html');
        window.location.href = 'personal.html';
      }, 300);
    });
  }

  const personalButton = document.querySelector('.personaldetail-button-container #personalbutton');
  if (personalButton) {
    personalButton.addEventListener('click', function() {
      const personalDetailScreen = document.querySelector('.container');
      personalDetailScreen.style.transition = 'opacity 0.3s ease-out';
      personalDetailScreen.style.opacity = '0';

      setTimeout(function() {
        history.pushState({page: 'homescreen'}, 'Homescreen', 'homescreen.html');
        window.location.href = 'homescreen.html';
      }, 300);
    });
  }

  window.addEventListener('popstate', function(event) {
    event;

    window.location.reload();
  });

  // Retrieve and set the user's name from local storage
  const userName = localStorage.getItem('name') || 'User';
  document.getElementById('displayName').textContent = userName;
});

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}