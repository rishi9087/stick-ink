import { Box, Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import './About.css';
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';

const About = () => {

               
    const images = [
        { src: '/images/How.svg', from: { x: -300, y: -300 } }, // top left
        { src: '/images/wo.svg', from: { x: -300, y: 300 } },   // bottom left
        { src: '/images/we.svg', from: { x: 300, y: -300 } },   // top right
        { src: '/images/text.svg', from: { x: 300, y: 300 } },  // bottom right
        { src: '/images/rk.svg', from: { x: 300, y: 300 } },    // bottom right
      ];

   
    return (

        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>



    <Grid container sx={{ justifyContent: 'center' }} mt={20}>
      <Grid size={{ xs: 6, md: 6 }}>
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: img.from.x, y: img.from.y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
          >
            <Box
              component="img"
              src={img.src}
              alt="image"
              sx={{ width: 300, display: 'block', margin: '10px auto' }}
            />
          </motion.div>
        ))}
      </Grid>
    </Grid>

        </>


    )
}

export default About;