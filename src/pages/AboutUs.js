import { LoremIpsum } from "react-lorem-ipsum";
import React from "react";
import "./about.css";
import Image from "../resources/shutterstock_696636415.jpg";

const AboutUs = () => {
    const LoremIpsumList = () => {
        const loremIpsumItems = [
            "Lorem ipsum dolor sit amet",
            "Consectetur adipiscing elit",
            "Sed do eiusmod tempor incididunt",
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
        <div>
            <h2 className="about-us">About Us</h2>

            <p className="lorem-paragraph">
                <strong>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus ex sapien vitae pellentesque sem placerat
                    in.
                </strong>
                <br />
                Adipiscing elit quisque faucibus ex sapien vitae pellentesque
                sem placerat in id cursus mi pretium tellus duis. Vitae
                pellentesque sem placerat in id cursus mi pretium tellus duis
                convallis tempus leo eu aenean sed. Cursus mi pretium tellus
                duis convallis tempus leo eu aenean sed diam urna tempor
                pulvinar vivamus fringilla. Tempus leo eu aenean sed diam urna
                tempor pulvinar vivamus fringilla lacus nec metus bibendum
                egestas iaculis. Urna tempor pulvinar vivamus fringilla lacus
                nec metus bibendum egestas iaculis massa nisl malesuada lacinia
                integer nunc.
                <span>
                    <a href="https://example.com">
                        Praesent aliquam quam vitae urna
                    </a>
                    , et convallis ipsum aliquet.
                </span>
            </p>
            <p className="lorem-paragraph">
                {LoremIpsum({
                    p: 1,
                    avgSentencesPerParagraph: 4,
                    avgWordsPerSentence: 17,
                })}
                <img src={Image} className="office-image" alt="Office" />
            </p>
            <p className="lorem-paragraph">
                {LoremIpsum({
                    p: 1,
                    avgSentencesPerParagraph: 7,
                    avgWordsPerSentence: 17,
                })}
            </p>
            <h3>Taria duo ut vis semper abhorreant:</h3>
            <LoremIpsumList />
            <p className="lorem-paragraph">
                {LoremIpsum({
                    p: 1,
                    avgSentencesPerParagraph: 4,
                    avgWordsPerSentence: 10,
                })}
            </p>
            <p className="lorem-paragraph">
                {LoremIpsum({
                    p: 1,
                    avgSentencesPerParagraph: 7,
                    avgWordsPerSentence: 17,
                })}
            </p>
        </div>
    );
};

export default AboutUs;
