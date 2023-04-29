import Head from "next/head";
import Hero from "../../components/hero/hero";
import CardGroup from "../../components/cardGroup/cardGroup";
import { Section } from "../../components/section/section"
import { client } from "../../libs/client";
import { Fragment } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function Home({ blog }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <Hero
        bgImageUrl='"/images/site/freedom.jpg"'
        heroBody="<h1>
            誰かのための自分から、
            <br></br>自分のための自分に戻ろう
        </h1>"
      />
      <div className="main">
        <Section
          center={true}
        >
          <Section.Body>
            一生懸命に生きて、いつの間にか
            <br></br>
            あなたは誰かのために生きていませんか<br></br>
            <br></br>
            生き急ぐ日々<br></br>
            <br></br>
            期待され評価されるあなたの重荷を置いて<br></br>
            体と心のサインに目を向けましょう。
          </Section.Body>
        </Section>
        <Section
          center={true}
        >
          <Section.Title>あなたが、あなたを変える</Section.Title>
          <Section.Body>
            どんな悩みを持っていても
            どんな理想があっても<br></br>
            あなたは、すでに答えを持っています<br></br>
            <br></br>
            あなたの過去は、宝です。<br></br>
            食生活や育ってきた環境、人間関係<br></br>
            楽しいこと、辛いこと<br></br>
            あなたの宝の軌跡は、幸せへの道標<br></br>
            <br></br>
            体と心に必要なものをあげて、<br></br>
            あなたらしく生きてほしい<br></br>
            あなた自身を愛してほしい<br></br>
            <br></br>
            あなたが持っている答えを一緒に見つけませんか
          </Section.Body>
        </Section>
        <Section grid={true}>
          <Section.Title>Blog</Section.Title>
          <Section.Body>
            <div className="container">
              <CardGroup
                blogs={blog}
              />
            </div>
          </Section.Body>
        </Section>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      layout: "health",
      blog: data.contents,
    },
  };
}
