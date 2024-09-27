import React, { useState } from 'react';
import { Button, Box, Grid, TextField, Typography } from '@mui/material';

export default function Home() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [text, setText] = useState('Select your writing type and let our AI help you make it flawless.');

    const handleButtonClick = (label) => {
        setSelectedButton(label);
        setText(label);
    };

    const buttonList = [
        { label: 'Persuasive Essay Writing', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
        { label: 'Text Response Essays', gradient: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)' },
        { label: 'Narrative Writing', gradient: 'linear-gradient(90deg, #fda301 20%, #fdd402 90%)' },
        { label: 'Language Analysis', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
        { label: 'Letter Writing', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
    ];

    return (
        <div>
            <Box sx={{ background: '#FAFAFA ' }}>
                <Grid
                    container
                    justifyContent="center"
                    xs={12}
                    sx={{ margin: 'auto', padding: 5 }}
                >
                    <Grid
                        container
                        xs={12}
                        padding={2}
                        spacing={2}
                        borderRadius={2}
                        justifyContent={'center'}
                        sx={{
                            background: 'white',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                        }}
                    >
                        
                        <Grid 
                            container 
                            xs={12} 
                            p={2} 
                            spacing={1} 
                            justifyContent="center" 
                            direction={'row'}
                        >
                            {buttonList.map((item, index) => (
                                <Grid item xs={2} mb={1} key={index}>
                                    <Button
                                        fullWidth
                                        onClick={() => handleButtonClick(item.label)}
                                        sx={{
                                            fontSize: '15px',
                                            borderRadius: 2,
                                            color: 'white',
                                            border: selectedButton === item.label
                                                ? '3px solid #d23e69' // Thicker border when selected
                                                : '1px solid gray', // Default border
                                            textTransform: 'none',
                                            background: item.gradient,
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </Grid>
                            ))}
                            
                        </Grid>
                        <Grid xs={12} mb={2} mt={-1}>
                            <Typography 
                                variant='h6' 
                                align={'center'}
                                sx={{
                                    fontFamily: 'monospace',
                                    color: '#4F51EE',
                                    fontWeight: 'bold',
                                }}>
                                {text}
                            </Typography>
                        </Grid>

                        

                        <Grid item xs={6}>
                            <Typography variant='h6' align={'center'}>
                                Your Story
                            </Typography>
                            <TextField
                                multiline
                                minRows={8}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#1cd1fb',
                                            borderWidth: '3px',
                                            borderRadius: 3,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1cd1fb',
                                            borderWidth: '3px',
                                            borderRadius: 3,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1cd1fb',
                                            borderWidth: '3px',
                                            borderRadius: 3,
                                        },
                                    },
                                    background: '#f4f4f6',
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant='h6' align={'center'}>
                                AI-Generated Corrections
                            </Typography>
                            <TextField
                                multiline
                                minRows={8}
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#d23e69',
                                            borderWidth: '3px',
                                            borderRadius: 3,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#d23e69',
                                            borderWidth: '3px',
                                            borderRadius: 3,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#d23e69',
                                            borderWidth: '3px',
                                            borderRadius: 3,
                                        },
                                    },
                                    background: '#fee5ea',
                                }}
                            />
                        </Grid>

                        <Grid container xs={6} mt={2} justifyContent={'center'} alignItems={'center'}>
                            <Button
                                sx={{
                                    padding: 1.5,
                                    margin: 2,
                                    fontSize: '15px',
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    borderRadius: 10,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #2c65f2 20%, #a865fd 90%)',
                                }}
                            >
                                Submit For Correction
                            </Button>
                        </Grid>

                        <Grid container xs={6} mt={-3} pr={1} justifyContent={'right'} alignItems={'center'}>
                            <Button>Copy Text</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
