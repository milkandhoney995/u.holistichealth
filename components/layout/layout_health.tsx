import { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function LayoutHealth(props) {
  const menus = [
    { href: "/holistichealthcoach", title: "Home" },
    { href: "/holistichealthcoach/philosophy", title: "Holistic Health" },
    { href: "/holistichealthcoach/profile", title: "About Me" },
    { href: "/holistichealthcoach/blog", title: "Blog" },
    // { href: "/holistichealthcoach/service", title: "Service" },
  ]

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
      <Header menus={menus}></Header>
      <main>
          <div id="main">{props.children}</div>
      </main>
      <Footer></Footer>
    </Fragment>
  );
}

export default LayoutHealth;