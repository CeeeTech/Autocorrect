import { Button, Box, Typography } from '@mui/material';

export default function LandingPage() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#f4f4f9', // Soft light gray background
                padding: 3,
                textAlign: 'center',
                color: '#333', // Dark gray for text
            }}
        >
            <Box
                sx={{
                    maxWidth: '700px',
                    backgroundColor: '#ffffff', // Pure white content box
                    borderRadius: 4,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)', // Light shadow for subtle effect
                    padding: 5,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >
                <Typography variant="h2" gutterBottom sx={{ color: '#2c3e50' }}> 
                    Welcome to Autocorrector
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph sx={{ color: '#4f4f4f' }}>
                    Your go-to solution for flawless writing! Upload your documents and get instant corrections to improve grammar, style, and clarity.
                </Typography>

                <Box sx={{ margin: '30px 0' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50' }}>
                        Key Features:
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: '#4f4f4f' }}>
                        - AI-powered grammar and style corrections<br />
                        - Instant feedback to improve your writing<br />
                        - Supports various document formats (PDF, Word)<br />
                        - Easy and user-friendly interface
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => window.location.href = '/new-page'}
                    sx={{
                        padding: '10px 30px',
                        fontSize: '18px',
                        backgroundColor: '#008080', // Teal as a primary accent color
                        '&:hover': {
                            backgroundColor: '#006666', // Darker teal on hover
                        },
                    }}
                >
                    Get Started
                </Button>
            </Box>

            <Typography
                variant="body2"
                sx={{ marginTop: 4, color: '#7f8c8d' }} // Light gray text for footer
            >
                © 2024 Autocorrector. All rights reserved.
            </Typography>
        </Box>
    );
}
