import { Box, Button, Container, Grid, Paper, Stack, styled, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import SearchBrand from "../../Components/SearchField/SearchBrand";
import SearchModel from "../../Components/SearchField/SearchModel";
import SearchIcon from "@mui/icons-material/Search";
import SearchBody from "../../Components/SearchField/SearchBody";
import SearchYear from "../../Components/SearchField/SearchYear";
import { Link } from "react-router-dom";
import SearchCondition from "../../Components/SearchField/SearchCondition";

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
    const searchRef = useRef();
    const handleSearch = () => {
        console.log(searchRef.current.value);
    };
    return (
        <Container>
            <Grid container spacing={2} justifyContent="center" sx={{ boxShadow: "none", mt: "2rem" }}>
                <Grid>
                    <Item>
                        <SearchCondition />
                    </Item>
                </Grid>
                <Grid>
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
                        <Link to="/search" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                sx={{ width: "360px", mx: 1, my: 2, py: 1 }}
                                startIcon={<SearchIcon />}
                                // onClick={handleSearch}
                            >
                                Find Your Car
                            </Button>
                        </Link>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SearchField;
