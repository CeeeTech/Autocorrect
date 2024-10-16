import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Positives(){
    return(
        <div>
            <Box
            sx={{
                fontFamily: 'Poppins',
                color:'black',
            }}>
            <h4>Positive Aspects</h4>
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
                Interesting Storyline:
            </p>
            </Box>
 
        </div>
    )
}

export default Positives