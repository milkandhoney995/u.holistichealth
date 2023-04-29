import { FC, ReactElement } from "react";
import classes from "./section.module.scss";
import { getSlot, createSlotComponent } from "../../libs/slot"

const TitleSlot = createSlotComponent();
const BodySlot = createSlotComponent();

export const Root: FC<{
  children: ReactElement[],
  grid?: boolean,
}> = (props) => {

  const title = getSlot(props.children, TitleSlot);
  const body = getSlot(props.children, BodySlot);

  return (
    <div className="sectionWrap">
      <h2 className={classes.section__title}>{title}</h2>
      <div className={`${props.grid ? "" : classes.section}`}>
        {body}
      </div>
    </div>
  )
}

export const Section = Object.assign(Root, {
  Title: TitleSlot,
  Body: BodySlot,
})