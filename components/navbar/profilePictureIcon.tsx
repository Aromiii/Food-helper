import {signInWithGoogle} from "../../config/firebase";
import {CgProfile} from "react-icons/cg";
import Link from "next/link";
import React from "react";

const ProfilePictureIcon = (props: { profilePic: string | null }) => {
  return <li className="navbarListItem">
    {props.profilePic === null ? (
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
  </li>;
}
export default ProfilePictureIcon;