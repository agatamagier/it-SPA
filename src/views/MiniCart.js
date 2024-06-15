import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../cart/RemoveFromCartButton";

export function MiniCart() {
  const miniCart = document.createElement("div");
  miniCart.classList.add("mini-cart");
  miniCart.innerHTML = `
        <h3 class="mini-cart--title">Koszyk</h3>
        <div class="mini-cart--list">
            <ul></ul>
        </div>
        <div class="actions">
        <button class="action-btn close">Zamknij</button>
        <button class="action-btn check-out">Do kasy</button>
        </div>
    
  `;

  const cart = localStorage.getItem("it_spa_cart");
  console.log("cart", cart);
  let cartItems = cartManager.getAll().map((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = `
            <div class="item-image">
            <img src="${require("../assets/1cat.jpg")}"/>
            </div>
            <p class="item-name">${item.name}</p>
            <p class="item-price">${(item.quantity * item.price).toFixed(2)}</p>
            <div class="item-quantity">
            <span class="minus"><</span>
            <span>${item.quantity}</span>
            <span class="plus">></span>
            </div>
            
        `;

    const removeFromCartButton = RemoveFromCartButton(() => {
      cartManager.remove(item);
    });
    removeFromCartButton.innerHTML = `<i class="fa fa-trash-o" style="font-size:24px;color:red"></i>
    `;
    li.append(removeFromCartButton);

    return li;
  });
  miniCart.querySelector(".mini-cart--list").append(...cartItems);

  return miniCart;
}
