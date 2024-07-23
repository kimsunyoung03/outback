/* vh 브라우저 UI무시 */
const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
  };
  window.addEventListener('resize', setVh);
  setVh();


  /* iOS 10 핀치줌 막기 */
  document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
}, false);

var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

/* 이전페이지 기억못하게 하기*/
history.pushState(null, null, location.href)
	window.onpopstate = function () {
	history.go(1)
}