import rooplabel from './modules/script';
import swapi from './modules/swapi';

window.addEventListener('DOMContentLoaded', () => {
  setInterval(rooplabel, 1000);
  swapi();
});
