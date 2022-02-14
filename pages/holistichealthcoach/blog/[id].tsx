import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function PostId({ post }) {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <Image
                className="image"
                src="/images/site/570x570.png"
                width={1000}
                height={500}
                alt="debug"
            />
            <div className="section__container">
                <h1>{post.id}</h1>
            </div>
        </Fragment>
    );
}

// ビルド時に呼び出される
export async function getStaticPaths() {
    // 外部APIからデータを取得
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    // データに基づいて事前レンダリングするパスを取得
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }));

    // ビルド時に取得したパスのみを事前レンダリングする
    // { fallback: false } は他のルートが404であることを意味します
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // paramsには投稿idが含まれている
    // ルートが/posts/1のような場合、params.idは1
    const res = await fetch(`/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            layout: "health",
            post,
        },
    };
}
