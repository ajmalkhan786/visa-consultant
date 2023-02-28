import { AppBar, Box, Button, createTheme, CssBaseline, Drawer, IconButton, List, ListItem, Menu, MenuItem, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style.css'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const drawerWidth = 240

const Layout = (props) => {
    const { mobile } = props
    const[mobileOpen, setMobileOpen] = useState(false)
    const[menu, setMenu] = useState(null)
    const open = Boolean(menu)
    const navigate = useNavigate()
    const handleDrawerToggle = (e) => {
        e.preventDefault()
        setMobileOpen(!mobileOpen)
    }
    const handleMenu = (event) => {
        setMenu(event.currentTarget)
    }
    const handleMenuClose = () => {
        setMenu(null)
    }
    const handleAus = (e) => {
        e.preventDefault()
        navigate('/australia')
    }
    const handleCanada = (e) => {
        e.preventDefault()
        navigate('/canada')
    }
    const handleGermany = (e) => {
        e.preventDefault()
        navigate('/germany')
    }
    const handleNorway= (e) => {
        e.preventDefault()
        navigate('/norway')
    }
    const handleSweden= (e) => {
        e.preventDefault()
        navigate('/sweden')
    }
    const handleUK= (e) => {
        e.preventDefault()
        navigate('/united-kingdom')
    }
    const handleUSA= (e) => {
        e.preventDefault()
        navigate('/usa')
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#e5e5e5', height: '100vh'}}>
            <List>
                <ListItem>
                    <Link to='/' className='textDecoration'>
                        <Typography className='h3 fwb' sx={{px: 2}} color='#000'>Home</Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/services' className='textDecoration'>
                        <Typography className='h3 fwb' sx={{px: 2}} color='#000'>Services</Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/about-us' className='textDecoration'>
                        <Typography className='h3 fwb' sx={{px: 2}} color='#000'>About</Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Button endIcon={<KeyboardArrowDownIcon />}>
                        Destinations
                    </Button>
                </ListItem>
                <ListItem>
                    <Link to='/gallery' className='textDecoration'>
                        <Typography className='h3 fwb' sx={{px: 2}} color='#000'>Gallery</Typography>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/contact-us' className='textDecoration'>
                        <Typography className='h3 fwb' sx={{px: 2}} color='#000'>Contact Us</Typography>
                    </Link>
                </ListItem>
            </List>
        </Box>
    )
    const container = mobile !== undefined ? () => mobile().document.body : undefined
    const theme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            }
        }
    })
  return (
    <Box>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position='sticky' color='primary' sx={{py:1}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                        <Link to='/' className='textDecoration'>
                            <Box className="logo">
                                <img src='/images/logo.png' alt="logo" />
                            </Box>
                        </Link>
                    </Box>
                    <Box sx={{display: {sm:'flex', xs: 'none'}, justifyContent: 'space-between'}} >
                        <Link to='/' className='textDecoration'>
                            <Typography className='h3 fwn' sx={{px: 2, color: '#000', '&:hover': {borderBottom: '2px solid #ff6b06'}}}>Home</Typography>
                        </Link>
                        <Link to='/services' className='textDecoration'>
                            <Typography className='h3 fwn' sx={{px: 2, color: '#000', '&:hover': {borderBottom: '2px solid #ff6b06'}}} color='secondary'>Services</Typography>
                        </Link>
                        <Link to='/about-us' className='textDecoration'>
                            <Typography className='h3 fwn' sx={{px: 2, color: '#000', '&:hover': {borderBottom: '2px solid #ff6b06'}}} color='secondary'>About</Typography>
                        </Link>
                        <Link className='textDecoration'>
                            <Button className='h3 fwn' sx={{px: 2, py: 0, borderRadius: '0px', color: '#000', textTransform: 'capitalize', '&:hover': {borderBottom: '2px solid #ff6b06'}}}
                                id="menu-items"
                                aria-controls={open ? 'menu-dropdown' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleMenu}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Destinations
                            </Button>
                            <Menu
                                id="menu-dropdown"
                                MenuListProps={{
                                  'aria-labelledby': 'menu-items',
                                }}
                                anchorEl={menu}
                                open={open}
                                onClose={handleMenuClose}                        
                            >
                                <MenuItem onClick={handleAus} sx={{px: 4}}>Australia</MenuItem>
                                <MenuItem onClick={handleCanada} sx={{px: 4}}>Canada</MenuItem>
                                <MenuItem onClick={handleGermany} sx={{px: 4}}>Germany</MenuItem>
                                <MenuItem onClick={handleSweden} sx={{px: 4}}>Sweden</MenuItem>
                                <MenuItem onClick={handleNorway} sx={{px: 4}}>Norway</MenuItem>
                                <MenuItem onClick={handleUSA} sx={{px: 4}}>USA</MenuItem>
                                <MenuItem onClick={handleUK} sx={{px: 4}}>UK</MenuItem>
                            </Menu>
                        </Link>
                        <Link to='/gallery' className='textDecoration'>
                            <Typography className='h3 fwn' sx={{px: 2, color: '#000', '&:hover': {borderBottom: '2px solid #ff6b06'}}} color='secondary'>Gallery</Typography>
                        </Link>
                        <Link to='/contact-us' className='textDecoration'>
                            <Typography className='h3 fwn' sx={{px: 2, color: '#000', '&:hover': {borderBottom: '2px solid #ff6b06'}}} color='secondary'>Contact</Typography>
                        </Link>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none'}}}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer 
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{backgroundColor: '#e5e5e5', overflow: 'hidden'}}>
                {props.children}
            </Box>
            <Box sx={{ backgroundColor: '#fff', borderTop: '5px solid #ff6b06'}}>
                <Box display='flex' justifyContent='center' alignItems='center' sx={{p: 3}}>
                    {/* <Link>
                        <Box className="logo">
                            <img src='/images/logo.png' alt="logo" />
                        </Box>
                    </Link> */}
                    <Typography className='h3 fwn' sx={{color: '#000' }}>
                        Talk to us analyze your needs and to make you aware of the best solutions.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    </Box>
  )
}

export default Layout