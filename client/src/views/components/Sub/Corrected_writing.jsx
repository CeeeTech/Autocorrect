import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Feedback from './Feedback';
import Positives from './Positives';

function Corrected_writing(){
    
    const buttonLista = [
        { label: 'Download PDF', background:'#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a'  },
        { label: 'Download Word File', background:'#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share Word File', background:'#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share PDF', background:'#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
    ];

    return(
        <div>
            <Box 
                fullWidth
                sx={{
                    height: 'auto',
                    padding:6,
                    fontFamily: 'sans-serif: Arial',
                    fontSize:'35px',
                    fontWeight: 900,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    background: 'white',
                }}
            >
                <Typography variant="p"> 
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
                </style>

                <span style={{ fontFamily: 'Galada', fontSize: '38px'  }}>
                    {'Corrected '}  
                </span> 
                 Writing
                </Typography>

                <Typography
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        color:'black',
                        marginTop: 1
                    }}
                >
                    You can edit the corrections and feedback if neccessary, and also add your own. The corrected writing can be 
                    <br/> downloaded as PDF or Word files. They can also be shared in those file formats, for example via email.
                </Typography>


                <Box
                sx={{
                    height: 'auto',
                    fontFamily: 'Poppins',
                    marginTop: 5,
                    marginBottom: 4,
                    background: 'white',
                    borderRadius: '8px',
                    border:'3.5px, solid, #1c8b9a',
                    boxShadow: '0px 0px 12px 0px #1c8b9a',
                    textAlign: 'center',
                    paddingBottom: 20
                }}
                >   
                    <Box
                    sx={{
                        fontFamily: 'Poppins',
                        color:'black',
                        fontSize:'20px',
                        textAlign: 'left',
                        paddingLeft: '120px',
                        minHeight: '800px'
                    }}>
                    {/* corrected text */}
                    </Box>
                    <div>
                    <hr style={{ border: '2px solid #000', width: '20%', margin: '20px auto' }} />
                    </div>
                    <Feedback/>
                    <Positives/>

                </Box>

                <Box 
                    sx={{ 
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center',   
                        gap:3
                    }}>
                        {buttonLista.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:45,
                                    borderRadius: 3,
                                    border:'2px, solid, white',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontSize: 14,
                                    color: 'white',
                                    background: item.background,
                                    boxShadow: item.boxShadow,
                                    margin:2
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                </Box>
                <Box>
                    <Typography
                        mb={3}
                        align={'center'}
                        sx={{
                            fontFamily: 'sans-serif: Arial',
                            fontSize:'30px',
                            fontWeight: 900,
                            color: '#4f51ee',
                            textTransform: 'none',
                            marginTop: 5
                        }}
                    >
                    Need a final copy? <br/>
                    </Typography> 
                    <Typography
                        mb={3}
                        align={'center'}
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '20px',
                            color:'black'
                        }}
                    >
                        You can also generate a corrected copy without the visible corrections and feedback.
                        <br/>
                    </Typography>

                    <Button      
                        sx={{
                            height:45,
                            width: 250,
                            color: 'white',
                            textTransform: 'none',
                            background: '#1c1e9a',
                            border:'2px, solid, white',
                            fontFamily: 'Poppins',
                            fontSize: 14,
                            borderRadius: 3,
                            boxShadow: '1.5px 1.5px 5px 0px #1c1e9a',
                        }}
                    >
                        Generate
                    </Button>
                </Box>  
            </Box>   
                    
        

            


        </div>
    )
}

export default Corrected_writing