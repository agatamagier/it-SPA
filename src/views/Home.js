import { RegisterButton } from "../registration/RegisterButton";
import { registrationManager } from "../registration/RegistrationManager.js";

export function Home() {
  const section = document.createElement("section");
  let user = localStorage.getItem("name");
  section.innerHTML = `
    <h1 class="header">SPA dla IT</h1>
    <div class="home">
      <div class="home-text">
      <h3>Witaj w hotelu IT SPA ${user || ""}</h3>
      <p>Wszyscy programiści i programistki lubią do nas przyjeżdżać.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </p>
      </div>
      <div class="home-img">
        <img src="${require("../assets/elephant.jpg")}"/>
        <img src="${require("../assets/3cats.jpg")}"/>
        <img src="${require("../assets/dogmasage.jpg")}"/>
        <img src="${require("../assets/capybaras.jpg")}"/>
      </div>
    </div>
    

    `;

  const logOutButton = RegisterButton(() => {
    registrationManager.logOut();
    location.reload();
  });
  logOutButton.innerText = "Log out";
  logOutButton.classList.remove("btn-register", "btn-primary");
  logOutButton.classList.add("btn", "btn-outline-danger");
  section.querySelector(".home-text").append(logOutButton);

  return section;
}
