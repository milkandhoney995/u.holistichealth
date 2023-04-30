import Head from "next/head";
import Hero from "../../components/hero/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <Hero bgImageUrl='"/images/life/sunnyday.png"' />
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "web",
    },
  };
}
