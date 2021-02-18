import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import CloseIcon from "./CloseIcon";
import "./FullPageMenu.css";

const FullPageMenu = ({ toggleFullPageMenu, links }) => {
    return (
        <Slide
            className="full-page-menu"
            direction="right"
            triggerOnce={false}
            duration={500}
        >
            <div className="full-page-menu-links-container">
                <CloseIcon toggleFullPageMenu={toggleFullPageMenu} />
                {links.map((link) => (
                    <CustomizedLink
                        to={link.to}
                        text={link.text}
                        key={link.text}
                        onClick={toggleFullPageMenu}
                    />
                ))}
            </div>
        </Slide>
    );
};

const CustomizedLink = ({ to, text, onClick }) => {
    return (
        <NavLink className="pri-font-light" exact to={to} onClick={onClick}>
            {text}
        </NavLink>
    );
};

export default FullPageMenu;
