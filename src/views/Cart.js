import { cartManager } from "../cart/cart-manager";
import { RemoveFromCartButton } from "../cart/RemoveFromCartButton";

export function Cart() {
  const section = document.createElement("section");
  section.classList.add("cart", "wrapper");

  section.innerHTML = `
        <h1 class="header">Koszyk</h1>
        <p>Przegladaj zawartosc swojego koszyka.</p>
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>
                <th>Remove</th>
            </tr>
        </table>

    `;

  const tableRows = cartManager.getAll().map((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${(item.quantity * item.price).toFixed(2)}</td>
            <td>xx-xx-xxxx</td>
            <td></td>
        `;

    const removeFromCartButton = RemoveFromCartButton(() => {
      cartManager.remove(item);
    });

    tr.lastElementChild.append(removeFromCartButton);

    return tr;
  });

  const tableFooter = document.createElement("tr");

  tableFooter.innerHTML = `
        <td></td>
        <td></td>
        <td>
            <strong>${cartManager.getTotalPrice()} PLN</strong>
        </td>
        <td></td>
    `;

  section.querySelector("table").append(...tableRows, tableFooter);

  return section;
}
