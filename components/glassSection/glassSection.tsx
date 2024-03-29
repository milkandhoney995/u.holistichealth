import classes from "../glassSection/glassSection.module.scss"
import { getSlot, createSlotComponent } from "../../libs/slot"
import { FC, ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

const TitleSlot = createSlotComponent();
const BodySlot = createSlotComponent();

export const Root: FC<{
  children: ReactElement | ReactElement[],
  menus: { href: string, title: string, icon?: JSX.Element}[],
  grid?: boolean,
  img?: string,
  width?: number,
  height?: number
  reverse?: boolean
  center?: boolean
}> = (props) => {
  const title = getSlot(props.children, TitleSlot);
  const body = getSlot(props.children, BodySlot);

  return(
    <div className={classes.glass}>
      <div className={classes.glass__leftSection}>
        <div className={classes.glass__top}>
          <Link href="/">
            <Image
              className={classes.glass__image}
              style={{ objectFit: 'cover' }}
              src="/images/profile.jpg"
              width={150}
              height={150}
              alt="profile"
            />
            <h3 className={classes.glass__profile}>Utano Harada</h3>
            <div className={classes.glass__caption}>Web Front-end Developer</div>
          </Link>
        </div>
        <div className={classes.glass__section}>
          <div className={classes.glass__menus}>
            {props.menus?.map((menu, index) => (
              <Link href={menu.href} key={index} className={classes.glass__item}>
                {menu.icon}
                <h2 className={classes.glass__linkTitle}>{menu.title}</h2>
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.glass__section}>

        </div>
      </div>
      <div className={classes.glass__rightSection}>
        <h1 className={classes.glass__title}>{title}</h1>
        <div className={classes.glass__body}>{body}</div>
      </div>
    </div>
  )
}

export const GlassSection = Object.assign(Root, {
  Title: TitleSlot,
  Body: BodySlot,
})