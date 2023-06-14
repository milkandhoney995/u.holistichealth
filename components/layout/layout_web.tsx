import { Fragment } from "react";
import { GlassSection } from "../glassSection/glassSection";
import classes from "./layout.module.scss";
import { SvgHome, SvgLaptop, SvgWork } from "../icons/index";

function LayoutWeb(props) {
  const menus = [
    { href: "/webdeveloper", title: "Home", icon: <SvgHome /> },
    { href: "/webdeveloper/portfolio", title: "Portfolio", icon: <SvgWork /> },
    { href: "/webdeveloper/profile", title: "Skill", icon: <SvgLaptop /> },
  ];

  return (
    <Fragment>
      <main className={classes.main}>
        <div className={classes.main__glass}>
          <GlassSection
            menus={menus}
          >
            <GlassSection.Title>
              Hi! I'm Utano, Web Front-end Engineer!
            </GlassSection.Title>
            <GlassSection.Body>{props.children}</GlassSection.Body>
          </GlassSection>
        </div>
      </main>
    </Fragment>
  );
}
export default LayoutWeb;
