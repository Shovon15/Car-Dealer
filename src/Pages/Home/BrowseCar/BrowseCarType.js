import { Container, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import logo from "../../../assets/logo/car-dealer-logo.png";
import { Link } from "react-router-dom";

const BrowseCarType = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center" }}>
                <Box>
                    <Typography variant="h5">Browse By Car Types</Typography>
                </Box>

                <Box>
                    <IconButton
                        sx={{
                            border: (theme) => `1px solid ${value === 0 ? "#959EAD" : theme.palette.primary.main}`,
                            mr: 2,
                            color: "primary.main",
                        }}
                        onClick={() => setValue(value - 1)}
                        disabled={value === 0}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        sx={{
                            border: (theme) =>
                                `1px solid ${value === 5 ? theme.palette.secondary.main : theme.palette.primary.main}`,
                            color: "primary.main",
                        }}
                        onClick={() => setValue(value + 1)}
                        disabled={value === 5}
                    >
                        <ArrowBackIcon
                            // fontSizeLarge
                            sx={{
                                transform: "rotate(180deg)",
                            }}
                        />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    // justifyContent: "space-between",
                    // flexDirection: { xs: "column", sm: "column", md: "row" },
                    alignItems: "center",
                    backgroundColor: "secondary.light",
                    height: "100px",
                    my: 1,
                    // gap: 2,

                    // pr: "10px",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    sx={{
                        mt: 0,
                        "& .Tab": {
                            border: "1px solid red",
                            height: "100px",
                            width: "150px",
                        },
                        "& .MuiTabs-indicator": {
                            display: "none",
                        },
                        "& .Mui-selected": {
                            color: "primary.green",
                            fontWeight: "bold",
                        },
                        "& .MuiButtonBase-root": {
                            textTransform: "capitalize",
                        },
                    }}
                >
                    <Link to="/suv" sx={{ textDecoration: "none" }}>
                        <Tab label="SUV"></Tab>
                    </Link>
                    <Link to="/sedan" sx={{ textDecoration: "none" }}>
                        <Tab label="Sedan" />
                    </Link>
                    <Link to="/hybrid" sx={{ textDecoration: "none" }}>
                        <Tab label="Hybrid" />
                    </Link>
                    <Link to="/crossover" sx={{ textDecoration: "none" }}>
                        <Tab label="Crossover" />
                    </Link>
                    <Link to="/suv" sx={{ textDecoration: "none" }}>
                        <Tab label="Coupe" />
                    </Link>
                    <Link to="/suv" sx={{ textDecoration: "none" }}>
                        <Tab label="Wagon" />
                    </Link>
                </Tabs>
            </Box>
        </Container>
    );
};

export default BrowseCarType;
