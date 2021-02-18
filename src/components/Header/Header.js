import { useState } from "react";
import { ReactComponent as MenuIcon } from "../../static/img/menu.svg";
import FullPageMenu from "./FullPageMenu";
import "./Header.css";
import HeaderLinks from "./HeaderLinks";
import VinsonLogo from "./VinsonLogo";
import data from "../../static/data/data.json";

const Header = () => {
    const [showFullPageMenu, setShowFullPageMenu] = useState(false);

    const toggleFullPageMenu = () => {
        console.log("this ran");
        setShowFullPageMenu(!showFullPageMenu);
    };

    return (
        <div className="row">
            <div className="col d-flex justify-content-end">
                <VinsonLogo />
                <HeaderLinks links={data.links} />
                <MenuIcon
                    height={20}
                    width={20}
                    className="d-md-none menu-icon"
                    onClick={toggleFullPageMenu}
                />
            </div>
            {showFullPageMenu && (
                <FullPageMenu
                    toggleFullPageMenu={toggleFullPageMenu}
                    links={data.links}
                />
            )}
        </div>
    );
};

export default Header;
