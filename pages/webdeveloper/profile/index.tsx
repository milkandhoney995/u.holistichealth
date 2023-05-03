import Head from "next/head";
import { Fragment } from "react";
import CardGroup from "../../../components/cardGroup/cardGroup";
import { SvgReact, SvgSass, SvgVue } from "../../../components/icons/index";

export default function Profile() {
  const cardList = [
    { icon: <SvgReact />, title: "React / Next", sentence: "My private development style is React/Next + TypeScript, and I also created this website with Next.js. Still I haven't developed something on business, I'm always ready to cultivate my knowledge and skills." },
    { icon: <SvgVue />, title: "Vue / Nuxt", sentence: "I've experienced 1.5 year Front-end develpment with Vue/Nuxt. On previous project, I have both experience of implementing new function into existing app, and of creating website from the ground up." },
    { icon: <SvgSass />, title: "Sass", sentence: "I utilize Sass to commonize the lendthy and wordy script, and to improve legibility and maintainability. Making the most of useful Sass functions, such as mixin, I make the complicated CSS lucid." },
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
