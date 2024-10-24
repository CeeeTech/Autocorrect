import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Grid, Grid2 } from '@mui/material';
import Submit from '../components/Main/Submit';
import English from '../components/Main/English';
import Year from '../components/Main/Year';
import Writing from '../components/Main/Writing';
import Add from '../components/Sub/AddLang';
import Corrections from '../components/Main/Corrections';
import Corrected_writing from '../components/Sub/Corrected_writing';
import Corrected_copy from '../components/Sub/Corrected_copy';

export default function Home() {

    //Who is submitting
    const [selectedPerson, setSelectedPerson] = useState('');

    const handleSubmitChange = (person) => {
        setSelectedPerson(person);
    };

    //English variant
    const [selectedEnglish, setSelectedEnglish] = useState('');

    const handleEnglishChange = (english) => {
        setSelectedEnglish(english);
    };

    //School Year Level
    const [selectedYear, setSelectedYear] = useState('');

    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    //Writing Type
    const [selectedWriting, setSelectedWriting] = useState('');

    const handleWritingChange = (writing) => {
        setSelectedWriting(writing);
    };

    //Additional Language
    const [selectedAdd, setSelectedAdd] = useState('None');

    const handleAddChange = (add) => {
        setSelectedAdd(add);
    };


return (
    <div>
        
        
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
            
            <Submit onSubmitChange={handleSubmitChange} />
            <p>Who is Submitting: {selectedPerson}</p>

            <English onEnglishChange={handleEnglishChange} />
            <p>Selected English Variant: {selectedEnglish}</p>

            <Year onYearChange={handleYearChange} />
            <p>Selected School Year Level: {selectedYear}</p>

            <Writing onWritingChange={handleWritingChange} />
            <p>Selected Writing Type: {selectedWriting}</p>

            <Add onAddChange={handleAddChange} />
            <p>Selected Additional Language: {selectedAdd}</p>

            <Corrections/>
            <Corrected_writing/>
            <Corrected_copy/>

        </Box>
    </div>
    );
}
