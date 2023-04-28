import classes from "./header.module.scss";
import Navigation from "../navigation/navigation";

function Header() {
  return (
    <header id="header" className={classes.header}>
      <Navigation />
    </header>
  );
}

export default Header;
