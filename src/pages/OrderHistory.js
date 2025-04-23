import React from "react";
import { useState, useEffect } from "react";
import { Table } from "../components/Table";
import { API_URLS } from "../apiURLs";

const columns = [
    {
        name: 'OrderId',
        sortable: true,
        selector: (row) => row.orderId,
    },
    {
        name: 'Nombre',
        sortable: true,
        selector: (row) => row.drinkId,
    },
    {
        name: 'Cantidad',
        sortable: true,
        selector: (row) => row.size,
    },
    {
        name: 'Precio Total',
        sortable: true,
        selector: (row) => row.totalPrice,
    }
]

export const OrderHistory = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para manejar la carga

    useEffect(() => {
        // Función para obtener los datos del backend
        const fetchData = async () => {
            try {
                const response = await fetch(API_URLS.ORDERS); // Cambia la URL según tu backend
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                
                const result = await response.json();
                console.log(result); // Verifica la estructura de los datos
                setData(result);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 


    return (
      <div className="container">
        <h1>Historial de Pedidos</h1>
        <p>Aquí puedes ver el historial de tus pedidos anteriores.</p>
        <br/>
        {loading ? (
          <p>Cargando datos...</p>
        ) : data.length > 0 ? (
          <Table columns={columns} data={data} />
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </div>
    );
}