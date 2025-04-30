import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Navbar from "../../components/navbar/Navbar";

const Gallery = () => {

  

    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            <Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }} mt={10} ml={12}>Captures</Typography>


            <Grid container mt={6}  sx={{ justifyContent: 'center' }}>

         
              <Grid container size={{ xs: 12, md: 5 }} >

                <Grid size={{ xs: 12, md: 12 }}>
                  <img src="/stick-ink/images/3D_15 2.svg" alt="image" width='100%'
                  //  style={{ width: '100%' }}
                     />                  
                </Grid>
               
                <Grid size={{ xs: 6, md: 6}} >
                  <img src="/stick-ink/images/3D_13.svg" alt="image" width='100%'
                  //  style={{ width: '100%' }} 
                   />
                </Grid>

                <Grid size={{ xs: 6, md: 6 }}>
                  <img src="/stick-ink/images/3D_9.svg" alt="image" width='100%'
                  //  style={{ width: '100%'}}
                     />
                </Grid>
                
             
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <img src="/stick-ink/images/BMW_M4_2 2.svg" alt="image" width='100%'
                //  style={{ width: '100%'}}
                />
                
              </Grid>

            </Grid>
           


        </>


    )
}

export default Gallery;