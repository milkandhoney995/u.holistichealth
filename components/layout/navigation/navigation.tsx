import Link from "next/link";
import classes from "./navigation.module.scss";
import Hamburger from "../hamburger/hamburger";
import Logo from "../logo/logo";

export default function Navigation(props) {
  return (
    <div>
      <nav>
        <div className={classes.navbar}>
          <div className={classes.navContainer}>
            <div className={classes.burger}>
              <Hamburger menus={props.menus} />
            </div>
            <div className={classes.logo}>
              <Link href="/holistichealthcoach">
                <Logo />
              </Link>
            </div>
            <div className={classes.menuWrap}>
                <ul className={classes.menu}>
                  {props.menus.map((menu, index) => (
                    <li key={index} className={classes.menuItem}>
                      <Link href={menu.href}>
                        {menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* <div className="iconWrap">
                    <div className="sns">
                        <Link
                            href="https://www.facebook.com/profile.php?id=100011900596430"
                            passHref
                        >
                            <a target="_blank" rel="noopener">
                                <Image
                                    objectFit="cover"
                                    src="/images/icon/facebook.png"
                                    width={25}
                                    height={25}
                                    alt="Facebook"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="sns">
                        <Link
                            href="https://www.instagram.com/uta.healthcoach_webdeveloper/"
                            passHref
                        >
                            <a target="_blank" rel="noopener">
                                <Image
                                    objectFit="cover"
                                    src="/images/icon/Instagram.png"
                                    width={25}
                                    height={25}
                                    alt="Instagram"
                                />
                            </a>
                        </Link>
                    </div>
                </div> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
