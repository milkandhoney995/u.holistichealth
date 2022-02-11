import { Fragment } from "react";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";

function Layout(props) {
  return (
    <Fragment>
      <Navigation></Navigation>
      <main>{props.children}</main>
      <Footer></Footer>
    </Fragment>
  );
}
export default Layout;
