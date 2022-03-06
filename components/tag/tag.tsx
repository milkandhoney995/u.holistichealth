import { useRouter } from "next/router";
import classes from "./tag.module.scss";
import Link from "next/link";
import { client } from "../../libs/client";

export default function Tag(props) {
    const tags = [
        { tag: "health" },
        { tag: "news" },
        { tag: "self love" },
        { tag: "mindfulness" },
        { tag: "food" },
    ];
    return (
        <>
            {/* <div className="">
                <ul className={classes.buttonLikeCheckbox}>
                    {category.map((category) => (
                        <li key={category.name}>
                            <Link href={`holistichealthcoach/category/${category.name}`}>
                                <input
                                    className="input"
                                    type="checkbox"
                                    name={category.name}
                                    id={category.name}
                                />
                                <label htmlFor={category.name} className="label">
                                    {category.name}
                                </label>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div> */}
            <ul className={classes.buttonLikeCheckbox}>
                {tags.map((tags) => (
                    <li key={tags.tag}>
                        <input className="input" type="checkbox" name={tags.tag} id={tags.tag} />
                        <label htmlFor={tags.tag} className="label">
                            {tags.tag}
                        </label>
                    </li>
                ))}
            </ul>

            <style jsx>
                {`
                    .input {
                        position: absolute;
                        opacity: 0;
                    }
                    .label {
                        display: inline-block;
                        padding: 8px 12px;
                        margin: 4px;
                        border: 1px solid #e9ecef;
                        border-radius: 14px;
                        background: #fff;
                        font-size: 0.75rem;
                        cursor: pointer;
                    }
                    .input:checked + .label {
                        background: ${props.backgroundColor
                            ? props.backgroundColor
                            : "rgb(103, 145, 134)"};
                        color: ${props.color ? props.color : "#fffffe"};
                    }
                `}
            </style>
        </>
    );
}
// export const getStaticProps = async () => {
//     const data = await client.get({ endpoint: "blog" });
//     const categoryData = await client.get({ endpoint: "category" });
//     return {
//         props: {
//             blog: data.contents,
//             category: categoryData.contents,
//         },
//     };
// };
