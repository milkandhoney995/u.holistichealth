import Link from "next/link";
import classes from "./navigation.module.scss";
import Logo from "../logo/logo";

function Navigation() {
  return (
    <header className={classes.header}>
      <Link href="/holistichealthcoach">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
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
    </header>
  );
}

export default Navigation;
