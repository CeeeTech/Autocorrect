import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Corrected_copy({correctedCopy}){
    
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
                    background: '#f7f7f7',
                }}
            >
                <Typography variant="p"> 
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
                </style>

                <span style={{ fontFamily: 'Galada', fontSize: '38px'  }}>
                    {'Corrected '}  
                </span> 
                 Copy
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
                    You can make edits if neccessary. The corrected copy can be downloaded as PDF or Word files.
                    <br/> They can also be shared in those file formats, for example via email.
                </Typography>


                <Box
                sx={{
                    height: 800,
                    fontFamily: 'Poppins',
                    marginTop: 5,
                    marginBottom: 4,
                    background: 'white',
                    borderRadius: '8px',
                    border:'3.5px, solid, #1c8b9a',
                    boxShadow: '0px 0px 12px 0px #1c8b9a',
                    textAlign: 'center'
                }}
                >   {correctedCopy}
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
            </Box>   
                    
        

            


        </div>
    )
}

export default Corrected_copy