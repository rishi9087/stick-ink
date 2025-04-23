import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Navbar from "../../components/navbar/Navbar";
import './Catalogue.css';
import { useNavigate } from 'react-router-dom';

const Catalogue = () => {

    const navigate = useNavigate();

    const handleNavigation = (path) => {

        navigate(path);
    };

    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>


            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '200px', width: '100%', zIndex: 10 }}>
                <Grid size={{ xs: 12, md: 5 }} sx={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 2,
                    padding: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    color: 'white',
                }}>
                    <Typography variant="h4" fontWeight={600}>Are You Looking For a Car Wrap?</Typography>
                    <Typography>This is the content of the first box.</Typography>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} mt={5}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Button sx={{ backgroundColor: 'red', color: 'white', borderRadius: '10px', padding: '10px' }} onClick={() => handleNavigation('/cataloguecar')} >Get started</Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <img src="/images/car-icon.svg" alt="image" width='80%' />
                        </Grid>
                    </Grid>

                </Grid>
                <Typography style={{ color: 'white' }}>Or</Typography>
                <Grid size={{ xs: 12, md: 5 }} sx={{
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 2,
                    padding: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    color: 'white',
                }}>
                    <Typography variant="h4" fontWeight={600} maxWidth={350}>Do You Want a Bike Wrap?</Typography>
                    <Typography>This is the content of the second box.</Typography>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} mt={5}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Button sx={{ backgroundColor: 'red', color: 'white', borderRadius: '10px', padding: '10px' }}>Get started</Button>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <img src="/images/bike-icon.svg" alt="image" width='60%' />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Grid container >

                <Grid size={{ xs: 12, md: 12 }}>
                    <img src="/images/3D_15.svg" alt="image" width='100%'
                        style={{ opacity: 0.4 }}
                    />
                </Grid>

            </Grid>

        </>


    )
}

export default Catalogue;