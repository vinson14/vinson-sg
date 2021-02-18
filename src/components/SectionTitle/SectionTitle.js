const SectionTitle = ({ title }) => {
    const substrings = title.split(" ");

    return (
        <div className="mb-3">
            <h3 className="pri-font text-center">
                {substrings[0]}{" "}
                <span className="green-font">{substrings[1]}</span>
            </h3>
        </div>
    );
};

export default SectionTitle;
