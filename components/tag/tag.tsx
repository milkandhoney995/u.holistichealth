import { useRouter } from "next/router";
import classes from "./tag.module.scss";

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
                        background: ${props.backgroundColor ? props.backgroundColor : "#c3f0ca"};
                        color: ${props.color ? props.color : "#fffffe"};
                    }
                `}
            </style>
        </>
    );
}