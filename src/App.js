import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'rating', headerName: 'Rating', width: 130 },
        { field: 'stock', headerName: 'Stock', width: 130 },
    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            <h1>Hello</h1>
            {data && (
                <DataGrid
                    rows={data.products}
                    columns={columns}
                    checkboxSelection
                />
                )} 



                {/* // <TableContainer >
                //     <Table>
                //         <TableHead>
                //             <TableRow>
                //                 <TableCell>ID</TableCell>
                //                 <TableCell>Title</TableCell>
                //                 <TableCell>Description</TableCell>
                //                 <TableCell>Rating</TableCell>
                //                 <TableCell>Stock</TableCell>
                //             </TableRow>
                //         </TableHead>
                //         <TableBody>
                //             {data.products.map((row) => ( */}
                {/* //                 <TableRow key={row.id}>
                //                     <TableCell>{row.id}</TableCell>
                //                     <TableCell>{row.title}</TableCell>
                //                     <TableCell>{row.description}</TableCell>
                //                     <TableCell>{row.rating}</TableCell>
                //                     <TableCell>{row.stock}</TableCell>
                //                 </TableRow>
                //             ))}
                //         </TableBody> */}
                {/* //     </Table> */}
                {/* // </TableContainer>
            )} */}
        </div>
    );
}


export default App;
