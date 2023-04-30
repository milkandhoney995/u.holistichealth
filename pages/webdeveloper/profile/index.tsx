import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Section } from "../../../components/section/section";
import { Modal } from "../../../components/modal/modal";
import Button from "../../../components/button/button";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Head>
        <title>u.holistichealth</title>
        <meta name="description" content="this is u.holistichealth's website." />
      </Head>
      <div className="container">
        <Section
          img="/images/life/cafe.jpg"
          width={500}
          height={500}
        >
          <Section.Title>
            <h2>Utano Harada</h2>
            <h3 className="title--small">Holistic Health Coach & Web Frontend Engineer</h3>
          </Section.Title>
          <Section.Body>
            1997年千葉出身。<br></br>
            国際基督教大学教養学部化学メジャー卒。
            <br></br>
            <br></br>
            某IT企業でWeb フロントエンドエンジニアとしてアプリケーション開発に携わる。
            <br></br>
            現在、フリーランスのWeb
            フロントエンドエンジニア兼米国認定ホリスティックヘルスコーチとして活動中。
            <br></br>
            <br></br>
            ヘルスコーチとしての活動は、
            <Link href="/holistichealthcoach">こちら</Link>をご参照ください。
          </Section.Body>
        </Section>
      </div>
      <Button onClick={openModal}>
        {/* <Image
          src={"/images/life/hana.jpg"}
          width={680}
          height={500}
          style={{ objectFit: 'cover' }}
          className="image"
          alt="portofolio"
        /> */}
        ボタン
      </Button>
      <Modal
        onClick={handleClose}
        isOpen={open}
        img={'/images/life/hana.jpg'}
      >
        <Modal.Title>タイトル</Modal.Title>
        <Modal.Body>
        どうも〜〜〜どうも〜〜〜どうも〜〜〜どうも〜〜〜どうも〜〜〜
        <br />
        どうも〜〜〜
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "web",
    },
  };
}
