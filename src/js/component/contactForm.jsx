import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const ContactForm = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        email: store.selected?.email || '',
        address: store.selected?.address || '',
        phone: store.selected?.phone || ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (store.selected) {
            await actions.updateContact(store.selected.id, formData);
        } else {
            await actions.createContact(formData);
        }
        navigate("/");
    }

    return (

        <form className="col-12 col-sm-8 p-4 rounded bg-white shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange} required
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange} required
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange} required
                    type="text"
                    className="form-control"
                    placeholder="Enter phone"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange} required
                    type="text"
                    className="form-control"
                    placeholder="Enter address"
                />
            </div>

            {store.selected ?
                <input type="submit" className="btn btn-primary col-12" value={"Edit Contact"} />
                :
                <input type="submit" className="btn btn-primary col-12" value={"Create New Contact"} />
            }

            <Link className="btn btn-secondary col-12 mt-2" to={'/'}>Back Home</Link>

        </form>


    );
};
