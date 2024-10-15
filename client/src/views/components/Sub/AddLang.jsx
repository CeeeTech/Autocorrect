import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function AddLang(){

    const buttonLista = [
        { label: 'Chinese', background:'#4f51ee', color: 'white'  },
        { label: 'Hindi', background:'#4f51ee', color: 'white' },
        { label: 'Tamil', background:'#4f51ee', color: 'white' },
        { label: 'Sinhala', background:'#4f51ee', color: 'white' },
    ];

    const buttonListb = [
        { label: 'Arabic', background:'#4f51ee', color: 'white' },
        { label: 'Urdu', background:'#4f51ee', color: 'white' },
        { label: 'Portugese', background:'#4f51ee', color: 'white' },
        { label: 'French', background:'#4f51ee', color: 'white' },
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
            <p1>Select an additional language (optional)</p1>
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
                    In addition to English, feedback can also  be provided in the selected language. This is <br/>
                    especially useful for parents or student who prefer feedback in their native language.
                    <br/>
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
                                    height:45,
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
                                    height:45,
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

export default AddLang