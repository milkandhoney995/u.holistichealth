import Head from "next/head";
import { Fragment } from "react";
import { Section } from "../../../components/section/section";

export default function Service() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <div className="main">
        <Section
          img={"/images/life/meal.jpg"}
          width={300}
          height={300}
          reverse={true}
        >
          <Section.Title>変化を習慣化する</Section.Title>
          <Section.Body>
            食事、マインドセット、人間関係など、<br></br>
            何事も新しいことを定着させるには、時間がかかります。<br></br>
            <br></br>
            自分に厳しくしすぎて、うまくいかなかった経験がある方もいらっしゃるのではないでしょうか。
            <br></br>
            <br></br>
            私のコーチングでは、ヒアリングをもとに、<br></br>
            できることから少しずつ習慣化できるようサポートします。
          </Section.Body>
        </Section>
        <Section
          img={"/images/life/meal.jpg"}
          width={300}
          height={300}
        >
          <Section.Title>詳細</Section.Title>
          <Section.Body>
            セッションは対面形式です。<br></br>
            ＊オンライン希望の場合、ご相談ください。<br></br>
            <br></br>
            カフェなどお好きな場所をご指定ください。<br></br>
            私はカフェ巡りが大好きなので、素敵なところで一緒にお話しできたらうれしいです。
            <br></br>
            ＊交通費や飲食代は料金に含まれませんので、ご了承ください。
          </Section.Body>
        </Section>
        <Section
          img={"/images/life/veg1.jpg"}
          width={600}
          height={600}
        >
          <Section.Title>1:1 90 Minute Session</Section.Title>
          <Section.Body>
          セッションの前日までにワークシートを記入していただきます。
          <br></br>
          <br></br>
          記入していただいた内容をベースに、過去と現在の食生活、人間関係、環境の変化など多方面から今の自分を深掘りしていきます。{" "}
          <br></br>
          <br></br>
          話を聞いてほしい、ちょっと試してみたいなど理由はなんでも構いません。
          <br></br>
          <br></br>1セッション50分<br></br>
          初回無料、2回目以降3,000円。
          </Section.Body>
        </Section>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "health",
    },
  };
}
