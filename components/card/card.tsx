import Image from "next/image";
import Link from "next/link";
import classes from "./card.module.scss";
import { getSlot, createSlotComponent } from "../../libs/slot"
import { FC, ReactElement } from "react";

// 記事のタイトル・日付表示用
const secondaryBodySlot = createSlotComponent();
const primaryBodySlot = createSlotComponent();
// カード
const titleSlot = createSlotComponent();
const sentenceSlot = createSlotComponent();

export const Root: FC<{
  children: ReactElement | ReactElement[],
  href?: string,
  img?: string,
  icon?: JSX.Element,
  width?: number,
  height?: number
  row?: boolean,
}> = (props) => {
  const secondaryBody = getSlot(props.children, secondaryBodySlot);
  const primaryBody = getSlot(props.children, primaryBodySlot);
  const Title = getSlot(props.children, titleSlot);
  const Sentence = getSlot(props.children, sentenceSlot);

  if (props.href) {
    return (
      <li className={`${classes.card} ${ props.row && classes.card__listCard}`}>
        <Link href={props.href} className={`${props.row && classes.card__rowCard}`}>
          <div className={classes.card__image} style={{overflow: 'hidden'}}>
            { props.img &&
              <Image
                className="image"
                src={props.img}
                width={props.width}
                height={props.height}
                alt="debug"
              />
            }
          </div>
          <div className={classes.card__body}>
            { secondaryBody
              &&
              <div className={classes.card__secondary}>
                {secondaryBody}
              </div>
            }
            { primaryBody
              &&
              <div className={classes.card__primary}>
                {primaryBody}
              </div>
            }
            { Title
              &&
              <div className={classes.card__title}>
                {Title}
              </div>
            }
            { Sentence
              &&
              <div className={classes.card__sentence}>
                {Sentence}
              </div>
            }
          </div>
        </Link>
      </li>
    )
  } else {
    return (
      <li className={`${ props.row && classes.card__listCard}`}>
        <div className={`${props.row && classes.card__rowCard}`}>
          <div className={classes.card__image}>
            { props.img &&
              <Image
                className="image"
                src={props.img}
                width={props.width}
                height={props.height}
                alt="debug"
              />
            }
            {props.icon}
          </div>
          <div className={classes.card__body}>
            { secondaryBody
              &&
              <div className={classes.card__secondary}>
                {secondaryBody}
              </div>
            }
            { primaryBody
              &&
              <div className={classes.card__primary}>
                {primaryBody}
              </div>
            }
            { Title
              &&
              <div className={classes.card__title}>
                {Title}
              </div>
            }
            { Sentence
              &&
              <div className={classes.card__sentence}>
                {Sentence}
              </div>
            }
          </div>
        </div>
      </li>
    )
  }
}

export const Card = Object.assign(Root, {
  secondaryBody: secondaryBodySlot,
  primaryBody: primaryBodySlot,
  Title: titleSlot,
  Sentence: sentenceSlot
})