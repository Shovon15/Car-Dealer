import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLoaderData } from "react-router-dom";
// import Product from "../../Pages/Home/Products/Product";
import ProductCard from "../ProductCard/ProductCard";

const CarBodyType = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <Box sx={{ my: 12 }}>
            <Typography>car body type</Typography>

            {products?.length === 0 ? (
                <Typography>no product for show</Typography>
            ) : (
                products.length > 0 && (
                    <Typography>
                        Total {products.length} {products.length === 1 ? "product" : "products"} for
                        {products[0].car_type}
                    </Typography>
                )
            )}
            <Grid container spacing={5} justifyContent="center" sx={{ my: 1 }}>
                {products.map((product) => (
                    <Grid item>
                        <ProductCard key={product._id} product={product}></ProductCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CarBodyType;
