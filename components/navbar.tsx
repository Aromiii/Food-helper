import React, {Component} from 'react';
import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaGalacticRepublic } from "react-icons/fa";

const NavBar = () => {
  return (
    <ul className="navbar_bg">
      <li className="navbarListItem">
        <Link href="/">
          <FaGalacticRepublic size="35"/>
        </Link>
      </li>
      <li className="navbarListItem m-auto">
        <Link href="/recipes">
          <IoFastFoodOutline size="35"/>
        </Link>
      </li>
      <li className="navbarListItem">
        <Link href="/auth">
          <CgProfile size="35"/>
        </Link>
      </li>
    </ul>
  )
}
export default NavBar;

/*<li className="navbarListItem">
  <Link href="/menu">
    me
  </Link>
</li>
<li className="navbarListItem">
  <Link href="/shopping-list">
    sl
  </Link>
</li>*/