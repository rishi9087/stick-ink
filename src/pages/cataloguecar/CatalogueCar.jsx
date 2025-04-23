import { Button, Grid, Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";

const CatalogueCar = () => {
    const [activeSection, setActiveSection] = useState('vehicle');

    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid size={{ xs: 12, md: 10 }}>
                    <img src="/images/kushaq white.svg" alt="image" width='80%' />
                </Grid>
            </Grid>

            {/* Toggle Buttons */}
            <Grid container spacing={2} mt={4} sx={{ justifyContent: 'center' }}>
                <Grid size={{ xs: 12, md: 2 }} >
                    <Typography  sx={{color: activeSection == 'vehicle'? 'red' : 'white', cursor:'pointer', fontWeight:600}} onClick={() => setActiveSection('vehicle')}>
                        Vehicle Model
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 2 }}>
                    <Typography sx={{color: activeSection == 'color'? 'red' : 'white', cursor:'pointer', fontWeight:600}}  onClick={() => setActiveSection('color')}>
                        Color
                    </Typography>
                </Grid>
                <Grid  size={{ xs: 12, md: 3 }}>
                    <Typography sx={{color: activeSection == 'design'? 'red' : 'white', cursor:'pointer', fontWeight:600}} onClick={() => setActiveSection('design')}>
                        Digital Designs
                    </Typography>
                </Grid>
            </Grid>

            {/* Sections */}
            {activeSection === 'vehicle' && (
                <Grid container mt={4} sx={{ justifyContent: 'center' }}>
                    <Grid size={{ xs: 12, md: 10 }}>
                        
                        <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>

                            <Grid size={{ xs: 6, md: 2 }} sx={{backgroundColor:'white', borderRadius:2}}>
                                <img src="/images/kushaq white.svg" alt="Model 1" width="100%" />
                                <Typography style={{textAlign:'center'}}>Kushaq</Typography>
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }} sx={{backgroundColor:'white', borderRadius:2}}>
                                <img src="/images/kushaq white.svg" alt="Model 2" width="100%" />
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }} sx={{backgroundColor:'white', borderRadius:2}}>
                                <img src="/images/kushaq white.svg" alt="Model 3" width="100%" />
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            )}

            {activeSection === 'color' && (
                <Grid container mt={4} sx={{ justifyContent: 'center' }}>
                    <Grid size={{ xs: 12, md: 10 }}>
                        <Typography variant="h6" fontWeight={600} mb={2}>Color</Typography>
                        <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <img src="/images/kushaq white.svg" alt="Color 1" width="100%" />
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <img src="/images/kushaq white.svg" alt="Color 2" width="100%" />
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <img src="/images/kushaq white.svg" alt="Color 3" width="100%" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            {activeSection === 'design' && (
                <Grid container mt={4} sx={{ justifyContent: 'center' }}>
                    <Grid size={{ xs: 12, md: 10 }}>
                        <Typography variant="h6" fontWeight={600} mb={2}>Digital Designs</Typography>
                        <Grid container spacing={2} sx={{ overflowX: 'auto', flexWrap: 'nowrap' }}>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <img src="/images/design-1.svg" alt="Design 1" width="100%" />
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <img src="/images/design-2.svg" alt="Design 2" width="100%" />
                            </Grid>
                            <Grid size={{ xs: 6, md: 2 }}>
                                <img src="/images/design-3.svg" alt="Design 3" width="100%" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
}

export default CatalogueCar;
