import classes from "./hamburger.module.scss";

export default function Hamburger({ isOpen }) {
    return (
        <>
            <div className={classes.hamburger}>
                <div className="burger burger1"></div>
                <div className="burger burger1"></div>
                <div className="burger burger1"></div>
            </div>
            <style jsx>
                {`
                    .burger {
                        width: 2rem;
                        height: 0.25rem;
                        border-radius: 10px;
                        background-color: black;
                        transform-origin: 1px;
                        transition: all 0.3s linear;
                    }
                    .burger1 {
                        transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
                    }
                    .burger2 {
                        transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
                    }
                    .burger3 {
                        transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
                    }
                `}
            </style>
        </>
    );
}
