import classes from "./button.module.scss";
import Link from "next/link";

function Button(props) {
  return (
    <div className={classes.button}>
      <Link href={props.href}>
        {props.label}
      </Link>
    </div>
  );
}

export default Button;
