import {
    Box, Button, Container, Typography, Avatar, TextField, MenuItem, IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
    Pagination,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import AdminSidebar from "../../components/navbar/AdminSidebar";

const Products = () => {

    const sampleData = [
        {
            id: 1,
            name: "Design 1",
            image: "https://via.placeholder.com/50",
            swf: "Red, Blue",
            stock: 120,
            amount: "$25"
        },
        {
            id: 2,
            name: "Design 2",
            image: "https://via.placeholder.com/50",
            swf: "Green, Yellow",
            stock: 80,
            amount: "$30"
        },
        {
            id: 3,
            name: "Design 3",
            image: "https://via.placeholder.com/50",
            swf: "Black, White",
            stock: 50,
            amount: "$20"
        },
        {
            id: 4,
            name: "Design 4",
            image: "https://via.placeholder.com/50",
            swf: "Orange, Purple",
            stock: 70,
            amount: "$28"
        },
        {
            id: 5,
            name: "Design 5",
            image: "https://via.placeholder.com/50",
            swf: "Blue, Grey",
            stock: 90,
            amount: "$22"
        },
        {
            id: 6,
            name: "Design 6",
            image: "https://via.placeholder.com/50",
            swf: "Cyan, Magenta",
            stock: 60,
            amount: "$35"
        }
    ];


    const [page, setPage] = useState(1);
    const rowsPerPage = 3;


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    return (

        <>
            <Grid container sx={{ display: 'flex', }}>

                <Grid size={{ xs: 12, md: 2 }}>
                    <AdminSidebar />
                </Grid>

                {/* Content Area */}
                <Grid item size={{ xs: 12, md: 10 }} sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: 4 }}>
                    <Typography sx={{ fontSize: '25px', fontWeight:'bold' }}>Product</Typography>

                    <Grid container spacing={2} mt={10} sx={{display:'flex', flexDirection:'column',justifyContent:'center'}} >

                        <Grid size={{ xs: 4, md: 10 }} sx={{display:'flex', justifyContent:'flex-end'}}>
                        <Button sx={{backgroundColor:'red', color:'white'}} >+Add Design</Button>
                        </Grid>
                        
                        <Grid size={{ xs: 12, md: 10 }} sx={{ backgroundColor: 'white', borderRadius: '10px' }} p={2}>
                            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                                Products
                            </Typography>
                            <TableContainer >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding="checkbox"></TableCell>
                                            <TableCell>Design Name</TableCell>
                                            <TableCell>Image</TableCell>
                                            <TableCell>SWF Colors</TableCell>
                                            <TableCell>Stock Quantity</TableCell>
                                            <TableCell>Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {sampleData
                                            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                                            .map((row) => (
                                                <TableRow key={row.id}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox />
                                                    </TableCell>
                                                    <TableCell>{row.name}</TableCell>
                                                    <TableCell>
                                                        <img src='' alt='image' width="40" />
                                                    </TableCell>
                                                    <TableCell>{row.swf}</TableCell>
                                                    <TableCell>{row.stock}</TableCell>
                                                    <TableCell>{row.amount}</TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>
                        <Pagination

                            count={Math.ceil(sampleData.length / rowsPerPage)}
                            page={page}
                            onChange={handleChangePage}
                            variant="outlined"
                            shape="rounded"
                            sx={{
                                mt: 2, display: 'flex', justifyContent: 'center', backgroundColor: 'black', '& .MuiPaginationItem-root': {
                                    color: 'red',
                                    borderColor: 'red',
                                    '&.Mui-selected': {
                                        backgroundColor: 'red',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#cc0000',
                                        },
                                    },
                                    '&:hover': {
                                        backgroundColor: '#ffe5e5',
                                    },
                                },
                            }}
                        />
                    </Grid>
                </Grid>



            </Grid>

        </>

    )
}

export default Products;