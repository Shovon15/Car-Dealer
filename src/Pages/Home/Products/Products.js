import { Box, Container, Grid, IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import Product from "./Product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ProductData } from "./ProductData";
import SectionTitle from "../../../Components/SectionTitle";

const Products = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <Container>
            <Box sx={{ my: 5 }}>
                {/* <Box
                    sx={{
                        display: "flex",
                        // flexDirection: { xs: "column", sm: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 5,
                    }} 
                >*/}
                <SectionTitle
                    colored="Browse car by body type"
                    // colored="our works"
                    sx={{
                        textAlign: "left",
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        alignItems: "center",
                        gap: 2,
                        // pr: "10px",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        sx={{
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
                        <Tab label="Sedan" />
                        <Tab label="SUV" />
                        <Tab label="Crossover" />
                        <Tab label="Coupe" />
                        <Tab label="Wagon" />
                        <Tab label="Hatchback" />
                        <Tab label="Jeep" />
                        <Tab label="Sports Car" />
                    </Tabs>
                    <Box sx={{}}>
                        <IconButton
                            sx={{
                                border: (theme) =>
                                    `1px solid ${
                                        value === 0 ? theme.palette.secondary.fade : theme.palette.primary.main
                                    }`,
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
                                    `1px solid ${
                                        value === 7 ? theme.palette.secondary.fade : theme.palette.primary.main
                                    }`,
                                color: "primary.main",
                            }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 7}
                        >
                            <ArrowBackIcon
                                sx={{
                                    transform: "rotate(180deg)",
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
                {/* </Box> */}
                <Grid container spacing={3} justifyContent="center" sx={{ my: 1 }}>
                    {ProductData[value].map((image) => (
                        <Grid item>
                            <Product image={image} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;
