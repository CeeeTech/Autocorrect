import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Feedback(){
    return(
        <div>
            <Box
            sx={{
                fontFamily: 'Poppins',
                color:'black',
            }}>
            <h4>Constructive Feedback</h4>
            </Box>
            <Box
            sx={{
                fontFamily: 'sans-serif',
                color:'black',
                fontWeight: '700',
                fontSize:22,
                textAlign: 'left',
                paddingLeft: '120px',
                minHeight: '180px'
            }}>
            <p>
                Exposition:
            </p>
            </Box>
            <Box
            sx={{
                fontFamily: 'sans-serif',
                color:'black',
                fontWeight: '700',
                fontSize:22,
                textAlign: 'left',
                paddingLeft: '120px',
                minHeight: '180px'
            }}>
            <p>
                Inciting Incident:
            </p>
            </Box>

        </div>
    )
}

export default Feedback