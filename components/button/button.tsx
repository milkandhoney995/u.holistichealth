import classes from "./button.module.scss";

type Props = {
  label: string,
  onClick: () => void,
}

function Button(props: Props) {
  return (
    <div className={classes.button} onClick={props.onClick}>
      {props.label}
    </div>
  );
}

export default Button;
