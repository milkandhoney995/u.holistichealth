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
    </Fragment>
  );
}
