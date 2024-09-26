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
                xs={12}
                md={10}
                lg={7}
                sx={{
                    background:'#f4f4f6',
                    margin:'auto',
                    padding:5
                }}
            >
                <Typography mt={3}>
                    Select your writing type and let our Al help you make it flawless.
                </Typography>
                <Grid 
                    container
                    mt={3}
                    padding={2}
                    borderRadius={2}
                    sx={{
                        background: 'white',
                    }}
                >
                    <Grid 
                        container 
                        mt={2}
                        justifyContent="center"
                        alignItems="stretch" 
                        direction={'row'}
                    >
                        <Grid 
                            item 
                            lg={3}
                            md={6}
                            xs={12} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: { xs: 2, sm: 3 },
                            }}
                        >
                            <Button 
                                item
                                fullWidth
                                sx={{
                                    margin: 1,
                                    fontSize:'15px',
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #3e72f0 20%, #44cdff 90%)',
                                }}
                            >
                                Persuasive Essay Writing
                            </Button>
                        </Grid>
                        <Grid 
                            item 
                            lg={3}
                            md={6}
                            xs={12} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: { xs: 2, sm: 3 },
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    margin: 1,
                                    fontSize:'15px',
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #f056a6 20%, #fe7dc2 90%)',
                                }}
                            >
                                Text Response Essays
                            </Button>
                        </Grid>
                        <Grid 
                            item 
                            lg={3}
                            md={6}
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: { xs: 2, sm: 3 },
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    marginTop:3,
                                    fontSize:'15px',
                                    margin: 1,
                                    borderRadius: 8,
                                    color: 'white',
                                    height: '100%',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #fda301 20%, #fdd402 90%)',
                                }}
                            >
                                Narrative Writing
                            </Button>
                        </Grid>
                        <Grid 
                            item 
                            lg={3}
                            md={6}
                            xs={12} 
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: { xs: 2, sm: 3 },
                            }}
                        >
                            <Button 
                                fullWidth
                                sx={{
                                    margin: 1,
                                    borderRadius: 8,
                                    color: 'white',
                                    fontSize:'15px',
                                    height: '100%',
                                    textTransform: 'none',
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
                                    padding:1.5,
                                    margin: 2,
                                    fontSize:'15px',
                                    borderRadius: 10,
                                    color: 'white',
                                    textTransform: 'none',
                                    background: 'linear-gradient(90deg, #4F51EE 10%, #4F51EE 10%, #04D2BB 90%)',
                                }}
                            >
                                Letter Writing
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
                                padding:1.5,
                                margin: 2,
                                fontSize:'15px',
                                paddingLeft:8,
                                paddingRight:8,
                                borderRadius: 10,
                                color: 'white',
                                textTransform:'none',
                                background: 'linear-gradient(90deg, #2c65f2 20%, #a865fd 90%)',
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
