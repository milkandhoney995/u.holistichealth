import classes from "./header.module.scss";
import Navigation from "../navigation/navigation";

function Header(props) {
  return (
    <header id="header" className={classes.header}>
      <Navigation menus={props.menus} />
    </header>
  );
}

export default Header;
