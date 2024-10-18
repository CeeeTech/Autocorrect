import React, { useState } from 'react';
import { Button, Box, Typography, Stepper, Step, StepLabel, Grid } from '@mui/material';
import Submit from '../components/Main/endUser';
import English from '../components/Main/English';
import Year from '../components/Main/Year';
import Writing from '../components/Main/Writing';
import Add from '../components/Main/AddLang';
import Corrections from '../components/Main/Corrections';

const steps = [
    'Who is Submiting',
    'English Varient',
    'School Year',
    'Writing Type',
    'Additional Languages',
    'Corrections',
];

export default function Home() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const renderStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <Submit />;
            case 1:
                return <English />;
            case 2:
                return <Year />;
            case 3:
                return <Writing />;
            case 4:
                return <Add />;
            case 5:
                return <Corrections />;
            default:
                return 'Unknown Step';
        }
    };

    return (
        <Box sx={{ background: '#FAFAFA', padding: 3, minHeight: '100vh' }}>
            <Typography
                variant="h4"
                align="center"
                sx={{ fontFamily: 'Poppins', fontWeight: 100, mb: 3 }}
            >
                Choose your options for corrections and customized feedback.
            </Typography>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 5 }}>
                {activeStep === steps.length ? (
                    <Box textAlign="center">
                        <Typography variant="h6" gutterBottom>
                            All steps completed – you’re finished!
                        </Typography>
                        <Button onClick={handleReset} variant="contained" sx={{ mt: 2 }}>
                            Reset
                        </Button>
                    </Box>
                ) : (
                    <Grid container direction="column" alignItems="center" spacing={2}>
                        <Grid item>{renderStepContent(activeStep)}</Grid>
                        <Grid item>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Button
                                onClick={handleNext}
                                variant="contained"
                                color="primary"
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Box>
        </Box>
    );
}
