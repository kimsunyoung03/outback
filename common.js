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


