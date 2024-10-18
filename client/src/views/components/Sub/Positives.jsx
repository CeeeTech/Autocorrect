import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Positives({positiveText}){
    return(
        <div>
            <Box
            sx={{
                fontFamily: 'Poppins',
                color:'black',
            }}>
            <h5>Positive Aspects</h5>
            </Box>
            <Box
            sx={{
                fontFamily: 'sans-serif',
                color:'black',
                fontWeight: '200',
                fontSize:18,
                textAlign: 'left',
                padding: '0px 10%',
                lineHeight: '2'
            }}>
            {positiveText}
            </Box>
 
        </div>
    )
}

export default Positives