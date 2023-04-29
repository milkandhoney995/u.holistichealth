import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Utano Harada</title>
        <meta name="description" content="this is Utano's website." />
      </Head>
      <div className="singlePage">
        <div className="singlePage__left">
          <Link href="/webdeveloper">
            Web Developer
          </Link>
        </div>
        <div className="singlePage__right">
          <Link href="/holistichealthcoach">
            Holistic Health Coach
          </Link>
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
