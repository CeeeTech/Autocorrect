import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

function Year(){

    const buttonList3a = [
        { label: 'Year 1', background:'#4f51ee', color: 'white'  },
        { label: 'Year 2', background:'#4f51ee', color: 'white' },
        { label: 'Year 3', background:'#4f51ee', color: 'white' },
        { label: 'Year 4', background:'#4f51ee', color: 'white' },
    ];

    const buttonList3b = [
        { label: 'Year 5', background:'#4f51ee', color: 'white' },
        { label: 'Year 6', background:'#4f51ee', color: 'white' },
        { label: 'Year 7', background:'#4f51ee', color: 'white' },
        { label: 'Year 8', background:'#4f51ee', color: 'white' },
    ];

    const buttonList3c = [
        { label: 'Year 9', background:'#4f51ee', color: 'white' },
        { label: 'Year 10', background:'#4f51ee', color: 'white' },
        { label: 'Year 11', background:'#4f51ee', color: 'white' },
        { label: 'Year 12', background:'#4f51ee', color: 'white' },
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
                    background: 'white',
                }}
            >
            <p1>Select the school year level</p1>
                <Typography
                    mb={4}
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        color:'black'
                    }}
                >
                    <br/>
                    The complexity of language and feedback will be provided to the student according to their year level. <br/>
                </Typography> 

                <Box
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        width: '100%', //this one 
                        display:'flex',
                        margin:'auto',
                    }}
                >
                    <Box 
                        sx={{ 
                            flex: 1, 
                            alignContent: 'right', 
                        }}>
                        <Box>
                        {buttonList3a.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                //onClick={() => handleButtonClick(item.label)}
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:55,
                                    width: 220,
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
                        <Box>
                        {buttonList3b.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                //onClick={() => handleButtonClick(item.label)}
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:55,
                                    width: 220,
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
                        <Box>
                        {buttonList3c.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                //onClick={() => handleButtonClick(item.label)}
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:55,
                                    width: 220,
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
                    </Box>
                </Box>

            </Box>
        </div>
    )
}

export default Year
