import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

const carYear = [
    {
        value: "2023",
        label: "2023",
    },
    {
        value: "2022",
        label: "2022",
    },
    {
        value: "2021",
        label: "2021",
    },
    {
        value: "2020",
        label: "2020",
    },
    {
        value: "2019",
        label: "2019",
    },
    {
        value: "2018",
        label: "2018",
    },
    {
        value: "2017",
        label: "2017",
    },
    {
        value: "2016",
        label: "2016",
    },
    {
        value: "2015",
        label: "2015",
    },
];
const SearchYear = () => {
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "360px" },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-select-currency" select label="Year Model">
                    {carYear.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    );
};

export default SearchYear;
