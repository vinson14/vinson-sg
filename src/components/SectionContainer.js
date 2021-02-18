import SectionTitle from "./SectionTitle/SectionTitle";

const SectionContainer = ({ children, title }) => {
    return (
        <div className="col-12 col-md-10 py-5 p-md-5 my-5 translucent-bg">
            <SectionTitle title={title} />
            {children}
        </div>
    );
};

export default SectionContainer;
