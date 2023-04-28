import { Fragment } from "react";
import Header from "../../components/layout/header/header";
import Footer from "./footer/footer";

function LayoutWeb(props) {
  const menus = [
    { id: 1, href: "/webdeveloper", title: "home" },
    { id: 2, href: "/webdeveloper/philosophy", title: "Holistic Health" },
    { id: 3, href: "/webdeveloper/profile", title: "About Me" },
    // { id: 4, href: "/webdeveloper/blog", title: "Blog" },
    { id: 5, href: "/webdeveloper/service", title: "Service" },
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
