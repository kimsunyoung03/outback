window.addEventListener('resize', () => setScreenSize());

window.onload = function() {
  
  /* vh 브라우저 UI무시 */
let vh = 0;
const setVh = () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  };
window.addEventListener('resize', setVh);
setVh();

};
document.addEventListener('DOMContentLoaded', function() {
  
/* vh 브라우저 UI무시 */
let vh = 0;
const setVh = () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  };
window.addEventListener('resize', setVh);
setVh();
})

//   /* iOS 10 핀치줌 막기 */
//   document.documentElement.addEventListener('touchstart', function (event) {
//     if (event.touches.length > 1) {
//       event.preventDefault();
//     }
// }, false);

// var lastTouchEnd = 0;
// document.documentElement.addEventListener('touchend', function (event) {
//     var now = (new Date()).getTime();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
// }, false);
