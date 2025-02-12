import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { ContactForm } from "../component/contactForm.jsx";

export const ContactView = () => {
    // const { store, actions } = useContext(Context);
    // const navigate = useNavigate();
    // const { id } = useParams();

    // useEffect(() => {
    //     if (!store.contacts) {
    //         console.warn("La lista de contactos aún no está cargada.");
    //         return;
    //     }
    //     if (id) {
    //         const contactToEdit = store.contacts.contacts?.find(contact => contact.id === parseInt(id));
    //         if (contactToEdit) {
    //             actions.setSelected(contactToEdit);
    //         } else {
    //             console.warn("Contacto no encontrado, redirigiendo...");
    //             navigate("/");
    //         }
    //     } else {
    //         actions.setSelected(null);
    //     }
    // }, [id, store.contacts]);

    return (
        <div className="container d-flex justify-content-center mt-5">
            <ContactForm/>
            {/* {!store.contacts ? (
                <p>Cargando contactos...</p>
            ) : (
                <ContactForm />
            )} */}
        </div>
    );
};
