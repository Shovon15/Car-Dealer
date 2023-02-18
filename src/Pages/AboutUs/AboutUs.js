import styled from "@emotion/styled";
import { Delete, SaveAlt, Settings } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";

const AboutUs = () => {
    const DeleteButton = styled(Button)({
        backgroundColor: "#913175",
        "&:hover": {
            backgroundColor: "#FC7300",
        },
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(id);
        };
    }, [loading]);

    return (
        <div style={{ marginTop: "100px" }}>
            <Button variant="contained" color="secondary">
                Hello
            </Button>
            <LoadingButton
                loading={loading}
                loadingIndicator="Loading…"
                variant="outlined"
                onClick={() => setLoading(true)}
            >
                Fetch data
            </LoadingButton>
            <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveAlt />}
                variant="outlined"
                onClick={() => setLoading(true)}
            >
                Save
            </LoadingButton>

            <div>
                <Typography variant="h5" component="h1" color="secondary">
                    Use typography to present your design and content as clearly and efficiently as possible.
                </Typography>
            </div>
        </div>
        // <Stack sx={{ mt: "100px", textAlign: "center" }}>
        //     <h1>About us</h1>
        //     <Button variant="contained">Button</Button>
        //     <Button variant="contained">Button</Button>
        //     <Button variant="contained">Button</Button>
        //     <Button variant="contained">Button</Button>
        //     <Button variant="contained">Button</Button>
        //     {/* <ButtonGroup variant="contained">
        //         <Button color="warning" startIcon={<Delete />}>
        //             Delete
        //         </Button>
        //         <DeleteButton>Delete</DeleteButton>
        //         <Button>Button 2</Button>
        //     </ButtonGroup> */}
        // </Stack>
    );
};

export default AboutUs;
