import React from "react";
import "./contact.css";

const ContactUs = () => {
    return (
        <div>
            <h2 className="contact-us">Contact Us</h2>
            <p className="lorem-paragraph">
                Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                faucibus ex sapien vitae. Adipiscing elit quisque faucibus ex
                sapien vitae pellentesque sem placerat in id cursus.
            </p>

            <form className="contact-form">
                <div className="form-first-row">
                    <div className="column-name">
                        <div>
                            <label htmlFor="name">Full name:</label>
                        </div>
                        <div>
                            <input type="text" id="name" name="name" required />
                        </div>
                    </div>
                    <div className="column-email">
                        <div>
                            <label htmlFor="email">Email address:</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                    </div>
                </div>

                <label htmlFor="phone">
                    <p>
                        Phone number 01{" "}
                        <span className="optional"> - optional</span>
                    </p>
                </label>
                <input type="text" id="phone" name="phone" />

                <button className="add-number-btn">Add new phone number</button>

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="10"
                    required
                ></textarea>
                <div>
                    <div className="checkbox-btn">
                        <input
                            type="checkbox"
                            id="address"
                            name="address_details"
                            value="address"
                        ></input>
                        <label htmlFor="address">Add address details</label>
                        <div class="control"></div>
                    </div>
                </div>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
