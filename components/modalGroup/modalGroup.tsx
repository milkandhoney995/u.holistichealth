import Image from "next/image";
import { useState } from "react";
import { Modal } from "../modal/modal";
import Button from "../button/button";
import classes from "./modalGroup.module.scss"

export default function ModalGroup(props) {
  const [selectedItem, setselectedItem] = useState<string>("");

  const openModal = (name: string) => {
    setselectedItem(name)
  };
  const closeModal = () => {
    setselectedItem("")
  };

  return (
    <div className={classes.modalGroup}>
      {props.modalList.map((item, index) => {
        return (
          <div className={classes.modalGroup__item} key={index}>
            <Button
              onClick={() => openModal(item.cover)}>
              <Image
                src={item.cover}
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
                className="image"
                alt={item.alt}
              />
            </Button>
            <Modal
              onClick={() => closeModal()}
              isOpen={item.cover === selectedItem}
              img={item.cover}
            >
              <Modal.Title>{item.title}</Modal.Title>
              <Modal.Body>
                {item.body}
              </Modal.Body>
            </Modal>
          </div>
        )
      })}
    </div>
  );
}