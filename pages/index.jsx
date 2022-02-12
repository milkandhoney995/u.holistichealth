import Head from "next/head";
// import Hero from "../components/home-page/hero/hero.jsx";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Utano Harada</title>
        <meta name="description" content="this is Utano's website." />
      </Head>
      <div className="container__top">
        Utano Harada<br></br>
        as…
        <Link href="/holistichealthcoach">Holistic Health Coach</Link>
      </div>
    </Fragment>
  );
}
