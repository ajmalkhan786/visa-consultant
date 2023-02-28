import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import Layout from './Layout'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../style.css'

const Services = () => {
    const[study, setStudy] = useState(true)
    const[career, setCareer] = useState(false)
    const[visa, setVisa] = useState(false)
    const[travel, setTravel] = useState(false)
    const[pte, setPte] = useState(false)
    const handleStudy = () => {
        setStudy(true)
        setCareer(false)
        setVisa(false)
        setTravel(false)
        setPte(false)
    }
    const handleCareer = () => {
        setCareer(true)
        setStudy(false)
        setVisa(false)
        setTravel(false)
        setPte(false)
    }
    const handleVisa = () => {
        setCareer(false)
        setStudy(false)
        setVisa(true)
        setTravel(false)
        setPte(false)
    }
    const handleTravel = () => {
        setCareer(false)
        setStudy(false)
        setVisa(false)
        setTravel(true)
        setPte(false)
    }
    const handlePte = () => {
        setCareer(false)
        setStudy(false)
        setVisa(false)
        setTravel(false)
        setPte(true)
    }
    useEffect(() => {
    }, [study, career, visa, travel, pte])
    
  return (
    <Layout>
        <Box className='top-img'>
            <img src='/images/service.jpg' alt='about' className='service' />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff'}}>
            <Container sx={{width: {xs: '100px', sm: '400px'}, backgroundColor: '#ff6b06', py: 4}}>
                <List>
                    <ListItem onClick={handleStudy}>
                        <ListItemButton onClick={handleCareer}>
                            <ListItemIcon>
                                <SchoolIcon sx={{color: '#fff'}} />
                            </ListItemIcon>
                            <ListItemText sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Typography className={study ? 'h3 fwb' : 'h3 fwn'} sx={{color: '#fff'}}>
                                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                        Study Abroad
                                    </AnimatedOnScroll>
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={handleCareer}>
                            <ListItemIcon>
                                <Diversity3Icon sx={{color: '#fff'}} />
                            </ListItemIcon>
                            <ListItemText sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Typography className={career ? 'h3 fwb' : 'h3 fwn'} sx={{color: '#fff'}}>
                                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                        Career Counseling
                                    </AnimatedOnScroll>
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={handleVisa}>
                            <ListItemIcon>
                                <PublicIcon sx={{color: '#fff'}} />
                            </ListItemIcon>
                            <ListItemText sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Typography className={visa ? 'h3 fwb' : 'h3 fwn'} sx={{color: '#fff'}}>
                                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                        Visa Assistant
                                    </AnimatedOnScroll>
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem> 
                        <ListItemButton onClick={handleTravel}>
                            <ListItemIcon>
                                <FlightTakeoffIcon sx={{color: '#fff'}} />
                            </ListItemIcon>
                            <ListItemText sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Typography className={travel ? 'h3 fwb' : 'h3 fwn'} sx={{color: '#fff'}}>
                                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                        Travel Insurance
                                    </AnimatedOnScroll>
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton onClick={handlePte}>
                            <ListItemIcon>
                                <AutoStoriesIcon sx={{color: '#fff'}} />
                            </ListItemIcon>
                            <ListItemText sx={{display: {xs: 'none', sm: 'block'}}}>
                                <Typography className={pte ? 'h3 fwb' : 'h3 fwn'} sx={{color: '#fff', pl: 2}}>
                                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                        IELTS/PTE Coaching
                                    </AnimatedOnScroll>
                                </Typography>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Container>
            {study && <Container sx={{py: 4}}>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                    <SchoolIcon sx={{color: '#ff6b06', fontSize: '60px'}} />
                </AnimatedOnScroll>
                <Typography className='h2 fwn' sx={{py: 2}}>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Study Abroad
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our team at Right Choice Consultancy provides free no obligation career counseling because we know it is important and is in the best interest of our clients for them to know options available to them. <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Our counselors and directors are well versed with various courses and country options and their visa requirements. It means you can trust that the advice and career counseling provided to you is coming from some reliable sources. We take career counseling seriously as we understand may be its our day to day task but for you it is a life changing event.
                        <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our Counselors get regular training from various university representatives about their offerings and requirements.
                    </AnimatedOnScroll>
                </Typography>
            </Container>}
            {career && <Container sx={{py: 4}}>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                    <Diversity3Icon sx={{color: '#ff6b06', fontSize: '60px'}} />
                </AnimatedOnScroll>
                <Typography className='h2 fwn' sx={{py: 2}}>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Career Counsling
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our team at Right Choice Consultancy provides free no obligation career counseling because we know it is important and is in the best interest of our clients for them to know options available to them. <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Our counselors and directors are well versed with various courses and country options and their visa requirements. It means you can trust that the advice and career counseling provided to you is coming from some reliable sources. We take career counseling seriously as we understand may be its our day to day task but for you it is a life changing event.
                        <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our Counselors get regular training from various university representatives about their offerings and requirements.
                    </AnimatedOnScroll>
                </Typography>
            </Container>}
            {visa && <Container sx={{py: 4}}>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                    <PublicIcon sx={{color: '#ff6b06', fontSize: '60px'}} />
                </AnimatedOnScroll>
                <Typography className='h2 fwn' sx={{py: 2}}>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Visa Assistant
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our team at Right Choice Consultancy provides free no obligation career counseling because we know it is important and is in the best interest of our clients for them to know options available to them. <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Our counselors and directors are well versed with various courses and country options and their visa requirements. It means you can trust that the advice and career counseling provided to you is coming from some reliable sources. We take career counseling seriously as we understand may be its our day to day task but for you it is a life changing event.
                        <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our Counselors get regular training from various university representatives about their offerings and requirements.
                    </AnimatedOnScroll>
                </Typography>
            </Container>}
            {travel && <Container sx={{py: 4}}>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                    <FlightTakeoffIcon sx={{color: '#ff6b06', fontSize: '60px'}} />
                </AnimatedOnScroll>
                <Typography className='h2 fwn' sx={{py: 2}}>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Travel Insurance
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our team at Right Choice Consultancy provides free no obligation career counseling because we know it is important and is in the best interest of our clients for them to know options available to them. <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Our counselors and directors are well versed with various courses and country options and their visa requirements. It means you can trust that the advice and career counseling provided to you is coming from some reliable sources. We take career counseling seriously as we understand may be its our day to day task but for you it is a life changing event.
                        <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our Counselors get regular training from various university representatives about their offerings and requirements.
                    </AnimatedOnScroll>
                </Typography>
            </Container>}
            {pte && <Container sx={{py: 4}}>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                    <AutoStoriesIcon sx={{color: '#ff6b06', fontSize: '60px'}} />
                </AnimatedOnScroll>
                <Typography className='h2 fwn' sx={{py: 2}}>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        IELTS/PTE Coaching
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our team at Right Choice Consultancy provides free no obligation career counseling because we know it is important and is in the best interest of our clients for them to know options available to them. <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Our counselors and directors are well versed with various courses and country options and their visa requirements. It means you can trust that the advice and career counseling provided to you is coming from some reliable sources. We take career counseling seriously as we understand may be its our day to day task but for you it is a life changing event.
                        <br></br> <br></br>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our Counselors get regular training from various university representatives about their offerings and requirements.
                    </AnimatedOnScroll>
                </Typography>
            </Container>}
        </Box>
    </Layout>
  )
}

export default Services