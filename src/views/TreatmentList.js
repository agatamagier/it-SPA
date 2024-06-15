import { NavButton } from "../navigation/NavButton";
import { TreatmentDetails } from "./TreatmentDetails";
import { cartManager } from "../cart/cart-manager";
import { AddToCartButton } from "../cart/AddToCartButton";

export function TreatmentList() {
  const section = document.createElement("section");

  section.innerHTML = `
        <h1 class="header">Treatment List</h1>
        <p class="loading text-danger">Ladowanie zabiegów...</p>
    `;

  const ul = document.createElement("ul");
  ul.classList.add('treatments-wrapper')

  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const list = treatments.map((treatment) => {
        const li = document.createElement("li");
        li.classList.add("treatment-item");
        li.innerHTML = `
        <h4 class="name">${treatment.name}</h4>
        <img class="treatment-img" src="${require("../assets/capybaras.jpg")}"/>
        <p class="price">
                        <span>${treatment.price.toFixed(2)} PLN</span>
                    </p>
                    
                `;

        const readMoreButton = NavButton("Read more", () =>
          TreatmentDetails(treatment.id)
        );
        readMoreButton.classList.add("read-more")
        const addToCartButton = AddToCartButton(() => {
          alert(`${treatment.name} dodany do koszyka`);
          cartManager.add(treatment)
        }
        );
        li.lastElementChild.append(readMoreButton, addToCartButton);
        return li;
      });

      ul.append(...list);
      section.append(ul);
      section.querySelector(".loading").remove();
    });

  return section;
}
