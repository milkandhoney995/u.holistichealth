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
            <Hero
                bgImageUrl='"/images/site/freedom.jpg"'
                heroBody="<h2>
                        誰かのための自分から、
                        <br></br>自分のための自分に戻ろう
                    </h2>"
            />
            <div className="main">
                <div className="sectionWrap">
                    <div className="section">
                        <div className="section__body">
                            <div className="section__sentence">
                                一生懸命に生きて、いつの間にか
                                <br></br>
                                あなたは誰かのために生きていませんか<br></br>
                                <br></br>
                                生き急ぐ日々<br></br>
                                <br></br>
                                期待され評価されるあなたの重荷を置いて<br></br>
                                体と心のサインに目を向けましょう。
                            </div>
                        </div>
                        <div className="section__image">
                            <Image
                                src="/images/life/hana.jpg"
                                width={500}
                                height={400}
                                objectFit="cover"
                                alt="debug"
                            />
                        </div>
                    </div>
                </div>
                <div className="sectionWrap">
                    <div className="section--emphasized">
                        <h1>あなたが、あなたを変える</h1>
                        <div>
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
                        </div>
                    </div>
                </div>
                <div className="sectionWrap">
                    <div className="section section--reverse">
                        <div className="section__body">
                            <h1>食の軌跡は、人生の軌跡</h1>
                            <div className="section__sentence">
                                あなたは、あなたの食べるものでできています<br></br>
                                あなたの心は、あなたの食べるものに現れます<br></br>
                                <br></br>
                                食の軌跡は、人生の軌跡<br></br>
                                大事な人と食べる喜び<br></br>
                                食材ひとつひとつを味わい感謝する<br></br>
                                <br></br>
                                深呼吸して、人間らしい時間を思い出しませんか。
                            </div>
                        </div>
                        <div className="section__image">
                            <Image
                                src="/images/life/veg.jpg"
                                width={500}
                                height={500}
                                objectFit="cover"
                                alt="debug"
                            />
                        </div>
                    </div>
                </div>
                <div className="sectionWrap">
                    <div className="section--emphasized">
                        <h1 className="section__tilte">Blog</h1>
                        <div className="container">
                            <ul className="cardWrap--3cols">
                                {blog.map((blog) => (
                                    <li key={blog.id} className="card">
                                        <div className="card__image">
                                            <Image
                                                objectFit="cover"
                                                src={blog.image.url}
                                                width={400}
                                                height={400}
                                                alt="debug"
                                            />
                                        </div>
                                        <div className="card__body">
                                            <div className="card__secondary">
                                                {dayjs
                                                    .utc(blog.publishedAt)
                                                    .tz("Asia/Tokyo")
                                                    .format("YYYY-MM-DD")}
                                            </div>
                                            <div className="card__primary">
                                                <Link href={`holistichealthcoach/blog/${blog.id}`}>
                                                    {blog.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
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
