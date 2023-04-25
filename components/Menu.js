/* eslint-disable */
function menu() {
  const menu = document.querySelector("[data-menu]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleMenu = () => {
    menu.classList.toggle('is-active');
    const isMenuActive = menu.classList.contains('is-active');
    overlay.style.display = isMenuActive ? 'flex' : 'none';
    menu.style.position = isMenuActive ? 'absolute' : '';
    document.body.style.overflow = isMenuActive ? 'hidden' : '';
  }

  menu.addEventListener('click', toggleMenu);

  const hideMenu = () => {
    menu.classList.remove('is-active');
    overlay.style.display = 'none';
    menu.style.removeProperty('position');
    document.body.style.removeProperty('overflow');
  }

  overlay.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', hideMenu);
  })
}

export default menu;
