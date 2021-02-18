import { useEffect, useState } from "react";

const TypewriterLine = ({ text, start, startNext }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [blinker, setBlinker] = useState(false);
    const [showBlinker, setShowBlinker] = useState(true);

    const blinkerSpeed = 300;
    const typingSpeed = 80;

    // Blinking effect for the blinker
    useEffect(() => {
        const blinkerTimer = setTimeout(
            () => setBlinker(!blinker),
            blinkerSpeed
        );
        // Clear timeout
        return () => {
            clearTimeout(blinkerTimer);
        };
    }, [blinker]);

    // Increment the index of the text to display
    useEffect(() => {
        const indexTimer = setTimeout(() => {
            if (textIndex < text.length && start) {
                setTextIndex(textIndex + 1);
            } else {
                if (start && startNext) {
                    startNext(true);
                    setShowBlinker(false);
                }
            }
        }, typingSpeed);
        return () => {
            clearTimeout(indexTimer);
        };
    }, [textIndex, text, startNext, start]);

    return (
        <p className={`typewriter-line ${!start && "hide"}`}>
            {text.substring(0, textIndex)}
            <span className="green-font">{blinker && showBlinker && "|"}</span>
        </p>
    );
};

export default TypewriterLine;
