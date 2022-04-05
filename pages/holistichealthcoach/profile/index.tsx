import Head from "next/head";
import Image from "next/image";
// import Hero from "../../../components/hero/hero";
import { Fragment } from "react";

export default function Profile() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            {/* <Hero bgImageUrl='"/images/site/freedom.jpg"' /> */}
            <div className="main">
                <div className="section">
                    <Image
                        objectFit="cover"
                        src="/images/profile.jpg"
                        width={500}
                        height={700}
                        alt="debug"
                    />
                    <div className="section__body">
                        <h1>Utano Harada</h1>
                        <h2 className="title--small">
                            Holistic Health Coach & Web Frontend Engineer
                        </h2>
                        <p className="section__text mg-t-2">
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
                <div className="section">
                    <p className="section__body">
                        私は、 「ちゃんとしなきゃ」と自分にプレッシャーをかけてしまい、<br></br>
                        自分を大事にできない時期がありました。
                        <br></br>
                        <br></br>
                        少し休んで、自分の幸せをじっくり考え、<br></br>
                        勉強も仕事探しも全部真っ白でやり直し、<br></br>
                        大好きな人と食事ができることに感謝をしました。
                        <br></br>
                        <br></br>
                        この経験から、今は同じように頑張りすぎている人をサポートするために、ヘルスコーチングをしています。
                    </p>
                </div>
                <div className="section">
                    <p className="section__body">
                        私たちの食事は、心の状態、人間関係、ストレスと密に影響しあっています。
                        <br></br>
                        だけれど、生き急いで、ゆっくり食事について考える時間がない人が多いなあ、という気がしています。
                        <br></br>
                        <br></br>
                        私のセッションは、どんなことを言っても大丈夫な場所です。<br></br>
                        深呼吸して、あなたの背負っているものを置いて、<br></br>
                        あなたのことについて話しませんか。
                    </p>
                    <Image
                        objectFit="cover"
                        src="/images/profile1.jpg"
                        width={600}
                        height={600}
                        alt="debug"
                    />
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
