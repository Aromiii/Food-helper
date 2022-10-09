import React, {Component, useEffect, useState} from 'react';
import Link from "next/link";
import {IoFastFoodOutline} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";
import {FaGalacticRepublic} from "react-icons/fa";
import {signInWithGoogle} from "../config/firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const NavBar = () => {
  const [profilePic, setProfilePic] = useState(null)

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setProfilePic(user.photoURL)
    } else {
      setProfilePic(null)
    }
  });

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
        {profilePic === null ? (
          <button type="button" onClick={signInWithGoogle}>
            <CgProfile size="35"/>
          </button>
        ) : (
          <Link href="/profile">
            <img src={localStorage.getItem("profilePic")!} className="rounded-3xl"/>
          </Link>
        )}
      </li>
    </ul>
  )
}
export default NavBar;

/*

<li className="navbarListItem">
  <Link href="/menu">
    me
  </Link>
</li>
<li className="navbarListItem">
  <Link href="/shopping-list">
    sl
  </Link>
</li>*/