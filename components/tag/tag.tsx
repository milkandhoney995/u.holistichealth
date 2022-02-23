import { useRouter } from "next/router";
import classes from "./tag.module.scss";

export default function Tag(props) {
    return (
        <>
            <div className={classes.buttonLikeCheckbox}>
                <input className="input" type="checkbox" name={props.tag} id={props.tag} />
                <label htmlFor={props.tag} className="label">
                    {props.tag}
                </label>
            </div>
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
                        background: ${props.backgroundColor ? props.backgroundColor : "#FFC6C7"};
                        color: ${props.color ? props.color : "#fffffe"};
                    }
                `}
            </style>
        </>
    );
}
