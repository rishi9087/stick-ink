import { Box, Button, Container, Typography, Avatar, TextField, MenuItem, IconButton, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import AdminSidebar from "../../components/navbar/AdminSidebar";

const Dashboard = () => {

    return (

        <>

<Grid container sx={{display:'flex'}}>
    <Grid size={{ xs: 12, md: 2 }}>
    <AdminSidebar/>
    </Grid>

{/* Content Area */}
<Grid item size={{ xs: 12, md: 9 }} sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: 4 }}>
    <Typography variant="h4">Dashboard</Typography>
</Grid>

</Grid>

        </>

    )
}

export default Dashboard;