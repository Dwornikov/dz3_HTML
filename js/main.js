function showName() {
    var name = prompt('Введите ваше имя:');
    if (name != null) {
      document.getElementById('output').textContent = 'Привет, ' + name + '!';
    }
  }