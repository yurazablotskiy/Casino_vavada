document.addEventListener("DOMContentLoaded", function () {
  // Обробник кліку для кнопки "Get bonus"
  document.getElementById("bonusButton").addEventListener("click", function () {
    alert("Congratulations! Your free bonus has been activated.");
  });

  // Відкриття модального вікна при натисканні кнопки "Login"
  document.getElementById("loginButton").addEventListener("click", function () {
    alert("Redirecting to login page...");
    window.location.href = "login.html"; // Тут можна вказати справжній лінк на сторінку входу
  });

  // Перехід на сторінку реєстрації при натисканні кнопки "Registration"
  document
    .getElementById("registerButton")
    .addEventListener("click", function () {
      alert("Redirecting to registration page...");
      window.location.href = "register.html"; // Тут можна вказати справжній лінк на сторінку реєстрації
    });
});
