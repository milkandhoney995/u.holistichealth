import React from "react";
import "../styles/globals.scss";
import Layout from "../components/layout/layout";
import LayoutHealth from "../components/layout/layout_health";
import LayoutWeb from "../components/layout/layout_web";

function App({ Component, pageProps }) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    case "health": {
      return (
        <LayoutHealth>
          <Component {...pageProps} />
        </LayoutHealth>
      );
    }
    case "web": {
      return (
        <LayoutWeb>
          <Component {...pageProps} />
        </LayoutWeb>
      );
    }
    default: {
      return <Component {...pageProps} />;
    }
  }
}

export default App;
