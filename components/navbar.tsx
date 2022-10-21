import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {IoAdd, IoFastFoodOutline, IoFilterOutline} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";
import {FaGalacticRepublic, FaBars} from "react-icons/fa";
import {signInWithGoogle} from "../config/firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/router";

const Dropdown = () => {
  //TODO when hovering on hamburger menu or the options menu shows otherwise not
  //TODO rewrite as sliding bar that goes top of navbar
  return <div className="absolute top-14 left-3 bg-gray-500 p-2 border-2 rounded-lg border-gray-600">
    <Link href="/">
      <a>
        <div className="flex gap-2 p-1">
          <FaGalacticRepublic size="35"/>
          <p>Main page</p>
        </div>
      </a>
    </Link>
    <Link href="/recipes">
      <a>
        <div className="flex gap-2 p-1">
          <IoFastFoodOutline size="35"/>
          <p>Recipes</p>
        </div>
      </a>
    </Link>
  </div>;
}

const RecipeSearchBar = () => {
  return <div className="mx-auto flex">
    <IoFilterOutline size="35"/>
    <input type="text"
           placeholder=" Search recipes..."
           className="text-xl rounded-3xl bg-gray-300 text p-1 mx-3"/>
    <Link href="/recipes/addnew" passHref>
      <a>
        <IoAdd size="35"/>
      </a>
    </Link>
  </div>;
}

const NavBar = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null)
  const [recipeNav, setRecipeNav] = useState(false)
  const route = useRouter()

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfilePic(user.photoURL)
      } else {
        setProfilePic(null)
      }
    })
  }, [auth])

  return (
    <nav>
      <ul className="text-3xl bg-gray-500 flex p-2 list-none place-items-center gap-9 h-16">
        <li className="navbarListItem">
          <button className="navbarListItem" onClick={() => setRecipeNav(!recipeNav)}>
            <FaBars size="35"/>
            {recipeNav && <Dropdown/>}
          </button>
        </li>
        <li className="mx-auto flex">
          {route.pathname == "/recipes" ? (
            <RecipeSearchBar/>
          ) : (
            <div className="font-bold">Food-helper</div>
          )}
        </li>
        <li className="navbarListItem">
          {profilePic === null ? (
            <button type="button" onClick={signInWithGoogle}>
              <CgProfile size="35"/>
            </button>
          ) : (
            <Link href="/profile" passHref>
              <a>
                <img src={localStorage.getItem("profilePic")!} className="rounded-3xl"/>
              </a>
            </Link>
          )}
        </li>
      </ul>

    </nav>
  )
}
export default NavBar;