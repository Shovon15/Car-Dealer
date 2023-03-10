import { MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const carBrand = [
    {
        value: "Toyota",
        label: "Toyota",
    },
    {
        value: "Honda",
        label: "Honda",
    },
    {
        value: "Chevrolet",
        label: "Chevrolet",
    },
    {
        value: "Mercedes-Benz",
        label: "Pickup Truck",
    },
    {
        value: "BMW",
        label: "BMW",
    },

    {
        value: "Nissan",
        label: "Nissan",
    },
    {
        value: "Audi",
        label: "Audi",
    },
];
const SearchBrand = () => {
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
