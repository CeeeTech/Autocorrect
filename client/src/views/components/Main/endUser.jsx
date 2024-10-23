import { Box, Button, Typography } from "@mui/material";
import React from "react";

// SubmitOption Component
const SubmitOption = ({ onClick, title, description }) => {
    return (
        <Box sx={{ flex: 1, margin: 2 }}>
            <Typography
                align="left"
                mb={1}
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    lineHeight: 2,
                    fontWeight: 100,
                }}
            >
                <br />
                {description}
            </Typography>
            <Button
                fullWidth
                onClick={onClick}
                sx={{
                    height: 55,
                    marginTop: 3,
                    color: 'white',
                    textTransform: 'none',
                    background: '#e43292',
                    border: '2px solid white',
                    fontFamily: 'Poppins',
                    fontWeight: 200,
                    fontSize: 18,
                    borderRadius: 3,
                    boxShadow: '1.5px 1.5px 5px 0px white',
                }}
            >
                {title}
            </Button>
        </Box>
    );
};

function Submit() {
    const handleSubmitAsSPDF = () => {
        alert('Submitting as Student');
    };

    const handleSubmitAsTPDF = () => {
        alert('Submitting as Teacher');
    };

    return (
        <>
            <Box
                sx={{
                    height: 'auto',
                    p: 4,
                    fontSize: '25px',
                    textAlign: 'center',
                    color: 'white',
                    textTransform: 'none',
                    background: 'linear-gradient(90deg, #2b8ed5 0%, #4f50ed 40%, #4f50ed 60%, #2b8ed5 100%)',
                }}
            >
                <Typography fontFamily='Poppins' fontSize='28px'>Who is Submitting?</Typography>
                <Box
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        width: { xs: '100%', md: '65%' }, 
                        display: 'flex',
                        margin: 'auto',
                    }}
                >
                    <SubmitOption
                        title="Student"
                        description="The student option will provide correction and feedback for students and parents. Multiple feedback languages are available."
                        onClick={handleSubmitAsSPDF}
                    />
                    <SubmitOption
                        title="Teacher"
                        description="The teacher option will provide corrections and feedback as though they are written by a teacher. You can edit and add your own feedback."
                        onClick={handleSubmitAsTPDF}
                    />
                </Box>
            </Box>
        </>
    );
}

export default Submit;
