import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/hero/hero";
// import Scroll from "../../components/scroll/scroll";
// import Button from "../../components/button/button";
import { client } from "../../libs/client";
import { Fragment } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function Home({ blog }) {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <Hero bgImageUrl='"/images/life/sunnyday.png"' />
            <div className="section">
                <div className="section__text">
                    <h2>
                        誰かのための自分から、
                        <br></br>自分のための自分に戻ろう
                    </h2>
                    <p className="container__text">
                        一生懸命に生きて、いつの間にか
                        <br></br>
                        あなたは誰かのために生きていませんか<br></br>
                        <br></br>
                        生き急ぐ日々<br></br>
                        <br></br>
                        期待され評価されるあなたの重荷を置いて<br></br>
                        体と心のサインに目を向けましょう。
                    </p>
                </div>
                <Image
                    src="/images/site/570x570.png"
                    width={500}
                    height={400}
                    objectFit="cover"
                    alt="debug"
                />
            </div>
            <div className="text--emphasized">
                <h1>あなたが、あなたを変える</h1>
                <p>
                    どんな悩みを持っていても<br></br>
                    どんな理想があっても<br></br>
                    あなたは、すでに答えを持っています<br></br>
                    <br></br>
                    あなたの過去は、宝です。<br></br>
                    食生活や育ってきた環境、人間関係<br></br>
                    楽しいこと、辛いこと<br></br>
                    あなたの宝の軌跡は、幸せへの道標<br></br>
                    <br></br>
                    体と心に必要なものをあげて、<br></br>
                    あなたらしく生きてほしい<br></br>
                    あなた自身を愛してほしい<br></br>
                    <br></br>
                    あなたが持っている答えを一緒に見つけませんか
                </p>
            </div>
            <div className="section section--reverse">
                <div className="section__text">
                    <h2>
                        食の軌跡は、<br></br>人生の軌跡
                    </h2>
                    <p className="container__text">
                        あなたは、あなたの食べるものでできています<br></br>
                        <br></br>
                        あなたの心は、あなたの食べるものに現れます<br></br>
                        <br></br>
                        大事な人と食べる喜び<br></br>
                        食材ひとつひとつを味わい感謝する<br></br>
                        <br></br>
                        深呼吸して、人間らしい時間を思い出しませんか。
                    </p>
                </div>
                <Image
                    src="/images/life/veg.jpg"
                    width={500}
                    height={500}
                    objectFit="cover"
                    alt="debug"
                />
            </div>
            <div className="text--emphasized">
                <h1>Blog</h1>
                <div>
                    <ul className="grid--three1">
                        {blog.map((blog) => (
                            <li key={blog.id} className="card">
                                <Image
                                    objectFit="cover"
                                    src={blog.image.url}
                                    width={400}
                                    height={400}
                                    alt="debug"
                                />
                                <p className="caption">
                                    {dayjs
                                        .utc(blog.publishedAt)
                                        .tz("Asia/Tokyo")
                                        .format("YYYY-MM-DD")}
                                </p>
                                <Link href={`holistichealthcoach/blog/${blog.id}`}>
                                    <a className="sentence">{blog.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="margin--top">
                <h1>Webサイト制作のご依頼はこちら</h1>
                <p className="container__text">
                    Webサイト制作のご依頼も受け付けております。<br></br>
                    詳細は以下をご覧ください。<br></br>
                    CloudWorks：<br></br>
                    Githubアカウント：<br></br>
                </p>
            </div>
        </Fragment>
    );
}

export async function getStaticProps() {
    const data = await client.get({ endpoint: "blog" });
    return {
        props: {
            layout: "health",
            blog: data.contents,
        },
    };
}
