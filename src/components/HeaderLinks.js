import { NavLink } from "react-router-dom";

const HeaderLinks = ({ links }) => {
    return (
        <div className="p-5 d-none d-md-block">
            {links.map((link) => (
                <CustomizedLinks to={link.to} text={link.text} />
            ))}
        </div>
    );
};

const CustomizedLinks = ({ to, text }) => {
    return (
        <NavLink exact to={to} className="pri-font-light header-link p-3">
            {text}
        </NavLink>
    );
};

export default HeaderLinks;
