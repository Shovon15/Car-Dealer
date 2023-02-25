import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
    return (
        <Box display="flex" justifyContent="center" sx={{ mt: 12 }}>
            <CircularProgress color="secondary" size="3rem" />
        </Box>
    );
};

export default Loader;
