import { Cart } from "../views/Cart";

export function RemoveFromCartButton(callback) {
  const removeFromCartButton = document.createElement("button");

  removeFromCartButton.classList.add("btn", "btn-secondary");
  removeFromCartButton.textContent = "Remove";
  removeFromCartButton.addEventListener("click", () => {
    callback();

    // Wymuszamy odswiezenie widoku koszyka
    const navigateEvent = new CustomEvent("navigate", {
      detail: Cart,
    });

    document.body.dispatchEvent(navigateEvent);
  });

  return removeFromCartButton;
}
