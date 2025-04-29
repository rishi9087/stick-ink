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
      }, 1500); // Cooldown time to prevent multiple triggers in quick succession
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

          <Grid container sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent: 'center', alignItems:'center' }} mt={10}>
            <Grid container size={{ xs: 10, md: 8 }}>

              {/* Row 1: "How" and "We" */}
              <Grid sx={{display:'flex', justifyContent: 'center', alignItems:'center', }} gap={3}>
                <motion.div
                  initial={{ x: '-100vw', y: '-100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: {xs:'3rem', md:'7rem'} }} className="section1-about-text">How</Typography>
                </motion.div>

                <motion.div
                  initial={{ x: '100vw', y: '-100vh' }}
                  animate={{ x: 0, y: 40 }} // slight downward offset
                  transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
              
                >
                  <Typography sx={{ fontSize: {xs:'3rem', md:'7rem'}, marginTop:'10px' }} className="section1-about-text"  >We</Typography>
                </motion.div>
              </Grid>

              {/* Row 2: Wo + Paragraph */}
              <Grid sx={{display:'flex', justifyContent: 'center', alignItems:'center', zIndex:2 }} gap={7} ml={{xs:0, md:12}} >
                <motion.div
                  initial={{ x: '-100vw', y: '100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: {xs:'3rem', md:'7rem'}, }} className="section1-about-text">Wo</Typography>
                </motion.div>

                <motion.div
                  initial={{ x: '100vw', y: '100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
                >
                  <Typography variant="body1" sx={{ color: 'white', maxWidth:{sx:'100%', md:'60%'} , fontSize: {xs:'0.3rem', md:'0.7rem'} , marginTop:{xs:'30px', md:0}}}>
                    Come along with Joel as he shows you what to use, how to use it and some helpful tips and tricks to get your graphics kit installed and looking perfect! We’ve also added a bunch of key points and tips below for a perfect install at home.
                  </Typography>
                </motion.div>
              </Grid>

              <Grid size={{xs:4.5, md:3.5}} sx={{display:'flex', justifyContent: 'center', alignItems:'center', position:'absolute', marginTop:{xs:'110px', md:'230px'}, zIndex:1}} ml={{xs:0, md:0}} >
                <motion.div
                  initial={{ x: '-100vw', y: '100vh' }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
                >
                  <img src="/images/about-car.svg" alt="image" width='100%' />
                  {/* <Box component="img" alt="A beautiful view" src="" width={350}  ></Box> */}
                </motion.div>
              </Grid>

              {/* Row 3: Rk */}
              <Grid ml={{xs:10, md:30}} mt={{xs:0, md:-2}}  >
                <motion.div
                  initial={{ y: '100vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'tween', duration: 1.5, ease: 'easeInOut' }}
                >
                  <Typography sx={{ fontSize: {xs:'3rem', md:'7rem'} }} className="section1-about-text">Rk</Typography>
                </motion.div>
              </Grid>

             
            </Grid>

            <Grid size={{ xs: 3, md: 2 }} mt={{xs:5, md:30}}>
            <IconButton onClick={handleScroll}  ><img src="/images/Group 19.svg" alt="Logo" className="header-logo" width='80%' /></IconButton>
            </Grid>

          </Grid>
        )
      }

      {
        showVideoSection && (

          <Container maxWidth="md" sx={{ mt: 12, }} >

        
          <Grid container sx={{ display: 'flex',  alignItems: 'center' }}  >

            <Grid container size={{ xs: 10, md: 10 }}>

            <Grid size={{ xs: 12, md: 12 }} >
              <Typography sx={{ color: 'white', fontWeight: 600, fontSize:{xs:'16px', md:'25px'} }}>Watch</Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} mt={3} >     
              <Typography variant="body1" sx={{ color: 'white',fontSize:{xs:'12px', md:'18px'} }}>Learn more with Joel in our full video:</Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }} mt={2} >
              <video
                src="/public/images/car-video.mp4"
                // autoPlay
                muted
                loop
                playsInline
                // className="about-video"
                width='100%'
              />
            </Grid>
            </Grid>

            <Grid size={{ xs: 2, md: 2 }} mt={{xs:22, md:45}}>
            <IconButton onClick={handleVideoScroll} ><img src="/images/Group 19.svg" alt="Logo"  width='70%' /></IconButton>
            </Grid>

          </Grid>

         

          </Container>
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
                top: {xs:'300px', md:0},
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