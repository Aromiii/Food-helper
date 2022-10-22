import {NextRouter} from "next/router";
import React from "react";
import NavbarSiteSpesificFunctionality from "./navbarSiteSpesificFunctionality";
import NavbarBurgerMenu from "./navbarBurgerMenu";
import ProfilePictureIcon from "./profilePictureIcon";

const NavbarFunctionalityWrapper = (props: { onClick: () => void, route: NextRouter, profilePic: string | null }) => {
  return <ul className="text-3xl bg-gray-500 flex p-2 list-none place-items-center gap-9 h-16">
    <NavbarBurgerMenu onClick={props.onClick}/>
    <NavbarSiteSpesificFunctionality route={props.route}/>
    <ProfilePictureIcon profilePic={props.profilePic}/>
  </ul>;
}
export default NavbarFunctionalityWrapper;