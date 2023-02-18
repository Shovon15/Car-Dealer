import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
// import ResponsiveAppBar from "../../Pages/Shared/Header/Header";
import Header from "../../Pages/Shared/Header/Header";

const Main = () => {
    return (
        <Box>
            {/* <Typography variant="h3">From main</Typography> */}
            <Container>
                <Header />
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
};

export default Main;
