import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function Writing(){

    const buttonLista = [
        { label: 'Narrative Writing (stories)', background:'#4f51ee', color: 'white'  },
        { label: 'Persuasive Essays', background:'#4f51ee', color: 'white' },
        { label: 'Language Analysis Essays', background:'#4f51ee', color: 'white' },
        { label: 'Text Response Essays', background:'#4f51ee', color: 'white' },
    ];

    const buttonListb = [
        { label: 'Creative Responses', background:'#4f51ee', color: 'white' },
        { label: 'Information Reports', background:'#4f51ee', color: 'white' },
        { label: 'Recount Writing', background:'#4f51ee', color: 'white' },
        { label: 'Poetry', background:'#4f51ee', color: 'white' },
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
            <p1>Select the writing type</p1>
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
                    Feedback will be provided according to the specifics of the writing type. <br/>
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
                        {buttonLista.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                //onClick={() => handleButtonClick(item.label)}
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:85,
                                    width: 320,
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
                        {buttonListb.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                //onClick={() => handleButtonClick(item.label)}
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:85,
                                    width: 320,
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

export default Writing