import { ReactComponent as Icon } from "../../static/img/close.svg";

const CloseIcon = ({ toggleFullPageMenu }) => {
    return (
        <div className="position-absolute close-icon">
            <Icon height={20} width={20} onClick={toggleFullPageMenu} />
        </div>
    );
};

export default CloseIcon;
