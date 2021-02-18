import { ReactComponent as Icon } from "../static/img/close.svg";

const CloseIcon = ({ setShowFullPageMenu }) => {
    return (
        <div className="position-absolute close-icon p-3">
            <Icon
                height={20}
                width={20}
                onClick={() => setShowFullPageMenu(false)}
            />
        </div>
    );
};

export default CloseIcon;
