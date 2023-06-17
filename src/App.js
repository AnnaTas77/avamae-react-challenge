import React from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="pages-container">
                <Home />
                <AboutUs />
                <ContactUs />
            </div>
        </div>
    );
};

export default App;
