import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const produtos = [
  { id: 1, nome: "Boneca Moranguinho", preco: 89.9 },
  { id: 2, nome: "Pelucia Moranguinho", preco: 69.9 },
  { id: 3, nome: "Mochila Moranguinho", preco: 119.9 },
  { id: 4, nome: "Estojo Moranguinho", preco: 34.9 },
  { id: 5, nome: "Caderno Moranguinho", preco: 29.9 },
  { id: 6, nome: "Caneca Moranguinho", preco: 39.9 },
  { id: 7, nome: "Camiseta Moranguinho", preco: 59.9 },
  { id: 8, nome: "Chaveiro Moranguinho", preco: 19.9 },
  { id: 9, nome: "Adesivos Moranguinho", preco: 14.9 },
  { id: 10, nome: "Kit Festa Moranguinho", preco: 99.9 },
];

// adicionei dois itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart);
