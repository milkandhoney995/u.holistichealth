import Head from "next/head";
import { Fragment } from "react";
import CardGroup from "../../../components/cardGroup/cardGroup";

export default function Profile() {
  const cardList = [
    { img: "/images/icon/react.svg", title: "React / Next", sentence: "I ..." },
    { img: "/images/icon/vue.svg", title: "Vue / Nuxt", sentence: "I've experienced 2 year Front-end develpment with Vue/Nuxt." },
    { img: "/images/icon/sass.svg", title: "Sass", sentence: "gogo" },
  ]

  return (
    <>
      <Fragment>
        <Head>
          <title>u.holistichealth</title>
          <meta name="description" content="this is u.holistichealth's website." />
        </Head>
        <div className="main">
          <CardGroup
            cardList={cardList}
            imgWidth={80}
            imgHeight={70}
            row={true}
          />
        </div>
      </Fragment>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "web",
    },
  };
}
