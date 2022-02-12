import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Service() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta
          name="description"
          content="this is u.holistichealth's website."
        />
      </Head>
      <h1 className="title__top">Service</h1>
      <div className="section section__container">
        <div className="container--medium">
          <h2>長期コーチング</h2>
          <p>
            もっと健康になりたい、もっと幸せになりたい人のためのプログラムです。
            <br></br>
            <br></br>
            最初のセッションで、今のあなたを知るワークを行い、ひとりひとりの目的に合わせて月2回、6ヶ月のプログラムを考えます。
            <br></br>
            <br></br>
            定期的にセッションを受けることで、知識が習慣化しやすくなるだけでなく、自分自身の変化をより実感することができます。
            <br></br>
            <br></br>- 人間関係を良くしたい<br></br>- 疲れを取りたい<br></br>-
            イライラをなくしたい<br></br> - 体の内側から綺麗に<br></br> -
            甘いものの食べ過ぎをやめたい<br></br> - お酒、タバコをやめたい
            <br></br> - 自炊を頑張りたい
          </p>
        </div>
        <Image
          src="/images/site/570x570.png"
          width={600}
          height={600}
          alt="debug"
        />
      </div>
      <div className="section section__container">
        <Image
          src="/images/site/570x570.png"
          width={600}
          height={600}
          alt="debug"
        />
        <div className="container--medium section__text">
          <p>
            最初の3回は、お試しで無料<br></br>
            それ以降は一回3,000円 × 9回です。<br></br>
            <br></br>
            セッションはオンライン・対面両形式で受けられます。<br></br>
            対面の場合は、カフェなどお好きな場所をご指定ください。<br></br>
            交通費は料金に含まれませんので、ご了承ください。
          </p>
          <div className="button">
            <Link href="/">Book</Link>
          </div>
        </div>
      </div>
      <div className="section section__container">
        <div className="container--medium section__text">
          <h2>単発セッション</h2>
          <p>
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
          </p>
          <div className="button">
            <Link href="/">Book</Link>
          </div>
        </div>
        <Image
          src="/images/site/570x570.png"
          width={600}
          height={600}
          alt="debug"
        />
      </div>
    </Fragment>
  );
}
