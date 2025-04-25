import { Box, Button, Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {

    return (
        <>
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                <Navbar />
            </div>

            <Grid container mt={16} sx={{display:'flex', justifyContent: 'center', alignItems:'center'}} spacing={0}>

                {/* Left Grid */}
                <Grid item size={{ xs: 12, md: 3 }} >
                    <Typography variant="h4" fontWeight="bold" sx={{color:'#92969C'}}>Frequently Asked Questions</Typography> <br />
                    <Typography variant="h6"  sx={{color:'#92969C'}}>Clear your doubts</Typography>
                </Grid>

                {/* Right Grid */}
                <Grid item size={{ xs: 12, md: 8 }} p={10} >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            
                            sx={{
                                borderBottom: '1px solid #333', // Darker border color
                            }}
                        >
                            <Typography variant="h6" sx={{color:'red', fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus.  Vivamus in ante sed libero feugiat  fermentum.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{
                                borderBottom: '1px solid #333', // Darker border color
                            }}
                        >
                            <Typography variant="h6" sx={{color:'red',fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus.  Vivamus in ante sed libero feugiat  fermentum.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            sx={{
                                borderBottom: '1px solid #333', // Darker border color
                            }}
                        >
                            <Typography variant="h6" sx={{color:'red',fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus.  Vivamus in ante sed libero feugiat  fermentum.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                            sx={{
                                borderBottom: '1px solid #333', // Darker border color
                            }}
                        >
                            <Typography variant="h6"sx={{color:'red',fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus.  Vivamus in ante sed libero feugiat  fermentum.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                            sx={{
                                borderBottom: '1px solid #333', // Darker border color
                            }}
                        >
                            <Typography variant="h6" sx={{color:'red',fontSize:'17px'}}>Lorem ipsum dolor sit amet, consectetur?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus.  Vivamus in ante sed libero feugiat  fermentum.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </>
    );
};

export default Faq;
