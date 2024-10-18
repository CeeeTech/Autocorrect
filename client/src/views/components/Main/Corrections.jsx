import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Corrections(){
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
                Ready for your 
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
                </style>

                <span style={{ fontFamily: 'Galada', fontSize: '38px'  }}>
                    {''} corrections?
                </span> 
                </Typography>

                <Typography
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '32px',
                        color:'black',
                        marginTop: 3,
                        marginBottom: 2
                    }}
                >
                    Paste your writing or upload files for correction and feedback.
                </Typography> 

                <Typography
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        color:'black'
                    }}
                >
                    You can paste in your writing, or upload PDF or Word files. You can also upload two files for simultaneous processing,
                    <br/> such as your writing and an accompanying text or image (JPEG, PNG, PDF). For example, a narrative and the picture
                    <br/> prompt it's based on, or a language analysis essay and the article that was analysed. <br/>
                </Typography>

                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <TextField
                            InputProps={{
                                style: { fontSize: '18px', fontFamily:'poppins', padding:40 }
                            }}
                            fullWidth
                            placeholder="Paste your writing here..."
                            multiline
                            rows={9}
                            maxRows={100}
                            textAlign={'center'}
                            sx={{
                                fontFamily: 'Poppins',
                                marginTop: 5,
                                marginBottom: 4,
                                background: 'white',
                                borderRadius: '8px',
                                border:'3.5px, solid, #4f51ee',
                                boxShadow: '0px 0px 12px 0px #4f51ee',
                                textAlign: 'center'
                            }}
                        />
                    </Grid>
                </Grid>

                    <Box 
                        sx={{ 
                            display: 'flex',
                            justifyContent:'flex-end',
                            alignItems: 'center',   
                            gap:34
                        }}>
                        <Box>
                            <Button
                            
                                sx={{
                                    height:45,
                                    width: 230,
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
                                Submit for Correction
                            </Button>
                        </Box>     
                        <Box>   
                            <Button
                                sx={{
                                    height:45,
                                    width: 150,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: '#4f50ed',
                                    border:'2px, solid, white',
                                    fontFamily: 'Poppins',
                                    fontSize: 14,
                                    borderRadius: 3,
                                    boxShadow: '1.5px 1.5px 5px 0px #4f50ed',
                                    margin: 0.75
                                }}
                            >
                                Upload File 1
                            </Button>
                            <Button
                                sx={{
                                    height:45,
                                    width: 150,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: '#8e3aab',
                                    border:'2px, solid, white',
                                    fontFamily: 'Poppins',
                                    fontSize: 14,
                                    borderRadius: 3,
                                    boxShadow: '1.5px 1.5px 5px 0px #8e3aab',
                                    margin: 0.75
                                }}
                            >
                                Upload File 2
                            </Button>
                        </Box>
                    </Box>

            </Box>
        </div>
    )
}


export default Corrections