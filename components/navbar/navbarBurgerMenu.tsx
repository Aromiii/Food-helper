import {FaBars} from "react-icons/fa";
import React from "react";

const NavbarBurgerMenu = (props: { onClick: () => void }) => {
  return <li className="navbarListItem">
    <button className="navbarListItem" onClick={props.onClick}>
      <FaBars size="35"/>
    </button>
  </li>;
}
export default NavbarBurgerMenu;