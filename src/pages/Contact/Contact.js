import { Fade } from "react-awesome-reveal";
import SectionContainer from "../../components/SectionContainer";
import data from "../../static/data/data.json";

const Contact = () => {
    return (
        <Fade>
            <div className="row justify-content-center">
                <ContactInfo contactInfo={data.contactInfo} />
            </div>
        </Fade>
    );
};

const ContactInfo = ({ contactInfo }) => {
    return (
        <SectionContainer title="Contact Me">
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-8">
                    {contactInfo.map((c) => (
                        <ContactInfoLine title={c.title} info={c.info} />
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

const ContactInfoLine = ({ title, info }) => {
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pri-font my-3">
            <div>
                <h5>{title} :</h5>
            </div>
            <div>
                <h6>{info}</h6>
            </div>
        </div>
    );
};

export default Contact;
