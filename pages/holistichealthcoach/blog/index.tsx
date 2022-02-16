import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../libs/client";
import { Fragment } from "react";

export default function Blog({ blog }) {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>

            <div className="section flex__spaceBetween">
                <div className="sidemenu container--small">
                    <div className="sidemenu__profile">
                        <Image
                            objectFit="cover"
                            src="/images/site/570x570.png"
                            width={70}
                            height={70}
                            alt="debug"
                        />
                    </div>
                    <div className="sentence sidemenu__info">Utano Harada</div>
                    <div className="caption sidemenu__info">
                        Holistic Health Coach & Web Front Engineer
                    </div>
                    <div className="sidemenu__sns">
                        <Image
                            objectFit="cover"
                            src="/images/site/570x570.png"
                            width={25}
                            height={25}
                            alt="debug"
                        />
                        <Image
                            objectFit="cover"
                            src="/images/site/570x570.png"
                            width={25}
                            height={25}
                            alt="debug"
                        />
                        <Image
                            objectFit="cover"
                            src="/images/site/570x570.png"
                            width={25}
                            height={25}
                            alt="debug"
                        />
                    </div>
                </div>

                <div className="container--large">
                    <h1 className="title__top">Blog</h1>
                    <div className="section section__container">
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
                                    <Link href={`/holistichealthcoach/blog/${blog.id}`}>
                                        <a className="sentence">{blog.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
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
