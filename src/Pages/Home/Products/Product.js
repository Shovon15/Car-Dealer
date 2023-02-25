import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

const Product = ({ image }) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        elevation: 0,
        display: "flex",
        justifyContent: "start",
        boxShadow: "none",
        color: theme.palette.text.secondary,
    }));
    return (
        <Card
            sx={{
                maxWidth: 345,
                ":hover": {
                    boxShadow: 10, // theme.shadows[20]
                },
            }}
        >
            <CardMedia sx={{ height: 200 }} image={image} title="Car" />
            <CardContent sx={{ pb: 0 }}>
                <Typography gutterBottom variant="h5" component="div">
                    Mercedes Benz Car
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item xs={6}>
                        <Item>
                            <DirectionsCarIcon fontSize="small" color="info" />
                            <Typography sx={{ mx: 1, fontSize: "0.8rem" }}>Automatic</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <AddRoadIcon fontSize="small" color="info" />
                            <Typography sx={{ mx: 1, fontSize: "0.8rem" }}> 12.5km /1-L</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <DirectionsCarIcon fontSize="small" color="info" />
                            <Typography sx={{ mx: 1, fontSize: "0.8rem" }}>Model: 2023</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <LocalGasStationIcon fontSize="small" color="info" />
                            <Typography sx={{ mx: 1, fontSize: "0.8rem" }}>Hybrid</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                <Typography variant="h6" component="h2" color="primary.green">
                    $45,500
                </Typography>
                <Button size="medium" variant="contained">
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;
