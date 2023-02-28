import { Box, Button, Container, Grid, Typography } from '@mui/material'
// import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import React from 'react'
import Layout from './Layout'
import '../style.css'
import { Link } from 'react-router-dom';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <Layout>
        <Box sx={{display: {xs: 'none', sm: 'block'}, backgroundColor: '#fff'}}>
            <Carousel autoPlay={true} autoFocus={false} stopOnHover={false} infiniteLoop={true} showArrows={false} showThumbs={false} showIndicators={false} showStatus={false}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <AnimatedOnScroll animationIn='fadeIn'>
                            <Container sx={{textAlign: 'left'}}>
                                <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                    WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                                </Typography>
                                <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>Australia</strong></Typography>
                                <Typography className='h3 fwn'>
                                    Studying in Australia is a great way to experience the unique Aussie lifestyle while gaining great new skills. Australia has world class universities, practical vocational colleges and outstanding English language schools to support international students.
                                </Typography>
                                <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                    Read more
                                </Button>
                            </Container>
                        </AnimatedOnScroll>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/australia.jpg' alt='aus' />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <Container sx={{textAlign: 'left'}}>
                            <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                            </Typography>
                            <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>Canada</strong></Typography>
                            <Typography className='h3 fwn'>
                                Canada offers a lucrative environment to foreign students. It welcomes more than 350,000 students from foreign jurisdictions each year.If you intend to study at a Canadian educational institution, most foreign nationals must apply for a study permit.
                            </Typography>
                            <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                Read more
                            </Button>
                        </Container>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/canada.jpg' alt='aus' />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <Container sx={{textAlign: 'left'}}>
                            <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                            </Typography>
                            <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>UK</strong></Typography>
                            <Typography className='h3 fwn'>
                                The UK is one of the world’s most popular destinations to study higher education, with more than 500,000 international students enrolling each year - offering world-class teaching, and a great place to live, leaving you ready for the global workplace.
                            </Typography>
                            <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                Read more
                            </Button>
                        </Container>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/uk.jpg' alt='aus' />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <Container sx={{textAlign: 'left'}}>
                            <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                            </Typography>
                            <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>Sweden</strong></Typography>
                            <Typography className='h3 fwn'>
                                Sweden places great importance on its education system. As a whole, the country promotes equality regardless of gender or social status. Sweden also encourages innovation and creativity across all fields, and has its sights set on being a leading country in research.
                            </Typography>
                            <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                Read more
                            </Button>
                        </Container>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/sweden.jpg' alt='aus' />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <Container sx={{textAlign: 'left'}}>
                            <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                            </Typography>
                            <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>Norway</strong></Typography>
                            <Typography className='h3 fwn'>
                                Norway boasts some of the best schools and higher education in the world. Attending public universities in this country is tuition free even for international students.This is because Norway believes that everyone should have access to education regardless of socio-economic background.
                            </Typography>
                            <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                Read more
                            </Button>
                        </Container>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/norway.jpg' alt='aus' />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <Container sx={{textAlign: 'left'}}>
                            <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                            </Typography>
                            <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>USA</strong></Typography>
                            <Typography className='h3 fwn'>
                                The USA education system is good. The education system in US is considered the superior system in the world. This is because they offer a rich and wide range of choices for international students. The most enticing attribute of the US education system is its versatility.
                            </Typography>
                            <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                Read more
                            </Button>
                        </Container>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/germany.jpg' alt='aus' />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{width: '50%', px: 3}}>
                        <Container sx={{textAlign: 'left', pt: 4}}>
                            <Typography className='f3 fwn' sx={{color: '#ff6b06', opacity: '0.5'}}>
                                WELCOME TO RIGHT CHOICE OVERSEAS CONSULTANT
                            </Typography>
                            <Typography className='h1 fwn' sx={{py: 3}}>Study in <strong>Germany</strong></Typography>
                            <Typography className='h3 fwn'>
                                Germany is known around the world for providing excellent education and offering plenty of courses. The German higher education system is well known for high standards and enjoys a good reputation.
                            </Typography>
                            <Button className='h3 fwn' sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', color: '#000', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                                Read more
                            </Button>
                        </Container>
                    </Box>
                    <Box sx={{width: '50%'}} className='slider-img'>
                        <img src='/images/germany.jpg' alt='aus' />
                    </Box>
                </Box>
            </Carousel>
        </Box>
        <Container sx={{pt: 7, pb: 4}}>
            <Typography className='h3 fwb' sx={{color: '#000', textAlign: 'center'}}>
                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        Our consulting services are based on international best practice and concepts.
                </AnimatedOnScroll>
            </Typography>
            <Typography className='h1 fwb' sx={{color: '#000', textAlign: 'center'}}>
                <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                    WHAT WE DO
                </AnimatedOnScroll>
            </Typography>
            <Typography className='h3 fwn' sx={{color: '#000', textAlign: 'center', width: {xs: '100%', lg: '50%'}, mx: 'auto'}}>
                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                    We demonstrate our commitment to the client through tailored training for each entity. We also have contact with universities and colleges in abroad.<br></br>We endeavor to work with start-up transforming, growing and established entities in strategy, implementation, strengthening systems and process building capacity and competencies.
                </AnimatedOnScroll>
            </Typography>
            <Box sx={{borderBottom: '3px solid #ff6b06', width: '60px', mx: 'auto', mt: 1}}></Box>
            {/* <Grid container spacing={2} sx={{mt: 4, pb: 6, justifyContent: 'center'}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/studyAbroad.jpg" alt="australia" className='bg-img' />
                        <Box sx={{color: '#fff', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.7', width: '100%', textAlign: 'center'}}>
                            <Typography className='h1 fwb' sx={{textTransform: 'uppercase'}}>
                                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                    study abroad
                                </AnimatedOnScroll>
                            </Typography>
                            <Typography sx={{color: '#ffffff'}} className='h3 fwb'>
                                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                                    {"Get an International Degree from World's top universities"}
                                </AnimatedOnScroll>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/career.jpg" alt="australia" className='bg-img' />
                        <Box sx={{color: '#fff', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.7', width: '100%', textAlign: 'center'}}>
                            <Typography className='h1 fwb' sx={{textTransform: 'uppercase'}}>
                                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                    Career Counseling
                                </AnimatedOnScroll>
                            </Typography>
                            <Typography sx={{color: '#ffffff'}} className='h3 fwb'>
                                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                                    {"Get an International Degree from World's top universities"}
                                </AnimatedOnScroll>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/visa-asstnt.jpg" alt="australia" className='bg-img' />
                        <Box sx={{color: '#fff', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.7', width: '100%', textAlign: 'center'}}>
                            <Typography className='h1 fwb' sx={{textTransform: 'uppercase'}}>
                                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                    Visa Assistant
                                </AnimatedOnScroll>
                            </Typography>
                            <Typography sx={{color: '#ffffff'}} className='h3 fwb animation'>
                                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                                    {"Get best visa assistance for all sort of travel"}
                                </AnimatedOnScroll>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/travel.jpg" alt="australia" className='bg-img' />
                        <Box sx={{color: '#fff', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.7', width: '100%', textAlign: 'center'}}>
                            <Typography className='h1 fwb' sx={{textTransform: 'uppercase'}}>
                                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                    Travel Insurance
                                </AnimatedOnScroll>
                            </Typography>
                            <Typography sx={{color: '#ffffff'}} className='h3 fwb'>
                                <AnimatedOnScroll animationIn="zoomIn" className='animation'>
                                    Offering Top Rated Travel Insurance Plans For Every Type of Traveler
                                </AnimatedOnScroll>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/IELTS.jpg" alt="australia" className='bg-img' />
                        <Box sx={{color: '#fff', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.7', width: '100%', textAlign: 'center'}}>
                            <Typography className='h1 fwb' sx={{textTransform: 'uppercase'}}>
                                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                    IELTS/PTE Coaching
                                </AnimatedOnScroll>
                            </Typography>
                            <Typography sx={{color: '#ffffff'}} className='h3 fwb'>
                                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                    Join our IELTS/PTE course and start building your career
                                </AnimatedOnScroll>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid> */}
        </Container>
        <Box sx={{py: 5, backgroundColor: '#fff'}}>
          <Container>
            <Grid container spacing={2} alignItems='center'>
              <Grid item md={5} xs={12}>
                <Box className='about-img'>
                    <img src="/images/mission.jpg" alt="about" />
                </Box>
              </Grid>
              <Grid item md={7} xs={12}>
                <Box sx={{textAlign: 'center'}}>
                    <Typography className='h1 fwb' sx={{color: '#000', pb: 3}}>
                        <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                            HOW WE WORK WITH YOU
                        </AnimatedOnScroll>
                    </Typography>
                </Box>
                <Typography className='h2 fwb' sx={{color: '#000', textTransform: 'uppercase', pt: 3}}>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        We do the hard work
                    </AnimatedOnScroll>
                </Typography>
                <Typography sx={{color: '#000', textAlign: 'justify'}} className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        We work with you to design tailored solution that meets the goals with respect to your  culture, discourse and budget   
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h2 fwb' sx={{color: '#000', textTransform: 'uppercase', pt: 3}}>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        You tell us your preferences
                    </AnimatedOnScroll>
                </Typography>
                <Typography sx={{color: '#000', textAlign: 'justify'}} className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        Via our given telephone numbers or one on one meeting.   
                    </AnimatedOnScroll>
                </Typography>
                <Typography className='h2 fwb' sx={{color: '#000', textTransform: 'uppercase', pt: 3}}>
                    <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                        You get peace of mind
                    </AnimatedOnScroll>
                </Typography>
                <Typography sx={{color: '#000', textAlign: 'justify'}} className='h3 fwn'>
                    <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                        When we associate with you our sustainable solutions ensure you are equipped with appropriate skills and resources to get desired visa.We hold ourselves to high standards of performance and service. Therefore, we welcome your feedback at any stage of our consulting engagement.
                        We remain in contact till arrival at your demanding destination.We also offer voluntary training for IELTS and PTE test before process of visa application.We educate our clients who wish to study abroad prior to joining institutions of higher education.    
                    </AnimatedOnScroll>
                </Typography>
                <Button sx={{backgroundColor: '#ff6b06', margin: '20px 0', padding: '16px 25px', borderRadius: '40px', '&:hover': {backgroundColor: '#ff6b06', opacity: '0.7'}}}>
                    <Link to='/about-us' className='h3 fwn textDecoration white'>
                        Read more
                    </Link>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* <Container sx={{py: 4}}>
            <Typography className='h4 fwn' sx={{color: '#ff6b06', textAlign: 'center'}}>
                <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                    COUNTRIES WE OFFER SUPPORT
                </AnimatedOnScroll>
            </Typography>
            <Typography className='h1 fwb' sx={{color: '#000', textAlign: 'center'}}>
                <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                    Immigration & Visa Services <br></br> Following Countries
                </AnimatedOnScroll>
            </Typography>
            <Box sx={{borderBottom: '3px solid #ff6b06', width: '60px', mx: 'auto', mt: 1}}></Box>
            <Grid container spacing={2} sx={{mt: 4, pb: 6, justifyContent: 'center'}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                        <img src="/images/australia.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                australia
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/canada.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                canada
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/sweden.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                sweden
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/norway.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                norway
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/usa.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                usa
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/germany.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                germany
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box sx={{position: 'relative'}}>
                            <img src="/images/uk.jpg" alt="australia" className='bg-img' />
                        <Typography sx={{color: '#fff', py: 2, textTransform: 'uppercase', position: 'absolute', top: '35%', backgroundColor: '#000', opacity: '0.6', letterSpacing: 20, width: '100%', textAlign: 'center'}} className='h1 fwb'>
                            <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                                united kingdom
                            </AnimatedOnScroll>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container> */}
        <Box sx={{py: 5}}>
            <Container>
                <Box textAlign='center'>
                    <Typography className='h1 fwb' sx={{color: '#000'}}>
                        <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                            OUR TEAM
                        </AnimatedOnScroll>
                    </Typography>
                </Box>
                <Box sx={{mt: 4, pb: 6, display: {sm:'flex', xs: 'block'}, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{textAlign: {xs: 'center'}}}>
                        <img src="/images/image-000.jpg" alt="irfan" className='profile-img' />
                        <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                            <Typography sx={{color: '#000', py: 2, textTransform: 'uppercase', textAlign: 'center'}} className='h3 fwb'>
                                Mr. Irfan Farooq 
                                <Typography className='fwn'>C.E.O</Typography>
                            </Typography>
                        </AnimatedOnScroll>
                    </Box>
                    <Box sx={{textAlign: {xs: 'center'}}}>
                        <img src="/images/image-001.jpg" alt="imran" className='profile-img' />
                        <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                            <Typography sx={{color: '#000', py: 2, textTransform: 'uppercase', textAlign: 'center'}} className='h3 fwb'>
                                Mr.Imran Farooq
                                <Typography className='fwn' textTransform='capitalize'>Senior Student Consultant</Typography>
                            </Typography>
                        </AnimatedOnScroll>
                    </Box>
                    <Box sx={{textAlign: {xs: 'center'}}}>
                        <img src="/images/image-002.jpg" alt="irfan-arshad" className='profile-img' />
                        <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                            <Typography sx={{color: '#000', py: 2, textTransform: 'uppercase', textAlign: 'center'}} className='h3 fwb'>
                                Irfan Arshad
                                <Typography className='fwn' textTransform='capitalize'>Student Counseling Officer</Typography>
                            </Typography>
                        </AnimatedOnScroll>
                    </Box>
                    <Box sx={{textAlign: {xs: 'center'}}}>
                        <img src="/images/image-004.jpg" alt="adnan" className='profile-img' />
                        <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                            <Typography sx={{color: '#000', py: 2, textTransform: 'uppercase', textAlign: 'center'}} className='h3 fwb'>
                                Muhammad Adnan
                                <Typography className='fwn' textTransform='capitalize'>Admission Officer</Typography>
                            </Typography>
                        </AnimatedOnScroll>
                    </Box>
                    <Box sx={{textAlign: {xs: 'center'}}}>
                            <img src="/images/image-003.jpg" alt="shaukat" className='profile-img' />
                        <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                            <Typography sx={{color: '#000', py: 2, textTransform: 'uppercase', textAlign: 'center'}} className='h3 fwb'>
                                Shaukat Ali
                                <Typography className='fwn' textTransform='capitalize'>Accounts Officer</Typography>
                            </Typography>
                        </AnimatedOnScroll>
                    </Box>
                </Box>
            </Container>
        </Box>
        {/* <Container sx={{py: 5}}>
            <Typography className='h1 fwb'>
                <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                    Why Right Choice Overseas Consultants?
                </AnimatedOnScroll>
            </Typography>
            <Typography className='h3 fwn'>
                <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                    It is quite clear that during the processing of a visa-submission, even a minor error could prove costly; lead to long delays, or at times, even destroy one’s visa dream eternally, leave aside the ensuing disappointment it could eventually lead to. At Way to <strong>Right Choice Overseas Consultants</strong>, we value the valuable investment of time, efforts & funds that you make even as we do our best to guarantee that your specific case is presented in the best possible way, before the concerned immigration bodies, to reduce the visa-submission mistakes, if any. <br></br> <br></br>
                    Further, our expert officers keep a hawk’s eye on the relevant updates among other changes made in the immigration & visa prerequisites of the many overseas hotspots. We do this so that we can help you in the best possible way and keep you in sync with the changing times. <br></br> <br></br>
                    We do have following staff that ensures best concrete efforts for finalization of Student Admission and Visa process:-
                </AnimatedOnScroll>
            </Typography>
            <Typography className='h3 fwn'>
                <List>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Knowledgeable staff</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Full-fledged web operations</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>increasing efficiency of operations</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Immediate response to client needs</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Friendly, caring and efficient workers</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Expertise and experience</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Good rate of success in all cases filed</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Going the extra mile to satisfy the clients</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Highly automated and computerized systems</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Back-up system in place for all documentation</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>A Fully responsive marketing department capable of handling each client’s unique needs</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Client’s confidentiality and interest is protected at any cost</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Comprehensive information and documentations for the benefit of our clients</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeInLeft">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Ability to submit documents at our main office, thus reducing overhead costs and increasing efficiency of operations</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeInRight">
                        <ListItem sx={{py: 0}}>
                            <ListItemIcon><CircleOutlinedIcon fontSize='10px' /></ListItemIcon>
                            <ListItemText>Case management system that not only makes each staff member responsible for every action, but also smoothens the communication lines between the firm and each client</ListItemText>
                        </ListItem>
                    </AnimatedOnScroll>
                </List>
            </Typography>
        </Container> */}
    </Layout>
  )
}

export default Home