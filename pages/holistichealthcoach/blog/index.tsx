import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { client } from "../../../libs/client";
import { Fragment } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function Blog({ blog }) {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <div className="margin--top">
                <h1 className="margin--top">Blog</h1>
                <div>
                    <div className="section">
                        <ul className="center grid--three">
                            {blog.map((blog) => (
                                <li key={blog.id} className="latestBlog__item">
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
