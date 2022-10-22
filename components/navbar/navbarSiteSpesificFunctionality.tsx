import {NextRouter} from "next/router";
import React from "react";
import RecipeSearchBar from "./recipeSearchBar";

const NavbarSiteSpesificFunctionality = (props: { route: NextRouter}) => {
  return <li className="mx-auto flex">
    {props.route.pathname == "/recipes" ? (
      <RecipeSearchBar/>
    ) : (
      <div className="font-bold">Food-helper</div>
    )}
  </li>;
}
export default NavbarSiteSpesificFunctionality;