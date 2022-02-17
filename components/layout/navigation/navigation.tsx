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
    return (
        <>
            <header className={classes.header}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <nav>
                    <ul className={classes.menu}>
                        <li className={classes.menuList}>
                            <Link href="/holistichealthcoach">Home</Link>
                        </li>
                        <li className={classes.menuList}>
                            <Link href="/holistichealthcoach/philosophy">Holistic Health</Link>
                        </li>
                        <li className={classes.menuList}>
                            <Link href="/holistichealthcoach/profile">About Me</Link>
                        </li>
                        <li className={classes.menuList}>
                            <Link href="/holistichealthcoach/blog">Blog</Link>
                        </li>
                        <li className={classes.menuList}>
                            <Link href="/holistichealthcoach/service">Service</Link>
                        </li>
                    </ul>
                    <div className={classes.hamburger} onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                </nav>
            </header>
            <style jsx>
                {`
                    .menu {
                        display: ${hamburgerOpen ? "inline" : "open"};
                        background-color: pink;
                        height: 100vh;
                        width: 50vw;
                        margin-top: 2.5rem;
                        position: absolute;
                    }
                `}
            </style>
        </>
    );
}

export default Navigation;
