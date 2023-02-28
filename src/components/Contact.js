import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from './Layout'
import PhoneIcon from '@mui/icons-material/Phone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailIcon from '@mui/icons-material/Email';
import '../style.css'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

const Contact = () => {
  return (
    <Layout>
        <Box className='top-img'>
            <img src='/images/contact-us.jpg' alt='about' className='contact-us' />
        </Box>
        <Container sx={{py: 7}}>
            <Typography className='h1 fwb'>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>CONTACT US</AnimatedOnScroll>
            </Typography>
            <Grid container spacing={2} sx={{pt: 5}}>
                <Grid item md={6} xs={12}>
                    <Typography className='h2 fwb'>
                        <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>OFFICE ADDRESS</AnimatedOnScroll>
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                                <HomeOutlinedIcon sx={{color: '#ff6b06', mr: 1, mt: 1, fontSize: '35px'}} />
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                                Right Choice Overseas Consultants, 2nd Floor Tehreem Plaza, Khushali Bank, Phalia Road,Mandi Bahauddin
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={2}></Grid>
                <Grid item md={4} xs={12}>
                    <Typography className='h2 fwb'>
                        <AnimatedOnScroll animationIn="zoomIn" className='animation'>CONTACT DETAILS</AnimatedOnScroll>
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                                <PhoneIcon sx={{color: '#ff6b06', mr: 1, mt: 1}} />
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                                0330-9993000 | 0330-9992000
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                                <EmailIcon sx={{color: '#ff6b06', mr: 1, mt: 1}} />
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                                info@rcoconsultants.com
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Layout>
  )
}

export default Contact