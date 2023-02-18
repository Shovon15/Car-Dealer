import { MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const carBrand = [
    {
        value: "Sedan",
        label: "Sedan",
    },
    {
        value: "SUV",
        label: "SUV",
    },
    {
        value: "Crossover",
        label: "Crossover",
    },
    {
        value: "Pickup Truck",
        label: "Pickup Truck",
    },
];
const SearchBrand = () => {
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "350px" },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-select-currency" select label="Brand Name">
                    {carBrand.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    );
};

export default SearchBrand;
