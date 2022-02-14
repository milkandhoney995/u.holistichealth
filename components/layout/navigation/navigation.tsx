import Link from "next/link";
import classes from "./navigation.module.scss";
import Logo from "../logo/logo";

function Navigation() {
    return (
        <header className={classes.header}>
            <div className={classes.header__navi}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/holistichealthcoach">Home</Link>
                        </li>
                        <li>
                            <Link href="/holistichealthcoach/philosophy">Holistic Health</Link>
                        </li>
                        <li>
                            <Link href="/holistichealthcoach/profile">About Me</Link>
                        </li>
                        <li>
                            <Link href="/holistichealthcoach/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/holistichealthcoach/service">Service</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>Hello</h1>
        </header>
    );
}

export default Navigation;
