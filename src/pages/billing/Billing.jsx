import { Box, Button, Container, Typography, Avatar, TextField, MenuItem, IconButton, FormControl, FormControlLabel, Checkbox, Icon } from "@mui/material";
import Grid from '@mui/material/Grid';
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const Billing = () => {

    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            <Container maxWidth="md" sx={{ mt: 10, backgroundColor: 'white', borderRadius: '5px' }} >
                <Grid container spacing={{ xs: 3, md: 3 }} sx={{ display: 'flex', flexDirection: 'column' }} p={4}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Grid item size={{ xs: 6, md: 8 }}>
                            <Typography variant="subtitle2" sx={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}> Billing info</Typography>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>Please enter your billing info</Typography>
                        </Grid>

                        <Grid item size={{ xs: 4, md: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>Step 1 of 4</Typography>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ display: 'flex', }} spacing={{ xs: 3, md: 10 }}  >
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Name</Typography>
                            <TextField fullWidth label="Your Name" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Phone number</Typography>
                            <TextField fullWidth label="Phone number" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: 'flex' }} spacing={{ xs: 3, md: 10 }}>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Address</Typography>
                            <TextField fullWidth label="Address" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>City</Typography>
                            <TextField fullWidth label="City" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>

                    </Grid>

                    <Grid container sx={{ display: 'flex' }} spacing={{ xs: 3, md: 10 }}>

                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>State</Typography>
                            <TextField fullWidth label="State" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Zip code</Typography>
                            <TextField fullWidth label="000000" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>
                    </Grid>

                </Grid>

            </Container>

            <Container maxWidth="md" sx={{ mt: 3, backgroundColor: 'white', borderRadius: '5px' }} >
                <Grid container spacing={{ xs: 3, md: 0 }} sx={{ display: 'flex', flexDirection: 'column' }} p={4}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Grid item size={{ xs: 6, md: 8 }}>
                            <Typography variant="subtitle2" sx={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}> Wrap info</Typography>
                        </Grid>

                        <Grid item size={{ xs: 4, md: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>Step 2 of 4</Typography>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ display: 'flex', }} spacing={{ xs: 3, md: 10 }} mt={{ xs: 0, md: 0 }}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Vehicle selected</Typography>
                            <TextField select fullWidth label="select" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>SWF colour</Typography>
                            <TextField select fullWidth label="select" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: 'flex' }} spacing={{ xs: 3, md: 10 }}>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Design selected</Typography>
                            <TextField select fullWidth label="select" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>


                    </Grid>

                </Grid>

            </Container>

            <Container maxWidth="md" sx={{ mt: 3, backgroundColor: 'white', borderRadius: '5px' }} >
                <Grid container spacing={{ xs: 3, md: 0 }} sx={{ display: 'flex', flexDirection: 'column' }} p={4}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Grid item size={{ xs: 6, md: 8 }}>
                            <Typography variant="subtitle2" sx={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}> Payment method</Typography>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>Please enter your payment method</Typography>
                        </Grid>

                        <Grid item size={{ xs: 4, md: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>Step 3 of 4</Typography>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ display: 'flex', }} spacing={{ xs: 3, md: 10 }} >
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Vehicle selected</Typography>
                            <TextField select fullWidth label="select" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>SWF colour</Typography>
                            <TextField select fullWidth label="select" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: 'flex' }} spacing={{ xs: 3, md: 10 }}>
                        <Grid item size={{ xs: 12, md: 5 }}>
                            <Typography variant="subtitle2" gutterBottom>Design selected</Typography>
                            <TextField select fullWidth label="select" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem' } }} />
                        </Grid>


                    </Grid>

                </Grid>

            </Container>

            <Container maxWidth="md" sx={{ mt: 3, backgroundColor: 'white', borderRadius: '5px' }} >
                <Grid container spacing={{ xs: 3, md: 0 }} sx={{ display: 'flex', flexDirection: 'column' }} p={4}>

                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>

                        <Grid item size={{ xs: 6, md: 8 }}>
                            <Typography variant="subtitle2" sx={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}> Confirmation</Typography>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>We are getting to the end. Just few clicks and your wrap is ready!</Typography>
                        </Grid>

                        <Grid item size={{ xs: 4, md: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: '#90A3BF' }}>Step 4 of 4</Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: 'flex', flexDirection:'column' }} spacing={{ xs: 3, md: 2 }} mb={3} >
                        <Grid size={{ xs: 12, md: 12 }} sx={{backgroundColor:'#F6F7F9'}} p={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            // color: 'white',
                                            '&.Mui-checked': {
                                                color: '#FF0000', // or any accent color
                                            }
                                        }}
                                    />
                                }
                                label={<Typography >I agree with sending an Marketing and newsletter emails. No spam, promised!</Typography>}
                            />
                           
                        </Grid>

                        <Grid size={{ xs: 12, md: 12 }} sx={{backgroundColor:'#F6F7F9'}} p={1}>
                       

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        sx={{
                                            // color: 'black',
                                            '&.Mui-checked': {
                                                color: '#FF0000',
                                            }
                                        }}
                                    />
                                }
                                label={<Typography >I agree with our terms and conditions and privacy policy.</Typography>}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 10 }} >
                       <Button sx={{color:'white', backgroundColor:'#FF0000', padding:'10px', fontWeight:600, borderRadius:'12px'}}>Pay now</Button>
                          
                        </Grid>
                    </Grid>

                    <Grid container sx={{ display: 'flex', flexDirection:'column'}} spacing={{ xs: 3, md: 3 }}>

                    <Grid size={{ xs: 12, md: 12 }} >
                    <Typography sx={{color:'#90A3BF', fontSize:'13px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. </Typography>
                          
                        </Grid>
                    <Grid size={{ xs: 12, md: 10 }} sx={{display:'flex'}} gap={2} >
                    <img src="/stick-ink/images/ic-security-safety.svg" alt="image" />
                    <Typography sx={{fontSize:'16px', fontWeight:'600'}} >All your data are safe</Typography>
                          
                        </Grid>

                    <Grid size={{ xs: 12, md: 12 }} >
                    <Typography sx={{color:'#90A3BF', fontSize:'12px'}}>We are using the most advanced security to provide you the best experience ever. </Typography>
                          
                        </Grid>
                   

                    </Grid>

                </Grid>

            </Container>

        </>

    )
}

export default Billing;