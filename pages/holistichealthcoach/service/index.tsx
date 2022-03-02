import Head from "next/head";
import Image from "next/image";
import Button from "../../../components/button/button";
import Hero from "../../../components/hero/hero";
import { Fragment } from "react";

export default function Service() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <Hero pageTitle="Service" bgImageUrl='"/images/life/hill.jpg"' />
            <div className="main">
                <div className="section__wrap">
                    <h2 className="text--center">変化を習慣化する</h2>
                    <div className="section section--reverse">
                        <Image
                            objectFit="cover"
                            src="/images/life/meal.jpg"
                            width={300}
                            height={300}
                            alt="debug"
                        />
                        <p className="section__text">
                            食事、マインドセット、人間関係など、<br></br>
                            何事も新しいことを定着させるには、時間がかかります。<br></br>
                            <br></br>
                            自分に厳しくしすぎて、うまくいかなかった経験がある方もいらっしゃるのではないでしょうか。
                            <br></br>
                            <br></br>
                            私のコーチングでは、ヒアリングをもとに、<br></br>
                            できることから少しずつ習慣化できるようサポートします。
                        </p>
                    </div>
                </div>
                <div className="section__wrap">
                    <h2 className="text--center">詳細</h2>
                    <div className="section">
                        <Image
                            objectFit="cover"
                            src="/images/life/meal.jpg"
                            width={300}
                            height={300}
                            alt="debug"
                        />

                        <p className="section__text">
                            セッションは対面形式です。<br></br>
                            ＊オンライン希望の場合、ご相談ください。<br></br>
                            <br></br>
                            カフェなどお好きな場所をご指定ください。<br></br>
                            私はカフェ巡りが大好きなので、素敵なところで一緒にお話しできたらうれしいです。
                            <br></br>
                            ＊交通費や飲食代は料金に含まれませんので、ご了承ください。
                        </p>
                    </div>
                </div>
                <div className="section__wrap">
                    <h2 className="text--center">1:1 90 Minute Session</h2>
                    <div className="grid--twoColumns">
                        <Image
                            objectFit="cover"
                            src="/images/life/veg1.jpg"
                            width={600}
                            height={600}
                            alt="debug"
                        />

                        <div>
                            <p className="section__text">
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
                            <Button
                                href='"https://docs.google.com/forms/d/e/1FAIpQLScyrg7yJQIIZQMpuZ8c8KTpPQd_GBY-nubF-uorsB8Vj8-2jw/viewform?usp=sf_link"'
                                label="アンケートに答える"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <h2 className="text--center">6 month program</h2> */}
            {/* <div className="grid--twoColumns">
                <Image
                    objectFit="cover"
                    src="/images/life/veg1.jpg"
                    width={600}
                    height={600}
                    alt="debug"
                />
                <div>
                    <p className="section__text">
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
            </div> */}
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
