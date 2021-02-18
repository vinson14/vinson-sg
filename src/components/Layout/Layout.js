import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
    return (
        <div className="container-fluid layout-container">
            <div className="row layout-header">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row layout-main">
                <div className="col-12">{children}</div>
            </div>
        </div>
    );
};

export default Layout;
