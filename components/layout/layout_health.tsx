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

  return (
    <>
      <Fragment>
        <Header menus={menus}></Header>
        <main>
          <div id="main">{props.children}</div>
        </main>
        <Footer></Footer>
      </Fragment>
      <style jsx>
        {`
          main {
            font-family: "Noto Sans JP", "Cochin", BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue",
              HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif;
          }
          h1,
          h2,
          h3 {
            font-weight: normal;
            font-family: "游ゴシック体 Pr6N", sans-serif;
            @include m.mq(tab) {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}

export default LayoutHealth;