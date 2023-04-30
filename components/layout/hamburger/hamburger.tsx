import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classes from "../hamburger/hamburger.module.scss";

export default function Hamburger(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className={classes.hamburger} onClick={toggleHamburger}>
        <span className={classes.hamburger__line}></span>
        <span className={classes.hamburger__line}></span>
        <span className={classes.hamburger__line}></span>
      </div>
      <ul className={hamburgerOpen ? classes.hamburger__menus : "hidden"}>
        {props.menus.map((menu, index) => (
          <li key={index} className={classes.hamburger__item}>
            <Link href={menu.href} onClick={toggleHamburger}>
              {menu.title}
            </Link>
          </li>
        ))}
        <li className={classes.hamburger__item}>
          <div className="iconWrap">
            <div className="sns">
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
            <div className="sns">
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
        </li>
      </ul>
      <style jsx>
        {`
          .hidden {
            display: none;
          }
          .${classes.hamburger__menus} {
            transform: ${hamburgerOpen ? "translateX(0)" : "translate(-150%)"};
          }
          .${classes.hamburger} .${classes.hamburger__line}:first-child {
            transform: ${hamburgerOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .${classes.hamburger} .${classes.hamburger__line}:nth-child(2) {
            transform: ${hamburgerOpen ? "scaleY(0)" : "scaleY(1)"};
          }
          .${classes.hamburger} .${classes.hamburger__line}:last-child {
            transform: ${hamburgerOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </>
  );
}
