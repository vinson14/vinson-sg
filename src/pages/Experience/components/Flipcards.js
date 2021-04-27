import parse from "html-react-parser";
import platooncommanderImg from "../../../static/img/platoonCommander.jpg";
import financialconsultantImg from "../../../static/img/financialConsultant.jpg";
import fullStackDeveloperImg from "../../../static/img/fullStackDeveloper.jpg";
import "./Flipcard.css";
import { useState } from "react";
import SectionContainer from "../../../components/SectionContainer";

const Flipcards = ({ experiences }) => {
    return (
        <SectionContainer title="My Experiences">
            <div className="row justify-content-center">
                <Flipcard
                    exp={experiences.fullStackDeveloper}
                    img={fullStackDeveloperImg}
                />
                <Flipcard
                    exp={experiences.hackathonRunnerUp}
                    img={fullStackDeveloperImg}
                />
                <Flipcard
                    exp={experiences.financialConsultant}
                    img={financialconsultantImg}
                />
                <Flipcard
                    exp={experiences.infoTechIntern}
                    img={fullStackDeveloperImg}
                />
                <Flipcard
                    exp={experiences.platoonCommander}
                    img={platooncommanderImg}
                />
            </div>
        </SectionContainer>
    );
};

const Flipcard = ({ exp, img }) => {
    const [flipped, setFlipped] = useState(false);

    const flipcard = () => {
        setFlipped(!flipped);
    };

    return (
        <div className="col-12 col-lg-6 my-3 flipcard-container text-center">
            <div
                className="h-100 w-100"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div
                    className={`flipcard-inner-container ${
                        flipped && "flipped"
                    }`}
                >
                    <div className="flipcard-front">
                        <h5 className="pri-font-bold">{exp.role}</h5>
                        <h5 className="pri-font-light">{exp.institution}</h5>
                        <h5 className="pri-font">{exp.period}</h5>
                        <button
                            className="btn btn-outline-light pri-font-light bg-transparent my-3"
                            onClick={flipcard}
                        >
                            Find out more
                        </button>
                    </div>
                    <div className="flipcard-back">
                        <p className="pri-font">{parse(exp.details)}</p>
                        <button
                            className="btn btn-outline-light pri-font-light bg-transparent my-3"
                            onClick={flipcard}
                        >
                            See Less
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flipcards;
