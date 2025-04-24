import { Box, Button, Container, Typography, Avatar, TextField, MenuItem, IconButton} from "@mui/material";
import Grid from '@mui/material/Grid';
import Navbar from "../../components/navbar/Navbar";
import './Profile.css';
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ImageIcon from '@mui/icons-material/Image'

const Profile = () => {

    const [countries, setCountries] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);


    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                const countryList = res.data.map(c => c.name.common).sort();
                setCountries(countryList);
            })
            .catch(err => console.error("Failed to fetch countries:", err));
    }, []);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    
    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            <Container maxWidth="md" sx={{ mt: 10 , backgroundColor:'white', borderRadius:'5px'}} >
            <Grid container spacing={3} sx={{display:'flex', flexDirection:'column'}} p={3}>
                    
                    
                    <Grid item size={{ xs: 12, md: 6}}>
                        <Box display="flex" alignItems="center">
                        <Box
                                onClick={handleImageClick}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    backgroundColor: '#f0f0f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <ImageIcon fontSize="large" color="action" />
                                )}
                            </Box>
                            <Box ml={2}>
                                <Typography variant="h6">Rishi kashyap</Typography>
                                <Typography variant="body2">rishikashyap@gmail.com</Typography>
                            </Box>
                        </Box>

                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />

                    </Grid>

                    <Grid container sx={{display:'flex',}} spacing={{xs:3, md:10}}>
                    <Grid size={{ xs: 12, md: 5 }}>
                    <Typography variant="subtitle2" gutterBottom>Full Name</Typography>
                        <TextField fullWidth label="Full Name" variant="outlined" size="small" sx={{ backgroundColor: '#F9F9F9',  '& .MuiInputLabel-root': { fontSize: '0.8rem'} }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                    <Typography variant="subtitle2" gutterBottom>Last Name</Typography>
                        <TextField fullWidth label="Last Name" variant="outlined" size="small"  sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem'} }}  />
                    </Grid>
                    </Grid>

                    <Grid container sx={{display:'flex'}} spacing={{xs:3, md:10}}>
                    <Grid item size={{ xs: 12, md: 5 }}>
                    <Typography variant="subtitle2" gutterBottom>Email</Typography>
                        <TextField fullWidth label="Email" variant="outlined" size="small"  sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem'} }} />
                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }}>
                    <Typography variant="subtitle2" gutterBottom>Gender</Typography>
                        <TextField
                            select
                            fullWidth
                            label="Gender"
                            variant="outlined"
                            size="small"
                            sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem'} }}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </TextField>
                    </Grid>
                    </Grid>

                    <Grid container sx={{display:'flex'}} spacing={{xs:3, md:10}}>
                    <Grid item size={{ xs: 12, md: 5 }}>
                    <Typography variant="subtitle2" gutterBottom>Country</Typography>
                        <TextField
                            select
                            fullWidth
                            label="Country"
                            variant="outlined"
                            size="small"
                            sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem'} }}
                        >
                         {countries.map((country) => (
                                <MenuItem key={country} value={country}>
                                    {country}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 5 }}>
                    <Typography variant="subtitle2" gutterBottom>Address</Typography>
                        <TextField fullWidth label="Address" variant="outlined" size="small"  sx={{ backgroundColor: '#F9F9F9', '& .MuiInputLabel-root': { fontSize: '0.8rem'} }}/>
                    </Grid>
                    </Grid>

                
                    <Grid item size={{ xs: 12 }} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Button sx={{backgroundColor:'red', color:'white', padding:'3px', borderRadius:'5px'}}>
                            Save
                        </Button>
                    </Grid>
                </Grid>

                </Container>
         

        </>


    )
}

export default Profile;