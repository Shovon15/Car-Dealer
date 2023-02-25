import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Header from "../../Pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const drawerWidth = 240;

function DashboardLayout(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List>
                {/* <ListItemButton> */}
                <ListItemText>products</ListItemText>
                {/* </ListItemButton> */}
            </List>
            <Divider />
            {/* <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <List>
                    {/* <ListItem> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>product Chart</ListItemText>
                    </ListItemButton>
                    {/* </ListItem> */}
                </List>
            </Link>
            <Link to="/dashboard/addproduct" style={{ textDecoration: "none" }}>
                <List>
                    {/* <ListItem> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>Add product</ListItemText>
                    </ListItemButton>
                    {/* </ListItem> */}
                </List>
            </Link>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <List>
                    {/* <ListItem> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>product</ListItemText>
                    </ListItemButton>
                    {/* </ListItem> */}
                </List>
            </Link>
            <Divider />
            <List>
                <ListItemText>Transaction</ListItemText>
            </List>
            <Divider />
            <Link to="/dashboard/transaction" style={{ textDecoration: "none" }}>
                <List>
                    {/* <ListItem> */}
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>Transaction Detail</ListItemText>
                    </ListItemButton>
                    {/* </ListItem> */}
                </List>
            </Link>
            {/* <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <Container>
                <Header />
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        color="transparent"
                        sx={{
                            mt: 7,
                            boxShadow: "none",
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: "none" } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            PaperProps={{
                                sx: {
                                    mt: 8,
                                    maxWidth: "1200px",
                                },
                            }}
                            sx={{
                                // pt: 12,
                                display: { xs: "block", sm: "none" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawerWidth,
                                },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            open
                            PaperProps={{
                                sx: {
                                    mt: 8,
                                    maxWidth: "1200px",
                                },
                            }}
                            sx={{
                                display: { xs: "none", sm: "block" },
                                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, my: 5, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />
                        <Outlet />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default DashboardLayout;
