import { ReactNode } from "react";
import classes from "./button.module.scss";

type Props = {
  children: ReactNode,
  onClick: () => void,
}

function Button(props: Props) {
  return (
    <div className={classes.button} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;
