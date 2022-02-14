import Link from "next/link";
import classes from "./navigation.module.scss";
import Logo from "../logo/logo";

function NavigationWeb() {
    return (
        <header className={classes.header}>
            <div className={classes.header__navi}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/webdeveloper">Home</Link>
                    </li>
                    <li>
                        <Link href="/webdeveloper/profile">About Me</Link>
                    </li>
                    <li>
                        <Link href="/webdeveloper/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/webdeveloper/techblog">TechBlog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationWeb;
