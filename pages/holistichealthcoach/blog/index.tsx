import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Tag from "../../../components/tag/tag";
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
            <div className="main">
                <div className="">
                    <h1 className="text--center">Blog</h1>
                    <div className="singleColumn_container">
                        <div className="container">
                            <Tag />
                        </div>

                        <div className="container">
                            <ul className="cardWrap">
                                {blog.map((blog) => (
                                    <li key={blog.id} className="card">
                                        <div className="card__image">
                                            <Image
                                                objectFit="cover"
                                                src={blog.image.url}
                                                width={350}
                                                height={300}
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
                                            <div className="">
                                                <Link href={`/holistichealthcoach/blog/${blog.id}`}>
                                                    <div className="card__primary">
                                                        {blog.title}
                                                    </div>
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
