import { Fragment } from "react";
import Navigation from "./navigation/navigation.jsx";
import Footer from "./footer/footer.jsx";

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
