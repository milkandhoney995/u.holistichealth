import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// import Tag from "../../../components/tag/tag";
import { client } from "../../../libs/client";
import { Fragment } from "react";

export default function PostId({ data }) {
    return (
        <Fragment>
            <Head>
                <title>u.holistichealth</title>
                <meta name="description" content="this is u.holistichealth's website." />
            </Head>
            <div className="main">
                <div className="">
                    <div className="twoColumns_container reverse">
                        <aside className="twoColumns_container__side">
                            <div className="twoColumns_container--scroll">
                                <div className="sidemenu">
                                    <div className="sidemenu__profile image">
                                        <Image
                                            objectFit="cover"
                                            src="/images/profile.jpg"
                                            width={150}
                                            height={150}
                                            alt="debug"
                                        />
                                    </div>
                                    <div className="container">
                                        <div className="sentence sidemenu__info">Utano Harada</div>
                                        <div className="caption sidemenu__info">
                                            Holistic Health Coach & Web Front Engineer
                                        </div>
                                    </div>
                                    <div className="sidemenu__sns flex">
                                        <div className="sns">
                                            <Link
                                                href="https://www.facebook.com/profile.php?id=100011900596430"
                                                passHref
                                            >
                                                <a target="_blank" rel="noopener">
                                                    <Image
                                                        objectFit="cover"
                                                        src="/images/icon/facebook.png"
                                                        width={25}
                                                        height={25}
                                                        alt="Facebook"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="sns">
                                            <Link
                                                href="https://www.instagram.com/uta.healthcoach_webdeveloper/"
                                                passHref
                                            >
                                                <a target="_blank" rel="noopener">
                                                    <Image
                                                        objectFit="cover"
                                                        src="/images/icon/Instagram.png"
                                                        width={25}
                                                        height={25}
                                                        alt="Instagram"
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="sidemenu__body">
                                        <div className="sidemenu__text">
                                            ????????????????????????????????????????????????????????????????????????????????????
                                            <br></br>
                                            <br></br>
                                            ???????????????????????????Web??????????????????????????????????????????????????????
                                            <br></br>
                                            email: uta.holistichealthandweb@gmail.com
                                            {/* <div id="sentence">
                                                    In my younger and more vulnerable years my
                                                    father gave me some advice that I've been
                                                    turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.' In my younger and more vulnerable
                                                    years my father gave me some advice that I've
                                                    been turning over in my mind ever since. <br />
                                                    <br />
                                                    'Whenever you feel like criticizing anyone,' he
                                                    told me, just remember that all the people in
                                                    this world haven't had the advantages that
                                                    you've had.'
                                                </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="sidemenu__category">
                                        <h3 className="sidemenu__title">Category</h3>
                                        <Tag />
                                    </div> */}
                                </div>
                            </div>
                        </aside>
                        <div className="twoColumns_container__main">
                            <div className="page">
                                <h1 className="page__title">{data.title}</h1>
                                <div className="page__image">
                                    <Image
                                        src={data.image.url}
                                        width={680}
                                        height={500}
                                        objectFit="cover"
                                        alt="debug"
                                    />
                                </div>
                                <div
                                    className="page__sentence"
                                    dangerouslySetInnerHTML={{ __html: data.body }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

// ?????????????????????????????????
export async function getStaticPaths() {
    // ??????API????????????????????????
    const data = await client.get({ endpoint: "blog" });
    // ?????????????????????????????????????????????????????????????????????
    const paths = data.contents.map((content) => `/holistichealthcoach/blog/${content.id}`);

    // ????????????????????????????????????????????????????????????????????????
    // { fallback: false } ?????????????????????404?????????????????????????????????
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
