import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import Hero from "../components/health/home/hero/hero.tsx";
import { client } from "../../libs/client";
import { Fragment } from "react";

export default function Home({ blog }) {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <div className="section">
                <div className="section__container">
                    <div>
                        <h2>
                            食事から自分を探す<br></br>ヘルスコーチング
                        </h2>
                        <p className="container__text">
                            私たちは、私たちの食べるものでできています<br></br>
                            <br></br>
                            大事な人と食べる<br></br>
                            <br></br>
                            食材ひとつひとつを味わい<br></br>
                            <br></br>
                            感謝する時間、人間らしい時間を愛したい<br></br>
                            <br></br>
                            生き急ぐ日々<br></br>
                            <br></br>
                            忘れがちな、あなたと食事の関係<br></br>
                            <br></br>
                            一緒に、考えてみませんか。
                        </p>
                    </div>
                    <Image
                        className="image"
                        src="/images/site/570x570.png"
                        width={500}
                        height={500}
                        alt="debug"
                    />
                </div>
                <div className="container__button">
                    <div className="button button--pink">
                        <Link href="/holistichealthcoach/philosophy">Holistic Health</Link>
                    </div>
                    <div className="button button--last button--pink">
                        <Link href="/holistichealthcoach/profile">About Me</Link>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="section__container">
                    <Image
                        className="image"
                        src="/images/life/latte.jpg"
                        width={545}
                        height={552}
                        alt="debug"
                    />
                    <div className="section__text">
                        <div>
                            <h2>あなたのセーフスペースに</h2>
                            <p className="container__text">
                                私のセッションは、どんなことを言っても大丈夫な場所です。
                                <br></br>
                                <br></br>
                                深呼吸して、あなたの背負っているものを置いて、<br></br>
                                <br></br>
                                あなたのことについて話しませんか。
                            </p>
                        </div>
                        <div className="button button--pink">
                            <Link href="/holistichealthcoach/service">Service</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latestBlog section">
                <h2>Blog</h2>
                <ul className="center latestBlog__list">
                    {blog.map((blog) => (
                        <li key={blog.id} className="latestBlog__item">
                            <Image
                                className="image"
                                src={blog.image.url}
                                width={400}
                                height={400}
                                alt="debug"
                            />
                            <p className="caption">{blog.created_at}</p>
                            <Link href={`/blog/${blog.id}`}>
                                <a className="sentence">{blog.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <ul >
                    <li >
                        <Image
                            src="/images/life/strawberry.jpg"
                            width={400}
                            height={400}
                            alt="debug"
                        />
                        <p className="caption">YYYY.MM.DD</p>
                        <p className="sentence">
                            ニュースニュースニュースニュースニュースニュースニュースニュースニュース
                        </p>
                    </li>
                    <li className="latestBlog__item">
                        <Image
                            className="image"
                            src="/images/life/salada.jpg"
                            width={400}
                            height={400}
                            alt="debug"
                        />
                        <p className="caption">YYYY.MM.DD</p>
                        <p className="sentence">
                            ニュースニュースニュースニュースニュースニュースニュースニュースニュース
                        </p>
                    </li>
                </ul> */}
                <div className="button button--pink">
                    <Link href="/blog">Blog</Link>
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
