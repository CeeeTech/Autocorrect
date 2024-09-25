import { Button, Box, Grid, TextField, Typography } from '@mui/material';

export default function Home() {
    return (
        <div>
            <Box sx={{
                background:'#FAFAFA '
            }}>

            
            <Grid 
                container 
                justifyContent="center" 
                alignItems="center"
                sx={{
                    height: 'auto',
                    background: 'linear-gradient(90deg, #04D2BB 0%, #4F51EE 40%, #4F51EE 60%, #04D2BB 100%)',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 200, 
                        fontSize: '56px',
                        color: 'white',
                    }}
                >
                    What would you like to correct?
                </Typography>
            </Grid>
            <Grid
                container
                justifyContent="center"
                width={'60%'}
                sx={{
                    background:'#f4f4f6',
                    margin:'auto',
                    padding:5
                }}
            >
                <Typography mt={5}>
                    Select your writing type and let our Al help you make it flawless.
                </Typography>
                <Grid 
                    container
                    mt={5}
                    padding={2}
                    borderRadius={2}
                    sx={{
                        background: 'white',
                    }}
                >
                    <Grid 
                        container 
                        justifyContent="center"
                        alignItems="stretch" 
                        direction={'row'}
                    >
                        <Grid 
                            item 
                            md={3} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    margin: 2,
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)',
                                }}
                            >
                                Persuasive Essay Writing
                            </Button>
                        </Grid>
                        <Grid 
                            item 
                            md={3} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    margin: 2,
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)',
                                }}
                            >
                                Text Response Essays
                            </Button>
                        </Grid>
                        <Grid 
                            item 
                            md={3} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    margin: 2,
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)',
                                }}
                            >
                                Narrative Writing
                            </Button>
                        </Grid>
                        <Grid 
                            item 
                            md={3} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    margin: 2,
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)',
                                }}
                            >
                                Language Analysis
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container xs={12} mt={1}>
                        <Button 
                                fullWidth
                                sx={{
                                    padding:2,
                                    margin: 2,
                                    borderRadius: 10,
                                    color: 'white',
                                    background: 'linear-gradient(90deg, #4F51EE 10%, #4F51EE 10%, #04D2BB 90%)',
                                }}
                            >
                                Language Analysis
                        </Button>                
                    </Grid>
                    <Typography>
                        Your Story
                    </Typography>
                    <TextField
                        multiline
                        minRows={8}
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#1cd1fb', 
                                    borderWidth: '3px',
                                    borderRadius:3,
                                },
                                '&:hover fieldset': {
                                    borderColor: '#1cd1fb',
                                    borderWidth: '3px',
                                    borderRadius:3,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#1cd1fb', 
                                    borderWidth: '3px',
                                    borderRadius:3,
                                },
                            },
                            background:'#f4f4f6'
                        }}
                    />
                    <Grid 
                        container
                        mt={4}
                        justifyContent= {'center'}
                        alignItems= {'center'}
                    >
                        <Button
                            sx={{
                                padding:2,
                                paddingLeft:8,
                                paddingRight:8,
                                margin: 2,
                                borderRadius: 10,
                                color: 'white',
                                background: 'linear-gradient(90deg, #4F51EE 10%, #4F51EE 20%, #04D2BB 100%)',
                            }}
                        >
                            Submit For Correction
                        </Button>
                    </Grid>
                    <Typography mt={3}>
                        AI-Generated Corrections
                    </Typography>
                    <TextField
                        multiline
                        minRows={8}
                        fullWidth
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#d23e69',
                                    borderWidth: '3px',
                                    borderRadius:3,
                                },
                                '&:hover fieldset': {
                                    borderColor: '#d23e69', 
                                    borderWidth: '3px',
                                    borderRadius:3,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#d23e69', 
                                    borderWidth: '3px',
                                    borderRadius:3,
                                },
                            },
                            background:'#fee5ea'
                        }}
                    />
                    
                </Grid>
                

            </Grid>
            </Box>
        </div>
    );
}
