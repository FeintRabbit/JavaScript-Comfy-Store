import { getElement } from "./utils.js";

const sideBar = getElement(".sidebar-overlay");
const toggleNav = getElement(".toggle-nav");
const closeNav = getElement(".sidebar-close");

toggleNav.addEventListener("click", () => {
  sideBar.classList.add("show");
});
closeNav.addEventListener("click", () => {
  sideBar.classList.remove("show");
});
