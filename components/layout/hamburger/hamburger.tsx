import classes from "./hamburger.module.scss";
import Link from "next/link";

export default function Hamburger({ isOpen }) {
    const menuList = [
        { id: 1, href: "/holistichealthcoach", title: "home" },
        { id: 2, href: "/holistichealthcoach/philosophy", title: "Holistic Health" },
        { id: 3, href: "/holistichealthcoach/profile", title: "About Me" },
        { id: 4, href: "/holistichealthcoach/blog", title: "Blog" },
        { id: 5, href: "/holistichealthcoach/service", title: "Service" },
    ];
    return (
        <>
            <div className="hamburger">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                {menuList.map((menu) => (
                    <li className="menu-item">
                        <Link key={menu.id} href={menu.href}>
                            {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <style jsx>
                {`
                    .menu-items {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        height: 100vh;
                        margin-left: -40px;
                        padding-top: 8rem;
                        background: #fff;
                        box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
                        transform: translate(-150%);
                        transition: transform 0.5s ease-in-out;
                    }
                    .menu-items li {
                        margin-bottom: 1.2rem;
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                    .hamburger {
                        display: block;
                        height: 26px;
                        width: 32px;
                        position: absolute;
                        top: 15px;
                        left: 15px;
                        z-index: 2;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .hamburger .line {
                        display: block;
                        height: 4px;
                        width: 100%;
                        border-radius: 10px;
                        background: #0e2431;
                    }
                    .hamburger .line1 {
                        transform-origin: 0% 0%;
                        transition: transform 0.4s ease-in-out;
                    }

                    .hamburger .line2 {
                        transition: transform 0.2s ease-in-out;
                    }
                    .hamburger .line3 {
                        transform-origin: 0% 100%;
                        transition: transform 0.4s ease-in-out;
                    }
                    .menu-items {
                        transform: ${isOpen ? "translateX(0)" : "translate(-150%)"};
                    }

                    .hamburger .line1 {
                        transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
                    }

                    .hamburger .line2 {
                        transform: ${isOpen ? "scaleY(0)" : "scaleY(1)"};
                    }

                    .hamburger .line3 {
                        transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
                    }
                `}
            </style>
        </>
    );
}
