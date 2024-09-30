import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box, Grid, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'New Page', path: '/new-page' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
];

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const renderNavItems = () => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                gap: 2,
                padding: 1,
            }}
        >
            {navItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    style={{ textDecoration: 'none' }}
                >
                    {({ isActive }) => (
                        <Button
                            sx={{
                                borderRadius: 10,
                                padding: '8px 20px',
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '9px',
                                color: 'white',
                                background: isActive
                                    ? 'linear-gradient(151deg, #04D2BB 75%, #00F2F5 100%)'
                                    : 'linear-gradient(180deg, #7622FF 0%, #4F51EE 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(322deg, #00F2F5 0%, #4F51EE 100%)',
                                },
                                boxShadow: '3px 0px 0px 0px #CCCCCC',
                            }}
                        >
                            {item.label}
                        </Button>
                    )}
                </NavLink>
            ))}
        </Box>
    );

    return (
        <div>
            {/* Toggle button for small screens */}
            <Box
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyContent: 'right',
                    alignItems: 'center',
                    backgroundColor: '#FAFAFA',
                    padding: 2,
                }}
            >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            {/* Drawer for small screens */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 250,
                        padding: 2,
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem key={index}>
                                <NavLink
                                    to={item.path}
                                    style={{ textDecoration: 'none', width: '100%' }}
                                >
                                    {({ isActive }) => (
                                        <Button
                                            sx={{
                                                width: '100%',
                                                borderRadius: 10,
                                                padding: '8px 20px',
                                                fontSize: '12px',
                                                color: 'white',
                                                background: isActive
                                                    ? 'linear-gradient(151deg, #04D2BB 75%, #00F2F5 100%)'
                                                    : 'linear-gradient(180deg, #7622FF 0%, #4F51EE 100%)',
                                                '&:hover': {
                                                    background: 'linear-gradient(322deg, #00F2F5 0%, #4F51EE 100%)',
                                                },
                                                boxShadow: '3px 0px 0px 0px #CCCCCC',
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    )}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Menu for larger screens */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'center',
                    gap: 2,
                    backgroundColor: '#FAFAFA',
                }}
            >
                {renderNavItems()}
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#FAFAFA',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Lobster, cursive',
                        fontSize: 64, //100
                        color: '#4F51EE',
                        fontWeight: 'normal',
                    }}
                >
                    Corrector
                </Typography>
            </Box>

            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    padding:'0px 30px', 
                    height: 'auto',
                    textAlign: 'center',
                    background: 'linear-gradient(90deg, #04D2BB 0%, #4F51EE 40%, #4F51EE 60%, #04D2BB 100%)',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 100,
                        fontSize: '32px', //56 px
                        color: 'white',
                    }}
                >
                    What would you like to correct?
                </Typography>
            </Grid>
        </div>
    );
};

export default NavBar;
