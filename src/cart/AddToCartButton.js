export function AddToCartButton(callback) {
  const addToCartButton = document.createElement("button");

  addToCartButton.textContent = "Add to cart";
  addToCartButton.classList.add("btn-add");
  addToCartButton.addEventListener("click", callback);

  return addToCartButton;
}
