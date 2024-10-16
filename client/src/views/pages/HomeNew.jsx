import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Grid, Grid2 } from '@mui/material';
import shadows from '@mui/material/styles/shadows';
import Submit from '../components/Main/Submit';
import English from '../components/Main/English';
import Year from '../components/Main/Year';
import Writing from '../components/Main/Writing';
import Add from '../components/Sub/AddLang';
import Corrections from '../components/Main/Corrections';
import Corrected_writing from '../components/Sub/Corrected_writing';
import Corrected_copy from '../components/Sub/Corrected_copy';

export default function Home() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [text, setText] = useState('Select your writing type and let our AI help you make it flawless.');
    const [modifiedText, setModifiedText] = useState(''); // State to hold corrected text
    const [story, setStory] = useState(''); // State to hold user input text

    const handleButtonClick = (label) => {
        setSelectedButton(label);
        setText(label);
    };

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
            
            <Submit/>
            <English/>
            <Year/>
            <Writing/>
            <Add/>       
            <Corrections/>
            <Corrected_writing/>
            <Corrected_copy/>

        </Box>
    );
}
