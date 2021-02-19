import Flipcards from "./components/Flipcards";
import data from "../../static/data/data.json";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
    return (
        <Fade>
            <div className="row justify-content-center">
                <Flipcards experiences={data.experiences} />
            </div>
        </Fade>
    );
};

export default Experience;
