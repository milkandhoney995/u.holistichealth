import { Fragment } from "react";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";

function LayoutWeb(props) {
  return (
    <Fragment>
      <Navigation></Navigation>
      <main>{props.children}</main>
      <Footer></Footer>
    </Fragment>
  );
}
export default LayoutWeb;
