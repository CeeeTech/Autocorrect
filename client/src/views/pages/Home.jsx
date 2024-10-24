import { Button, Box, Typography } from '@mui/material';
import { Description, FlashOn, FormatAlignLeft, CloudUpload } from '@mui/icons-material'; // Importing icons

export default function LandingPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#f4f4f9',
                padding: 3,
                textAlign: 'center',
                color: '#333',
            }}
        >
            <Box
                sx={{
                    maxWidth: '700px',
                    backgroundColor: '#ffffff',
                    borderRadius: 4,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
                    padding: 5,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >
                {/* Improved description section */}
                <Typography
                    variant="body1"
                    color="textSecondary"
                    paragraph
                    sx={{ color: '#4f4f4f', fontSize: '18px', marginBottom: '40px' }}
                >
                    <span style={{ fontWeight: 'bold', color: '#008080' }}>
                        Your go-to solution for flawless writing!
                    </span>{' '}
                    Upload your documents and get instant corrections to improve grammar, style, and clarity. 
                </Typography>

                {/* Key Features Section */}
                <Box sx={{ margin: '30px 0', textAlign: 'left' }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50', textAlign: 'center' }}>
                        Key Features
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <FlashOn sx={{ color: '#008080', marginRight: 2 }} />
                        <Typography variant="body1" sx={{ fontSize: '16px', color: '#4f4f4f' }}>
                            <strong>AI-powered grammar and style corrections</strong>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <CloudUpload sx={{ color: '#008080', marginRight: 2 }} />
                        <Typography variant="body1" sx={{ fontSize: '16px', color: '#4f4f4f' }}>
                            <strong>Instant feedback</strong> to improve your writing
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <Description sx={{ color: '#008080', marginRight: 2 }} />
                        <Typography variant="body1" sx={{ fontSize: '16px', color: '#4f4f4f' }}>
                            <strong>Supports various document formats</strong> (PDF, Word)
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <FormatAlignLeft sx={{ color: '#008080', marginRight: 2 }} />
                        <Typography variant="body1" sx={{ fontSize: '16px', color: '#4f4f4f' }}>
                            <strong>Easy and user-friendly interface</strong>
                        </Typography>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => window.location.href = '/new-page'}
                    sx={{
                        padding: '10px 30px',
                        fontSize: '18px',
                        backgroundColor: '#008080',
                        '&:hover': {
                            backgroundColor: '#006666',
                        },
                    }}
                >
                    Get Started
                </Button>
            </Box>

            <Typography
                variant="body2"
                sx={{ marginTop: 4, color: '#7f8c8d' }}
            >
                © 2024 Autocorrector. All rights reserved.
            </Typography>
        </Box>
    );
}
