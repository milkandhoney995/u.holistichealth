import { Fragment } from "react";
import Header from "../../components/layout/header/header";
import Footer from "./footer/footer";

function LayoutWeb(props) {
  const menus = [
    { href: "/webdeveloper", title: "home" },
    { href: "/webdeveloper/philosophy", title: "Holistic Health" },
    { href: "/webdeveloper/profile", title: "About Me" },
    // { href: "/webdeveloper/blog", title: "Blog" },
    { href: "/webdeveloper/service", title: "Service" },
  ];
    return (
      <Fragment>
        <Header menus={menus}></Header>
        <main>{props.children}</main>
        {/* <Footer></Footer> */}
      </Fragment>
    );
}
export default LayoutWeb;
