import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Submit(){

    const handleSubmitAsSPDF = () => {
        alert('Submitting as Student');
    };

    const handleSubmitAsTPDF = () => {
        alert('Submitting as Teacher');
    };

    return(
        <div>
            <Box 
                sx={{
                    height:'auto',
                    padding:4,
                    fontFamily: 'Poppins',
                    fontSize:'25px',
                    textAlign: 'center',
                    color: 'white',
                    textTransform: 'none',
                    background: 'linear-gradient(90deg, #2b8ed5 0%, #4f50ed 40%, #4f50ed 60%, #2b8ed5 100%)',
                }}
            >
                <p1>Who is Submitting?</p1>
                <Box
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        width: '60%', //this one 
                        display:'flex',
                        margin:'auto',
                    }}
                >
                    <Box 
                        sx={{ 
                            flex: 1, 
                            alignContent: 'right', 
                            margin:2 //this one
                        }}>
                        <Box>
                            <Typography
                                align={'left'} //this one
                                mb={1}
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: 100,
                                }}
                            >
                                <br/>
                                The student option will provide correction and 
                                feedback for students and parents. Multiple 
                                feedback languages are available.
                            </Typography>
                            <Button
                                fullWidth //this one
                                onClick={handleSubmitAsSPDF} 
                                sx={{
                                    height:45,
                                    //width: 360,
                                    marginTop: 3,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: '#e43292',
                                    border:'2px, solid, white',
                                    fontFamily: 'Poppins',
                                    borderRadius: 3,
                                    position:'relative',
                                }}
                            >
                                Student
                            </Button>
                        </Box>
                    </Box>

                    <Box 
                        sx={{ 
                            flex: 1, 
                            margin:2 //this one
                        }}>
                        <Box>
                            <Typography
                                align={'left'} //this one
                                mb={1}
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 100,
                                    
                                }}
                            >
                            <br />
                            The teacher option will provide corrections and
                            feedback as though they are written by a teacher. 
                            You can edit and add your own feedback. 
                            </Typography>
                            <Button
                                fullWidth //this one
                                onClick={handleSubmitAsTPDF} 
                                sx={{
                                    height:45,
                                    //width: 360,
                                    marginTop: 3,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: '#e43292',
                                    border:'2px, solid, white',
                                    fontFamily: 'Poppins',
                                    borderRadius: 3,
                                }}
                            >
                                Teacher
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Submit