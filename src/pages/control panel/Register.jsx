import { Box, Button, Container, Typography, Avatar, TextField, MenuItem, IconButton, Link } from "@mui/material";
import Grid from '@mui/material/Grid';
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const AdminRegister = () => {

    return (

        <>

            <Grid container sx={{ display: 'flex', flexDirection:{xs:'column', md:'row'} }} spacing={2} >
                <Grid item size={{ xs: 12, md: 6 }} >
                    <img src="/images/Rectangle 57.svg" alt="image" width='100%' />
                </Grid>

                <Grid container size={{ xs: 12, md: 6}} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <Grid item >
                        <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '28px' }}>Welcome!</Typography>
                        <Typography sx={{ color: 'white', fontSize: '16px'}}>Please login or register to get started.</Typography>
                    </Grid>

                    <Grid container size={{ xs: 12, md: 8 }} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // height: '100vh',
                        backdropFilter: 'blur(10px)',
                        // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(229, 215, 215, 0.88)',
                        borderRadius: '16px',
                        // padding: '32px',
                        // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                    }} mt={5} p={{xs:3, md:6}}>

                        <Grid item >
                            <Typography sx={{ color: 'white', fontWeight: 800,fontSize: '28px', mb: 2 }}>Register</Typography>
                        </Grid>

                        {/* Text Fields */}
                        <Grid item sx={{ width: '100%', mb: 2 }} >
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                InputProps={{
                                    sx: {
                                        color: '#A0AEC0',
                                        borderRadius: '8px',
                                        backdropFilter: 'blur(10px)',
                                        '& fieldset': {
                                            borderColor: 'rgba(229, 215, 215, 0.88)'
                                        }
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                        </Grid>

                        <Grid item sx={{ width: '100%', mb: 2 }}  >
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                InputProps={{
                                    sx: {
                                        color: '#A0AEC0',
                                        borderRadius: '8px',
                                        backdropFilter: 'blur(10px)',
                                        '& fieldset': {
                                            borderColor: 'rgba(229, 215, 215, 0.88)'
                                        }
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                        </Grid>

                        <Grid item sx={{ width: '100%', mb: 2 }}  >
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                variant="outlined"
                                InputProps={{
                                    sx: {
                                        color: '#A0AEC0',
                                        borderRadius: '8px',
                                        backdropFilter: 'blur(10px)',
                                        '& fieldset': {
                                            borderColor: 'rgba(229, 215, 215, 0.88)'
                                        }
                                    }
                                }}
                                InputLabelProps={{ style: { color: 'white' } }}
                            />
                        </Grid>

                        {/* Signup Button */}
                        <Grid item sx={{ width: '100%', mb: 2 }}  size={{ xs: 4}}>
                            <Button fullWidth variant="contained" sx={{
                                backgroundColor: '#FF0000',
                                color: 'white',
                                borderRadius: '8px',
                                backdropFilter: 'blur(10px)',
                                // border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}>
                                Sign Up
                            </Button>
                        </Grid>

                        {/* Icon Buttons */}
                        <Grid item sx={{ display: 'flex', gap: 2, mb: 2 }} >
                           
                                <IconButton  sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(229, 215, 215, 0.88)',
                                    borderRadius: '20%',
                                    backdropFilter: 'blur(10px)',
                                    width: 48,
                                    height: 48,
                                    padding:'5px'
                                }}>
                                    <img src='/images/facebook-logo.svg' alt='image' width='80%' />
                                </IconButton>
                                <IconButton sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(229, 215, 215, 0.88)',
                                    backdropFilter: 'blur(10px)',
                                    width: 48,
                                    height: 48,
                                    borderRadius: '20%',
                                    padding:'5px'
                                }}>
                                    <img src='/images/apple.svg' alt='image' width='80%' />
                                </IconButton>
                                <IconButton  sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(229, 215, 215, 0.88)',
                                    backdropFilter: 'blur(10px)',
                                    width: 48,
                                    height: 48,
                                     borderRadius: '20%',
                                    padding:'5px'
                                }}>
                                    <img src='/images/google.svg' alt='image' width='70%' />
                                </IconButton>
                         
                        </Grid>

                        {/* Sign In Link */}
                        <Grid item  >
                            <Typography sx={{ color: 'white' }}>
                                Already have an account?{' '}
                                <Link href="/adminlogin" underline="hover" sx={{ color: '#FF0000', cursor: 'pointer' }}>
                                    Sign in
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

        </>

    )
}

export default AdminRegister;