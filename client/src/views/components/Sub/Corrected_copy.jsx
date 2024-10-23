import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReplyIcon from '@mui/icons-material/Reply';

function Corrected_copy({correctedCopy}){
    const [modifiedText, setModifiedText] = useState("");
    
    const buttonLista = [
        { label: 'Download PDF', background:'#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a'  },
        { label: 'Download Word File', background:'#1c1e9a', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share Word File', background:'#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
        { label: 'Share PDF', background:'#4f50ed', boxShadow: '1.5px 1.5px 5px 0px #1c1e9a' },
    ];

    useEffect(() => {
        setModifiedText(parseModifiedText(correctedCopy))
    } , [correctedCopy])

    const parseModifiedText = (text) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<span style="color: red; text-decoration: line-through;">$1</span>')
            .replace(/\(\((.*?)\)\)/g, '<span style="color: blue;">$1</span>')
            .replace(/##(.*?)##/g, '<span style="color: purple;">$1</span>');
    };
    
    return(
        <>
            <Box 
                fullWidth
                sx={{
                    height: 'auto',
                    py: 5,
                    fontFamily: 'sans-serif: Arial',
                    fontSize:'18px',
                    fontWeight: 500,
                    textAlign: 'center',
                    color: '#4f51ee',
                    textTransform: 'none',
                    lineHeight: '2',    
                    mx: '5%',
                }}
            >

                <Typography variant="p"> 
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
                    </style>

                    <span style={{ fontFamily: 'Galada', fontSize: '38px'  }}>
                        {'Corrected '}  
                    </span> 
                    Copy
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
                    You can make edits if neccessary. The corrected copy can be downloaded as PDF or Word files.
                    They can also be shared in those file formats, for example via email.
                </Typography>
                            
                <Box
                    sx={{
                        display: 'block', // Makes sure the icon takes a full line
                        textAlign: 'center', // Center the icon if needed
                        mt: 0, // Add some margin for spacing
                    }}
                >
                    <ReplyIcon
                        sx={{
                            fontSize: 40,
                            color: '#009e60',
                            transform: 'rotate(250deg) scaleY(-1)',
                        }}
                    />
                </Box>

                <Box
                sx={{
                    height: 'auto',
                    fontFamily: 'Poppins',
                    mt: 5,
                    mb: 4,
                    py: 5,
                    px: 5,
                    background: 'white',
                    borderRadius: '8px',
                    border:'3.5px, solid, #1c8b9a',
                    boxShadow: '0px 0px 12px 0px #1c8b9a',
                    textAlign: 'left'
                }}
                >   {modifiedText}
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center',   
                        gap:3
                    }}>
                        {buttonLista.map((item, index) => (
                            <Button
                                key={index}
                                fullWidth
                                sx={{
                                    flexBasis: { xs: '100%', sm: '45%', md: '18%' },
                                    height:45,
                                    borderRadius: 3,
                                    border:'2px, solid, white',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontSize: 14,
                                    color: 'white',
                                    background: item.background,
                                    boxShadow: item.boxShadow,
                                    margin:2
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                </Box>
            </Box>   
        </>
    )
}

export default Corrected_copy