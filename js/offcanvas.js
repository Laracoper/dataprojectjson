function closeOffcanvasAndNavigate(event, target) {
  event.preventDefault(); // Предотвращаем стандартное действие ссылки (переход)
  var offcanvasElement = document.getElementById('offcanvasNavbar');
  var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); // Получаем экземпляр оффканваса
  offcanvas.hide(); // Закрываем оффканвас
  if (target.startsWith('#')) {
    // Если это якорь на текущей странице
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  } else {
    // Иначе перенаправляем на другую страницу
    window.location.href = target;
  }
}