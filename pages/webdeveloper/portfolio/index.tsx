import Head from "next/head";
import { Fragment } from "react";
import ModalGroup from "../../../components/modalGroup/modalGroup";

export default function Portofolio() {
  const modalList = [
    { cover: "/images/works/images/work_calculator.png", alt: "Calculator", title: "Calculator", body: "Developed with React + TypeScript + SCSS"},
    { cover: "/images/works/images/work_meditationApp.png", alt: "Meditation App", title: "Meditation App", body: "Developed with React + TypeScript + SCSS"},
    { cover: "/images/works/images/works_chess.png", alt: "React Chess App", title: "React Chess App", body: "Developed with React + TypeScript + SCSS"},
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
