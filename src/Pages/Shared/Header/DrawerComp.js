// import {
//     Drawer,
//     IconButton,
//     List,
//     Link as MaterialLink,
//     ListItemButton,
//     ListItemIcon,
//     ListItemText,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// const pages = ["Home", "About", "Contact"];

// const DrawerComp = () => {
//     const [openDrawer, setOpenDrawer] = useState(false);

//     return (
//         <React.Fragment>
//             <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
//                 <List>
//                     {pages.map((page, index) => (
//                         <ListItemButton key={index}>
//                             <ListItemIcon>
//                                 <ListItemText>
//                                     <MaterialLink component={RouterLink} to={`/${page.toLowerCase()}`}>
//                                         {page}
//                                     </MaterialLink>
//                                 </ListItemText>
//                             </ListItemIcon>
//                         </ListItemButton>
//                     ))}
//                 </List>
//             </Drawer>
//             <IconButton sx={{ color: "white", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
//                 <MenuIcon color="white" />
//             </IconButton>
//         </React.Fragment>
//     );
// };

// export default DrawerComp;

// // {page.toLocaleLowerCase()}
