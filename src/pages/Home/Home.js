import { Fade } from "react-awesome-reveal";
import LandingPageContent from "./components/LandingPageContent";

const Home = () => {
    return (
        <Fade>
            <div className="row justify-content-center">
                <LandingPageContent />
            </div>
        </Fade>
    );
};

export default Home;
