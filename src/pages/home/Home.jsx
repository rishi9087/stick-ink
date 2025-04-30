import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './Home.css';
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

    const handleNavigation = (path) => {

        navigate(path);
    };
    const [scrolled, setScrolled] = useState(false);
    const [runvideo, setRunvideo] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleScroll = () => {
        setScrolled(true);

        setTimeout(() => {
            setTimeout(() => {
                setRunvideo(true);

            }, 2000)
            setAnimate(true);
        }, 1000)

    }

    // useEffect(() => {
    //     const onScroll = () => {
    //         setScrolled(window.scrollY > 10);

    //         setTimeout(() => {
    //             setRunvideo(true);
    //             // setScrolled(false);
    //         }, 2000)
    //         // if scroll more than 10px in Y axis

    //     };

    //     window.addEventListener("scroll", onScroll);
    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);

    const [showAltImage, setShowAltImage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            setShowAltImage(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            {
                scrolled && (
                    
                <Grid container    >

                    <Grid size={{ xs: 12, md: 12 }} sx={{ display:'flex', justifyContent: 'center', alignItems: 'center', position:'absolute', top:{xs:'60px', md:'100px'} }} >
                        <img src='/stick-ink/images/stickink-logo.svg' alt="image" width="30%"  />
                    </Grid>
    
                </Grid>              

                )

            }

            {
                animate && (
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            top: -50,
                            left: 100
                        }}
                    >
                        <img src="/stick-ink/images/Group.svg" alt="Logo" width='100%' className="animate-image" />
                    </div>
                )
            }

            {
                runvideo && (
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <Grid size={{ xs: 12, md: 12 }}>

                            <video
                                src="/stick-ink/images/car-video.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="video-background"
                                width="100%"
                            />
                        </Grid>
                    </Grid>
                )
            }

            <Grid container mt={{ xs: 0, md: -7 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}  >
                <Grid size={{ xs: 12, md: 12 }}>
                    <img src={scrolled ? "/stick-ink/images/car2-home.svg" : "/stick-ink/images/car-home.svg"} alt="Logo" width="100%" />
                </Grid>
                <Grid size={{ xs: 1.5, md: 1 }} mt={{ xs: -5, md: -27 }} >

                    <IconButton onClick={handleScroll}  ><img src="/stick-ink/images/Group 19.svg" alt="Logo" width="100%" /></IconButton>

                </Grid>

            </Grid>

            <Grid container mt={{ xs: 0, md: 10 }} spacing={15} sx={{ display: 'flex', justifyContent: 'center' }} mb={{ xs: 5, md: 0 }} >
                <Grid size={{ xs: 11, md: 5 }} >
                    <img src="/stick-ink/images/car3-home.svg" alt="Logo" className="responsive-image" width='100%' />
                </Grid>

                <Grid size={{ xs: 10, md: 6 }} mt={{ xs: -12, md: 5 }} >

                    <Typography
                        // variant="h3"
                        sx={{
                            fontSize: { xs: '30px', md: '35px' },
                            fontWeight: 700,
                            //   letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}

                    >
                        <span style={{ color: 'red' }}>DESIGN</span>  YOUR <br /> VEHICLE.
                    </Typography>

                    <div style={{ marginTop: 30 }}>
                        <Typography
                            // variant="h7"
                            sx={{
                                fontSize: { xs: '12px', md: '16px' },
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
                    <div style={{ marginTop: 30 }}>
                        <Typography

                            sx={{
                                fontSize: { xs: '12px', md: '16px' },
                                //   letterSpacing: '.3rem',
                                color: 'white',
                                textDecoration: 'none',
                                // maxWidth: 100, 
                                // wordWrap: 'break-word',
                                lineHeight: 1.2

                            }}
                            width='100%'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor
                        </Typography>

                    </div>

                    <Button sx={{
                        // width: '100px',
                        // padding:10,
                        borderRadius: 2,
                        backgroundColor: 'white',
                        padding: '7px',
                        color: 'black',
                        marginTop: 3,
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'none' //to avoid conversion to capital letters
                    }} onClick={() => handleNavigation('/catalogue')}>
                        Explore
                    </Button>
                </Grid>
            </Grid>

            <Grid container mt={{ xs: 0, md: 10 }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    padding: 2,
                    // position: 'relative',
                    // overflow: 'hidden'
                }}
            >
                {showAltImage && (
                    <Grid
                        size={{ xs: 4, md: 2 }}
                        sx={{
                            position: 'absolute',
                            // right:50,
                            zIndex: 2,
                            animation: 'slideDown 0.7s ease-out forwards'
                        }}
                    >
                        <img
                            src="/stick-ink/images/INFERNO.svg"
                            alt="image"
                            style={{ width: '45%' }}
                        />
                    </Grid>
                )}

                <Grid
                    size={{ xs: 12, md: 8 }}
                    mt={{ xs: -20, md: 0 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        zIndex: 1
                    }}
                >
                    <img
                        src="/stick-ink/images/section3-home.svg"
                        alt="Section Image"
                        className='section3-image'
                        style={{ width: '100%', maxWidth: '1000px' }}
                    />
                </Grid>
            </Grid>



            <Grid container mt={{ xs: -20, md: 0 }} spacing={{ xs: 20, md: 20 }} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }} >

                <Grid size={{ xs: 10, md: 5 }} mt={10} maxWidth='70%'>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            //   letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',

                        }}


                    >
                        <span style={{ color: 'red' }}>WHY</span>  choose us?
                    </Typography>

                    <div style={{ marginTop: 30 }}>
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

                    <div style={{ marginTop: 30 }}>
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

                </Grid>

                <Grid size={{ xs: 10, md: 5 }} mt={{ xs: -15, md: 10 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 600,
                            //   letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                            fontStyle: 'italic'
                        }}

                    >
                        BESPOKE SKINS BY <span style={{ color: 'red' }}>STICKINK</span>
                    </Typography>
                    <div style={{ marginTop: -30 }}>
                        <img src="/stick-ink/images/Group 30.svg" alt="Logo" className="responsive-image" width='100%' />
                    </div>

                </Grid>
            </Grid>

            <Grid container mt={{ xs: 5, md: 10 }} spacing={0} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}   >

                <Grid size={{ xs: 10, md: 7 }}  >

                    <img
                        src="/stick-ink/images/Group 26.svg"
                        alt="image"
                        // className="section4-image"
                        // height={480}
                        width='100%'
                    />

                </Grid>

            </Grid>

        </>


    )
}

export default Home;