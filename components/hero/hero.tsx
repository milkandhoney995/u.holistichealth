import classes from "./hero.module.scss";

function Hero(props) {
    return (
        <div
            className={classes.hero}
            style={{
                backgroundImage: `url(${props.bgImageUrl})`,
            }}
        >
            <h1>{props.pageTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.heroBody }}></div>
        </div>
    );
}

export default Hero;
