import Head from "next/head";
import Blogs from "../../../components/Blogs/Blogs";
import { client } from "../../../libs/client";
import { Fragment } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

export default function Blog({ blog }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return (
    <>
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
                <Blogs
                  cardList={blog}
                />
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
export async function getStaticProps() {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      layout: "health",
      blog: data.contents,
    },
  };
}
