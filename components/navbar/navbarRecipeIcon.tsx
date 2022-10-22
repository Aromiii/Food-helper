import Link from "next/link";
import {IoFastFoodOutline} from "react-icons/io5";
import React from "react";

const NavbarRecipeIcon = () => {
  return <li className="navbarListItem mx-auto">
    <Link href="/recipes">
      <a>
        <div className="flex gap-2 p-1">
          <IoFastFoodOutline size="35"/>
        </div>
      </a>
    </Link>
  </li>;
}
export default NavbarRecipeIcon;