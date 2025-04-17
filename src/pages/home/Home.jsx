import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './Home.css';
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';

const Home = () => {

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

            setShowAltImage(window.scrollY > 1000);
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
                animate && (
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            top: -50,
                            left: 100
                        }}
                    >
                        <img src="/images/Group.svg" alt="Logo" width={350} className="animate-image" />
                    </div>
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

            <Grid container mt={{ xs: -5, md: -10 }}  >
                <Grid size={{ xs: 12, md: 12 }} >
                    <img src={scrolled ? "/images/car2-home.svg" : "/images/car-home.svg"} alt="Logo" className="responsive-image" />
                </Grid>
                {
                    scrolled ? (
                        <div></div>
                    ) : (
                        <IconButton onClick={handleScroll} sx={{ marginTop: -40, marginLeft: 130 }} ><img src="/images/Group 19.svg" alt="Logo" className="header-logo" width={100} /></IconButton>
                    )
                }


            </Grid>

            <Grid container mt={{ xs: 0, md: 0 }} spacing={10} sx={{ display: 'flex', justifyContent: 'center' }} ml={5} mb={{ xs: 5, md: 0 }} >
                <Grid size={{ xs: 8, md: 5 }} >
                    <img src="/images/car3-home.svg" alt="Logo" className="responsive-image" />
                </Grid>

                <Grid size={{ xs: 10, md: 6 }} ml={{ xs: 0, md: 7 }} mt={{ xs: -10, md: 10 }} sx={{ maxWidth: 400 }}>

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
                    }}>
                        Explore
                    </Button>
                </Grid>
            </Grid>

            <Grid container mt={{ xs: 0, md: 10 }} sx={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', padding: 2 }}>
                <Grid size={{ xs: 12, md: 8 }} mt={{ xs: -20, md: 0 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={showAltImage ? "/images/section4-home.svg" : "/images/section3-home.svg"}
                        alt="Section Image"
                        className={showAltImage ? 'slide-down' : 'section3-image'}
                    // style={{ height: '500px', width: '1000px'}}
                    />
                </Grid>
            </Grid>


            <Grid container mt={{ xs: -20, md: 0 }} spacing={{ xs: 20, md: 10 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }} ml={{ xs: 0, md: 5 }} >

                <Grid size={{ xs: 10, md: 6 }} ml={7} mt={10} sx={{ maxWidth: 400 }}>

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

                <Grid size={{ xs: 10, md: 5 }} mt={{ xs: -15, md: 5 }} sx={{ justifyContent: 'center' }} >
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
                    <div>
                        <img src="/images/Group 30.svg" alt="Logo" className="responsive-image" />
                    </div>

                </Grid>
            </Grid>

            <Grid container mt={{ xs: 5, md: 10 }} spacing={0} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}   >

                <Grid size={{ xs: 12, md: 3 }} ml={{ xs: 0, md: 7 }} sx={{ backgroundColor: 'white' }} maxHeight={480} >
                    <div
                        style={{
                            display: 'flex',
                            position: 'relative',
                            top: 10,
                            left: 170
                        }}
                    >
                        <img src="/images/stickink-logo1.svg" alt="Logo" width={350} />
                    </div>


                    <div style={{ marginTop: 30, padding: '20px' }}>
                        <Typography
                            variant="h7"
                            sx={{
                                // fontWeight: 700,
                                //   letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                                // maxWidth: 100, 
                                // wordWrap: 'break-word',
                                lineHeight: 1.2,


                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum dolor
                        </Typography>

                    </div>

                </Grid>

                <Grid size={{ xs: 6, md: 6 }}  >

                    <img
                        src="/images/3D_13.svg"
                        alt="3D Car"
                        // className="section4-image"
                        height={480}
                        width={480}
                    />

                </Grid>

                <Grid size={{ xs: 5, md: 6 }}
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        top: -70,
                    }}
                >
                    <div>
                        <img src="/images/Group 25.svg" alt="Logo" width={450} />
                    </div>

                </Grid>
            </Grid>

        </>


    )
}

export default Home;