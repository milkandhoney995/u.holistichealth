import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Section } from "../../../components/section/section";

export default function Portofolio() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <div className="container">
        <Section
          img="/images/life/cafe.jpg"
          width={500}
          height={500}
        >
          <Section.Title>
            <h2>Utano Harada</h2>
            <h3 className="title--small">Holistic Health Coach & Web Frontend Engineer</h3>
          </Section.Title>
          <Section.Body>
            1997年千葉出身。<br></br>
            国際基督教大学教養学部化学メジャー卒。
            <br></br>
            <br></br>
            某IT企業でWeb フロントエンドエンジニアとしてアプリケーション開発に携わる。
            <br></br>
            現在、フリーランスのWeb
            フロントエンドエンジニア兼米国認定ホリスティックヘルスコーチとして活動中。
            <br></br>
            <br></br>
            ヘルスコーチとしての活動は、
            <Link href="/holistichealthcoach">こちら</Link>をご参照ください。
          </Section.Body>
        </Section>
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
