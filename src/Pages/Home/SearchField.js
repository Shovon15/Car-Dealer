import { Box, Button, Container, Grid, Paper, Stack, styled, TextField, Typography } from "@mui/material";
import React from "react";
import SearchBrand from "../../Components/SearchField/SearchBrand";
import SearchModel from "../../Components/SearchField/SearchModel";
import SearchIcon from "@mui/icons-material/Search";
import SearchBody from "../../Components/SearchField/SearchBody";
import SearchYear from "../../Components/SearchField/SearchYear";

const Item = styled(Paper)(({ theme }) => ({
    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "#fff"),
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    boxShadow: "none",
    borderColor: (theme) => (theme.palette.mode === "dark" ? "grey.800" : "grey.300"),
    // p: 3,
    // borderRadius: 10,
    fontSize: "0.875rem",
    fontWeight: "700",
}));
const SearchField = () => {
    return (
        <Container>
            {/* <Typography variant="h4" sx={{ m: 5 }}>
                Search
            </Typography> */}

            <Grid container spacing={2} justifyContent="center" sx={{ boxShadow: "none", mt: "2rem" }}>
                <Grid sx={{ boxShadow: "none" }}>
                    <Item>
                        <SearchBrand />
                    </Item>
                </Grid>
                <Grid>
                    <Item>
                        <SearchBody />
                    </Item>
                </Grid>
                <Grid>
                    <Item>
                        <SearchYear />
                    </Item>
                </Grid>
                <Grid>
                    <Item>
                        <SearchModel />
                    </Item>
                </Grid>
                <Grid>
                    <Item>
                        <SearchBrand />
                    </Item>
                </Grid>

                <Grid>
                    <Item>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            sx={{ width: "350px", mx: 1, my: 2, py: 1 }}
                            startIcon={<SearchIcon />}
                        >
                            Find Your Car
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SearchField;
