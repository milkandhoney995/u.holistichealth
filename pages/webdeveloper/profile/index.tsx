import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Profile() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta
          name="description"
          content="this is u.holistichealth's website."
        />
      </Head>
      <h1 className="title__top">Profile</h1>
      <div className="section__container">
        <Image
          className="image"
          src="/images/life/cafe.jpg"
          width={500}
          height={500}
          alt="debug"
        />
        <div className="container--medium">
          <h2>Utano Harada</h2>
          <h3 className="title--small">
            Holistic Health Coach & Web Frontend Engineer
          </h3>
          <p>
            1997年千葉出身。<br></br>
            国際基督教大学教養学部化学メジャー卒。
            <br></br>
            <br></br>
            某IT企業でWeb
            フロントエンドエンジニアとしてアプリケーション開発に携わる。
            <br></br>
            現在、フリーランスのWeb
            フロントエンドエンジニア兼米国認定ホリスティックヘルスコーチとして活動中。
            <br></br>
            <br></br>
            ヘルスコーチとしての活動は、
            <Link href="/holistichealthcoach">こちら</Link>をご参照ください。
            <br></br>
          </p>
        </div>
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
