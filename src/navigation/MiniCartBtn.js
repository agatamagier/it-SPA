import { Cart } from "../views/Cart";

export function MiniCartBtn() {
  const miniCartBtn = document.createElement("div");
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const closeBtn = document.querySelector(".action-btn.close");
  const checkOutBtn = document.querySelector(".action-btn.check-out");

  miniCartBtn.classList.add("icon-cart");
  miniCartBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cart"><path d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z"></path></svg>
  
  `;

  miniCartBtn.addEventListener("click", () =>
    body.classList.toggle("showCartTab")
  );
  closeBtn.addEventListener("click", () =>
    body.classList.toggle("showCartTab")
  );
  checkOutBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.append(Cart());
    body.classList.toggle("showCartTab");
  });

  return miniCartBtn;
}

