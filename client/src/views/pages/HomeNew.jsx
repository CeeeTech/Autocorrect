import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Skeleton } from '@mui/material';
import { jsPDF } from 'jspdf'; 
import html2canvas from 'html2canvas';

export default function Home() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [text, setText] = useState('Select your writing type and let our AI help you make it flawless.');
    const [modifiedText, setModifiedText] = useState('');
    const [story, setStory] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    const handleButtonClick = (label) => {
        setSelectedButton(label);
        setText(label);
    };

    const handleSubmit = async (selectedButton) => {
        setLoading(true); // Start loading
        try {
            const response = await fetch('http://localhost:5000/api/ai/correct-text', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: story, selectedWritingType: selectedButton }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setModifiedText(parseModifiedText(data.highlightedText));
        } catch (error) {
            console.error('Error fetching the corrected text:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleCopyText = () => {
        const container = document.createElement('div');
        container.innerHTML = modifiedText;
        document.body.appendChild(container);
        const range = document.createRange();
        range.selectNodeContents(container);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            const successful = document.execCommand('copy');
            alert(successful ? 'Text copied to clipboard!' : 'Failed to copy text.');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        } finally {
            document.body.removeChild(container);
            selection.removeAllRanges();
        }
    };

    const handleSaveAsPDF = () => {
        const doc = new jsPDF();
        html2canvas(document.querySelector("#correctedTextContainer")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 190;
            const pageHeight = doc.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;

            let position = 0;

            doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            doc.save('corrections.pdf');
        });
    };

    const parseModifiedText = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<span style="color: red; text-decoration: line-through;">$1</span>')
            .replace(/\(\((.*?)\)\)/g, '<span style="color: blue;">$1</span>')
            .replace(/##(.*?)##/g, '<span style="color: purple;">$1</span>');
    };

    return (
        <Box sx={{ background: '#FAFAFA', padding: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    background: 'white',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: 2,
                    maxWidth: '100%',
                    margin: 'auto',
                    fontFamily: 'Poppins, sans-serif',
                }}
            >
                <Box
                    sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, width: '100%', mb: 2 }}
                >
                    {[
                        { label: 'Persuasive Essay Writing', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
                        { label: 'Text Response Essays', gradient: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)' },
                        { label: 'Narrative Writing', gradient: 'linear-gradient(90deg, #fda301 20%, #fdd402 90%)' },
                        { label: 'Language Analysis', gradient: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)' },
                        { label: 'Letter Writing', gradient: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)' },
                    ].map((item, index) => (
                        <Button
                            key={index}
                            fullWidth
                            onClick={() => handleButtonClick(item.label)}
                            sx={{
                                flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                fontSize: '12px',
                                borderRadius: 2,
                                color: 'white',
                                border: selectedButton === item.label ? '2px solid #d23e69' : '0px solid white',
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

                <Typography align="center" sx={{ fontSize: '16px', m: 2, color: '#4F51EE', fontWeight: 'bold' }}>
                    {text}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography align="center" mb={1} sx={{ fontWeight: 'bold' }}>Your Story</Typography>
                        <TextField
                            multiline
                            minRows={6}
                            fullWidth
                            value={story}
                            onChange={(e) => setStory(e.target.value)}
                            sx={{
                                background: '#f4f4f6',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: '#1cd1fb', borderRadius: 3 },
                                    '&:hover fieldset': { borderColor: '#1cd1fb' },
                                    '&.Mui-focused fieldset': { borderColor: '#1cd1fb' },
                                },
                            }}
                        />
                        <Button
                            onClick={() => handleSubmit(selectedButton)}
                            sx={{
                                mt: 2, background: 'linear-gradient(90deg, #2c65f2 20%, #a865fd 90%)',
                                color: 'white', textTransform: 'none', borderRadius: 10
                            }}
                        >
                            Submit For Correction
                        </Button>
                    </Box>

                    <Box sx={{ flex: 1 }}>
                        <Typography align="center" mb={1} sx={{ fontWeight: 'bold' }}>AI-Generated Corrections</Typography>
                        {loading ? (
                            <Skeleton variant="rectangular" width="100%" height={150} />
                        ) : (
                            <Box
                                id="correctedTextContainer"
                                sx={{ background: '#fee5ea', padding: 2, minHeight: '150px', borderRadius: '5px' }}
                                dangerouslySetInnerHTML={{ __html: modifiedText }}
                            />
                        )}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button onClick={handleSaveAsPDF} sx={{ mr: 1 }}>Save as PDF</Button>
                            <Button onClick={handleCopyText}>Copy Text</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
