import Flipcards from "./components/Flipcards";
import data from "../../static/data/data.json";

const Experience = () => {
    return (
        <div className="row justify-content-center">
            <Flipcards experiences={data.experiences} />
        </div>
    );
};

export default Experience;
