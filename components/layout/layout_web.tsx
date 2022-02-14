import { Fragment } from "react";
import NavigationWeb from "./navigation/navigationWeb";
import Footer from "./footer/footer";

function LayoutWeb(props) {
  return (
    <Fragment>
      <NavigationWeb></NavigationWeb>
      <main>{props.children}</main>
      <Footer></Footer>
    </Fragment>
  );
}
export default LayoutWeb;
