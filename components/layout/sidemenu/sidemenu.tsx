import Image from "next/link";
import classes from "./sidemenu.module.scss";

export default function Sidemenu() {
    return (
        <div className={classes.sidemenu}>
            <div className="sidemenu__profile">
                <Image
                    src="/images/site/570x570.png"
                    width={70}
                    height={70}
                    objectFit="cover"
                    alt="debug"
                />
            </div>
            <div className="sentence sidemenu__info">Utano Harada</div>
            <div className="caption sidemenu__info">Holistic Health Coach & Web Front Engineer</div>
            <div className="sidemenu__sns">
                <Image
                    src="/images/site/570x570.png"
                    width={25}
                    height={25}
                    objectFit="cover"
                    alt="debug"
                />
                <Image
                    src="/images/site/570x570.png"
                    width={25}
                    height={25}
                    alt="debug"
                    objectFit="cover"
                />
                <Image
                    src="/images/site/570x570.png"
                    width={25}
                    height={25}
                    objectFit="cover"
                    alt="debug"
                />
            </div>
        </div>
    );
}
