import Skills from "./components/Skills";
import data from "../../static/data/data.json";
import Profile from "./components/Profile";
import Qualifications from "./components/Qualifications";

const About = () => {
    return (
        <div className="row justify-content-center">
            <Profile profile={data.profile} />
            <Skills
                onEnterViewport={() => console.log("enter")}
                onLeaveViewport={() => console.log("leave")}
                skills={data.skills}
            />
            <Qualifications qualifications={data.qualifications} />
        </div>
    );
};

export default About;
