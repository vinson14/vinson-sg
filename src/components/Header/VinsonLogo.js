import { Link } from "react-router-dom";
import vinsonIcon from "../../static/img/vinsonong.png";

const VinsonLogo = () => {
    return (
        <Link to="/">
            <img
                className="vinson-logo"
                src={vinsonIcon}
                alt="Vinson Ong"
                height="75"
            />
        </Link>
    );
};

export default VinsonLogo;
