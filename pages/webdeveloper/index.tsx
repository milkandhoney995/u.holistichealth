import Head from "next/head";
// import Hero from "../../components/hero/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <div className="main">
        Hi! I'm <strong>Utano Harada</strong>, a Web Front-end Engineer.
      </div>
      {/* <Hero bgImageUrl={"/images/life/sunnyday.png"} /> */}
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "web",
      title: "Home"
    },
  };
}
