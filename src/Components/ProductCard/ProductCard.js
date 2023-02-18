import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid, Paper, styled } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    const { car_model, condition, car_brand, car_model_year, _id, car_type } = product;

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
    // console.log();
    return (
        <Card
            sx={{
                maxWidth: 345,
                ":hover": {
                    boxShadow: 10, // theme.shadows[20]
                },
            }}
        >
            <CardMedia sx={{ height: 200 }} image={product.image} title="green iguana" />
            <CardContent sx={{ pb: 0 }}>
                <Typography variant="h6">{car_brand}</Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {car_model}
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item xs={6}>
                        <Item>
                            <DirectionsCarIcon fontSize="small" color="info" />
                            <Typography sx={{ mx: 1, fontSize: "0.8rem" }}>{condition.transmission}</Typography>
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
                <Link to={`/${car_type}/${_id}`}>
                    <Button size="medium" variant="contained">
                        Details
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};
export default ProductCard;
