import { Button, Paper } from "@mui/material";
import React from "react";

const BannerItems = ({ item }) => {
    // console.log(item.image);
    return (
        <Paper sx={{ backgroundColor: "transparent", boxShadow: "none", opacity: "4" }}>
            <img src={item.image} alt="car" style={{ width: "100%", height: "100%" }} />
        </Paper>
    );
};

export default BannerItems;
