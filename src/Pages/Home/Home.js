// import { Stack } from "@mui/system";
import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import BrowseCarType from "./BrowseCar/BrowseCarType";
import Products from "./Products/Products";
import SearchField from "./SearchField";

const Home = () => {
    return (
        <Box>
            <Banner />
            <SearchField />
            <BrowseCarType />
            <Products />
        </Box>
    );
};

export default Home;
