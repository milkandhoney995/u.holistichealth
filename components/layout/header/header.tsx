import Link from "next/link";
import classes from "./header.module.scss";
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

function Header() {
    return (
        <header id="header" className={classes.header}>
            <Navigation />
        </header>
    );
}

export default Header;
