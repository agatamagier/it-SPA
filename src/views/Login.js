import { RegisterButton } from "../registration/RegisterButton";
import { registrationManager } from "../registration/RegistrationManager.js";

export function Login() {
  const section = document.createElement("section");
  section.classList.add("form-container");
  section.innerHTML = `
  <div class="wrapper">
        <h1 class="header">Login</h1>
        <form action="#">
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

  //   const btn = document.querySelector("button#save.btn.btn-primary");
  //   btn.addEventListener("click", alert("click"));
  const registerButton = RegisterButton(() => registrationManager.loginUser());

  registerButton.textContent = "Login";
  section.querySelector("form").append(registerButton);

  return section;
}
