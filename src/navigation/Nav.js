import { Home } from "../views/Home";
import { RoomList } from "../views/RoomList";
import { Registration } from "../views/Registration";
import { Login } from "../views/Login";
import { NavButton } from "./NavButton";
import { MiniCartBtn } from "./MiniCartBtn";
import { TreatmentList } from "../views/TreatmentList";
import { Cart } from "../views/Cart";

const navItems = [
  { text: "Home", component: Home },
  { text: "Rooms", component: RoomList },
  { text: "Treatments", component: TreatmentList },
  { text: "Cart", component: Cart },
  { text: "Registration", component: Registration},
  { text: "Login", component: Login}
];

export function Nav() {
  const nav = document.createElement("nav");

  const navButtons = navItems.map((navItem) => {
    return NavButton(navItem.text, navItem.component);
  });

  nav.append(...navButtons, MiniCartBtn());

  return nav;
}
