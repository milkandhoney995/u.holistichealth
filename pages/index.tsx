import Head from "next/head";
// import Hero from "../components/home-page/hero/hero";
import Navigation from "../components/layout/navigation/navigation";
// import Header from "../components/layout/header/header";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Utano Harada</title>
                <meta name="description" content="this is Utano's website." />
            </Head>
            <Navigation />
            <div className="firstPage">
                <h1 className="text--center">
                    Utano Harada<br></br>
                    as…
                </h1>
                <div className="firstPage__button">
                    <Link href="/webdeveloper">Web Developer</Link>
                    <Link href="/holistichealthcoach">Holistic Health Coach</Link>
                </div>
            </div>
        </Fragment>
    );
}

export async function getStaticProps() {
    return {
        props: {
            layout: "main",
        },
    };
}
