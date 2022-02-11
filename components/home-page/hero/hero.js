import Image from "next/image";
import classes from "./hero.module.scss";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero1.jpg"
          width={1200}
          height={600}
          alt="debug"
        />
      </div>
    </div>
  );
}

export default Hero;
