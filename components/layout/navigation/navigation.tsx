import Link from "next/link";
import classes from "./navigation.module.scss";
import Logo from "../logo/logo";
import Hamburger from "../hamburger/hamburger";
import { useState } from "react";

function Navigation() {
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
            <div className="navigation">
                <ul className={classes.menu}>
                    {menuList.map((menu) => (
                        <li className={classes.menuList}>
                            <Link key={menu.id} href={menu.href}>
                                {menu.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={classes.hamburger} onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </div>
            <style jsx>
                {`
                    .navigation {
                        width: 100%;
                    }
                    @media (max-width: 768px) {
                        .navigation ul {
                            display: ${hamburgerOpen ? "inline" : "none"};
                            position: absolute;
                            background-color: pink;
                            height: 100vh;
                            width: 50vw;
                            margin-top: 2.5rem;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default Navigation;
