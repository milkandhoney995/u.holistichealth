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
        <ul>
          <li>
            <Link href="/philosophy">Holistic Health</Link>
          </li>
          <li>
            <Link href="/profile">About Me</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
