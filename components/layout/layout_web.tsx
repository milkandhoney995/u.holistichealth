import { Fragment } from "react";
import Header from "../../components/layout/header/header";
import Footer from "./footer/footer";

function LayoutWeb(props) {
    return (
        <Fragment>
            <Header></Header>
            <main>{props.children}</main>
            {/* <Footer></Footer> */}
        </Fragment>
    );
}
export default LayoutWeb;
