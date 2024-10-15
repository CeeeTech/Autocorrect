import { Box, Button, Typography } from "@mui/material";
import React from "react";

function English(){

    const buttonList2 = [
        { label: 'UK English', background:'#4f51ee', color: 'white'  },
        { label: 'US English', background:'#4f51ee', color: 'white' },
    ];

    return(
        <div>
            <Box 
                fullWidth
                sx={{
                    height: 'auto',
                    padding:6,
                    fontFamily: 'sans-serif: Arial',
                    fontSize:'30px',
                    fontWeight: 900,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    background: '#f7f7f7',
                }}
            >
            <p1>Select the preferred English variant</p1>
                <Typography
                    mb={4}
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        color:'black'
                    }}
                >
                    <br/>
                    UK English is commonly used in the United Kingdom, Australia, New Zealand, India and Sri Lanka. <br/>
                    US English is commonly used in the United States, South America, Philippines, and many countries in Europe.<br/>
                </Typography>

                {buttonList2.map((item, index) => (
                    <Button
                        key={index}
                        fullWidth 
                        sx={{
                            flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                            height:55,
                            width: 300,
                            borderRadius: 3,
                            color: 'white',
                            border:'2px, solid, white',
                            textTransform: 'none',
                            background: '#4f51ee',
                            fontFamily: 'Poppins',
                            fontSize: 18,
                            fontWeight: 100,
                            margin: 0.25,
                            boxShadow: '2px 2px 4px 0px #4f51ee'
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>
        </div>
    )
}

export default English