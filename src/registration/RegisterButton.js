import { Login } from "../views/Login";
export function RegisterButton(callback) {
    const registerButton = document.createElement("button");
  
    registerButton.textContent = "Register";
    registerButton.classList.add("btn", "btn-primary", "btn-register");
    registerButton.addEventListener("click", callback);
  
    return registerButton;
  }
  