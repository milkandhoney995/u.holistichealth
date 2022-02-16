import Head from "next/head";
import Image from "next/image";
import Hero from "../../../components/hero/hero";
import { Fragment } from "react";

export default function Philosophy() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <Hero pageTitle="What is Holistic Health" bgImageUrl='"/images/life/sky.png"' />
            <div className="section flex__columnCenter">
                <div className="container--large">
                    <h2 className="section__titleCenter">ホリスティック栄養学とは</h2>
                    <p className="container__text">
                        Holistic（全体）という言葉の通り、ホリスティック栄養学は、物理的な栄養だけでなく、
                        <br></br>
                        人間関係やワークライフバランス、運動やスピリチュアルなど多元的な要素のバランスが取れた状態を「健康」と定義します。
                        <br></br>
                        <br></br>
                        人生の様々な要素は、私たちの嗜好や食選択に大きな影響を与えます。<br></br>
                        そのため、まず食生活を振り返ることで、体や心の状態を知ることができます。
                    </p>
                </div>
                <Image
                    objectFit="cover"
                    src="/images/site/570x570.png"
                    width={500}
                    height={500}
                    alt="debug"
                />
            </div>
            <div className="section">
                <div className="section section__container">
                    <Image
                        objectFit="cover"
                        src="/images/life/meal.jpg"
                        width={500}
                        height={500}
                        alt="debug"
                    />
                    <div className="container--medium">
                        <h2>
                            あなたの幸せのために <br></br>
                            一緒に歩んでいくパートナーになります
                        </h2>
                        <p className="container__text">
                            私のヘルスコーチングは、NY拠点の栄養学校 Institute for Integrative
                            Nutritionのホリスティック栄養学に基づいています。
                            <br></br>
                            <br></br>
                            ヘルスコーチングでは、クライアントと対話しながら、<br></br>
                            運動や栄養、人間関係やキャリアなど人生の多方面からクライアントの状態を深掘りし、1人1人に合わせたセッションで、皆さんのより良いライフスタイルを実現するサポートをします。
                        </p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="section section__container">
                    <div className="container--medium">
                        <h2>
                            もっと幸せになるために
                            <br></br>
                            今すべきことがわかる
                        </h2>
                        <p className="container__text">
                            過去に経験した環境の変化や仕事、人間関係、食生活などからあなたのルーツをたどります。
                            <br></br>
                            <br></br>
                            多方面から自分を深掘りすることで、自分が気になっていることの原因が明確になります。
                            <br></br>
                            <br></br>
                            悩みの根本に向き合うことで、体の内側から綺麗になるだけでなく、
                            <br></br>
                            人間関係が良くなったり、もっと自分を好きになれます。
                        </p>
                    </div>
                    <Image
                        objectFit="cover"
                        src="/images/life/veg1.jpg"
                        width={500}
                        height={500}
                        alt="debug"
                    />
                </div>
            </div>
            <div className="section background flex__columnCenter">
                <h2>私たちは、 私たちの食べるものでできている</h2>
                <p className="container__text text--center">
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
