import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Layout from './Layout'
import '../style.css'
import { Container } from '@mui/system'
import {AnimatedOnScroll} from "react-animated-css-onscroll";

const About = () => {
  return (
    <Layout>
        <Box className='top-img'>
            <img src='/images/about-us.jpg' alt='about' className='about-us' />
        </Box>
        <Container sx={{py: 7}}>
            <Grid container spacing={2} alignItems='center'>
                <Grid item md={6} xs={12}>
                    <Typography className='h1 fwb' sx={{pb: 4}}>
                        <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                            ABOUT US
                        </AnimatedOnScroll>
                    </Typography>
                    <Typography className='h3 fwn'>
                        <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                            Right Choice Overseas Consultant is best visa assistance service providers in Pakistan. Efficiently operational in visa services specially student visa consultancy, by rightly consulting a student and traveller in terms of visa facilitation/documentation. Right Choice Overseas Consultant is forward thinking, energetic and dynamic firm, serving the clients at the best level. The tedious process to apply for admissions and visas is been rightly assisted and facilitated, driven by a team of counseling experts. <br></br> <br></br>
                            Through our dedicated commitment, we have made our reputation of being reliable and most assured Student Visa consultancy in Mandi Baha ud Din. Our fair-minded and straight forward advice in admissions and visa related requirements and visa information serves best on the grounds of experience in visa consultancy for more than 4 years.Our expertise makes a difference.
                        </AnimatedOnScroll>
                    </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box className='about-img'>
                        <img src="/images/about.jpg" alt="about" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Box sx={{py: 7, backgroundColor: '#fff'}}>
            <Container>
                <Grid container spacing={2} alignItems='center'>
                    <Grid item md={6} xs={12}>
                        <Box className='about-img'>
                            <img src="/images/mv.jpg" alt="about" />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{color: '#000'}}>
                        <Typography className='h1 fwb' sx={{textTransform: 'uppercase', pb: 4}}>
                            <AnimatedOnScroll animationIn="zoomIn" className='animation'>Mission / Vision</AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn='fadeInRight' className='animation'>
                                Endeavoring to become the global leader in Admission and Visa processing. Be the reliable overseas Student visa consultancy by achieving extraordinary results for our clients and earning a fair return on the value we deliver.
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h2 fwb' sx={{textTransform: 'uppercase', pt: 3}}>
                            <AnimatedOnScroll animationIn='zoomIn' className='animation'>
                                Innovation
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn='fadeInLeft' className='animation'>
                                We at Right Choice Overseas Consultant are in the constant process of remodeling and reviving ourselves, incorporating the best of traditional values as well as new trends.
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h2 fwb' sx={{textTransform: 'uppercase', pt: 3}}>
                            <AnimatedOnScroll animationIn='zoomIn' className='animation'>
                                Integrity
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn='fadeInRight' className='animation'>
                                We believe in all for one and one for all. We are one big consistent and trustworthy team, functioning equitably.
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h2 fwb' sx={{textTransform: 'uppercase', pt: 3}}>
                            <AnimatedOnScroll animationIn='zoomIn' className='animation'>
                                Customer First
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn='fadeInLeft' className='animation'>
                                Clients may forget what you said but not how you made them feel. Thus, we put our clients above everything. We put our best ambulate when it comes to providing you with quality service. That is what we best.                        
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h2 fwb' sx={{textTransform: 'uppercase', pt: 3}}>
                            <AnimatedOnScroll animationIn='zoomIn' className='animation'>
                                Excellence
                            </AnimatedOnScroll>
                        </Typography>
                        <Typography className='h3 fwn'>
                            <AnimatedOnScroll animationIn='fadeInRight' className='animation'>
                                Achieving excellence is never easy to do, when you visit Right Choice Overseas Consultants, we ensure delivering what is promised and dealing well with any problems and queries that arise from clients.
                            </AnimatedOnScroll>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Container sx={{py: 7}}>
            <Grid container spacing={2} alignItems='center'>
                <Grid item md={6} xs={12}>
                    <Typography className='h1 fwb'>
                        <AnimatedOnScroll animationIn='zoomIn' className='animation'>
                            PRINCIPLES
                        </AnimatedOnScroll>
                    </Typography>
                    <Typography className='h3 fwn'>
                        <AnimatedOnScroll animationIn='fadeInRight' className='animation'>
                            The leading basic principle of Right Choice Overseas Consultants is placing emphasis as the most important are mutual confidence, respect and transparency. In ordinate importance regarding entertainment of client for required services.We want to satisfy our clients, employees, owners and community in all equal measures. In each of course sectors of activity we are leaders on a company scale, in terms of counseling and execution. We strive to achieve continuous growth in our field.In ordinate importance regarding entertainment of students for required services whether large and small is impressed upon all the incumbent staff.
                        </AnimatedOnScroll>
                    </Typography>
                    <Typography className='h1 fwb' sx={{pt: 3}}>
                        <AnimatedOnScroll animationIn='zoomIn' className='animation'>
                            VALUES
                        </AnimatedOnScroll>
                    </Typography>
                    <Typography className='h3 fwn'>
                        <AnimatedOnScroll animationIn='fadeInLeft' className='animation'>
                            Everything we undertake is premised on reliability, professionalism, transparency, commitment and efficiency.
                        </AnimatedOnScroll>
                    </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box className='about-img'>
                        <img src="/images/values.jpg" alt="about" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Layout>
  )
}

export default About