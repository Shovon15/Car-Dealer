import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";
const carBody = [
    {
        value: "Sedan",
        label: "Sedan",
    },
    {
        value: "SUV",
        label: "SUV",
    },
    {
        value: "Coupe",
        label: "Coupe",
    },
    {
        value: "Wagon",
        label: "Wagon",
    },
    {
        value: "Hatchback",
        label: "Hatchback",
    },
    {
        value: "Jeep",
        label: "Jeep",
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

const SearchBody = () => {
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
                <TextField id="outlined-select-currency" select label="Body Type">
                    {carBody.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    );
};

export default SearchBody;
