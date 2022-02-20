import Head from "next/head";
import Image from "next/image";
import Hero from "../../../components/hero/hero";
import { Fragment } from "react";

export default function Profile() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <div className="section">
                <Image
                    objectFit="cover"
                    src="/images/site/570x570.png"
                    width={500}
                    height={500}
                    alt="debug"
                />
                <h1>
                    あなたの<br></br>セーフスペースに
                </h1>
            </div>
            <div className="section section--reverse">
                <Image
                    objectFit="cover"
                    src="/images/site/570x570.png"
                    width={500}
                    height={500}
                    alt="debug"
                />
                <div className="container__sentence">
                    <h2>Utano Harada</h2>
                    <h3 className="title--small">Holistic Health Coach & Web Frontend Engineer</h3>
                    <p className="container__text">
                        皆さん、こんにちは。Utanoです。<br></br>
                        サイトに足を運んでくださって、ありがとうございます。
                        <br></br>
                        <br></br>
                        現在はWebフロントエンジニアとして働きつつ、愛する目の前の人が心も体も幸せになる手伝いをしたい、という想いから、ヘルスコーチとしても活動しています。
                        <br></br>
                        歌うこと、食べること、コードを書くこと、大好きな人と一緒に過ごすことが大好きで、毎日ワクワクして生きています。
                        <br></br>
                        <br></br>
                        幼い頃誕生日にもらった野菜の本がきっかけで、栄養や健康について考えるのが大好きになり、「もっと自分を愛したい・認めてあげたい」の想いから、NY拠点の栄養学校
                        Institute for Integrative Nutritionでホリスティック栄養学を学びました。
                    </p>
                </div>
            </div>
            <div className="section section--gridReverse">
                <h2 className="text--center">頑張りすぎた私</h2>
                <div className="grid__Reverseimage">
                    <Image
                        objectFit="cover"
                        src="/images/site/570x570.png"
                        width={600}
                        height={600}
                        alt="debug"
                    />
                </div>
                <div className="container__sentence">
                    <p className="container__text">
                        私は、ストレスと極端な食事制限のせいで心身のバランスを壊したことがあります。
                        <br></br>
                        卒業研究も就職活動もうまく行かず、<br></br>
                        「ちゃんとしなきゃ」と自分にプレッシャーをかけてしまい、<br></br>
                        大学卒業3ヶ月前に「もう嫌だ」と全てを放り投げて、休学しました。
                        <br></br>
                        <br></br>
                        お休みの間、自分の幸せをじっくり考えました。<br></br>
                        勉強も仕事探しも全部真っ白でやり直しました。<br></br>
                        食事制限もやめ、大好きな人と食事ができることに感謝をしました。
                        <br></br>
                        <br></br>
                        <br></br>
                        この経験から、今は同じように頑張りすぎている人をサポートするために、ヘルスコーチングをしています。
                    </p>
                </div>
            </div>
            <h1 className="text--center">あなたに安心して話してほしい</h1>
            <div className="section section--grid">
                <div className="grid__image">
                    <Image
                        objectFit="cover"
                        src="/images/life/strawberry.jpg"
                        width={600}
                        height={600}
                        alt="debug"
                    />
                </div>
                <div className="container__sentence">
                    <p className="container__text">
                        私たちの食事は、心の状態、人間関係、ストレスと密に影響しあっています。
                        <br></br>
                        だけれど、生き急いで、ゆっくり食事について考える時間がない人が多いなあ、という気がしています。
                        <br></br>
                        <br></br>
                        <br></br>
                        私のセッションは、どんなことを言っても大丈夫な場所です。<br></br>
                        深呼吸して、あなたの背負っているものを置いて、<br></br>
                        あなたのことについて話しませんか。
                    </p>
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
