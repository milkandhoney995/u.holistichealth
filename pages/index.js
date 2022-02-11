import Head from "next/head";
// import Hero from "../components/home-page/hero/hero";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>u.holistichealthcoach</title>
        <meta
          name="description"
          content="this is u.holistichealthcoach's website."
        />
      </Head>
      <div className="container__top">
        <Image
          src="/images/site/570x570.png"
          width={570}
          height={570}
          alt="debug"
        />
        <h1>
          自分に、聞こう。<br></br>
          心のこと<br></br>
          体のこと<br></br>
          ほんとの私
        </h1>
      </div>
      <div className="section">
        <div className="section__container">
          <div>
            <h2>
              食事から自分を探す<br></br>ヘルスコーチング
            </h2>
            <p className="container__text">
              私たちは、私たちの食べるものでできています<br></br>
              <br></br>
              大事な人と食べる<br></br>
              <br></br>
              食材ひとつひとつを味わい<br></br>
              <br></br>
              感謝する時間、人間らしい時間を愛したい<br></br>
              <br></br>
              生き急ぐ日々<br></br>
              <br></br>
              忘れがちな、あなたと食事の関係<br></br>
              <br></br>
              一緒に、考えてみませんか。
            </p>
          </div>
          <Image
            src="/images/site/570x570.png"
            width={500}
            height={500}
            alt="debug"
          />
        </div>
        <div className="container__button">
          <div className="button">
            <Link href="/philosophy">Holistic Health</Link>
          </div>
          <div className="button button--last">
            <Link href="/profile">About Me</Link>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__container">
          <Image
            src="/images/site/570x570.png"
            width={770}
            height={570}
            alt="debug"
          />
          <div className="section__text">
            <div>
              <h2>あなたのセーフスペースに</h2>
              <p className="container__text">
                私のセッションは、どんなことを言っても大丈夫な場所です。
                <br></br>
                <br></br>
                深呼吸して、あなたの背負っているものを置いて、<br></br>
                <br></br>
                あなたのことについて話しませんか。
              </p>
            </div>
            <div className="button">
              <Link href="/service">Service</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="latestBlog section">
        <h2>Blog</h2>
        <ul className="center latestBlog__list">
          <li className="latestBlog__item">
            <Image
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
        <div className="button">
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </Fragment>
  );
}
