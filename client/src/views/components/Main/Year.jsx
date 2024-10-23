import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Year() {
    const buttonList = [
        { label: 'Year 1', background: '#4f51ee', color: 'white' },
        { label: 'Year 2', background: '#4f51ee', color: 'white' },
        { label: 'Year 3', background: '#4f51ee', color: 'white' },
        { label: 'Year 4', background: '#4f51ee', color: 'white' },
        { label: 'Year 5', background: '#4f51ee', color: 'white' },
        { label: 'Year 6', background: '#4f51ee', color: 'white' },
        { label: 'Year 7', background: '#4f51ee', color: 'white' },
        { label: 'Year 8', background: '#4f51ee', color: 'white' },
        { label: 'Year 9', background: '#4f51ee', color: 'white' },
        { label: 'Year 10', background: '#4f51ee', color: 'white' },
        { label: 'Year 11', background: '#4f51ee', color: 'white' },
        { label: 'Year 12', background: '#4f51ee', color: 'white' },
    ];

    return (
        <>
            <Box
                fullWidth
                sx={{
                    height: 'auto',
                    padding: 4,
                    px: 2,
                    fontSize: '30px',
                    fontWeight: 900,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    background: 'white',
                }}
            >
                <Typography variant="h4" fontWeight='1000'>
                    Select the school year level
                </Typography>
                <Typography
                    mt={3}
                    mb={4}
                    align={'center'}
                    fullWidth
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        color: 'black',
                        lineHeight: 1.8,
                    }}
                >
                    The complexity of language and feedback will be provided to the student according to their year level. This ensures that students receive appropriate guidance that aligns with their current understanding and skill development.
                </Typography>

                <Box
                    display="flex"
                    flexWrap="wrap" // Allows buttons to wrap to the next line
                    justifyContent="center" // Center the buttons
                    sx={{ maxWidth: '100%', margin: 'auto' }} // Centering the Box
                >
                    {buttonList.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '40%', sm: '30%', md: '20%' }, // 50% width for small screens, 25% for medium and up
                                padding: 0.5,
                            }}
                        >
                            <Button
                                fullWidth
                                //onClick={() => handleButtonClick(item.label)}
                                sx={{
                                    borderRadius: 3,
                                    color: 'white',
                                    border: '2px solid white',
                                    textTransform: 'none',
                                    background: item.background,
                                    fontFamily: 'Poppins',
                                    fontSize: 18,
                                    fontWeight: 100,
                                    boxShadow: '2px 2px 4px 0px #4f51ee'
                                }}
                            >
                                {item.label}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Year;
