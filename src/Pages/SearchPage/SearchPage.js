import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";

const SearchPage = () => {
    const [services, setServices] = useState([]);
    // const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState("");
    const searchRef = useRef();
    useEffect(
        (params) => {
            fetch(`http://localhost:5000/search/${params.search}`)
                .then((res) => res.json())
                .then((data) => setServices(data));
        },
        [search]
    );

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };
    console.log(services, search);
    return (
        <Box sx={{ mt: 12, gap: 2 }}>
            <TextField inputRef={searchRef} id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="outlined" startIcon={<SearchIcon />} onClick={handleSearch}>
                Search
            </Button>
            {/* <Button onClick={() => setIsAsc(!isAsc)}>{isAsc ? "desc" : "asc"}</Button> */}
        </Box>
    );
};

export default SearchPage;
