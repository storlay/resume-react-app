(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
  try {
    var l = localStorage.getItem('locale');
    if (l === 'en' || l === 'ru') {
      document.documentElement.lang = l;
      if (l === 'en') {
        document.title = 'Dmitrii Ivanov — Python Backend Developer';
      }
    }
  } catch (e) {}
})();
