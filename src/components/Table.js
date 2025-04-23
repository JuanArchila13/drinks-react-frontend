import { useState } from 'react';

import DataTable from 'react-data-table-component';

export const Table = ({columns, data, title}) => {
    const [records, setRecords] = useState(data)


    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#f2f2f2', // Color gris claro
                fontWeight: 'bold',
                fontSize: '16px',
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                padding: '10px',
            },
        },
    };

    const handleChange = (e) => {
        const filteredData = data.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(filteredData)       
    }

    return (
        <div>
            <h5>Buscar bebida por nombre</h5>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Escribe el nombre de la bebida"
                onChange={handleChange}
            />
            
            <DataTable
                title={title}
                columns={columns}
                data={records}
                pagination
                customStyles={customStyles}
            />
        </div>
    );
}