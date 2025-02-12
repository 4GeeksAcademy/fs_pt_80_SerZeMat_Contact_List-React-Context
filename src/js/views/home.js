import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="container mt-4">
            <div className="list-group">
                {store.contacts?.contacts?.map((el) => (
                    <ContactCard
                        key={el.id}
                        contact={el}
                    />
                )) || (
                        <p className="text-center text-secondary">
                            {store.contacts === null ? "Loading contacts..." : "No contacts available."}
                        </p>
                    )}
            </div>
        </div>
    );
};
