import parse from "html-react-parser";
import SectionContainer from "../../../components/SectionContainer";
import "./Qualification.css";

const Qualifications = ({ qualifications }) => {
    return (
        <SectionContainer title="My Qualifications">
            <div className="row justify-content-center">
                {qualifications.map((qualification) => (
                    <Qualification
                        name={qualification.name}
                        institution={qualification.institution}
                        key={qualification.name}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

const Qualification = ({ name, institution }) => {
    return (
        <div className="qualification pri-font col-12 col-md-5 p-3 m-3 text-center">
            <h6>{parse(name)}</h6>
            <h6 className="green-font">{parse(institution)}</h6>
        </div>
    );
};

export default Qualifications;
