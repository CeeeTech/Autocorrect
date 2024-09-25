import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'New Page', path: '/new-page' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
];

const NavBar = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2, 
                    padding: 2,
                    backgroundColor: '#FAFAFA', 
                }}
            >
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        style={({ isActive }) => ({
                            textDecoration: 'none', 
                        })}
                    >
                        {({ isActive }) => (
                            <Button
                                sx={{
                                    borderRadius: 10, 
                                    padding: '10px 20px',
                                    fontSize: '16px',
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
            <Box
                sx={{
                    display:'flex',
                    justifyContent: 'center',
                    backgroundColor: '#FAFAFA',
                    alignItems: 'center',
                }}
            >
                 <Typography
                    sx={{
                        fontFamily: 'Lobster, cursive', 
                        fontSize: 100,                  
                        color: '#4F51EE',               
                        fontWeight: 'normal',  
                    }}
                >
                    Corrector
                </Typography>
            </Box>
        </div>
    );
};

export default NavBar;
