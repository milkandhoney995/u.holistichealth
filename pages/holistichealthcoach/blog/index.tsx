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
            <div className="margin--top">
                <h1 className="text--center">Blog</h1>
                <div>
                    <div className="section">
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
