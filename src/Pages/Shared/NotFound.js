import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    console.log("not found");
    return (
        <Box display="flex" flexDirection="column">
            <Typography>Page Not Found</Typography>
            <Typography>Back to home</Typography>
            <Link to="/">
                <Button variant="outlined">Home</Button>
            </Link>
        </Box>
    );
};

export default NotFound;
