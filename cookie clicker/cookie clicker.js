var cookieCount = 0;
var cookie = document.getElementById('cookie');
var cookieCountElem = document.getElementById('cookie-count');

cookie.addEventListener('click', function() {
  cookieCount++;
  cookieCountElem.textContent = cookieCount;
});
