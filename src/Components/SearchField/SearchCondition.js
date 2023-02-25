import { MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const carBrand = [
    {
        value: "New Car",
        label: "New Car",
    },
    {
        value: "Old Car",
        label: "Old Car",
    },
];
const SearchCondition = () => {
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
                <TextField id="outlined-select-currency" select label="Car Condition">
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

export default SearchCondition;
