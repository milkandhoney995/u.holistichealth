import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Profile() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealthcoach</title>
        <meta
          name="description"
          content="this is u.holistichealthcoach's website."
        />
      </Head>
      <h1 className="title__top">Profile</h1>
      <div className="section__container">
        <Image
          src="/images/site/570x570.png"
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
            小学生の頃、両親から誕生日にもらった野菜の本がきっかけで栄養に興味を持つようになる。
            <br></br>
            <br></br>
            新卒1年目の春、「もっと自分を愛したい」「頑張りすぎている人を助けたい」の想いから、NY拠点の栄養学校
            Institute for Integrative Nutritionでホリスティック栄養学を学ぶ。
            卒業後、フリーのWebフロントエンジニアに加え、ホリスティックヘルスコーチの活動を開始。
          </p>
        </div>
      </div>
      <div className="section__container">
        <div className="container--medium">
          <h2>真面目だった私</h2>
          <p>
            私は大学卒業3ヶ月前、卒業研究と就職活動のストレス、極端な食事制限のせいで、心身のバランスを壊し大学を1年間休学しました。
            <br></br>
            <br></br>
            お休みの間、自分の幸せをじっくり考えて、勉強も仕事探しもやり直し、バランス良い食事を心がけ、食べ物や人へ小さな感謝をすることで、心体ともに回復していく中で、
            <br></br>
            <br></br>
            「どんなに弱い私でも、いつも愛されている、自分で自分を愛することができる」と知ることができました。
          </p>
        </div>
        <Image
          src="/images/site/570x570.png"
          width={500}
          height={500}
          alt="debug"
        />
      </div>
      <div className="section__container">
        <Image
          src="/images/site/570x570.png"
          width={500}
          height={500}
          alt="debug"
        />
        <div className="container--medium">
          <h2>愛を伝えたい</h2>
          <p>
            この経験から、私は愛する目の前の人がホリスティックな健康を楽しんで、心も体も幸せになる手伝いをしたい、という思いから、ヘルスコーチとして活動中しています。
          </p>
        </div>
      </div>
    </Fragment>
  );
}
