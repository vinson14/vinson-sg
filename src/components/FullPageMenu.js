import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import CloseIcon from "./CloseIcon";
import "./FullPageMenu.css";

const FullPageMenu = ({ setShowFullPageMenu, links }) => {
    return (
        <Slide
            className="full-page-menu"
            direction="right"
            triggerOnce={false}
            duration={500}
        >
            <div className="full-page-menu-links-container">
                <CloseIcon setShowFullPageMenu={setShowFullPageMenu} />
                {links.map((link) => (
                    <CustomizedLink exact to={link.to} text={link.text} />
                ))}
            </div>
        </Slide>
    );
};

const CustomizedLink = ({ to, text }) => {
    return (
        <NavLink className="pri-font-light" to={to}>
            {text}
        </NavLink>
    );
};

export default FullPageMenu;
