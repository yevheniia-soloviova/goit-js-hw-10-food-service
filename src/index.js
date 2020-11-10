import foodCardTpl from "./templates/menuItems.hbs"
import dishes from "./menu.json"

//necessary variables
const dishesListRef = document.querySelector(".js-menu");
const switchRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//create HTML through HANDLEBAR plugin
const markup = foodCardTpl(dishes)

//add HTML on webpage
dishesListRef.insertAdjacentHTML("beforeend", markup)

//add listener for checkbox
switchRef.addEventListener("change", changeTheme)

//change theme function
function changeTheme() {
  if (bodyRef.classList.contains(Theme.LIGHT)) {
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
    localStorage.setItem("theme", Theme.DARK)
  } else if (bodyRef.classList.contains(Theme.DARK)) {
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)
    localStorage.setItem("theme", Theme.LIGHT)
  } 
}

// Check fo visited before and put chosen theme
populateSwitch()
function populateSwitch() { 
    const chosenTheme = localStorage.getItem("theme")
  if (chosenTheme) {
    if (chosenTheme === Theme.DARK) {
      bodyRef.classList.add(Theme.DARK)
      switchRef.checked = true;
    } else if (chosenTheme === Theme.LIGHT) {
      bodyRef.classList.add(Theme.LIGHT)
      switchRef.checked = false;
    }
  } else { bodyRef.classList.add(Theme.LIGHT)}
  }
