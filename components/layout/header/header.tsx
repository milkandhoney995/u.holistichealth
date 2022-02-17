import Link from "next/link";
import classes from "./header.module.scss";
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

function Header() {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <Navigation />
        </header>
    );
}

export default Header;
