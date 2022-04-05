import Link from "next/link";
import classes from "./navigation.module.scss";
import Hamburger from "../hamburger/hamburger";
import Logo from "../logo/logo";
// import { useState } from "react";

export default function Navigation() {
    const menuList = [
        { id: 1, href: "/holistichealthcoach", title: "Home" },
        { id: 2, href: "/holistichealthcoach/philosophy", title: "Holistic Health" },
        { id: 3, href: "/holistichealthcoach/profile", title: "About Me" },
        { id: 4, href: "/holistichealthcoach/blog", title: "Blog" },
        // { id: 5, href: "/holistichealthcoach/service", title: "Service" },
    ];
    return (
        <div>
            <nav>
                <div className={classes.navbar}>
                    <div className={classes.navContainer}>
                        <div className={classes.burger}>
                            <Hamburger />
                        </div>
                        <div className={classes.logo}>
                            <Link href="/holistichealthcoach">
                                <Logo />
                            </Link>
                        </div>
                        <ul className={classes.menu}>
                            {menuList.map((menu) => (
                                <li key={menu.id} className={classes.menuItem}>
                                    <Link href={menu.href}>{menu.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
