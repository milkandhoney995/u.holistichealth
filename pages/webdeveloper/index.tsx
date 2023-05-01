import Head from "next/head";
import { Fragment } from "react";
import CardGroup from "../../components/cardGroup/cardGroup";

export default function Home() {
  const cardList = [
    { href: "", img: "/images/icon/home.svg", caption: "2023/05/01", text: "吾輩は猫である。", title: "nyahya", sentence: "gogo" },
    { href: "", img: "/images/icon/home.svg", caption: "2023/05/01", text: "吾輩は猫である。", title: "nyahya", sentence: "gogo" },
    { href: "", img: "/images/icon/home.svg", caption: "2023/05/01", text: "吾輩は猫である。", title: "nyahya", sentence: "gogo" },
    { href: "", img: "/images/icon/home.svg", caption: "2023/05/01", text: "吾輩は猫である。", title: "nyahya", sentence: "gogo" },
  ]

  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <div className="main">
        Hi! I'm <strong>Utano Harada</strong>, a Web Front-end Engineer.
        <CardGroup
          cardList={cardList}
          imgWidth={60}
          imgHeight={60}
          row={true}
        />
      </div>
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
