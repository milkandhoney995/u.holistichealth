import Link from "next/link";
import classes from "./navigation.module.scss";
import Logo from "../logo/logo";

function Navigation() {
    return (
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
            </nav>
        </header>
    );
}

export default Navigation;
