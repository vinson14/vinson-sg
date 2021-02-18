import { useEffect, useState } from "react";
import Header from "../../../components/Header";
import TypewriterLine from "./TypewriterLine";
import "./Typewriter.css";

const Typewriter = () => {
    const [startFirst, setStartFirst] = useState(true);
    const [startSecond, setStartSecond] = useState(false);
    const [startThird, setStartThird] = useState(false);

    return (
        <div className="my-3">
            <TypewriterLine
                text="Web Developer"
                start={startFirst}
                startNext={setStartSecond}
            />
            <TypewriterLine
                text="Financial Consultant"
                start={startSecond}
                startNext={setStartThird}
            />
            <TypewriterLine start={startThird} text="Hobbyist Photographer" />
        </div>
    );
};

export default Typewriter;
