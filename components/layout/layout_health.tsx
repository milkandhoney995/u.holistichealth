import { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import classes from "../layout/layout.module.scss"

function LayoutHealth(props) {
  const menus = [
    { href: "/holistichealthcoach", title: "Home" },
    { href: "/holistichealthcoach/philosophy", title: "Holistic Health" },
    { href: "/holistichealthcoach/profile", title: "About Me" },
    { href: "/holistichealthcoach/blog", title: "Blog" },
    // { href: "/holistichealthcoach/service", title: "Service" },
  ]

  return (
    <>
      <Fragment>
        <Header menus={menus}></Header>
        <main className={classes.main__healthPage}>
          <div id="main">{props.children}</div>
        </main>
        <Footer></Footer>
      </Fragment>
    </>
  );
}

export default LayoutHealth;