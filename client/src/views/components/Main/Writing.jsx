import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Writing() {
    const buttonList = [
        { label: 'Narrative Writing (stories)', background: '#4f51ee', color: 'white' },
        { label: 'Persuasive Essays', background: '#4f51ee', color: 'white' },
        { label: 'Language Analysis Essays', background: '#4f51ee', color: 'white' },
        { label: 'Text Response Essays', background: '#4f51ee', color: 'white' },
        { label: 'Creative Responses', background: '#4f51ee', color: 'white' },
        { label: 'Information Reports', background: '#4f51ee', color: 'white' },
        { label: 'Recount Writing', background: '#4f51ee', color: 'white' },
        { label: 'Poetry', background: '#4f51ee', color: 'white' },
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
                    Select the writing type
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
                    Feedback will be provided according to the specifics of the writing type. 
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
                                    height: 85,
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

export default Writing;
