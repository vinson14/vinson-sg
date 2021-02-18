import "./LandingPageContent.css";
import Typewriter from "./Typewriter";

const LandingPageContent = () => {
    return (
        <div className="col-12 col-md-5 p-5 landing-page-content">
            <h1 className="pri-font-light">
                Hi there! I am{" "}
                <span className="pri-font-bold green-font">Vinson</span>
            </h1>
            <Typewriter />
        </div>
    );
};

export default LandingPageContent;
