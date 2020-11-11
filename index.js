// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const products = await fetchProducts();
  if (products) {
    // add products to store
    setupStore(products);
    const featured = store.filter(products => products.featured === true);
    console.log(featured);
    display(featured, getElement(".featured-center"));
  }
}
