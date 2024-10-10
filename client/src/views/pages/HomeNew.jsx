import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Grid, Grid2 } from '@mui/material';
import shadows from '@mui/material/styles/shadows';

export default function Home() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [text, setText] = useState('Select your writing type and let our AI help you make it flawless.');
    const [modifiedText, setModifiedText] = useState(''); // State to hold corrected text
    const [story, setStory] = useState(''); // State to hold user input text

    const handleButtonClick = (label) => {
        setSelectedButton(label);
        setText(label);
    };

    const buttonList = [
        { label: 'Student', background:'#e43292', color: 'white'  },
        { label: 'Teacher', background:'#e43292', color: 'white' },
    ];

    const buttonList2 = [
        { label: 'UK English', background:'#4f51ee', color: 'white'  },
        { label: 'US English', background:'#4f51ee', color: 'white' },
    ];

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

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/ai/correct-text', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: story }), // Send user input text
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setModifiedText(parseModifiedText(data.modifiedText)); // Update the corrected text state

        } catch (error) {
            console.error('Error fetching the corrected text:', error);
        }
    };

    const handleCopyText = () => {
        alert('Text copied to clipboard');
    };

    const handleSubmitAsSPDF = () => {
        alert('Submitting as Student');
    };

    const handleSubmitAsTPDF = () => {
        alert('Submitting as Teacher');
    };
    
    const parseModifiedText = (text) => {
        // Replace **text** with <span style="color: red; text-decoration: line-through;">text</span> for red strikethrough
        // Replace ((text)) with <span style="color: blue;">text</span> for blue text and remove the parentheses
        return text
            .replace(/\*\*(.*?)\*\*/g, '<span style="color: red; text-decoration: line-through;">$1</span>') // Red strikethrough text
            .replace(/\(\((.*?)\)\)/g, '<span style="color: blue;">$1</span>') // Blue text without parentheses
            .replace(/##(.*?)##/g, '<span style="color: purple;">$1</span>'); // Purple text without ##
    };    

    return (

        <Box sx={{ background: '#FAFAFA', padding: {} }}>
            <Box 
                fullWidth
                sx={{
                    padding:1.5,
                    fontFamily: 'poppins',
                    fontWeight:100,
                    fontSize:'30px',
                    textAlign:'center',
                    color: 'black',
                    textTransform: 'none',
                }}
            >
                Choose your options for corrections and customized feedback.
            </Box>  
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
                        width: '100%',
                        display:'flex',
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Box>
                            <Typography
                                align={'center'}
                                mb={1}
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: 100,
                                }}
                            >
                                <br/>
                                The student option will provide correction and <br/>
                                feedback for students and parents. Multiple <br/>
                                feedback languages are available. <br/>
                            </Typography>
                            <Button
                                onClick={handleSubmitAsSPDF} 
                                sx={{
                                    //flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:45,
                                    width: 360,
                                    marginTop: 2,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: '#e43292',
                                    border:'2px, solid, white',
                                    fontFamily: 'Poppins',
                                    borderRadius: 3,
                                    position:'relative',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    alignContent:'center'
                                }}
                            >
                                Student
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Box>
                            <Typography
                                align={'center'}
                                mb={1}
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 100,
                                    
                                }}
                            >
                            <br />
                            The teacher option will provide corrections and <br/>
                            feedback as though they are written by a teacher. <br/>
                            You can edit and add your own feedback. <br/>
                            </Typography>
                            <Button
                                onClick={handleSubmitAsSPDF} 
                                sx={{
                                    //flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:45,
                                    width: 360,
                                    marginTop: 2,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: '#e43292',
                                    border:'2px, solid, white',
                                    fontFamily: 'Poppins',
                                    borderRadius: 3,
                                }}
                            >
                                Student
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

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
                        onClick={() => handleButtonClick(item.label)}
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
                            boxShadow: 4
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>


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


        </Box>
    );
}
