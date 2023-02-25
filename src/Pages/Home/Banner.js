import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { ColorModeContext } from "../../Context/ColorModeContext";
import BannerItems from "./BannerItems";
import items from "./imageSlide.json";

const BrandingWrapper = styled(Box)(({ theme }) =>
    // const {mode}= useContext(ColorModeContext) ;
    ({
        height: "56vh",
        width: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "#262626" : "#FFFFFF",
        // backgroundColor: "primary.dark",
        padding: theme.spacing(5),
        // marginTop: { xs: "3rem", sm: "4rem", md: "7rem " },
        marginTop: "5rem",
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
    })
);

const Banner = () => {
    return (
        <Container>
            <BrandingWrapper>
                {/* <Box
                sx={{
                    // height: "100vh",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
            > */}
                <Stack spacing={2} sx={{ px: "2rem" }}>
                    <Typography
                        sx={{
                            fontSize: { xs: ".5rem", sm: ".5rem", md: "2rem" },
                            fontWeight: "bold",
                            // lineHeight: "1.2",
                        }}
                    >
                        Welcome To Car Dealer
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                            fontWeight: "bold",
                            lineHeight: "1.2",
                        }}
                    >
                        Best Way To Find <br /> Your Dream Car
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet
                        maecenas. Feugiat{" "}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Button
                            // outlinedSizeLarge
                            variant="outlined"
                            size="large"
                            // color="success"
                            // fontSize="20"
                            sx={
                                {
                                    // backgrounColor: "primary",
                                }
                            }
                        >
                            Buy A Car
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{
                                backgrounColor: "secondary",
                                // width: "100%",
                                py: 1,
                            }}
                        >
                            Sell My Car
                        </Button>
                    </Box>
                </Stack>

                <Carousel
                    animation="slide"
                    duration="600"
                    interval="4000"
                    indicatorContainerProps={{
                        style: {
                            display: "none",
                        },
                    }}
                    // sx={{ display: "grid", placeItems: "center", width: "100%" }}
                    sx={{ width: "100%", display: { xs: "none", sm: "none", md: "block" } }}
                >
                    {items.map((item) => (
                        <BannerItems key={item.id} item={item} />
                    ))}
                </Carousel>
                {/* </Box> */}
            </BrandingWrapper>
        </Container>
    );
};

export default Banner;
