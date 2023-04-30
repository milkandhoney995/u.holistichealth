import { FC, ReactElement } from "react";
import { getSlot, createSlotComponent } from "../../libs/slot";
import classes from "./modal.module.scss";

const TitleSlot = createSlotComponent();
const BodySlot = createSlotComponent();

export const Root: FC<{
  children: ReactElement | ReactElement[],
  onClick: () => void,
  isOpen: boolean
}> = (props) => {
  const title = getSlot(props.children, TitleSlot);
  const body = getSlot(props.children, BodySlot);

  return (
    <div className={`${classes.modal} ${props.isOpen && classes.modal__open}`}>
      <div className={`${classes.modal__overlay} ${props.isOpen && classes.modal__open}`}></div>
      <div className={classes.modal__container}>
        <div className={classes.modal__body}>
          { title && <h2 className={classes.modal__title}>{title}</h2> }
          <div className={classes.modal__sentence}>
            {body}
          </div>
          <div className={classes.modal__btnGroup}>
            <button className={classes.modal__btn} onClick={props.onClick}>閉じる</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export const Modal = Object.assign(Root, {
  Title: TitleSlot,
  Body: BodySlot,
})
