import Head from "next/head";
// import Hero from "../components/home-page/hero/hero";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Utano Harada</title>
                <meta name="description" content="this is Utano's website." />
            </Head>
            <h1 className="text--center">
                Utano Harada<br></br>
                as…
            </h1>
            <div className="container__top">
                <Link href="/webdeveloper">Web Developer</Link>
                <Link href="/holistichealthcoach">Holistic Health Coach</Link>
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
