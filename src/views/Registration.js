import { RegisterButton } from "../registration/RegisterButton";
import { registrationManager } from "../registration/RegistrationManager.js";

export function Registration() {
  const section = document.createElement("section");
  section.classList.add("form-container");
  section.innerHTML = `
  <div class="wrapper">
        <h1 class="header">Registration</h1>
        <form action="#">
            <div clss="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Name">
            </div>
            <div clss="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
            </div>
            <div clss="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            </div>
            <div class="text-center">
            </div>
        </form>
    </div>
    `;

const registerButton = RegisterButton(() => registrationManager.registerUser());

     
    section.querySelector('form').append(registerButton)

  return section;
}
