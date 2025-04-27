import React from "react";
import { DynamicForm } from "../components/Form";
import { API_URLS } from "../apiURLs";
import { SwalAlert } from "../components/SweetAlert";

const fields = [
    {
        id: "name",
        label: "Nombre de la bebida",
        type: "text",
        name: "name",
        placeholder: "Ingresa el nombre de la bebida",
    },
    {
        id: "size",
        label: "Cantidad",
        type: "number",
        name: "size",
        placeholder: "Ingresa la cantidad",
    },
];


const handleFormSubmit = async (formData) => {
    try {
        const response = await fetch(API_URLS.ORDERS, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {    
            if (response.status === 400) {
                SwalAlert({
                    type: "error",
                    title: "Error",
                    text: result.message,
                    footer: "Por favor, verifica los datos ingresados.",
                });
            }
        }else{
            SwalAlert({
                type: "success",
                title: "Éxito",
                text: "Pedido realizado con éxito.",
                footer: `ID de pedido: ${result.orderId}`,
            });
        }
    } catch (error) {
        SwalAlert({
            type: "error",
            title: "Error",
            text: "Hubo un error al enviar el formulario",
        });
    }
};

export const Home = () => {
    return (
        <div className="container">
            <h1>Bienvenido a la tienda de bebidas</h1>
            <p>Ingresa la cantidad de la bebida que deseas comprar y da click en el botón comprar al lado de cada bebida.</p>
            <br/>
            <DynamicForm fields={fields} onSubmit={handleFormSubmit} buttonText="Pedir Bebida"/>
        </div>
    );
};