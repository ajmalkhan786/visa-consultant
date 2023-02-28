import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Layout from './Layout'
import '../style.css'
import {AnimatedOnScroll} from 'react-animated-css-onscroll'
import CircleIcon from '@mui/icons-material/Circle'

const Germany = () => {
  return (
    <Layout>
      <Box sx={{position: 'relative'}}>
        <Box className='top-img'>
            <img src='/images/germany.jpg' alt='about' className='service' />
        </Box>
        <Typography sx={{color: '#000', position: 'absolute', top: '40%', width: '100%', textAlign: 'center', letterSpacing: 5}} className='h1 fwb'>
          Study in Germany
        </Typography>
      </Box>
      <Container sx={{py: 4}}>
        <Typography className='h1 fwb' sx={{color: '#ff6b06', py: 3}}>
          <AnimatedOnScroll animationIn="zoomIn" className='animation'>
            Study in Germany
          </AnimatedOnScroll>
        </Typography>
        <Typography className='h3 fwn'>
          <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
            Germany is known around the world for providing excellent education and offering plenty of courses. The German higher education system is well known for high standards and enjoys a good reputation.
          </AnimatedOnScroll>
        </Typography>
        {/* <Grid container spacing={2} sx={{ pt: 4}}>
          <Grid item md={4} sm={6} xs={12} sx={{pl: 0}}>
            <Box sx={{boxShadow: '1px 1px 10px 1px #888888', p: 3, backgroundColor: '#fff'}}>
              <Container sx={{backgroundColor: '#ff6b06', color: '#fff', py: 1, borderRadius: '10px'}}>
                <Typography className='h2 fwb'>Why Study In Germany</Typography>
              </Container>
              <Container className='padding'>
                <List>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>  
                    <ListItem sx={{py: 0}}>
                      <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                      <ListItemText>
                        <Typography sx={{fontSize: '14px'}}>Globally-recognised Courses and Qualifications</Typography>                          
                      </ListItemText>
                    </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Dynamic and Progressive Education Programs</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>A Relaxed, Enjoyable and Safe lifestyle</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Cheaper Study and Living Expenses as Compared to Many other Countries</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Vibrant, Appealing and Multicultural Cities</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Amazing and Diverse Landscapes</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                </List>
              </Container>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{pl: 0}}>
            <Box sx={{boxShadow: '1px 1px 10px 1px #888888', p: 3, backgroundColor: '#fff'}}>
              <Container sx={{backgroundColor: '#ff6b06', color: '#fff', py: 1, borderRadius: '10px'}}>
                <Typography className='h2 fwb'>Requirements to Study</Typography>
              </Container>
                <Container className='padding'>
                <List>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Confirmation Of Enrolment (COE)</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Genuine Temporary Entrant (GTE)</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Financial Requirements</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>English Proficiency Requirement</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Overseas Student Health Cover (OSHC)</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Cost of annual living amounts</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                </List>
              </Container>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{pl: 0}}>
            <Box sx={{boxShadow: '1px 1px 10px 1px #888888', p: 3, backgroundColor: '#fff'}}>
              <Container sx={{backgroundColor: '#ff6b06', color: '#fff', py: 1, borderRadius: '10px'}}>
                <Typography className='h2 fwb'>Top German</Typography>
              </Container>
              <Container className='padding'>
                <List>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Australian National University (ANU)</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>University of Melbourne</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>University of New South Wales (UNSW)</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>University of Queensland (UQ)</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInLeft" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>University of Sydney</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                  <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                      <ListItem sx={{py: 0}}>
                        <ListItemIcon sx={{minWidth: '20px'}}><CircleIcon sx={{width: '10px', height: '10px'}} /></ListItemIcon>
                        <ListItemText>
                          <Typography sx={{fontSize: '14px'}}>Monash University</Typography>                          
                        </ListItemText>
                      </ListItem>
                  </AnimatedOnScroll>
                </List>
              </Container>
            </Box>
          </Grid>
        </Grid> */}
      </Container>
      <Box sx={{py: 3, backgroundColor: '#fff'}}>
        <Container>
          <Typography className='h1 fwb' sx={{color: '#ff6b06', py: 3}}>
            <AnimatedOnScroll animationIn="zoomIn" className='animation'>
              Estimated Tution Fees
            </AnimatedOnScroll>
          </Typography>
          <Typography className='h3 fwn'>
            <AnimatedOnScroll animationIn="fadeInRight" className='animation'>
                Germany is known around the world for providing excellent education and offering plenty of courses. The German higher education system is well known for high standards and enjoys a good reputation.
              </AnimatedOnScroll>
            </Typography>
        </Container>
      </Box>
    </Layout>
  )
}

export default Germany