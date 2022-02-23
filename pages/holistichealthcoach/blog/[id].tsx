import Head from "next/head";
import Image from "next/image";
import Tag from "../../../components/tag/tag";
import { client } from "../../../libs/client";
import { Fragment } from "react";

export default function PostId({ data }) {
    const tags = [
        { tag: "health" },
        { tag: "news" },
        { tag: "self love" },
        { tag: "mindfulness" },
        { tag: "food" },
    ];
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <div className="post__container">
                <div className="post">
                    <h1 className="post__title">{data.title}</h1>
                    <Image
                        className="post__image"
                        src={data.image.url}
                        width={680}
                        height={500}
                        objectFit="cover"
                        alt="debug"
                    />
                    <div
                        className="post__sentence"
                        dangerouslySetInnerHTML={{ __html: data.body }}
                    ></div>
                </div>

                <div className="sidemenu">
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
                            src="/images/site/facebook.svg"
                            width={25}
                            height={25}
                            alt="debug"
                        />
                        <Image
                            objectFit="cover"
                            src="/images/site/instagram.svg"
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
                    <p className="sidemenu__text">
                        食べること、歌うこと、勉強すること、話すことが好きです。
                        <br></br>
                        <br></br>
                        ヘルスコーチング、Web制作の依頼は以下メールアドレスから。<br></br>
                        email: uta.holistichealthandweb@gmail.com
                    </p>
                    <div className="sidemenu__category">
                        <h3 className="sidemenu__title">Category</h3>
                        <ul className="buttonCheckboxs">
                            {tags.map((tags) => (
                                <li key={tags.tag}>
                                    <Tag tag={tags.tag} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

// ビルド時に呼び出される
export async function getStaticPaths() {
    // 外部APIからデータを取得
    const data = await client.get({ endpoint: "blog" });
    // データに基づいて事前レンダリングするパスを取得
    const paths = data.contents.map((content) => `/holistichealthcoach/blog/${content.id}`);

    // ビルド時に取得したパスのみを事前レンダリングする
    // { fallback: false } は他のルートが404であることを意味します
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    return {
        props: {
            layout: "health",
            data,
        },
    };
}
