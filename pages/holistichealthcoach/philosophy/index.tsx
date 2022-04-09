import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Philosophy() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            {/* <Hero pageTitle="Love yourself, manage yourself" bgImageUrl='"/images/life/sky.png"' /> */}
            <div className="main">
                <div className="sectionWrap">
                    <div className="section">
                        <div className="section__image">
                            <Image
                                objectFit="cover"
                                src="/images/site/selflove.jpg"
                                width={600}
                                height={500}
                                alt="debug"
                            />
                        </div>
                        <div className="section__body">
                            <h2 className="">
                                あなたの生活は、<br></br>
                                何かに偏っていませんか？
                            </h2>
                            <div className="section__sentence mg-t-2">
                                近年、「健康」という言葉は、病気や怪我がないだけでなく、人間関係やワークライフバランス、運動やスピリチュアルなど多元的な要素のバランスが取れた状態とと定義されつつあります。
                                <br></br>
                                そのため、近年のヘルス分野では、目に見える症状ではなく、根本的な原因を特定し、解決することに重点が置かれています。
                                <br></br>
                                この考えは、アメリカをはじめとする先進国で Holistic
                                Health（Holistic：全体的な） として広まっています。
                                <br></br>
                                <br></br>
                                ですが、日本でHolistic Healthはまだまだ浸透しておらず、
                                仕事など生活の重点が一要素に偏ってしまう人が少なくありません。
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sectionWrap">
                    <div className="section--emphasized">
                        <h1 className="section__title">あなたの話をしませんか</h1>
                        <div className="container__text">
                            あなたは、子供のころどんな夢を持っていましたか<br></br>
                            <br></br>
                            今、抱えている不安や悩みはありますか<br></br>
                            <br></br>
                            あなたは、どんな時に幸せと感じますか<br></br>
                            <br></br>
                            あなたは、どう生きていきたいですか<br></br>
                            <br></br>
                            あなたの落ち着く場所で、少しお話ししませんか
                        </div>
                    </div>
                </div>
                <div className="sectionWrap">
                    <div className="section section--reverse">
                        <div className="section__image">
                            <Image
                                objectFit="cover"
                                src="/images/philosophy1.jpg"
                                width={400}
                                height={500}
                                alt="debug"
                            />
                        </div>
                        <div className="section__body">
                            <div className="section__sentence">
                                ヘルスコーチとは、クライアントが悩みの根本に向き合うサポートをする仕事です。
                                <br></br>
                                私のヘルスコーチングでは、NY拠点の栄養学校 Institute for Integrative
                                Nutritionのホリスティックヘルスに基づき、過去に経験した環境の変化や仕事、人間関係、食生活などからあなたのルーツをたどります。
                            </div>
                        </div>
                    </div>
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
