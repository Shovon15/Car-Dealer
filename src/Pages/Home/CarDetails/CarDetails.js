import { Box, Button, Card, CardActions, CardMedia, Grid, Paper, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useLoaderData } from "react-router-dom";
const CardDetailWrapper = styled(Box)(({ theme }) => ({
    height: "56vh",
    // width: "100%",
    // backgroundColor: "primary.dark",
    // marginTop: { xs: "3rem", sm: "4rem", md: "7rem " },
    // backgroundColor: theme.palette.mode === "dark" ? "#262626" : "#FFFFFF",
    // padding: theme.spacing(5),
    marginTop: "5rem",
    // display: "flex",
    // justifyContent: "space-between",

    // alignItems: "center",
    borderRadius: "10px",
}));
const CarDetails = () => {
    const product = useLoaderData();
    console.log(product);
    const { car_brand, car_model, car_model_year, car_type, condition, description, image, price, seller_info } =
        product;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: "center",
        color: theme.palette.text.secondary,
        width: { xs: "50%", sm: "50%", md: "100%" },
        // height: "100vh",
        // mb: 10,
    }));
    const GridItem = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        // padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "200px",
    }));
    return (
        <CardDetailWrapper>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-around"
                alignItems="baseline"
            >
                <Item sx={{ textAlign: "center" }}>
                    <Box>
                        <img style={{ width: "10%" }} src={image} alt="ima-ges" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", mx: "3rem", gap: 1, my: 5 }}>
                        <Button variant="contained">button</Button>
                        <Button variant="contained">button</Button>
                    </Box>
                </Item>
                <Item sx={{ width: "100%" }}>
                    <Typography sx={{}}>{car_brand}</Typography>
                    <Typography variant="h4" sx={{}}>
                        {car_model}
                    </Typography>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <GridItem>xs=2</GridItem>
                            </Grid>
                        ))}
                    </Grid>
                </Item>
            </Stack>
        </CardDetailWrapper>
    );
};

export default CarDetails;
