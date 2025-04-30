import { Box, Button, Container, Typography, Avatar, TextField, MenuItem, IconButton, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {

      const navigate = useNavigate();
    
      const handleNavigation = (path) => {
        
        navigate(path);
      };

    return (

<Grid container>

{/* Sidebar */}
<Grid item size={{ xs: 12, md: 12 }} sx={{ backgroundColor: 'white', minHeight: '100vh', padding: 0 }}>
    {/* Logo */}
    <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center'}} mt={4} >
           
            <img src="/images/stickink-logo2.svg" alt="image" width='60%' />
      
    </Grid>

    {/* Nav Items */}
    <Grid container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} mt={3}>
        <List>
            <ListItem button sx={{ gap:'10px', cursor:'pointer'}} onClick={()=>handleNavigation('/dashboard')}>
               <IconButton sx={{backgroundColor:'#FF0000',borderRadius:'30%', justifyContent:'center', width:'25%'}}><img src="/images/home-icon.svg" alt="image" width='100%' /></IconButton> 
                <Typography sx={{fontSize:'14px'}}>Dashboard</Typography>
            </ListItem>

            <ListItem button sx={{gap:'10px',cursor:'pointer'}} onClick={()=>handleNavigation('/products')  }>
            <IconButton sx={{backgroundColor:'#FF0000',borderRadius:'30%', justifyContent:'center', width:'25%'}}><img src="/images/product-icon.svg" alt="image" width='100%' /></IconButton> 
            <Typography  sx={{fontSize:'14px'}}>All Products</Typography>
            </ListItem>

            <ListItem button sx={{gap:'10px',cursor:'pointer'}} onClick={()=>handleNavigation('/vehicle')  }>
            <IconButton sx={{backgroundColor:'#FF0000',borderRadius:'30%', justifyContent:'center', width:'25%'}}><img src="/images/vehicle-icon.svg" alt="image" width='100%' /></IconButton> 
            <Typography  sx={{fontSize:'14px'}}>Vehicle</Typography>
            </ListItem>

            <ListItem button sx={{gap:'10px',cursor:'pointer'}}>
            <IconButton sx={{backgroundColor:'#FF0000',borderRadius:'30%', justifyContent:'center', width:'25%'}}><img src="/images/document-text.svg" alt="image" width='100%' /></IconButton> 
            <Typography  sx={{fontSize:'14px'}}>Order List</Typography>
            </ListItem>
        </List>
    </Grid>
</Grid>

</Grid>

    )
}

export default AdminSidebar ;