import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Feedback from './Feedback';
import Positives from './Positives';
import Corrected_copy from './Corrected_copy';

function Corrected_writing({ correctedText, finalCopy, feedbackText, positiveText }) {
    const [modifiedText, setModifiedText] = useState("");
    const [loading, setLoading] = useState(true);

    const buttonLista = [
        { label: 'Download PDF', background: '#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Download Word File', background: '#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share Word File', background: '#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share PDF', background: '#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
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
                    px: 0,
                    fontFamily: 'sans-serif: Arial',
                    fontSize: '35px',
                    fontWeight: 900,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    background: 'white',
                    marginTop: 5
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
                        marginTop: 1,
                        padding: '0px 10%',
                    }}
                >
                    You can edit the corrections and feedback if necessary, and also add your own. The corrected writing can be 
                    downloaded as PDF or Word files. They can also be shared in those file formats, for example via email.
                </Typography>

                <Box
                    sx={{
                        height: 'auto',
                        fontFamily: 'Poppins',
                        marginTop: 5,
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
                            padding: '0px 10%',
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
                                marginTop: '10px',
                            }}
                        />
                    </div>
                    <Feedback feedbackText={feedbackText} />
                    <Positives positiveText={positiveText} />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 3
                    }}
                >
                    {buttonLista.map((item, index) => (
                        <Button
                            key={index}
                            fullWidth
                            sx={{
                                flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                height: 45,
                                borderRadius: 3,
                                border: '2px solid white',
                                textTransform: 'none',
                                fontFamily: 'Poppins',
                                fontSize: 14,
                                color: 'white',
                                background: item.background,
                                boxShadow: item.boxShadow,
                                margin: 2
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
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
                            marginTop: 5
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
                            marginTop: 1,
                            padding: '0px 10%',
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
                <Corrected_copy correctedCopy={finalCopy} />
            )}
        </>
    );
}

export default Corrected_writing;
