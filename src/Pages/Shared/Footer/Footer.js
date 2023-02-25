import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import logo from "../../../assets/logo/logoLight.png";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
    // const Link = styled(Link)(({ theme }) => ({
    //     textDecoration: "none",
    //     textAlign: "center",
    // }));
    return (
        <Box minHeight="300px" sx={{ backgroundColor: "primary.main" }}>
            <Container>
                <Box sx={{ width: "100%", height: "100%", py: 4, textAlign: "center" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <img width="60%" src={logo} alt="logo" sx={{}} />
                        </Grid>
                        <Grid display="flex" direction="column" item xs={12} sm={6} md={3}>
                            <Typography variant="h6">Quick Link</Typography>
                            <Link style={{ textDecoration: "none" }}>
                                <Typography color="primary.white">Home</Typography>
                            </Link>
                            <Link style={{ textDecoration: "none" }}>
                                <Typography color="primary.white">Search</Typography>
                            </Link>
                            <Link style={{ textDecoration: "none" }}>
                                <Typography color="primary.white">Contact</Typography>
                            </Link>
                            <Link style={{ textDecoration: "none" }}>
                                <Typography color="primary.white">About</Typography>
                            </Link>
                        </Grid>
                        <Grid display="flex" direction="column" item xs={12} sm={6} md={3}>
                            <Typography variant="h6">Social Links</Typography>
                            <Box display="flex" sx={{ justifyContent: "center", gap: 2, py: 2 }}>
                                <Link style={{ textDecoration: "none" }}>
                                    <FacebookIcon sx={{ fontSize: "2.5rem", color: "#0000FF" }} />
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <TwitterIcon sx={{ fontSize: "2.5rem", color: "#0000FF" }} />
                                </Link>
                                <Link style={{ textDecoration: "none" }}>
                                    <InstagramIcon sx={{ fontSize: "2.5rem", color: "#fa7e1e" }} />
                                </Link>
                            </Box>
                        </Grid>
                        <Grid display="flex" direction="column" item xs={12} sm={6} md={3}>
                            <Typography variant="h6">Subscribe Now</Typography>
                            <Box display="flex" sx={{ flexDirection: "column", gap: 1, pb: 5 }}>
                                <TextField
                                    sx={{ mt: 2 }}
                                    size="small"
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                />
                                <Button variant="contained" color="primary" sx={{ height: "2.5rem" }}>
                                    Subscribe
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
