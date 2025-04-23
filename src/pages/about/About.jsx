import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './About.css';
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect, useRef } from "react";
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';

const About = () => {
  const [showSection1, setShowSection1] = useState(true);
  const [showVideoSection, setShowVideoSection] = useState(false);
  const [showSection3, setShowSection3] = useState(false);
  const [showSection4, setShowSection4] = useState(false);
  const [showSection5, setShowSection5] = useState(false);
  const [showSection6, setShowSection6] = useState(false);
  const [scrollStep, setScrollStep] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const isScrolling = useRef(false);
  const [isExitingSection5, setIsExitingSection5] = useState(false);


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
      // Prevent multiple scroll actions being triggered rapidly
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        // Scrolling down

        if (showSection3) {
          e.preventDefault();
          setShowSection3(false);
          setShowSection4(true);
        } else if (showSection4) {
          e.preventDefault();
          setShowSection4(false);
          setShowSection5(true);
          setScrollStep(0); // Reset scroll step when transitioning to Section 5
        } else if (showSection5) {
          e.preventDefault();
          if (scrollStep < 4) {
            setScrollStep((prev) => prev + 1); // Move forward within Section 5
          } else {
            setIsExitingSection5(true);
            setTimeout(() => {
              setShowSection5(false);
              setIsExitingSection5(false);
              setShowSection6(true);
            }, 500);
       
          }
        }
      } else {
        // Scrolling up

        if (showSection5) {
          e.preventDefault();
          if (scrollStep > 0) {
            setScrollStep((prev) => prev - 1); // Move backward within Section 5
          } else {
            setShowSection5(false);
            setShowSection4(true);
          }
        } else if (showSection4) {
          e.preventDefault();
          setShowSection4(false);
          setShowSection3(true); // Revert back to Section 3
          setScrollStep(0); // Reset scroll step if going back to Section 3
        }
      }

      // Throttle scroll actions to prevent spamming
      setTimeout(() => {
        isScrolling.current = false;
      }, 800); // Cooldown time to prevent multiple triggers in quick succession
    };

    // Attach the scroll event listener only when any section is visible
    if (showSection3 || showSection4 || showSection5) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Cleanup event listener when component unmounts or sections change
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [showSection3, showSection4, showSection5, scrollStep]);



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
            <img src="/images/Rectangle 3.svg" alt="image" width='100%' height='100%'
                  //  style={{ width: '100%' }}
                     />                  
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
                    fontSize: '17px',
                    fontStyle: 'italic',
                    fontWeight: 100
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
                    fontWeight: 600,

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

      {
        showSection5 && (
          <Grid container mt={12} sx={{ display: 'flex', position: 'relative' }}>

            {/* Image fading out */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
              <motion.div
                initial={{ opacity: 1 }}
                animate={isExitingSection5
                  ? { opacity: 0, x: 100, y: -100 }
                  : { opacity: 0.4}}
                transition={{ duration: 1 }}
              >
                <Box
                  component="img"
                  alt="image"
                  src="/images/Rectangle 3.svg"
                  sx={{ width: '100%', height: '500px' }}
                />
              </motion.div>
            </Grid>

            {/* Text overlaid on top */}
            <Grid size={{ xs: 12, md: 5 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                top: 0,
                left: { xs: '0', md: '0%' },
                // padding: 4,
                zIndex: 1
              }}
              mt={10}
            >
              <motion.div
                initial={{ y: '-100vh', opacity: 0 }}
                animate={isExitingSection5
                  ? { opacity: 0, x: 100, y: -100 }
                  : { y:0, opacity: 1}}
                transition={{ type: 'spring', stiffness: 80 }}
              >

                <Typography
                  sx={{
                    color: 'white',
                    marginLeft: '20px',
                    fontSize: '27px',
                    fontWeight: 600
                  }}>
                  <ul style={{ color: 'white' }}>
                    <li style={{ color: scrollStep === 1 ? 'red' : 'white', transition: 'color 0.3s' }}>
                      Soft edge applicator (squeegee)
                    </li>
                    <li style={{ color: scrollStep === 2 ? 'red' : 'white', transition: 'color 0.3s' }}>
                      Alcohol cleaner
                    </li>
                    <li style={{ color: scrollStep === 3 ? 'red' : 'white', transition: 'color 0.3s' }}>
                      Signage knife (just in case)
                    </li>
                    <li style={{ color: scrollStep === 4 ? 'red' : 'white', transition: 'color 0.3s' }}>
                      Heat gun (ESSENTIAL)
                    </li>
                  </ul>
                </Typography>
              </motion.div>
            </Grid>

            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                position: 'absolute',
                top: 0,
                right: { xs: '0', md: '5%' },
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                height: '500px',
                padding: '20px'
              }}
            >
              {scrollStep === 1 && (
                <motion.div
                  key="step0"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10 }}
                >
                  <Typography sx={{ color: 'white', fontSize: '18px', }}>
                    Cleaning is THE most important step for long lasting, good looking graphics.
                  </Typography>
                </motion.div>
              )}

              {scrollStep === 2 && (
                <motion.div
                  key="step1"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10 }}
                >
                  <Typography sx={{ color: 'white', fontSize: '18px', }}>
                    Use an <span style={{ color: 'red' }}>alcohol based cleaner</span> on all surfaces, such as Isocol, Methylated Spirits or Brake Clean. This is super important even on brand new plastics, as they have a wax coating that protects plastics during storage before purchase. Make sure that you are using a brand new rag, and that all surfaces are dry once finishing the clean.
                  </Typography>
                </motion.div>
              )}

              {scrollStep === 3 && (
                <motion.div
                  key="step2"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 10 }}
                >
                  <Typography sx={{ color: 'white', fontSize: '18px', }}>
                    Keep this handy to trim edges cleanly.
                  </Typography>
                </motion.div>
              )}

              {scrollStep === 4 && (
                <motion.div
                  key="step3"
                  initial={{ x: 100, opacity: 0 }}
                  // animate={{ x: 0, opacity: 1 }}
                  animate={isExitingSection5
                    ? { opacity: 0, x: 100, y: -100 }
                    : { x:0, opacity: 1}}
                  transition={{ type: 'spring', stiffness: 70, damping: 10 }}
                >
                  <Typography sx={{ color: 'white', fontSize: '18px', }}>
                    Heat guns are an essential part of any graphics install! Applying a small amount of heat will help mould your stickers through any tricky plastic bends or curves, as well as setting the adhesive on completion.
                  </Typography>

                </motion.div>
              )}
            </Grid>

          </Grid>
        )
      }

      {
        showSection6 && (
          <>


<Typography variant="h4" sx={{ color: 'white', fontWeight: 600 }} mt={10} ml={12}>Captures</Typography>


            <Grid container mt={6}  sx={{ justifyContent: 'center' }}>

         
              <Grid container size={{ xs: 12, md: 5 }} >

                <Grid size={{ xs: 12, md: 12 }}>
                  <img src="/images/3D_15 2.svg" alt="image" width='100%'
                  //  style={{ width: '100%' }}
                     />                  
                </Grid>
               
                <Grid size={{ xs: 6, md: 6}} >
                  <img src="/images/3D_13.svg" alt="image" width='100%'
                  //  style={{ width: '100%' }} 
                   />
                </Grid>

                <Grid size={{ xs: 6, md: 6 }}>
                  <img src="/images/3D_9.svg" alt="image" width='100%'
                  //  style={{ width: '100%'}}
                     />
                </Grid>
                
             
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <img src="/images/BMW_M4_2 2.svg" alt="image" width='100%'
                //  style={{ width: '100%'}}
                />
                
              </Grid>

            </Grid>
           


          </>
        )
      }

    </>


  )
}

export default About;