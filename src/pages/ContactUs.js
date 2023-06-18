import { React, useState } from "react";
import "./contact.css";

function createNewContactState() {
    return {
        FullName: "",
        EmailAddress: "",
        PhoneNumbers: [""],
        Message: "",
        bIncludeAddressDetails: false,
        AddressDetails: {
            AddressLine1: "",
            AddressLine2: "",
            CityTown: "",
            StateCounty: "",
            Postcode: "",
            Country: "",
        },
    };
}

const ContactUs = () => {
    const [contactState, setContactState] = useState(createNewContactState());
    const [submitPending, setSubmitPending] = useState(false);

    function handleChange(event) {
        const newContactState = { ...contactState };
        const elementId = event.target.id;
        const elementValue = event.target.value;

        if (elementId.startsWith("bIncludeAddressDetails")) {
            newContactState.bIncludeAddressDetails = event.target.checked;
        } else if (newContactState.AddressDetails.hasOwnProperty(elementId)) {
            newContactState.AddressDetails[elementId] = elementValue;
        } else if (elementId.startsWith("phone-")) {
            const index = elementId.split("-")[1];
            newContactState.PhoneNumbers[index] = elementValue;
        } else {
            newContactState[elementId] = elementValue;
        }

        if (!newContactState.bIncludeAddressDetails) {
            newContactState.AddressDetails = {
                AddressLine1: "",
                AddressLine2: "",
                CityTown: "",
                StateCounty: "",
                Postcode: "",
                Country: "",
            };
        }

        setContactState(newContactState);
    }

    function addNewNumberHandler() {
        const newContactState = { ...contactState };
        newContactState.PhoneNumbers.push("");

        setContactState(newContactState);
    }

    async function submitContactUsForm(data) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        const response = await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", options);
        return response;
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (submitPending) {
            alert("Please wait while we process your previous message.");
            return;
        } else {
            setSubmitPending(true);
        }

        submitContactUsForm(contactState)
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((responseData) => {
                        console.log("Received response : ", responseData);
                        alert(
                            "Thank you for sending us a message! We have received it and will get back to you shortly."
                        );
                        setContactState(createNewContactState);
                    });
                } else {
                    response.json().then((responseData) => {
                        console.log("Received response : ", responseData);
                        alert("There was a problem receiving your message. Please try again later.");
                    });
                }

                setSubmitPending(false);
            })
            .catch((e) => {
                alert("There was a problem receiving your message. Please try again later.");
                setSubmitPending(false);
            });
    }

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <h2 className="contact-us">Contact Us</h2>
                {submitPending ? <p>Sending message...</p> : ""}
                <p className="lorem-paragraph">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae. Adipiscing
                    elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus.
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="name">
                        <div>
                            <label htmlFor="FullName">Full name</label>
                        </div>
                        <input
                            type="text"
                            id="FullName"
                            value={contactState.FullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="email">
                        <div>
                            <label htmlFor="EmailAddress">Email address</label>
                        </div>
                        <input
                            type="text"
                            id="EmailAddress"
                            value={contactState.EmailAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="phone-number">
                        {contactState.PhoneNumbers.map((phoneNumber, index) => {
                            return (
                                <div key={index} className={`phone-${index}`}>
                                    <div>
                                        <label htmlFor={`phone-${index}`}>
                                            {`Phone number ${index + 1}`}
                                            <span className="optional">- optional</span>
                                        </label>
                                    </div>
                                    <input
                                        type="text"
                                        id={`phone-${index}`}
                                        value={phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <button className="add-number-btn" onClick={addNewNumberHandler}>
                        Add new phone number
                    </button>

                    <div className="message">
                        <div>
                            <label htmlFor="Message">Message</label>
                            <span>Maximum text length is 500 characters</span>
                        </div>
                        <textarea
                            id="Message"
                            value={contactState.Message}
                            rows="10"
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="checkbox-btn">
                        <input
                            type="checkbox"
                            id="bIncludeAddressDetails"
                            value={contactState.bIncludeAddressDetails}
                            onChange={handleChange}
                        ></input>
                        <label htmlFor="bIncludeAddressDetails">Add address details</label>
                    </div>
                    {contactState.bIncludeAddressDetails ? (
                        <div className="address-container">
                            <div className="address-1">
                                <div>
                                    <label htmlFor="AddressLine1">Address line 1</label>
                                </div>
                                <input
                                    type="text"
                                    id="AddressLine1"
                                    onChange={handleChange}
                                    value={contactState.AddressDetails.AddressLine1}
                                    required
                                />
                            </div>
                            <div className="address-2">
                                <div>
                                    <label htmlFor="AddressLine2">
                                        Address line 2<span className="optional"> - optional</span>
                                    </label>
                                </div>
                                <input type="text" id="AddressLine2" onChange={handleChange} />
                            </div>
                            <div className="city-town">
                                <div>
                                    <label htmlFor="CityTown">City/Town</label>
                                </div>
                                <input type="text" id="CityTown" onChange={handleChange} />
                            </div>
                            <div className="state-county">
                                <div>
                                    <label htmlFor="StateCounty">State/County</label>
                                </div>

                                <input type="text" id="StateCounty" onChange={handleChange} />
                            </div>
                            <div className="postcode">
                                <div>
                                    <label htmlFor="Postcode">Postcode</label>
                                </div>
                                <input type="text" id="Postcode" onChange={handleChange} />
                            </div>

                            <div className="country">
                                <div>
                                    <label htmlFor="Country">Country</label>
                                </div>
                                <input type="text" id="Country" onChange={handleChange} />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    <input type="submit" className="submit-btn" value="Submit" />
                </form>
            </div>
            <div className="logo-container"></div>
        </div>
    );
};

export default ContactUs;
