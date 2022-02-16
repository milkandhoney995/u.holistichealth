import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/hero/hero";
// import Scroll from "../../components/scroll/scroll";
import Button from "../../components/button/button";
import { client } from "../../libs/client";
import { Fragment } from "react";

export default function Home({ blog }) {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <Hero bgImageUrl='"/images/life/sunnyday.png"' />
            <div className="section">
                <div className="section section__container">
                    <div>
                        <h2>
                            私たちは、<br></br>私たちの食べるものでできている
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
                        src="/images/life/veg.jpg"
                        width={500}
                        height={500}
                        objectFit="cover"
                        alt="debug"
                    />
                </div>
            </div>
            <div className="section text--center">
                <h1>あなたのセーフスペースになりたい</h1>
                <p className="container__text">
                    生き急ぐ日々の中で、忘れがちになってしまう食事の関係
                    <br></br>
                    <br></br>
                    毎日たくさん働いてくれる体が、<br></br>
                    バランスの良い食生活で健康になると、心も満たされる。
                    自分が満たされた状態は、自分の内の声に従って、自分らしく生きること。<br></br>
                    自分らしく生きるとは、自分を愛すること<br></br>
                    <br></br>
                    大事な人と食べる<br></br>
                    食材ひとつひとつを味わい<br></br>
                    感謝する時間、人間らしい時間を愛してほしい<br></br>
                    <br></br>
                    どんなことを言っても大丈夫<br></br>
                    深呼吸して、あなたの背負っているものを置いて、<br></br>
                    あなたのことについて話しませんか。
                </p>
            </div>
            <div className="section">
                <div className="section section__container">
                    <Link href="/holistichealthcoach/philosophy">
                        <Image
                            objectFit="cover"
                            src="/images/life/latte.jpg"
                            width={545}
                            height={552}
                            alt="debug"
                        />
                    </Link>
                    <Link href="/holistichealthcoach/profile">
                        <Image
                            objectFit="cover"
                            src="/images/life/veg1.jpg"
                            width={545}
                            height={552}
                            alt="debug"
                        />
                    </Link>
                </div>
            </div>
            <div className="latestBlog section">
                <h2>Blog</h2>
                <ul className="center latestBlog__list">
                    {blog.map((blog) => (
                        <li key={blog.id} className="latestBlog__item">
                            <Image
                                objectFit="cover"
                                src={blog.image.url}
                                width={400}
                                height={400}
                                alt="debug"
                            />
                            <p className="caption">{blog.created_at}</p>
                            <Link href={`holistichealthcoach/blog/${blog.id}`}>
                                <a className="sentence">{blog.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button label="Blog" href="/holistichealthcoach/blog" />
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
