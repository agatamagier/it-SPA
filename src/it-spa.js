import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.css";

import { Nav } from "./navigation/Nav";
import { Home } from "./views/Home";
import { MiniCart } from "./views/MiniCart";

const main = document.querySelector("main");
main.classList.add("main-container");
const body = document.querySelector("body");
body.append(MiniCart());

main.before(Nav());

main.append(Home());

document.body.addEventListener("navigate", (event) => {
  const Component = event.detail;

  main.innerHTML = "";
  main.append(Component());
});
