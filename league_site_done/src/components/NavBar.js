import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import { Link } from "react-router-dom";
import { ReactComponent as LeagueIcon } from "../assets/logo.svg";

const NavBar = () => {
  const pages = [
    { name: "Schedule", url: "/schedule" },
    { name: "Leaderboard", url: "/leaderboard" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography component="div" sx={{ flexGrow: 1, ml: 7.5 }}>
            <SvgIcon
              sx={{ transform: "scale(4.6)" }}
              component={LeagueIcon}
              inheritViewBox
            />
          </Typography>
          <Box sx={{ display: "flex" }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ px: 2.5 }}
                startIcon={
                  <img
                    src={
                      page.name === "Schedule"
                        ? require("../assets/schedule.png")
                        : require("../assets/leaderboard.png")
                    }
                    alt={`${page.name} icon`}
                    style={{
                      height: "25px",
                    }}
                  />
                }
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={page.url}
                >
                  <Typography>{page.name}</Typography>
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
