import classes from "./button.module.scss";
import Link from "next/link";

function Button(props) {
  return (
    <div className={classes.button}>
      <Link href={props.href}>
        <a>{props.label}</a>
      </Link>
    </div>
  );
}

export default Button;
