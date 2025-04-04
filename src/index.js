import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee cart!")

const item1 = await createItem("Projetor FHD", 1300, 2);
const item2 = await createItem("Tela para projetor", 88, 2);

// Add itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Deletar itens
await cartService.deleteItem(myCart, item2.name);
await cartService.deleteItem(myCart, item1.name);

console.log("Shopee cart TOTAL is: ");
await cartService.calculateTotal(myCart);
