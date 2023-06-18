import "./home.css";
import { LoremIpsum } from "react-lorem-ipsum";
import { NavLink } from "react-router-dom";
import WomanWithGlasses from "../resources/shutterstock_407632243.jpg";
import Woman from "../resources/shutterstock_1302552622.jpg";
import Office from "../resources/shutterstock_696636415.jpg";

const Home = () => {
    const LoremIpsumList = () => {
        const loremIpsumItems = [
            "Sed do eiusmod tempor incididunt",
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
            "Ut labore et dolore magna aliqua",
        ];

        return (
            <ul className="lorem-ul">
                {loremIpsumItems.map((item, index) => (
                    <li className="lorem-li" key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="home-container">
            <div className="section-one">
                <img src={WomanWithGlasses} className="woman-glasses" alt="Woman with glasses" />
            </div>

            <div className="section-two">
                <div className="section-two-text">
                    <h1>Lorem ipsum dolor</h1>
                    <p>
                        Adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
                        pretium tellus duis. Vitae pellentesque sem placerat in id cursus mi pretium tellus duis
                        convallis tempus leo eu aenean sed. Cursus mi pretium tellus duis convallis tempus leo eu aenean
                        sed diam urna tempor pulvinar vivamus fringilla. Tempus leo eu aenean sed diam urna tempor
                        pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis. Urna tempor pulvinar
                        vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer
                        nunc.
                    </p>
                    <LoremIpsumList />
                    <button className="section-two-btn">Learn More</button>
                </div>
                <div className="section-two-image">
                    <img src={Office} className="office-image" alt="Office" />
                </div>
            </div>

            <div className="section-three">
                <div className="section-three-wrapper">
                    <div className="section-three-image">
                        <img src={Woman} className="woman" alt="Woman" />
                    </div>
                    <div className="section-three-textbox">
                        <h2>Nulla sem urna, dictum set nisi in, viverra rutrum neque </h2>
                        <p>
                            Adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
                            pretium tellus duis. Vitae pellentesque sem placerat in id cursus mi pretium tellus duis
                            convallis tempus leo eu aenean sed. Cursus mi pretium tellus duis convallis tempus leo eu
                            aenean sed diam urna tempor pulvinar vivamus fringilla. Tempus leo eu aenean sed diam urna
                            tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis. Urna tempor
                            pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada
                            lacinia integer nunc.
                        </p>
                        <button className="section-three-btn">Log In</button>
                    </div>
                </div>
            </div>

            <div className="section-four">
                <div className="section-four-title">
                    <h2>Sed libero justo, lobortis sit amet suscipit non</h2>
                    <h3>taria duo ut vis semper abhorreant</h3>
                </div>
                <div className="section-four-columns">
                    <p className="lorem-paragraph">
                        {LoremIpsum({
                            p: 3,
                            avgSentencesPerParagraph: 8,
                            avgWordsPerSentence: 17,
                        })}
                    </p>
                </div>
                <div className="section-four-btn">
                    <NavLink to="/contact-us" className="nav-link">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;
