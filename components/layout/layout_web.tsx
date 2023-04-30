import { Fragment } from "react";
import Header from "../../components/layout/header/header";
// import Footer from "./footer/footer";

function LayoutWeb(props) {
  const menus = [
    { href: "/webdeveloper", title: "Home" },
    { href: "/webdeveloper/portfolio", title: "Portfolio" },
    { href: "/webdeveloper/profile", title: "About Me" },
    // { href: "/webdeveloper/blog", title: "Blog" },
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
