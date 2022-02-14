import Head from "next/head";
//import Image from "next/image";
import { Fragment } from "react";

export default function Blog() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta
          name="description"
          content="this is u.holistichealth's website."
        />
      </Head>
      <h1 className="title__top">Blog</h1>
      <div className="section__container"></div>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "health",
    },
  };
}
