import classes from "./section.module.scss";

export default function Section(props) {
  return (
    <div className={`${classes.section} ${props.center ? "section--center" : ""} ${props.reverse ? "section--reverse" : ""}`}>
       <slot />
    </div>
  )
}