import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Year(){
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
                {buttonList3a.map((item, index) => (
                    <Button
                        key={index}
                        fullWidth
                        onClick={() => handleButtonClick(item.label)}
                        sx={{
                            flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                            height:55,
                            width: 290,
                            borderRadius: 3,
                            color: 'white',
                            border:'2px, solid, white',
                            textTransform: 'none',
                            background: '#4f51ee',
                            fontFamily: 'Poppins',
                            fontSize: 18,
                            fontWeight: 100,
                            margin: 0.25,
                            boxShadow: 4
                        }}
                    >
                        {item.label}
                    </Button>
                ))}

                {buttonList3b.map((item, index) => (
                    <Button
                        key={index}
                        fullWidth
                        onClick={() => handleButtonClick(item.label)}
                        sx={{
                            flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                            height:55,
                            width: 290,
                            borderRadius: 3,
                            color: 'white',
                            border:'2px, solid, white',
                            textTransform: 'none',
                            background: '#4f51ee',
                            fontFamily: 'Poppins',
                            fontSize: 18,
                            fontWeight: 100,
                            margin: 0.25,
                            boxShadow: 4
                        }}
                    >
                        {item.label}
                    </Button>
                ))}

                {buttonList3c.map((item, index) => (
                    <Button
                        key={index}
                        fullWidth
                        onClick={() => handleButtonClick(item.label)}
                        sx={{
                            flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                            height:55,
                            width: 290,
                            borderRadius: 3,
                            color: 'white',
                            border:'2px, solid, white',
                            textTransform: 'none',
                            background: '#4f51ee',
                            fontFamily: 'Poppins',
                            fontSize: 18,
                            fontWeight: 100,
                            margin: 0.25,
                            boxShadow: 4
                        }}
                    >
                        {item.label}
                    </Button>
                ))}



























                {/* <Grid container  maxWidth="75">
                {buttonList3.map((item, index) => ( 
                    <Grid item xs={2} sm={3} key={index}>
                    <Button
                        onClick={() => handleButtonClick(item.label)}
                        sx={{
                            height:55,
                            width: 200,
                            borderRadius: 3,
                            color: 'white',
                            border:'2px, solid, white',
                            textTransform: 'none',
                            background: '#4f51ee',
                            fontFamily: 'Poppins',
                            fontSize: 18,
                            fontWeight: 100,
                            margin: 0.25,
                            boxShadow: 4
                        }}
                    >
                        {item.label}
                    </Button>
                    </Grid>
                ))}
                </Grid> */}
            </Box>    

        </div>
    )
}

export default Year
