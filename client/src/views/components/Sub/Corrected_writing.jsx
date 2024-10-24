import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography, Grid } from "@mui/material"; // Import Grid from MUI
import Feedback from './Feedback';
import Positives from './Positives';
import Corrected_copy from './Corrected_copy';
import ReplyIcon from '@mui/icons-material/Reply';

function Corrected_writing({ correctedText, finalCopy, feedbackText, positiveText }) {
    const [modifiedText, setModifiedText] = useState("");
    const [loading, setLoading] = useState(true);

    const buttonList = [
        { label: 'Download as PDF', background: '#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Download as Word', background: '#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share as Word', background: '#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share as PDF', background: '#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
    ];

    useEffect(() => {
        setModifiedText(parseModifiedText(correctedText));
    }, [correctedText]);

    const parseModifiedText = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<span style="color: red; text-decoration: line-through;">$1</span>')
            .replace(/\(\((.*?)\)\)/g, '<span style="color: blue;">$1</span>')
            .replace(/##(.*?)##/g, '<span style="color: purple;">$1</span>');
    };

    const displayFinalCopy = (finalCopy) => {
        setLoading(false);
        console.log(finalCopy);
    }

    return (
        <>
            <Box
                fullWidth
                sx={{
                    height: 'auto',
                    py: 5,
                    px: -2,
                    fontFamily: 'sans-serif: Arial',
                    fontSize: '35px',
                    fontWeight: 900,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    mt: 5,
                    mx: '5%',
                }}
            >
                <Typography variant="p">
                    <span style={{ fontFamily: 'Galada', fontSize: '38px' }}>
                        {'Corrected '}
                    </span>
                    Writing
                </Typography>

                <Typography
                    align={'center'}
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '16px',
                        color: 'black',
                        mt: 1,
                        p: '0px 10%',
                    }}
                >
                    You can edit the corrections and feedback if necessary, and also add your own. The corrected writing can be 
                    downloaded as PDF or Word files. They can also be shared in those file formats, for example via email.
                </Typography>
                
                <Box
                    sx={{
                        display: 'block', // Makes sure the icon takes a full line
                        textAlign: 'center', // Center the icon if needed
                        mt: 1, // Add some margin for spacing
                    }}
                >
                    <ReplyIcon
                        sx={{
                            fontSize: 40,
                            color: '#009e60',
                            transform: 'rotate(250deg) scaleY(-1)',
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        height: 'auto',
                        fontFamily: 'Poppins',
                        mt: 1,
                        marginBottom: 4,
                        background: 'white',
                        borderRadius: '8px',
                        border: '3.5px solid #1c8b9a',
                        boxShadow: '0px 0px 12px 0px #1c8b9a',
                        textAlign: 'center',
                        px: '0',
                        py: '5%'
                    }}
                >
                    <Box
                        sx={{
                            fontFamily: 'Poppins',
                            color: 'black',
                            fontSize: '18px',
                            textAlign: 'left',
                            lineHeight: '2.5',
                            p: '0px 10%',
                            marginBottom: '20px'
                        }}
                        dangerouslySetInnerHTML={{ __html: modifiedText }} // Use dangerouslySetInnerHTML to render HTML
                    />
                    <div>
                        <Divider 
                            // width 30%, center align and color black
                            sx={{
                                width: '30%',
                                margin: 'auto',
                                background: 'black',
                                height: '1px',
                                marginBottom: '10px',
                                mt: '10px',
                            }}
                        />
                    </div>
                    <Feedback feedbackText={feedbackText} />
                    <Positives positiveText={positiveText} />
                </Box>

                {/* Use Grid for button layout */}
                <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 3 }}>
                    {buttonList.map((item, index) => (
                        <Grid item xs={6} sm={3} key={index}> {/* 2 columns on small screens, 4 on larger */}
                            <Button
                                fullWidth
                                sx={{
                                    height: 45,
                                    borderRadius: 3,
                                    border: '2px solid white',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontSize: 14,
                                    color: 'white',
                                    background: item.background,
                                    boxShadow: item.boxShadow,
                                    m: 0, // Consistent margin around buttons
                                }}
                            >
                                {item.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>

                <Box>
                    <Typography
                        mb={3}
                        align={'center'}
                        sx={{
                            fontFamily: 'sans-serif: Arial',
                            fontSize: '30px',
                            fontWeight: 900,
                            color: '#4f51ee',
                            textTransform: 'none',
                            mt: 5
                        }}
                    >
                        Need a final copy? <br />
                    </Typography>
                    <Typography
                        mb={3}
                        align={'center'}
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            color: 'black',
                            mt: 1,
                            p: '0px 10%',
                        }}
                    >
                        You can also generate a corrected copy without the visible corrections and feedback.
                    </Typography>

                    <Button
                        onClick={() => displayFinalCopy(finalCopy)}
                        sx={{
                            height: 45,
                            width: 250,
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
                        Generate
                    </Button>
                </Box>
            </Box>
                    
            {!loading && (
                <Box sx={{ backgroundColor: '#f7f7f7' }}>
                    <Corrected_copy correctedCopy={finalCopy} />
                </Box>
            )}
        </>
    );
}

export default Corrected_writing;
