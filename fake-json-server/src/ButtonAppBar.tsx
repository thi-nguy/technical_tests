import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const pages = ["Schedule", "Leaderboard"];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICON-LEAGUE
          </Typography>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ mx: 6, my: 2, color: "white", display: "block" }}
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/${page}`}
              >
                {page}
              </Link>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
