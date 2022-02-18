import Link from "next/link";
import classes from "./navigation.module.scss";
import Hamburger from "../hamburger/hamburger";
import Logo from "../logo/logo";
import { useState } from "react";

export default function Navigation() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };
    const menuList = [
        { id: 1, href: "/holistichealthcoach", title: "home" },
        { id: 2, href: "/holistichealthcoach/philosophy", title: "Holistic Health" },
        { id: 3, href: "/holistichealthcoach/profile", title: "About Me" },
        { id: 4, href: "/holistichealthcoach/blog", title: "Blog" },
        { id: 5, href: "/holistichealthcoach/service", title: "Service" },
    ];
    return (
        <div>
            <nav>
                <div className={classes.navbar}>
                    <div className={classes.navContainer}>
                        <div className={classes.burger} onClick={toggleHamburger}>
                            <Hamburger isOpen={hamburgerOpen} />
                        </div>
                        <div className={classes.logo}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </div>
                        <ul className={classes.menu}>
                            {menuList.map((menu) => (
                                <li className={classes.menuItem}>
                                    <Link key={menu.id} href={menu.href}>
                                        {menu.title}
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
