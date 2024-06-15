import { Registration } from "../views/Registration";

const key = "it_spa_user";

export const registrationManager = {
  registerUser() {
    const main = document.querySelector("main");
    let name, email, password;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let registeredUsers = new Array();
    registeredUsers = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    if (
      registeredUsers.some((user) => {
        return user.email == email;
      })
    ) {
      alert("Niepoprawne dane.");
    } else {
      registeredUsers.push({
        name: name,
        email: email,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(registeredUsers));
    }
  },
  loginUser() {
    let email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let registeredUsers = new Array();
    registeredUsers = JSON.parse(localStorage.getItem("users"))
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    if (
      registeredUsers.some((user) => {
        return user.email === email && user.password === password;
      })
    ) {
      alert("Login successfull");
      let currentUser = registeredUsers.filter((user) => {
        return user.email == email && password == password;
      })[0];
      localStorage.setItem("name", currentUser.name);
    } else {
      alert("Niewłaściwy login, zarejestruj się.");
    }
  },
  logOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  },
};
