import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.scss";
import "modern-css-reset/dist/reset.min.css";
import Layout from "../components/layout/layout";
import LayoutHealth from "../components/layout/layout_health";
import LayoutWeb from "../components/layout/layout_web";

function App({ Component, pageProps }: AppProps) {
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
