import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MdOutlineDarkMode } from "react-icons/md";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black", paddingLeft: "3%" }}
          >
            Where in the World?
          </Typography>
          <Button style={{ color: "black" }}>
            <MdOutlineDarkMode />
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
