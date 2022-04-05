import { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function LayoutHealth(props) {
    if (typeof window === "object") {
        const main = document.getElementById("main");
        const header = document.getElementById("header");

        main.addEventListener("scroll", function () {
            const scrollPosition = main.scrollTop;
            if (scrollPosition > 100) {
                header.classList.add("scrollAnimation");
                console.log(scrollPosition);
            } else {
                header.classList.remove("scrollAnimation");
            }
        });
    }
    return (
        <Fragment>
            <Header></Header>
            <main>
                <div id="main">{props.children}</div>
            </main>
            <Footer></Footer>
        </Fragment>
    );
}

export default LayoutHealth;
