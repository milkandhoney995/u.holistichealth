import Head from "next/head";
import Image from "next/image";
import Sidemenu from "../../../components/sidemenu/sidemenu"
import { client } from "../../../libs/client";
import { Fragment } from "react";

export default function PostId({ data }) {
  return (
    <>
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
                  <Sidemenu />
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
                      style={{ objectFit: 'cover' }}
                      className="image"
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
      <style jsx>
        {`
        // 内容部分共通
          .main {
            padding: 6rem 0;
            min-height: calc(100vh - 7rem);
            margin: 0 auto;
          }
        `}
      </style>
    </>
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
