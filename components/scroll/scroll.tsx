import classes from "./scroll.module.scss";

function Scroll() {
    return (
        <div className={classes.scroll}>
            <div className={classes.dot}></div>
            <div className={classes.text}>Scroll</div>
        </div>
    );
}

export default Scroll;
