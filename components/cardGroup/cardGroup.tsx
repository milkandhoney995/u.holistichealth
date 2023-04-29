import classes from "./cardGroup.module.scss";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";


export default function cardGroup(props) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const blogs = props.blogs;
    return (
      <ul className={classes.cardWrap}>
        {blogs.map((blog) => (
          <li key={blog.id} className={classes.card}>
            <Link href={`/holistichealthcoach/blog/${blog.id}`}>
              <div className={classes.card__image}>
                <Image
                  className="image"
                  src={blog.image.url}
                  width={400}
                  height={400}
                  alt="debug"
                />
              </div>
              <div className={classes.card__body}>
                <div className={classes.card__secondary}>
                  {dayjs
                    .utc(blog.publishedAt)
                    .tz("Asia/Tokyo")
                    .format("YYYY-MM-DD")}
                </div>
                <div className={classes.card__primary}>
                  {blog.title}
                </div>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}