import classes from "./blogs.module.scss";
import { Card } from "../card/card";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";


export default function cardGroup(props) {
  dayjs.extend(utc);
  dayjs.extend(timezone);

    return (
      <ul className={classes.cardGroup}>
        {props.cardList.map((card, index) => (
          <Card
            key={index}
            href={`/holistichealthcoach/blog/${card.id}`}
            img={card.image.url}
            width={400}
            height={400}
          >
            <Card.secondaryBody>
              {dayjs
                .utc(card.publishedAt)
                .tz("Asia/Tokyo")
                .format("YYYY-MM-DD")}
            </Card.secondaryBody>
            <Card.primaryBody>
              {card.title}
            </Card.primaryBody>
          </Card>
        ))}
    </ul>
  );
}