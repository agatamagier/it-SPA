export function RoomDetails(room) {
  const section = document.createElement("section");
  section.classList.add("detail", "room", "flip-card");

  section.innerHTML = `
  <div class="flip-card-inner">
  <div class="flip-card-front">
  <h2 class="header">${room.name}</h2>
 <p>${room.price.toFixed(2)} PLN</p>
 <p>Ilość łóżek: ${room.beds} </p>
 <p>Maxymalna ilość gości: ${room.guests} </p>
  </div>
  <div class="flip-card-back">
  <ul>
    <li>Lorem ipsum dolor sit amet. </li>
    <li>Sed eiusmod tempor incidunt. </li>
    <li>Ut enim ad minim veniam. </li>
    <li>Corporis suscipit laboriosam.</li>
    </ul>
 </div>
 </div>
 `;

  const img = document.createElement("img");
  img.src = require("../assets/1cat.jpg");
  img.width = "500";
  section.querySelector('.flip-card-front').append(img);

  return section;
}
