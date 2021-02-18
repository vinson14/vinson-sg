import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../static/img/menu.svg";
import FullPageMenu from "./FullPageMenu";
import "./Header.css";
import HeaderLinks from "./HeaderLinks";
import VinsonLogo from "./VinsonLogo";

const Header = () => {
    const [showFullPageMenu, setShowFullPageMenu] = useState(false);

    const links = [
        {
            to: "/",
            text: "Home",
        },
        {
            to: "/about",
            text: "About Me",
        },
        {
            to: "/experience",
            text: "My Experience",
        },
        {
            to: "/contact",
            text: "Contact Me",
        },
    ];

    return (
        <div className="row">
            <div className="col d-flex justify-content-end">
                <VinsonLogo />
                <HeaderLinks links={links} />
                <MenuIcon
                    height={20}
                    width={20}
                    className="d-md-none menu-icon"
                    onClick={() => setShowFullPageMenu(true)}
                />
            </div>
            {showFullPageMenu && (
                <FullPageMenu
                    setShowFullPageMenu={setShowFullPageMenu}
                    links={links}
                />
            )}
        </div>
    );
};

export default Header;
