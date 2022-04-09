import Link from "next/link";
import classes from "./navigation.module.scss";
import Hamburger from "../hamburger/hamburger";
import { useState } from "react";

function NavigationWeb() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };
    const menuList = [
        { id: 1, href: "/webdeveloper", title: "home" },
        { id: 2, href: "/webdeveloper/philosophy", title: "Holistic Health" },
        { id: 3, href: "/webdeveloper/profile", title: "About Me" },
        // { id: 4, href: "/webdeveloper/blog", title: "Blog" },
        { id: 5, href: "/webdeveloper/service", title: "Service" },
    ];
    return (
        <div>
            <nav>
                <div className={classes.navbar}>
                    <div className={classes.navContainer}>
                        <div className={classes.burger} onClick={toggleHamburger}>
                            <Hamburger />
                        </div>
                        <div className={classes.logo}>
                            <h1>Utano Harada</h1>
                        </div>
                        <ul className={classes.menu}>
                            {menuList.map((menu) => (
                                <li className={classes.menuItem}>
                                    <Link key={menu.id} href={menu.href}>
                                        <a>{menu.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationWeb;
