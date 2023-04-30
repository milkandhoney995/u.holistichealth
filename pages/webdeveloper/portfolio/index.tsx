import Head from "next/head";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Modal } from "../../../components/modal/modal";
import Button from "../../../components/button/button";

export default function Portofolio() {
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
      <div className="main">
        <Button onClick={openModal}>
          <Image
            src={"/images/life/hana.jpg"}
            width={680}
            height={500}
            style={{ objectFit: 'cover' }}
            className="image"
            alt="portofolio"
          />
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
      </div>
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
