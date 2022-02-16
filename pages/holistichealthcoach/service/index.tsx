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
            <div className="section section__container">
                <Image
                    objectFit="cover"
                    src="/images/life/veg1.jpg"
                    width={600}
                    height={600}
                    alt="debug"
                />
                <div className="container--sentence">
                    <h2>単発セッション</h2>
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
            <div className="section section__container">
                <Image
                    objectFit="cover"
                    src="/images/life/strawberry.jpg"
                    width={600}
                    height={600}
                    alt="debug"
                />
                <div className="container--sentence">
                    <h2>6ヶ月プログラム</h2>
                    <p className="container__text">
                        もっと健康になりたい、もっと幸せになりたい人のためのプログラムです。
                        <br></br>
                        <br></br>
                        最初のセッションで、今のあなたを知るワークを行い、<br></br>
                        ひとりひとりの目的に合わせて月2回、6ヶ月のプログラムを考えます。
                        <br></br>
                        定期的にセッションを受けることで、知識が習慣化しやすくなるだけでなく、自分自身の変化をより実感することができます。
                        <br></br>
                        <br></br>
                        【概要】<br></br>
                        全12回（初回無料、各\3000）<br></br>
                        1セッション3回（自分を知る、デトックス、オーガニック）￥6,000ー<br></br>
                        ２セッション3回（三大栄養素：糖質、脂質、タンパク質）￥9,000ー<br></br>
                        ３セッション3回（ビタミンとミネラル、腸内環境、炎症）　￥9,000ー<br></br>
                        4セッション3回（食べ物とメンタルヘルス、睡眠、まとめ）　￥9,000ー<br></br>
                        <br></br>
                        <br></br>
                        セッションはオンライン・対面両形式で受けられます。<br></br>
                        対面の場合は、カフェなどお好きな場所をご指定ください。<br></br>
                        交通費や飲食代は料金に含まれませんので、ご了承ください。<br></br>
                    </p>
                    <Button href='"/"' label="Book" />
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
