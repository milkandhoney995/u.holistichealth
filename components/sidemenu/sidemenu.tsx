import classes from "./sidemenu.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Sidemenu() {
  return (
    <div className={classes.sidemenu}>
      <div className={classes.sidemenu__profile}>
        <Image
          style={{ objectFit: 'cover' }}
          src="/images/profile.jpg"
          width={150}
          height={150}
          alt="profile"
        />
      </div>
      <div className={classes.sidemenu__info}>
        <div className={classes.sidemenu__title}>Utano Harada</div>
        <div className={classes.sidemenu__caption}>
          Holistic Health Coach & Web Front Engineer
        </div>
      </div>
      <div className={classes.sidemenu__list}>
        <div className={classes.sidemenu__item}>
          <Link
            href="https://www.facebook.com/profile.php?id=100011900596430"
            passHref
            target="_blank" rel="noopener"
          >
            <Image
              style={{ objectFit: 'contain' }}
              src="/images/icon/facebook.png"
              width={25}
              height={25}
              alt="Facebook"
            />
          </Link>
        </div>
        <div className={classes.sidemenu__item}>
          <Link
            href="https://www.instagram.com/uta.healthcoach_webdeveloper/"
            passHref
            target="_blank" rel="noopener"
          >
            <Image
              style={{ objectFit: 'contain' }}
              src="/images/icon/Instagram.png"
              width={25}
              height={25}
              alt="Instagram"
            />
          </Link>
        </div>
      </div>
      <div className={classes.sidemenu__body}>
        <div className={classes.sidemenu__text}>
          食べること、歌うこと、勉強すること、話すことが好きです。
          <br></br>
          <br></br>
          ヘルスコーチング、Web制作の依頼は以下メールアドレスから。
          <br></br>
          email: uta.holistichealthandweb@gmail.com
        </div>
      </div>
      {/* <div className="sidemenu__category">
          <h3 className="sidemenu__title">Category</h3>
          <Tag />
      </div> */}
    </div>
  )
}