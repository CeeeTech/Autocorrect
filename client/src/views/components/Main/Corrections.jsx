import React, { useState } from "react";
import { Box, Button, TextField, Typography, CircularProgress } from "@mui/material";
import Corrected_writing from '../Sub/Corrected_writing';
import ReplyIcon from '@mui/icons-material/Reply';

function Corrections() {
    const [correctedText, setCorrectedText] = useState("");
    const [correctedCopy, setCorrectedCopy] = useState("");
    const [feedbackText, setFeedbackText] = useState("");
    const [positiveText, setPositiveText] = useState("");
    const [story, setStory] = useState("");
    const [correcting, setCorrecting] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (selectedWritingStyle) => {
        setSubmitting(true);
        setCorrecting(true);
        try {
            const response = await fetch('http://localhost:5000/api/ai/correct-text', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: story, selectedWritingType: selectedWritingStyle }),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setCorrectedText(data.highlightedText);
            setCorrectedCopy(data.hybridCorrectedText);
            setFeedbackText(data.feedback);
            setPositiveText(data.positiveFeedback);
        } catch (error) {
            console.error('Error fetching the corrected text:', error);
        } finally {
            setCorrecting(false);
            setSubmitting(false);
        }
    };

    return (
        <Box
            fullWidth
            sx={{
                fontSize: '30px',
                fontWeight: 900,
                textAlign: 'center',
                color: '#4f51ee',
                textTransform: 'none',
                background: '#f7f7f7',
                py: 4,
            }}
        >
            <Typography variant="h4" fontWeight='bold'>
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
                    fontSize: '30px',
                    color:'black',
                    mt: 3,
                    mb: 1,
                }}
            >
                Paste your writing or upload files for correction and feedback.
            </Typography> 

            <Typography
                align='center'
                width={0.8}
                sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    color: 'black',
                    m: 'auto',
                    mb: 0,
                }}
            >
                You can paste in your writing, or upload PDF or Word files. You can also upload two files for simultaneous processing, such as your writing and an accompanying text or image (JPEG, PNG, PDF).
            </Typography>

            <ReplyIcon
                sx={{
                    mb: -3,
                    fontSize: 40,
                    color: '#4f51ee',
                    transform: 'rotate(250deg) scaleY(-1)',
                }}
            />

            <Box sx={{ mb: 4, px: '5%' }}>
                <TextField
                    InputProps={{
                        style: { fontSize: '18px', fontFamily: 'Poppins', padding: '20px' }
                    }}
                    fullWidth
                    placeholder="Paste your writing here..."
                    multiline
                    rows={9}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    sx={{
                        fontFamily: 'Poppins',
                        marginTop: 5,
                        mb: 4,
                        background: 'white',
                        borderRadius: '8px',
                        border: '3.5px solid #4f51ee',
                        boxShadow: '0px 0px 12px 0px #4f51ee',
                        textAlign: 'center',
                    }}
                />

                <Box 
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        onClick={() => handleSubmit("Narrative Writing")}
                        sx={{
                            height: 45,
                            width: 230,
                            color: 'white',
                            textTransform: 'none',
                            background: '#1c1e9a',
                            border: '2px solid white',
                            fontFamily: 'Poppins',
                            fontSize: 14,
                            borderRadius: 3,
                            boxShadow: '1.5px 1.5px 5px 0px #1c1e9a',
                        }}
                    >
                        {submitting ? <CircularProgress color="white" size={24} /> : 'Submit for Correction'}
                    </Button>

                    <Box>
                        <Button
                            sx={{
                                height: 45,
                                width: 150,
                                color: 'white',
                                textTransform: 'none',
                                background: '#4f50ed',
                                border: '2px solid white',
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                borderRadius: 3,
                                boxShadow: '1.5px 1.5px 5px 0px #4f50ed',
                                marginLeft: 1,
                            }}
                        >
                            Upload File 1
                        </Button>
                        <Button
                            sx={{
                                height: 45,
                                width: 150,
                                color: 'white',
                                textTransform: 'none',
                                background: '#8e3aab',
                                border: '2px solid white',
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                borderRadius: 3,
                                boxShadow: '1.5px 1.5px 5px 0px #8e3aab',
                                marginLeft: 1,
                            }}
                        >
                            Upload File 2
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Render corrected writing if not correcting */}
            {!correcting && (
                <Box sx={{ backgroundColor: 'white' }}>
                    <Corrected_writing 
                        correctedText={correctedText} 
                        finalCopy={correctedCopy}
                        feedbackText={feedbackText}
                        positiveText={positiveText}
                    />
                </Box>
            )}
        </Box>
    );
}

export default Corrections;
