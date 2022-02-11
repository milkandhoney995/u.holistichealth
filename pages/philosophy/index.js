import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Philosophy() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealthcoach</title>
        <meta
          name="description"
          content="this is u.holistichealthcoach's website."
        />
      </Head>
      <h1>
        全ての人に<br></br>ホリスティック栄養学を
      </h1>
      <div className="flex__columnCenter">
        <div className="container--large">
          <h2 className="section__titleCenter">ホリスティック栄養学とは</h2>
          <p>
            Holistic（全体）という言葉の通り、ホリスティック栄養学は、物理的な栄養だけでなく、人間関係やワークライフバランス、運動やスピリチュアルなど多元的な要素のバランスが取れた状態を「健康」と定義します。
          </p>
          <p>
            人生の様々な要素は、私たちの嗜好や食選択に大きな影響を与えます。
            そのため、まず食生活を振り返ることで、体や心の状態を知ることができます。
          </p>
        </div>
        <Image
          src="/images/site/570x570.png"
          width={500}
          height={500}
          alt="debug"
        />
      </div>
      <div className="section">
        <div className="section__container">
          <div className="container--medium">
            <h2>
              あなたの幸せのために <br></br>
              一緒に歩んでいくパートナーになります
            </h2>
            <p>
              私のヘルスコーチングは、NY拠点の栄養学校 Institute for Integrative
              Nutritionのホリスティック栄養学に基づいています。
              <br></br>
              <br></br>
              お医者さんやカウンセラーのように、目に見える症状を「治療する」のではなく、ヘルスコーチは、目に見える症状の根本的な原因を特定し、改善する「予防」を目的とします。
              <br></br>
              <br></br>
              ヘルスコーチングでは、クライアントと対話しながら、<br></br>
              運動や栄養、人間関係やキャリアなど人生の多方面からクライアントの状態を深掘りし、1人1人に合わせたセッションで、皆さんのより良いライフスタイルを実現するサポートをします。
            </p>
          </div>
          <Image
            src="/images/site/570x570.png"
            width={500}
            height={500}
            alt="debug"
          />
        </div>
      </div>
      <div className="section section__container">
        <div className="container--medium">
          <h2>
            多方面から<br></br>今のあなたを深掘り
          </h2>
          <Image
            src="/images/site/570x570.png"
            width={200}
            height={200}
            alt="debug"
          />
        </div>
        <div className="container--medium">
          <h2>
            生活の幸福感を高める<br></br>長期的サポート
          </h2>
          <Image
            src="/images/site/570x570.png"
            width={200}
            height={200}
            alt="debug"
          />
        </div>
      </div>
      <div className="section">
        <h2 className="title--center">こんな人と話したい</h2>
        <div className="center">
          <Image
            src="/images/site/570x570.png"
            width={200}
            height={200}
            alt="debug"
          />
          <Image
            src="/images/site/570x570.png"
            width={200}
            height={200}
            alt="debug"
          />
          <Image
            src="/images/site/570x570.png"
            width={200}
            height={200}
            alt="debug"
          />
          <Image
            src="/images/site/570x570.png"
            width={200}
            height={200}
            alt="debug"
          />
        </div>
      </div>
      <div className="section">
        <div className="section__container">
          <h2>私たちは、 私たちの食べるものでできている</h2>
          <Image
            src="/images/site/570x570.png"
            width={500}
            height={400}
            alt="debug"
          />
        </div>
        <div className="container--medium container--center">
          <p>
            あなたは、いつも何を食べていますか？<br></br>
            <br></br>
            私たちは、私たちの食べるものでできています <br></br>
            <br></br>
            毎日たくさん働いてくれる体が、バランスの良い食生活で健康になると、心も満たされる。
            <br></br>
            自分が満たされた状態は、自分の内の声に従って、自分らしく生きること。
            <br></br>
            自分らしく生きるとは、自分を愛すること<br></br>
            <br></br>
            生き急ぐ日々<br></br>
            周りからの期待 <br></br>
            真面目なあなたの責任感 <br></br>
            <br></br>
            少し止まって、あなたと食事について考えてみませんか。<br></br>
            どんな小さなことでも構いません。<br></br>
            <br></br>あなたの話、聞かせてくれませんか。
          </p>
        </div>
      </div>
    </Fragment>
  );
}
