import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="pages-container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
