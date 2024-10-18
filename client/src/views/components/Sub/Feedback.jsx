import React, { useEffect } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Feedback({feedbackText}){

    return(
        <div>
            <Box
            sx={{
                fontFamily: 'Poppins',
                color:'black',
            }}>
            <h5>Constructive Feedback</h5>
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
            {feedbackText}
            </Box>
        </div>
    )
}

export default Feedback