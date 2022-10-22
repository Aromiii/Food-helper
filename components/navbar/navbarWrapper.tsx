import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/router";
import NavbarFunctionalityWrapper from "./navbarFunctionalityWrapper";
import NavbarNavigationWrapper from "./navbarNavigationWrapper";

const NavbarWrapper = () => {
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
      {recipeNav ? (
        <NavbarNavigationWrapper onClick={() => setRecipeNav(!recipeNav)} profilePic={profilePic}/>
      ) : (
        <NavbarFunctionalityWrapper onClick={() => setRecipeNav(!recipeNav)} route={route} profilePic={profilePic}/>
      )}
    </nav>
  )
}
export default NavbarWrapper;