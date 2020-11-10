import menuItemTpl from "./templates/menuItems.hbs"
import dishes from "./menu.json"

const menuItemMarkup = createMenuItemMarkup(dishes);

const galleryList = document.querySelector('.js-menu');

const ingredientsList = document.querySelector('.tag-list');

galleryList.insertAdjacentHTML("beforeend", menuItemMarkup);

function createMenuItemMarkup(dishes) {
 
  return dishes.map(menuItemTpl).join("");
};
const bodyEl = document.querySelector('body');
const themeAdjusterCheckboxEl = document.querySelector('.theme-switch__toggle');
themeAdjusterCheckboxEl.addEventListener('change', onThemeChange);

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onThemeChange(evt) {
  const currentTheme = evt.currentTarget.checked ? 'dark-theme' : 'light-theme';
  localStorage.setItem('pageTheme', currentTheme);
  const savedTheme = localStorage.getItem('pageTheme');
  console.log(savedTheme);
  if (savedTheme === theme.LIGHT) {
    bodyEl.classList.remove(theme.DARK);
    bodyEl.classList.add(theme.LIGHT);
  } else {
    bodyEl.classList.remove(theme.LIGHT);
    bodyEl.classList.add(theme.DARK);
  }
}

onLocalStorageChange();
function onLocalStorageChange() {
if (
    localStorage.getItem('pageTheme') === null ||
    localStorage.getItem('pageTheme') === 'light-theme'
  ) {
    bodyEl.classList.add(theme.LIGHT);
    // themeAdjusterCheckboxEl.checked = false;
  } else {
    bodyEl.classList.add(theme.DARK);
    themeAdjusterCheckboxEl.checked = true;
  }
}