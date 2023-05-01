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
            width={400}
            height={400}
          >
            <Card.secondaryBody>
              {card.caption}
            </Card.secondaryBody>
            <Card.primaryBody>
              {card.title}
            </Card.primaryBody>
          </Card>
        ))}
    </ul>
  );
}