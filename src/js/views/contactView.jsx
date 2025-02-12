import React, { useEffect, useContext } from "react";
import { ContactForm } from "../component/contactForm.jsx";

export const ContactView = () => {
    
    return (
        <div className="container d-flex justify-content-center mt-5">
            <ContactForm/>
        </div>
    );
};
