import parse from "html-react-parser";
import SectionContainer from "../../../components/SectionContainer";
import vinsonImg from "../../../static/img/vinson.png";
import "./Profile.css";

const Profile = ({ profile }) => {
    return (
        <SectionContainer title="My Profile">
            <img
                className="avatar-img my-5"
                src={vinsonImg}
                alt="Vinson"
                height={200}
            />
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <p className="pri-font">{parse(profile)}</p>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Profile;
