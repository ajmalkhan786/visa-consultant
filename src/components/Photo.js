import React from 'react'
import Layout from './Layout'
import {Container, Grid, Box, Typography} from '@mui/material'

const Photo = () => {
  return (
    <Layout>
        <Container sx={{py: 7}}>
            <Box textAlign='center'>
                <Typography className='h1 fwb'>GALLERY</Typography>
            </Box>
            <Box sx={{borderBottom: '3px solid #ff6b06', width: '60px', mx: 'auto', mt: 1}}></Box>
            <Grid container spacing={2} sx={{pt: 2}}>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-1.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-2.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-3.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-4.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-5.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-6.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-7.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-9.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-10.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-11.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-12.jpg' alt='gallery' />
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Box className='gallery-img'>
                        <img src='/images/photo-13.jpg' alt='gallery' />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Layout>
  )
}

export default Photo