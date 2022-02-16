import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <div className="container__top">
                <Image
                    objectFit="cover"
                    src="/images/site/570x570.png"
                    width={570}
                    height={570}
                    alt="debug"
                />
            </div>
            <div className="section">
                <Image
                    objectFit="cover"
                    src="/images/site/570x570.png"
                    width={500}
                    height={500}
                    alt="debug"
                />
            </div>
            <div className="latestBlog section">
                <h2>Blog</h2>
                <ul className="center latestBlog__list">
                    <li className="latestBlog__item">
                        <Image
                            objectFit="cover"
                            src="/images/site/570x570.png"
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
                            objectFit="cover"
                            src="/images/site/570x570.png"
                            width={400}
                            height={400}
                            alt="debug"
                        />
                        <p className="caption">YYYY.MM.DD</p>
                        <p className="sentence">
                            ニュースニュースニュースニュースニュースニュースニュースニュースニュース
                        </p>
                    </li>
                </ul>
                <div className="button button--green">
                    <Link href="/blog">Blog</Link>
                </div>
            </div>
        </Fragment>
    );
}

export async function getStaticProps() {
    return {
        props: {
            layout: "web",
        },
    };
}
