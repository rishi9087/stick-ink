import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './Home.css';
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const Home = () => {

    const [scrolled, setScrolled] = useState(false);
    const [runvideo, setRunvideo] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);

            setTimeout(() => {
                setRunvideo(true);
                // setScrolled(false);
            }, 2000)
            // if scroll more than 10px in Y axis

        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            {
                scrolled && (
                    <>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}>

                            <img src="/images/stickink-logo.svg" alt="Logo"
                                style={{

                                    position: 'absolute',
                                    top: 30,
                                    // left: 500, 
                                    width: '250px',
                                    height: '150px',

                                }}
                            />
                        </div>


                    </>




                )

            }

            {
                runvideo && (
                    <video
                        src="/public/images/car-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="video-background"
                    />
                )
            }

            <Grid container mt={{ xs: -5, md: -10 }} >
                <Grid size={{ xs: 12, md: 12 }} >
                    <img src={scrolled ? "/images/car2-home.svg" : "/images/car-home.svg"} alt="Logo" className="responsive-image" />
                </Grid>
            </Grid>

            <Grid container mt={{ xs: 0, md: 0 }} spacing={10} sx={{display:'flex'}}  ml={5} >
                <Grid size={{ xs: 10, md: 5 }} >
                    <img src="/images/car3-home.svg" alt="Logo" className="responsive-image" />
                </Grid>

                <Grid size={{ xs: 6, md: 6 }} ml={7} mt={10} sx={{maxWidth:400}}>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            //   letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                           
                        }}
                     

                    >
                        <span style={{ color: 'red' }}>DESIGN</span>  YOUR <br /> VEHICLE.
                    </Typography>

                    <div style={{marginTop: 30}}>
                    <Typography
                        variant="h7"
                        sx={{
                            // fontWeight: 700,
                            //   letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            // maxWidth: 100, 
                            // wordWrap: 'break-word',
                            lineHeight: 1.2

                        }}         
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor
                    </Typography>
                    </div>
                   
                   <Button sx={{
                    // width: '100px',
                    // padding:10,
                    borderRadius:2,
                    backgroundColor: 'white',
                    padding:'7px',
                    color:'black',
                    marginTop: 3,
                    fontSize:'12px',
                    fontWeight:600,
                     textTransform: 'none' //to avoid conversion to capital letters
                   }}>
                    Explore
                   </Button>
                </Grid>
            </Grid>

            <Grid container mt={{ xs: -5, md: 10 }} sx={{ display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'white', padding:2}}>
                <Grid size={{ xs: 12, md: 8 }} >
                    <img src={scrolled ? "/images/section3-home.svg" : "/images/car-home.svg"} alt="Logo" className="responsive-image" style={{ height: '700px' }} />
                </Grid>
            </Grid>

        </>


    )
}

export default Home;