import React from "react";
import { Box, Button, Grid, TextField, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";
import Corrected_writing from '../Sub/Corrected_writing';

function Corrections(){

    const [correctedText, setCorrectedText] = useState("");
    const [correctedCopy, setCorrectedCopy] = useState("");
    const [feedbackText, setFeedbackText] = useState("");
    const [positiveText, setPositiveText] = useState("");
    const [story, setStory] = useState("");
    const [correcting, setCorrecting] = useState(true);
    const [submiting, setSubmiting] = useState(false);

    const handleSubmit = async (selctedWritingStyle) => {
        setSubmiting(true);
        setCorrecting(true); // Start correcting
        try {
            console.log('Fetching the corrected text...');
            const response = await fetch('http://localhost:5000/api/ai/correct-text', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: story, selectedWritingType: selctedWritingStyle }),
            });
            console.log('Response:');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setCorrectedText(data.highlightedText);
            setCorrectedCopy(data.hybridCorrectedText);
            setFeedbackText(data.feedback);
            setPositiveText(data.positiveFeedback);
        } catch (error) {
            console.error('Error fetching the corrected text:', error);
        } finally {
            setCorrecting(false); // Stop correcting
            setSubmiting(false);
        }
    };

    return(
        <div>
            <Box 
                fullWidth
                sx={{
                    height: 'auto',
                    py: 5,
                    px: 5,
                    pt: 0,
                    fontFamily: 'sans-serif: Arial',
                    fontSize: '35px',
                    fontWeight: 900,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    background: 'white',
                }}
            >
                <Box
                    sx={{
                        height: 'auto',
                        marginBottom: 4,
                        pt: 0,
                        padding: '5%'
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
                            fontSize: '30px',
                            color:'black',
                            mt: 4,  
                            mb: 2
                        }}
                    >
                        Paste your writing or upload files for correction and feedback.
                    </Typography> 

                    <Typography
                        align={'center'}
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            color: 'black',
                            marginTop: 1,
                        }}
                    >
                        You can paste in your writing, or upload PDF or Word files. You can also upload two files for simultaneous processing,
                        such as your writing and an accompanying text or image (JPEG, PNG, PDF). For example, a narrative and the picture
                        prompt it's based on, or a language analysis essay and the article that was analysed. <br/>
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
                                value={story}
                                onChange={(e) => setStory(e.target.value)}
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
                                {submiting ? <CircularProgress color="white" size={24} /> : 'Submit for Correction'}
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
                    {/* if correcting false */}
                    {!correcting && (
                        <Corrected_writing 
                            correctedText={correctedText} 
                            finalCopy={correctedCopy}
                            feedbackText={feedbackText}
                            positiveText={positiveText}
                        />
                    )}
                </Box>
            </Box>
        </div>
    )
}


export default Corrections