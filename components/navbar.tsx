import React, {Component} from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <ul className="navbar_bg">
            <li>
                <Link href="/">
                    main_page
                </Link>
            </li>
            <li>
                <Link href="/recipes">
                    recipes
                </Link>
            </li>
            <li>
                <Link href="/menu">
                    menu
                </Link>
            </li>
            <li>
                <Link href="/shopping-list">
                    shopping list
                </Link>
            </li>
            <li>
                <Link href="/auth">
                    auth
                </Link>
            </li>
        </ul>
    )
}
export default NavBar;