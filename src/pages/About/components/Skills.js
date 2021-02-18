import { useEffect, useState } from "react";
import handleViewport from "react-in-viewport";
import SectionContainer from "../../../components/SectionContainer";
import "./Skills.css";

const Skills = ({ skills }) => {
    return (
        <SectionContainer title="My Skills">
            <div className="row justify-content-center">
                {skills.map((skill) => (
                    <Skill
                        title={skill.title}
                        rating={skill.rating}
                        key={skill.title}
                    />
                ))}
            </div>
        </SectionContainer>
    );
};

const SkillBlock = ({ title, rating, forwardedRef, inViewport }) => {
    const [ratingState, setRatingState] = useState(0);

    useEffect(() => {
        if (ratingState < rating && inViewport) {
            const ratingTimer = setTimeout(() => {
                setRatingState(ratingState + 1);
            }, 25);

            return () => {
                clearTimeout(ratingTimer);
            };
        }
    }, [rating, ratingState, inViewport]);

    return (
        <div className="col-10 col-md-5 p-3" ref={forwardedRef}>
            <div className="d-flex justify-content-between">
                <p className="pri-font">{title}</p>
                <p className="pri-font">{ratingState}%</p>
            </div>
            <div className="skill-bar-container">
                <div
                    className="skill-bar"
                    style={{ width: `${ratingState}%` }}
                ></div>
            </div>
        </div>
    );
};

const Skill = handleViewport(SkillBlock /** options: {}, config: {} **/);

export default Skills;
