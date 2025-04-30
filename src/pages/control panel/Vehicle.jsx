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
    Modal,

} from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import AdminSidebar from "../../components/navbar/AdminSidebar";
import CloseIcon from '@mui/icons-material/Close';

const vehicle = () => {

    const [openModal, setOpenModal] = useState(false);

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
                    <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Vehicle</Typography>

                    <Grid container spacing={2} mt={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >

                        <Grid size={{ xs: 4, md: 10 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button sx={{ backgroundColor: 'red', color: 'white' }} onClick={() => setOpenModal(true)}>+Add vehicle</Button>
                        </Grid>

                        <Grid size={{ xs: 12, md: 10 }} sx={{ backgroundColor: 'white', borderRadius: '10px' }} p={2}>
                            <Typography sx={{ color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                                Add vehicle
                            </Typography>
                            <TableContainer >
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell padding="checkbox"></TableCell>
                                            <TableCell>Vehicle</TableCell>
                                            <TableCell>Image</TableCell>
                                            <TableCell>Brand</TableCell>
                                            <TableCell>Make</TableCell>
                                            <TableCell>Model</TableCell>
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


            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: '100vh', outline: 'none' }}
                >


                    <Grid
                        item
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            backgroundColor: 'white',
                            padding: 4,
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    >

                        <Grid>
                            
                        <Typography variant="body1" sx={{fontWeight:'bold'}}>
                                  Add vehicle
                                </Typography>
                        </Grid>
                       
                       
                    <Grid
                        item
                        size={{ xs: 12, md: 12 }}
                        // sx={{ position: 'absolute', top: 8, right: 8 }}
                        sx={{display:'flex', flexDirection:'row-reverse'}}
                        mt={-3}
                    >
                        <IconButton onClick={() => setOpenModal(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                       
                        {/* Image Upload Area */}
                        <Grid
                            container
                            size={{ xs: 12, md: 12 }}
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                border: '2px dashed #ccc',
                                borderRadius: 1,
                                padding: 5,
                                textAlign: 'center',
                                cursor: 'pointer',
                                backgroundColor:'#00000033'
                            }}
                        // onClick={handleUploadClick}
                        >
                            <Grid item size={{ xs: 12, md: 12 }}>
                                <Typography variant="body1" color="textSecondary">
                                    Drop your image here, or <strong>browse</strong>
                                </Typography>
                            </Grid>
                        </Grid>

                        {/* Vehicle Select */}
                        <Grid item size={{ xs: 12, md: 12 }} sx={{ mt: 3 }}>
                            <TextField
                                select
                                fullWidth
                                label="Vehicle"
                            //   value={vehicle}
                            //   onChange={(e) => setVehicle(e.target.value)}
                            >
                                <MenuItem value="car">Car</MenuItem>
                                <MenuItem value="bike">Bike</MenuItem>
                            </TextField>
                        </Grid>

                        {/* Brand Input */}
                        <Grid item size={{ xs: 12, md: 12 }} sx={{ mt: 3 }}>
                            <TextField
                                fullWidth
                                label="Brand"
                            //   value={brand}
                            //   onChange={(e) => setBrand(e.target.value)}
                            />
                        </Grid>

                        {/* Make and Model Side by Side */}
                        <Grid container spacing={2} sx={{ mt: 3 }}>
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Make"
                                // value={make}
                                // onChange={(e) => setMake(e.target.value)}
                                >
                                    <MenuItem value="2023">2023</MenuItem>
                                    <MenuItem value="2024">2024</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Model"
                                // value={model}
                                // onChange={(e) => setModel(e.target.value)}
                                >
                                    <MenuItem value="Model X">Model X</MenuItem>
                                    <MenuItem value="Model Y">Model Y</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>

                        {/* Add and Delete Buttons */}
                        <Grid container spacing={2} sx={{ mt: 3 }}>
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <Button variant="outlined" fullWidth sx={{color:'black'}}>
                                    Add
                                </Button>
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <Button sx={{backgroundColor:'red', color:'white'}} fullWidth>
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>

        </>

    )
}

export default vehicle;