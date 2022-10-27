import React from "react";
import NavbarBurgerMenu from "./navbarBurgerMenu";
import NavbarRecipeIcon from "./navbarRecipeIcon";
import ProfilePictureIcon from "./profilePictureIcon";

const NavbarNavigationWrapper = (props: { onClick: () => void, profilePic: string | null }) => {
  return <ul className="text-3xl bg-gray-500 flex p-2 list-none place-items-center gap-9 h-16">
    <NavbarBurgerMenu onClick={props.onClick}/>
    <NavbarRecipeIcon/>
    <ProfilePictureIcon profilePic={props.profilePic}/>
  </ul>;
}
export default NavbarNavigationWrapper;