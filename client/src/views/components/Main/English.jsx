import { Box, Button, Typography } from "@mui/material";
import React from "react";

const StyledButton = ({ label, background, color }) => (
    <Button
        fullWidth
        sx={{
            height: 55,
            borderRadius: 3,
            color: color,
            border: '2px solid white',
            textTransform: 'none',
            background: background,
            fontFamily: 'Poppins',
            fontSize: 18,
            fontWeight: 100,
            margin: 0.25,
            boxShadow: '2px 2px 4px 0px #4f51ee',
        }}
    >
        {label}
    </Button>
);

function English() {
    const buttonList = [
        { label: 'UK English', background: '#4f51ee', color: 'white' },
        { label: 'US English', background: '#4f51ee', color: 'white' },
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
                    background: '#f7f7f7',
                }}
            >
                <Typography variant="h4" fontWeight='1000'>
                    Select the preferred English variant
                </Typography>
                <Typography
                    mt={3}
                    mb={4}
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        color: 'black',
                        lineHeight: 1.8,
                    }}
                >
                    UK English is commonly used in the United Kingdom, Australia, New Zealand, India, and Sri Lanka. US English is commonly used in the United States, South America, the Philippines, and many countries in Europe.
                </Typography>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and larger
                        justifyContent: 'center', // Center the buttons horizontally
                        gap: 2, // Space between buttons
                        width: {xs: '100%', md: '55%'}, // Ensure full width on small screens and a max of 55% on larger screens
                        margin: 'auto', // Center the buttons horizontally
                    }}
                >
                    {buttonList.map((item, index) => (
                        <Box 
                            key={index} 
                            sx={{ 
                                flex: 1, // Allow buttons to grow equally
                                width: { xs: '100%', md: '45%' }, // Ensure full width on small screens and a max of 45% on larger screens
                            }}
                        >
                            <StyledButton
                                label={item.label}
                                background={item.background}
                                color={item.color}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default English;
