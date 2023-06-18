import { React, useState } from "react";
import "./contact.css";

const ContactUs = () => {
    const [addressFieldsVisibility, setAddressFieldsVisibility] =
        useState(false);

    function toggleAddressFields() {
        setAddressFieldsVisibility(!addressFieldsVisibility);
    }

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h2 className="contact-us">Contact Us</h2>
                <p className="lorem-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    quisque faucibus ex sapien vitae. Adipiscing elit quisque
                    faucibus ex sapien vitae pellentesque sem placerat in id
                    cursus.
                </p>
                <form className="contact-form">
                    <div className="name">
                        <div>
                            <label htmlFor="name">Full name</label>
                        </div>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="email">
                        <div>
                            <label htmlFor="email">Email address</label>
                        </div>
                        <input type="text" id="email" name="email" required />
                    </div>
                    <div className="phone">
                        <div>
                            <label htmlFor="phone">
                                Phone number 01
                                <span className="optional"> - optional</span>
                            </label>
                        </div>
                        <input type="text" id="phone" name="phone" />
                    </div>

                    <button className="add-number-btn">
                        Add new phone number
                    </button>
                    <div className="message">
                        <div>
                            <label htmlFor="message">Message</label>
                            <span>Maximum text length is 500 characters</span>
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            rows="10"
                            required
                        ></textarea>
                    </div>

                    <div className="checkbox-btn">
                        <input
                            type="checkbox"
                            id="address"
                            name="address_details"
                            value="address_details"
                            onChange={toggleAddressFields}
                        ></input>
                        <label htmlFor="address">Add address details</label>
                    </div>
                    {addressFieldsVisibility ? (
                        <div className="address-container">
                            <div className="address-1">
                                <div>
                                    <label htmlFor="address-1">
                                        Address line 1
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="address-1"
                                    name="address-1"
                                    required
                                />
                            </div>
                            <div className="address-2">
                                <div>
                                    <label htmlFor="address-2">
                                        Address line 2
                                        <span className="optional">
                                            {" "}
                                            - optional
                                        </span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="address-2"
                                    name="address-2"
                                />
                            </div>
                            <div className="city-town">
                                <div>
                                    <label htmlFor="city-town">City/Town</label>
                                </div>
                                <input
                                    type="text"
                                    id="city-town"
                                    name="city-town"
                                />
                            </div>
                            <div className="state-county">
                                <div>
                                    <label htmlFor="state-county">
                                        State/County
                                    </label>
                                </div>

                                <input
                                    type="text"
                                    id="state-county"
                                    name="state-county"
                                />
                            </div>
                            <div className="postcode">
                                <div>
                                    <label htmlFor="postcode">Postcode</label>
                                </div>
                                <input
                                    type="text"
                                    id="postcode"
                                    name="postcode"
                                />
                            </div>

                            <div className="country">
                                <div>
                                    <label htmlFor="country">Country</label>
                                </div>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    <button className="submit-btn">Submit</button>
                </form>
            </div>
            <div className="logo-container"></div>
        </div>
    );
};

export default ContactUs;
