import {IoAdd, IoFilterOutline} from "react-icons/io5";
import Link from "next/link";
import React from "react";

const RecipeSearchBar = () => {
  return <div className="mx-auto flex w-[50vw] place-content-center">
    <IoFilterOutline size="35"/>
    <input type="text"
           placeholder=" Search recipes..."
           className="text-xl rounded-3xl bg-gray-300 p-1 mx-3 w-[80%]"/>
    <Link href="/recipes/addnew" passHref>
      <a>
        <IoAdd size="35"/>
      </a>
    </Link>
  </div>;
}
export default RecipeSearchBar;