import React, {useState} from 'react';
import Link from "next/link";
import {IoAdd, IoFastFoodOutline, IoFilterOutline} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";
import {FaGalacticRepublic, FaBars} from "react-icons/fa";
import {signInWithGoogle} from "../config/firebase";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useRouter} from "next/router";

const NavBar = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null)
  const route = useRouter()

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setProfilePic(user.photoURL)
    } else {
      setProfilePic(null)
    }
  });
  console.log(route.pathname)

  return (

    <nav>
      {route.pathname == "/recipes" ? (
        <div className="text-3xl bg-gray-500 flex p-2 place-items-center gap-9 h-16">
          <div className="navbarListItem">
            <Link href="/" passHref>
              <a>
                <FaBars size="35"/>
              </a>
            </Link>
          </div>
          <div className="mx-auto flex">
            <IoFilterOutline size="35"/>
            <input type="text"
                   placeholder=" Search recipes..."
                   className="text-xl rounded-3xl bg-gray-300 text p-1 mx-3"/>
            <Link href="/recipes/addnew" passHref>
              <a>
                <IoAdd size="35"/>
              </a>
            </Link>
          </div>
          <div className="navbarListItem">
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
          </div>
        </div>
      ) : (
        <ul className="text-3xl bg-gray-500 flex p-2 list-none
        place-content-center place-items-center gap-9 h-16">
          <li className="navbarListItem">
            <Link href="/" passHref>
              <a>
                <FaGalacticRepublic size="35"/>
              </a>
            </Link>
          </li>
          <li className="navbarListItem mx-auto">
            <Link href="/recipes" passHref>
              <a>
                <IoFastFoodOutline size="35"/>
              </a>
            </Link>
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
      )}
    </nav>
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