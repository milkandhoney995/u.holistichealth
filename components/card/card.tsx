import Image from "next/image";
import Link from "next/link";
import classes from "./card.module.scss";
import { getSlot, createSlotComponent } from "../../libs/slot"
import { FC, ReactElement } from "react";

const secondaryBodySlot = createSlotComponent();
const primaryBodySlot = createSlotComponent();

export const Root: FC<{
  children: ReactElement | ReactElement[],
  href: string,
  img?: string,
  width?: number,
  height?: number
  row?: boolean,
}> = (props) => {
  const secondaryBody = getSlot(props.children, secondaryBodySlot);
  const primaryBody = getSlot(props.children, primaryBodySlot);

  return (
    <li className={classes.card}>
      <Link href={props.href} className={`${props.row && classes.card__rowCard}`}>
        <div className={classes.card__image}>
          <Image
            className="image"
            src={props.img}
            width={400}
            height={400}
            alt="debug"
          />
        </div>
        <div className={classes.card__body}>
          <div className={classes.card__secondary}>
            {secondaryBody}
          </div>
          <div className={classes.card__primary}>
            {primaryBody}
          </div>
        </div>
      </Link>
    </li>
  )
}

export const Card = Object.assign(Root, {
  secondaryBody: secondaryBodySlot,
  primaryBody: primaryBodySlot,
})