class Menu {
  #menu;
  #overlay;
  constructor() {
    this.#menu = document.querySelector("[data-menu]");
    this.#overlay = document.querySelector("[data-overlay]");
    this.toggleMenu();
    this.hideMenu();
    this.addMenuListener();
    this.addOverlayItemsListener();
  }

  get menu() {
    return this.#menu;
  }

  set menu(menu) {
    if (!(menu instanceof HTMLMenuElement)) {
      throw new Error("Menu must be an HTML element");
    }
    this.#menu = menu;
  }

  get overlay() {
    return this.#overlay;
  }

  set overlay(overlay) {
    if (!(overlay instanceof HTMLMenuElement)) {
      throw new Error("Overlay must be an HTML element");
    }
    this.#overlay = overlay;
  }

  toggleMenu = () => {
    const { menu, overlay } = this;
    menu.classList.toggle("is-active");
    const isMenuActive = menu.classList.contains("is-active");
    overlay.classList.add = isMenuActive ? "flex" : "hidden";
    menu.classList.add = isMenuActive ? "absolute" : "";
    document.classList.add = isMenuActive ? "overflow-hidden" : "";
  };

  hideMenu = () => {
    this.menu.classList.remove("is-active");
    this.overlay.classList.add("hidden");
    this.menu.classList.remove("absolute");
    this.menu.classList.remove("overflow-hidden");
  };

  addMenuListener = () => {
    this.menu.addEventListener("click", this.toggleMenu);
  };

  addOverlayItemsListener = () => {
    this.overlay.querySelectorAll(".menu-link").forEach((link) => {
      link.addMenuListener("click", this.hideMenu);
    });
  };
}

export default Menu;
