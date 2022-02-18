import Head from "next/head";
import Image from "next/image";
import Hero from "../../../components/hero/hero";
import Button from "../../../components/button/button";
import { Fragment } from "react";

export default function Philosophy() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <Hero pageTitle="What is Holistic Health" bgImageUrl='"/images/life/sky.png"' />
            <div className="section">
                <div className="container--large">
                    <h2 className="text--center">本当のあなたに戻ろう</h2>
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
                    width={400}
                    height={400}
                    alt="debug"
                />
            </div>
            <div className="margin--top">
                <h2 className="text--center">
                    もっと幸せになるために
                    <br></br>
                    今すべきことがわかる
                </h2>
                <div className="section">
                    <Image
                        objectFit="cover"
                        src="/images/life/meal.jpg"
                        width={300}
                        height={300}
                        alt="debug"
                    />
                    <div className="container__sentence">
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
            <h1 className="text--center">My Offering</h1>
            <div className="section--grid section">
                <h2>1:1 90 Minute Session</h2>
                <div className="grid__image">
                    <Image
                        objectFit="cover"
                        src="/images/life/veg1.jpg"
                        width={600}
                        height={600}
                        alt="debug"
                    />
                </div>

                <div className="container__sentence">
                    <p className="container__text">
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
                    <Button href='"/"' label="Book" />
                </div>
            </div>
            <div className="section--gridReverse section">
                <h2>6 month program</h2>
                <div className="grid__Reverseimage">
                    <Image
                        objectFit="cover"
                        src="/images/life/veg1.jpg"
                        width={600}
                        height={600}
                        alt="debug"
                    />
                </div>
                <div className="container__sentence">
                    <p className="container__text">
                        もっと健康になりたい、もっと幸せになりたい人のためのプログラムです。
                        <br></br>
                        <br></br>
                        最初のセッションで、今のあなたを知るワークを行い、<br></br>
                        ひとりひとりの目的に合わせて月2回、6ヶ月のプログラムを考えます。
                        <br></br>
                        定期的にセッションを受けることで、知識が習慣化しやすくなるだけでなく、自分自身の変化をより実感することができます。
                    </p>
                    <Button href='"/holistichealthcoach/service"' label="Detail" />
                </div>
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
