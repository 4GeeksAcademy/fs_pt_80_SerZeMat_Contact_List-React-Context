const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            url: "https://playground.4geeks.com/contact/",
            selected: null,
            contacts: null,
        },
        actions: {

            setSelected: (contact) => setStore({ selected: contact }),

            createAgenda: async () => {
                try {
                    const resp = await fetch(`${getStore().url}agendas/sergio-cecilia`,
                        {
                            method: "POST",
                        });
                    if (!resp.ok) throw new Error("Error mientras se crea la agenda:");
                    getActions().getContact();
                    return true;
                } catch (error) {
                    console.error("Error al crear los agenda:", error);
                }
            },

            createContact: async (contact) => {
                try {
                    const resp = await fetch(`${getStore().url}agendas/sergio-cecilia/contacts`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(contact),
                        });
                    if (!resp.ok) throw new Error("Error al crear el contacto");
                    return getActions().getContact()
                } catch (error) {
                    console.error("Error al enviar el contacto:", error);
                }
            },

            getContact: async () => {
                try {
                    const resp = await fetch(`${getStore().url}agendas/sergio-cecilia`);
                    if (!resp.ok) {
                        if (resp.status === 404) {
                            console.log("Agenda no encontrada, creando una nueva...");
                            return getActions().createAgenda();
                        }
                        throw new Error("Error mientras se obtiene el contacto");
                    }
                    const data = await resp.json();
                    setStore({contacts: data})
                    return true
                } catch (error) {
                    console.error("Error al cargar los contactos:", error);
                }
            },

            updateContact: async (id, contact) => {
                try {
                    const resp = await fetch(`${getStore().url}agendas/sergio-cecilia/contacts/${id}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(contact),
                        });
                    if (!resp.ok) throw new Error("Error al modificar el contacto");
                    return getActions().getContact()
                } catch (error) {
                    console.error("Error en la modificación:", error);
                }
            },

            deleteContact: async (id) => {
                try {
                    const resp = await fetch(`${getStore().url}agendas/sergio-cecilia/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (!resp.ok) throw new Error("Error al eliminar el contacto");
                    return getActions().getContact()
                } catch (error) {
                    console.error("Error en la eliminación:", error);
                }
            }
        }
    };
};

export default getState;