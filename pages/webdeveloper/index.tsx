import Head from "next/head";
import { Fragment } from "react";

export default function Home() {

  return (
    <>
      <Fragment>
        <Head>
          <title>u.holistichealth</title>
          <meta name="description" content="this is u.holistichealth's website." />
        </Head>
        <div className="main">
          Hi! I'm <strong>Utano Harada</strong>, a Web Front-end Engineer.
        </div>
      </Fragment>
      <style jsx>
        {`
          h1 {
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

export async function getStaticProps() {
  return {
    props: {
      layout: "web",
      title: "Home"
    },
  };
}
