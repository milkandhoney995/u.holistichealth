import Head from "next/head";
import { Fragment } from "react";
import ModalGroup from "../../../components/modalGroup/modalGroup";

export default function Portofolio() {
  const modalList = [
    { cover: "/images/life/hana.jpg", alt: "debug", title: "タイトル", body: "吾輩は猫である。"},
    { cover: "/images/life/cafe.jpg", alt: "debug", title: "タイトル", body: "吾輩は猫である。"},
    { cover: "/images/life/sunnyday.png", alt: "debug", title: "タイトル", body: "吾輩は猫である。"},
    { cover: "/images/life/meal.jpg", alt: "debug", title: "タイトル", body: "吾輩は猫である。"},
  ];

  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <div className="main">
        <ModalGroup
          modalList={modalList}
        />
      </div>
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
