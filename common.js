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