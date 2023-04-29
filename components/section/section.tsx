import { FC, ReactElement } from "react";
import classes from "./section.module.scss";
import { getSlot, createSlotComponent } from "../../libs/slot"
import Image from "next/image";

const TitleSlot = createSlotComponent();
const BodySlot = createSlotComponent();

export const Root: FC<{
  children: ReactElement[],
  grid?: boolean,
  img?: string,
  width?: number,
  height?: number
  reverse?: boolean
}> = (props) => {

  const title = getSlot(props.children, TitleSlot);
  const body = getSlot(props.children, BodySlot);

  return (
    <div
      className={
        `${classes.section}
        ${props.reverse ? classes.section__reverse : ""}
        ${props.grid ? classes.section__gridSection : ""}`}>
      {/* props.imgがあれば、画像を表示 */}
      {
        props.img &&
        <div className={classes.section__image}>
          <Image
            objectFit="cover"
            src={props.img}
            width={props.width}
            height={props.height}
            alt="debug"
          />
        </div>
      }
      <div className={classes.section__body}>
        <h2 className={classes.section__title}>{title}</h2>
        <div
          className={
            `${classes.section__sentence}
            ${props.grid ? "" : classes.section__gridContents}`}>
          {body}
        </div>
      </div>
    </div>
  )
}

export const Section = Object.assign(Root, {
  Title: TitleSlot,
  Body: BodySlot,
})