import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, ListItemText, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MaterialUISwitch } from "../../../Components/ProductCard/MuiSwitch";
import { ColorModeContext } from "../../../Context/ColorModeContext";
import { Settings } from "@mui/icons-material";
import logo from "../../../assets/logo/car-dealer-logo.png";

const drawerWidth = 240;

const navItems = [
    {
        id: 0,
        path: "/home",
        label: "Home",
    },
    {
        id: 1,
        path: "/about",
        label: "About",
    },
    {
        id: 2,
        path: "/home",
        label: "Contact",
    },
];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [settingOpen, setSettingOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const { colorMode } = React.useContext(ColorModeContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleSettingDrawerToggle = () => {
        setSettingOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <img style={{ width: "150px", marginRight: "200px" }} src={logo} alt="logo"></img>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <Link style={{ textDecoration: "none" }} to={`${item.path}`}>
                                <ListItemText primary={item.label} sx={{ color: "primary.green" }} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                <Box sx={{ textAlign: "left", mx: "10px" }}>
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Button sx={{ backgroundColor: "primary.green" }}>Login</Button>
                    </Link>
                </Box>
            </List>
        </Box>
    );
    const settingDrawer = (
        <Box onClick={handleSettingDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h4">Setting</Typography>
            <Divider />
            <List>
                <Box sx={{ textAlign: "left", mx: "10px" }}>
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Button sx={{ backgroundColor: "primary.green" }}>Login</Button>
                    </Link>
                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                        <Button variant="contained" sx={{ backgroundColor: "#21b6ae" }} color="info">
                            signUP
                        </Button>
                    </Link>
                </Box>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "primary.main", boxShadow: "none" }}>
                <Container>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2,
                                display: { md: "none" },
                                backgroundColor: "primary.main",
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{}}>
                            <img style={{ width: "150px" }} src={logo} alt="logo"></img>
                        </Box>

                        <Tabs
                            value={value}
                            onChange={handleChange}
                            sx={{
                                "& button.Mui-selected": { backgroundColor: "green" },
                                // color: "primary.white",
                                // indicator: {
                                //     backgroundColor: "primary.white",
                                // },
                                display: { xs: "none", md: "block" },
                                "& .MuiTabs-indicator": {
                                    textColor: "primary.white",
                                    backgroundColor: "primary.green",
                                },
                            }}
                        >
                            {navItems.map((item) => (
                                <Link key={item.id} style={{ textDecoration: "none" }} to={`${item.path}`}>
                                    <Tab
                                        value={item.id}
                                        onChange={handleChange}
                                        label={item.label}
                                        sx={{
                                            color: "primary.white",
                                        }}
                                        variant="text"
                                        color="primary.white"
                                    />
                                </Link>
                            ))}
                        </Tabs>
                        {/* <Switch onClick={() => setMode(!mode)}></Switch> */}
                        <Stack direction="row" spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
                            {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <Link
                                    to={"/login"}
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    <Button variant="contained" color="secondary">
                                        Login
                                    </Button>
                                </Link>
                            </Box> */}

                            <MaterialUISwitch onClick={colorMode.toggleMode} />
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleSettingDrawerToggle}
                                sx={{
                                    mr: 2,
                                    // display: { md: "none" },
                                    backgroundColor: "primary.main",
                                    "&:hover": {
                                        backgroundColor: "primary.main",
                                    },
                                }}
                            >
                                <Settings />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    // container={container}
                    variant="temporary"
                    // open={state.top}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="nav">
                <Drawer
                    // container={container}
                    anchor="right"
                    variant="temporary"
                    open={settingOpen}
                    onClose={handleSettingDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: "block",
                        // display: "block",
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {settingDrawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;
