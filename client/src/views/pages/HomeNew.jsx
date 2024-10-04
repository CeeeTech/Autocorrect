import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

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
        { label: 'Persuasive Essay Writing', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
        { label: 'Text Response Essays', gradient: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)' },
        { label: 'Narrative Writing', gradient: 'linear-gradient(90deg, #fda301 20%, #fdd402 90%)' },
        { label: 'Language Analysis', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
        { label: 'Letter Writing', gradient: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)' },
    ];

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/saplingai/correct-text', {
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

    const handleSaveAsPDF = () => {
        alert('Saving as PDF');
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
        <Box sx={{ background: '#FAFAFA', padding: { xs: 2, md: 2 } }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    background: 'white',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: 2,
                    maxWidth: { xs: '100%', md: '100%' },
                    margin: 'auto',
                    fontFamily: 'Poppins, sans-serif',
                }}
            >
                {/* Buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                        width: '100%',
                        mb: 2,
                    }}
                >
                    {buttonList.map((item, index) => (
                        <Button
                            key={index}
                            fullWidth
                            onClick={() => handleButtonClick(item.label)}
                            sx={{
                                flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                fontSize: '12px',
                                borderRadius: 2,
                                color: 'white',
                                border: selectedButton === item.label
                                    ? '2px solid #d23e69'
                                    : '0px solid white',
                                textTransform: 'none',
                                background: item.gradient,
                                maxHeight: '50px',
                                fontFamily: 'Poppins, sans-serif',
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>

                {/* Instruction Text */}
                <Typography
                    align={'center'}
                    sx={{
                        fontSize: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        color: '#4F51EE',
                        fontWeight: 'bold',
                        m: 2,
                    }}
                >
                    {text}
                </Typography>

                {/* Text areas for story and corrections */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        width: '100%',
                        gap: 2,
                    }}
                >
                    {/* User Story Input */}
                    <Box sx={{ flex: 1 }}>
                        <Box>
                            <Typography
                                align={'center'}
                                mb={1}
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Your Story
                            </Typography>
                            <TextField
                                multiline
                                minRows={6}
                                fullWidth
                                value={story} // Controlled input
                                onChange={(e) => setStory(e.target.value)} // Update state on change
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#1cd1fb',
                                            borderWidth: '2px',
                                            borderRadius: 3,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1cd1fb',
                                            borderWidth: '2px',
                                            borderRadius: 3,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#1cd1fb',
                                            borderWidth: '2px',
                                            borderRadius: 3,
                                        },
                                    },
                                    background: '#f4f4f6',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                            />
                        </Box>

                        {/* button for submit for correction */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 2,
                            }}
                        >
                            <Button
                                onClick={handleSubmit} // Call the submit function on click
                                sx={{
                                    padding: 1,
                                    fontSize: '12px',
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    borderRadius: 10,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #2c65f2 20%, #a865fd 90%)',
                                    fontFamily: 'Poppins, sans-serif',
                                }}
                            >
                                Submit For Correction
                            </Button>
                        </Box>
                    </Box>

                    {/* AI-Generated Corrections */}
                    <Box sx={{ flex: 1 }}>
                        <Box>
                            <Typography
                                mb={1}
                                align={'center'}
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                }}
                            >
                                AI-Generated Corrections
                            </Typography>
                            <Box
                                sx={{
                                    background: '#fee5ea',
                                    fontFamily: 'Poppins, sans-serif',
                                    padding: 2,
                                    minHeight: '150px',
                                    border: '2px solid #d23e69',
                                    borderRadius: '5px',
                                }}
                                dangerouslySetInnerHTML={{ __html: modifiedText }} // Render the formatted HTML
                            />
                        </Box>
                        {/* button for copy text */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                mt: 2,
                            }}
                        >
                            {/* button to save as pdf */}
                            <Button
                                onClick={handleSaveAsPDF} // Call the save function on click
                                sx={{
                                    color: 'white',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #2c65f2 20%, #a865fd 90%)',
                                    fontFamily: 'Poppins, sans-serif',
                                    mr: 1,
                                }}
                            >
                                Save as PDF
                            </Button>
                            <Button
                                onClick={handleCopyText} // Call the copy function on click
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '12px',
                                    backgroundColor: '#f4f4f6',
                                }}
                            >
                                Copy Text
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
