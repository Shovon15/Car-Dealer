import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const currencies = [
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
];
const SearchModel = () => {
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="outlined-select-currency" select label="Car Model">
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </Box>
    );
};

export default SearchModel;
