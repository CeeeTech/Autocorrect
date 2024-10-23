import React from "react";
import { Box, Button, Typography } from "@mui/material";

function AddLang() {
    const buttonList = [
        { label: 'Chinese', background:'#4f51ee', color: 'white'  },
        { label: 'Hindi', background:'#4f51ee', color: 'white' },
        { label: 'Tamil', background:'#4f51ee', color: 'white' },
        { label: 'Sinhala', background:'#4f51ee', color: 'white' },
        { label: 'Arabic', background:'#4f51ee', color: 'white' },
        { label: 'Urdu', background:'#4f51ee', color: 'white' },
        { label: 'Portugese', background:'#4f51ee', color: 'white' },
        { label: 'French', background:'#4f51ee', color: 'white' },
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
                    Select an additional language (optional)
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
                    In addition to English, feedback can also  be provided in the selected language. This is especially useful for parents or student who prefer feedback in their native language.
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

export default AddLang;
