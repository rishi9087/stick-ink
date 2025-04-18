import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './About.css';
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';

const About = () => {
  const [showSection1, setShowSection1] = useState(true);
  const [showVideoSection, setShowVideoSection] = useState(false);
  const [showSection3, setShowSection3] = useState(false);
  const [showSection4, setShowSection4] = useState(false);

  const handleScroll = () => {
    setShowSection1(false);
    setShowVideoSection(true);
  }
  const handleVideoScroll = () => {
    setShowVideoSection(false);
    setShowSection3(true);
  }

  useEffect(() => {
    const handleWheel = (e) => {
      if (showSection3) {
        e.preventDefault(); // Prevent actual scrolling
        setShowSection3(false);
        setShowSection4(true);
      }
    };

    if (showSection3) {
      window.addEventListener('wheel', handleWheel, { passive: false }); //{ passive: false } is required to use preventDefault() on wheel.
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [showSection3]);

  return (

    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {
        showSection1 && (

          <Grid container sx={{ justifyContent: 'center' }} mt={10}>
            <Grid size={{ xs: 6, md: 12 }}>


              {/* Row 1: "How" and "We" */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '3.5rem' }}>
                <motion.div
                  initial={{ x: '-100vw', y: '-100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: '7rem' }} className="section1-about-text">How</Typography>
                </motion.div>

                <motion.div
                  initial={{ x: '100vw', y: '-100vh' }}
                  animate={{ x: 0, y: 40 }} // slight downward offset
                  transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: '7rem' }} className="section1-about-text">We</Typography>
                </motion.div>
              </div>

              {/* Row 2: Wo + Paragraph */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <motion.div
                  initial={{ x: '-100vw', y: '100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: '7rem', }} className="section1-about-text">Wo</Typography>
                </motion.div>

                <motion.div
                  initial={{ x: '100vw', y: '100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
                >
                  <Typography variant="body1" sx={{ color: 'white', maxWidth: '250px', marginLeft: '20px', fontSize: '0.7rem' }}>
                    Come along with Joel as he shows you what to use, how to use it and some helpful tips and tricks to get your graphics kit installed and looking perfect! We’ve also added a bunch of key points and tips below for a perfect install at home.
                  </Typography>
                </motion.div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginTop: '-110px', marginLeft: '280px' }}>
                <motion.div
                  initial={{ x: '-100vw', y: '100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
                >
                  <Box component="img" alt="A beautiful view" src="/images/about-car.svg" width={350}  ></Box>
                </motion.div>
              </div>

              {/* Row 3: Rk */}
              <div style={{ display: 'flex', justifyContent: 'center', }}>
                <motion.div
                  initial={{ y: '100vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'tween', duration: 1, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: '7rem' }} className="section1-about-text">Rk</Typography>
                </motion.div>
              </div>

              <IconButton onClick={handleScroll} sx={{ marginTop: -40, marginLeft: 130 }} ><img src="/images/Group 19.svg" alt="Logo" className="header-logo" width={100} /></IconButton>
            </Grid>


          </Grid>
        )
      }

      {
        showVideoSection && (
          <Grid container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} mt={12} >

            <Grid size={{ xs: 6, md: 8 }} >
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }}>Watch</Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 8 }} mt={3} >
              <Typography variant="body1" sx={{ color: 'white' }}>Learn more with Joel in our full video:</Typography>
            </Grid>

            <Grid size={{ xs: 6, md: 8 }} mt={2} >
              <video
                src="/public/images/car-video.mp4"
                // autoPlay
                muted
                loop
                playsInline
                className="about-video"
              />
            </Grid>

            <IconButton onClick={handleVideoScroll} sx={{ marginTop: 40, marginLeft: 100 }} ><img src="/images/Group 19.svg" alt="Logo" className="header-logo" width={100} /></IconButton>

          </Grid>
        )
      }

      {
        showSection3 && (
          <Grid container mt={12} >

            <Grid size={{ xs: 12, md: 12 }} >
              <Box component="img" alt="image" src="/images/Rectangle 3.svg" sx={{ width: '100%' }}  ></Box>
            </Grid>

          </Grid>
        )
      }


      {
        showSection4 && (
          <Grid container mt={12} sx={{ display: 'flex', gap: 10 }}>

            {/* Image with right-to-left animation */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
              >
                <Box
                  component="img"
                  alt="image"
                  src="/images/Rectangle 3.svg"
                  sx={{ width: '100%', height: '500px' }}
                />
              </motion.div>
            </Grid>

            {/* Text with top-down animation */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
              >
                <Typography sx={{ fontSize: '4rem' }} className="section1-about-text">TOOLS</Typography>
                <Typography
                  
                  sx={{
                    color: 'white',
                    // maxWidth: '250px',
                    marginLeft: '20px',
                    fontSize: '17px'
                  }}
                >
                  To help make the job easier, we recommend having these tools ready to go
                </Typography>
                <Typography 
                  sx={{
                    color: 'white',
                    // maxWidth: '250px',
                    marginLeft: '20px',
                    fontSize: '27px',
                    fontWeight:600,

                  }}>
                  <ul style={{ color: 'white', }}>
                    <li>Soft edge applicator (squeegee)</li>
                    <li>Alcohol cleaner</li>
                    <li>Isopropyl Alcohol</li>
                    <li>Signage knife (just in case)</li>
                    <li>Heat gun (ESSENTIAL)</li>
                  </ul>
                </Typography>

              </motion.div>
            </Grid>

          </Grid>
        )
      }


    </>


  )
}

export default About;