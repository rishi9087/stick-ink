import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './Home.css';
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
    return (
       
    <>
        <Navbar />

        <Grid container mt={-10}>
            <Grid size={{ xs: 12, md: 12 }}>
                    <img src="/images/car-home.svg" alt="Logo" className="responsive-image" />
            </Grid>
        </Grid>

    </>
   

    )
}

export default Home;