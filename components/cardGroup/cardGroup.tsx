import classes from "./cardGroup.module.scss";
import { Card } from "../card/card";


export default function cardGroup(props) {

  return (
      <ul className={classes.cardGroup}>
        {props.cardList.map((card, index) => (
          <Card
            key={index}
            href={card.href}
            img={card.img}
            icon={card.icon}
            width={props.imgWidth}
            height={props.imgHeight}
            row={props.row}
          >
            { card.title &&
              <Card.Title>
                {card.title}
              </Card.Title>
            }
            { card.sentence &&
              <Card.Sentence>
                {card.sentence}
              </Card.Sentence>
            }
          </Card>
        ))}
    </ul>
  );
}