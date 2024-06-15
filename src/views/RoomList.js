import { AddToCartButton } from "../cart/AddToCartButton";
import { NavButton } from "../navigation/NavButton";
import { RoomDetails } from "./RoomDetails";
import { cartManager } from "../cart/cart-manager";

export function RoomList() {
  const section = document.createElement("section");
  const main = document.querySelector("main");
  section.innerHTML = `
        <h1 class="header">Room List</h2>
        <p class="loading text-danger">Ladowanie pokoi...</p>
    `;

  const ul = document.createElement("ul");
  ul.classList.add("rooms-container");
  //http://localhost:3000/rooms
  // Pobieramy pokoje (surowe dane)
  fetch("http://localhost:3000/rooms")
    .then((response) => response.json())
    .then((rooms) => {
      // Wytwarzamy elementy listy
      const list = rooms.map((room) => {
        const li = document.createElement("li");
        li.classList.add("room-item");
        li.innerHTML = `
        <img src="${require("../assets/capybaras.jpg")}"/>
                    <h4 class="name">${room.name}</h4>
                    
                    
                    <p class="price">
                        ${room.price.toFixed(2)} PLN
                    </p>
                    <div class='date'>
                    <label for="start">Start date:
                    <input type="date" id="start" name="trip-start" value="${new Date()}" min="${new Date()
          .toJSON()
          .slice(0, 10)}" max="2050-12-31" required />
                    <span class="validity"></span>
                    </label>
                    <label for="end">End date:
                    <input type="date" id="end" name="trip-start" value="${new Date()
                      .toJSON()
                      .slice(0, 10)}" min="${new Date()}" min="${new Date()
          .toJSON()
          .slice(0, 10)}" max="2050-12-31" required />
                    <span class="validity"></span>
                    </label>
                    </div>
                 
                `;

        // let start = document.querySelector(".date input#start").value;
        // let end = document.querySelector(".date input#start").value;
        // let date = { start: start, end: end };

        const readMoreButton = NavButton("Read more", () => RoomDetails(room));
        const addToCartButton = AddToCartButton(() => {
          alert(`${room.name} dodany do koszyka`);
          cartManager.add(room);
        });
        readMoreButton.classList.add("read-more");
        li.append(readMoreButton, addToCartButton);

        return li;
      });

      // ul.append(lis[0]. list[1], ...);
      ul.append(...list);
      section.append(ul);
      section.querySelector(".loading").remove();
    });

  return section;
}
