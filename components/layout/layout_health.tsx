import { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function LayoutHealth(props) {
  const menus = [
    { id: 1, href: "/holistichealthcoach", title: "Home" },
    { id: 2, href: "/holistichealthcoach/philosophy", title: "Holistic Health" },
    { id: 3, href: "/holistichealthcoach/profile", title: "About Me" },
    { id: 4, href: "/holistichealthcoach/blog", title: "Blog" },
    // { id: 5, href: "/holistichealthcoach/service", title: "Service" },
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