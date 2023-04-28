// import classes from "./hamburger.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hamburger(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleHamburger}>
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
      </div>
      <ul className={hamburgerOpen ? "menu-items" : "hidden"}>
        {props.menus.map((menu, index) => (
          <li key={index} className="menu-item">
            <Link href={menu.href}>
              <a onClick={toggleHamburger}>{menu.title}</a>
            </Link>
          </li>
        ))}
        <li className="menu-item">
            <div className="iconWrap">
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
            </div>
        </li>
      </ul>
      <style jsx>
          {`
              .hidden {
                  display: none;
              }
              .menu-items {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  text-align: center;
                  height: 100vh;
                  margin-left: -40px;
                  background-color: var(--background);
                  box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
                  transform: translate(-150%);
                  transition: transform 0.5s ease-in-out;
              }
              .menu-item {
                  margin-bottom: 1.2rem;
                  font-size: 2rem;
                  font-weight: 500;
              }
              .hamburger {
                  display: block;
                  height: 26px;
                  width: 32px;
                  position: absolute;
                  top: 15px;
                  left: 15px;
                  z-index: 2;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
              }

              .hamburger .line {
                  display: block;
                  height: 4px;
                  width: 100%;
                  border-radius: 10px;
                  background: #0e2431;
              }
              .hamburger .line1 {
                  transform-origin: 0% 0%;
                  transition: transform 0.4s ease-in-out;
              }

              .hamburger .line2 {
                  transition: transform 0.2s ease-in-out;
              }
              .hamburger .line3 {
                  transform-origin: 0% 100%;
                  transition: transform 0.4s ease-in-out;
              }
              .menu-items {
                  transform: ${hamburgerOpen ? "translateX(0)" : "translate(-150%)"};
              }

              .hamburger .line1 {
                  transform: ${hamburgerOpen ? "rotate(45deg)" : "rotate(0)"};
              }

              .hamburger .line2 {
                  transform: ${hamburgerOpen ? "scaleY(0)" : "scaleY(1)"};
              }

              .hamburger .line3 {
                  transform: ${hamburgerOpen ? "rotate(-45deg)" : "rotate(0)"};
              }
          `}
      </style>
    </>
  );
}
